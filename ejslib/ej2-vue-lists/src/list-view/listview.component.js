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
import { ListView } from '@syncfusion/ej2-lists';
// {{VueImport}}
export var properties = ['isLazyUpdate', 'plugins', 'animation', 'checkBoxPosition', 'cssClass', 'dataSource', 'enable', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'fields', 'groupTemplate', 'headerTemplate', 'headerTitle', 'height', 'htmlAttributes', 'locale', 'query', 'showCheckBox', 'showHeader', 'showIcon', 'sortOrder', 'template', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'select'];
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
 * Represents VueJS ListView Component
 * ```
 * <ejs-listview :dataSource='data'></ejs-listview>
 * ```
 */
var ListViewComponent = /** @class */ (function (_super) {
    __extends(ListViewComponent, _super);
    function ListViewComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = true;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.isVue3 = !isExecute;
        _this.ej2Instances = new ListView({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    ListViewComponent.prototype.clearTemplate = function (templateNames) {
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
    ListViewComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    ListViewComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    ListViewComponent.prototype.custom = function () {
        this.updated();
    };
    ListViewComponent.prototype.addItem = function (data, fields) {
        return this.ej2Instances.addItem(data, fields);
    };
    ListViewComponent.prototype.back = function () {
        return this.ej2Instances.back();
    };
    ListViewComponent.prototype.checkAllItems = function () {
        return this.ej2Instances.checkAllItems();
    };
    ListViewComponent.prototype.checkItem = function (item) {
        return this.ej2Instances.checkItem(item);
    };
    ListViewComponent.prototype.disableItem = function (item) {
        return this.ej2Instances.disableItem(item);
    };
    ListViewComponent.prototype.enableItem = function (item) {
        return this.ej2Instances.enableItem(item);
    };
    ListViewComponent.prototype.findItem = function (item) {
        return this.ej2Instances.findItem(item);
    };
    ListViewComponent.prototype.getSelectedItems = function () {
        return this.ej2Instances.getSelectedItems();
    };
    ListViewComponent.prototype.hideItem = function (item) {
        return this.ej2Instances.hideItem(item);
    };
    ListViewComponent.prototype.refreshItemHeight = function () {
        return this.ej2Instances.refreshItemHeight();
    };
    ListViewComponent.prototype.removeItem = function (item) {
        return this.ej2Instances.removeItem(item);
    };
    ListViewComponent.prototype.removeMultipleItems = function (item) {
        return this.ej2Instances.removeMultipleItems(item);
    };
    ListViewComponent.prototype.requiredModules = function () {
        return this.ej2Instances.requiredModules();
    };
    ListViewComponent.prototype.selectItem = function (item) {
        return this.ej2Instances.selectItem(item);
    };
    ListViewComponent.prototype.selectMultipleItems = function (item) {
        return this.ej2Instances.selectMultipleItems(item);
    };
    ListViewComponent.prototype.showItem = function (item) {
        return this.ej2Instances.showItem(item);
    };
    ListViewComponent.prototype.uncheckAllItems = function () {
        return this.ej2Instances.uncheckAllItems();
    };
    ListViewComponent.prototype.uncheckItem = function (item) {
        return this.ej2Instances.uncheckItem(item);
    };
    ListViewComponent = __decorate([
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
    ], ListViewComponent);
    return ListViewComponent;
}(ComponentBase));
export { ListViewComponent };
export var ListViewPlugin = {
    name: 'ejs-listview',
    install: function (Vue) {
        Vue.component(ListViewPlugin.name, ListViewComponent);
    }
};
