import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { Component, createElement } from 'react';
import { DropDownButton, ProgressButton, SplitButton } from '@syncfusion/ej2-splitbuttons';

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
var DropDownButtonItemDirective = /** @class */ (function (_super) {
    __extends(DropDownButtonItemDirective, _super);
    function DropDownButtonItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropDownButtonItemDirective.moduleName = 'dropDownButtonItem';
    return DropDownButtonItemDirective;
}(ComplexBase));
var DropDownButtonItemsDirective = /** @class */ (function (_super) {
    __extends(DropDownButtonItemsDirective, _super);
    function DropDownButtonItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropDownButtonItemsDirective.propertyName = 'items';
    DropDownButtonItemsDirective.moduleName = 'dropDownButtonItems';
    return DropDownButtonItemsDirective;
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
 * `DropDownButtonComponent` represents the react DropDownButton Component.
 * ```ts
 * <DropDownButtonComponent content='DropDownButton'></DropDownButtonComponent>
 * ```
 */
var DropDownButtonComponent = /** @class */ (function (_super) {
    __extends$1(DropDownButtonComponent, _super);
    function DropDownButtonComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = false;
        _this.directivekeys = { 'dropDownButtonItems': 'dropDownButtonItem' };
        _this.immediateRender = true;
        _this.portals = [];
        return _this;
    }
    DropDownButtonComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('button', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return DropDownButtonComponent;
}(DropDownButton));
applyMixins(DropDownButtonComponent, [ComponentBase, Component]);

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
var SplitButtonItemDirective = /** @class */ (function (_super) {
    __extends$2(SplitButtonItemDirective, _super);
    function SplitButtonItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplitButtonItemDirective.moduleName = 'splitButtonItem';
    return SplitButtonItemDirective;
}(ComplexBase));
var SplitButtonItemsDirective = /** @class */ (function (_super) {
    __extends$2(SplitButtonItemsDirective, _super);
    function SplitButtonItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplitButtonItemsDirective.propertyName = 'items';
    SplitButtonItemsDirective.moduleName = 'splitButtonItems';
    return SplitButtonItemsDirective;
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
 * `SplitButtonComponent` represents the react SplitButton Component.
 * ```ts
 * <SplitButtonComponent content='Split Button'></SplitButtonComponent>
 * ```
 */
var SplitButtonComponent = /** @class */ (function (_super) {
    __extends$3(SplitButtonComponent, _super);
    function SplitButtonComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = false;
        _this.directivekeys = { 'splitButtonItems': 'splitButtonItem' };
        _this.immediateRender = true;
        _this.portals = [];
        return _this;
    }
    SplitButtonComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('button', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return SplitButtonComponent;
}(SplitButton));
applyMixins(SplitButtonComponent, [ComponentBase, Component]);

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
 * `ProgressButtonComponent` represents the react ProgressButton Component.
 * ```ts
 * <ProgressButtonComponent content='Progress Button'></ProgressButtonComponent>
 * ```
 */
var ProgressButtonComponent = /** @class */ (function (_super) {
    __extends$4(ProgressButtonComponent, _super);
    function ProgressButtonComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = false;
        _this.immediateRender = true;
        _this.portals = [];
        return _this;
    }
    ProgressButtonComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('button', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return ProgressButtonComponent;
}(ProgressButton));
applyMixins(ProgressButtonComponent, [ComponentBase, Component]);

export { DropDownButtonItemDirective, DropDownButtonItemsDirective, DropDownButtonComponent, SplitButtonItemDirective, SplitButtonItemsDirective, SplitButtonComponent, ProgressButtonComponent };
export * from '@syncfusion/ej2-splitbuttons';
//# sourceMappingURL=ej2-react-splitbuttons.es5.js.map
