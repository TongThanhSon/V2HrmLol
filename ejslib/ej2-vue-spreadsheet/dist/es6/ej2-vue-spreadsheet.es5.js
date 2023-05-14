import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
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
var ImagesDirective = /** @class */ (function (_super) {
    __extends(ImagesDirective, _super);
    function ImagesDirective() {
        return _super.call(this, arguments) || this;
    }
    ImagesDirective.prototype.render = function (createElement) {
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
    ImagesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    ImagesDirective.prototype.getTag = function () {
        return 'e-images';
    };
    ImagesDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], ImagesDirective);
    return ImagesDirective;
}(vueImport));
var ImagesPlugin = {
    name: 'e-images',
    install: function (Vue$$1) {
        Vue$$1.component(ImagesPlugin.name, ImagesDirective);
    }
};
var ImageDirective = /** @class */ (function (_super) {
    __extends(ImageDirective, _super);
    function ImageDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageDirective.prototype.render = function () {
        return;
    };
    ImageDirective.prototype.getTag = function () {
        return 'e-image';
    };
    ImageDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], ImageDirective);
    return ImageDirective;
}(vueImport));
var ImagePlugin = {
    name: 'e-image',
    install: function (Vue$$1) {
        Vue$$1.component(ImagePlugin.name, ImageDirective);
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
var ChartsDirective = /** @class */ (function (_super) {
    __extends$1(ChartsDirective, _super);
    function ChartsDirective() {
        return _super.call(this, arguments) || this;
    }
    ChartsDirective.prototype.render = function (createElement) {
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
    ChartsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    ChartsDirective.prototype.getTag = function () {
        return 'e-charts';
    };
    ChartsDirective = __decorate$1([
        EJComponentDecorator({}, isExecute$1)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], ChartsDirective);
    return ChartsDirective;
}(vueImport$1));
var ChartsPlugin = {
    name: 'e-charts',
    install: function (Vue$$1) {
        Vue$$1.component(ChartsPlugin.name, ChartsDirective);
    }
};
var ChartDirective = /** @class */ (function (_super) {
    __extends$1(ChartDirective, _super);
    function ChartDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartDirective.prototype.render = function () {
        return;
    };
    ChartDirective.prototype.getTag = function () {
        return 'e-chart';
    };
    ChartDirective = __decorate$1([
        EJComponentDecorator({}, isExecute$1)
    ], ChartDirective);
    return ChartDirective;
}(vueImport$1));
var ChartPlugin = {
    name: 'e-chart',
    install: function (Vue$$1) {
        Vue$$1.component(ChartPlugin.name, ChartDirective);
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
var isExecute$2 = gh ? false : true;
var vueImport$2;
if (!isExecute$2 || parseInt(allVue.version) < 3) {
    vueImport$2 = Vue;
}
else {
    vueImport$2 = Vue$1;
}
var CellsDirective = /** @class */ (function (_super) {
    __extends$2(CellsDirective, _super);
    function CellsDirective() {
        return _super.call(this, arguments) || this;
    }
    CellsDirective.prototype.render = function (createElement) {
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
    CellsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    CellsDirective.prototype.getTag = function () {
        return 'e-cells';
    };
    CellsDirective = __decorate$2([
        EJComponentDecorator({}, isExecute$2)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], CellsDirective);
    return CellsDirective;
}(vueImport$2));
var CellsPlugin = {
    name: 'e-cells',
    install: function (Vue$$1) {
        Vue$$1.component(CellsPlugin.name, CellsDirective);
    }
};
/**
 * `e-cell` directive represent a cell of the VueJS Spreadsheet.
 * It must be contained in a `e-row` directive.
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rows>
 *    <e-row>
 *    <e-cells>
 *    <e-cell value='A1'></e-cell>
 *    </e-cells>
 *    </e-row>
 *    </e-rows>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
var CellDirective = /** @class */ (function (_super) {
    __extends$2(CellDirective, _super);
    function CellDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CellDirective.prototype.render = function () {
        return;
    };
    CellDirective.prototype.getTag = function () {
        return 'e-cell';
    };
    CellDirective = __decorate$2([
        EJComponentDecorator({}, isExecute$2)
    ], CellDirective);
    return CellDirective;
}(vueImport$2));
var CellPlugin = {
    name: 'e-cell',
    install: function (Vue$$1) {
        Vue$$1.component(CellPlugin.name, CellDirective);
    }
};

var __extends$3 = (undefined && undefined.__extends) || (function () {
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
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$3 = gh ? false : true;
var vueImport$3;
if (!isExecute$3 || parseInt(allVue.version) < 3) {
    vueImport$3 = Vue;
}
else {
    vueImport$3 = Vue$1;
}
var RowsDirective = /** @class */ (function (_super) {
    __extends$3(RowsDirective, _super);
    function RowsDirective() {
        return _super.call(this, arguments) || this;
    }
    RowsDirective.prototype.render = function (createElement) {
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
    RowsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    RowsDirective.prototype.getTag = function () {
        return 'e-rows';
    };
    RowsDirective = __decorate$3([
        EJComponentDecorator({}, isExecute$3)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], RowsDirective);
    return RowsDirective;
}(vueImport$3));
var RowsPlugin = {
    name: 'e-rows',
    install: function (Vue$$1) {
        Vue$$1.component(RowsPlugin.name, RowsDirective);
    }
};
/**
 * `e-row` directive represent a row of the VueJS Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rows>
 *    <e-row></e-row>
 *    </e-rows>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
var RowDirective = /** @class */ (function (_super) {
    __extends$3(RowDirective, _super);
    function RowDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowDirective.prototype.render = function () {
        return;
    };
    RowDirective.prototype.getTag = function () {
        return 'e-row';
    };
    RowDirective = __decorate$3([
        EJComponentDecorator({}, isExecute$3)
    ], RowDirective);
    return RowDirective;
}(vueImport$3));
var RowPlugin = {
    name: 'e-row',
    install: function (Vue$$1) {
        Vue$$1.component(RowPlugin.name, RowDirective);
    }
};

var __extends$4 = (undefined && undefined.__extends) || (function () {
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
var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$4 = gh ? false : true;
var vueImport$4;
if (!isExecute$4 || parseInt(allVue.version) < 3) {
    vueImport$4 = Vue;
}
else {
    vueImport$4 = Vue$1;
}
var ColumnsDirective = /** @class */ (function (_super) {
    __extends$4(ColumnsDirective, _super);
    function ColumnsDirective() {
        return _super.call(this, arguments) || this;
    }
    ColumnsDirective.prototype.render = function (createElement) {
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
    ColumnsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    ColumnsDirective.prototype.getTag = function () {
        return 'e-columns';
    };
    ColumnsDirective = __decorate$4([
        EJComponentDecorator({}, isExecute$4)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], ColumnsDirective);
    return ColumnsDirective;
}(vueImport$4));
var ColumnsPlugin = {
    name: 'e-columns',
    install: function (Vue$$1) {
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
    }
};
/**
 * `e-column` directive represent a column of the VueJS Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-columns>
 *    <e-column></e-column>
 *    </e-columns>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
var ColumnDirective = /** @class */ (function (_super) {
    __extends$4(ColumnDirective, _super);
    function ColumnDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnDirective.prototype.render = function () {
        return;
    };
    ColumnDirective.prototype.getTag = function () {
        return 'e-column';
    };
    ColumnDirective = __decorate$4([
        EJComponentDecorator({}, isExecute$4)
    ], ColumnDirective);
    return ColumnDirective;
}(vueImport$4));
var ColumnPlugin = {
    name: 'e-column',
    install: function (Vue$$1) {
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
    }
};

var __extends$5 = (undefined && undefined.__extends) || (function () {
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
var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$5 = gh ? false : true;
var vueImport$5;
if (!isExecute$5 || parseInt(allVue.version) < 3) {
    vueImport$5 = Vue;
}
else {
    vueImport$5 = Vue$1;
}
var RangesDirective = /** @class */ (function (_super) {
    __extends$5(RangesDirective, _super);
    function RangesDirective() {
        return _super.call(this, arguments) || this;
    }
    RangesDirective.prototype.render = function (createElement) {
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
    RangesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    RangesDirective.prototype.getTag = function () {
        return 'e-ranges';
    };
    RangesDirective = __decorate$5([
        EJComponentDecorator({}, isExecute$5)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], RangesDirective);
    return RangesDirective;
}(vueImport$5));
var RangesPlugin = {
    name: 'e-ranges',
    install: function (Vue$$1) {
        Vue$$1.component(RangesPlugin.name, RangesDirective);
    }
};
/**
 * `e-range` directive represent a range of the VueJS Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-ranges>
 *    <e-range :dataSource='data'></e-range>
 *    </e-ranges>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
var RangeDirective = /** @class */ (function (_super) {
    __extends$5(RangeDirective, _super);
    function RangeDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeDirective.prototype.render = function () {
        return;
    };
    RangeDirective.prototype.getTag = function () {
        return 'e-range';
    };
    RangeDirective = __decorate$5([
        EJComponentDecorator({}, isExecute$5)
    ], RangeDirective);
    return RangeDirective;
}(vueImport$5));
var RangePlugin = {
    name: 'e-range',
    install: function (Vue$$1) {
        Vue$$1.component(RangePlugin.name, RangeDirective);
    }
};

var __extends$6 = (undefined && undefined.__extends) || (function () {
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
var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$6 = gh ? false : true;
var vueImport$6;
if (!isExecute$6 || parseInt(allVue.version) < 3) {
    vueImport$6 = Vue;
}
else {
    vueImport$6 = Vue$1;
}
var ConditionalFormatsDirective = /** @class */ (function (_super) {
    __extends$6(ConditionalFormatsDirective, _super);
    function ConditionalFormatsDirective() {
        return _super.call(this, arguments) || this;
    }
    ConditionalFormatsDirective.prototype.render = function (createElement) {
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
    ConditionalFormatsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    ConditionalFormatsDirective.prototype.getTag = function () {
        return 'e-conditionalformats';
    };
    ConditionalFormatsDirective = __decorate$6([
        EJComponentDecorator({}, isExecute$6)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], ConditionalFormatsDirective);
    return ConditionalFormatsDirective;
}(vueImport$6));
var ConditionalFormatsPlugin = {
    name: 'e-conditionalformats',
    install: function (Vue$$1) {
        Vue$$1.component(ConditionalFormatsPlugin.name, ConditionalFormatsDirective);
    }
};
/**
 * `e-conditionalformat` directive represent a conditionalformat of the VueJS Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-conditionalformats>
 *    <e-conditionalformat></e-conditionalformat>
 *    </e-conditionalformats>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
var ConditionalFormatDirective = /** @class */ (function (_super) {
    __extends$6(ConditionalFormatDirective, _super);
    function ConditionalFormatDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConditionalFormatDirective.prototype.render = function () {
        return;
    };
    ConditionalFormatDirective.prototype.getTag = function () {
        return 'e-conditionalformat';
    };
    ConditionalFormatDirective = __decorate$6([
        EJComponentDecorator({}, isExecute$6)
    ], ConditionalFormatDirective);
    return ConditionalFormatDirective;
}(vueImport$6));
var ConditionalFormatPlugin = {
    name: 'e-conditionalformat',
    install: function (Vue$$1) {
        Vue$$1.component(ConditionalFormatPlugin.name, ConditionalFormatDirective);
    }
};

var __extends$7 = (undefined && undefined.__extends) || (function () {
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
var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$7 = gh ? false : true;
var vueImport$7;
if (!isExecute$7 || parseInt(allVue.version) < 3) {
    vueImport$7 = Vue;
}
else {
    vueImport$7 = Vue$1;
}
var SheetsDirective = /** @class */ (function (_super) {
    __extends$7(SheetsDirective, _super);
    function SheetsDirective() {
        return _super.call(this, arguments) || this;
    }
    SheetsDirective.prototype.render = function (createElement) {
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
    SheetsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    SheetsDirective.prototype.getTag = function () {
        return 'e-sheets';
    };
    SheetsDirective = __decorate$7([
        EJComponentDecorator({}, isExecute$7)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], SheetsDirective);
    return SheetsDirective;
}(vueImport$7));
var SheetsPlugin = {
    name: 'e-sheets',
    install: function (Vue$$1) {
        Vue$$1.component(SheetsPlugin.name, SheetsDirective);
    }
};
/**
 * `e-sheet` directive represent a sheet of the VueJS Spreadsheet.
 * It must be contained in a Spreadsheet component(`ejs-spreadsheet`).
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet></e-sheet>
 *    <e-sheet></e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
var SheetDirective = /** @class */ (function (_super) {
    __extends$7(SheetDirective, _super);
    function SheetDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SheetDirective.prototype.render = function () {
        return;
    };
    SheetDirective.prototype.getTag = function () {
        return 'e-sheet';
    };
    SheetDirective = __decorate$7([
        EJComponentDecorator({}, isExecute$7)
    ], SheetDirective);
    return SheetDirective;
}(vueImport$7));
var SheetPlugin = {
    name: 'e-sheet',
    install: function (Vue$$1) {
        Vue$$1.component(SheetPlugin.name, SheetDirective);
    }
};

var __extends$8 = (undefined && undefined.__extends) || (function () {
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
var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$8 = gh ? false : true;
var vueImport$8;
if (!isExecute$8 || parseInt(allVue.version) < 3) {
    vueImport$8 = Vue;
}
else {
    vueImport$8 = Vue$1;
}
var DefinedNamesDirective = /** @class */ (function (_super) {
    __extends$8(DefinedNamesDirective, _super);
    function DefinedNamesDirective() {
        return _super.call(this, arguments) || this;
    }
    DefinedNamesDirective.prototype.render = function (createElement) {
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
    DefinedNamesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    DefinedNamesDirective.prototype.getTag = function () {
        return 'e-definednames';
    };
    DefinedNamesDirective = __decorate$8([
        EJComponentDecorator({}, isExecute$8)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], DefinedNamesDirective);
    return DefinedNamesDirective;
}(vueImport$8));
var DefinedNamesPlugin = {
    name: 'e-definednames',
    install: function (Vue$$1) {
        Vue$$1.component(DefinedNamesPlugin.name, DefinedNamesDirective);
    }
};
/**
 * `e-definedname` directive represent a defined name of the VueJS Spreadsheet.
 * It must be contained in a Spreadsheet component(`ejs-spreadsheet`).
 * ```vue
 * <ejs-spreadsheet>
 *   <e-definednames>
 *    <e-definedname></e-definedname>
 *    <e-definedname></e-definedname>
 *   </e-definednames>
 * </ejs-spreadsheet>
 * ```
 */
var DefinedNameDirective = /** @class */ (function (_super) {
    __extends$8(DefinedNameDirective, _super);
    function DefinedNameDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefinedNameDirective.prototype.render = function () {
        return;
    };
    DefinedNameDirective.prototype.getTag = function () {
        return 'e-definedname';
    };
    DefinedNameDirective = __decorate$8([
        EJComponentDecorator({}, isExecute$8)
    ], DefinedNameDirective);
    return DefinedNameDirective;
}(vueImport$8));
var DefinedNamePlugin = {
    name: 'e-definedname',
    install: function (Vue$$1) {
        Vue$$1.component(DefinedNamePlugin.name, DefinedNameDirective);
    }
};

var __extends$9 = (undefined && undefined.__extends) || (function () {
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
var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties = ['isLazyUpdate', 'plugins', 'activeSheetIndex', 'allowAutoFill', 'allowCellFormatting', 'allowChart', 'allowConditionalFormat', 'allowDataValidation', 'allowDelete', 'allowEditing', 'allowFiltering', 'allowFindAndReplace', 'allowFreezePane', 'allowHyperlink', 'allowImage', 'allowInsert', 'allowMerge', 'allowNumberFormatting', 'allowOpen', 'allowResizing', 'allowSave', 'allowScrolling', 'allowSorting', 'allowUndoRedo', 'allowWrap', 'autoFillSettings', 'cellStyle', 'cssClass', 'definedNames', 'enableClipboard', 'enableContextMenu', 'enableKeyboardNavigation', 'enableKeyboardShortcut', 'enablePersistence', 'enableRtl', 'height', 'isProtected', 'locale', 'openUrl', 'password', 'saveUrl', 'scrollSettings', 'selectionSettings', 'sheets', 'showAggregate', 'showFormulaBar', 'showRibbon', 'showSheetTabs', 'width', 'actionBegin', 'actionComplete', 'afterHyperlinkClick', 'afterHyperlinkCreate', 'beforeCellFormat', 'beforeCellRender', 'beforeCellSave', 'beforeCellUpdate', 'beforeConditionalFormat', 'beforeDataBound', 'beforeHyperlinkClick', 'beforeHyperlinkCreate', 'beforeOpen', 'beforeSave', 'beforeSelect', 'beforeSort', 'cellEdit', 'cellEditing', 'cellSave', 'contextMenuBeforeClose', 'contextMenuBeforeOpen', 'contextMenuItemSelect', 'created', 'dataBound', 'dataSourceChanged', 'dialogBeforeOpen', 'fileMenuBeforeClose', 'fileMenuBeforeOpen', 'fileMenuItemSelect', 'openComplete', 'openFailure', 'queryCellInfo', 'saveComplete', 'select', 'sortComplete'];
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
var isExecute$9 = gh ? false : true;
/**
 * `ejs-spreadsheet` represents the VueJS Spreadsheet Component.
 * ```vue
 * <ejs-spreadsheet></ejs-spreadsheet>
 * ```
 */
var SpreadsheetComponent = /** @class */ (function (_super) {
    __extends$9(SpreadsheetComponent, _super);
    function SpreadsheetComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-sheets": { "e-sheet": { "e-rows": { "e-row": { "e-cells": { "e-cell": { "e-images": "e-image", "e-charts": "e-chart" } } } }, "e-columns": "e-column", "e-ranges": "e-range", "e-conditionalformats": "e-conditionalformat" } }, "e-definednames": "e-definedname" };
        _this.tagNameMapper = { "e-images": "e-image", "e-charts": "e-chart", "e-conditionalformats": "e-conditionalFormats", "e-definednames": "e-definedNames" };
        _this.isVue3 = !isExecute$9;
        _this.ej2Instances = new Spreadsheet({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    SpreadsheetComponent.prototype.clearTemplate = function (templateNames) {
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
    SpreadsheetComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    SpreadsheetComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    SpreadsheetComponent.prototype.custom = function () {
        this.updated();
    };
    SpreadsheetComponent.prototype.Unfreeze = function (sheet) {
        return this.ej2Instances.Unfreeze(sheet);
    };
    SpreadsheetComponent.prototype.addContextMenuItems = function (items, text, insertAfter, isUniqueId) {
        return this.ej2Instances.addContextMenuItems(items, text, insertAfter, isUniqueId);
    };
    SpreadsheetComponent.prototype.addCustomFunction = function (functionHandler, functionName) {
        return this.ej2Instances.addCustomFunction(functionHandler, functionName);
    };
    SpreadsheetComponent.prototype.addDataValidation = function (rules, range) {
        return this.ej2Instances.addDataValidation(rules, range);
    };
    SpreadsheetComponent.prototype.addDefinedName = function (definedName) {
        return this.ej2Instances.addDefinedName(definedName);
    };
    SpreadsheetComponent.prototype.addFileMenuItems = function (items, text, insertAfter, isUniqueId) {
        return this.ej2Instances.addFileMenuItems(items, text, insertAfter, isUniqueId);
    };
    SpreadsheetComponent.prototype.addHyperlink = function (hyperlink, address, displayText) {
        return this.ej2Instances.addHyperlink(hyperlink, address, displayText);
    };
    SpreadsheetComponent.prototype.addInvalidHighlight = function (range) {
        return this.ej2Instances.addInvalidHighlight(range);
    };
    SpreadsheetComponent.prototype.addRibbonTabs = function (items, insertBefore) {
        return this.ej2Instances.addRibbonTabs(items, insertBefore);
    };
    SpreadsheetComponent.prototype.addToolbarItems = function (tab, items, index) {
        return this.ej2Instances.addToolbarItems(tab, items, index);
    };
    SpreadsheetComponent.prototype.applyFilter = function (predicates, range) {
        return this.ej2Instances.applyFilter(predicates, range);
    };
    SpreadsheetComponent.prototype.autoFill = function (fillRange, dataRange, direction, fillType) {
        return this.ej2Instances.autoFill(fillRange, dataRange, direction, fillType);
    };
    SpreadsheetComponent.prototype.autoFit = function (range) {
        return this.ej2Instances.autoFit(range);
    };
    SpreadsheetComponent.prototype.cellFormat = function (style, range) {
        return this.ej2Instances.cellFormat(style, range);
    };
    SpreadsheetComponent.prototype.clear = function (options) {
        return this.ej2Instances.clear(options);
    };
    SpreadsheetComponent.prototype.clearConditionalFormat = function (range) {
        return this.ej2Instances.clearConditionalFormat(range);
    };
    SpreadsheetComponent.prototype.clearFilter = function (field) {
        return this.ej2Instances.clearFilter(field);
    };
    SpreadsheetComponent.prototype.closeEdit = function () {
        return this.ej2Instances.closeEdit();
    };
    SpreadsheetComponent.prototype.computeExpression = function (formula) {
        return this.ej2Instances.computeExpression(formula);
    };
    SpreadsheetComponent.prototype.conditionalFormat = function (conditionalFormat) {
        return this.ej2Instances.conditionalFormat(conditionalFormat);
    };
    SpreadsheetComponent.prototype.copy = function (address) {
        return this.ej2Instances.copy(address);
    };
    SpreadsheetComponent.prototype.cut = function (address) {
        return this.ej2Instances.cut(address);
    };
    SpreadsheetComponent.prototype.delete = function (startIndex, endIndex, model, sheet) {
        return this.ej2Instances.delete(startIndex, endIndex, model, sheet);
    };
    SpreadsheetComponent.prototype.deleteChart = function (id) {
        return this.ej2Instances.deleteChart(id);
    };
    SpreadsheetComponent.prototype.deleteImage = function (id, range) {
        return this.ej2Instances.deleteImage(id, range);
    };
    SpreadsheetComponent.prototype.duplicateSheet = function (sheetIndex) {
        return this.ej2Instances.duplicateSheet(sheetIndex);
    };
    SpreadsheetComponent.prototype.enableContextMenuItems = function (items, enable, isUniqueId) {
        return this.ej2Instances.enableContextMenuItems(items, enable, isUniqueId);
    };
    SpreadsheetComponent.prototype.enableFileMenuItems = function (items, enable, isUniqueId) {
        return this.ej2Instances.enableFileMenuItems(items, enable, isUniqueId);
    };
    SpreadsheetComponent.prototype.enableRibbonTabs = function (tabs, enable) {
        return this.ej2Instances.enableRibbonTabs(tabs, enable);
    };
    SpreadsheetComponent.prototype.enableToolbarItems = function (tab, items, enable) {
        return this.ej2Instances.enableToolbarItems(tab, items, enable);
    };
    SpreadsheetComponent.prototype.endEdit = function () {
        return this.ej2Instances.endEdit();
    };
    SpreadsheetComponent.prototype.find = function (args) {
        return this.ej2Instances.find(args);
    };
    SpreadsheetComponent.prototype.findAll = function (value, mode, isCSen, isEMatch, sheetIndex) {
        return this.ej2Instances.findAll(value, mode, isCSen, isEMatch, sheetIndex);
    };
    SpreadsheetComponent.prototype.freezePanes = function (row, column, sheet) {
        return this.ej2Instances.freezePanes(row, column, sheet);
    };
    SpreadsheetComponent.prototype.getData = function (address) {
        return this.ej2Instances.getData(address);
    };
    SpreadsheetComponent.prototype.getDisplayText = function (cell) {
        return this.ej2Instances.getDisplayText(cell);
    };
    SpreadsheetComponent.prototype.getRowData = function (index, sheetIndex) {
        return this.ej2Instances.getRowData(index, sheetIndex);
    };
    SpreadsheetComponent.prototype.getSelectAllContent = function () {
        return this.ej2Instances.getSelectAllContent();
    };
    SpreadsheetComponent.prototype.goTo = function (address) {
        return this.ej2Instances.goTo(address);
    };
    SpreadsheetComponent.prototype.hideColumn = function (startIndex, endIndex, hide) {
        return this.ej2Instances.hideColumn(startIndex, endIndex, hide);
    };
    SpreadsheetComponent.prototype.hideFileMenuItems = function (items, hide, isUniqueId) {
        return this.ej2Instances.hideFileMenuItems(items, hide, isUniqueId);
    };
    SpreadsheetComponent.prototype.hideRibbonTabs = function (tabs, hide) {
        return this.ej2Instances.hideRibbonTabs(tabs, hide);
    };
    SpreadsheetComponent.prototype.hideRow = function (startIndex, endIndex, hide) {
        return this.ej2Instances.hideRow(startIndex, endIndex, hide);
    };
    SpreadsheetComponent.prototype.hideSpinner = function () {
        return this.ej2Instances.hideSpinner();
    };
    SpreadsheetComponent.prototype.hideToolbarItems = function (tab, indexes, hide) {
        return this.ej2Instances.hideToolbarItems(tab, indexes, hide);
    };
    SpreadsheetComponent.prototype.insertChart = function (chart) {
        return this.ej2Instances.insertChart(chart);
    };
    SpreadsheetComponent.prototype.insertColumn = function (startColumn, endColumn, sheet) {
        return this.ej2Instances.insertColumn(startColumn, endColumn, sheet);
    };
    SpreadsheetComponent.prototype.insertImage = function (images, range) {
        return this.ej2Instances.insertImage(images, range);
    };
    SpreadsheetComponent.prototype.insertRow = function (startRow, endRow, sheet) {
        return this.ej2Instances.insertRow(startRow, endRow, sheet);
    };
    SpreadsheetComponent.prototype.insertSheet = function (startSheet, endSheet) {
        return this.ej2Instances.insertSheet(startSheet, endSheet);
    };
    SpreadsheetComponent.prototype.isValidCell = function (cellAddress) {
        return this.ej2Instances.isValidCell(cellAddress);
    };
    SpreadsheetComponent.prototype.lockCells = function (range, isLocked) {
        return this.ej2Instances.lockCells(range, isLocked);
    };
    SpreadsheetComponent.prototype.merge = function (range, type) {
        return this.ej2Instances.merge(range, type);
    };
    SpreadsheetComponent.prototype.moveSheet = function (position, sheetIndexes) {
        return this.ej2Instances.moveSheet(position, sheetIndexes);
    };
    SpreadsheetComponent.prototype.numberFormat = function (format, range) {
        return this.ej2Instances.numberFormat(format, range);
    };
    SpreadsheetComponent.prototype.open = function (options) {
        return this.ej2Instances.open(options);
    };
    SpreadsheetComponent.prototype.openFromJson = function (options) {
        return this.ej2Instances.openFromJson(options);
    };
    SpreadsheetComponent.prototype.paste = function (address, type) {
        return this.ej2Instances.paste(address, type);
    };
    SpreadsheetComponent.prototype.protectSheet = function (sheet, protectSettings, password) {
        return this.ej2Instances.protectSheet(sheet, protectSettings, password);
    };
    SpreadsheetComponent.prototype.redo = function () {
        return this.ej2Instances.redo();
    };
    SpreadsheetComponent.prototype.refresh = function (isNew) {
        return this.ej2Instances.refresh(isNew);
    };
    SpreadsheetComponent.prototype.removeContextMenuItems = function (items, isUniqueId) {
        return this.ej2Instances.removeContextMenuItems(items, isUniqueId);
    };
    SpreadsheetComponent.prototype.removeDataValidation = function (range) {
        return this.ej2Instances.removeDataValidation(range);
    };
    SpreadsheetComponent.prototype.removeDefinedName = function (definedName, scope) {
        return this.ej2Instances.removeDefinedName(definedName, scope);
    };
    SpreadsheetComponent.prototype.removeHyperlink = function (range) {
        return this.ej2Instances.removeHyperlink(range);
    };
    SpreadsheetComponent.prototype.removeInvalidHighlight = function (range) {
        return this.ej2Instances.removeInvalidHighlight(range);
    };
    SpreadsheetComponent.prototype.replace = function (args) {
        return this.ej2Instances.replace(args);
    };
    SpreadsheetComponent.prototype.resize = function () {
        return this.ej2Instances.resize();
    };
    SpreadsheetComponent.prototype.save = function (saveOptions) {
        return this.ej2Instances.save(saveOptions);
    };
    SpreadsheetComponent.prototype.saveAsJson = function () {
        return this.ej2Instances.saveAsJson();
    };
    SpreadsheetComponent.prototype.selectRange = function (address) {
        return this.ej2Instances.selectRange(address);
    };
    SpreadsheetComponent.prototype.setBorder = function (style, range, type) {
        return this.ej2Instances.setBorder(style, range, type);
    };
    SpreadsheetComponent.prototype.setColWidth = function (width, colIndex, sheetIndex) {
        return this.ej2Instances.setColWidth(width, colIndex, sheetIndex);
    };
    SpreadsheetComponent.prototype.setRowHeight = function (height, rowIndex, sheetIndex, edited) {
        return this.ej2Instances.setRowHeight(height, rowIndex, sheetIndex, edited);
    };
    SpreadsheetComponent.prototype.showSpinner = function () {
        return this.ej2Instances.showSpinner();
    };
    SpreadsheetComponent.prototype.sort = function (sortOptions, range) {
        return this.ej2Instances.sort(sortOptions, range);
    };
    SpreadsheetComponent.prototype.startEdit = function () {
        return this.ej2Instances.startEdit();
    };
    SpreadsheetComponent.prototype.unMerge = function (range) {
        return this.ej2Instances.unMerge(range);
    };
    SpreadsheetComponent.prototype.undo = function () {
        return this.ej2Instances.undo();
    };
    SpreadsheetComponent.prototype.unfreezePanes = function (sheet) {
        return this.ej2Instances.unfreezePanes(sheet);
    };
    SpreadsheetComponent.prototype.unprotectSheet = function (sheet) {
        return this.ej2Instances.unprotectSheet(sheet);
    };
    SpreadsheetComponent.prototype.updateAction = function (options) {
        return this.ej2Instances.updateAction(options);
    };
    SpreadsheetComponent.prototype.updateCell = function (cell, address) {
        return this.ej2Instances.updateCell(cell, address);
    };
    SpreadsheetComponent.prototype.updateRange = function (range, sheetIdx) {
        return this.ej2Instances.updateRange(range, sheetIdx);
    };
    SpreadsheetComponent.prototype.updateUndoRedoCollection = function (args) {
        return this.ej2Instances.updateUndoRedoCollection(args);
    };
    SpreadsheetComponent.prototype.wrap = function (address, wrap) {
        return this.ej2Instances.wrap(address, wrap);
    };
    SpreadsheetComponent = __decorate$9([
        EJComponentDecorator({
            props: properties
        }, isExecute$9)
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
    ], SpreadsheetComponent);
    return SpreadsheetComponent;
}(ComponentBase));
var SpreadsheetPlugin = {
    name: 'ejs-spreadsheet',
    install: function (Vue$$1) {
        Vue$$1.component(SpreadsheetPlugin.name, SpreadsheetComponent);
        Vue$$1.component(SheetPlugin.name, SheetDirective);
        Vue$$1.component(SheetsPlugin.name, SheetsDirective);
        Vue$$1.component(RowPlugin.name, RowDirective);
        Vue$$1.component(RowsPlugin.name, RowsDirective);
        Vue$$1.component(CellPlugin.name, CellDirective);
        Vue$$1.component(CellsPlugin.name, CellsDirective);
        Vue$$1.component(ImagePlugin.name, ImageDirective);
        Vue$$1.component(ImagesPlugin.name, ImagesDirective);
        Vue$$1.component(ChartPlugin.name, ChartDirective);
        Vue$$1.component(ChartsPlugin.name, ChartsDirective);
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
        Vue$$1.component(RangePlugin.name, RangeDirective);
        Vue$$1.component(RangesPlugin.name, RangesDirective);
        Vue$$1.component(ConditionalFormatPlugin.name, ConditionalFormatDirective);
        Vue$$1.component(ConditionalFormatsPlugin.name, ConditionalFormatsDirective);
        Vue$$1.component(DefinedNamePlugin.name, DefinedNameDirective);
        Vue$$1.component(DefinedNamesPlugin.name, DefinedNamesDirective);
    }
};

export { ImagesDirective, ImageDirective, ImagesPlugin, ImagePlugin, ChartsDirective, ChartDirective, ChartsPlugin, ChartPlugin, CellsDirective, CellDirective, CellsPlugin, CellPlugin, RowsDirective, RowDirective, RowsPlugin, RowPlugin, ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin, RangesDirective, RangeDirective, RangesPlugin, RangePlugin, ConditionalFormatsDirective, ConditionalFormatDirective, ConditionalFormatsPlugin, ConditionalFormatPlugin, SheetsDirective, SheetDirective, SheetsPlugin, SheetPlugin, DefinedNamesDirective, DefinedNameDirective, DefinedNamesPlugin, DefinedNamePlugin, SpreadsheetComponent, SpreadsheetPlugin };
export * from '@syncfusion/ej2-spreadsheet';
//# sourceMappingURL=ej2-vue-spreadsheet.es5.js.map
