import { PivotFieldList, PivotView } from '@syncfusion/ej2-pivotview';
import { ComponentBase, EJComponentDecorator, getProps, gh } from '@syncfusion/ej2-vue-base';
import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';

var __extends = (undefined && undefined.__extends) || (function () {
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties = ['isLazyUpdate', 'plugins', 'aggregateTypes', 'allowCalculatedField', 'allowConditionalFormatting', 'allowDataCompression', 'allowDeferLayoutUpdate', 'allowDrillThrough', 'allowExcelExport', 'allowGrouping', 'allowNumberFormatting', 'allowPdfExport', 'cellTemplate', 'chartSettings', 'chartTypes', 'cssClass', 'currencyCode', 'dataSourceSettings', 'displayOption', 'editSettings', 'enableFieldSearching', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableValueSorting', 'enableVirtualization', 'exportAllPages', 'gridSettings', 'groupingBarSettings', 'height', 'hyperlinkSettings', 'loadOnDemandInMemberEditor', 'locale', 'maxNodeLimitInMemberEditor', 'maxRowsInDrillThrough', 'pivotValues', 'showFieldList', 'showGroupingBar', 'showToolbar', 'showTooltip', 'showValuesButton', 'spinnerTemplate', 'toolbar', 'toolbarTemplate', 'tooltipTemplate', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'aggregateCellInfo', 'aggregateMenuOpen', 'beforeExport', 'beforeServiceInvoke', 'beginDrillThrough', 'calculatedFieldCreate', 'cellClick', 'cellSelected', 'cellSelecting', 'chartSeriesCreated', 'conditionalFormatting', 'created', 'dataBound', 'destroyed', 'drill', 'drillThrough', 'editCompleted', 'enginePopulated', 'enginePopulating', 'exportComplete', 'fetchReport', 'fieldDragStart', 'fieldDrop', 'fieldListRefreshed', 'fieldRemove', 'hyperlinkCellClick', 'load', 'loadReport', 'memberEditorOpen', 'memberFiltering', 'newReport', 'numberFormatting', 'onFieldDropped', 'onHeadersSort', 'onPdfCellRender', 'removeReport', 'renameReport', 'saveReport', 'toolbarClick', 'toolbarRender'];
var modelProps = [];
var testProp = getProps({ props: properties });
var props = testProp[0];
var watch = testProp[1];
var emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (var _i = 0, modelProps_1 = modelProps; _i < modelProps_1.length; _i++) {
    var props_1 = modelProps_1[_i];
    emitProbs.push('update:' + props_1);
}
var isExecute = gh ? false : true;
/**
 * `ejs-pivotview` represents the VueJS PivotView Component.
 * ```vue
 * <ejs-pivotview></ejs-pivotview>
 * ```
 */
var PivotViewComponent = /** @class */ (function (_super) {
    __extends(PivotViewComponent, _super);
    function PivotViewComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = true;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.isVue3 = !isExecute;
        _this.ej2Instances = new PivotView({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    PivotViewComponent.prototype.clearTemplate = function (templateNames) {
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
    PivotViewComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    PivotViewComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    PivotViewComponent.prototype.custom = function () {
        this.updated();
    };
    PivotViewComponent.prototype.chartExport = function (type, fileName, orientation, width, height) {
        return this.ej2Instances.chartExport(type, fileName, orientation, width, height);
    };
    PivotViewComponent.prototype.createCalculatedFieldDialog = function () {
        return this.ej2Instances.createCalculatedFieldDialog();
    };
    PivotViewComponent.prototype.csvExport = function (excelExportProperties, isMultipleExport, workbook, isBlob) {
        return this.ej2Instances.csvExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    };
    PivotViewComponent.prototype.excelExport = function (excelExportProperties, isMultipleExport, workbook, isBlob) {
        return this.ej2Instances.excelExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    };
    PivotViewComponent.prototype.getCellTemplate = function () {
        return this.ej2Instances.getCellTemplate();
    };
    PivotViewComponent.prototype.getRowText = function (rowIndex, colIndex) {
        return this.ej2Instances.getRowText(rowIndex, colIndex);
    };
    PivotViewComponent.prototype.loadPersistData = function (persistData) {
        return this.ej2Instances.loadPersistData(persistData);
    };
    PivotViewComponent.prototype.pdfExport = function (pdfExportProperties, isMultipleExport, pdfDoc, isBlob) {
        return this.ej2Instances.pdfExport(pdfExportProperties, isMultipleExport, pdfDoc, isBlob);
    };
    PivotViewComponent.prototype.printChart = function () {
        return this.ej2Instances.printChart();
    };
    PivotViewComponent.prototype.refresh = function () {
        return this.ej2Instances.refresh();
    };
    PivotViewComponent.prototype.showConditionalFormattingDialog = function () {
        return this.ej2Instances.showConditionalFormattingDialog();
    };
    PivotViewComponent.prototype.showNumberFormattingDialog = function () {
        return this.ej2Instances.showNumberFormattingDialog();
    };
    PivotViewComponent.prototype.templateParser = function (template) {
        return this.ej2Instances.templateParser(template);
    };
    PivotViewComponent = __decorate([
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
    ], PivotViewComponent);
    return PivotViewComponent;
}(ComponentBase));
var PivotViewPlugin = {
    name: 'ejs-pivotview',
    install: function (Vue) {
        Vue.component(PivotViewPlugin.name, PivotViewComponent);
    }
};

var __extends$1 = (undefined && undefined.__extends) || (function () {
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
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties$1 = ['isLazyUpdate', 'plugins', 'aggregateTypes', 'allowCalculatedField', 'allowDeferLayoutUpdate', 'cssClass', 'currencyCode', 'dataSourceSettings', 'enableFieldSearching', 'enablePersistence', 'enableRtl', 'loadOnDemandInMemberEditor', 'locale', 'maxNodeLimitInMemberEditor', 'renderMode', 'showValuesButton', 'spinnerTemplate', 'target', 'actionBegin', 'actionComplete', 'actionFailure', 'aggregateCellInfo', 'aggregateMenuOpen', 'beforeServiceInvoke', 'calculatedFieldCreate', 'created', 'dataBound', 'destroyed', 'enginePopulated', 'enginePopulating', 'fieldDragStart', 'fieldDrop', 'fieldRemove', 'load', 'memberEditorOpen', 'memberFiltering', 'onFieldDropped', 'onHeadersSort'];
var modelProps$1 = [];
var testProp$1 = getProps({ props: properties$1 });
var props$1 = testProp$1[0];
var watch$1 = testProp$1[1];
var emitProbs$1 = Object.keys(watch$1);
emitProbs$1.push('modelchanged', 'update:modelValue');
for (var _i$1 = 0, modelProps_1$1 = modelProps$1; _i$1 < modelProps_1$1.length; _i$1++) {
    var props_1$1 = modelProps_1$1[_i$1];
    emitProbs$1.push('update:' + props_1$1);
}
var isExecute$1 = gh ? false : true;
/**
 * `ejs-pivotfieldlist` represents the VueJS PivotFieldList Component.
 * ```vue
 * <ejs-pivotfieldlist></ejs-pivotfieldlist>
 * ```
 */
var PivotFieldListComponent = /** @class */ (function (_super) {
    __extends$1(PivotFieldListComponent, _super);
    function PivotFieldListComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties$1;
        _this.models = modelProps$1;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = true;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.isVue3 = !isExecute$1;
        _this.ej2Instances = new PivotFieldList({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    PivotFieldListComponent.prototype.clearTemplate = function (templateNames) {
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
    PivotFieldListComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    PivotFieldListComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    PivotFieldListComponent.prototype.custom = function () {
        this.updated();
    };
    PivotFieldListComponent.prototype.update = function (control) {
        return this.ej2Instances.update(control);
    };
    PivotFieldListComponent.prototype.updateView = function (control) {
        return this.ej2Instances.updateView(control);
    };
    PivotFieldListComponent = __decorate$1([
        EJComponentDecorator({
            props: properties$1
        }, isExecute$1)
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
    ], PivotFieldListComponent);
    return PivotFieldListComponent;
}(ComponentBase));
var PivotFieldListPlugin = {
    name: 'ejs-pivotfieldlist',
    install: function (Vue) {
        Vue.component(PivotFieldListPlugin.name, PivotFieldListComponent);
    }
};

export { PivotViewComponent, PivotViewPlugin, PivotFieldListComponent, PivotFieldListPlugin };
export * from '@syncfusion/ej2-pivotview';
//# sourceMappingURL=ej2-vue-pivotview.es5.js.map
