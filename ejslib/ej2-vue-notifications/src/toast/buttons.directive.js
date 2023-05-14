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
import { EJComponentDecorator, allVue, gh } from '@syncfusion/ej2-vue-base';
import * as Vue3 from 'vue-class-component';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import Vue from 'vue';
// {{VueImport}}
export var isExecute = gh ? false : true;
var vueImport;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = Vue3.Vue;
}
else {
    vueImport = Vue;
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
export { ButtonModelPropsDirective };
export var ButtonModelPropsPlugin = {
    name: 'e-buttonmodelprops',
    install: function (Vue) {
        Vue.component(ButtonModelPropsPlugin.name, ButtonModelPropsDirective);
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
export { ButtonModelPropDirective };
export var ButtonModelPropPlugin = {
    name: 'e-buttonmodelprop',
    install: function (Vue) {
        Vue.component(ButtonModelPropPlugin.name, ButtonModelPropDirective);
    }
};
