import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { Component, createElement } from 'react';
import { Kanban } from '@syncfusion/ej2-kanban';

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
 * `ColumnsDirective` represent a columns of the react Kanban board.
 * It must be contained in a Kanban component(`KanbanComponent`).
 * ```tsx
 * <KanbanComponent>
 *  <ColumnsDirective>
 *   <ColumnDirective keyField='Open' textField='To Do'></ColumnDirective>
 *   <ColumnDirective keyField='Close' textField='Completed'></ColumnDirective>
 *  <ColumnsDirective>
 * </KanbanComponent>
 * ```
 */
var ColumnDirective = /** @class */ (function (_super) {
    __extends(ColumnDirective, _super);
    function ColumnDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnDirective.moduleName = 'column';
    return ColumnDirective;
}(ComplexBase));
var ColumnsDirective = /** @class */ (function (_super) {
    __extends(ColumnsDirective, _super);
    function ColumnsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnsDirective.propertyName = 'columns';
    ColumnsDirective.moduleName = 'columns';
    return ColumnsDirective;
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
 * `StackedHeadersDirective` represent a stacked header of the react Kanban board.
 * It must be contained in a Kanban component(`KanbanComponent`).
 * ```tsx
 * <KanbanComponent>
 *  <StackedHeadersDirective>
 *   <StackedHeaderDirective keyField='Open' text='To Do'></StackedHeaderDirective>
 *   <StackedHeaderDirective keyField='Close' text='Completed'></StackedHeaderDirective>
 *  <StackedHeadersDirective>
 * </KanbanComponent>
 * ```
 */
var StackedHeaderDirective = /** @class */ (function (_super) {
    __extends$1(StackedHeaderDirective, _super);
    function StackedHeaderDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackedHeaderDirective.moduleName = 'stackedHeader';
    return StackedHeaderDirective;
}(ComplexBase));
var StackedHeadersDirective = /** @class */ (function (_super) {
    __extends$1(StackedHeadersDirective, _super);
    function StackedHeadersDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackedHeadersDirective.propertyName = 'stackedHeaders';
    StackedHeadersDirective.moduleName = 'stackedHeaders';
    return StackedHeadersDirective;
}(ComplexBase));

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
 * `KanbanComponent` represents the react Kanban.
 * ```tsx
 * <KanbanComponent/>
 * ```
 */
var KanbanComponent = /** @class */ (function (_super) {
    __extends$2(KanbanComponent, _super);
    function KanbanComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.directivekeys = { 'columns': 'column', 'stackedHeaders': 'stackedHeader' };
        _this.immediateRender = false;
        _this.portals = [];
        return _this;
    }
    KanbanComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return KanbanComponent;
}(Kanban));
applyMixins(KanbanComponent, [ComponentBase, Component]);

export { ColumnDirective, ColumnsDirective, StackedHeaderDirective, StackedHeadersDirective, KanbanComponent };
export * from '@syncfusion/ej2-kanban';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-kanban.es5.js.map
