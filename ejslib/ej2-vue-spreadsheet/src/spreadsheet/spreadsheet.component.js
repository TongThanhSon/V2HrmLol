var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ComponentBase, EJComponentDecorator, getProps, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { ImagesDirective, ImageDirective, ImagesPlugin, ImagePlugin } from './image.directive';
import { ChartsDirective, ChartDirective, ChartsPlugin, ChartPlugin } from './chart.directive';
import { CellsDirective, CellDirective, CellsPlugin, CellPlugin } from './cells.directive';
import { RowsDirective, RowDirective, RowsPlugin, RowPlugin } from './rows.directive';
import { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin } from './columns.directive';
import { RangesDirective, RangeDirective, RangesPlugin, RangePlugin } from './ranges.directive';
import { ConditionalFormatsDirective, ConditionalFormatDirective, ConditionalFormatsPlugin, ConditionalFormatPlugin } from './conditionalformats.directive';
import { SheetsDirective, SheetDirective, SheetsPlugin, SheetPlugin } from './sheets.directive';
import { DefinedNamesDirective, DefinedNameDirective, DefinedNamesPlugin, DefinedNamePlugin } from './definednames.directive';
// {{VueImport}}
export var properties = ['isLazyUpdate', 'plugins', 'activeSheetIndex', 'allowAutoFill', 'allowCellFormatting', 'allowChart', 'allowConditionalFormat', 'allowDataValidation', 'allowDelete', 'allowEditing', 'allowFiltering', 'allowFindAndReplace', 'allowFreezePane', 'allowHyperlink', 'allowImage', 'allowInsert', 'allowMerge', 'allowNumberFormatting', 'allowOpen', 'allowResizing', 'allowSave', 'allowScrolling', 'allowSorting', 'allowUndoRedo', 'allowWrap', 'autoFillSettings', 'cellStyle', 'cssClass', 'definedNames', 'enableClipboard', 'enableContextMenu', 'enableKeyboardNavigation', 'enableKeyboardShortcut', 'enablePersistence', 'enableRtl', 'height', 'isProtected', 'locale', 'openUrl', 'password', 'saveUrl', 'scrollSettings', 'selectionSettings', 'sheets', 'showAggregate', 'showFormulaBar', 'showRibbon', 'showSheetTabs', 'width', 'actionBegin', 'actionComplete', 'afterHyperlinkClick', 'afterHyperlinkCreate', 'beforeCellFormat', 'beforeCellRender', 'beforeCellSave', 'beforeCellUpdate', 'beforeConditionalFormat', 'beforeDataBound', 'beforeHyperlinkClick', 'beforeHyperlinkCreate', 'beforeOpen', 'beforeSave', 'beforeSelect', 'beforeSort', 'cellEdit', 'cellEditing', 'cellSave', 'contextMenuBeforeClose', 'contextMenuBeforeOpen', 'contextMenuItemSelect', 'created', 'dataBound', 'dataSourceChanged', 'dialogBeforeOpen', 'fileMenuBeforeClose', 'fileMenuBeforeOpen', 'fileMenuItemSelect', 'openComplete', 'openFailure', 'queryCellInfo', 'saveComplete', 'select', 'sortComplete'];
export var modelProps = [];
export var testProp = getProps({ props: properties });
export var props = testProp[0];
export var watch = testProp[1];
export var emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (var _i = 0, modelProps_1 = modelProps; _i < modelProps_1.length; _i++) {
    var props_1 = modelProps_1[_i];
    emitProbs.push('update:' + props_1);
}
export var isExecute = gh ? false : true;
/**
 * `ejs-spreadsheet` represents the VueJS Spreadsheet Component.
 * ```vue
 * <ejs-spreadsheet></ejs-spreadsheet>
 * ```
 */
var SpreadsheetComponent = /** @class */ (function (_super) {
    __extends(SpreadsheetComponent, _super);
    function SpreadsheetComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-sheets": { "e-sheet": { "e-rows": { "e-row": { "e-cells": { "e-cell": { "e-images": "e-image", "e-charts": "e-chart" } } } }, "e-columns": "e-column", "e-ranges": "e-range", "e-conditionalformats": "e-conditionalformat" } }, "e-definednames": "e-definedname" };
        _this.tagNameMapper = { "e-images": "e-image", "e-charts": "e-chart", "e-conditionalformats": "e-conditionalFormats", "e-definednames": "e-definedNames" };
        _this.isVue3 = !isExecute;
        _this.ej2Instances = new Spreadsheet({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    SpreadsheetComponent.prototype.clearTemplate = function (templateNames) {
        if (!templateNames) {
            templateNames = Object.keys(this.templateCollection || {});
        }
        if (templateNames.length && this.templateCollection) {
            for (var _i = 0, templateNames_1 = templateNames; _i < templateNames_1.length; _i++) {
                var tempName = templateNames_1[_i];
                var elementCollection = this.templateCollection[tempName];
                if (elementCollection && elementCollection.length) {
                    for (var _a = 0, elementCollection_1 = elementCollection; _a < elementCollection_1.length; _a++) {
                        var ele = elementCollection_1[_a];
                        var destroy = getValue('__vue__.$destroy', ele);
                        if (destroy) {
                            ele.__vue__.$destroy();
                        }
                        if (ele.innerHTML) {
                            ele.innerHTML = '';
                        }
                    }
                    delete this.templateCollection[tempName];
                }
            }
        }
    };
    SpreadsheetComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.isVue3) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        if (_this.isVue3) {
                            _this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                        }
                        else {
                            _this.$emit('update:' + key, prop[key]);
                            _this.$emit('modelchanged', prop[key]);
                        }
                    }
                });
            });
        }
    };
    SpreadsheetComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    SpreadsheetComponent.prototype.custom = function () {
        this.updated();
    };
    SpreadsheetComponent.prototype.Unfreeze = function (sheet) {
        return this.ej2Instances.Unfreeze(sheet);
    };
    SpreadsheetComponent.prototype.addContextMenuItems = function (items, text, insertAfter, isUniqueId) {
        return this.ej2Instances.addContextMenuItems(items, text, insertAfter, isUniqueId);
    };
    SpreadsheetComponent.prototype.addCustomFunction = function (functionHandler, functionName) {
        return this.ej2Instances.addCustomFunction(functionHandler, functionName);
    };
    SpreadsheetComponent.prototype.addDataValidation = function (rules, range) {
        return this.ej2Instances.addDataValidation(rules, range);
    };
    SpreadsheetComponent.prototype.addDefinedName = function (definedName) {
        return this.ej2Instances.addDefinedName(definedName);
    };
    SpreadsheetComponent.prototype.addFileMenuItems = function (items, text, insertAfter, isUniqueId) {
        return this.ej2Instances.addFileMenuItems(items, text, insertAfter, isUniqueId);
    };
    SpreadsheetComponent.prototype.addHyperlink = function (hyperlink, address, displayText) {
        return this.ej2Instances.addHyperlink(hyperlink, address, displayText);
    };
    SpreadsheetComponent.prototype.addInvalidHighlight = function (range) {
        return this.ej2Instances.addInvalidHighlight(range);
    };
    SpreadsheetComponent.prototype.addRibbonTabs = function (items, insertBefore) {
        return this.ej2Instances.addRibbonTabs(items, insertBefore);
    };
    SpreadsheetComponent.prototype.addToolbarItems = function (tab, items, index) {
        return this.ej2Instances.addToolbarItems(tab, items, index);
    };
    SpreadsheetComponent.prototype.applyFilter = function (predicates, range) {
        return this.ej2Instances.applyFilter(predicates, range);
    };
    SpreadsheetComponent.prototype.autoFill = function (fillRange, dataRange, direction, fillType) {
        return this.ej2Instances.autoFill(fillRange, dataRange, direction, fillType);
    };
    SpreadsheetComponent.prototype.autoFit = function (range) {
        return this.ej2Instances.autoFit(range);
    };
    SpreadsheetComponent.prototype.cellFormat = function (style, range) {
        return this.ej2Instances.cellFormat(style, range);
    };
    SpreadsheetComponent.prototype.clear = function (options) {
        return this.ej2Instances.clear(options);
    };
    SpreadsheetComponent.prototype.clearConditionalFormat = function (range) {
        return this.ej2Instances.clearConditionalFormat(range);
    };
    SpreadsheetComponent.prototype.clearFilter = function (field) {
        return this.ej2Instances.clearFilter(field);
    };
    SpreadsheetComponent.prototype.closeEdit = function () {
        return this.ej2Instances.closeEdit();
    };
    SpreadsheetComponent.prototype.computeExpression = function (formula) {
        return this.ej2Instances.computeExpression(formula);
    };
    SpreadsheetComponent.prototype.conditionalFormat = function (conditionalFormat) {
        return this.ej2Instances.conditionalFormat(conditionalFormat);
    };
    SpreadsheetComponent.prototype.copy = function (address) {
        return this.ej2Instances.copy(address);
    };
    SpreadsheetComponent.prototype.cut = function (address) {
        return this.ej2Instances.cut(address);
    };
    SpreadsheetComponent.prototype.delete = function (startIndex, endIndex, model, sheet) {
        return this.ej2Instances.delete(startIndex, endIndex, model, sheet);
    };
    SpreadsheetComponent.prototype.deleteChart = function (id) {
        return this.ej2Instances.deleteChart(id);
    };
    SpreadsheetComponent.prototype.deleteImage = function (id, range) {
        return this.ej2Instances.deleteImage(id, range);
    };
    SpreadsheetComponent.prototype.duplicateSheet = function (sheetIndex) {
        return this.ej2Instances.duplicateSheet(sheetIndex);
    };
    SpreadsheetComponent.prototype.enableContextMenuItems = function (items, enable, isUniqueId) {
        return this.ej2Instances.enableContextMenuItems(items, enable, isUniqueId);
    };
    SpreadsheetComponent.prototype.enableFileMenuItems = function (items, enable, isUniqueId) {
        return this.ej2Instances.enableFileMenuItems(items, enable, isUniqueId);
    };
    SpreadsheetComponent.prototype.enableRibbonTabs = function (tabs, enable) {
        return this.ej2Instances.enableRibbonTabs(tabs, enable);
    };
    SpreadsheetComponent.prototype.enableToolbarItems = function (tab, items, enable) {
        return this.ej2Instances.enableToolbarItems(tab, items, enable);
    };
    SpreadsheetComponent.prototype.endEdit = function () {
        return this.ej2Instances.endEdit();
    };
    SpreadsheetComponent.prototype.find = function (args) {
        return this.ej2Instances.find(args);
    };
    SpreadsheetComponent.prototype.findAll = function (value, mode, isCSen, isEMatch, sheetIndex) {
        return this.ej2Instances.findAll(value, mode, isCSen, isEMatch, sheetIndex);
    };
    SpreadsheetComponent.prototype.freezePanes = function (row, column, sheet) {
        return this.ej2Instances.freezePanes(row, column, sheet);
    };
    SpreadsheetComponent.prototype.getData = function (address) {
        return this.ej2Instances.getData(address);
    };
    SpreadsheetComponent.prototype.getDisplayText = function (cell) {
        return this.ej2Instances.getDisplayText(cell);
    };
    SpreadsheetComponent.prototype.getRowData = function (index, sheetIndex) {
        return this.ej2Instances.getRowData(index, sheetIndex);
    };
    SpreadsheetComponent.prototype.getSelectAllContent = function () {
        return this.ej2Instances.getSelectAllContent();
    };
    SpreadsheetComponent.prototype.goTo = function (address) {
        return this.ej2Instances.goTo(address);
    };
    SpreadsheetComponent.prototype.hideColumn = function (startIndex, endIndex, hide) {
        return this.ej2Instances.hideColumn(startIndex, endIndex, hide);
    };
    SpreadsheetComponent.prototype.hideFileMenuItems = function (items, hide, isUniqueId) {
        return this.ej2Instances.hideFileMenuItems(items, hide, isUniqueId);
    };
    SpreadsheetComponent.prototype.hideRibbonTabs = function (tabs, hide) {
        return this.ej2Instances.hideRibbonTabs(tabs, hide);
    };
    SpreadsheetComponent.prototype.hideRow = function (startIndex, endIndex, hide) {
        return this.ej2Instances.hideRow(startIndex, endIndex, hide);
    };
    SpreadsheetComponent.prototype.hideSpinner = function () {
        return this.ej2Instances.hideSpinner();
    };
    SpreadsheetComponent.prototype.hideToolbarItems = function (tab, indexes, hide) {
        return this.ej2Instances.hideToolbarItems(tab, indexes, hide);
    };
    SpreadsheetComponent.prototype.insertChart = function (chart) {
        return this.ej2Instances.insertChart(chart);
    };
    SpreadsheetComponent.prototype.insertColumn = function (startColumn, endColumn, sheet) {
        return this.ej2Instances.insertColumn(startColumn, endColumn, sheet);
    };
    SpreadsheetComponent.prototype.insertImage = function (images, range) {
        return this.ej2Instances.insertImage(images, range);
    };
    SpreadsheetComponent.prototype.insertRow = function (startRow, endRow, sheet) {
        return this.ej2Instances.insertRow(startRow, endRow, sheet);
    };
    SpreadsheetComponent.prototype.insertSheet = function (startSheet, endSheet) {
        return this.ej2Instances.insertSheet(startSheet, endSheet);
    };
    SpreadsheetComponent.prototype.isValidCell = function (cellAddress) {
        return this.ej2Instances.isValidCell(cellAddress);
    };
    SpreadsheetComponent.prototype.lockCells = function (range, isLocked) {
        return this.ej2Instances.lockCells(range, isLocked);
    };
    SpreadsheetComponent.prototype.merge = function (range, type) {
        return this.ej2Instances.merge(range, type);
    };
    SpreadsheetComponent.prototype.moveSheet = function (position, sheetIndexes) {
        return this.ej2Instances.moveSheet(position, sheetIndexes);
    };
    SpreadsheetComponent.prototype.numberFormat = function (format, range) {
        return this.ej2Instances.numberFormat(format, range);
    };
    SpreadsheetComponent.prototype.open = function (options) {
        return this.ej2Instances.open(options);
    };
    SpreadsheetComponent.prototype.openFromJson = function (options) {
        return this.ej2Instances.openFromJson(options);
    };
    SpreadsheetComponent.prototype.paste = function (address, type) {
        return this.ej2Instances.paste(address, type);
    };
    SpreadsheetComponent.prototype.protectSheet = function (sheet, protectSettings, password) {
        return this.ej2Instances.protectSheet(sheet, protectSettings, password);
    };
    SpreadsheetComponent.prototype.redo = function () {
        return this.ej2Instances.redo();
    };
    SpreadsheetComponent.prototype.refresh = function (isNew) {
        return this.ej2Instances.refresh(isNew);
    };
    SpreadsheetComponent.prototype.removeContextMenuItems = function (items, isUniqueId) {
        return this.ej2Instances.removeContextMenuItems(items, isUniqueId);
    };
    SpreadsheetComponent.prototype.removeDataValidation = function (range) {
        return this.ej2Instances.removeDataValidation(range);
    };
    SpreadsheetComponent.prototype.removeDefinedName = function (definedName, scope) {
        return this.ej2Instances.removeDefinedName(definedName, scope);
    };
    SpreadsheetComponent.prototype.removeHyperlink = function (range) {
        return this.ej2Instances.removeHyperlink(range);
    };
    SpreadsheetComponent.prototype.removeInvalidHighlight = function (range) {
        return this.ej2Instances.removeInvalidHighlight(range);
    };
    SpreadsheetComponent.prototype.replace = function (args) {
        return this.ej2Instances.replace(args);
    };
    SpreadsheetComponent.prototype.resize = function () {
        return this.ej2Instances.resize();
    };
    SpreadsheetComponent.prototype.save = function (saveOptions) {
        return this.ej2Instances.save(saveOptions);
    };
    SpreadsheetComponent.prototype.saveAsJson = function () {
        return this.ej2Instances.saveAsJson();
    };
    SpreadsheetComponent.prototype.selectRange = function (address) {
        return this.ej2Instances.selectRange(address);
    };
    SpreadsheetComponent.prototype.setBorder = function (style, range, type) {
        return this.ej2Instances.setBorder(style, range, type);
    };
    SpreadsheetComponent.prototype.setColWidth = function (width, colIndex, sheetIndex) {
        return this.ej2Instances.setColWidth(width, colIndex, sheetIndex);
    };
    SpreadsheetComponent.prototype.setRowHeight = function (height, rowIndex, sheetIndex, edited) {
        return this.ej2Instances.setRowHeight(height, rowIndex, sheetIndex, edited);
    };
    SpreadsheetComponent.prototype.showSpinner = function () {
        return this.ej2Instances.showSpinner();
    };
    SpreadsheetComponent.prototype.sort = function (sortOptions, range) {
        return this.ej2Instances.sort(sortOptions, range);
    };
    SpreadsheetComponent.prototype.startEdit = function () {
        return this.ej2Instances.startEdit();
    };
    SpreadsheetComponent.prototype.unMerge = function (range) {
        return this.ej2Instances.unMerge(range);
    };
    SpreadsheetComponent.prototype.undo = function () {
        return this.ej2Instances.undo();
    };
    SpreadsheetComponent.prototype.unfreezePanes = function (sheet) {
        return this.ej2Instances.unfreezePanes(sheet);
    };
    SpreadsheetComponent.prototype.unprotectSheet = function (sheet) {
        return this.ej2Instances.unprotectSheet(sheet);
    };
    SpreadsheetComponent.prototype.updateAction = function (options) {
        return this.ej2Instances.updateAction(options);
    };
    SpreadsheetComponent.prototype.updateCell = function (cell, address) {
        return this.ej2Instances.updateCell(cell, address);
    };
    SpreadsheetComponent.prototype.updateRange = function (range, sheetIdx) {
        return this.ej2Instances.updateRange(range, sheetIdx);
    };
    SpreadsheetComponent.prototype.updateUndoRedoCollection = function (args) {
        return this.ej2Instances.updateUndoRedoCollection(args);
    };
    SpreadsheetComponent.prototype.wrap = function (address, wrap) {
        return this.ej2Instances.wrap(address, wrap);
    };
    SpreadsheetComponent = __decorate([
        EJComponentDecorator({
            props: properties
        }, isExecute)
        /* Start Options({
            props: props,
            watch: watch,
            emits: emitProbs,
            provide: function provide() {
                return {
                    custom: this.custom
                };
            }
        }) End */
    ], SpreadsheetComponent);
    return SpreadsheetComponent;
}(ComponentBase));
export { SpreadsheetComponent };
export var SpreadsheetPlugin = {
    name: 'ejs-spreadsheet',
    install: function (Vue) {
        Vue.component(SpreadsheetPlugin.name, SpreadsheetComponent);
        Vue.component(SheetPlugin.name, SheetDirective);
        Vue.component(SheetsPlugin.name, SheetsDirective);
        Vue.component(RowPlugin.name, RowDirective);
        Vue.component(RowsPlugin.name, RowsDirective);
        Vue.component(CellPlugin.name, CellDirective);
        Vue.component(CellsPlugin.name, CellsDirective);
        Vue.component(ImagePlugin.name, ImageDirective);
        Vue.component(ImagesPlugin.name, ImagesDirective);
        Vue.component(ChartPlugin.name, ChartDirective);
        Vue.component(ChartsPlugin.name, ChartsDirective);
        Vue.component(ColumnPlugin.name, ColumnDirective);
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
        Vue.component(RangePlugin.name, RangeDirective);
        Vue.component(RangesPlugin.name, RangesDirective);
        Vue.component(ConditionalFormatPlugin.name, ConditionalFormatDirective);
        Vue.component(ConditionalFormatsPlugin.name, ConditionalFormatsDirective);
        Vue.component(DefinedNamePlugin.name, DefinedNameDirective);
        Vue.component(DefinedNamesPlugin.name, DefinedNamesDirective);
    }
};
