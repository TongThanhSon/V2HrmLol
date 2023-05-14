import { getCell, setCell, getData, getSheet, isHiddenRow } from '../base/index';
import { DataManager, Query, DataUtil, Deferred } from '@syncfusion/ej2-data';
import { getCellIndexes, getColumnHeaderText, getRangeAddress, workbookLocale, isNumber, getUpdatedFormula, getDataRange } from '../common/index';
import { getSwapRange } from '../common/index';
import { parseIntValue } from '../common/index';
import { initiateSort, updateSortedDataOnCell } from '../common/event';
import { extend, isNullOrUndefined } from '@syncfusion/ej2-base';
/**
 * The `WorkbookSort` module is used to handle sort action in Spreadsheet.
 */
var WorkbookSort = /** @class */ (function () {
    /**
     * Constructor for WorkbookSort module.
     *
     * @param {Workbook} parent - Specifies the workbook.
     */
    function WorkbookSort(parent) {
        this.parent = parent;
        this.addEventListener();
    }
    /**
     * To destroy the sort module.
     *
     * @returns {void} - To destroy the sort module.
     */
    WorkbookSort.prototype.destroy = function () {
        this.removeEventListener();
        this.parent = null;
    };
    WorkbookSort.prototype.addEventListener = function () {
        this.parent.on(initiateSort, this.initiateSortHandler, this);
        this.parent.on(updateSortedDataOnCell, this.updateSortedDataOnCell, this);
    };
    WorkbookSort.prototype.removeEventListener = function () {
        if (!this.parent.isDestroyed) {
            this.parent.off(initiateSort, this.initiateSortHandler);
            this.parent.off(updateSortedDataOnCell, this.updateSortedDataOnCell);
        }
    };
    /**
     * Sorts range of cells in the sheet.
     *
     * @param {{ args: BeforeSortEventArgs, promise: Promise<SortEventArgs> }} eventArgs - Specify the arguments.
     * @param {BeforeSortEventArgs} eventArgs.args - arguments for sorting.
     * @param {Promise<SortEventArgs>} eventArgs.promise - Specify the promise.
     * @param {SortCollectionModel} eventArgs.previousSort - Specify the previous sort model.
     * @returns {void} - Sorts range of cells in the sheet.
     */
    WorkbookSort.prototype.initiateSortHandler = function (eventArgs) {
        var _this = this;
        var args = eventArgs.args;
        var deferred = new Deferred();
        var addressInfo = this.parent.getAddressInfo(args.range);
        var sheet = getSheet(this.parent, addressInfo.sheetIndex);
        var range = getSwapRange(addressInfo.indices);
        var sortOptions = args.sortOptions || { sortDescriptors: {}, containsHeader: true };
        var isSingleCell = false;
        eventArgs.promise = deferred.promise;
        if (range[0] > sheet.usedRange.rowIndex || range[1] > sheet.usedRange.colIndex) {
            deferred.reject(this.parent.serviceLocator.getService(workbookLocale).getConstant('SortOutOfRangeError'));
            return;
        }
        var containsHeader = sortOptions.containsHeader;
        var checkForHeader = args.checkForHeader;
        if (range[0] === range[2] || checkForHeader) { //if selected range is a single cell
            if (!checkForHeader) {
                range = getDataRange(range[0], range[1], sheet);
            }
            isSingleCell = true;
            if (isNullOrUndefined(sortOptions.containsHeader)) {
                if (typeof getCell(range[0], range[1], sheet, null, true).value ===
                    typeof getCell(range[0] + 1, range[1], sheet, null, true).value) {
                    containsHeader = this.isSameStyle(getCell(range[0], range[1], sheet, null, true).style, getCell(range[0] + 1, range[1], sheet, null, true).style) ? false : true;
                }
                else {
                    containsHeader = true;
                }
            }
        }
        if ((isNullOrUndefined(args.sortOptions) || isNullOrUndefined(args.sortOptions.containsHeader)) && !isSingleCell) {
            var firstCell = getCell(range[0], range[1], sheet);
            var secondCell = getCell(range[0] + 1, range[1], sheet);
            if (firstCell && secondCell) {
                if (typeof firstCell.value === typeof secondCell.value) {
                    containsHeader = !this.isSameStyle(firstCell.style, secondCell.style);
                }
                else {
                    containsHeader = true;
                }
            }
        }
        range[0] = containsHeader ? range[0] + 1 : range[0];
        delete sortOptions.containsHeader;
        var sortDescriptors = sortOptions.sortDescriptors;
        var sortField = Array.isArray(sortDescriptors) ? (sortDescriptors.length > 0 ? sortDescriptors[0].field : null) :
            (sortDescriptors ? sortDescriptors.field : null);
        var columnIndex = sortField ? getCellIndexes(sortField + '1')[1] : (eventArgs.isMethod ? range[1] : getCellIndexes(sheet.activeCell)[1]);
        var header = sortField || getColumnHeaderText(columnIndex + 1);
        var address = getRangeAddress(range);
        getData(this.parent, sheet.name + "!" + address, true, null, null, null, null, null, undefined, null, columnIndex).then(function (jsonData) {
            var dataManager = new DataManager(jsonData);
            var query = new Query();
            if (Array.isArray(sortDescriptors)) { //multi-column sorting.
                if (!sortDescriptors || sortDescriptors.length === 0) {
                    sortDescriptors = [{ field: header }];
                }
                for (var length_1 = sortDescriptors.length, i = length_1 - 1; i > -1; i--) {
                    if (!sortDescriptors[length_1 - 1].field) {
                        sortDescriptors[length_1 - 1].field = header;
                    }
                    if (!sortDescriptors[i].field) {
                        continue;
                    }
                    var comparerFn = sortDescriptors[i].sortComparer
                        || _this.sortComparer.bind(_this, sortDescriptors[i], sortOptions.caseSensitive);
                    query.sortBy(sortDescriptors[i].field, comparerFn);
                }
            }
            else { //single column sorting.
                if (!sortDescriptors) {
                    sortDescriptors = { field: header };
                }
                if (!sortDescriptors.field) {
                    sortDescriptors.field = header;
                }
                var comparerFn = sortDescriptors.sortComparer
                    || _this.sortComparer.bind(_this, sortDescriptors, sortOptions.caseSensitive);
                query.sortBy(sortDescriptors.field, comparerFn);
            }
            dataManager.executeQuery(query).then(function (e) {
                _this.parent.notify('setActionData', { args: { action: 'beforeSort', eventArgs: { range: address, cellDetails: jsonData, sortedCellDetails: e.result } } });
                _this.updateSortedDataOnCell({ result: e.result, range: range, sheet: sheet, jsonData: jsonData });
                var sortArgs = { range: sheet.name + "!" + address, sortOptions: args.sortOptions };
                if (eventArgs.previousSort) {
                    sortArgs.previousSort = eventArgs.previousSort;
                }
                deferred.resolve(sortArgs);
            });
        });
    };
    WorkbookSort.prototype.updateSortedDataOnCell = function (args) {
        var _this = this;
        var fields = [];
        var cell;
        var updateCell = function (rowIdx, data) {
            for (var j = args.range[1], k = 0; j <= args.range[3]; j++, k++) {
                if (!fields[k]) {
                    fields[k] = getColumnHeaderText(j + 1);
                }
                if (data[fields[k]]) {
                    cell = extend({}, data[fields[k]], null, true);
                }
                else {
                    if (!getCell(rowIdx, j, args.sheet)) {
                        continue;
                    }
                    cell = null;
                }
                cell = _this.skipBorderOnSorting(rowIdx, j, args.sheet, cell);
                if (cell && cell.formula) {
                    cell.formula = getUpdatedFormula([rowIdx, j], [parseInt(data['__rowIndex'], 10) - 1, j], args.sheet, cell);
                }
                setCell(rowIdx, j, args.sheet, cell);
            }
        };
        var updatedCellDetails = args.isUndo && {};
        var rIdx;
        for (var i = args.range[0], idx = 0; i <= args.range[2]; i++, idx++) {
            if (isHiddenRow(args.sheet, i)) {
                idx--;
                continue;
            }
            if (args.isUndo) {
                if (args.result[idx]) {
                    rIdx = parseInt(args.result[idx]['__rowIndex'], 10) - 1;
                    updatedCellDetails[rIdx] = true;
                    updateCell(rIdx, args.result[idx]);
                    if (i === rIdx) {
                        continue;
                    }
                }
                if (!updatedCellDetails[i] && args.sheet.rows[i]) {
                    updateCell(i, {});
                }
            }
            else {
                updateCell(i, args.result[idx] || {});
            }
        }
    };
    WorkbookSort.prototype.skipBorderOnSorting = function (rowIndex, colIndex, sheet, cell) {
        var prevCell = getCell(rowIndex, colIndex, sheet);
        var borders = ['borderBottom', 'borderTop', 'borderRight', 'borderLeft', 'border'];
        if (cell && cell.style) {
            for (var _i = 0, borders_1 = borders; _i < borders_1.length; _i++) {
                var border = borders_1[_i];
                delete cell.style[border];
            }
        }
        if (prevCell && prevCell.style) {
            for (var _a = 0, borders_2 = borders; _a < borders_2.length; _a++) {
                var border = borders_2[_a];
                if (prevCell.style[border]) {
                    if (!cell) {
                        cell = {};
                    }
                    if (!cell.style) {
                        cell.style = {};
                    }
                    cell.style[border] = prevCell.style[border];
                }
            }
        }
        return cell;
    };
    WorkbookSort.prototype.isSameStyle = function (firstCellStyle, secondCellStyle) {
        if (!firstCellStyle) {
            firstCellStyle = {};
        }
        if (!secondCellStyle) {
            secondCellStyle = {};
        }
        var sameStyle = true;
        var keys = Object.keys(firstCellStyle);
        for (var i = 0; i < keys.length; i++) {
            if (firstCellStyle[keys[i]] === secondCellStyle[keys[i]] || this.parent.cellStyle[keys[i]] === firstCellStyle[keys[i]]) {
                sameStyle = true;
            }
            else {
                sameStyle = false;
                break;
            }
        }
        return sameStyle;
    };
    /**
     * Compares the two cells for sorting.
     *
     * @param {SortDescriptor} sortDescriptor - protocol for sorting.
     * @param {boolean} caseSensitive - value for case sensitive.
     * @param {CellModel} x - first cell
     * @param {CellModel} y - second cell
     * @returns {number} - Compares the two cells for sorting.
     */
    WorkbookSort.prototype.sortComparer = function (sortDescriptor, caseSensitive, x, y) {
        var direction = sortDescriptor.order || '';
        var comparer = DataUtil.fnSort(direction);
        var isXStringVal = false;
        var isYStringVal = false;
        if (x && y && (typeof x.value === 'string' || typeof y.value === 'string') && (x.value !== '' && y.value !== '')) {
            if (isNumber(x.value)) { // Imported number values are of string type, need to handle this case in server side
                x.value = parseIntValue(x.value);
                isXStringVal = true;
            }
            if (isNumber(y.value)) {
                y.value = parseIntValue(y.value);
                isYStringVal = true;
            }
            if (!isYStringVal && !isYStringVal) {
                var caseOptions = { sensitivity: caseSensitive ? 'case' : 'base' };
                var collator = new Intl.Collator(this.parent.locale, caseOptions);
                if (!direction || direction.toLowerCase() === 'ascending') {
                    return collator.compare(x.value, y.value);
                }
                else {
                    return collator.compare(x.value, y.value) * -1;
                }
            }
        }
        var isXNull = (isNullOrUndefined(x) || x && (isNullOrUndefined(x.value) || x.value === ''));
        var isYNull = (isNullOrUndefined(y) || y && (isNullOrUndefined(y.value) || y.value === ''));
        if (isXNull && isYNull) {
            return -1;
        }
        if (isXNull) {
            return 1;
        }
        if (isYNull) {
            return -1;
        }
        return comparer(x ? x.value : x, y ? y.value : y);
    };
    /**
     * Gets the module name.
     *
     * @returns {string} - Get the module name.
     */
    WorkbookSort.prototype.getModuleName = function () {
        return 'workbookSort';
    };
    return WorkbookSort;
}());
export { WorkbookSort };
