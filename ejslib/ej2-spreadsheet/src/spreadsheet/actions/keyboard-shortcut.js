import { keyDown, cut, paste, copy, clearCopy, performUndoRedo, initiateHyperlink, editHyperlink, fillRange, renderInsertDlg, toggleFormulaBar } from '../common/index';
import { findDlg, gotoDlg, initiateFilterUI } from '../common/index';
import { setCellFormat, textDecorationUpdate, getCellIndexes, ribbonFind, getRangeIndexes, hideShow, applyNumberFormatting, insertModel } from '../../workbook/common/index';
import { getColumn, isLocked as isCellLocked, exportDialog, getFormatFromType } from '../../workbook/index';
import { setCell, getCell } from '../../workbook/base/cell';
import { isNullOrUndefined, closest, select } from '@syncfusion/ej2-base';
/**
 * Represents keyboard shortcut support for Spreadsheet.
 */
var KeyboardShortcut = /** @class */ (function () {
    /**
     * Constructor for the Spreadsheet Keyboard Shortcut module.
     *
     * @param {Spreadsheet} parent - Specify the spreadsheet.
     * @private
     */
    function KeyboardShortcut(parent) {
        this.parent = parent;
        this.addEventListener();
    }
    KeyboardShortcut.prototype.addEventListener = function () {
        this.parent.on(keyDown, this.keyDownHandler, this);
    };
    KeyboardShortcut.prototype.removeEventListener = function () {
        if (!this.parent.isDestroyed) {
            this.parent.off(keyDown, this.keyDownHandler);
        }
    };
    KeyboardShortcut.prototype.isTrgtNotInput = function (e) {
        var trgt = e.target;
        return (!closest(trgt, '.e-filter-popup')
            && !closest(trgt, '.e-find-dlg') && !closest(trgt, '.e-hyperlink-dlg') &&
            !closest(trgt, '.e-sheet-tab') && !closest(trgt, '.e-name-box') && !closest(trgt, '.e-link-dialog'));
    };
    KeyboardShortcut.prototype.ribbonShortCuts = function (e) {
        if (e.altKey && !e.ctrlKey && !e.shiftKey) {
            var tabObj = this.parent.ribbonModule.ribbon.tabObj;
            if (e.keyCode == 72) { /*alt + H =home*/
                e.preventDefault();
                tabObj.select(1);
            }
            else if (e.keyCode === 78) { /*alt + N =insert */
                tabObj.select(2);
            }
            else if (e.keyCode === 65) { /*alt + A =data */
                tabObj.select(4);
            }
            else if (e.keyCode === 87) { /*alt + W =view*/
                tabObj.select(5);
            }
            else if (e.keyCode === 77) { /*alt + M =formula */
                tabObj.select(3);
            }
            else if (e.keyCode === 70) { /*alt + F =file */
                e.preventDefault();
                select('#' + this.parent.element.id + '_File', this.parent.element).click();
            }
            else if (e.keyCode === 18) { /** alt = active tab focus */
                e.preventDefault();
                var activeCell = getCellIndexes(this.parent.getActiveSheet().activeCell);
                if (!this.parent.getCell(activeCell[0], activeCell[1]).querySelector('.e-filter-btn')) {
                    if (!closest(document.activeElement, '.e-dropdown-btn') && !closest(document.activeElement, '.e-split-btn')) {
                        if (!closest(document.activeElement, '.e-popup-open')) {
                            for (var i = 0; i <= this.parent.ribbonModule.ribbon.items.length; i++) {
                                if (i === this.parent.ribbonModule.ribbon.selectedTab) {
                                    var focusEle = this.parent.element.querySelector('.e-toolbar-items').children[i + 2].children[0];
                                    focusEle.setAttribute('tabindex', '0');
                                    focusEle.focus();
                                    return;
                                }
                            }
                        }
                    }
                }
            }
        }
        // tab and shift + tab
        if ((e.keyCode === 9 || (e.shiftKey && e.keyCode === 9)) && closest(document.activeElement, '.e-ribbon') || closest(document.activeElement, '.e-chart')) {
            var id = void 0;
            var selectedTab = this.parent.ribbonModule.ribbon.selectedTab;
            var items = this.parent.ribbonModule.ribbon.items;
            var tabItems = e.shiftKey ? items[selectedTab].content.slice().reverse() : items[selectedTab].content;
            var selectedItem = void 0;
            if (closest(document.activeElement, '.e-tab-header')) {
                selectedItem = 0;
            }
            else {
                var toolbarItem = closest(document.activeElement, '.e-toolbar-item');
                if (toolbarItem) {
                    var toolbarSibilings = [].slice.call(toolbarItem.parentElement.children);
                    selectedItem = (e.shiftKey ? toolbarSibilings.reverse().indexOf(toolbarItem) : toolbarSibilings.indexOf(toolbarItem)) + 1;
                }
            }
            for (var i = selectedItem; i <= tabItems.length; i++) {
                if (i === tabItems.length) {
                    i = -1;
                    continue;
                }
                id = (selectedTab === 5 && tabItems[i].id === '') ? tabItems[i].type.toLowerCase() : tabItems[i].id;
                if (id.indexOf('separator') < 0) {
                    if (id.includes('find')) {
                        id = id.replace('find', 'findbtn');
                    }
                    else if (selectedTab !== 5 && id.includes('chart')) {
                        id = id.replace('chart', 'chart-btn');
                    }
                    if (selectedTab === 5) {
                        if (id.includes('chart_type')) {
                            id = id.replace('chart_type', 'chart-type-btn');
                        }
                        else if (id.includes('add_chart_ element_chart')) {
                            id = id.replace('add_chart_ element_chart', '_addchart');
                        }
                    }
                    var element = this.parent.element.querySelector('#' + id);
                    if (!tabItems[i].disabled) {
                        if (element.classList.contains('e-colorpicker-wrapper')) {
                            element = element.querySelector('.e-split-btn');
                        }
                        element.focus();
                        return;
                    }
                }
            }
        }
    };
    KeyboardShortcut.prototype.keyDownHandler = function (e) {
        this.ribbonShortCuts(e);
        if ((e.ctrlKey || e.metaKey) && this.isTrgtNotInput(e)) {
            if (!closest(e.target, '.e-find-dlg')) {
                if ([79, 83].indexOf(e.keyCode) > -1) {
                    e.preventDefault();
                }
                else if (e.keyCode === 65 && !this.parent.isEdit) {
                    e.preventDefault();
                }
            }
            if (e.keyCode === 79) { /*Ctrl + O*/
                select('#' + this.parent.element.id + '_fileUpload', this.parent.element).click();
            }
            else if (e.keyCode === 83) { /*Ctrl + S*/
                if (this.parent.saveUrl && this.parent.allowSave) {
                    this.parent.notify(exportDialog, null);
                }
            }
            else if (e.keyCode === 67) { /*Ctrl + C*/
                this.parent.notify(copy, { promise: Promise });
            }
            else if (e.keyCode === 75) { /*Ctrl + K*/
                var sheet = this.parent.getActiveSheet();
                var indexes = getCellIndexes(sheet.activeCell);
                var row = this.parent.sheets[this.parent.getActiveSheet().id - 1].rows[indexes[0]];
                var cell = void 0;
                e.preventDefault();
                if (!isNullOrUndefined(row)) {
                    cell = row.cells[indexes[1]];
                }
                if (isNullOrUndefined(cell)) {
                    setCell(indexes[0], indexes[1], this.parent.getActiveSheet(), cell, false);
                }
                if (cell && cell.hyperlink) {
                    this.parent.notify(editHyperlink, null);
                }
                else {
                    this.parent.notify(initiateHyperlink, null);
                }
            }
            else if (e.keyCode === 90) { /* Ctrl + Z */
                if (!this.parent.isEdit) {
                    e.preventDefault();
                    this.parent.notify(performUndoRedo, { isUndo: true });
                }
            }
            else if (e.keyCode === 89) { /* Ctrl + Y */
                if (!this.parent.isEdit) {
                    e.preventDefault();
                    this.parent.notify(performUndoRedo, { isUndo: false });
                }
            }
            else if (e.keyCode === 82 || e.keyCode === 68) { /* Ctrl + R */ /* Ctrl + D */
                e.preventDefault();
                this.parent.notify(fillRange, { verticalFill: e.keyCode === 68 });
            }
            var actSheet = this.parent.sheets[this.parent.getActiveSheet().id - 1];
            var isLocked = void 0;
            if (actSheet) {
                var actCell = actSheet.activeCell;
                var actCellIndex = getCellIndexes(actCell);
                var cellObj = getCell(actCellIndex[0], actCellIndex[1], actSheet);
                isLocked = actSheet.isProtected && isCellLocked(cellObj, getColumn(actSheet, actCellIndex[1]));
            }
            if (e.keyCode === 70) { /* Ctrl + F */
                e.preventDefault();
                this.parent.notify(ribbonFind, null);
            }
            if ((!isLocked || !actSheet.isProtected || e.keyCode === 86) && e.keyCode !== 70) {
                if (e.keyCode === 71) { /* Ctrl + G */
                    e.preventDefault();
                    this.parent.notify(gotoDlg, null);
                }
                else if (e.keyCode === 72) { /* Ctrl + H */
                    e.preventDefault();
                    this.parent.notify(findDlg, null);
                }
                else if (e.keyCode === 88) { /* Ctrl + X */
                    this.parent.notify(cut, { promise: Promise });
                }
                else if (e.keyCode === 86) { /* Ctrl + v */
                    this.parent.notify(paste, { isAction: true });
                }
                else if (e.keyCode === 66) { /* Ctrl + B */
                    e.preventDefault();
                    var value = this.parent.getCellStyleValue(['fontWeight'], getCellIndexes(this.parent.getActiveSheet().activeCell)).fontWeight;
                    value = value === 'bold' ? 'normal' : 'bold';
                    this.parent.notify(setCellFormat, { style: { fontWeight: value }, onActionUpdate: true, refreshRibbon: true });
                }
                else if (e.keyCode === 73) { /* Ctrl + B */
                    e.preventDefault();
                    var value = this.parent.getCellStyleValue(['fontStyle'], getCellIndexes(this.parent.getActiveSheet().activeCell)).fontStyle;
                    value = value === 'italic' ? 'normal' : 'italic';
                    this.parent.notify(setCellFormat, { style: { fontStyle: value }, onActionUpdate: true, refreshRibbon: true });
                }
                else if (e.ctrlKey && e.keyCode === 85 && !e.shiftKey) { /* Ctrl + U */
                    e.preventDefault();
                    this.parent.notify(textDecorationUpdate, { style: { textDecoration: 'underline' }, refreshRibbon: true });
                }
                else if (e.ctrlKey && e.keyCode === 53 && !e.shiftKey) { /* Ctrl + 5 */
                    e.preventDefault();
                    this.parent.notify(textDecorationUpdate, { style: { textDecoration: 'line-through' }, refreshRibbon: true });
                }
                if (e.shiftKey) {
                    if (e.keyCode === 76) { /* Ctrl + Shift + L */
                        if (!this.parent.isEdit) {
                            e.preventDefault();
                            this.parent.notify(initiateFilterUI, {});
                        }
                    }
                }
            }
        }
        if (e.keyCode === 27) { /*ESC*/
            this.parent.notify(clearCopy, null);
        }
        if (((e.ctrlKey || e.metaKey) && e.keyCode === 119)) { /*ctrl + f8*/
            e.preventDefault();
            this.parent.ribbonModule.ribbon.ribbonExpandCollapse();
        }
        //general key actions
        if (e.ctrlKey || e.metaKey) {
            var indexes = getRangeIndexes(this.parent.getActiveSheet().selectedRange);
            if (e.keyCode === 57) { /*ctrl + 9(row-hide)*/
                e.preventDefault();
                this.parent.notify(hideShow, {
                    startIndex: indexes[0], endIndex: indexes[2], hide: e.shiftKey ? false : true, isCol: false, actionUpdate: true
                });
            }
            else if (e.keyCode === 48) { /*ctrl + 0(col-hide)*/
                this.parent.notify(hideShow, {
                    startIndex: indexes[1], endIndex: indexes[3], hide: e.shiftKey ? false : true, isCol: true, actionUpdate: true
                });
            }
            else if (e.keyCode === 55) { /*ctrl + &(ampersand)*/
                e.preventDefault();
                var border = '1px solid #000000';
                this.parent.notify(setCellFormat, { style: { border: border }, onActionUpdate: true, borderType: 'Outer' });
            }
        }
        if (e.shiftKey && e.keyCode === 114) { /*shift + F3(insert-function dialog)*/
            e.preventDefault();
            this.parent.notify(renderInsertDlg, null);
        }
        if ((e.ctrlKey || e.metaKey) && e.altKey && e.keyCode === 78) { /*ctrl+alt+N*/
            e.preventDefault();
            this.parent.refresh(true);
        }
        //number-formatting
        if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
            var sheet = this.parent.getActiveSheet();
            var range = sheet.selectedRange;
            var format = void 0;
            if (e.keyCode === 192) { /*ctrl + shift + ~General*/
                format = getFormatFromType('General');
            }
            else if (e.keyCode === 52) { /*ctrl + shift + $(currency)*/
                format = '$#,##0.00;[Red]($#,##0.00)';
            }
            else if (e.keyCode === 53) { /*ctrl + shift + %(percent)*/
                format = '0%';
            }
            else if (e.keyCode === 54) { /*ctrl + shift + ^(scentific)*/
                format = getFormatFromType('Scientific');
            }
            else if (e.keyCode === 51) { /*ctrl + shift + #(Date)*/
                format = 'dd-mmm-yy';
            }
            else if (e.keyCode === 50) { /*ctrl + shift + @(Time)*/
                format = 'h:mm AM/PM';
            }
            else if (e.keyCode === 49) { /*ctrl + shift + !(Number)*/
                format = '#,###.00';
            }
            else if (e.keyCode === 85) { /*ctrl + shift + U*/
                e.preventDefault();
                this.parent.notify(toggleFormulaBar, null);
            }
            else if (e.keyCode === 55) { /*ctrl + shift + &(ampersand)*/
                e.preventDefault();
                this.parent.notify(setCellFormat, { style: { border: '' }, onActionUpdate: true });
            }
            if (format) {
                this.parent.notify(applyNumberFormatting, { format: format, range: range });
            }
        }
        if (e.shiftKey && e.keyCode == 122) { // shift+f11
            this.parent.notify(insertModel, {
                model: this.parent, start: this.parent.activeSheetIndex + 1, end: this.parent.activeSheetIndex + 1, modelType: 'Sheet', isAction: true, activeSheetIndex: this.parent.activeSheetIndex + 1
            });
        }
        if (e.shiftKey && e.altKey && e.keyCode === 75) { /* Shift + Alt + K*/
            this.parent.element.querySelector('.e-sheets-list').click();
        }
    };
    KeyboardShortcut.prototype.getModuleName = function () {
        return 'keyboardShortcut';
    };
    KeyboardShortcut.prototype.destroy = function () {
        this.removeEventListener();
        this.parent = null;
    };
    return KeyboardShortcut;
}());
export { KeyboardShortcut };
