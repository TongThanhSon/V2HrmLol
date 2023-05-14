import { getSheetIndex, getSheet, getRangeIndexes, isFilterHidden } from '../index';
import { getCellAddress, getIndexesFromAddress, getColumnHeaderText, updateSheetFromDataSource } from '../common/index';
import { queryCellInfo, getFormattedCellObject, isNumber } from '../common/index';
import { getRow, getCell, isHiddenRow, isHiddenCol, getMaxSheetId, getSheetNameCount } from './index';
import { isUndefined, isNullOrUndefined, extend } from '@syncfusion/ej2-base';
import { setCell } from './../index';
import { checkDateFormat } from '../common/index';
/**
 * Update data source to Sheet and returns Sheet
 *
 * @param {Workbook} context - Specifies the context.
 * @param {string} address - Specifies the address.
 * @param {boolean} columnWiseData - Specifies the bool value.
 * @param {boolean} valueOnly - Specifies the valueOnly.
 * @param {number[]} frozenIndexes - Specifies the freeze row and column start indexes, if it is scrolled.
 * @param {boolean} filterDialog - Specifies the bool value.
 * @param {string} formulaCellRef - Specifies the formulaCellRef.
 * @param {number} idx - Specifies the idx.
 * @param {boolean} skipHiddenRows - Specifies the skipHiddenRows.
 * @param {string} commonAddr - Specifies the common address for the address parameter specified with list of range separated by ','.
 * @param {number} dateValueForSpecificColIdx - Specify the dateValueForSpecificColIdx.
 * @returns {Promise<Map<string, CellModel> | Object[]>} - To get the data
 * @hidden
 */
export function getData(context, address, columnWiseData, valueOnly, frozenIndexes, filterDialog, formulaCellRef, idx, skipHiddenRows, commonAddr, dateValueForSpecificColIdx, dateColData) {
    if (skipHiddenRows === void 0) { skipHiddenRows = true; }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise(function (resolve, reject) {
        resolve((function () {
            var sheetIdx;
            if (address.indexOf('!') > -1) {
                sheetIdx = getSheetIndex(context, address.split('!')[0]);
                address = address.slice(address.indexOf('!') + 1, address.length);
            }
            else {
                sheetIdx = context.activeSheetIndex;
            }
            var sheet = getSheet(context, sheetIdx);
            var indexes = getIndexesFromAddress(commonAddr || address);
            /* eslint-disable */
            var args = { sheet: sheet, indexes: indexes, formulaCellRef: formulaCellRef, sheetIndex: idx, isFinite: context.scrollSettings && context.scrollSettings.isFinite,
                promise: new Promise(function (resolve, reject) { resolve((function () { })()); })
            };
            /* eslint-enable */
            context.notify(updateSheetFromDataSource, args);
            return args.promise.then(function () {
                var i;
                var row;
                var data;
                var sRow = indexes[0];
                var frozenRow = context.frozenRowCount(sheet);
                var frozenCol = context.frozenColCount(sheet);
                var isDateCol = !!dateColData;
                if (columnWiseData) {
                    data = [];
                    var index_1;
                    var cells_1;
                    var key_1;
                    address.split(',').forEach(function (addr, addrIdx) {
                        indexes = getRangeIndexes(addr);
                        index_1 = 0;
                        sRow = indexes[0];
                        while (sRow <= indexes[2]) {
                            cells_1 = data[index_1] || {};
                            row = getRow(sheet, sRow);
                            i = indexes[1];
                            while (i <= indexes[3]) {
                                if (skipHiddenRows && isHiddenRow(sheet, sRow) && !filterDialog) {
                                    sRow++;
                                    continue;
                                }
                                key_1 = getColumnHeaderText(i + 1);
                                if (valueOnly) {
                                    cells_1[key_1] = row ? getValueFromFormat(context, getCell(sRow, i, sheet)) : '';
                                    if (typeof cells_1[key_1] === 'string' && isNumber(cells_1[key_1])) {
                                        cells_1[key_1] = parseFloat(cells_1[key_1]);
                                    }
                                }
                                else {
                                    var cell = row ? getCell(sRow, i, sheet) : null;
                                    if ((cell && (cell.formula || !isNullOrUndefined(cell.value))) || Object.keys(cells_1).length) {
                                        if (i === dateValueForSpecificColIdx) {
                                            cells_1[key_1] = extend({}, cell, { value: getValueFromFormat(context, cell, true) });
                                            if (typeof cells_1[key_1].value === 'string' &&
                                                isNumber(cells_1[key_1].value)) {
                                                cells_1[key_1]['value'] = parseFloat(cells_1[key_1].value);
                                            }
                                        }
                                        else {
                                            cells_1[key_1] = cell;
                                        }
                                    }
                                }
                                if (i === indexes[3] && Object.keys(cells_1).length) {
                                    cells_1['__rowIndex'] = (sRow + 1).toString();
                                    data[index_1] = cells_1;
                                    if (isDateCol && addrIdx === 0 && !isFilterHidden(sheet, sRow)) {
                                        dateColData.push(cells_1);
                                    }
                                    index_1++;
                                }
                                i++;
                            }
                            sRow++;
                        }
                    });
                }
                else {
                    data = new Map();
                    var checkFrozenIdx = !!(!valueOnly && frozenIndexes && frozenIndexes.length);
                    while (sRow <= indexes[2]) {
                        if (checkFrozenIdx && sRow >= frozenRow && sRow < frozenIndexes[0]) {
                            sRow = frozenIndexes[0];
                            continue;
                        }
                        if (!valueOnly && isHiddenRow(sheet, sRow)) {
                            sRow++;
                            continue;
                        }
                        row = getRow(sheet, sRow);
                        i = indexes[1];
                        while (i <= indexes[3]) {
                            var eventArgs = { cell: getCell(sRow, i, sheet), address: getCellAddress(sRow, i),
                                rowIndex: sRow, colIndex: i };
                            context.trigger(queryCellInfo, eventArgs);
                            var cellObj = getCell(sRow, i, sheet, false, true);
                            if (cellObj.colSpan > 1 && cellObj.rowSpan > 1) {
                                var cell = void 0;
                                for (var j = sRow, len = sRow + cellObj.rowSpan; j < len; j++) {
                                    for (var k = i, len_1 = i + cellObj.colSpan; k < len_1; k++) {
                                        if (j === sRow && k === i) {
                                            continue;
                                        }
                                        cell = new Object();
                                        if (j !== sRow) {
                                            cell.rowSpan = sRow - j;
                                        }
                                        if (k !== i) {
                                            cell.colSpan = i - k;
                                        }
                                        if (sheet.rows[j] && sheet.rows[j].cells && sheet.rows[j].cells[k]) {
                                            delete sheet.rows[j].cells[k].value;
                                            delete sheet.rows[j].cells[k].formula;
                                        }
                                        setCell(j, k, sheet, cell, true);
                                    }
                                }
                            }
                            else if (cellObj.colSpan > 1) {
                                for (var j = i + 1, len = i + cellObj.colSpan; j < len; j++) {
                                    setCell(sRow, j, sheet, { colSpan: i - j }, true);
                                    if (sheet.rows[sRow] && sheet.rows[sRow].cells && sheet.rows[sRow].cells[j]) {
                                        delete sheet.rows[sRow].cells[j].value;
                                        delete sheet.rows[sRow].cells[j].formula;
                                    }
                                }
                            }
                            else if (cellObj.rowSpan > 1) {
                                for (var j = sRow + 1, len = sRow + cellObj.rowSpan; j < len; j++) {
                                    setCell(j, i, sheet, { rowSpan: sRow - j }, true);
                                    if (sheet.rows[j] && sheet.rows[j].cells && sheet.rows[j].cells[i]) {
                                        delete sheet.rows[j].cells[i].value;
                                        delete sheet.rows[j].cells[i].formula;
                                    }
                                }
                            }
                            if (!valueOnly && isHiddenCol(sheet, i)) {
                                i++;
                                continue;
                            }
                            if (checkFrozenIdx && i >= frozenCol && i < frozenIndexes[1]) {
                                i = frozenIndexes[1];
                                continue;
                            }
                            if (cellObj.style) {
                                var style = {};
                                Object.assign(style, cellObj.style);
                                cellObj.style = style;
                            }
                            data.set(eventArgs.address, cellObj);
                            i++;
                        }
                        sRow++;
                    }
                }
                return data;
            });
        })());
    });
}
/**
 * @hidden
 * @param {Workbook} context - Specifies the context.
 * @param {number} cell - Specifies the cell model.
 * @param {boolean} getIntValueFromDate - Specify the getIntValueFromDate.
 * @returns {string | Date} - To get the value format.
 */
export function getValueFromFormat(context, cell, getIntValueFromDate) {
    if (cell) {
        if (isNullOrUndefined(cell.value)) {
            return '';
        }
        if (typeof cell.value === 'string' && cell.value.includes(':')) {
            var dateEventArgs = { value: cell.value, updatedVal: cell.value, cell: cell };
            context.notify(checkDateFormat, dateEventArgs);
            if (dateEventArgs.isTime) {
                cell.value = dateEventArgs.updatedVal;
            }
        }
        if (cell.format) {
            var args = { value: cell.value, formattedText: cell.value, cell: cell, format: cell.format, onLoad: true,
                checkDate: !getIntValueFromDate };
            context.notify(getFormattedCellObject, args);
            return args.dateObj && args.dateObj.toString() !== 'Invalid Date' ? args.dateObj : (getIntValueFromDate ? args.value :
                args.formattedText);
        }
        else {
            return cell.value;
        }
    }
    else {
        return '';
    }
}
/**
 * @hidden
 * @param {SheetModel | RowModel | CellModel} model - Specifies the sheet model.
 * @param {number} idx - Specifies the index value.
 * @returns {SheetModel | RowModel | CellModel} - To process the index
 */
export function getModel(model, idx) {
    var diff;
    var j;
    var prevIdx;
    if (isUndefined(model[idx]) || !(model[idx] && model[idx].index === idx)) {
        for (var i = 0; i <= idx; i++) {
            if (model && model[i]) {
                diff = model[i].index - i;
                if (diff > 0) {
                    model.forEach(function (value, index) {
                        if (value && value.index) {
                            prevIdx = value.index;
                            j = 1;
                        }
                        if (value && !value.index && index !== 0) {
                            value.index = prevIdx + j;
                        }
                        j++;
                    });
                    while (diff--) {
                        model.splice(i, 0, null);
                    }
                    i += diff;
                }
            }
            else if (model) {
                model[i] = null;
            }
            else {
                model = [];
            }
        }
    }
    return model[idx];
}
/**
 * @hidden
 * @param {SheetModel | RowModel | CellModel} model - Specifies the sheet model.
 * @param {boolean} isSheet - Specifies the bool value.
 * @param {Workbook} context - Specifies the Workbook.
 * @returns {void} - To process the index
 */
export function processIdx(model, isSheet, context) {
    var j;
    var diff = 0;
    var cnt;
    var len = model.length;
    var _loop_1 = function (i) {
        if (!isNullOrUndefined(model[i]) && !isUndefined(model[i].index)) {
            cnt = diff = model[i].index - i;
            delete model[i].index;
        }
        if (diff > 0) {
            j = 0;
            while (diff--) {
                if (isSheet) {
                    context.createSheet(i + j);
                    j++;
                }
                else {
                    model.splice(i, 0, null);
                }
            }
            i += cnt;
            len += cnt;
        }
        if (isSheet) {
            if (model[i].id < 1) {
                model[i].id = getMaxSheetId(context.sheets);
                if (model[i].properties) {
                    model[i].properties.id = model[i].id;
                }
            }
            if (!model[i].name) {
                context.setSheetPropertyOnMute(model[i], 'name', 'Sheet' + getSheetNameCount(context));
            }
            var cellCnt_1 = 0;
            model[i].rows.forEach(function (row) {
                cellCnt_1 = Math.max(cellCnt_1, (row && row.cells && row.cells.length - 1) || 0);
            });
            context.setSheetPropertyOnMute(model[i], 'usedRange', { rowIndex: model[i].rows.length ? model[i].rows.length - 1 : 0, colIndex: cellCnt_1 });
        }
        out_i_1 = i;
    };
    var out_i_1;
    for (var i = 0; i < len; i++) {
        _loop_1(i);
        i = out_i_1;
    }
}
