import { Component, Fragment, createElement } from 'react';
import { Calendar, DatePicker, DateRangePicker, DateTimePicker, TimePicker } from '@syncfusion/ej2-calendars';
import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';

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
/**
 * Represents the Essential JS 2 React Calendar Component.
 * ```ts
 * <CalendarComponent value={date}></CalendarComponent>
 * ```
 */
var CalendarComponent = /** @class */ (function (_super) {
    __extends(CalendarComponent, _super);
    function CalendarComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.immediateRender = true;
        _this.portals = [];
        return _this;
    }
    CalendarComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return CalendarComponent;
}(Calendar));
applyMixins(CalendarComponent, [ComponentBase, Component]);

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
/**
 * Represents the Essential JS 2 React DatePicker Component.
 * ```ts
 * <DatePickerComponent value={date}></DatePickerComponent>
 * ```
 */
var DatePickerComponent = /** @class */ (function (_super) {
    __extends$1(DatePickerComponent, _super);
    function DatePickerComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.immediateRender = true;
        _this.portals = [];
        return _this;
    }
    DatePickerComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement(Fragment, null, [].concat(createElement("input", this.getDefaultAttributes()), this.portals));
        }
    };
    return DatePickerComponent;
}(DatePicker));
applyMixins(DatePickerComponent, [ComponentBase, Component]);

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
/**
 * Represents the Essential JS 2 React TimePicker Component.
 * ```html
 * <TimePickerComponent value={value}></TimePickerComponent>
 * ```
 */
var TimePickerComponent = /** @class */ (function (_super) {
    __extends$2(TimePickerComponent, _super);
    function TimePickerComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.immediateRender = true;
        _this.portals = [];
        return _this;
    }
    TimePickerComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement(Fragment, null, [].concat(createElement("input", this.getDefaultAttributes()), this.portals));
        }
    };
    return TimePickerComponent;
}(TimePicker));
applyMixins(TimePickerComponent, [ComponentBase, Component]);

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
/**
 * `PresetsDirective` represent a presets of the react daterangepicker.
 * It must be contained in a daterangepicker component(`DateRangePickerComponent`).
 * ```tsx
 * <DateRangePickerComponent id='range'>
 * <PresetsDirective>
 * <PresetDirective label='Last Week' start={new Date('06/07/2018')} end= {new Date('06/01/2018')}></PresetDirective>
 * <PresetDirective label='Last Month' start={new Date('06/07/2018')} end= {new Date('05/07/2018')]></PresetDirective>
 * </PresetsDirective>
 * </DateRangePickerComponent>
 * ```
 */
var PresetDirective = /** @class */ (function (_super) {
    __extends$3(PresetDirective, _super);
    function PresetDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PresetDirective.moduleName = 'preset';
    return PresetDirective;
}(ComplexBase));
var PresetsDirective = /** @class */ (function (_super) {
    __extends$3(PresetsDirective, _super);
    function PresetsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PresetsDirective.propertyName = 'presets';
    PresetsDirective.moduleName = 'presets';
    return PresetsDirective;
}(ComplexBase));

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
/**
 * Represents the Essential JS 2 React DateRangePicker Component.
 * ```ts
 * <DateRangePickerComponent startDate={date} endDate={date}></DateRangePickerComponent>
 * ```
 */
var DateRangePickerComponent = /** @class */ (function (_super) {
    __extends$4(DateRangePickerComponent, _super);
    function DateRangePickerComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = false;
        _this.directivekeys = { 'presets': 'preset' };
        _this.immediateRender = false;
        _this.portals = [];
        return _this;
    }
    DateRangePickerComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement(Fragment, null, [].concat(createElement("input", this.getDefaultAttributes()), this.portals));
        }
    };
    return DateRangePickerComponent;
}(DateRangePicker));
applyMixins(DateRangePickerComponent, [ComponentBase, Component]);

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
/**
 * Represents the Essential JS 2 React DateTimePicker Component.
 * ```ts
 * <DateTimePickerComponent value={dateTime}></DateTimePickerComponent>
 * ```
 */
var DateTimePickerComponent = /** @class */ (function (_super) {
    __extends$5(DateTimePickerComponent, _super);
    function DateTimePickerComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.immediateRender = true;
        _this.portals = [];
        return _this;
    }
    DateTimePickerComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement(Fragment, null, [].concat(createElement("input", this.getDefaultAttributes()), this.portals));
        }
    };
    return DateTimePickerComponent;
}(DateTimePicker));
applyMixins(DateTimePickerComponent, [ComponentBase, Component]);

export { CalendarComponent, DatePickerComponent, TimePickerComponent, PresetDirective, PresetsDirective, DateRangePickerComponent, DateTimePickerComponent };
export * from '@syncfusion/ej2-calendars';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-calendars.es5.js.map
