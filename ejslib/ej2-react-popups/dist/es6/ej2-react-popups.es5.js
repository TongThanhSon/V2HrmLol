import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { Component, createElement } from 'react';
import { Dialog, Tooltip } from '@syncfusion/ej2-popups';

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
 * `ButtonDirective` represent a button of the react dialog.
 * It must be contained in a Dialog component(`DialogComponent`).
 * ```tsx
 * <DialogComponent showCloseIcon={true}>
 *   <ButtonsDirective>
 *     <DialogbuttonDirective buttonModal={this.okButton}></DialogbuttonDirective>
 *     <DialogbuttonDirective buttonModal={this.cancelButton}></DialogbuttonDirective>
 *   <ButtonsDirective>
 * </DialogComponent>
 * ```
 */
var DialogButtonDirective = /** @class */ (function (_super) {
    __extends(DialogButtonDirective, _super);
    function DialogButtonDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogButtonDirective.moduleName = 'dialogButton';
    return DialogButtonDirective;
}(ComplexBase));
var ButtonsDirective = /** @class */ (function (_super) {
    __extends(ButtonsDirective, _super);
    function ButtonsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonsDirective.propertyName = 'buttons';
    ButtonsDirective.moduleName = 'buttons';
    return ButtonsDirective;
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
 * Represents the React Dialog Component
 * ```html
 * <Dialog></Dialog>
 * ```
 */
var DialogComponent = /** @class */ (function (_super) {
    __extends$1(DialogComponent, _super);
    function DialogComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = false;
        _this.directivekeys = { 'buttons': 'dialogButton' };
        _this.immediateRender = false;
        _this.portals = [];
        return _this;
    }
    DialogComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return DialogComponent;
}(Dialog));
applyMixins(DialogComponent, [ComponentBase, Component]);

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
 * Represents the React Tooltip component that displays a piece of information about the target element on mouse hover.
 * ```html
 * <Tooltip content='Tooltip content'>Show Tooltip</Tooltip>
 * ```
 */
var TooltipComponent = /** @class */ (function (_super) {
    __extends$2(TooltipComponent, _super);
    function TooltipComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = false;
        _this.immediateRender = false;
        _this.portals = [];
        return _this;
    }
    TooltipComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return TooltipComponent;
}(Tooltip));
applyMixins(TooltipComponent, [ComponentBase, Component]);

export { DialogButtonDirective, ButtonsDirective, DialogComponent, TooltipComponent };
export * from '@syncfusion/ej2-popups';
//# sourceMappingURL=ej2-react-popups.es5.js.map
