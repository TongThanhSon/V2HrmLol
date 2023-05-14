import { getRangeIndexes, getCellAddress, updateCell } from '../common/index';
import { getCell, getSheet, setCell, getSheetIndex, getColorCode, getCustomColors } from '../base/index';
import { Internationalization, getNumberDependable, getNumericObject, isNullOrUndefined } from '@syncfusion/ej2-base';
import { isNumber, toFraction, intToDate, toDate, dateToInt, rowFillHandler } from '../common/index';
import { applyNumberFormatting, getFormattedCellObject, refreshCellElement, checkDateFormat, getFormattedBarText } from '../common/index';
import { setCellFormat, getTextSpace, isCustomDateTime } from './../index';
import { checkIsNumberAndGetNumber } from '../common/internalization';
/**
 * Specifies number format.
 */
var WorkbookNumberFormat = /** @class */ (function () {
    function WorkbookNumberFormat(parent) {
        this.parent = parent;
        this.localeObj = getNumericObject(this.parent.locale);
        /* eslint-disable @typescript-eslint/no-explicit-any */
        this.decimalSep = this.localeObj.decimal;
        this.groupSep = this.localeObj.group;
        this.addEventListener();
    }
    WorkbookNumberFormat.prototype.numberFormatting = function (args) {
        var activeSheetIndex = this.parent.activeSheetIndex;
        if (args.range && args.range.indexOf('!') > -1) {
            activeSheetIndex = getSheetIndex(this.parent, args.range.split('!')[0]);
        }
        var sheet = this.parent.sheets[activeSheetIndex];
        var formatRange = args.range ? ((args.range.indexOf('!') > -1) ?
            args.range.split('!')[1] : args.range) : sheet.selectedRange;
        var selectedRange = getRangeIndexes(formatRange);
        var cell;
        for (var i = selectedRange[0]; i <= selectedRange[2]; i++) {
            for (var j = selectedRange[1]; j <= selectedRange[3]; j++) {
                if (!updateCell(this.parent, sheet, { cell: { format: args.format }, rowIdx: i, colIdx: j })) {
                    cell = getCell(i, j, sheet);
                    this.getFormattedCell({ value: cell.value, format: cell.format, rowIndex: i, colIndex: j, sheetIndex: activeSheetIndex, cell: cell });
                }
            }
        }
    };
    /**
     * @hidden
     *
     * @param {Object} args - Specifies the args.
     * @returns {string} - to get formatted cell.
     */
    WorkbookNumberFormat.prototype.getFormattedCell = function (args) {
        var fResult = args.value === undefined || args.value === null ? '' : args.value;
        var sheetIdx = args.sheetIndex === undefined ? this.parent.activeSheetIndex : args.sheetIndex;
        var sheet = this.parent.sheets[sheetIdx];
        var range;
        if (args.rowIndex === undefined) {
            range = getRangeIndexes(sheet.activeCell);
        }
        else {
            range = [args.rowIndex, args.colIndex];
        }
        var cell = args.cell || getCell(range[0], range[1], sheet, false, true);
        var rightAlign = false;
        var option = {};
        var intl = new Internationalization();
        intl.getNumberFormat(option);
        var currencySymbol = getNumberDependable(this.parent.locale, option.currency);
        if (!args.format || args.format === 'General') {
            args.type = args.format = 'General';
            var dateEventArgs = { value: fResult, updatedVal: fResult, cell: cell };
            this.checkDateFormat(dateEventArgs);
            if (dateEventArgs.isDate || dateEventArgs.isTime) {
                rightAlign = true;
                cell.value = args.value = dateEventArgs.updatedVal;
                if (cell.format) {
                    args.format = cell.format;
                }
                else {
                    cell.format = args.format = getFormatFromType(dateEventArgs.isDate ? 'ShortDate' : 'Time');
                }
            }
        }
        else {
            args.type = getTypeFromFormat(args.format);
        }
        var result;
        if (cell.format && this.isCustomType(cell)) {
            args.type = 'Custom';
            var isCustomText = void 0;
            var orgFormat = cell.format;
            cell.format = cell.format.split('\\').join('');
            this.currentRange = getCellAddress(range[0], range[1]);
            if (cell.format.indexOf(';') > -1) {
                if (cell.format.indexOf('<') > -1 || cell.format.indexOf('>') > -1) {
                    args.value = args.result = this.processCustomConditions(cell);
                }
                else {
                    args.value = args.result = this.processCustomAccounting(cell, range[0], range[1], args.td, currencySymbol);
                    isCustomText = (!isNumber(cell.value) || cell.format && cell.format.indexOf('@') > -1) ? true : false;
                }
                cell.format = orgFormat;
            }
            else if (isCustomDateTime(cell, true)) {
                args.result = this.processCustomDate(args, cell);
                isCustomText = args.result === '';
                args.value = args.result = args.result || cell.value;
            }
            else if (cell.format.indexOf('/') > -1) {
                args.value = args.result = this.processCustomFraction(cell);
            }
            else if (cell.format.indexOf('@') > -1) {
                isCustomText = true;
                args.value = args.result = this.processCustomText(cell);
            }
            else if (checkIsNumberAndGetNumber(cell, this.parent.locale, this.groupSep, this.decimalSep).isNumber) {
                args.value = args.result = this.processCustomNumberFormat(cell, range[0], range[1], args.td);
                isCustomText = !isNumber(cell.value);
            }
            else {
                isCustomText = true;
            }
            if (isCustomText) {
                args.isRightAlign = false;
            }
            else {
                args.isRightAlign = isNullOrUndefined(cell.value) ? false : true;
            }
        }
        else {
            result = this.processFormats(args, fResult, rightAlign, cell, intl, currencySymbol, option.currency);
        }
        args.isRowFill = this.isRowFill;
        if (!args.onLoad) {
            if (sheet.id === this.parent.getActiveSheet().id) {
                this.parent.notify(refreshCellElement, { isRightAlign: args.type === 'Custom' ? args.isRightAlign : result.rightAlign,
                    result: args.type === 'Custom' ? args.value : result.fResult || args.value, rowIndex: args.rowIndex,
                    colIndex: args.colIndex, sheetIndex: args.sheetIndex, type: args.type, curSymbol: currencySymbol,
                    value: args.type === 'Custom' ? args.value : args.value || '', isRowFill: this.isRowFill });
                this.isRowFill = false;
            }
            this.parent.setUsedRange(args.rowIndex, args.colIndex);
        }
        if (args.type === 'Custom') {
            args.formattedText = args.value === undefined || args.value === null ? '' : args.value.toString();
        }
        else {
            args.formattedText = result.fResult || (args.value === undefined || args.value === null ? '' : args.value.toString());
            args.isRightAlign = result.rightAlign;
        }
        args.curSymbol = currencySymbol;
        return args.formattedText;
    };
    WorkbookNumberFormat.prototype.isCustomType = function (cell) {
        var format = getTypeFromFormat(cell.format);
        var l10n = this.parent.serviceLocator.getService('spreadsheetLocale');
        if ((format === l10n.getConstant('General') && cell.format !== l10n.getConstant('General')) ||
            (format === l10n.getConstant('Time') && this.parent.isEdit)) {
            return true;
        }
        else {
            return false;
        }
    };
    WorkbookNumberFormat.prototype.processCustomFill = function (format, cell, rowIdx, colIdx, tdElem) {
        var idx = cell.format.indexOf('*');
        var repeatChar = format[idx + 1];
        var codes = format.split(format[idx] + repeatChar);
        var formatText;
        var secText;
        if (codes[1] === '') {
            format = format.split(format[idx] + repeatChar).join('');
            var sampCell = { format: format, value: cell.value };
            formatText = this.processCustomNumberFormat(sampCell);
        }
        else {
            formatText = format.split(format[idx] + repeatChar)[0];
            format = codes[1];
            var sampCell = { format: format, value: cell.value };
            secText = this.processCustomNumberFormat(sampCell);
            if (parseFloat(cell.value) === 0) {
                secText = secText.split('0').join('');
            }
        }
        this.isRowFill = true;
        this.parent.notify(rowFillHandler, { cell: cell,
            rowIdx: rowIdx,
            colIdx: colIdx,
            value: repeatChar,
            formatText: formatText,
            secText: secText,
            td: tdElem
        });
        return formatText;
    };
    WorkbookNumberFormat.prototype.processCustomDate = function (args, cell) {
        var _this = this;
        var dateValue = intToDate(parseFloat(cell.value));
        if (isNaN(Number(dateValue))) {
            return cell.value || '';
        }
        var type;
        var custFormat = cell.format;
        var intl = new Internationalization();
        var formatDateTime = function (checkDate) {
            var isValidDate;
            if (cell.value.toString().includes('/') || cell.value.toString().includes('-')) {
                dateValue = toDate(cell.value, new Internationalization(), _this.parent.locale, custFormat, cell).dateObj;
                if (isValidDate = dateValue && dateValue.toString() !== 'Invalid Date') {
                    if (dateValue.getFullYear() < 1900) {
                        return '';
                    }
                    else {
                        cell.value = dateToInt(dateValue).toString();
                    }
                }
            }
            else {
                isValidDate = dateValue && dateValue.toString() !== 'Invalid Date';
            }
            if (checkDate && isValidDate) {
                args.dateObj = dateValue;
            }
            return (isValidDate && intl.formatDate(dateValue, { type: type, format: custFormat })) || '';
        };
        if (cell.format.indexOf('h') > -1) {
            custFormat = custFormat.split('h').join('H');
            type = 'time';
        }
        if (cell.format.indexOf('s') > -1) {
            type = 'time';
        }
        if (cell.format.indexOf('AM/PM') > -1 || cell.format.indexOf('A/P') > -1) {
            custFormat = custFormat.split('H').join('h');
            custFormat = custFormat.split('A/P').join('AM/PM').split('AM/PM').join('a');
            type = 'time';
        }
        if (cell.format.indexOf('d') > -1) {
            type = 'date';
            var charLength = cell.format.match(/d/g).length;
            if (charLength > 2) {
                custFormat = cell.format.split('d').join('E');
            }
        }
        if (cell.format.indexOf('m') > -1) {
            if (cell.format.indexOf('s') > -1 || cell.format.indexOf('h') > -1) {
                type = 'time';
            }
            else {
                type = 'date';
                custFormat = custFormat.split('m').join('M');
                if (cell.format.indexOf('mmmmm') > -1) {
                    custFormat = 'MMMM';
                    var monthName = formatDateTime()[0];
                    custFormat = cell.format.split('mmmmm').join('p');
                    return formatDateTime(args.checkDate).split('p').join(monthName);
                }
            }
        }
        return formatDateTime(args.checkDate);
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    WorkbookNumberFormat.prototype.processCustomFraction = function (cell) {
        // const fracLength: number = cell.format.split('/')[1].length;
        // const fracValue: string = Number(cell.value).toFixed(fracLength);
        var suffix = '';
        // let fractionResult: string;
        // if (cell.value.toString().indexOf(this.decimalSep) > -1 && isNumber(cell.value as string)) {
        //     suffix = cell.value.toString().split(this.decimalSep)[0];
        //     fractionResult = toFraction(Number(fracValue));
        //     return (Number(suffix) === 0) ? ' ' + fractionResult : suffix + ' ' + fractionResult;
        // }
        return suffix;
    };
    WorkbookNumberFormat.prototype.processCustomConditions = function (cell) {
        if (isNumber(cell.value)) {
            var conditions = cell.format.split(';');
            var val = Number(cell.value);
            var colorCode = [];
            var condition = void 0;
            var compareVal = void 0;
            var values = void 0;
            var conditionNotMatch = void 0;
            for (var i = 0; i < conditions.length; i++) {
                condition = conditions[i];
                colorCode.push(getColorCode(condition));
                if (colorCode[i]) {
                    condition = condition.split("[" + colorCode[i] + "]").join('');
                }
                compareVal = condition.split('[')[1].split(']')[0];
                if (((values = compareVal.split('<=')).length === 2 && val <= Number(values[1])) ||
                    (values.length === 1 && (values = compareVal.split('>=')).length === 2 && val >= Number(values[1])) ||
                    (values.length === 1 && (values = compareVal.split('<')).length === 2 && val < Number(values[1])) ||
                    (values.length === 1 && (values = compareVal.split('>')).length === 2 && val > Number(values[1]))) {
                    cell.format = conditions[i].split("[" + compareVal + "]")[0] + conditions[i].split("[" + compareVal + "]")[1];
                    conditionNotMatch = false;
                    break;
                }
                else {
                    conditionNotMatch = values.length === 2;
                }
            }
            if (conditionNotMatch) {
                if (cell.style && cell.style.color && colorCode.indexOf(cell.style.color) > -1) {
                    this.parent.notify(setCellFormat, { style: { color: '' }, range: this.currentRange });
                }
                return '#####';
            }
            return this.processCustomNumberFormat(cell);
        }
        else {
            return cell.value;
        }
    };
    WorkbookNumberFormat.prototype.processCustomAccounting = function (cell, rowIdx, colIdx, td, currencySymbol) {
        var cellValue;
        var custFormat = cell.format.split(';');
        var numberStatusAndValue = checkIsNumberAndGetNumber(cell, this.parent.locale, this.groupSep, this.decimalSep, currencySymbol);
        var orgValue = cell.value;
        if (numberStatusAndValue.isNumber) {
            cell.value = numberStatusAndValue.value;
            cellValue = parseFloat(numberStatusAndValue.value);
        }
        if (cellValue > 0) {
            cell.format = custFormat[0];
        }
        else if (cellValue === 0) {
            if (isNullOrUndefined(custFormat[2])) {
                cell.format = custFormat[0];
            }
            else {
                cell.format = custFormat[2] + '0';
                return this.processCustomNumberFormat(cell, rowIdx, colIdx, td).split('0').join('');
            }
        }
        else if (isNumber(cellValue)) {
            cell.format = custFormat[1];
        }
        else {
            cell.format = custFormat[3];
            return isNullOrUndefined(custFormat[3]) ? cell.value ? cell.value.toString() : '' : this.processCustomText(cell);
        }
        if (cellValue < 0) {
            cell.value = Math.abs(cellValue).toString();
            var formattedNumber = this.processCustomNumberFormat(cell, rowIdx, colIdx, td);
            cell.value = orgValue;
            return formattedNumber;
        }
        return this.processCustomNumberFormat(cell, rowIdx, colIdx, td);
    };
    WorkbookNumberFormat.prototype.processCustomText = function (cell) {
        var result = this.processCustomNumberFormat({ format: cell.format.split('@').join('#'), value: cell.value ? cell.value.split(cell.value).join('0') : '' });
        return result && result.split('0').join(cell.value);
    };
    WorkbookNumberFormat.prototype.thousandSeparator = function (count, value) {
        while (count) {
            value = value / 1000;
            count--;
        }
        return value;
    };
    WorkbookNumberFormat.prototype.getSeparatorCount = function (cell) {
        var count = 0;
        var codes = ['#', '0'];
        for (var i = 0; i < cell.format.length; i++) {
            if (cell.format[i] === ',' && !(codes.indexOf(cell.format[i + 1]) > -1)) {
                count++;
            }
        }
        return count;
    };
    WorkbookNumberFormat.prototype.processSeparator = function (cell) {
        var count = this.getSeparatorCount(cell);
        var result = this.thousandSeparator(count, parseInt(cell.value, 10));
        if (!(cell.format.indexOf('.') > -1)) {
            result = Math.round(result);
        }
        cell.value = this.getFormattedNumber(cell.format.split(',').join(''), result);
        cell.value = cell.value.replace(',', '');
        if (result === 0) {
            cell.value = cell.value.replace('0', '');
        }
        return cell.value;
    };
    WorkbookNumberFormat.prototype.processDigits = function (cell) {
        var custFormat = cell.format.split('?').join('0');
        var cellValue = cell.value;
        cell.value = this.getFormattedNumber(custFormat, parseFloat(cell.value));
        if (!isNullOrUndefined(cell.value) && cell.value.includes('.')) {
            cell.value = cell.value.split('.')[0] + '.' + cell.value.split('.')[1].split('0').join('  ');
        }
        if (cell.value === '' && cellValue === '0') {
            cell.value = cellValue;
        }
        return cell.value;
    };
    WorkbookNumberFormat.prototype.processSpace = function (format, cell) {
        var space = ' ';
        var args = { cell: cell, char: space, width: 0 };
        this.parent.notify(getTextSpace, args);
        var spaceWidth = args.width;
        var count;
        for (var i = 0; i < format.length; i++) {
            if (format[i] === '_') {
                args.char = format[i + 1];
                this.parent.notify(getTextSpace, args);
                var textWidth = args.width;
                count = Math.round(textWidth / spaceWidth);
                format = format.replace(format[i] + format[i + 1], space.repeat(count));
            }
        }
        return format;
    };
    WorkbookNumberFormat.prototype.processCustomNumberFormat = function (cell, rowIdx, colIdx, td) {
        if (cell.format === '') {
            return '';
        }
        var cellValue = 0;
        var formattedText = cell.value;
        var isFormatted = false;
        cellValue = checkIsNumberAndGetNumber(cell, this.parent.locale, this.groupSep, this.decimalSep).value;
        if (cell && isNumber(cellValue)) {
            cell.value = cellValue;
            cellValue = parseFloat(cellValue.toString());
            var customFormat = this.processCustomColor(cell);
            // if (customFormat === cell.format && cell.style) {
            //     delete cell.style;
            // }
            if (this.getSeparatorCount(cell)) {
                isFormatted = true;
                formattedText = this.processSeparator(cell);
            }
            if (customFormat.indexOf('?') > -1) {
                isFormatted = true;
                customFormat = cell.format.split('?').join('');
                formattedText = this.processDigits(cell);
            }
            if (customFormat.indexOf('_') > -1) {
                isFormatted = true;
                customFormat = cell.format = this.processSpace(customFormat, cell);
                formattedText = this.getFormattedNumber(customFormat, cellValue);
            }
            if (cell.format.indexOf('"') > -1 || cell.format.indexOf('\\') > -1) {
                customFormat = this.processText(customFormat);
            }
            if (customFormat && formattedText && customFormat.indexOf('?') > -1) {
                formattedText = formattedText.replace('?', ' ');
            }
            if (customFormat.indexOf('*') > -1) {
                isFormatted = true;
                formattedText = this.processCustomFill(customFormat, cell, rowIdx, colIdx, td);
            }
            if (customFormat === 'General') {
                isFormatted = true;
                formattedText = cellValue.toString();
            }
            if (!isFormatted) {
                formattedText = this.getFormattedNumber(customFormat, cellValue);
            }
            if (customFormat != null && customFormat.split('.')[0].indexOf('#') > -1 && cellValue < 1) {
                formattedText = formattedText.toString().replace(/^0+/, '');
            }
        }
        return formattedText;
    };
    WorkbookNumberFormat.prototype.processText = function (format) {
        var custFormat = format;
        if (custFormat.indexOf('"') > -1) {
            custFormat = custFormat.split('"').join('');
        }
        else if (custFormat.indexOf('\\') > -1) {
            custFormat = custFormat.split('\\').join('');
        }
        return custFormat;
    };
    WorkbookNumberFormat.prototype.processCustomColor = function (cell) {
        var custFormat = cell.format;
        var colorCode = getColorCode(custFormat);
        if (colorCode) {
            custFormat = cell.format.split('[' + colorCode + ']')[0] + cell.format.split('[' + colorCode + ']')[1];
            if (this.currentRange.indexOf('NaN') > -1) {
                this.currentRange = undefined;
            }
            this.parent.notify(setCellFormat, { style: { 'color': colorCode }, range: this.currentRange });
        }
        else if (cell.style && getCustomColors().indexOf(cell.style.color) > -1) {
            this.parent.notify(setCellFormat, { style: { 'color': 'black' } });
        }
        return custFormat;
    };
    WorkbookNumberFormat.prototype.processFormats = function (args, fResult, isRightAlign, cell, intl, currencySymbol, currencyCode) {
        var result;
        if (fResult !== '') {
            switch (args.type) {
                case 'General':
                    result = this.autoDetectGeneralFormat({
                        args: args, currencySymbol: currencySymbol, fResult: fResult, intl: intl,
                        isRightAlign: isRightAlign, curCode: currencyCode, cell: cell, rowIdx: Number(args.rowIndex),
                        colIdx: Number(args.colIndex)
                    });
                    fResult = result.fResult;
                    isRightAlign = result.isRightAlign;
                    break;
                case 'Number':
                    if (isNumber(fResult)) {
                        fResult = this.applyNumberFormat(args, intl);
                        isRightAlign = true;
                    }
                    break;
                case 'Currency':
                    var isNumberAndValue = checkIsNumberAndGetNumber({ value: fResult, format: args.format }, this.parent.locale, this.groupSep, this.decimalSep, currencySymbol);
                    if (isNumberAndValue.isNumber) {
                        args.value = isNumberAndValue.value;
                        fResult = this.currencyFormat(args, intl, currencyCode);
                        isRightAlign = true;
                    }
                    break;
                case 'Percentage':
                    if (isNumber(fResult)) {
                        fResult = this.percentageFormat(args, intl);
                        isRightAlign = true;
                    }
                    break;
                case 'Accounting':
                    if (isNumber(fResult)) {
                        fResult = this.accountingFormat(args, intl, currencySymbol, currencyCode);
                        isRightAlign = true;
                    }
                    break;
                case 'ShortDate':
                    fResult = this.shortDateFormat(args, intl);
                    isRightAlign = fResult ? true : false;
                    break;
                case 'LongDate':
                    fResult = this.longDateFormat(args, intl);
                    isRightAlign = fResult ? true : false;
                    break;
                case 'Time':
                    fResult = this.timeFormat(args, intl);
                    isRightAlign = fResult ? true : false;
                    break;
                case 'Fraction':
                    if (isNumber(fResult)) {
                        fResult = this.fractionFormat(args);
                        isRightAlign = true;
                    }
                    break;
                case 'Scientific':
                    if (isNumber(fResult)) {
                        fResult = this.scientificFormat(args);
                        isRightAlign = true;
                    }
                    break;
                case 'Text':
                    isRightAlign = false;
                    break;
            }
        }
        return { fResult: fResult, rightAlign: isRightAlign };
    };
    WorkbookNumberFormat.prototype.autoDetectGeneralFormat = function (options) {
        var addressFormula = false;
        var val = options.fResult;
        if (options.args.cell && options.args.cell.formula
            && options.args.cell.formula.indexOf('ADDRESS(') > 0) {
            addressFormula = true;
        }
        if (isNumber(options.fResult)) {
            if (options.args.format && options.args.format !== '') {
                if (options.args.format.toString().indexOf('%') > -1) {
                    options.fResult = this.percentageFormat(options.args, options.intl);
                }
                else if (options.args.format.toString().indexOf(options.currencySymbol) > -1) {
                    options.fResult = this.currencyFormat(options.args, options.intl, options.curCode);
                }
                else {
                    options.fResult = this.applyNumberFormat(options.args, options.intl);
                }
            }
            if (options.args.format === 'General' && options.fResult && options.fResult.toString().split(this.decimalSep)[0].length > 11) {
                options.fResult = this.scientificFormat(options.args);
            }
            options.isRightAlign = true;
        }
        if (!isNullOrUndefined(options.fResult)) {
            var res = options.fResult.toString();
            if (res.indexOf('%') > -1 && res.split('%')[0] !== '' && res.split('%')[1].trim() === '' &&
                Number(res.split('%')[0].split(this.groupSep).join('')).toString() !== 'NaN') {
                options.args.value = Number(res.split('%')[0].split(this.groupSep).join('')) / 100;
                options.cell.format = options.args.format = this.getPercentageFormat(res);
                options.fResult = this.percentageFormat(options.args, options.intl);
                options.cell.value = options.args.value.toString();
                options.isRightAlign = true;
            }
            else if (res.indexOf(options.currencySymbol) > -1) {
                var curArr = res.split(options.currencySymbol);
                if (curArr[0].trim() === '' && curArr[1] !== '' && isNumber(curArr[1].split(this.groupSep).join(''))) {
                    options.args.value = Number(curArr[1].split(this.groupSep).join(''));
                    options.cell.format = options.args.format = getFormatFromType('Currency');
                    options.fResult = this.currencyFormat(options.args, options.intl, options.curCode);
                    options.cell.value = options.args.value.toString();
                    setCell(options.rowIdx, options.colIdx, this.parent.getActiveSheet(), options.cell, true);
                    options.isRightAlign = true;
                }
            }
        }
        if (addressFormula) {
            options.isRightAlign = false;
            options.fResult = val;
        }
        return { isRightAlign: options.isRightAlign, fResult: options.fResult };
    };
    WorkbookNumberFormat.prototype.getPercentageFormat = function (value) {
        return value.indexOf(this.decimalSep) > -1 ? getFormatFromType('Percentage') : '0%';
    };
    WorkbookNumberFormat.prototype.findSuffix = function (zeros, resultSuffix) {
        var len = zeros.length;
        var suffixLen = len - resultSuffix.length;
        return zeros.substr(0, suffixLen < 0 ? 0 : suffixLen) + resultSuffix;
    };
    WorkbookNumberFormat.prototype.applyNumberFormat = function (args, intl) {
        args.format = this.isCustomFormat(args.format.toString());
        var formatArr = args.format.toString().split(';');
        if (Number(args.value) > 0) {
            args.format = formatArr[0];
        }
        else if (Number(args.value) === 0) {
            args.format = formatArr[2] ? formatArr[2] : formatArr[0];
            if (args.format.indexOf('"') > -1 && args.format.indexOf('#') === -1) {
                args.format = args.format.split('_').join(' ').split('*').join(' ').split('?').join(' ').split('"').join('');
                return args.format;
            }
        }
        else if (Number(args.value) < 0) {
            args.format = !isNullOrUndefined(formatArr[1]) ? formatArr[1].split('*').join(' ') : formatArr[0];
            if (args.format.indexOf('-') > -1) {
                args.value = args.value.toString().split('-').join('');
            }
        }
        else {
            args.format = formatArr[3] ? formatArr[3] : formatArr[0];
            args.format = args.format.split('_').join(' ').split('*').join(' ').split('?').join(' ');
            if (args.format.indexOf('@') > -1) {
                return args.format.split('@').join(args.value.toString());
            }
        }
        args.format = args.format.split('_').join(' ').split('*').join(' ').split('"').join('');
        if (args.format.indexOf('?') > -1 && args.format.indexOf(this.decimalSep) > -1) {
            var formatDecimalLen = args.format.split(this.decimalSep)[1].length;
            var replaceString = '';
            if (Number(args.value) % 1) {
                var valueDecimalLen = args.value.toString().split('.')[1].length;
                if (formatDecimalLen > valueDecimalLen) {
                    replaceString = ' ';
                }
                else {
                    replaceString = '0';
                }
            }
            args.format = args.format.split('?').join(replaceString);
        }
        else {
            args.format = args.format.split('?').join(' ');
        }
        if (Number(args.value) < 0 && args.cell) {
            args.format = args.cell.format;
        }
        return intl.formatNumber(Number(args.value), {
            format: args.format
        });
    };
    WorkbookNumberFormat.prototype.isCustomFormat = function (format) {
        if (format === '_-* #,##0.00_-;-* #,##0.00_-;_-* "-"_-;_-@_-' || format === '_-* #,##0_-;-* #,##0_-;_-* "-"_-;_-@_-') {
            format = '';
        }
        format = format === '' ? getFormatFromType('Number') : format;
        format = format.toString().split('_)').join(' ').split('_(').join(' ').split('[Red]').join('');
        return format;
    };
    WorkbookNumberFormat.prototype.currencyFormat = function (args, intl, currencyCode) {
        args.format = args.format === '' ? getFormatFromType('Currency') : args.format;
        args.format = args.format.toString().split('_(').join(' ').split('_)').join(' ').split('[Red]').join('');
        var formatArr = args.format.toString().split(';');
        if (Number(args.value) >= 0) {
            args.format = formatArr[0];
        }
        else {
            args.format = isNullOrUndefined(formatArr[1]) ? formatArr[0] : formatArr[1].split('*').join(' ');
        }
        args.format = this.getFormatForOtherCurrency(args.format);
        return intl.formatNumber(Number(args.value), { format: args.format, currency: currencyCode });
    };
    WorkbookNumberFormat.prototype.percentageFormat = function (args, intl) {
        args.format = args.format === '' ? getFormatFromType('Percentage') : args.format;
        return intl.formatNumber(Number(args.value), {
            format: args.format
        });
    };
    WorkbookNumberFormat.prototype.accountingFormat = function (args, intl, currencySymbol, currencyCode) {
        args.format = args.format === '' ? getFormatFromType('Accounting') : args.format;
        args.format = args.format.split('_(').join(' ').split('_)').join(' ').split('[Red]').join('').split('_').join('');
        var formatArr = args.format.split(';');
        if (Number(args.value) >= 0) {
            args.format = formatArr[0];
        }
        else {
            args.format = formatArr[1].split('*').join(' ');
        }
        args.format = this.getFormatForOtherCurrency(args.format);
        if (Number(args.value) === 0) {
            return currencySymbol + '- ';
        }
        else {
            return intl.formatNumber(Number(args.value), { format: args.format, currency: currencyCode }).split('-').join('');
        }
    };
    WorkbookNumberFormat.prototype.getFormatForOtherCurrency = function (format) {
        if (format.indexOf('[$') > -1) {
            var symbol = format.split(']')[0].split('[$')[1].split('-')[0];
            if (format.indexOf('0') > format.indexOf('[$')) {
                format = symbol + format.slice(format.indexOf(']') + 1, format.length);
            }
            else {
                format = format.slice(0, format.indexOf('[$')) + symbol;
            }
        }
        return format;
    };
    WorkbookNumberFormat.prototype.shortDateFormat = function (args, intl) {
        var format = (args.format === '' || args.format === 'General') ? getFormatFromType('ShortDate') : args.format;
        var dateObj;
        if (format === getFormatFromType('ShortDate')) {
            format = 'MM-dd-yyyy';
            dateObj = { type: 'date', skeleton: 'yMd' };
        }
        else {
            dateObj = { type: 'date', format: format };
        }
        if (args.value) {
            args.value = args.value.toString();
            if (args.value.includes('/') || args.value.includes('-')) {
                if (format === 'dd-MM-yyyy' || format === 'dd/MM/yyyy') {
                    format = '';
                }
                var obj = toDate(args.value, new Internationalization(), this.parent.locale, format, args.cell).dateObj;
                if (obj && obj.toString() !== 'Invalid Date') {
                    if (obj.getFullYear() < 1900) {
                        return '';
                    }
                    args.value = dateToInt(obj).toString();
                    if (args.cell) {
                        args.cell.value = args.value;
                    }
                    if (args.checkDate) {
                        args.dateObj = obj;
                    }
                    return intl.formatDate(obj, dateObj);
                }
            }
        }
        var shortDate = intToDate(args.value);
        if (args.checkDate) {
            args.dateObj = shortDate;
        }
        return intl.formatDate(shortDate, dateObj);
    };
    WorkbookNumberFormat.prototype.longDateFormat = function (args, intl) {
        var longDate = intToDate(args.value);
        var code = (args.format === '' || args.format === 'General') ? getFormatFromType('LongDate')
            : args.format.toString();
        if (code === getFormatFromType('LongDate')) {
            code = 'EEEE, MMMM d, y';
        }
        if (args.checkDate) {
            args.dateObj = longDate;
        }
        return intl.formatDate(longDate, {
            type: 'date',
            format: code
        });
    };
    WorkbookNumberFormat.prototype.timeFormat = function (args, intl) {
        if (isNullOrUndefined(args.value)) {
            return '';
        }
        var value = args.value.toString().split(this.decimalSep);
        if (!isNullOrUndefined(value[1])) {
            args.value = parseFloat(value[0] + 1 + this.decimalSep + value[1]) || args.value;
        }
        var time = intToDate(args.value);
        var code = (args.format === '' || args.format === 'General') ? getFormatFromType('Time')
            : args.format.toString();
        if (code === getFormatFromType('Time')) {
            code = 'h:mm:ss a';
        }
        return intl.formatDate(time, {
            type: 'time',
            skeleton: 'medium',
            format: code
        });
    };
    WorkbookNumberFormat.prototype.scientificFormat = function (args) {
        args.format = args.format === '' ? getFormatFromType('Scientific') : args.format;
        var zeros = args.format.split('+')[1];
        var prefix = this.findDecimalPlaces(args.format, 'Scientific');
        var fResult = Number(args.value).toExponential(prefix);
        if (fResult.indexOf('e+') > -1) {
            fResult = fResult.split('e+')[0] + 'E+' + this.findSuffix(zeros, fResult.split('e+')[1]);
        }
        else if (fResult.indexOf('e-') > -1) {
            fResult = fResult.split('e-')[0] + 'E-' + +this.findSuffix(zeros, fResult.split('e-')[1]);
        }
        return fResult;
    };
    WorkbookNumberFormat.prototype.fractionFormat = function (args) {
        args.format = args.format === '' ? getFormatFromType('Fraction') : args.format;
        var suffix = '';
        var fractionResult;
        if (args.value.toString().indexOf(this.decimalSep) > -1 && isNumber(args.value)) {
            suffix = args.value.toString().split(this.decimalSep)[0];
            fractionResult = toFraction(Number(args.value));
            return (Number(suffix) === 0) ? ' ' + fractionResult : suffix + ' ' + fractionResult;
        }
        return suffix;
    };
    WorkbookNumberFormat.prototype.findDecimalPlaces = function (code, type) {
        var eIndex;
        var decIndex;
        switch (type) {
            case 'Scientific':
                eIndex = code.toUpperCase().indexOf('E');
                decIndex = code.indexOf(this.decimalSep);
                if (eIndex > -1) {
                    return code.substring(decIndex + 1, eIndex).length;
                }
        }
        return 2;
    };
    WorkbookNumberFormat.prototype.checkDateFormat = function (args) {
        if (args.processCustomDate) {
            this.processCustomDate({}, args.cell);
            return;
        }
        if (isNullOrUndefined(args.value)) {
            return;
        }
        var cell = args.cell || getCell(args.rowIndex, args.colIndex, getSheet(this.parent, isNullOrUndefined(args.sheetIndex) ? this.parent.activeSheetIndex : args.sheetIndex), false, true);
        var props = this.checkCustomDateFormat(args.value.toString(), cell);
        if (props.val !== 'Invalid') {
            var dateObj = toDate(props.val, new Internationalization(), this.parent.locale, props.format, cell);
            if (!isNullOrUndefined(dateObj.dateObj) && dateObj.dateObj.toString() !== 'Invalid Date' &&
                dateObj.dateObj.getFullYear() >= 1900) {
                props.val = dateToInt(dateObj.dateObj, props.val.indexOf(':') > -1, dateObj.type && dateObj.type === 'time').toString();
                if (!cell.format) {
                    if (dateObj.type === 'time') {
                        cell.format = getFormatFromType('Time');
                    }
                    else {
                        cell.format = getFormatFromType('ShortDate');
                    }
                }
                args.isDate = dateObj.type === 'date' || dateObj.type === 'datetime';
                args.isTime = dateObj.type === 'time';
                args.dateObj = dateObj.dateObj;
            }
            args.updatedVal = props.val;
        }
    };
    WorkbookNumberFormat.prototype.checkCustomDateFormat = function (val, cell) {
        var separator;
        if (val.includes('/')) {
            separator = '/';
        }
        else if (val.includes('-')) {
            separator = '-';
        }
        else {
            return { val: val.includes(':') ? val : 'Invalid', format: '' };
        }
        var dateArr = val.split(separator);
        var format = '';
        var formatArr = [];
        var updateFormat = function () {
            format = formatArr.join(separator);
            if (!cell.format) {
                cell.format = format;
            }
        };
        if (dateArr.length === 2) {
            var firstVal_1;
            var updateSecValue = function (secVal) {
                val = firstVal_1;
                formatArr[0] = 'MMM';
                if (Number(secVal) <= 31) {
                    val = secVal + separator + val;
                    formatArr.splice(0, 0, 'dd');
                    updateFormat();
                }
                else if (Number(secVal) >= 1900 && Number(secVal) <= 9999) {
                    val += (separator + secVal.slice(2, 4));
                    formatArr[1] = 'yy';
                    updateFormat();
                }
            };
            var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
            dateArr[0] = dateArr[0].toLowerCase().trim();
            dateArr[1] = dateArr[1].toLowerCase().trim();
            var inputMonth_1 = dateArr[1].substring(0, 3);
            if (firstVal_1 = !Number(dateArr[0]) && months.find(function (month) { return dateArr[0].includes(month); })) {
                updateSecValue(dateArr[1]);
            }
            else if (firstVal_1 = !Number(dateArr[1]) && months.find(function (month) { return inputMonth_1.includes(month); })) {
                updateSecValue(dateArr[0]);
            }
            else if (dateArr[0] && Number(dateArr[0]) <= 12 && Number(dateArr[1])) {
                firstVal_1 = months[Number(dateArr[0]) - 1];
                updateSecValue(dateArr[1]);
            }
            if (!formatArr.length) {
                val = 'Invalid';
            }
        }
        else if (dateArr.length > 2) {
            var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'sept', 'oct', 'nov', 'dec'];
            var _loop_1 = function (i) {
                if (!(Number(dateArr[i]) > -1)) {
                    if (months.filter(function (month) { return dateArr[i].toLowerCase().includes(month); }).length) {
                        if (i === 1) {
                            formatArr[1] = 'MMM';
                            if (Number(dateArr[0]) < 31 && Number(dateArr[2]) >= 1900 && Number(dateArr[2]) <= 9999) {
                                formatArr[0] = 'd';
                                formatArr[2] = 'yy';
                                updateFormat();
                            }
                        }
                    }
                    else {
                        val = 'Invalid';
                    }
                }
            };
            for (var i = 0; i < dateArr.length; i++) {
                _loop_1(i);
            }
        }
        return { val: val, format: format };
    };
    WorkbookNumberFormat.prototype.formattedBarText = function (args) {
        if (args.value === '') {
            return;
        }
        var type = getTypeFromFormat(args.cell ? args.cell.format : '');
        var intl = new Internationalization();
        var beforeText = args.value;
        var date = (type === 'ShortDate' && args.cell && args.cell.format) ?
            args.cell.format : getFormatFromType('ShortDate');
        var time = getFormatFromType('Time');
        switch (type) {
            case 'ShortDate':
            case 'LongDate':
                args.value = this.shortDateFormat({ type: type, value: args.value, format: date, cell: args.cell }, intl);
                break;
            case 'Time':
                if (beforeText && Number(beforeText) >= 1) {
                    args.value = this.shortDateFormat({ type: type, value: args.value, format: date }, intl) + ' ' +
                        this.timeFormat({ type: type, value: args.value, format: time }, intl);
                }
                else {
                    args.value = this.timeFormat({ type: type, value: args.value, format: time }, intl);
                }
                break;
        }
        if (!args.value || (args.value && args.value.toString().indexOf('null') > -1)) {
            args.value = beforeText;
        }
    };
    WorkbookNumberFormat.prototype.getFormattedNumber = function (format, value) {
        return new Internationalization().formatNumber(Number(value), { format: format }) || '';
    };
    /**
     * Adding event listener for number format.
     *
     * @returns {void} - Adding event listener for number format.
     */
    WorkbookNumberFormat.prototype.addEventListener = function () {
        this.parent.on(applyNumberFormatting, this.numberFormatting, this);
        this.parent.on(getFormattedCellObject, this.getFormattedCell, this);
        this.parent.on(checkDateFormat, this.checkDateFormat, this);
        this.parent.on(getFormattedBarText, this.formattedBarText, this);
    };
    /**
     * Removing event listener for number format.
     *
     * @returns {void} -  Removing event listener for number format.
     */
    WorkbookNumberFormat.prototype.removeEventListener = function () {
        if (!this.parent.isDestroyed) {
            this.parent.off(applyNumberFormatting, this.numberFormatting);
            this.parent.off(getFormattedCellObject, this.getFormattedCell);
            this.parent.off(checkDateFormat, this.checkDateFormat);
            this.parent.off(getFormattedBarText, this.formattedBarText);
        }
    };
    /**
     * To Remove the event listeners.
     *
     * @returns {void} - To Remove the event listeners.
     */
    WorkbookNumberFormat.prototype.destroy = function () {
        this.removeEventListener();
        this.parent = null;
    };
    /**
     * Get the workbook number format module name.
     *
     * @returns {string} - Get the module name.
     */
    WorkbookNumberFormat.prototype.getModuleName = function () {
        return 'workbookNumberFormat';
    };
    return WorkbookNumberFormat;
}());
export { WorkbookNumberFormat };
/**
 * To Get the number built-in format code from the number format type.
 *
 * @param {string} type - Specifies the type of the number formatting.
 * @returns {string} - To Get the number built-in format code from the number format type.
 */
export function getFormatFromType(type) {
    var code = 'General';
    switch (type.split(' ').join('')) {
        case 'Number':
            code = '0.00';
            break;
        case 'Currency':
            code = '$#,##0.00';
            break;
        case 'Accounting':
            code = '_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)';
            break;
        case 'ShortDate':
            code = 'mm-dd-yyyy';
            break;
        case 'LongDate':
            code = 'dddd, mmmm dd, yyyy';
            break;
        case 'Time':
            code = 'h:mm:ss AM/PM';
            break;
        case 'Percentage':
            code = '0.00%';
            break;
        case 'Fraction':
            code = '# ?/?';
            break;
        case 'Scientific':
            code = '0.00E+00';
            break;
        case 'Text':
            code = '@';
            break;
    }
    return code;
}
/**
 * @hidden
 * @param {string} format -  Specidfies the format.
 * @returns {string} - To get type from format.
 */
export function getTypeFromFormat(format) {
    var code = 'General';
    switch (format) {
        // case '0.00':
        case '_-* #,##0.00_-;-* #,##0.00_-;_-* "-"_-;_-@_-':
        case '_-* #,##0_-;-* #,##0_-;_-* "-"_-;_-@_-':
            code = 'Number';
            break;
        case '$#,##0.00':
        case '$#,##0_);[Red]($#,##0)':
        case '$#,##0.00_);($#,##0.00)':
        case '$#,##0_);($#,##0)':
            // case '$#,##0.00_);[Red]($#,##0.00)':
            code = 'Currency';
            break;
        case '_($*#,##0.00_);_($*(#,##0.00);_($*"-"??_);_(@_)':
        case '_($*#,##0.00_);_($* (#,##0.00);_($*"-"??_);_(@_)':
        case '_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)':
        case '_ $ * #,##0.00_ ;_ $ * -#,##0.00_ ;_ $ * "-"??_ ;_ @_ ':
            code = 'Accounting';
            break;
        case 'mm-dd-yyyy':
        case 'dd/MM/yyyy':
            // case 'yyyy-MM-dd':
            // case 'dd-mm-yyyy':
            // case 'dd-mm-yy':
            // case 'mm-dd-yy':
            code = 'ShortDate';
            break;
        case 'dddd, mmmm dd, yyyy':
            code = 'LongDate';
            break;
        case 'h:mm:ss AM/PM':
            code = 'Time';
            break;
        case '0.00%':
        case '0%':
            code = 'Percentage';
            break;
        case '# ?/?':
        case '# ??/??':
        case '# ???/???':
            code = 'Fraction';
            break;
        case '0.00E+00':
            code = 'Scientific';
            break;
        case '@':
            code = 'Text';
            break;
        default:
            if (format) {
                if (format.indexOf('[$') > -1) {
                    if (format.indexOf('* ') > -1) {
                        code = 'Accounting';
                    }
                    else {
                        code = 'Currency';
                    }
                }
            }
            break;
    }
    return code;
}
