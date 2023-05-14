import { getCell, getSheet, getSheetIndex } from '../base/index';
import { setLinkModel, getRangeIndexes, updateCell, getSwapRange } from '../common/index';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
/**
 * The `WorkbookHyperlink` module is used to handle Hyperlink action in Spreadsheet.
 */
var WorkbookHyperlink = /** @class */ (function () {
    /**
     * Constructor for WorkbookSort module.
     *
     * @param {Workbook} parent - Specifies the workbook.
     */
    function WorkbookHyperlink(parent) {
        this.parent = parent;
        this.addEventListener();
    }
    /**
     * To destroy the sort module.
     *
     * @returns {void} - To destroy the sort module.
     */
    WorkbookHyperlink.prototype.destroy = function () {
        this.removeEventListener();
        this.parent = null;
    };
    WorkbookHyperlink.prototype.addEventListener = function () {
        this.parent.on(setLinkModel, this.setLinkHandler, this);
    };
    WorkbookHyperlink.prototype.removeEventListener = function () {
        if (!this.parent.isDestroyed) {
            this.parent.off(setLinkModel, this.setLinkHandler);
        }
    };
    WorkbookHyperlink.prototype.setLinkHandler = function (args) {
        var hyperlink = args.hyperlink;
        var cellAddr = args.cell;
        var sheet;
        if (cellAddr && cellAddr.indexOf('!') !== -1) {
            var addrArr = cellAddr.split('!');
            sheet = getSheet(this.parent, getSheetIndex(this.parent, addrArr[0]));
            cellAddr = addrArr[1];
            if (!sheet) {
                return;
            }
        }
        else {
            sheet = this.parent.getActiveSheet();
            cellAddr = cellAddr || sheet.selectedRange;
        }
        var cellIdx = getSwapRange(getRangeIndexes(cellAddr));
        var cell = {};
        if (typeof (hyperlink) === 'string') {
            if (hyperlink.toLowerCase().indexOf('www.') === 0) {
                hyperlink = 'http://' + hyperlink;
            }
            cell.hyperlink = hyperlink;
        }
        else {
            var address = hyperlink.address;
            if (address.toLowerCase().indexOf('www.') === 0) {
                address = 'http://' + address;
            }
            cell.hyperlink = { address: address };
        }
        if (args.displayText) {
            cell.value = args.displayText;
        }
        var cellModel;
        for (var rIdx = cellIdx[0]; rIdx <= cellIdx[2]; rIdx++) {
            for (var cIdx = cellIdx[1]; cIdx <= cellIdx[3]; cIdx++) {
                cellModel = cell.value ? getCell(rIdx, cIdx, sheet) || {} : cell;
                cellModel.hyperlink = hyperlink;
                if (isNullOrUndefined(cellModel.value)) {
                    cellModel.value = cell.value;
                }
                if (!updateCell(this.parent, sheet, { cell: cellModel, rowIdx: rIdx, colIdx: cIdx, preventEvt: !args.triggerEvt })) {
                    updateCell(this.parent, sheet, { rowIdx: rIdx, colIdx: cIdx, preventEvt: true, cell: { style: { textDecoration: 'underline', color: '#00e' } } });
                }
            }
        }
    };
    /**
     * Gets the module name.
     *
     *@returns {string} - returns the module name.
     */
    WorkbookHyperlink.prototype.getModuleName = function () {
        return 'workbookHyperlink';
    };
    return WorkbookHyperlink;
}());
export { WorkbookHyperlink };
