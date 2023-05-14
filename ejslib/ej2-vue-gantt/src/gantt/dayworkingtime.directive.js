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
var DayWorkingTimeCollectionDirective = /** @class */ (function (_super) {
    __extends(DayWorkingTimeCollectionDirective, _super);
    function DayWorkingTimeCollectionDirective() {
        return _super.call(this, arguments) || this;
    }
    DayWorkingTimeCollectionDirective.prototype.render = function (createElement) {
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
    DayWorkingTimeCollectionDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    DayWorkingTimeCollectionDirective.prototype.getTag = function () {
        return 'e-day-working-time-collection';
    };
    DayWorkingTimeCollectionDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], DayWorkingTimeCollectionDirective);
    return DayWorkingTimeCollectionDirective;
}(vueImport));
export { DayWorkingTimeCollectionDirective };
export var DayWorkingTimeCollectionPlugin = {
    name: 'e-day-working-time-collection',
    install: function (Vue) {
        Vue.component(DayWorkingTimeCollectionPlugin.name, DayWorkingTimeCollectionDirective);
    }
};
/**
 * `e-day-working-time-collection` directive represent a working time ranges in a day.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-day-working-time-collection>
 *     <e-day-working-time from='8' to='12'/>
 *     <e-day-working-time from='13' to='17'/>
 *   </e-day-working-time-collection>
 * </ejs-gantt>
 * ```
 */
var DayWorkingTimeDirective = /** @class */ (function (_super) {
    __extends(DayWorkingTimeDirective, _super);
    function DayWorkingTimeDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayWorkingTimeDirective.prototype.render = function () {
        return;
    };
    DayWorkingTimeDirective.prototype.getTag = function () {
        return 'e-day-working-time';
    };
    DayWorkingTimeDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], DayWorkingTimeDirective);
    return DayWorkingTimeDirective;
}(vueImport));
export { DayWorkingTimeDirective };
export var DayWorkingTimePlugin = {
    name: 'e-day-working-time',
    install: function (Vue) {
        Vue.component(DayWorkingTimePlugin.name, DayWorkingTimeDirective);
    }
};
