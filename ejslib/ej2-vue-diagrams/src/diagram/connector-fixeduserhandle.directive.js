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
var ConnectorFixedUserHandlesDirective = /** @class */ (function (_super) {
    __extends(ConnectorFixedUserHandlesDirective, _super);
    function ConnectorFixedUserHandlesDirective() {
        return _super.call(this, arguments) || this;
    }
    ConnectorFixedUserHandlesDirective.prototype.render = function (createElement) {
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
    ConnectorFixedUserHandlesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    ConnectorFixedUserHandlesDirective.prototype.getTag = function () {
        return 'e-connector-fixeduserhandles';
    };
    ConnectorFixedUserHandlesDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], ConnectorFixedUserHandlesDirective);
    return ConnectorFixedUserHandlesDirective;
}(vueImport));
export { ConnectorFixedUserHandlesDirective };
export var ConnectorFixedUserHandlesPlugin = {
    name: 'e-connector-fixeduserhandles',
    install: function (Vue) {
        Vue.component(ConnectorFixedUserHandlesPlugin.name, ConnectorFixedUserHandlesDirective);
    }
};
/**
 * `e-connector` directive represent a annotation of the vue Diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-connectors>
 * <e-connector>
 * <e-connector-fixeduserhandles>
 * <e-connector-fixeduserhandle>
 * </e-connector-fixeduserhandle>
 * </e-connector-fixeduserhandles>
 * </e-connector>
 * </e-connectors>
 * </ejs-diagram>
 * ```
 */
var ConnectorFixedUserHandleDirective = /** @class */ (function (_super) {
    __extends(ConnectorFixedUserHandleDirective, _super);
    function ConnectorFixedUserHandleDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectorFixedUserHandleDirective.prototype.render = function () {
        return;
    };
    ConnectorFixedUserHandleDirective.prototype.getTag = function () {
        return 'e-connector-fixeduserhandle';
    };
    ConnectorFixedUserHandleDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], ConnectorFixedUserHandleDirective);
    return ConnectorFixedUserHandleDirective;
}(vueImport));
export { ConnectorFixedUserHandleDirective };
export var ConnectorFixedUserHandlePlugin = {
    name: 'e-connector-fixeduserhandle',
    install: function (Vue) {
        Vue.component(ConnectorFixedUserHandlePlugin.name, ConnectorFixedUserHandleDirective);
    }
};
