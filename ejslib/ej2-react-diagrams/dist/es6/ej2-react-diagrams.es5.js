import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { Component, createElement } from 'react';
import { Diagram, Overview, SymbolPalette } from '@syncfusion/ej2-diagrams';

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
 * `Layers Directive` directive represent a connectors of the react diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <LayersDirective>
 * <LayerDirective></LayerDirective>
 * </LayersDirective>
 * </DiagramComponent>
 * ```
 */
var LayerDirective = /** @class */ (function (_super) {
    __extends(LayerDirective, _super);
    function LayerDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerDirective.moduleName = 'layer';
    return LayerDirective;
}(ComplexBase));
var LayersDirective = /** @class */ (function (_super) {
    __extends(LayersDirective, _super);
    function LayersDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayersDirective.propertyName = 'layers';
    LayersDirective.moduleName = 'layers';
    return LayersDirective;
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
 * `custormaps Directive` directive represent a connectors of the react diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <CustormapsDirective>
 * <CustormapDirective></CustormapDirective>
 * </CustormapsDirective>
 * </DiagramComponent>
 * ```
 */
var CustomCursorDirective = /** @class */ (function (_super) {
    __extends$1(CustomCursorDirective, _super);
    function CustomCursorDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomCursorDirective.moduleName = 'customCursor';
    return CustomCursorDirective;
}(ComplexBase));
var CustomCursorsDirective = /** @class */ (function (_super) {
    __extends$1(CustomCursorsDirective, _super);
    function CustomCursorsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomCursorsDirective.propertyName = 'customCursor';
    CustomCursorsDirective.moduleName = 'customCursors';
    return CustomCursorsDirective;
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
 * `ConnectorsDirective` directive represent a connectors of the react diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <ConnectorsDirective>
 * <ConnectorDirective></ConnectorDirective>
 * </ConnectorsDirective>
 * </DiagramComponent>
 * ```
 */
var ConnectorDirective = /** @class */ (function (_super) {
    __extends$2(ConnectorDirective, _super);
    function ConnectorDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectorDirective.moduleName = 'connector';
    return ConnectorDirective;
}(ComplexBase));
var ConnectorsDirective = /** @class */ (function (_super) {
    __extends$2(ConnectorsDirective, _super);
    function ConnectorsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectorsDirective.propertyName = 'connectors';
    ConnectorsDirective.moduleName = 'connectors';
    return ConnectorsDirective;
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
 * `Connector` directive represent a annotation of the react Diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <ConnectorsDirective>
 * <ConnectorDirective>
 * <ConnectorFixedUserHandlesDirective>
 * <ConnectorFixedUserHandleDirective>
 * </ConnectorFixedUserHandleDirective>
 * </ConnectorFixedUserHandlesDirective>
 * </ConnectorDirective>
 * </ConnectorsDirective>
 * </DiagramComponent>
 * ```
 */
var ConnectorFixedUserHandleDirective = /** @class */ (function (_super) {
    __extends$3(ConnectorFixedUserHandleDirective, _super);
    function ConnectorFixedUserHandleDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectorFixedUserHandleDirective.moduleName = 'connectorFixedUserHandle';
    return ConnectorFixedUserHandleDirective;
}(ComplexBase));
var ConnectorFixedUserHandlesDirective = /** @class */ (function (_super) {
    __extends$3(ConnectorFixedUserHandlesDirective, _super);
    function ConnectorFixedUserHandlesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectorFixedUserHandlesDirective.propertyName = 'fixedUserHandles';
    ConnectorFixedUserHandlesDirective.moduleName = 'connectorFixedUserHandles';
    return ConnectorFixedUserHandlesDirective;
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
 * `Annotation` directive represent a annotation of the react Diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <ConnectorsDirective>
 * <ConnectorDirective>
 * <ConnectorAnnotationsDirective>
 * <ConnectorAnnotationDirective>
 * </ConnectorAnnotationDirective>
 * </ConnectorAnnotationsDirective>
 * </ConnectorDirective>
 * </ConnectorsDirective>
 * </DiagramComponent>
 * ```
 */
var ConnectorAnnotationDirective = /** @class */ (function (_super) {
    __extends$4(ConnectorAnnotationDirective, _super);
    function ConnectorAnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectorAnnotationDirective.moduleName = 'connectorAnnotation';
    return ConnectorAnnotationDirective;
}(ComplexBase));
var ConnectorAnnotationsDirective = /** @class */ (function (_super) {
    __extends$4(ConnectorAnnotationsDirective, _super);
    function ConnectorAnnotationsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectorAnnotationsDirective.propertyName = 'annotations';
    ConnectorAnnotationsDirective.moduleName = 'connectorAnnotations';
    return ConnectorAnnotationsDirective;
}(ComplexBase));

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
 * `NodesDirective` directive represent a nodes of the react diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <NodesDirective>
 * <NodeDirective></NodeDirective>
 * </NodesDirective>
 * </DiagramComponent>
 * ```
 */
var NodeDirective = /** @class */ (function (_super) {
    __extends$5(NodeDirective, _super);
    function NodeDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeDirective.moduleName = 'node';
    return NodeDirective;
}(ComplexBase));
var NodesDirective = /** @class */ (function (_super) {
    __extends$5(NodesDirective, _super);
    function NodesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodesDirective.propertyName = 'nodes';
    NodesDirective.moduleName = 'nodes';
    return NodesDirective;
}(ComplexBase));

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
/**
 * `Node` directive represent a annotation of the react Diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <NodesDirective>
 * <NodeDirective>
 * <NodeFixedUserHandlesDirective>
 * <NodeFixedUserHandleDirective>
 * </NodeFixedUserHandleDirective>
 * </NodeFixedUserHandlesDirective>
 * </NodeDirective>
 * </NodesDirective>
 * </DiagramComponent>
 * ```
 */
var NodeFixedUserHandleDirective = /** @class */ (function (_super) {
    __extends$6(NodeFixedUserHandleDirective, _super);
    function NodeFixedUserHandleDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeFixedUserHandleDirective.moduleName = 'nodeFixedUserHandle';
    return NodeFixedUserHandleDirective;
}(ComplexBase));
var NodeFixedUserHandlesDirective = /** @class */ (function (_super) {
    __extends$6(NodeFixedUserHandlesDirective, _super);
    function NodeFixedUserHandlesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeFixedUserHandlesDirective.propertyName = 'fixedUserHandles';
    NodeFixedUserHandlesDirective.moduleName = 'nodeFixedUserHandles';
    return NodeFixedUserHandlesDirective;
}(ComplexBase));

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
/**
 * `Node` directive represent a annotation of the react Diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <NodesDirective>
 * <NodeDirective>
 * <NodeAnnotationsDirective>
 * <NodeAnnotationDirective>
 * </NodeAnnotationDirective>
 * </NodeAnnotationsDirective>
 * </NodeDirective>
 * </NodesDirective>
 * </DiagramComponent>
 * ```
 */
var NodeAnnotationDirective = /** @class */ (function (_super) {
    __extends$7(NodeAnnotationDirective, _super);
    function NodeAnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeAnnotationDirective.moduleName = 'nodeAnnotation';
    return NodeAnnotationDirective;
}(ComplexBase));
var NodeAnnotationsDirective = /** @class */ (function (_super) {
    __extends$7(NodeAnnotationsDirective, _super);
    function NodeAnnotationsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeAnnotationsDirective.propertyName = 'annotations';
    NodeAnnotationsDirective.moduleName = 'nodeAnnotations';
    return NodeAnnotationsDirective;
}(ComplexBase));

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
/**
 * `Node` directive represent a port of the react Diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <NodesDirective>
 * <NodeDirective>
 * <PortCollectionDirective>
 * <PortDirective>
 * </PortDirective>
 * </PortCollectionDirective>
 * </NodeDirective>
 * </NodesDirective>
 * </DiagramComponent>
 * ```
 */
var PortDirective = /** @class */ (function (_super) {
    __extends$8(PortDirective, _super);
    function PortDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PortDirective.moduleName = 'port';
    return PortDirective;
}(ComplexBase));
var PortsDirective = /** @class */ (function (_super) {
    __extends$8(PortsDirective, _super);
    function PortsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PortsDirective.propertyName = 'ports';
    PortsDirective.moduleName = 'ports';
    return PortsDirective;
}(ComplexBase));

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
/**
 * Represents react Diagram Component
 * ```tsx
 * <DiagramComponent></DiagramComponent>
 * ```
 */
var DiagramComponent = /** @class */ (function (_super) {
    __extends$9(DiagramComponent, _super);
    function DiagramComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.directivekeys = { 'layers': 'layer', 'customCursors': 'customCursor', 'connectors': { 'connector': { 'connectorFixedUserHandles': 'connectorFixedUserHandle', 'connectorAnnotations': 'connectorAnnotation' } }, 'nodes': { 'node': { 'nodeFixedUserHandles': 'nodeFixedUserHandle', 'nodeAnnotations': 'nodeAnnotation', 'ports': 'port' } } };
        _this.immediateRender = false;
        _this.portals = [];
        return _this;
    }
    DiagramComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return DiagramComponent;
}(Diagram));
applyMixins(DiagramComponent, [ComponentBase, Component]);

var __extends$10 = (undefined && undefined.__extends) || (function () {
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
 * `Palette` directive represent a axis palette of the react SymbolPalette.
 * It must be contained in a SymbolPalette component(`SymbolPaletteComponent`).
 * ```tsx
 * <SymbolPaletteComponent>
 * <PalettesDirective>
 * <PaletteDirective></PaletteDirective>
 * </PalettesDirective>
 * </SymbolPaletteComponent>
 * ```
 */
var PaletteDirective = /** @class */ (function (_super) {
    __extends$10(PaletteDirective, _super);
    function PaletteDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaletteDirective.moduleName = 'palette';
    return PaletteDirective;
}(ComplexBase));
var PalettesDirective = /** @class */ (function (_super) {
    __extends$10(PalettesDirective, _super);
    function PalettesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PalettesDirective.propertyName = 'palettes';
    PalettesDirective.moduleName = 'palettes';
    return PalettesDirective;
}(ComplexBase));

var __extends$11 = (undefined && undefined.__extends) || (function () {
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
 * Represents react SymbolPalette Component
 * ```tsx
 * <SymbolPaletteComponent></SymbolPaletteComponent>
 * ```
 */
var SymbolPaletteComponent = /** @class */ (function (_super) {
    __extends$11(SymbolPaletteComponent, _super);
    function SymbolPaletteComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.directivekeys = { 'palettes': 'palette' };
        _this.immediateRender = true;
        _this.portals = [];
        return _this;
    }
    SymbolPaletteComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return SymbolPaletteComponent;
}(SymbolPalette));
applyMixins(SymbolPaletteComponent, [ComponentBase, Component]);

var __extends$12 = (undefined && undefined.__extends) || (function () {
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
 * Represents react Overview Component
 * ```tsx
 * <OverviewComponent></OverviewComponent>
 * ```
 */
var OverviewComponent = /** @class */ (function (_super) {
    __extends$12(OverviewComponent, _super);
    function OverviewComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = false;
        _this.immediateRender = true;
        _this.portals = [];
        return _this;
    }
    OverviewComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return OverviewComponent;
}(Overview));
applyMixins(OverviewComponent, [ComponentBase, Component]);

export { LayerDirective, LayersDirective, CustomCursorDirective, CustomCursorsDirective, ConnectorDirective, ConnectorsDirective, ConnectorFixedUserHandleDirective, ConnectorFixedUserHandlesDirective, ConnectorAnnotationDirective, ConnectorAnnotationsDirective, NodeDirective, NodesDirective, NodeFixedUserHandleDirective, NodeFixedUserHandlesDirective, NodeAnnotationDirective, NodeAnnotationsDirective, PortDirective, PortsDirective, DiagramComponent, PaletteDirective, PalettesDirective, SymbolPaletteComponent, OverviewComponent };
export * from '@syncfusion/ej2-diagrams';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-diagrams.es5.js.map
