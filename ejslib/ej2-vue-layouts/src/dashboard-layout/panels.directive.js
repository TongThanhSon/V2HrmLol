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
var PanelsDirective = /** @class */ (function (_super) {
    __extends(PanelsDirective, _super);
    function PanelsDirective() {
        return _super.call(this, arguments) || this;
    }
    PanelsDirective.prototype.render = function (createElement) {
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
    PanelsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    PanelsDirective.prototype.getTag = function () {
        return 'e-panels';
    };
    PanelsDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], PanelsDirective);
    return PanelsDirective;
}(vueImport));
export { PanelsDirective };
export var PanelsPlugin = {
    name: 'e-panels',
    install: function (Vue) {
        Vue.component(PanelsPlugin.name, PanelsDirective);
    }
};
/**
 * 'e-panels' directive represent a presets of VueJS dashboardlayout component
 * It must be contained in a dashboardlayout component(`ejs-dashboardlayout`).
 * ```html
 * <ejs-dashboardlayout>
 *   <e-panels>
 *   <e-panel></e-panel>
 *   <e-panel></e-panel>
 *   </e-panels>
 * </ejs-dashboardlayout>
 * ```
 */
var PanelDirective = /** @class */ (function (_super) {
    __extends(PanelDirective, _super);
    function PanelDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelDirective.prototype.render = function () {
        return;
    };
    PanelDirective.prototype.getTag = function () {
        return 'e-panel';
    };
    PanelDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], PanelDirective);
    return PanelDirective;
}(vueImport));
export { PanelDirective };
export var PanelPlugin = {
    name: 'e-panel',
    install: function (Vue) {
        Vue.component(PanelPlugin.name, PanelDirective);
    }
};
