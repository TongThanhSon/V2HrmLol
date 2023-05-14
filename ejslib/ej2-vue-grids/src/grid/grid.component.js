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
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator, getProps, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';
import { Grid } from '@syncfusion/ej2-grids';
import { StackedColumnsDirective, StackedColumnDirective, StackedColumnsPlugin, StackedColumnPlugin } from './stacked-column.directive';
import { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin } from './columns.directive';
import { AggregateColumnsDirective, AggregateColumnDirective, AggregateColumnsPlugin, AggregateColumnPlugin } from './aggregate-columns.directive';
import { AggregatesDirective, AggregateDirective, AggregatesPlugin, AggregatePlugin } from './aggregates.directive';
// {{VueImport}}
export var properties = ['isLazyUpdate', 'plugins', 'aggregates', 'allowExcelExport', 'allowFiltering', 'allowGrouping', 'allowKeyboard', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'childGrid', 'clipMode', 'columnChooserSettings', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'cssClass', 'currencyCode', 'currentAction', 'dataSource', 'detailTemplate', 'editSettings', 'ej2StatePersistenceVersion', 'enableAdaptiveUI', 'enableAltRow', 'enableAutoFill', 'enableColumnVirtualization', 'enableHeaderFocus', 'enableHover', 'enableImmutableMode', 'enableInfiniteScrolling', 'enablePersistence', 'enableRtl', 'enableStickyHeader', 'enableVirtualization', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'groupSettings', 'height', 'hierarchyPrintMode', 'infiniteScrollSettings', 'locale', 'pageSettings', 'pagerTemplate', 'parentDetails', 'printMode', 'query', 'queryString', 'resizeSettings', 'rowDropSettings', 'rowHeight', 'rowRenderingMode', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'toolbarTemplate', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'batchAdd', 'batchCancel', 'batchDelete', 'beforeAutoFill', 'beforeBatchAdd', 'beforeBatchDelete', 'beforeBatchSave', 'beforeCopy', 'beforeDataBound', 'beforeExcelExport', 'beforeOpenAdaptiveDialog', 'beforeOpenColumnChooser', 'beforePaste', 'beforePdfExport', 'beforePrint', 'beginEdit', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSave', 'cellSaved', 'cellSelected', 'cellSelecting', 'checkBoxChange', 'columnDataStateChange', 'columnDeselected', 'columnDeselecting', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'columnSelected', 'columnSelecting', 'commandClick', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'destroyed', 'detailDataBound', 'excelAggregateQueryCellInfo', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'exportDetailDataBound', 'exportGroupCaption', 'headerCellInfo', 'keyPressed', 'lazyLoadGroupCollapse', 'lazyLoadGroupExpand', 'load', 'pdfAggregateQueryCellInfo', 'pdfExportComplete', 'pdfHeaderQueryCellInfo', 'pdfQueryCellInfo', 'printComplete', 'queryCellInfo', 'recordClick', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'toolbarClick'];
export var modelProps = ['dataSource'];
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
 * `ejs-grid` represents the VueJS Grid Component.
 * ```vue
 * <ejs-grid :dataSource='data' allowPaging='true' allowSorting='true'></ejs-grid>
 * ```
 */
var GridComponent = /** @class */ (function (_super) {
    __extends(GridComponent, _super);
    function GridComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-columns": { "e-column": { "e-stacked-columns": "e-stacked-column" } }, "e-aggregates": { "e-aggregate": { "e-columns": "e-column" } } };
        _this.tagNameMapper = { "e-stacked-columns": "e-columns" };
        _this.isVue3 = !isExecute;
        _this.ej2Instances = new Grid({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    GridComponent.prototype.clearTemplate = function (templateNames) {
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
    GridComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    GridComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if (!isExecute) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                }
                else {
                    if (eventName === 'change' || (this.$props && !this.$props.isLazyUpdate)) {
                        this.$emit('update:' + propKey, eventProp[propKey]);
                        this.$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/currentView|selectedDate/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                }
                else {
                    this.$emit('update:' + propKey, eventProp[propKey]);
                    this.$emit('modelchanged', eventProp[propKey]);
                }
            }
        }
        if ((this.ej2Instances && this.ej2Instances._trigger)) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    GridComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    GridComponent.prototype.custom = function () {
        this.updated();
    };
    GridComponent.prototype.addRecord = function (data, index) {
        return this.ej2Instances.addRecord(data, index);
    };
    GridComponent.prototype.autoFitColumns = function (fieldNames) {
        return this.ej2Instances.autoFitColumns(fieldNames);
    };
    GridComponent.prototype.batchAsyncUpdate = function (changes) {
        return this.ej2Instances.batchAsyncUpdate(changes);
    };
    GridComponent.prototype.batchUpdate = function (changes) {
        return this.ej2Instances.batchUpdate(changes);
    };
    GridComponent.prototype.calculatePageSizeByParentHeight = function (containerHeight) {
        return this.ej2Instances.calculatePageSizeByParentHeight(containerHeight);
    };
    GridComponent.prototype.clearCellSelection = function () {
        return this.ej2Instances.clearCellSelection();
    };
    GridComponent.prototype.clearFiltering = function (fields) {
        return this.ej2Instances.clearFiltering(fields);
    };
    GridComponent.prototype.clearGrouping = function () {
        return this.ej2Instances.clearGrouping();
    };
    GridComponent.prototype.clearRowSelection = function () {
        return this.ej2Instances.clearRowSelection();
    };
    GridComponent.prototype.clearSelection = function () {
        return this.ej2Instances.clearSelection();
    };
    GridComponent.prototype.clearSorting = function () {
        return this.ej2Instances.clearSorting();
    };
    GridComponent.prototype.closeEdit = function () {
        return this.ej2Instances.closeEdit();
    };
    GridComponent.prototype.copy = function (withHeader) {
        return this.ej2Instances.copy(withHeader);
    };
    GridComponent.prototype.csvExport = function (excelExportProperties, isMultipleExport, workbook, isBlob) {
        return this.ej2Instances.csvExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    };
    GridComponent.prototype.dataReady = function () {
        return this.ej2Instances.dataReady();
    };
    GridComponent.prototype.deleteRecord = function (fieldname, data) {
        return this.ej2Instances.deleteRecord(fieldname, data);
    };
    GridComponent.prototype.deleteRow = function (tr) {
        return this.ej2Instances.deleteRow(tr);
    };
    GridComponent.prototype.destroyTemplate = function (propertyNames, index) {
        return this.ej2Instances.destroyTemplate(propertyNames, index);
    };
    GridComponent.prototype.detailCollapseAll = function () {
        return this.ej2Instances.detailCollapseAll();
    };
    GridComponent.prototype.detailExpandAll = function () {
        return this.ej2Instances.detailExpandAll();
    };
    GridComponent.prototype.editCell = function (index, field) {
        return this.ej2Instances.editCell(index, field);
    };
    GridComponent.prototype.enableToolbarItems = function (items, isEnable) {
        return this.ej2Instances.enableToolbarItems(items, isEnable);
    };
    GridComponent.prototype.endEdit = function () {
        return this.ej2Instances.endEdit();
    };
    GridComponent.prototype.excelExport = function (excelExportProperties, isMultipleExport, workbook, isBlob) {
        return this.ej2Instances.excelExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    };
    GridComponent.prototype.extendRequiredModules = function (modules) {
        return this.ej2Instances.extendRequiredModules(modules);
    };
    GridComponent.prototype.filterByColumn = function (fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator) {
        return this.ej2Instances.filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator);
    };
    GridComponent.prototype.getBatchChanges = function () {
        return this.ej2Instances.getBatchChanges();
    };
    GridComponent.prototype.getCellFromIndex = function (rowIndex, columnIndex) {
        return this.ej2Instances.getCellFromIndex(rowIndex, columnIndex);
    };
    GridComponent.prototype.getColumnByField = function (field) {
        return this.ej2Instances.getColumnByField(field);
    };
    GridComponent.prototype.getColumnByUid = function (uid) {
        return this.ej2Instances.getColumnByUid(uid);
    };
    GridComponent.prototype.getColumnFieldNames = function () {
        return this.ej2Instances.getColumnFieldNames();
    };
    GridComponent.prototype.getColumnHeaderByField = function (field) {
        return this.ej2Instances.getColumnHeaderByField(field);
    };
    GridComponent.prototype.getColumnHeaderByIndex = function (index) {
        return this.ej2Instances.getColumnHeaderByIndex(index);
    };
    GridComponent.prototype.getColumnHeaderByUid = function (uid) {
        return this.ej2Instances.getColumnHeaderByUid(uid);
    };
    GridComponent.prototype.getColumnIndexByField = function (field) {
        return this.ej2Instances.getColumnIndexByField(field);
    };
    GridComponent.prototype.getColumnIndexByUid = function (uid) {
        return this.ej2Instances.getColumnIndexByUid(uid);
    };
    GridComponent.prototype.getColumns = function (isRefresh) {
        return this.ej2Instances.getColumns(isRefresh);
    };
    GridComponent.prototype.getContent = function () {
        return this.ej2Instances.getContent();
    };
    GridComponent.prototype.getContentTable = function () {
        return this.ej2Instances.getContentTable();
    };
    GridComponent.prototype.getCurrentViewRecords = function () {
        return this.ej2Instances.getCurrentViewRecords();
    };
    GridComponent.prototype.getDataModule = function () {
        return this.ej2Instances.getDataModule();
    };
    GridComponent.prototype.getDataRows = function () {
        return this.ej2Instances.getDataRows();
    };
    GridComponent.prototype.getFilterUIInfo = function () {
        return this.ej2Instances.getFilterUIInfo();
    };
    GridComponent.prototype.getFilteredRecords = function () {
        return this.ej2Instances.getFilteredRecords();
    };
    GridComponent.prototype.getFooterContent = function () {
        return this.ej2Instances.getFooterContent();
    };
    GridComponent.prototype.getFooterContentTable = function () {
        return this.ej2Instances.getFooterContentTable();
    };
    GridComponent.prototype.getForeignKeyColumns = function () {
        return this.ej2Instances.getForeignKeyColumns();
    };
    GridComponent.prototype.getFrozenDataRows = function () {
        return this.ej2Instances.getFrozenDataRows();
    };
    GridComponent.prototype.getFrozenLeftColumnHeaderByIndex = function (index) {
        return this.ej2Instances.getFrozenLeftColumnHeaderByIndex(index);
    };
    GridComponent.prototype.getFrozenLeftCount = function () {
        return this.ej2Instances.getFrozenLeftCount();
    };
    GridComponent.prototype.getFrozenMode = function () {
        return this.ej2Instances.getFrozenMode();
    };
    GridComponent.prototype.getFrozenRightCellFromIndex = function (rowIndex, columnIndex) {
        return this.ej2Instances.getFrozenRightCellFromIndex(rowIndex, columnIndex);
    };
    GridComponent.prototype.getFrozenRightColumnHeaderByIndex = function (index) {
        return this.ej2Instances.getFrozenRightColumnHeaderByIndex(index);
    };
    GridComponent.prototype.getFrozenRightDataRows = function () {
        return this.ej2Instances.getFrozenRightDataRows();
    };
    GridComponent.prototype.getFrozenRightRowByIndex = function (index) {
        return this.ej2Instances.getFrozenRightRowByIndex(index);
    };
    GridComponent.prototype.getFrozenRightRows = function () {
        return this.ej2Instances.getFrozenRightRows();
    };
    GridComponent.prototype.getFrozenRowByIndex = function (index) {
        return this.ej2Instances.getFrozenRowByIndex(index);
    };
    GridComponent.prototype.getHeaderContent = function () {
        return this.ej2Instances.getHeaderContent();
    };
    GridComponent.prototype.getHeaderTable = function () {
        return this.ej2Instances.getHeaderTable();
    };
    GridComponent.prototype.getHiddenColumns = function () {
        return this.ej2Instances.getHiddenColumns();
    };
    GridComponent.prototype.getMediaColumns = function () {
        return this.ej2Instances.getMediaColumns();
    };
    GridComponent.prototype.getMovableCellFromIndex = function (rowIndex, columnIndex) {
        return this.ej2Instances.getMovableCellFromIndex(rowIndex, columnIndex);
    };
    GridComponent.prototype.getMovableColumnHeaderByIndex = function (index) {
        return this.ej2Instances.getMovableColumnHeaderByIndex(index);
    };
    GridComponent.prototype.getMovableDataRows = function () {
        return this.ej2Instances.getMovableDataRows();
    };
    GridComponent.prototype.getMovableRowByIndex = function (index) {
        return this.ej2Instances.getMovableRowByIndex(index);
    };
    GridComponent.prototype.getMovableRows = function () {
        return this.ej2Instances.getMovableRows();
    };
    GridComponent.prototype.getPager = function () {
        return this.ej2Instances.getPager();
    };
    GridComponent.prototype.getPrimaryKeyFieldNames = function () {
        return this.ej2Instances.getPrimaryKeyFieldNames();
    };
    GridComponent.prototype.getRowByIndex = function (index) {
        return this.ej2Instances.getRowByIndex(index);
    };
    GridComponent.prototype.getRowIndexByPrimaryKey = function (value) {
        return this.ej2Instances.getRowIndexByPrimaryKey(value);
    };
    GridComponent.prototype.getRowInfo = function (target) {
        return this.ej2Instances.getRowInfo(target);
    };
    GridComponent.prototype.getRows = function () {
        return this.ej2Instances.getRows();
    };
    GridComponent.prototype.getSelectedColumnsUid = function () {
        return this.ej2Instances.getSelectedColumnsUid();
    };
    GridComponent.prototype.getSelectedRecords = function () {
        return this.ej2Instances.getSelectedRecords();
    };
    GridComponent.prototype.getSelectedRowCellIndexes = function () {
        return this.ej2Instances.getSelectedRowCellIndexes();
    };
    GridComponent.prototype.getSelectedRowIndexes = function () {
        return this.ej2Instances.getSelectedRowIndexes();
    };
    GridComponent.prototype.getSelectedRows = function () {
        return this.ej2Instances.getSelectedRows();
    };
    GridComponent.prototype.getSummaryValues = function (summaryCol, summaryData) {
        return this.ej2Instances.getSummaryValues(summaryCol, summaryData);
    };
    GridComponent.prototype.getUidByColumnField = function (field) {
        return this.ej2Instances.getUidByColumnField(field);
    };
    GridComponent.prototype.getVisibleColumns = function () {
        return this.ej2Instances.getVisibleColumns();
    };
    GridComponent.prototype.goToPage = function (pageNo) {
        return this.ej2Instances.goToPage(pageNo);
    };
    GridComponent.prototype.groupCollapseAll = function () {
        return this.ej2Instances.groupCollapseAll();
    };
    GridComponent.prototype.groupColumn = function (columnName) {
        return this.ej2Instances.groupColumn(columnName);
    };
    GridComponent.prototype.groupExpandAll = function () {
        return this.ej2Instances.groupExpandAll();
    };
    GridComponent.prototype.hideColumns = function (keys, hideBy) {
        return this.ej2Instances.hideColumns(keys, hideBy);
    };
    GridComponent.prototype.hideScroll = function () {
        return this.ej2Instances.hideScroll();
    };
    GridComponent.prototype.hideSpinner = function () {
        return this.ej2Instances.hideSpinner();
    };
    GridComponent.prototype.isFrozenGrid = function () {
        return this.ej2Instances.isFrozenGrid();
    };
    GridComponent.prototype.openColumnChooser = function (x, y) {
        return this.ej2Instances.openColumnChooser(x, y);
    };
    GridComponent.prototype.pdfExport = function (pdfExportProperties, isMultipleExport, pdfDoc, isBlob) {
        return this.ej2Instances.pdfExport(pdfExportProperties, isMultipleExport, pdfDoc, isBlob);
    };
    GridComponent.prototype.print = function () {
        return this.ej2Instances.print();
    };
    GridComponent.prototype.refresh = function () {
        return this.ej2Instances.refresh();
    };
    GridComponent.prototype.refreshColumns = function () {
        return this.ej2Instances.refreshColumns();
    };
    GridComponent.prototype.refreshHeader = function () {
        return this.ej2Instances.refreshHeader();
    };
    GridComponent.prototype.reorderColumnByIndex = function (fromIndex, toIndex) {
        return this.ej2Instances.reorderColumnByIndex(fromIndex, toIndex);
    };
    GridComponent.prototype.reorderColumnByTargetIndex = function (fieldName, toIndex) {
        return this.ej2Instances.reorderColumnByTargetIndex(fieldName, toIndex);
    };
    GridComponent.prototype.reorderColumns = function (fromFName, toFName) {
        return this.ej2Instances.reorderColumns(fromFName, toFName);
    };
    GridComponent.prototype.reorderRows = function (fromIndexes, toIndex) {
        return this.ej2Instances.reorderRows(fromIndexes, toIndex);
    };
    GridComponent.prototype.saveCell = function () {
        return this.ej2Instances.saveCell();
    };
    GridComponent.prototype.search = function (searchString) {
        return this.ej2Instances.search(searchString);
    };
    GridComponent.prototype.selectCell = function (cellIndex, isToggle) {
        return this.ej2Instances.selectCell(cellIndex, isToggle);
    };
    GridComponent.prototype.selectCells = function (rowCellIndexes) {
        return this.ej2Instances.selectCells(rowCellIndexes);
    };
    GridComponent.prototype.selectCellsByRange = function (startIndex, endIndex) {
        return this.ej2Instances.selectCellsByRange(startIndex, endIndex);
    };
    GridComponent.prototype.selectRow = function (index, isToggle) {
        return this.ej2Instances.selectRow(index, isToggle);
    };
    GridComponent.prototype.selectRows = function (rowIndexes) {
        return this.ej2Instances.selectRows(rowIndexes);
    };
    GridComponent.prototype.selectRowsByRange = function (startIndex, endIndex) {
        return this.ej2Instances.selectRowsByRange(startIndex, endIndex);
    };
    GridComponent.prototype.serverCsvExport = function (url) {
        return this.ej2Instances.serverCsvExport(url);
    };
    GridComponent.prototype.serverExcelExport = function (url) {
        return this.ej2Instances.serverExcelExport(url);
    };
    GridComponent.prototype.serverPdfExport = function (url) {
        return this.ej2Instances.serverPdfExport(url);
    };
    GridComponent.prototype.setCellValue = function (key, field, value) {
        return this.ej2Instances.setCellValue(key, field, value);
    };
    GridComponent.prototype.setGridContent = function (element) {
        return this.ej2Instances.setGridContent(element);
    };
    GridComponent.prototype.setGridContentTable = function (element) {
        return this.ej2Instances.setGridContentTable(element);
    };
    GridComponent.prototype.setGridHeaderContent = function (element) {
        return this.ej2Instances.setGridHeaderContent(element);
    };
    GridComponent.prototype.setGridHeaderTable = function (element) {
        return this.ej2Instances.setGridHeaderTable(element);
    };
    GridComponent.prototype.setGridPager = function (element) {
        return this.ej2Instances.setGridPager(element);
    };
    GridComponent.prototype.setRowData = function (key, rowData) {
        return this.ej2Instances.setRowData(key, rowData);
    };
    GridComponent.prototype.showAdaptiveFilterDialog = function () {
        return this.ej2Instances.showAdaptiveFilterDialog();
    };
    GridComponent.prototype.showAdaptiveSortDialog = function () {
        return this.ej2Instances.showAdaptiveSortDialog();
    };
    GridComponent.prototype.showColumns = function (keys, showBy) {
        return this.ej2Instances.showColumns(keys, showBy);
    };
    GridComponent.prototype.showSpinner = function () {
        return this.ej2Instances.showSpinner();
    };
    GridComponent.prototype.sortColumn = function (columnName, direction, isMultiSort) {
        return this.ej2Instances.sortColumn(columnName, direction, isMultiSort);
    };
    GridComponent.prototype.startEdit = function () {
        return this.ej2Instances.startEdit();
    };
    GridComponent.prototype.ungroupColumn = function (columnName) {
        return this.ej2Instances.ungroupColumn(columnName);
    };
    GridComponent.prototype.updateCell = function (rowIndex, field, value) {
        return this.ej2Instances.updateCell(rowIndex, field, value);
    };
    GridComponent.prototype.updateExternalMessage = function (message) {
        return this.ej2Instances.updateExternalMessage(message);
    };
    GridComponent.prototype.updateRow = function (index, data) {
        return this.ej2Instances.updateRow(index, data);
    };
    GridComponent.prototype.updateRowValue = function (key, rowData) {
        return this.ej2Instances.updateRowValue(key, rowData);
    };
    GridComponent = __decorate([
        EJComponentDecorator({
            props: properties,
            model: {
                event: 'modelchanged'
            }
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
    ], GridComponent);
    return GridComponent;
}(ComponentBase));
export { GridComponent };
export var GridPlugin = {
    name: 'ejs-grid',
    install: function (Vue) {
        Vue.component(GridPlugin.name, GridComponent);
        Vue.component(ColumnPlugin.name, ColumnDirective);
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
        Vue.component(StackedColumnPlugin.name, StackedColumnDirective);
        Vue.component(StackedColumnsPlugin.name, StackedColumnsDirective);
        Vue.component(AggregatePlugin.name, AggregateDirective);
        Vue.component(AggregatesPlugin.name, AggregatesDirective);
        Vue.component(AggregateColumnPlugin.name, AggregateColumnDirective);
        Vue.component(AggregateColumnsPlugin.name, AggregateColumnsDirective);
    }
};
