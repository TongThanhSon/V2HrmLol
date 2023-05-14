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
import { Signature } from '@syncfusion/ej2-inputs';
// {{VueImport}}
export var properties = ['isLazyUpdate', 'plugins', 'backgroundColor', 'backgroundImage', 'disabled', 'enablePersistence', 'enableRtl', 'isReadOnly', 'locale', 'maxStrokeWidth', 'minStrokeWidth', 'saveWithBackground', 'strokeColor', 'velocity', 'beforeSave', 'change', 'created'];
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
 * Represents the Essential JS 2 VueJS Signature Component
 * ```html
 * <ejs-signature></ejs-signature>
 * ```
 */
var SignatureComponent = /** @class */ (function (_super) {
    __extends(SignatureComponent, _super);
    function SignatureComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.isVue3 = !isExecute;
        _this.ej2Instances = new Signature({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    SignatureComponent.prototype.clearTemplate = function (templateNames) {
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
    SignatureComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    SignatureComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('canvas', slots);
    };
    SignatureComponent.prototype.custom = function () {
        this.updated();
    };
    SignatureComponent.prototype.canRedo = function () {
        return this.ej2Instances.canRedo();
    };
    SignatureComponent.prototype.canUndo = function () {
        return this.ej2Instances.canUndo();
    };
    SignatureComponent.prototype.clear = function () {
        return this.ej2Instances.clear();
    };
    SignatureComponent.prototype.draw = function (text, fontFamily, fontSize) {
        return this.ej2Instances.draw(text, fontFamily, fontSize);
    };
    SignatureComponent.prototype.getBlob = function (url) {
        return this.ej2Instances.getBlob(url);
    };
    SignatureComponent.prototype.initialize = function () {
        return this.ej2Instances.initialize();
    };
    SignatureComponent.prototype.isEmpty = function () {
        return this.ej2Instances.isEmpty();
    };
    SignatureComponent.prototype.load = function (signature, width, height) {
        return this.ej2Instances.load(signature, width, height);
    };
    SignatureComponent.prototype.redo = function () {
        return this.ej2Instances.redo();
    };
    SignatureComponent.prototype.save = function (type, fileName) {
        return this.ej2Instances.save(type, fileName);
    };
    SignatureComponent.prototype.saveAsBlob = function () {
        return this.ej2Instances.saveAsBlob();
    };
    SignatureComponent.prototype.undo = function () {
        return this.ej2Instances.undo();
    };
    SignatureComponent = __decorate([
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
    ], SignatureComponent);
    return SignatureComponent;
}(ComponentBase));
export { SignatureComponent };
export var SignaturePlugin = {
    name: 'ejs-signature',
    install: function (Vue) {
        Vue.component(SignaturePlugin.name, SignatureComponent);
    }
};
