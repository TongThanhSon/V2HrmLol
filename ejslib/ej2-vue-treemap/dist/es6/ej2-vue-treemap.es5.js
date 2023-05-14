import { TreeMap } from '@syncfusion/ej2-treemap';
import { ComponentBase, EJComponentDecorator, allVue, getProps, gh } from '@syncfusion/ej2-vue-base';
import { Vue } from 'vue-class-component';
import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';
import Vue$1 from 'vue';

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
var isExecute = gh ? false : true;
var vueImport;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = Vue;
}
else {
    vueImport = Vue$1;
}
var ColorMappingsDirective = /** @class */ (function (_super) {
    __extends(ColorMappingsDirective, _super);
    function ColorMappingsDirective() {
        return _super.call(this, arguments) || this;
    }
    ColorMappingsDirective.prototype.render = function (createElement) {
        if (gh) {
            var h = gh || createElement;
            var slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = gh ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    };
    ColorMappingsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    ColorMappingsDirective.prototype.getTag = function () {
        return 'e-colorMappings';
    };
    ColorMappingsDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], ColorMappingsDirective);
    return ColorMappingsDirective;
}(vueImport));
var ColorMappingsPlugin = {
    name: 'e-colorMappings',
    install: function (Vue$$1) {
        Vue$$1.component(ColorMappingsPlugin.name, ColorMappingsDirective);
    }
};
var ColorMappingDirective = /** @class */ (function (_super) {
    __extends(ColorMappingDirective, _super);
    function ColorMappingDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorMappingDirective.prototype.render = function () {
        return;
    };
    ColorMappingDirective.prototype.getTag = function () {
        return 'e-colorMapping';
    };
    ColorMappingDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], ColorMappingDirective);
    return ColorMappingDirective;
}(vueImport));
var ColorMappingPlugin = {
    name: 'e-colorMapping',
    install: function (Vue$$1) {
        Vue$$1.component(ColorMappingPlugin.name, ColorMappingDirective);
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
var isExecute$1 = gh ? false : true;
var vueImport$1;
if (!isExecute$1 || parseInt(allVue.version) < 3) {
    vueImport$1 = Vue;
}
else {
    vueImport$1 = Vue$1;
}
var LevelsDirective = /** @class */ (function (_super) {
    __extends$1(LevelsDirective, _super);
    function LevelsDirective() {
        return _super.call(this, arguments) || this;
    }
    LevelsDirective.prototype.render = function (createElement) {
        if (gh) {
            var h = gh || createElement;
            var slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = gh ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    };
    LevelsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    LevelsDirective.prototype.getTag = function () {
        return 'e-levels';
    };
    LevelsDirective = __decorate$1([
        EJComponentDecorator({}, isExecute$1)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], LevelsDirective);
    return LevelsDirective;
}(vueImport$1));
var LevelsPlugin = {
    name: 'e-levels',
    install: function (Vue$$1) {
        Vue$$1.component(LevelsPlugin.name, LevelsDirective);
    }
};
/**
 * `LevelsDirective` directive represent a levels of the react treemap.
 * ```vue
 * <ejs-treemap>
 * <e-levels>
 * <e-level></e-level>
 * </e-levels>
 * </ejs-treemap>
 * ```
 */
var LevelDirective = /** @class */ (function (_super) {
    __extends$1(LevelDirective, _super);
    function LevelDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelDirective.prototype.render = function () {
        return;
    };
    LevelDirective.prototype.getTag = function () {
        return 'e-level';
    };
    LevelDirective = __decorate$1([
        EJComponentDecorator({}, isExecute$1)
    ], LevelDirective);
    return LevelDirective;
}(vueImport$1));
var LevelPlugin = {
    name: 'e-level',
    install: function (Vue$$1) {
        Vue$$1.component(LevelPlugin.name, LevelDirective);
    }
};

var __extends$2 = (undefined && undefined.__extends) || (function () {
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
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties = ['isLazyUpdate', 'plugins', 'allowImageExport', 'allowPdfExport', 'allowPrint', 'background', 'border', 'breadcrumbConnector', 'colorValuePath', 'dataSource', 'description', 'drillDownView', 'enableBreadcrumb', 'enableDrillDown', 'enablePersistence', 'enableRtl', 'equalColorValuePath', 'format', 'height', 'highlightSettings', 'initialDrillDown', 'layoutType', 'leafItemSettings', 'legendSettings', 'levels', 'locale', 'margin', 'palette', 'query', 'rangeColorValuePath', 'renderDirection', 'selectionSettings', 'tabIndex', 'theme', 'titleSettings', 'tooltipSettings', 'useGroupingSeparator', 'weightValuePath', 'width', 'beforePrint', 'click', 'doubleClick', 'drillEnd', 'drillStart', 'itemClick', 'itemHighlight', 'itemMove', 'itemRendering', 'itemSelected', 'legendItemRendering', 'legendRendering', 'load', 'loaded', 'mouseMove', 'resize', 'rightClick', 'tooltipRendering'];
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
var isExecute$2 = gh ? false : true;
/**
 * Represents Vuejs TreeMap Component
 * ```vue
 * <ejs-treemap></ejs-treemap>
 * ```
 */
var TreeMapComponent = /** @class */ (function (_super) {
    __extends$2(TreeMapComponent, _super);
    function TreeMapComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-levels": { "e-level": { "e-colorMappings": "e-colorMapping" } } };
        _this.tagNameMapper = { "e-colorMappings": "e-colorMapping" };
        _this.isVue3 = !isExecute$2;
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
    TreeMapComponent = __decorate$2([
        EJComponentDecorator({
            props: properties
        }, isExecute$2)
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
var TreeMapPlugin = {
    name: 'ejs-treemap',
    install: function (Vue$$1) {
        Vue$$1.component(TreeMapPlugin.name, TreeMapComponent);
        Vue$$1.component(LevelPlugin.name, LevelDirective);
        Vue$$1.component(LevelsPlugin.name, LevelsDirective);
        Vue$$1.component(ColorMappingPlugin.name, ColorMappingDirective);
        Vue$$1.component(ColorMappingsPlugin.name, ColorMappingsDirective);
    }
};

export { ColorMappingsDirective, ColorMappingDirective, ColorMappingsPlugin, ColorMappingPlugin, LevelsDirective, LevelDirective, LevelsPlugin, LevelPlugin, TreeMapComponent, TreeMapPlugin };
export * from '@syncfusion/ej2-treemap';
//# sourceMappingURL=ej2-vue-treemap.es5.js.map
