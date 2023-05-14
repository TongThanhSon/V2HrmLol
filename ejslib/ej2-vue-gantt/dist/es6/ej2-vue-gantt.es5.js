import { Gantt } from '@syncfusion/ej2-gantt';
import { ComponentBase, EJComponentDecorator, allVue, getProps, gh } from '@syncfusion/ej2-vue-base';
import { Vue } from 'vue-class-component';
import { getValue, isNullOrUndefined, isUndefined } from '@syncfusion/ej2-base';
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
var ColumnsDirective = /** @class */ (function (_super) {
    __extends(ColumnsDirective, _super);
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
    ColumnsDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], ColumnsDirective);
    return ColumnsDirective;
}(vueImport));
var ColumnsPlugin = {
    name: 'e-columns',
    install: function (Vue$$1) {
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
    }
};
/**
 * `e-column` directive represent a column of the VueJS Gantt.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource='data' allowSelection='true' allowSorting='true'>
 *   <e-columns>
 *    <e-column field='ID' width='150'/>
 *    <e-column field='taskName' headerText='Task Name' width='200'/>
 *   </e-columns>
 * </ejs-gantt>
 * ```
 */
var ColumnDirective = /** @class */ (function (_super) {
    __extends(ColumnDirective, _super);
    function ColumnDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnDirective.prototype.render = function () {
        return;
    };
    ColumnDirective.prototype.getTag = function () {
        return 'e-column';
    };
    ColumnDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], ColumnDirective);
    return ColumnDirective;
}(vueImport));
var ColumnPlugin = {
    name: 'e-column',
    install: function (Vue$$1) {
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
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
var AddDialogFieldsDirective = /** @class */ (function (_super) {
    __extends$1(AddDialogFieldsDirective, _super);
    function AddDialogFieldsDirective() {
        return _super.call(this, arguments) || this;
    }
    AddDialogFieldsDirective.prototype.render = function (createElement) {
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
    AddDialogFieldsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    AddDialogFieldsDirective.prototype.getTag = function () {
        return 'e-add-dialog-fields';
    };
    AddDialogFieldsDirective = __decorate$1([
        EJComponentDecorator({}, isExecute$1)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], AddDialogFieldsDirective);
    return AddDialogFieldsDirective;
}(vueImport$1));
var AddDialogFieldsPlugin = {
    name: 'e-add-dialog-fields',
    install: function (Vue$$1) {
        Vue$$1.component(AddDialogFieldsPlugin.name, AddDialogFieldsDirective);
    }
};
/**
 * `e-add-dialog-fields` directive represent a add dialog fields in VueJS Gantt.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-add-dialog-fields>
 *     <e-add-dialog-field type='General' headerText='General'/>
 *     <e-add-dialog-field type='Dependency' headerText='Dependency'/>
 *   </e-add-dialog-fields>
 * </ejs-gantt>
 * ```
 */
var AddDialogFieldDirective = /** @class */ (function (_super) {
    __extends$1(AddDialogFieldDirective, _super);
    function AddDialogFieldDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddDialogFieldDirective.prototype.render = function () {
        return;
    };
    AddDialogFieldDirective.prototype.getTag = function () {
        return 'e-add-dialog-field';
    };
    AddDialogFieldDirective = __decorate$1([
        EJComponentDecorator({}, isExecute$1)
    ], AddDialogFieldDirective);
    return AddDialogFieldDirective;
}(vueImport$1));
var AddDialogFieldPlugin = {
    name: 'e-add-dialog-field',
    install: function (Vue$$1) {
        Vue$$1.component(AddDialogFieldPlugin.name, AddDialogFieldDirective);
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
var EditDialogFieldsDirective = /** @class */ (function (_super) {
    __extends$2(EditDialogFieldsDirective, _super);
    function EditDialogFieldsDirective() {
        return _super.call(this, arguments) || this;
    }
    EditDialogFieldsDirective.prototype.render = function (createElement) {
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
    EditDialogFieldsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    EditDialogFieldsDirective.prototype.getTag = function () {
        return 'e-edit-dialog-fields';
    };
    EditDialogFieldsDirective = __decorate$2([
        EJComponentDecorator({}, isExecute$2)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], EditDialogFieldsDirective);
    return EditDialogFieldsDirective;
}(vueImport$2));
var EditDialogFieldsPlugin = {
    name: 'e-edit-dialog-fields',
    install: function (Vue$$1) {
        Vue$$1.component(EditDialogFieldsPlugin.name, EditDialogFieldsDirective);
    }
};
/**
 * `e-edit-dialog-fields` directive represent a add dialog fields in VueJS Gantt.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-edit-dialog-fields>
 *     <e-edit-dialog-field type='General' headerText='General'/>
 *     <e-edit-dialog-field type='Dependency' headerText='Dependency'/>
 *   </e-edit-dialog-fields>
 * </ejs-gantt>
 * ```
 */
var EditDialogFieldDirective = /** @class */ (function (_super) {
    __extends$2(EditDialogFieldDirective, _super);
    function EditDialogFieldDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditDialogFieldDirective.prototype.render = function () {
        return;
    };
    EditDialogFieldDirective.prototype.getTag = function () {
        return 'e-edit-dialog-field';
    };
    EditDialogFieldDirective = __decorate$2([
        EJComponentDecorator({}, isExecute$2)
    ], EditDialogFieldDirective);
    return EditDialogFieldDirective;
}(vueImport$2));
var EditDialogFieldPlugin = {
    name: 'e-edit-dialog-field',
    install: function (Vue$$1) {
        Vue$$1.component(EditDialogFieldPlugin.name, EditDialogFieldDirective);
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
var DayWorkingTimeCollectionDirective = /** @class */ (function (_super) {
    __extends$3(DayWorkingTimeCollectionDirective, _super);
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
    DayWorkingTimeCollectionDirective = __decorate$3([
        EJComponentDecorator({}, isExecute$3)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], DayWorkingTimeCollectionDirective);
    return DayWorkingTimeCollectionDirective;
}(vueImport$3));
var DayWorkingTimeCollectionPlugin = {
    name: 'e-day-working-time-collection',
    install: function (Vue$$1) {
        Vue$$1.component(DayWorkingTimeCollectionPlugin.name, DayWorkingTimeCollectionDirective);
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
    __extends$3(DayWorkingTimeDirective, _super);
    function DayWorkingTimeDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayWorkingTimeDirective.prototype.render = function () {
        return;
    };
    DayWorkingTimeDirective.prototype.getTag = function () {
        return 'e-day-working-time';
    };
    DayWorkingTimeDirective = __decorate$3([
        EJComponentDecorator({}, isExecute$3)
    ], DayWorkingTimeDirective);
    return DayWorkingTimeDirective;
}(vueImport$3));
var DayWorkingTimePlugin = {
    name: 'e-day-working-time',
    install: function (Vue$$1) {
        Vue$$1.component(DayWorkingTimePlugin.name, DayWorkingTimeDirective);
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
var HolidaysDirective = /** @class */ (function (_super) {
    __extends$4(HolidaysDirective, _super);
    function HolidaysDirective() {
        return _super.call(this, arguments) || this;
    }
    HolidaysDirective.prototype.render = function (createElement) {
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
    HolidaysDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    HolidaysDirective.prototype.getTag = function () {
        return 'e-holidays';
    };
    HolidaysDirective = __decorate$4([
        EJComponentDecorator({}, isExecute$4)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], HolidaysDirective);
    return HolidaysDirective;
}(vueImport$4));
var HolidaysPlugin = {
    name: 'e-holidays',
    install: function (Vue$$1) {
        Vue$$1.component(HolidaysPlugin.name, HolidaysDirective);
    }
};
/**
 * `e-holidays` directive represent a holidays collection in Gantt.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-holidays>
 *     <e-holiday from='02/20/2018' label='Holiday 1'/>
 *     <e-holiday from='05/15/2018' label='Holiday 2'/>
 *   </e-holidays>
 * </ejs-gantt>
 * ```
 */
var HolidayDirective = /** @class */ (function (_super) {
    __extends$4(HolidayDirective, _super);
    function HolidayDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HolidayDirective.prototype.render = function () {
        return;
    };
    HolidayDirective.prototype.getTag = function () {
        return 'e-holidays';
    };
    HolidayDirective = __decorate$4([
        EJComponentDecorator({}, isExecute$4)
    ], HolidayDirective);
    return HolidayDirective;
}(vueImport$4));
var HolidayPlugin = {
    name: 'e-holidays',
    install: function (Vue$$1) {
        Vue$$1.component(HolidayPlugin.name, HolidayDirective);
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
var EventMarkersDirective = /** @class */ (function (_super) {
    __extends$5(EventMarkersDirective, _super);
    function EventMarkersDirective() {
        return _super.call(this, arguments) || this;
    }
    EventMarkersDirective.prototype.render = function (createElement) {
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
    EventMarkersDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    EventMarkersDirective.prototype.getTag = function () {
        return 'e-event-markers';
    };
    EventMarkersDirective = __decorate$5([
        EJComponentDecorator({}, isExecute$5)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], EventMarkersDirective);
    return EventMarkersDirective;
}(vueImport$5));
var EventMarkersPlugin = {
    name: 'e-event-markers',
    install: function (Vue$$1) {
        Vue$$1.component(EventMarkersPlugin.name, EventMarkersDirective);
    }
};
/**
 * `e-event-markers` directive represent a event marker collection in Gantt
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-event-markers>
 *     <e-event-marker day='02/10/2018' label='Project Starts'/>
 *   </e-event-markers>
 * </ejs-gantt>
 * ```
 */
var EventMarkerDirective = /** @class */ (function (_super) {
    __extends$5(EventMarkerDirective, _super);
    function EventMarkerDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventMarkerDirective.prototype.render = function () {
        return;
    };
    EventMarkerDirective.prototype.getTag = function () {
        return 'e-event-marker';
    };
    EventMarkerDirective = __decorate$5([
        EJComponentDecorator({}, isExecute$5)
    ], EventMarkerDirective);
    return EventMarkerDirective;
}(vueImport$5));
var EventMarkerPlugin = {
    name: 'e-event-marker',
    install: function (Vue$$1) {
        Vue$$1.component(EventMarkerPlugin.name, EventMarkerDirective);
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
var properties = ['isLazyUpdate', 'plugins', 'addDialogFields', 'allowExcelExport', 'allowFiltering', 'allowKeyboard', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowUnscheduledTasks', 'autoFocusTasks', 'baselineColor', 'collapseAllParentTasks', 'columnMenuItems', 'columns', 'connectorLineBackground', 'connectorLineWidth', 'contextMenuItems', 'dataSource', 'dateFormat', 'dayWorkingTime', 'disableHtmlEncode', 'durationUnit', 'editDialogFields', 'editSettings', 'enableContextMenu', 'enableCriticalPath', 'enableImmutableMode', 'enableMultiTaskbar', 'enablePersistence', 'enablePredecessorValidation', 'enableRtl', 'enableVirtualization', 'eventMarkers', 'filterSettings', 'gridLines', 'height', 'highlightWeekends', 'holidays', 'includeWeekend', 'labelSettings', 'locale', 'milestoneTemplate', 'parentTaskbarTemplate', 'projectEndDate', 'projectStartDate', 'query', 'readOnly', 'renderBaseline', 'resourceFields', 'resourceIDMapping', 'resourceNameMapping', 'resources', 'rowHeight', 'searchSettings', 'segmentData', 'selectedRowIndex', 'selectionSettings', 'showColumnMenu', 'showInlineNotes', 'showOverAllocation', 'sortSettings', 'splitterSettings', 'taskFields', 'taskMode', 'taskType', 'taskbarHeight', 'taskbarTemplate', 'timelineSettings', 'timezone', 'toolbar', 'tooltipSettings', 'treeColumnIndex', 'validateManualTasksOnLinking', 'viewType', 'width', 'workUnit', 'workWeek', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeExcelExport', 'beforePdfExport', 'beforeTooltipRender', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSelected', 'cellSelecting', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'dataStateChange', 'destroyed', 'endEdit', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'expanded', 'expanding', 'headerCellInfo', 'load', 'onMouseMove', 'onTaskbarClick', 'pdfColumnHeaderQueryCellInfo', 'pdfExportComplete', 'pdfQueryCellInfo', 'pdfQueryTaskbarInfo', 'pdfQueryTimelineCellInfo', 'queryCellInfo', 'queryTaskbarInfo', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'splitterResizeStart', 'splitterResized', 'splitterResizing', 'taskbarEdited', 'taskbarEditing', 'toolbarClick'];
var modelProps = ['dataSource'];
var testProp = getProps({ props: properties });
var props = testProp[0];
var watch = testProp[1];
var emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (var _i = 0, modelProps_1 = modelProps; _i < modelProps_1.length; _i++) {
    var props_1 = modelProps_1[_i];
    emitProbs.push('update:' + props_1);
}
var isExecute$6 = gh ? false : true;
/**
 * `ejs-gantt` represents the VueJS Gantt Component.
 * ```vue
 * <ejs-gantt :dataSource='data' allowSelection='true' allowSorting='true'></ejs-gantt>
 * ```
 */
var GanttComponent = /** @class */ (function (_super) {
    __extends$6(GanttComponent, _super);
    function GanttComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-columns": "e-column", "e-add-dialog-fields": "e-add-dialog-field", "e-edit-dialog-fields": "e-edit-dialog-field", "e-day-working-time-collection": "e-day-working-time", "e-holidays": "e-holidays", "e-event-markers": "e-event-marker" };
        _this.tagNameMapper = { "e-add-dialog-fields": "e-addDialogFields", "e-edit-dialog-fields": "e-editDialogFields", "e-day-working-time-collection": "e-dayWorkingTime", "e-event-markers": "e-eventMarkers" };
        _this.isVue3 = !isExecute$6;
        _this.ej2Instances = new Gantt({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    GanttComponent.prototype.clearTemplate = function (templateNames) {
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
    GanttComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    GanttComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if (!isExecute$6) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$6) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                }
                else {
                    if (eventName === 'change' || (this.$props && !this.$props.isLazyUpdate)) {
                        this.$emit('update:' + propKey, eventProp[propKey]);
                        this.$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/currentView|selectedDate/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$6) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                }
                else {
                    this.$emit('update:' + propKey, eventProp[propKey]);
                    this.$emit('modelchanged', eventProp[propKey]);
                }
            }
        }
        if ((this.ej2Instances && this.ej2Instances._trigger)) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    GanttComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    GanttComponent.prototype.custom = function () {
        this.updated();
    };
    GanttComponent.prototype.addPredecessor = function (id, predecessorString) {
        return this.ej2Instances.addPredecessor(id, predecessorString);
    };
    GanttComponent.prototype.addRecord = function (data, rowPosition, rowIndex) {
        return this.ej2Instances.addRecord(data, rowPosition, rowIndex);
    };
    GanttComponent.prototype.cancelEdit = function () {
        return this.ej2Instances.cancelEdit();
    };
    GanttComponent.prototype.changeTaskMode = function (data) {
        return this.ej2Instances.changeTaskMode(data);
    };
    GanttComponent.prototype.clearFiltering = function (fields) {
        return this.ej2Instances.clearFiltering(fields);
    };
    GanttComponent.prototype.clearSelection = function () {
        return this.ej2Instances.clearSelection();
    };
    GanttComponent.prototype.clearSorting = function () {
        return this.ej2Instances.clearSorting();
    };
    GanttComponent.prototype.collapseAll = function () {
        return this.ej2Instances.collapseAll();
    };
    GanttComponent.prototype.collapseByID = function (id) {
        return this.ej2Instances.collapseByID(id);
    };
    GanttComponent.prototype.collapseByIndex = function (index) {
        return this.ej2Instances.collapseByIndex(index);
    };
    GanttComponent.prototype.convertToMilestone = function (id) {
        return this.ej2Instances.convertToMilestone(id);
    };
    GanttComponent.prototype.csvExport = function (excelExportProperties, isMultipleExport, workbook, isBlob) {
        return this.ej2Instances.csvExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    };
    GanttComponent.prototype.deleteRecord = function (taskDetail) {
        return this.ej2Instances.deleteRecord(taskDetail);
    };
    GanttComponent.prototype.enableItems = function (items, isEnable) {
        return this.ej2Instances.enableItems(items, isEnable);
    };
    GanttComponent.prototype.excelExport = function (excelExportProperties, isMultipleExport, workbook, isBlob) {
        return this.ej2Instances.excelExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    };
    GanttComponent.prototype.expandAll = function () {
        return this.ej2Instances.expandAll();
    };
    GanttComponent.prototype.expandByID = function (id) {
        return this.ej2Instances.expandByID(id);
    };
    GanttComponent.prototype.expandByIndex = function (index) {
        return this.ej2Instances.expandByIndex(index);
    };
    GanttComponent.prototype.filterByColumn = function (fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent) {
        return this.ej2Instances.filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent);
    };
    GanttComponent.prototype.fitToProject = function () {
        return this.ej2Instances.fitToProject();
    };
    GanttComponent.prototype.getCriticalTasks = function () {
        return this.ej2Instances.getCriticalTasks();
    };
    GanttComponent.prototype.getDurationString = function (duration, durationUnit) {
        return this.ej2Instances.getDurationString(duration, durationUnit);
    };
    GanttComponent.prototype.getExpandedRecords = function (records) {
        return this.ej2Instances.getExpandedRecords(records);
    };
    GanttComponent.prototype.getFormatedDate = function (date, format) {
        return this.ej2Instances.getFormatedDate(date, format);
    };
    GanttComponent.prototype.getGanttColumns = function () {
        return this.ej2Instances.getGanttColumns();
    };
    GanttComponent.prototype.getGridColumns = function () {
        return this.ej2Instances.getGridColumns();
    };
    GanttComponent.prototype.getRecordByID = function (id) {
        return this.ej2Instances.getRecordByID(id);
    };
    GanttComponent.prototype.getRowByID = function (id) {
        return this.ej2Instances.getRowByID(id);
    };
    GanttComponent.prototype.getRowByIndex = function (index) {
        return this.ej2Instances.getRowByIndex(index);
    };
    GanttComponent.prototype.getTaskByUniqueID = function (id) {
        return this.ej2Instances.getTaskByUniqueID(id);
    };
    GanttComponent.prototype.getTaskbarHeight = function () {
        return this.ej2Instances.getTaskbarHeight();
    };
    GanttComponent.prototype.getWorkString = function (work, workUnit) {
        return this.ej2Instances.getWorkString(work, workUnit);
    };
    GanttComponent.prototype.hideColumn = function (keys, hideBy) {
        return this.ej2Instances.hideColumn(keys, hideBy);
    };
    GanttComponent.prototype.hideSpinner = function () {
        return this.ej2Instances.hideSpinner();
    };
    GanttComponent.prototype.indent = function () {
        return this.ej2Instances.indent();
    };
    GanttComponent.prototype.keyActionHandler = function (e) {
        return this.ej2Instances.keyActionHandler(e);
    };
    GanttComponent.prototype.mergeTask = function (taskId, segmentIndexes) {
        return this.ej2Instances.mergeTask(taskId, segmentIndexes);
    };
    GanttComponent.prototype.nextTimeSpan = function (mode) {
        return this.ej2Instances.nextTimeSpan(mode);
    };
    GanttComponent.prototype.openAddDialog = function () {
        return this.ej2Instances.openAddDialog();
    };
    GanttComponent.prototype.openEditDialog = function (taskId) {
        return this.ej2Instances.openEditDialog(taskId);
    };
    GanttComponent.prototype.outdent = function () {
        return this.ej2Instances.outdent();
    };
    GanttComponent.prototype.pdfExport = function (pdfExportProperties, isMultipleExport, pdfDoc) {
        return this.ej2Instances.pdfExport(pdfExportProperties, isMultipleExport, pdfDoc);
    };
    GanttComponent.prototype.previousTimeSpan = function (mode) {
        return this.ej2Instances.previousTimeSpan(mode);
    };
    GanttComponent.prototype.removePredecessor = function (id) {
        return this.ej2Instances.removePredecessor(id);
    };
    GanttComponent.prototype.removeSortColumn = function (columnName) {
        return this.ej2Instances.removeSortColumn(columnName);
    };
    GanttComponent.prototype.renderTemplates = function () {
        return this.ej2Instances.renderTemplates();
    };
    GanttComponent.prototype.reorderColumns = function (fromFName, toFName) {
        return this.ej2Instances.reorderColumns(fromFName, toFName);
    };
    GanttComponent.prototype.reorderRows = function (fromIndexes, toIndex, position) {
        return this.ej2Instances.reorderRows(fromIndexes, toIndex, position);
    };
    GanttComponent.prototype.resetTemplates = function () {
        return this.ej2Instances.resetTemplates();
    };
    GanttComponent.prototype.scrollToDate = function (date) {
        return this.ej2Instances.scrollToDate(date);
    };
    GanttComponent.prototype.scrollToTask = function (taskId) {
        return this.ej2Instances.scrollToTask(taskId);
    };
    GanttComponent.prototype.search = function (keyVal) {
        return this.ej2Instances.search(keyVal);
    };
    GanttComponent.prototype.selectCell = function (cellIndex, isToggle) {
        return this.ej2Instances.selectCell(cellIndex, isToggle);
    };
    GanttComponent.prototype.selectCells = function (rowCellIndexes) {
        return this.ej2Instances.selectCells(rowCellIndexes);
    };
    GanttComponent.prototype.selectRow = function (index, isToggle) {
        return this.ej2Instances.selectRow(index, isToggle);
    };
    GanttComponent.prototype.selectRows = function (records) {
        return this.ej2Instances.selectRows(records);
    };
    GanttComponent.prototype.setScrollTop = function (scrollTop) {
        return this.ej2Instances.setScrollTop(scrollTop);
    };
    GanttComponent.prototype.setSplitterPosition = function (value, type) {
        return this.ej2Instances.setSplitterPosition(value, type);
    };
    GanttComponent.prototype.showColumn = function (keys, showBy) {
        return this.ej2Instances.showColumn(keys, showBy);
    };
    GanttComponent.prototype.showCriticalPath = function (isCritical) {
        return this.ej2Instances.showCriticalPath(isCritical);
    };
    GanttComponent.prototype.showSpinner = function () {
        return this.ej2Instances.showSpinner();
    };
    GanttComponent.prototype.sortColumn = function (columnName, direction, isMultiSort) {
        return this.ej2Instances.sortColumn(columnName, direction, isMultiSort);
    };
    GanttComponent.prototype.splitTask = function (taskId, splitDate) {
        return this.ej2Instances.splitTask(taskId, splitDate);
    };
    GanttComponent.prototype.updateChartScrollOffset = function (left, top) {
        return this.ej2Instances.updateChartScrollOffset(left, top);
    };
    GanttComponent.prototype.updateDataSource = function (dataSource, args) {
        return this.ej2Instances.updateDataSource(dataSource, args);
    };
    GanttComponent.prototype.updatePredecessor = function (id, predecessorString) {
        return this.ej2Instances.updatePredecessor(id, predecessorString);
    };
    GanttComponent.prototype.updateProjectDates = function (startDate, endDate, isTimelineRoundOff, isFrom) {
        return this.ej2Instances.updateProjectDates(startDate, endDate, isTimelineRoundOff, isFrom);
    };
    GanttComponent.prototype.updateRecordByID = function (data) {
        return this.ej2Instances.updateRecordByID(data);
    };
    GanttComponent.prototype.updateRecordByIndex = function (index, data) {
        return this.ej2Instances.updateRecordByIndex(index, data);
    };
    GanttComponent.prototype.updateTaskId = function (currentId, newId) {
        return this.ej2Instances.updateTaskId(currentId, newId);
    };
    GanttComponent.prototype.zoomIn = function () {
        return this.ej2Instances.zoomIn();
    };
    GanttComponent.prototype.zoomOut = function () {
        return this.ej2Instances.zoomOut();
    };
    GanttComponent = __decorate$6([
        EJComponentDecorator({
            props: properties,
            model: {
                event: 'modelchanged'
            }
        }, isExecute$6)
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
    ], GanttComponent);
    return GanttComponent;
}(ComponentBase));
var GanttPlugin = {
    name: 'ejs-gantt',
    install: function (Vue$$1) {
        Vue$$1.component(GanttPlugin.name, GanttComponent);
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
        Vue$$1.component(AddDialogFieldPlugin.name, AddDialogFieldDirective);
        Vue$$1.component(AddDialogFieldsPlugin.name, AddDialogFieldsDirective);
        Vue$$1.component(EditDialogFieldPlugin.name, EditDialogFieldDirective);
        Vue$$1.component(EditDialogFieldsPlugin.name, EditDialogFieldsDirective);
        Vue$$1.component(DayWorkingTimePlugin.name, DayWorkingTimeDirective);
        Vue$$1.component(DayWorkingTimeCollectionPlugin.name, DayWorkingTimeCollectionDirective);
        Vue$$1.component(HolidayPlugin.name, HolidayDirective);
        Vue$$1.component(HolidaysPlugin.name, HolidaysDirective);
        Vue$$1.component(EventMarkerPlugin.name, EventMarkerDirective);
        Vue$$1.component(EventMarkersPlugin.name, EventMarkersDirective);
    }
};

export { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin, AddDialogFieldsDirective, AddDialogFieldDirective, AddDialogFieldsPlugin, AddDialogFieldPlugin, EditDialogFieldsDirective, EditDialogFieldDirective, EditDialogFieldsPlugin, EditDialogFieldPlugin, DayWorkingTimeCollectionDirective, DayWorkingTimeDirective, DayWorkingTimeCollectionPlugin, DayWorkingTimePlugin, HolidaysDirective, HolidayDirective, HolidaysPlugin, HolidayPlugin, EventMarkersDirective, EventMarkerDirective, EventMarkersPlugin, EventMarkerPlugin, GanttComponent, GanttPlugin };
export * from '@syncfusion/ej2-gantt';
//# sourceMappingURL=ej2-vue-gantt.es5.js.map
