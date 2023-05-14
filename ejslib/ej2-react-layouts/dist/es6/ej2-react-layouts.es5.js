import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { Component, createElement } from 'react';
import { DashboardLayout, Splitter } from '@syncfusion/ej2-layouts';

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
 * PanesDirective` represent a panes of the react splitter.
 * It must be contained in a Splitter component(`SplitterComponent`).
 * ```tsx
 * <SplitterComponent>
 *   <PaneSettingsDirective>
 *     <PaneDirective size={this.Pane1Size}></PaneDirective>
 *     <PaneDirective size={this.Pane2Size}></PaneDirective>
 *   <PaneSettingsDirective>
 * </SplitterComponent>
 * ```
 */
var PaneDirective = /** @class */ (function (_super) {
    __extends(PaneDirective, _super);
    function PaneDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaneDirective.moduleName = 'pane';
    return PaneDirective;
}(ComplexBase));
var PanesDirective = /** @class */ (function (_super) {
    __extends(PanesDirective, _super);
    function PanesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanesDirective.propertyName = 'paneSettings';
    PanesDirective.moduleName = 'panes';
    return PanesDirective;
}(ComplexBase));

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
 * Represents the React Splitter Component
 * ```html
 * <Splitter></Splitter>
 * ```
 */
var SplitterComponent = /** @class */ (function (_super) {
    __extends$1(SplitterComponent, _super);
    function SplitterComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = false;
        _this.directivekeys = { 'panes': 'pane' };
        _this.immediateRender = false;
        _this.portals = [];
        return _this;
    }
    SplitterComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return SplitterComponent;
}(Splitter));
applyMixins(SplitterComponent, [ComponentBase, Component]);

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
 * `PanelsDirective` represent a presets of the react dashboardlayout.
 * It must be contained in a dashboardlayout component(`DashBoardLayoutComponent`).
 * ```tsx
 * <DashBoardLayoutComponent>
 * <PanelsDirective>
 * <PanelDirective></PanelDirective>
 * <PanelDirective></PanelDirective>
 * </PanelsDirective>
 * </DashBoardLayoutComponent>
 * ```
 */
var PanelDirective = /** @class */ (function (_super) {
    __extends$2(PanelDirective, _super);
    function PanelDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelDirective.moduleName = 'panel';
    PanelDirective.complexTemplate = { 'panelsHeader': 'panels.header', 'panelsContent': 'panels.content' };
    return PanelDirective;
}(ComplexBase));
var PanelsDirective = /** @class */ (function (_super) {
    __extends$2(PanelsDirective, _super);
    function PanelsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelsDirective.propertyName = 'panels';
    PanelsDirective.moduleName = 'panels';
    return PanelsDirective;
}(ComplexBase));

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
 * Represents the Essential JS 2 React DashboardLayout Component.
 * ```ts
 * <DashBoardLayoutComponent></DashBoardLayoutComponent>
 * ```
 */
var DashboardLayoutComponent = /** @class */ (function (_super) {
    __extends$3(DashboardLayoutComponent, _super);
    function DashboardLayoutComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = false;
        _this.directivekeys = { 'panels': 'panel' };
        _this.immediateRender = false;
        _this.portals = [];
        return _this;
    }
    DashboardLayoutComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return DashboardLayoutComponent;
}(DashboardLayout));
applyMixins(DashboardLayoutComponent, [ComponentBase, Component]);

export { PaneDirective, PanesDirective, SplitterComponent, PanelDirective, PanelsDirective, DashboardLayoutComponent };
export * from '@syncfusion/ej2-layouts';
//# sourceMappingURL=ej2-react-layouts.es5.js.map
