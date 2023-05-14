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
var StackedHeadersDirective = /** @class */ (function (_super) {
    __extends(StackedHeadersDirective, _super);
    function StackedHeadersDirective() {
        return _super.call(this, arguments) || this;
    }
    StackedHeadersDirective.prototype.render = function (createElement) {
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
    StackedHeadersDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    StackedHeadersDirective.prototype.getTag = function () {
        return 'e-stackedHeaders';
    };
    StackedHeadersDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], StackedHeadersDirective);
    return StackedHeadersDirective;
}(vueImport));
export { StackedHeadersDirective };
export var StackedHeadersPlugin = {
    name: 'e-stackedHeaders',
    install: function (Vue) {
        Vue.component(StackedHeadersPlugin.name, StackedHeadersDirective);
    }
};
/**
 * `e-stackedHeaders` directive represent a stacked header of the VueJS Kanban board.
 * It must be contained in a Kanban component(`ejs-kanban`).
 * ```vue
 * <ejs-kanban>
 *   <e-stackedHeaders>
 *    <e-stackedHeader keyField='Open' text='To Do'></e-stackedHeader>
 *    <e-stackedHeader keyField='Close' text='Completed'></e-stackedHeader>
 *   </e-stackedHeaders>
 * </ejs-kanban>
 * ```
 */
var StackedHeaderDirective = /** @class */ (function (_super) {
    __extends(StackedHeaderDirective, _super);
    function StackedHeaderDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackedHeaderDirective.prototype.render = function () {
        return;
    };
    StackedHeaderDirective.prototype.getTag = function () {
        return 'e-stackedHeader';
    };
    StackedHeaderDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], StackedHeaderDirective);
    return StackedHeaderDirective;
}(vueImport));
export { StackedHeaderDirective };
export var StackedHeaderPlugin = {
    name: 'e-stackedHeader',
    install: function (Vue) {
        Vue.component(StackedHeaderPlugin.name, StackedHeaderDirective);
    }
};
