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
import { TreeMap } from '@syncfusion/ej2-treemap';
import { ColorMappingsDirective, ColorMappingDirective, ColorMappingsPlugin, ColorMappingPlugin } from './colormapping.directive';
import { LevelsDirective, LevelDirective, LevelsPlugin, LevelPlugin } from './levels.directive';
// {{VueImport}}
export var properties = ['isLazyUpdate', 'plugins', 'allowImageExport', 'allowPdfExport', 'allowPrint', 'background', 'border', 'breadcrumbConnector', 'colorValuePath', 'dataSource', 'description', 'drillDownView', 'enableBreadcrumb', 'enableDrillDown', 'enablePersistence', 'enableRtl', 'equalColorValuePath', 'format', 'height', 'highlightSettings', 'initialDrillDown', 'layoutType', 'leafItemSettings', 'legendSettings', 'levels', 'locale', 'margin', 'palette', 'query', 'rangeColorValuePath', 'renderDirection', 'selectionSettings', 'tabIndex', 'theme', 'titleSettings', 'tooltipSettings', 'useGroupingSeparator', 'weightValuePath', 'width', 'beforePrint', 'click', 'doubleClick', 'drillEnd', 'drillStart', 'itemClick', 'itemHighlight', 'itemMove', 'itemRendering', 'itemSelected', 'legendItemRendering', 'legendRendering', 'load', 'loaded', 'mouseMove', 'resize', 'rightClick', 'tooltipRendering'];
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
 * Represents Vuejs TreeMap Component
 * ```vue
 * <ejs-treemap></ejs-treemap>
 * ```
 */
var TreeMapComponent = /** @class */ (function (_super) {
    __extends(TreeMapComponent, _super);
    function TreeMapComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-levels": { "e-level": { "e-colorMappings": "e-colorMapping" } } };
        _this.tagNameMapper = { "e-colorMappings": "e-colorMapping" };
        _this.isVue3 = !isExecute;
        _this.ej2Instances = new TreeMap({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    TreeMapComponent.prototype.clearTemplate = function (templateNames) {
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
    TreeMapComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    TreeMapComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    TreeMapComponent.prototype.custom = function () {
        this.updated();
    };
    TreeMapComponent.prototype.calculatePreviousLevelChildItems = function (labelText, drillLevelValues, item, directLevel) {
        return this.ej2Instances.calculatePreviousLevelChildItems(labelText, drillLevelValues, item, directLevel);
    };
    TreeMapComponent.prototype.calculateSelectedTextLevels = function (labelText, item) {
        return this.ej2Instances.calculateSelectedTextLevels(labelText, item);
    };
    TreeMapComponent.prototype.clickOnTreeMap = function (e) {
        return this.ej2Instances.clickOnTreeMap(e);
    };
    TreeMapComponent.prototype.compareSelectedLabelWithDrillDownItems = function (drillLevelValues, item, i) {
        return this.ej2Instances.compareSelectedLabelWithDrillDownItems(drillLevelValues, item, i);
    };
    TreeMapComponent.prototype.doubleClickOnTreeMap = function (e) {
        return this.ej2Instances.doubleClickOnTreeMap(e);
    };
    TreeMapComponent.prototype.export = function (type, fileName, orientation, allowDownload) {
        return this.ej2Instances.export(type, fileName, orientation, allowDownload);
    };
    TreeMapComponent.prototype.findTotalWeight = function (processData, type) {
        return this.ej2Instances.findTotalWeight(processData, type);
    };
    TreeMapComponent.prototype.mouseDownOnTreeMap = function (e) {
        return this.ej2Instances.mouseDownOnTreeMap(e);
    };
    TreeMapComponent.prototype.mouseEndOnTreeMap = function (e) {
        return this.ej2Instances.mouseEndOnTreeMap(e);
    };
    TreeMapComponent.prototype.mouseLeaveOnTreeMap = function (e) {
        return this.ej2Instances.mouseLeaveOnTreeMap(e);
    };
    TreeMapComponent.prototype.mouseMoveOnTreeMap = function (e) {
        return this.ej2Instances.mouseMoveOnTreeMap(e);
    };
    TreeMapComponent.prototype.print = function (id) {
        return this.ej2Instances.print(id);
    };
    TreeMapComponent.prototype.reOrderLevelData = function (start) {
        return this.ej2Instances.reOrderLevelData(start);
    };
    TreeMapComponent.prototype.resizeOnTreeMap = function (e) {
        return this.ej2Instances.resizeOnTreeMap(e);
    };
    TreeMapComponent.prototype.rightClickOnTreeMap = function (e) {
        return this.ej2Instances.rightClickOnTreeMap(e);
    };
    TreeMapComponent.prototype.selectItem = function (levelOrder, isSelected) {
        return this.ej2Instances.selectItem(levelOrder, isSelected);
    };
    TreeMapComponent = __decorate([
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
    ], TreeMapComponent);
    return TreeMapComponent;
}(ComponentBase));
export { TreeMapComponent };
export var TreeMapPlugin = {
    name: 'ejs-treemap',
    install: function (Vue) {
        Vue.component(TreeMapPlugin.name, TreeMapComponent);
        Vue.component(LevelPlugin.name, LevelDirective);
        Vue.component(LevelsPlugin.name, LevelsDirective);
        Vue.component(ColorMappingPlugin.name, ColorMappingDirective);
        Vue.component(ColorMappingsPlugin.name, ColorMappingsDirective);
    }
};
