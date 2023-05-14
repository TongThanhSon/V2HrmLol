import { renderCFDlg, locale, dialog, focus } from '../common/index';
import { getCell, isHiddenRow, isHiddenCol, getRowHeight, skipDefaultValue } from '../../workbook/base/index';
import { getRangeIndexes, checkDateFormat, applyCF, isNumber, getCellIndexes } from '../../workbook/index';
import { isDateTime, dateToInt, applyCellFormat, clearCF } from '../../workbook/common/index';
import { setCFRule, getCellAddress } from '../../workbook/common/index';
import { extend, getNumberDependable, isNullOrUndefined, removeClass } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
/**
 * Represents Conditional Formatting support for Spreadsheet.
 */
var ConditionalFormatting = /** @class */ (function () {
    /**
     * Constructor for the Spreadsheet Conditional Formatting module.
     *
     * @param {Spreadsheet} parent - Constructor for the Spreadsheet Conditional Formatting module.
     */
    function ConditionalFormatting(parent) {
        this.parent = parent;
        this.addEventListener();
    }
    /**
     * To destroy the Conditional Formatting module.
     *
     * @returns {void} - To destroy the Conditional Formatting module.
     */
    ConditionalFormatting.prototype.destroy = function () {
        this.removeEventListener();
    };
    ConditionalFormatting.prototype.addEventListener = function () {
        this.parent.on(applyCF, this.applyCF, this);
        this.parent.on(renderCFDlg, this.renderCFDlg, this);
        this.parent.on(clearCF, this.clearCF, this);
    };
    ConditionalFormatting.prototype.removeEventListener = function () {
        if (!this.parent.isDestroyed) {
            this.parent.off(applyCF, this.applyCF);
            this.parent.off(renderCFDlg, this.renderCFDlg);
            this.parent.off(clearCF, this.clearCF);
        }
    };
    ConditionalFormatting.prototype.clearCF = function (args) {
        var _this = this;
        var sheet = this.parent.getActiveSheet();
        var clearFn = function (rIdx, cIdx, cell, td) {
            removeClass([td], ['e-redft', 'e-yellowft', 'e-greenft', 'e-redf', 'e-redt', 'e-iconset']);
            var styleVal;
            var style;
            ['backgroundColor', 'color'].forEach(function (styleProp) {
                if (td.style[styleProp]) {
                    td.style[styleProp] = '';
                    styleVal = cell && cell.style && cell.style[styleProp] || _this.parent.commonCellStyle[styleProp];
                    if (styleVal) {
                        style = {};
                        style[styleProp] = styleVal;
                        _this.parent.notify(applyCellFormat, { style: style, rowIdx: rIdx, colIdx: cIdx, cell: td });
                    }
                }
            });
            var cfEle;
            ['.e-cf-databar', '.e-iconsetspan'].forEach(function (clsSelector) {
                cfEle = td.querySelector(clsSelector);
                if (cfEle) {
                    td.removeChild(cfEle);
                    td.textContent = _this.parent.getDisplayText(cell);
                }
            });
        };
        this.updateRange(sheet, args.indexes, this.parent.frozenRowCount(sheet), this.parent.frozenColCount(sheet), getCellIndexes(sheet.topLeftCell), clearFn);
    };
    ConditionalFormatting.prototype.renderCFDlg = function (args) {
        var _this = this;
        var l10n = this.parent.serviceLocator.getService(locale);
        var dialogInst = this.parent.serviceLocator.getService(dialog);
        dialogInst.show({
            width: 375, showCloseIcon: true, isModal: true, cssClass: 'e-conditionalformatting-dlg',
            header: args.action.replace('...', ''),
            target: this.parent.element,
            beforeOpen: function () {
                dialogInst.dialogInstance.content = _this.cfDlgContent(args.action);
                dialogInst.dialogInstance.dataBind();
                focus(_this.parent.element);
            },
            buttons: [{
                    buttonModel: { content: l10n.getConstant('Ok'), isPrimary: true },
                    click: function () {
                        _this.dlgClickHandler(args.action);
                        dialogInst.hide();
                    }
                }]
        });
    };
    ConditionalFormatting.prototype.dlgClickHandler = function (action) {
        var value1 = '';
        var value2 = '';
        var dlgCont = this.parent.element.querySelector('.e-conditionalformatting-dlg').
            getElementsByClassName('e-dlg-content')[0].querySelector('.e-cf-dlg');
        var mainCont = dlgCont.querySelector('.e-cfmain');
        var inpEle;
        if (mainCont) {
            inpEle = mainCont.getElementsByTagName('input')[0];
            if (inpEle && inpEle.parentElement.classList.contains('e-cfmain')) {
                value1 = mainCont.getElementsByTagName('input')[0].value;
            }
            value2 = mainCont.getElementsByTagName('input')[1] ?
                dlgCont.querySelector('.e-cfmain').getElementsByTagName('input')[1].value : '';
            var currencySymbol = getNumberDependable(this.parent.locale, '');
            value1 = value1.split(currencySymbol).join('').split(',').join('');
            value2 = value2.split(currencySymbol).join('').split(',').join('');
        }
        var cf = {
            type: action === 'Duplicate Values...' ? inpEle.value : this.getType(action),
            cFColor: this.getCFColor(dlgCont.querySelector('.e-cfsub').getElementsByTagName('input')[0].value),
            range: this.parent.getActiveSheet().selectedRange
        };
        cf.value = value1 !== '' ? (value1 + (value2 !== '' ? ',' + value2 : '')) : value2;
        this.parent.notify(setCFRule, { cfModel: cf, isAction: true });
    };
    ConditionalFormatting.prototype.getType = function (action) {
        var l10n = this.parent.serviceLocator.getService(locale);
        var result;
        switch (action) {
            case l10n.getConstant('GreaterThan') + '...':
                result = 'GreaterThan';
                break;
            case l10n.getConstant('LessThan') + '...':
                result = 'LessThan';
                break;
            case l10n.getConstant('Between') + '...':
                result = 'Between';
                break;
            case l10n.getConstant('CFEqualTo') + '...':
                result = 'EqualTo';
                break;
            case l10n.getConstant('TextThatContains') + '...':
                result = 'ContainsText';
                break;
            case l10n.getConstant('ADateOccuring') + '...':
                result = 'DateOccur';
                break;
            case l10n.getConstant('Top10Items') + '...':
                result = 'Top10Items';
                break;
            case l10n.getConstant('Bottom10Items') + '...':
                result = 'Bottom10Items';
                break;
            case l10n.getConstant('Top10') + ' %...':
                result = 'Top10Percentage';
                break;
            case l10n.getConstant('Bottom10') + ' %...':
                result = 'Bottom10Percentage';
                break;
            case l10n.getConstant('AboveAverage') + '...':
                result = 'AboveAverage';
                break;
            case l10n.getConstant('BelowAverage') + '...':
                result = 'BelowAverage';
                break;
        }
        return result;
    };
    ConditionalFormatting.prototype.getCFColor = function (value) {
        var l10n = this.parent.serviceLocator.getService(locale);
        var result = 'RedFT';
        switch (value) {
            case l10n.getConstant('LightRedFillWithDarkRedText'):
                result = 'RedFT';
                break;
            case l10n.getConstant('YellowFillWithDarkYellowText'):
                result = 'YellowFT';
                break;
            case l10n.getConstant('GreenFillWithDarkGreenText'):
                result = 'GreenFT';
                break;
            case l10n.getConstant('RedFill'):
                result = 'RedF';
                break;
            case l10n.getConstant('RedText'):
                result = 'RedT';
                break;
        }
        return result;
    };
    ConditionalFormatting.prototype.cfDlgContent = function (action) {
        var dlgText = this.getDlgText(action);
        var l10n = this.parent.serviceLocator.getService(locale);
        var dlgContent = this.parent.createElement('div', { className: 'e-cf-dlg' });
        var mainDiv = this.parent.createElement('div', { className: 'e-cfmain' });
        var subDiv = this.parent.createElement('div', { className: 'e-cfsub' });
        var value1Text = this.parent.createElement('span', { className: 'e-header e-top-header', innerHTML: dlgText });
        var value1Inp = this.parent.createElement('input', { className: 'e-input', id: 'valueInput', attrs: { type: 'text' } });
        var duplicateSelectEle = this.parent.createElement('input', { className: 'e-select' });
        var subDivText = this.parent.createElement('span', { className: 'e-header', innerHTML: l10n.getConstant('With') });
        var colorSelectEle = this.parent.createElement('input', { className: 'e-select' });
        dlgContent.appendChild(mainDiv);
        dlgContent.appendChild(subDiv);
        mainDiv.appendChild(value1Text);
        var setValidation;
        if (action !== l10n.getConstant('DuplicateValues') + '...') {
            if (action !== l10n.getConstant('AboveAverage') + '...' && action !== l10n.getConstant('BelowAverage') + '...') {
                mainDiv.appendChild(value1Inp);
                setValidation = true;
                var percent = action === l10n.getConstant('Top10') + ' %...' || action === l10n.getConstant('Bottom10') + ' %...';
                if (action === l10n.getConstant('Top10Items') + '...' || action === l10n.getConstant('Bottom10Items') + '...' || percent) {
                    value1Inp.maxLength = percent ? 3 : 4;
                    var numeric = new NumericTextBox({ value: 10, min: 1, max: percent ? 100 : 1000, format: '###' });
                    numeric.appendTo(value1Inp);
                }
            }
        }
        else {
            mainDiv.appendChild(duplicateSelectEle);
            var dupData = [
                { text: l10n.getConstant('Duplicate'), id: 'duplicate' },
                { text: l10n.getConstant('Unique'), id: 'unique' }
            ];
            var dupList = new DropDownList({
                dataSource: dupData,
                index: 0,
                popupHeight: '200px'
            });
            dupList.appendTo(duplicateSelectEle);
        }
        if (action === l10n.getConstant('Between') + '...') {
            var value2Text = this.parent.createElement('span', { className: 'e-header e-header-2', innerHTML: l10n.getConstant('And') });
            var value2Inp = this.parent.createElement('input', { className: 'e-input e-between' });
            mainDiv.appendChild(value2Text);
            mainDiv.appendChild(value2Inp);
            value2Inp.addEventListener('input', this.validateCFInput.bind(this));
        }
        if (setValidation) {
            this.validateCFInput({ target: value1Inp });
            value1Inp.addEventListener('input', this.validateCFInput.bind(this));
        }
        subDiv.appendChild(subDivText);
        subDiv.appendChild(colorSelectEle);
        var colorData = [
            { text: l10n.getConstant('LightRedFillWithDarkRedText'), value: 'redft', id: 'redft' },
            { text: l10n.getConstant('YellowFillWithDarkYellowText'), id: 'yellowft' },
            { text: l10n.getConstant('GreenFillWithDarkGreenText'), id: 'greenft' },
            { text: l10n.getConstant('RedFill'), id: 'redf' },
            { text: l10n.getConstant('RedText'), id: 'redt' }
        ];
        var colorList = new DropDownList({
            dataSource: colorData,
            index: 0,
            popupHeight: '200px'
        });
        colorList.appendTo(colorSelectEle);
        return dlgContent;
    };
    ConditionalFormatting.prototype.validateCFInput = function (e) {
        var dialogInst = this.parent.serviceLocator.getService(dialog);
        var text = e.target.value;
        var btn = dialogInst.dialogInstance.element.getElementsByClassName('e-primary')[0];
        if (text && (e.target.classList.contains('e-between') || e.target.parentElement.querySelector('.e-between'))) {
            text = e.target.parentElement.querySelector((e.target.classList.contains('e-between') ? '.e-input' : '.e-between')).value;
        }
        btn.disabled = !(text.trim());
    };
    ConditionalFormatting.prototype.checkCellHandler = function (rowIdx, colIdx, cf) {
        var ranges = cf.range.trim().split(',');
        for (var i = 0; i < ranges.length; i++) {
            var indexes = getRangeIndexes(ranges[i].includes(':') ? ranges[i] : ranges[i] + ":" + ranges[i]);
            if (rowIdx >= indexes[0] && rowIdx <= indexes[2] && colIdx >= indexes[1] && colIdx <= indexes[3]) {
                return true;
            }
        }
        return false;
    };
    ConditionalFormatting.prototype.checkRange = function (indexes, cf) {
        var ranges = cf.range.trim().split(',');
        var left;
        var right;
        var top;
        var bottom;
        var cfIdx;
        var checkRange = function (idx) {
            for (var i = 0; i < ranges.length; i++) {
                cfIdx = getRangeIndexes(ranges[i].includes(':') ? ranges[i] : ranges[i] + ":" + ranges[i]);
                if (idx[0] <= cfIdx[0] && idx[1] <= cfIdx[1] && idx[2] >= cfIdx[2] && idx[3] >= cfIdx[3]) {
                    return true;
                }
                else {
                    top = idx[0] >= cfIdx[0] && idx[0] <= cfIdx[2];
                    bottom = idx[2] >= cfIdx[0] && idx[2] <= cfIdx[2];
                    left = idx[1] >= cfIdx[1] && idx[1] <= cfIdx[3];
                    right = idx[3] >= cfIdx[1] && idx[3] <= cfIdx[3];
                    if (top && bottom) {
                        if (left || right || (idx[1] < cfIdx[1] && idx[3] > cfIdx[3])) {
                            if (idx[0] - cfIdx[0] > 0) {
                                return true;
                            }
                            if (cfIdx[2] - idx[2] > 0) {
                                return true;
                            }
                        }
                        if (left && idx[1] !== cfIdx[1]) {
                            return true;
                        }
                        if (right && idx[3] !== cfIdx[3]) {
                            return true;
                        }
                    }
                    else if (left && right) {
                        if (top || bottom || (idx[0] < cfIdx[0] && idx[2] > cfIdx[2])) {
                            if (idx[1] - cfIdx[1] > 0) {
                                return true;
                            }
                            if (cfIdx[3] - idx[3] > 0) {
                                return true;
                            }
                        }
                        if (top) {
                            if (idx[0] !== cfIdx[0]) {
                                return true;
                            }
                        }
                        else if (bottom && idx[2] !== cfIdx[2]) {
                            return true;
                        }
                    }
                    else if (top || bottom) {
                        if (left) {
                            if (idx[1] !== cfIdx[1]) {
                                return true;
                            }
                            if (idx[0] - cfIdx[0] > 0) {
                                return true;
                            }
                            else if (cfIdx[2] - idx[2] > 0) {
                                return true;
                            }
                        }
                        else if (right) {
                            if (idx[3] !== cfIdx[3]) {
                                return true;
                            }
                            if (idx[0] - cfIdx[0] > 0) {
                                return true;
                            }
                            else if (cfIdx[2] - idx[2] > 0) {
                                return true;
                            }
                        }
                    }
                }
            }
            return false;
        };
        for (var j = 0; j < indexes.length; j++) {
            if (checkRange(indexes[j])) {
                return true;
            }
        }
        return false;
    };
    ConditionalFormatting.prototype.getDlgText = function (action) {
        var l10n = this.parent.serviceLocator.getService(locale);
        var result = '';
        switch (action) {
            case l10n.getConstant('GreaterThan') + '...':
                result = l10n.getConstant('FormatCellsGreaterThan');
                break;
            case l10n.getConstant('LessThan') + '...':
                result = l10n.getConstant('FormatCellsLessThan');
                break;
            case l10n.getConstant('Between') + '...':
                result = l10n.getConstant('FormatCellsBetween');
                break;
            case l10n.getConstant('CFEqualTo') + '...':
                result = l10n.getConstant('FormatCellsEqualTo');
                break;
            case l10n.getConstant('TextThatContains') + '...':
                result = l10n.getConstant('FormatCellsThatContainTheText');
                break;
            case l10n.getConstant('ADateOccuring') + '...':
                result = l10n.getConstant('FormatCellsThatContainADateOccurring');
                break;
            case l10n.getConstant('DuplicateValues') + '...':
                result = l10n.getConstant('FormatCellsDuplicate');
                break;
            case l10n.getConstant('Top10Items') + '...':
                result = l10n.getConstant('FormatCellsTop');
                break;
            case l10n.getConstant('Top10') + ' %...':
                result = l10n.getConstant('FormatCellsTop');
                break;
            case l10n.getConstant('Bottom10Items') + '...':
                result = l10n.getConstant('FormatCellsBottom');
                break;
            case l10n.getConstant('Bottom10') + ' %...':
                result = l10n.getConstant('FormatCellsBottom');
                break;
            case l10n.getConstant('AboveAverage') + '...':
                result = l10n.getConstant('FormatCellsAbove');
                break;
            case l10n.getConstant('BelowAverage') + '...':
                result = l10n.getConstant('FormatCellsBelow');
                break;
        }
        return result;
    };
    ConditionalFormatting.prototype.updateResult = function (cf, sheet, isDataBar, isColorScale, isAverage, isTopBottom, isIconSets, input) {
        var valueObj = {};
        var dupValueObj = {};
        var rangeArr = cf.range.split(',');
        var result = [];
        var rangeIndexes;
        var val;
        var count;
        var updateFn;
        if (isDataBar) {
            updateFn = function () {
                if (isNumber(val)) {
                    var intVal = parseInt(val, 10);
                    if (intVal >= 0) {
                        if (result[0] === undefined || intVal > result[0]) {
                            result[0] = intVal;
                        }
                    }
                    else if (result[1] === undefined || intVal < result[1]) {
                        result[1] = intVal;
                    }
                }
            };
        }
        else if (isColorScale) {
            updateFn = function () {
                if (isNumber(val)) {
                    var intVal = parseFloat(val);
                    result.push(Number(intVal));
                }
            };
        }
        else if (isAverage) {
            result = [0, 0];
            updateFn = function () {
                if (isNumber(val)) {
                    result[0] += parseFloat(val);
                    result[1]++;
                }
            };
        }
        else if (isTopBottom) {
            count = 0;
            updateFn = function () {
                if (isNumber(val)) {
                    result.push(parseFloat(val));
                }
            };
        }
        else if (isIconSets) {
            updateFn = function () {
                if (isNumber(val)) {
                    var intVal = parseInt(val, 10);
                    if (result[0] === undefined || intVal < result[0]) {
                        result[0] = intVal;
                    }
                    if (result[1] === undefined || intVal > result[1]) {
                        result[1] = intVal;
                    }
                }
            };
        }
        else {
            updateFn = function () {
                if (valueObj[val]) {
                    if (!dupValueObj[val]) {
                        dupValueObj[val] = true;
                        result.push(val);
                    }
                }
                else {
                    valueObj[val] = true;
                }
            };
        }
        var cell;
        for (var rangeIdx = 0; rangeIdx < rangeArr.length; rangeIdx++) {
            rangeIndexes = getRangeIndexes(rangeArr[rangeIdx]);
            for (var i = rangeIndexes[0]; i <= rangeIndexes[2]; i++) {
                for (var j = rangeIndexes[1]; j <= rangeIndexes[3]; j++) {
                    cell = getCell(i, j, sheet, false, true);
                    if (!isNullOrUndefined(cell.value)) {
                        val = cell.value.toString().toLowerCase();
                        updateFn();
                    }
                    else if (cell.formula) {
                        this.parent.notify('calculateFormula', { cell: cell, rowIdx: i, colIdx: j, sheetIndex: this.parent.activeSheetIndex });
                        val = cell.value.toString().toLowerCase();
                        updateFn();
                    }
                    count++;
                }
            }
        }
        if (isColorScale || isTopBottom) {
            result = result.sort(function (n1, n2) { return n1 - n2; });
            if (!cf.type.includes('Bottom')) {
                result = result.reverse();
            }
            if (isTopBottom) {
                var endIdx = parseFloat(input);
                if (cf.type.includes('Percentage')) {
                    endIdx = Math.round(endIdx / (100 / count));
                    endIdx = endIdx ? endIdx : 1;
                }
                result = result.slice(0, endIdx);
            }
        }
        else if (isAverage) {
            result = [result[0] / result[1]];
            if (!result[0]) {
                result = [];
            }
        }
        cf.result = result;
    };
    ConditionalFormatting.prototype.applyCF = function (args) {
        var checkRange = !args.cfModel;
        var sheet = this.parent.getActiveSheet();
        var cfRule = args.cfModel || sheet.conditionalFormats;
        var indexes = [args.indexes];
        if (args.refreshAll) {
            indexes = [[this.parent.viewport.topIndex + this.parent.frozenRowCount(sheet), this.parent.viewport.leftIndex +
                        this.parent.frozenColCount(sheet), this.parent.viewport.bottomIndex, this.parent.viewport.rightIndex]];
            if (sheet.frozenRows || sheet.frozenColumns) {
                var froezenRow = this.parent.frozenRowCount(sheet);
                var froezenCol = this.parent.frozenColCount(sheet);
                var topLeftCell = getCellIndexes(sheet.topLeftCell);
                if (froezenRow && froezenCol) {
                    indexes.push([topLeftCell[0], topLeftCell[1], froezenRow - 1, froezenCol - 1]);
                    var paneTopLeftCell = getCellIndexes(sheet.paneTopLeftCell);
                    indexes.push([paneTopLeftCell[0], topLeftCell[1], this.parent.viewport.bottomIndex, froezenCol - 1]);
                }
                if (froezenRow) {
                    indexes.push([topLeftCell[0], this.parent.viewport.leftIndex + froezenCol, froezenRow - 1,
                        this.parent.viewport.rightIndex]);
                }
                if (froezenCol) {
                    indexes.push([this.parent.viewport.topIndex + froezenRow, topLeftCell[1], this.parent.viewport.bottomIndex,
                        froezenCol - 1]);
                }
            }
        }
        for (var i = cfRule.length - 1; i >= 0; i--) {
            if (checkRange && (indexes[0].length === 2 ? !this.checkCellHandler(args.indexes[0], args.indexes[1], cfRule[i]) :
                !this.checkRange(indexes, cfRule[i]))) {
                continue;
            }
            this.updateCF(args, sheet, cfRule[i]);
        }
    };
    ConditionalFormatting.prototype.updateCF = function (args, sheet, cf) {
        var _this = this;
        var value1;
        var value2;
        if (cf.value) {
            var valueArr = cf.value.split(',').filter(function (value) { return !!value.trim(); });
            if (valueArr.length > 1) {
                if (valueArr[0].split('(').length > 1) {
                    var valueStr = '';
                    for (var idx = 0; idx < valueArr.length; idx++) {
                        valueStr += valueArr[idx] + ',';
                        if (valueStr.split('(').length === valueStr.split(')').length && value1 === undefined) {
                            value1 = valueStr.substring(0, valueStr.length - 1);
                            valueStr = '';
                        }
                    }
                    value2 = valueStr.substring(0, valueStr.length - 1);
                }
                else {
                    value1 = valueArr[0];
                    for (var idx = 1; idx < valueArr.length; idx++) {
                        value2 += idx + 1 === valueArr.length ? valueArr[idx] : valueArr[idx] + ',';
                    }
                }
            }
            else {
                value1 = valueArr[0] || cf.value;
            }
        }
        if (!cf.type) {
            cf.type = 'GreaterThan';
        }
        var style;
        if (cf.format && cf.format.style) {
            style = skipDefaultValue(cf.format.style, true);
            if (!Object.keys(style).length && !cf.cFColor) {
                cf.cFColor = 'RedFT';
            }
        }
        else {
            style = {};
            if (!cf.cFColor) {
                cf.cFColor = 'RedFT';
            }
        }
        var isAverage;
        var isTopBottom;
        var isIconSets;
        var isDataBar = cf.type.includes('DataBar');
        var isColorScale = cf.type.includes('ColorScale');
        if ((!args.isRender || !cf.result) && (cf.type === 'Duplicate' || cf.type === 'Unique' || isDataBar || isColorScale ||
            (isAverage = cf.type.includes('Average')) || (isTopBottom = cf.type.includes('10') && isNumber(value1)) ||
            (isIconSets = (cf.type.includes('Three') || cf.type.includes('Four') || cf.type.includes('Five'))))) {
            this.updateResult(cf, sheet, isDataBar, isColorScale, isAverage, isTopBottom, isIconSets, value1);
        }
        var updateCF = function (rIdx, cIdx, cell, td) {
            var cellVal = cell && !isNullOrUndefined(cell.value) ? cell.value.toString() : '';
            var isApply;
            var dateEventArgs;
            var isValueCFRule = true;
            switch (cf.type) {
                case 'GreaterThan':
                case 'LessThan':
                    isApply = _this.isGreaterThanLessThan(cf, cellVal, value1);
                    break;
                case 'Between':
                    isApply = isNumber(cellVal) && _this.isBetWeen(cf, cellVal, value1, value2);
                    break;
                case 'EqualTo':
                    isApply = isNumber(cellVal) && _this.isEqualTo(cf, cellVal, value1);
                    break;
                case 'ContainsText':
                    isApply = cellVal && _this.isContainsText(cellVal, value1);
                    break;
                case 'DateOccur':
                    dateEventArgs = { value: value1, cell: {}, updatedVal: '' };
                    _this.parent.notify(checkDateFormat, dateEventArgs);
                    isApply = cellVal === dateEventArgs.updatedVal;
                    break;
                case 'Unique':
                    isApply = cf.result.indexOf(cellVal.toLowerCase()) === -1;
                    break;
                case 'Duplicate':
                    isApply = cf.result.indexOf(cellVal.toLowerCase()) > -1;
                    break;
                case 'Top10Items':
                case 'Bottom10Items':
                case 'Top10Percentage':
                case 'Bottom10Percentage':
                    if (cf.result) {
                        var value = parseFloat(cellVal);
                        if (isDateTime(cellVal)) {
                            value = dateToInt(cellVal);
                        }
                        isApply = cf.result.indexOf(value) > -1;
                    }
                    break;
                case 'AboveAverage':
                    isApply = cf.result.length && parseFloat(cellVal) > cf.result[0];
                    break;
                case 'BelowAverage':
                    isApply = cf.result.length && parseFloat(cellVal) < cf.result[0];
                    break;
                default:
                    isValueCFRule = false;
                    if (isDataBar) {
                        _this.applyDataBars(cellVal, cf, td, rIdx);
                    }
                    else if (isColorScale) {
                        _this.applyColorScale(cellVal, cf, td, cell, rIdx, cIdx);
                    }
                    else {
                        _this.applyIconSet(cellVal, cf, td);
                    }
                    break;
            }
            if (args.isAction && isValueCFRule) {
                _this.parent.trigger('beforeConditionalFormat', { conditionalFormat: cf, cell: cell, element: td, apply: isApply,
                    address: getCellAddress(rIdx, cIdx) });
                if (!isApply) {
                    var style_1;
                    if (cf.cFColor) {
                        if (td.className.includes('e-' + cf.cFColor.toLowerCase())) {
                            td.classList.remove('e-' + cf.cFColor.toLowerCase());
                            td.style.backgroundColor = '';
                            td.style.color = '';
                            style_1 = extend({}, _this.parent.commonCellStyle, cell && cell.style);
                            if (style_1.backgroundColor || style_1.color) {
                                _this.parent.notify(applyCellFormat, { rowIdx: rIdx, colIdx: cIdx, cell: td,
                                    style: { backgroundColor: style_1.backgroundColor, color: style_1.color } });
                            }
                        }
                    }
                    else {
                        td.removeAttribute('style');
                        style_1 = extend({}, _this.parent.commonCellStyle, cell && cell.style);
                        if (Object.keys(style_1).length) {
                            _this.parent.notify(applyCellFormat, { style: style_1, rowIdx: rIdx, colIdx: cIdx, cell: td });
                        }
                    }
                }
            }
            if (isApply) {
                removeClass([td], ['e-redft', 'e-yellowft', 'e-greenft', 'e-redf', 'e-redt']);
                if (cf.cFColor) {
                    td.classList.add('e-' + cf.cFColor.toLowerCase());
                    _this.setCFStyle(style, cf);
                }
                Object.assign(td.style, style);
            }
        };
        if (args.ele) {
            updateCF(args.indexes[0], args.indexes[1], args.cell, args.ele);
        }
        else {
            var rangeArr = cf.range.split(',');
            var frozenRow = this.parent.frozenRowCount(sheet);
            var frozenCol = this.parent.frozenColCount(sheet);
            var topLeftIdx = getCellIndexes(sheet.topLeftCell);
            for (var i = 0; i < rangeArr.length; i++) {
                this.updateRange(sheet, getRangeIndexes(rangeArr[i]), frozenRow, frozenCol, topLeftIdx, updateCF);
            }
        }
    };
    ConditionalFormatting.prototype.updateRange = function (sheet, rangeIdx, frozenRow, frozenCol, topLeftIdx, invokeFn) {
        rangeIdx[0] = rangeIdx[0] < frozenRow ? (rangeIdx[0] < topLeftIdx[0] ? topLeftIdx[0] : rangeIdx[0]) :
            (rangeIdx[0] < this.parent.viewport.topIndex + frozenRow ? this.parent.viewport.topIndex + frozenRow : rangeIdx[0]);
        rangeIdx[1] = rangeIdx[1] < frozenCol ? (rangeIdx[1] < topLeftIdx[1] ? topLeftIdx[1] : rangeIdx[1]) :
            (rangeIdx[1] < this.parent.viewport.leftIndex + frozenCol ? this.parent.viewport.leftIndex + frozenCol : rangeIdx[1]);
        rangeIdx[2] = rangeIdx[2] < frozenRow ? (rangeIdx[2] < topLeftIdx[0] ? topLeftIdx[0] - 1 :
            rangeIdx[2]) : (rangeIdx[2] > this.parent.viewport.bottomIndex ? this.parent.viewport.bottomIndex : rangeIdx[2]);
        rangeIdx[3] = rangeIdx[3] < frozenCol ? (rangeIdx[3] < topLeftIdx[1] ? topLeftIdx[1] - 1 : rangeIdx[3]) :
            (rangeIdx[3] > this.parent.viewport.rightIndex ? this.parent.viewport.rightIndex : rangeIdx[3]);
        var td;
        for (var i = rangeIdx[0]; i <= rangeIdx[2]; i++) {
            if (frozenRow && i === frozenRow) {
                i = this.parent.viewport.topIndex + frozenRow;
            }
            if (isHiddenRow(sheet, i)) {
                continue;
            }
            for (var j = rangeIdx[1]; j <= rangeIdx[3]; j++) {
                if (frozenCol && j === frozenCol) {
                    j = this.parent.viewport.leftIndex + frozenCol;
                }
                if (isHiddenCol(sheet, j)) {
                    continue;
                }
                td = this.parent.getCell(i, j);
                if (td) {
                    invokeFn(i, j, getCell(i, j, sheet), td);
                }
            }
        }
    };
    ConditionalFormatting.prototype.applyIconSet = function (val, cf, cellEle) {
        if (cellEle.classList.contains('e-iconset')) {
            cellEle.classList.remove('e-iconset');
            var iconSpan = cellEle.querySelector('.e-iconsetspan');
            if (iconSpan) {
                cellEle.removeChild(iconSpan);
            }
        }
        var value = parseInt(val, 10);
        var result = cf.result;
        if (isNaN(value) || (result[0] === undefined && result[1] === undefined)) {
            return;
        }
        var min = result[0];
        var max = result[1];
        var iconList = this.getIconList(cf.type).split(',');
        var currentSymbol;
        if (iconList.length === 3) {
            var maxPercent = min + (0.67 * ((max) - (min)));
            var minPercent = min + (0.33 * ((max) - (min)));
            currentSymbol =
                'e-' + (value >= maxPercent ? iconList[0].trim() : value >= minPercent ? iconList[1].trim() : iconList[2].trim());
        }
        else if (iconList.length === 4) {
            var percent1 = min + (0.25 * ((max) - (min)));
            var percent2 = min + (0.50 * ((max) - (min)));
            var percent3 = min + (0.75 * ((max) - (min)));
            currentSymbol =
                'e-' + (value >= percent3 ? iconList[0].trim() : value >= percent2 ? iconList[1].trim() : value >= percent1 ?
                    iconList[2].trim() : iconList[3].trim());
        }
        else if (iconList.length === 5) {
            var percent1 = min + (0.20 * ((max) - (min)));
            var percent2 = min + (0.40 * ((max) - (min)));
            var percent3 = min + (0.60 * ((max) - (min)));
            var percent4 = min + (0.80 * ((max) - (min)));
            currentSymbol =
                'e-' + (value >= percent4 ? iconList[0].trim() : value >= percent3 ? iconList[1].trim() : value >= percent2 ?
                    iconList[2].trim() : value >= percent1 ? iconList[3].trim() : iconList[4].trim());
        }
        var cfIcon = this.parent.createElement('span', { className: "e-icon e-iconsetspan " + currentSymbol });
        cellEle.insertBefore(cfIcon, cellEle.childNodes[0]);
        cellEle.classList.add('e-iconset');
    };
    ConditionalFormatting.prototype.getIconList = function (iconName) {
        var result = '3arrows-1,3arrows-2,3arrows-3';
        switch (iconName) {
            case 'ThreeArrows':
                return '3arrows-1,3arrows-2,3arrows-3';
            case 'ThreeArrowsGray':
                return '3arrowsgray-1,3arrowsgray-2,3arrowsgray-3';
            case 'FourArrowsGray':
                return '4arrowsgray-1,4arrowsgray-2,4arrowsgray-3,4arrowsgray-4';
            case 'FourArrows':
                return '4arrows-1,4arrows-2,4arrows-3,4arrows-4';
            case 'FiveArrowsGray':
                return '5arrowsgray-1,5arrowsgray-2,5arrowsgray-3,5arrowsgray-4,5arrowsgray-5';
            case 'FiveArrows':
                return '5arrows-1,5arrows-2,5arrows-3,5arrows-4,5arrows-5';
            case 'ThreeTrafficLights1':
                return '3trafficlights-1,3trafficlights-2,3trafficlights-3';
            case 'ThreeTrafficLights2':
                return '3rafficlights2-1,3rafficlights2-2,3rafficlights2-3';
            case 'ThreeSigns':
                return '3signs-1,3signs-2,3signs-3';
            case 'FourTrafficLights':
                return '4trafficlights-1,4trafficlights-2,4trafficlights-3,4trafficlights-4';
            case 'FourRedToBlack':
                return '4redtoblack-1,4redtoblack-2,4redtoblack-3,4redtoblack-4';
            case 'ThreeSymbols':
                return '3symbols-1,3symbols-2,3symbols-3';
            case 'ThreeSymbols2':
                return '3symbols2-1,3symbols2-2,3symbols2-3';
            case 'ThreeFlags':
                return '3flags-1,3flags-2,3flags-3';
            case 'FourRating':
                return '4rating-1,4rating-2,4rating-3,4rating-4';
            case 'FiveQuarters':
                return '5quarters-1,5quarters-2,5quarters-3,5quarters-4,5quarters-5';
            case 'FiveRating':
                return '5rating-1,5rating-2,5rating-3,5rating-4,5rating-5';
            case 'ThreeTriangles':
                return '3triangles-1,3triangles-2,3triangles-3';
            case 'ThreeStars':
                return '3stars-1,3stars-2,3stars-3';
            case 'FiveBoxes':
                return '5boxes-1,5boxes-2,5boxes-3,5boxes-4,5boxes-5';
        }
        return result;
    };
    ConditionalFormatting.prototype.applyColorScale = function (val, cf, td, cell, rIdx, cIdx) {
        var value = parseFloat(val);
        if (isNaN(value)) {
            if (td.style.backgroundColor) {
                td.style.backgroundColor = '';
                var style = extend({}, this.parent.commonCellStyle, cell && cell.style);
                if (style.backgroundColor) {
                    this.parent.notify(applyCellFormat, { style: { backgroundColor: style.backgroundColor }, cell: td, rowIdx: rIdx,
                        colIdx: cIdx });
                }
            }
            return;
        }
        var valArr = cf.result;
        var idx = valArr.indexOf(value);
        var colors = this.getColor(cf.type);
        td.style.backgroundColor = idx === 0 ? colors[0] : (idx === valArr.length - 1 ? colors[colors.length - 1] :
            (valArr.length === 3 && idx === 1 ? colors[1] : this.getGradient(idx, colors[0], colors[1], colors[2], valArr.length)));
    };
    ConditionalFormatting.prototype.applyDataBars = function (val, cf, td, rIdx) {
        var sheet = this.parent.getActiveSheet();
        var result = cf.result;
        var leftStandardWidth = 0;
        var topVal;
        var value = parseInt(val, 10);
        if ((result[0] === undefined && result[1] === undefined) || isNaN(value)) {
            var dataBar = td.getElementsByClassName('e-cf-databar')[0];
            if (dataBar) {
                td.removeChild(dataBar);
            }
            return;
        }
        if (result[0] !== undefined && result[1] !== undefined) {
            topVal = result[0] + Math.abs(result[1]);
            leftStandardWidth = Math.abs((result[1] / topVal) * 100);
        }
        else if (result[0] !== undefined) {
            topVal = result[0];
        }
        else {
            topVal = result[1];
        }
        var databar = this.parent.createElement('div', { id: 'spreadsheet-databar', className: 'e-cf-databar' });
        var leftSpan = this.parent.createElement('span', { id: 'spreadsheet-leftspan', className: 'e-databar' });
        var rightSpan = this.parent.createElement('span', { id: 'spreadsheet-rightspan', className: 'e-databar' });
        var dataSpan = this.parent.createElement('span', { id: 'spreadsheet-dataspan', className: 'e-databar-value' });
        var iconSetSpan = td.querySelector('.e-iconsetspan');
        if (iconSetSpan) {
            td.insertBefore(iconSetSpan, td.firstElementChild);
        }
        var rowHeight = getRowHeight(sheet, rIdx, true);
        databar.style.height = rowHeight - 1 + 'px';
        var cfColor = cf.type[0];
        if (cfColor === 'L') {
            cfColor += 'B';
        }
        if (result[1] === undefined) {
            rightSpan.style.width = '' + Math.ceil(Math.abs((value / topVal) * 100)) + '%';
            rightSpan.style.height = rowHeight - 3 + 'px';
            rightSpan.style.backgroundColor = this.getColor(cfColor)[0];
            rightSpan.style.left = '0px';
        }
        else if (result[0] === undefined) {
            rightSpan.style.width = '' + Math.ceil(Math.abs((value / topVal) * 100)) + '%';
            rightSpan.style.height = rowHeight - 3 + 'px';
            rightSpan.style.backgroundColor = this.getColor('R')[0];
            rightSpan.style.left = '0px';
        }
        else if (value >= 0) {
            leftSpan.style.width = leftStandardWidth + '%';
            leftSpan.style.height = rowHeight - 3 + 'px'; // -3 buffer of data bar.
            leftSpan.style.backgroundColor = 'transparent';
            leftSpan.style.left = '0px';
            rightSpan.style.width = '' + Math.ceil(Math.abs((value / topVal) * 100)) + '%';
            rightSpan.style.height = rowHeight - 3 + 'px';
            rightSpan.style.backgroundColor = this.getColor(cfColor)[0];
            rightSpan.style.left = leftStandardWidth + '%';
        }
        else {
            leftSpan.style.width = '' + Math.ceil(Math.abs((value / topVal) * 100)) + '%';
            leftSpan.style.height = rowHeight - 3 + 'px';
            leftSpan.style.backgroundColor = this.getColor('R')[0];
            if (leftSpan.style.width === leftStandardWidth + '%') {
                leftSpan.style.left = '0px';
            }
            else {
                leftSpan.style.right = (100 - leftStandardWidth) + '%';
            }
        }
        dataSpan.style.fontSize = td.style.fontSize || '11pt';
        dataSpan.innerHTML = td.textContent;
        databar.appendChild(leftSpan);
        databar.appendChild(rightSpan);
        databar.appendChild(dataSpan);
        td.textContent = '';
        td.appendChild(databar);
    };
    ConditionalFormatting.prototype.getColor = function (cfColor) {
        if (cfColor === 'LB') {
            return ['#008aef'];
        }
        var colorCodeArr = cfColor.split('');
        var colorArr = [];
        for (var i = 0; i < colorCodeArr.length; i++) {
            switch (colorCodeArr[i]) {
                case 'G':
                    colorArr.push('#63be7b');
                    break;
                case 'Y':
                    colorArr.push('#ffeb84');
                    break;
                case 'R':
                    colorArr.push('#f8696b');
                    break;
                case 'W':
                    colorArr.push('#ffffff');
                    break;
                case 'B':
                    colorArr.push('#5a8ac6');
                    break;
                case 'O':
                    colorArr.push('#ffb628');
                    break;
                case 'LB':
                    colorArr.push('#008aef');
                    break;
                case 'P':
                    colorArr.push('#d6007b');
                    break;
            }
        }
        return colorArr;
    };
    ConditionalFormatting.prototype.getGradient = function (t, start, middle, end, large) {
        if (isNullOrUndefined(end)) {
            return this.getLinear(start, middle, t / large);
        }
        else {
            var center = large / 2;
            return t >= center ? this.getLinear(middle, end, Math.abs((t - center) / center)) : this.getLinear(start, middle, t / center);
        }
    };
    ConditionalFormatting.prototype.getLinear = function (s, e, x) {
        var r = this.byteLinear(s[1] + s[2], e[1] + e[2], x);
        var g = this.byteLinear(s[3] + s[4], e[3] + e[4], x);
        var b = this.byteLinear(s[5] + s[6], e[5] + e[6], x);
        return '#' + r + g + b;
    };
    ConditionalFormatting.prototype.byteLinear = function (a, b, x) {
        var y = (parseInt(a, 16) * (1 - x) + parseInt(b, 16) * x) | 0;
        return Math.abs(y).toString(16);
    };
    ConditionalFormatting.prototype.isGreaterThanLessThan = function (cf, value, input) {
        if (isNumber(value)) {
            if (isNumber(input)) {
                var txtRegx = new RegExp(/[^.-a-zA-Z 0-9]+/g);
                return cf.type === 'GreaterThan' ? parseFloat(value) > parseFloat(input.replace(txtRegx, '')) : parseFloat(value) <
                    parseFloat(input.replace(txtRegx, ''));
            }
            else {
                var dateEventArgs = {
                    value: input, rowIndex: 0, colIndex: 0, sheetIndex: 0,
                    isDate: false, updatedVal: '', isTime: false
                };
                this.parent.notify(checkDateFormat, dateEventArgs);
                if (dateEventArgs.isDate || dateEventArgs.isTime) {
                    cf.value = dateEventArgs.updatedVal.toString();
                    return cf.type === 'GreaterThan' ? value > dateEventArgs.updatedVal : value < dateEventArgs.updatedVal;
                }
                else {
                    return cf.type === 'GreaterThan' ? value.toLowerCase() > input.toLowerCase() : value.toLowerCase() < input.toLowerCase();
                }
            }
        }
        else if (value === '' && Number(input) > 0 && cf.type === 'LessThan') {
            return true;
        }
        return false;
    };
    ConditionalFormatting.prototype.isBetWeen = function (cf, value, input1, input2) {
        var txtRegx = new RegExp(/[^.-a-zA-Z 0-9]+/g);
        input1 = input1.replace(txtRegx, '');
        input2 = input2.replace(txtRegx, '');
        if (isNumber(input1)) {
            return parseFloat(value) >= parseFloat(input1) && parseFloat(value) <= parseFloat(input2);
        }
        else if (input1 && input2) {
            var dateEventArgs1 = { value: input1, cell: {}, updatedVal: '' };
            var dateEventArgs2 = { value: input2, cell: {}, updatedVal: '' };
            this.parent.notify(checkDateFormat, dateEventArgs1);
            this.parent.notify(checkDateFormat, dateEventArgs2);
            if ((dateEventArgs1.isDate || dateEventArgs1.isTime) && (dateEventArgs2.isDate || dateEventArgs2.isTime)) {
                cf.value = dateEventArgs1.updatedVal + ',' + dateEventArgs2.updatedVal;
                return value >= dateEventArgs1.updatedVal && value <= dateEventArgs2.updatedVal;
            }
            else {
                return value.toLowerCase() >= input1.toLowerCase() && value.toLowerCase() <= input2.toLowerCase();
            }
        }
        return false;
    };
    ConditionalFormatting.prototype.isEqualTo = function (cf, value, input) {
        if (isNumber(input)) {
            var txtRegx = new RegExp(/[^.-a-zA-Z 0-9]+/g);
            return parseFloat(value) === parseFloat(input.replace(txtRegx, ''));
        }
        else {
            var dateTimeArgs = { value: input, cell: {}, updatedVal: '' };
            this.parent.notify(checkDateFormat, dateTimeArgs);
            if (dateTimeArgs.isTime || dateTimeArgs.isDate) {
                cf.value = dateTimeArgs.updatedVal;
                return value === dateTimeArgs.updatedVal;
            }
            else {
                return value.toLowerCase() === input.toLowerCase();
            }
        }
    };
    ConditionalFormatting.prototype.isContainsText = function (value, input) {
        var txtRegx = new RegExp(/[^.-a-zA-Z 0-9]+/g);
        if (isNumber(input.replace(txtRegx, ''))) {
            input = input.replace(txtRegx, '');
            if (isDateTime(value)) {
                value = dateToInt(value).toString();
            }
            return value.indexOf(input) > -1;
        }
        else if (isDateTime(input)) {
            if (isDateTime(value)) {
                value = dateToInt(value).toString();
            }
            return value.indexOf(dateToInt(input).toString()) > -1;
        }
        else {
            return value.toLowerCase().indexOf(input.toLowerCase()) > -1;
        }
    };
    ConditionalFormatting.prototype.setCFStyle = function (style, cf) {
        switch (cf.cFColor) {
            case 'RedFT':
                style.backgroundColor = '#ffc7ce';
                style.color = '#9c0055';
                break;
            case 'YellowFT':
                style.backgroundColor = '#ffeb9c';
                style.color = '#9c6500';
                break;
            case 'GreenFT':
                style.backgroundColor = '#c6efce';
                style.color = '#006100';
                break;
            case 'RedF':
                style.backgroundColor = '#ffc7ce';
                break;
            case 'RedT':
                style.color = '#9c0055';
                break;
        }
        return style;
    };
    /**
     * Gets the module name.
     *
     * @returns {string} - Gets the module name.
     */
    ConditionalFormatting.prototype.getModuleName = function () {
        return 'conditionalFormatting';
    };
    return ConditionalFormatting;
}());
export { ConditionalFormatting };
