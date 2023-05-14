import { getSheet, getColumn, isHiddenRow, getCell, setCell, getSheetIndex, getSheetNameFromAddress } from '../base/index';
import { cellValidation, applyCellFormat, isValidation, addHighlight, getCellAddress, validationHighlight, getSwapRange, getSheetIndexFromAddress, getSplittedAddressForColumn, getRangeFromAddress } from '../common/index';
import { removeHighlight, checkIsFormula } from '../common/index';
import { getRangeIndexes, getUpdatedFormulaOnInsertDelete } from '../common/index';
import { updateCell, beforeInsert, beforeDelete } from '../common/index';
import { extend, isNullOrUndefined } from '@syncfusion/ej2-base';
/**
 * The `WorkbookHyperlink` module is used to handle Hyperlink action in Spreadsheet.
 */
var WorkbookDataValidation = /** @class */ (function () {
    /**
     * Constructor for WorkbookSort module.
     *
     * @param {Workbook} parent - Specifies the parent element.
     */
    function WorkbookDataValidation(parent) {
        this.parent = parent;
        this.addEventListener();
    }
    /**
     * To destroy the sort module.
     *
     * @returns {void}
     */
    WorkbookDataValidation.prototype.destroy = function () {
        this.removeEventListener();
        this.parent = null;
    };
    WorkbookDataValidation.prototype.addEventListener = function () {
        this.parent.on(cellValidation, this.validationHandler, this);
        this.parent.on(addHighlight, this.addHighlightHandler, this);
        this.parent.on(removeHighlight, this.removeHighlightHandler, this);
        this.parent.on(beforeInsert, this.beforeInsertDeleteHandler, this);
        this.parent.on(beforeDelete, this.beforeInsertDeleteHandler, this);
    };
    WorkbookDataValidation.prototype.removeEventListener = function () {
        if (!this.parent.isDestroyed) {
            this.parent.off(cellValidation, this.validationHandler);
            this.parent.off(addHighlight, this.addHighlightHandler);
            this.parent.off(removeHighlight, this.removeHighlightHandler);
            this.parent.off(beforeInsert, this.beforeInsertDeleteHandler);
            this.parent.off(beforeDelete, this.beforeInsertDeleteHandler);
        }
    };
    WorkbookDataValidation.prototype.validationHandler = function (args) {
        var onlyRange = args.range;
        var sheetName = '';
        var column;
        if (args.range.indexOf('!') > -1) {
            onlyRange = args.range.split('!')[1];
            sheetName = args.range.split('!')[0];
        }
        var sheet = getSheet(this.parent, sheetName ? getSheetIndex(this.parent, sheetName) : this.parent.activeSheetIndex);
        this.parent.dataValidationRange = (this.parent.dataValidationRange.indexOf('!') > -1 ? '' : sheet.name + '!') + this.parent.dataValidationRange + onlyRange + ',';
        var isfullCol = false;
        var rangeInfo = this.getRangeWhenColumnSelected(onlyRange, sheet);
        onlyRange = rangeInfo.range;
        isfullCol = rangeInfo.isFullCol;
        if (!isNullOrUndefined(sheetName)) {
            args.range = sheetName + '!' + onlyRange;
        }
        args.range = args.range || sheet.selectedRange;
        var indexes = getSwapRange(getRangeIndexes(args.range));
        if (isfullCol) {
            for (var colIdx = indexes[1]; colIdx <= indexes[3]; colIdx++) {
                column = getColumn(sheet, colIdx);
                isfullCol = isfullCol && args.isRemoveValidation && column && !column.validation ? false : true;
            }
        }
        if (isfullCol) {
            for (var colIdx = indexes[1]; colIdx <= indexes[3]; colIdx++) {
                column = getColumn(sheet, colIdx);
                if (args.isRemoveValidation && column && column.validation) {
                    delete (sheet.columns[colIdx].validation);
                }
                else {
                    if (!args.isRemoveValidation) {
                        if (isNullOrUndefined(column)) {
                            sheet.columns[colIdx] = getColumn(sheet, colIdx);
                        }
                        sheet.columns[colIdx].validation = {
                            operator: args.rules.operator,
                            type: args.rules.type,
                            value1: args.rules.value1,
                            value2: args.rules.value2,
                            inCellDropDown: args.rules.inCellDropDown,
                            ignoreBlank: args.rules.ignoreBlank
                        };
                    }
                }
            }
        }
        else {
            var cell = void 0;
            for (var rowIdx = indexes[0]; rowIdx <= indexes[2]; rowIdx++) {
                for (var colIdx = indexes[1]; colIdx <= indexes[3]; colIdx++) {
                    if (args.isRemoveValidation) {
                        if (rowIdx === indexes[2]) {
                            column = getColumn(sheet, colIdx);
                            if (column && column.validation) {
                                column.validation.address = getSplittedAddressForColumn(column.validation.address, [indexes[0], colIdx, indexes[2], colIdx], colIdx);
                            }
                        }
                        cell = getCell(rowIdx, colIdx, sheet);
                        if (cell && cell.validation &&
                            !updateCell(this.parent, sheet, { cell: { validation: {} }, rowIdx: rowIdx, colIdx: colIdx })) {
                            delete (cell.validation);
                            this.parent.notify(applyCellFormat, { rowIdx: rowIdx, colIdx: colIdx, style: this.parent.getCellStyleValue(['backgroundColor', 'color'], [rowIdx, colIdx]) });
                        }
                    }
                    else {
                        cell = { validation: Object.assign({}, args.rules) };
                        updateCell(this.parent, sheet, { cell: cell, rowIdx: rowIdx, colIdx: colIdx });
                    }
                }
            }
        }
    };
    WorkbookDataValidation.prototype.addHighlightHandler = function (args) {
        this.InvalidDataHandler(args.range, false, args.td, args.isclearFormat);
    };
    WorkbookDataValidation.prototype.removeHighlightHandler = function (args) {
        this.InvalidDataHandler(args.range, true);
    };
    WorkbookDataValidation.prototype.getRange = function (range) {
        var indexes = getRangeIndexes(range);
        var sheet = this.parent.getActiveSheet();
        var maxColCount = sheet.colCount;
        var maxRowCount = sheet.rowCount;
        if (indexes[2] === maxRowCount - 1 && indexes[0] === 0) {
            range = range.replace(/[0-9]/g, '');
        }
        else if (indexes[3] === maxColCount - 1 && indexes[2] === 0) {
            range = range.replace(/\D/g, '');
        }
        return range;
    };
    WorkbookDataValidation.prototype.InvalidDataHandler = function (range, isRemoveHighlightedData, td, isclearFormat) {
        var isCell = false;
        var cell;
        var value;
        var sheetIdx = range ? getSheetIndexFromAddress(this.parent, range) : this.parent.activeSheetIndex;
        var sheet = getSheet(this.parent, sheetIdx);
        range = range || sheet.selectedRange;
        var sheetName = range.includes('!') ? getSheetNameFromAddress(range) : sheet.name;
        var rangeInfo = this.getRangeWhenColumnSelected(getRangeFromAddress(range), sheet);
        var isFullCol = rangeInfo.isFullCol;
        range = sheetName + '!' + rangeInfo.range;
        var indexes = range ? getSwapRange(getRangeIndexes(range)) : [];
        range = this.getRange(range);
        var rowIdx = range ? indexes[0] : 0;
        var lastRowIdx = range ? indexes[2] : sheet.rows.length;
        for (rowIdx; rowIdx <= lastRowIdx; rowIdx++) {
            if (sheet.rows[rowIdx]) {
                var colIdx = range ? indexes[1] : 0;
                var lastColIdx = range ? indexes[3] : sheet.rows[rowIdx].cells.length;
                for (colIdx; colIdx <= lastColIdx; colIdx++) {
                    var validation = void 0;
                    if (sheet.rows[rowIdx].cells && sheet.rows[rowIdx].cells[colIdx]) {
                        var column = getColumn(sheet, colIdx);
                        cell = sheet.rows[rowIdx].cells[colIdx];
                        if (cell && cell.validation) {
                            validation = cell.validation;
                            if (isclearFormat && !validation.isHighlighted) {
                                return;
                            }
                            if (isRemoveHighlightedData) {
                                if (validation.isHighlighted) {
                                    cell.validation.isHighlighted = false;
                                }
                            }
                            else {
                                cell.validation.isHighlighted = true;
                            }
                        }
                        else if (column && column.validation) {
                            validation = column.validation;
                            if (isclearFormat && !validation.isHighlighted) {
                                return;
                            }
                            if (isRemoveHighlightedData && isFullCol) {
                                if (validation.isHighlighted) {
                                    column.validation.isHighlighted = false;
                                }
                            }
                            else if (isFullCol) {
                                column.validation.isHighlighted = true;
                            }
                        }
                        value = cell.value ? cell.value : '';
                        var range_1 = [rowIdx, colIdx];
                        if (validation && this.parent.allowDataValidation) {
                            var validEventArgs = { value: value, range: range_1, sheetIdx: sheetIdx, isCell: isCell, td: td, isValid: true };
                            this.parent.notify(isValidation, validEventArgs);
                            var isValid = validEventArgs.isValid;
                            if (!isValid) {
                                if (!isHiddenRow(sheet, rowIdx) && sheetIdx === this.parent.activeSheetIndex) {
                                    this.parent.notify(validationHighlight, {
                                        isRemoveHighlightedData: isRemoveHighlightedData, rowIdx: rowIdx, colIdx: colIdx, td: td
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    WorkbookDataValidation.prototype.beforeInsertDeleteHandler = function (args) {
        if (args.modelType === 'Sheet') {
            return;
        }
        var cell;
        var sheet;
        for (var i = 0, sheetLen = this.parent.sheets.length; i < sheetLen; i++) {
            sheet = this.parent.sheets[i];
            for (var j = 0, rowLen = sheet.rows.length; j < rowLen; j++) {
                if (sheet.rows[j] && sheet.rows[j].cells) {
                    for (var k = 0, cellLen = sheet.rows[j].cells.length; k < cellLen; k++) {
                        cell = sheet.rows[j].cells[k];
                        if (cell && cell.validation) {
                            var isInsert = args.name === 'beforeInsert';
                            var endIndex = args.index + (args.model.length - 1);
                            var isNewlyInsertedModel = args.modelType === 'Row' ? (j >= args.index && j <= endIndex) : (k >= args.index && k <= endIndex);
                            var eventArgs = void 0;
                            if (isInsert) {
                                eventArgs = { insertDeleteArgs: { startIndex: args.index, endIndex: args.index + args.model.length - 1, modelType: args.modelType, isInsert: true, sheet: getSheet(this.parent, args.activeSheetIndex) }, row: j, col: k };
                            }
                            else {
                                eventArgs = { insertDeleteArgs: { startIndex: args.start, endIndex: args.end, modelType: args.modelType, sheet: args.model }, row: j, col: k };
                            }
                            if (checkIsFormula(cell.validation.value1) && !isNewlyInsertedModel) {
                                eventArgs.cell = { formula: cell.validation.value1 };
                                this.parent.notify(getUpdatedFormulaOnInsertDelete, eventArgs);
                                cell.validation.value1 = eventArgs.cell.formula;
                            }
                            if (checkIsFormula(cell.validation.value2) && !isNewlyInsertedModel) {
                                eventArgs.cell = { formula: cell.validation.value2 };
                                this.parent.notify(getUpdatedFormulaOnInsertDelete, eventArgs);
                                cell.validation.value2 = eventArgs.cell.formula;
                            }
                            if (args.activeSheetIndex === i && isInsert) {
                                this.updateValidationForInsertedModel(args, sheet, j, k, cell.validation);
                            }
                        }
                    }
                }
            }
        }
    };
    WorkbookDataValidation.prototype.getRangeWhenColumnSelected = function (range, sheet) {
        var isFullCol;
        var colNames = range.split(':');
        if (range.match(/\D/g) && !range.match(/[0-9]/g)) {
            colNames[0] += 1;
            colNames[1] += sheet.rowCount;
            range = colNames[0] + ':' + colNames[1];
            isFullCol = true;
        }
        else if (!range.match(/\D/g) && range.match(/[0-9]/g)) {
            colNames[0] = 'A' + colNames[0];
            colNames[1] = getCellAddress(0, sheet.colCount - 1).replace(/[0-9]/g, '') + colNames[1];
            range = colNames[0] + ':' + colNames[1];
        }
        return { range: range, isFullCol: isFullCol };
    };
    WorkbookDataValidation.prototype.updateValidationForInsertedModel = function (args, sheet, rowIndex, colIndex, validation) {
        var endIndex = args.index + (args.model.length - 1);
        if (args.modelType === 'Column') {
            if ((args.insertType === 'before' && endIndex === colIndex - 1) || (args.insertType === 'after' && args.index - 1 === colIndex)) {
                for (var l = args.index; l <= endIndex; l++) {
                    setCell(rowIndex, l, sheet, { validation: extend({}, validation) }, true);
                }
            }
        }
        else if (args.modelType === 'Row') {
            if ((args.insertType === 'above' && endIndex === rowIndex - 1) || (args.insertType === 'below' && args.index - 1 === rowIndex)) {
                for (var l = args.index; l <= endIndex; l++) {
                    setCell(l, colIndex, sheet, { validation: extend({}, validation) }, true);
                }
            }
        }
    };
    /**
     * Gets the module name.
     *
     * @returns {string} string
     */
    WorkbookDataValidation.prototype.getModuleName = function () {
        return 'workbookDataValidation';
    };
    return WorkbookDataValidation;
}());
export { WorkbookDataValidation };
