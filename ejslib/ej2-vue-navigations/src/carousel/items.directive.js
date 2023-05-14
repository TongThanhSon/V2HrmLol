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
var CarouselItemsDirective = /** @class */ (function (_super) {
    __extends(CarouselItemsDirective, _super);
    function CarouselItemsDirective() {
        return _super.call(this, arguments) || this;
    }
    CarouselItemsDirective.prototype.render = function (createElement) {
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
    CarouselItemsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    CarouselItemsDirective.prototype.getTag = function () {
        return 'e-carousel-items';
    };
    CarouselItemsDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], CarouselItemsDirective);
    return CarouselItemsDirective;
}(vueImport));
export { CarouselItemsDirective };
export var CarouselItemsPlugin = {
    name: 'e-carousel-items',
    install: function (Vue) {
        Vue.component(CarouselItemsPlugin.name, CarouselItemsDirective);
    }
};
/**
 * `e-carousel-item` directive represent a item of the Vue Carousel.
 * It must be contained in a Carousel component(`ejs-carousel`).
 * ```html
 * <ejs-carousel>
 *   <e-carousel-items>
 *    <e-carousel-item template='itemTemplate'></e-carousel-item>
 *    <e-carousel-item template='secondItemTemplate'></e-carousel-item>
 *   </e-carousel-items>
 * </ejs-carousel>
 * ```
 */
var CarouselItemDirective = /** @class */ (function (_super) {
    __extends(CarouselItemDirective, _super);
    function CarouselItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarouselItemDirective.prototype.render = function () {
        return;
    };
    CarouselItemDirective.prototype.getTag = function () {
        return 'e-carousel-item';
    };
    CarouselItemDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], CarouselItemDirective);
    return CarouselItemDirective;
}(vueImport));
export { CarouselItemDirective };
export var CarouselItemPlugin = {
    name: 'e-carousel-item',
    install: function (Vue) {
        Vue.component(CarouselItemPlugin.name, CarouselItemDirective);
    }
};
