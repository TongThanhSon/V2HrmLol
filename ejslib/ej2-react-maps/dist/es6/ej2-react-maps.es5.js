import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { Component, createElement } from 'react';
import { Maps } from '@syncfusion/ej2-maps';

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
 * `LayersDirective` directive represent a layers of the react maps.
 * It must be contained in a Maps component(`MapsComponent`).
 * ```tsx
 * <MapsComponent>
 * <LayersDirective>
 * <LayerDirective></LayerDirective>
 * </LayersDirective>
 * </MapsComponent>
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
 * `InitialShapeSelectionsDirective` directive represent a selection settings of the react maps.
 * It must be contained in a Maps component(`MapsComponent`).
 * ```tsx
 * <MapsComponent>
 * <LayersDirective>
 * <LayerDirective>
 * <initialShapeSelectionsDirective>
 * <initialShapeSelectionDirective></initialShapeSelectionDirective>
 * </initialShapeSelectionsDirective>
 * </LayerDirective>
 * </LayersDirective>
 * </MapsComponent>
 * ```
 */
var InitialShapeSelectionDirective = /** @class */ (function (_super) {
    __extends$1(InitialShapeSelectionDirective, _super);
    function InitialShapeSelectionDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InitialShapeSelectionDirective.moduleName = 'initialShapeSelection';
    return InitialShapeSelectionDirective;
}(ComplexBase));
var InitialShapeSelectionsDirective = /** @class */ (function (_super) {
    __extends$1(InitialShapeSelectionsDirective, _super);
    function InitialShapeSelectionsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InitialShapeSelectionsDirective.propertyName = 'initialShapeSelection';
    InitialShapeSelectionsDirective.moduleName = 'initialShapeSelections';
    return InitialShapeSelectionsDirective;
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
 * `MarkerSettingsDirective` directive represent a marker settings of the react maps.
 * It must be contained in a Maps component(`MapsComponent`).
 * ```tsx
 * <MapsComponent>
 * <LayersDirective>
 * <LayerDirective>
 * <MarkersDirective>
 * <MarkerDirective></MarkerDirective>
 * </MarkersDirective>
 * </LayerDirective>
 * </LayersDirective>
 * </MapsComponent>
 * ```
 */
var MarkerDirective = /** @class */ (function (_super) {
    __extends$2(MarkerDirective, _super);
    function MarkerDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarkerDirective.moduleName = 'marker';
    MarkerDirective.complexTemplate = { 'tooltipSettingsTemplate': 'tooltipSettings.template' };
    return MarkerDirective;
}(ComplexBase));
var MarkersDirective = /** @class */ (function (_super) {
    __extends$2(MarkersDirective, _super);
    function MarkersDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarkersDirective.propertyName = 'markerSettings';
    MarkersDirective.moduleName = 'markers';
    return MarkersDirective;
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
 * `BubblesDirective` directive represent a bubble settings of the react maps.
 * It must be contained in a Maps component(`MapsComponent`).
 * ```tsx
 * <MapsComponent>
 * <LayersDirective>
 * <LayerDirective>
 * <BubblesDirective>
 * <BubbleDirective></BubbleDirective>
 * </BubblesDirective>
 * </LayerDirective>
 * </LayersDirective>
 * </MapsComponent>
 * ```
 */
var BubbleDirective = /** @class */ (function (_super) {
    __extends$3(BubbleDirective, _super);
    function BubbleDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BubbleDirective.moduleName = 'bubble';
    BubbleDirective.complexTemplate = { 'tooltipSettingsTemplate': 'tooltipSettings.template' };
    return BubbleDirective;
}(ComplexBase));
var BubblesDirective = /** @class */ (function (_super) {
    __extends$3(BubblesDirective, _super);
    function BubblesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BubblesDirective.propertyName = 'bubbleSettings';
    BubblesDirective.moduleName = 'bubbles';
    return BubblesDirective;
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
 * `ColorMappingDirective` directive to configure the color mapping of the react maps.
 * It must be contained in a Maps component(`MapsComponent`).
 * ```tsx
 * <MapsComponent>
 * <LayersDirective>
 * <LayerDirective>
 * <BubblesDirective>
 * <ColorMappingsDirective>
 * <ColorMappingDirective></ColorMappingDirective>
 * </ColorMappingsDirective>
 * </BubblesDirective>
 * </LayerDirective>
 * </LayersDirective>
 * </MapsComponent>
 * ```
 */
var ColorMappingDirective = /** @class */ (function (_super) {
    __extends$4(ColorMappingDirective, _super);
    function ColorMappingDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorMappingDirective.moduleName = 'colorMapping';
    return ColorMappingDirective;
}(ComplexBase));
var ColorMappingsDirective = /** @class */ (function (_super) {
    __extends$4(ColorMappingsDirective, _super);
    function ColorMappingsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorMappingsDirective.propertyName = 'colorMapping';
    ColorMappingsDirective.moduleName = 'colorMappings';
    return ColorMappingsDirective;
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
 * `NavigationLinesDirective` directive represent a bubble settings of the react maps.
 * It must be contained in a Maps component(`MapsComponent`).
 * ```tsx
 * <MapsComponent>
 * <LayersDirective>
 * <LayerDirective>
 * <NavigationLinesDirective>
 * <NavigationLineDirective></NavigationLineDirective>
 * </NavigationLinesDirective>
 * </LayerDirective>
 * </LayersDirective>
 * </MapsComponent>
 * ```
 */
var NavigationLineDirective = /** @class */ (function (_super) {
    __extends$5(NavigationLineDirective, _super);
    function NavigationLineDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationLineDirective.moduleName = 'navigationLine';
    NavigationLineDirective.complexTemplate = { 'tooltipSettingsTemplate': 'tooltipSettings.template' };
    return NavigationLineDirective;
}(ComplexBase));
var NavigationLinesDirective = /** @class */ (function (_super) {
    __extends$5(NavigationLinesDirective, _super);
    function NavigationLinesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationLinesDirective.propertyName = 'navigationLineSettings';
    NavigationLinesDirective.moduleName = 'navigationLines';
    return NavigationLinesDirective;
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
 * `AnnotationsDirective` directive represent a annotation of the react maps.
 * It must be contained in a Maps component(`MapsComponent`).
 * ```tsx
 * <MapsComponent>
 * <AnnotationsDirective>
 * <AnnotationDirective></AnnotationDirective>
 * </AnnotationsDirective>
 * </MapsComponent>
 * ```
 */
var AnnotationDirective = /** @class */ (function (_super) {
    __extends$6(AnnotationDirective, _super);
    function AnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnotationDirective.moduleName = 'annotation';
    return AnnotationDirective;
}(ComplexBase));
var AnnotationsDirective = /** @class */ (function (_super) {
    __extends$6(AnnotationsDirective, _super);
    function AnnotationsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnotationsDirective.propertyName = 'annotations';
    AnnotationsDirective.moduleName = 'annotations';
    return AnnotationsDirective;
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
 * Represents react Maps Component
 * ```tsx
 * <MapsComponent></MapsComponent>
 * ```
 */
var MapsComponent = /** @class */ (function (_super) {
    __extends$7(MapsComponent, _super);
    function MapsComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.directivekeys = { 'layers': { 'layer': { 'initialShapeSelections': 'initialShapeSelection', 'markers': 'marker', 'bubbles': { 'bubble': { 'colorMappings': 'colorMapping' } }, 'navigationLines': 'navigationLine' } }, 'annotations': 'annotation' };
        _this.immediateRender = false;
        _this.portals = [];
        return _this;
    }
    MapsComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return MapsComponent;
}(Maps));
applyMixins(MapsComponent, [ComponentBase, Component]);

export { LayerDirective, LayersDirective, InitialShapeSelectionDirective, InitialShapeSelectionsDirective, MarkerDirective, MarkersDirective, BubbleDirective, BubblesDirective, ColorMappingDirective, ColorMappingsDirective, NavigationLineDirective, NavigationLinesDirective, AnnotationDirective, AnnotationsDirective, MapsComponent };
export * from '@syncfusion/ej2-maps';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-maps.es5.js.map
