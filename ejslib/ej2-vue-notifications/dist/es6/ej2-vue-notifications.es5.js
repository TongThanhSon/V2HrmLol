import { Toast } from '@syncfusion/ej2-notifications';
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
var ButtonModelPropsDirective = /** @class */ (function (_super) {
    __extends(ButtonModelPropsDirective, _super);
    function ButtonModelPropsDirective() {
        return _super.call(this, arguments) || this;
    }
    ButtonModelPropsDirective.prototype.render = function (createElement) {
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
    ButtonModelPropsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    ButtonModelPropsDirective.prototype.getTag = function () {
        return 'e-buttonmodelprops';
    };
    ButtonModelPropsDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], ButtonModelPropsDirective);
    return ButtonModelPropsDirective;
}(vueImport));
var ButtonModelPropsPlugin = {
    name: 'e-buttonmodelprops',
    install: function (Vue$$1) {
        Vue$$1.component(ButtonModelPropsPlugin.name, ButtonModelPropsDirective);
    }
};
/**
 * 'e-button' directive represent a button of Vue toast
 * It must be contained in a Toast component(`ejs-toast`).
 * ```html
 * <ejs-toast id='toast' :showCloseIcon=true>
 *   <e-buttons>
 *    <e-button :content='Ok' :isPrimary=true></e-button>
 *    <e-button :content='Cancel'></e-button>
 *   </e-buttons>
 * </ejs-toast>
 * ```
 */
var ButtonModelPropDirective = /** @class */ (function (_super) {
    __extends(ButtonModelPropDirective, _super);
    function ButtonModelPropDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonModelPropDirective.prototype.render = function () {
        return;
    };
    ButtonModelPropDirective.prototype.getTag = function () {
        return 'e-buttonmodelprop';
    };
    ButtonModelPropDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], ButtonModelPropDirective);
    return ButtonModelPropDirective;
}(vueImport));
var ButtonModelPropPlugin = {
    name: 'e-buttonmodelprop',
    install: function (Vue$$1) {
        Vue$$1.component(ButtonModelPropPlugin.name, ButtonModelPropDirective);
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
var properties = ['isLazyUpdate', 'plugins', 'animation', 'buttons', 'content', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'extendedTimeout', 'height', 'icon', 'locale', 'newestOnTop', 'position', 'progressDirection', 'showCloseButton', 'showProgressBar', 'target', 'template', 'timeOut', 'title', 'width', 'beforeClose', 'beforeOpen', 'beforeSanitizeHtml', 'click', 'close', 'created', 'destroyed', 'open'];
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
var isExecute$1 = gh ? false : true;
/**
 * Represents the Vue Toast Component
 * ```html
 * <ejs-toast></ejs-toast>
 * ```
 */
var ToastComponent = /** @class */ (function (_super) {
    __extends$1(ToastComponent, _super);
    function ToastComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-buttonmodelprops": "e-buttonmodelprop" };
        _this.tagNameMapper = { "e-buttonmodelprops": "e-buttons" };
        _this.isVue3 = !isExecute$1;
        _this.ej2Instances = new Toast({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    ToastComponent.prototype.clearTemplate = function (templateNames) {
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
    ToastComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    ToastComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    ToastComponent.prototype.custom = function () {
        this.updated();
    };
    ToastComponent.prototype.hide = function (element) {
        return this.ej2Instances.hide(element);
    };
    ToastComponent.prototype.show = function (toastObj) {
        return this.ej2Instances.show(toastObj);
    };
    ToastComponent = __decorate$1([
        EJComponentDecorator({
            props: properties
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
    ], ToastComponent);
    return ToastComponent;
}(ComponentBase));
var ToastPlugin = {
    name: 'ejs-toast',
    install: function (Vue$$1) {
        Vue$$1.component(ToastPlugin.name, ToastComponent);
        Vue$$1.component(ButtonModelPropPlugin.name, ButtonModelPropDirective);
        Vue$$1.component(ButtonModelPropsPlugin.name, ButtonModelPropsDirective);
    }
};

export { ButtonModelPropsDirective, ButtonModelPropDirective, ButtonModelPropsPlugin, ButtonModelPropPlugin, ToastComponent, ToastPlugin };
export * from '@syncfusion/ej2-notifications';
//# sourceMappingURL=ej2-vue-notifications.es5.js.map
