import * as i0 from '@angular/core';
import { Directive, ContentChildren, ContentChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { ComplexBase, setValue, ArrayBase, ComponentBase, Template, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { __decorate } from 'tslib';
import { Diagram, HierarchicalTree, MindMap, RadialTree, ComplexHierarchicalTree, DataBinding, Snapping, PrintAndExport, BpmnDiagrams, SymmetricLayout, ConnectorBridging, UndoRedo, LayoutAnimation, DiagramContextMenu, LineRouting, ConnectorEditing, BlazorTooltip, LineDistribution, SymbolPalette, Overview } from '@syncfusion/ej2-diagrams';
export * from '@syncfusion/ej2-diagrams';
import { CommonModule } from '@angular/common';

let input$9 = ['addInfo', 'id', 'lock', 'objects', 'visible', 'zIndex'];
let outputs$c = [];
/**
 * Layers Directive
 * ```html
 * <e-layers>
 * <e-layer></e-layer>
 * </e-layers>
 * ```
 */
class LayerDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$c);
        this.directivePropList = input$9;
    }
}
LayerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LayerDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
LayerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: LayerDirective, selector: "e-layers>e-layer", inputs: { addInfo: "addInfo", id: "id", lock: "lock", objects: "objects", visible: "visible", zIndex: "zIndex" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LayerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-layers>e-layer',
                    inputs: input$9,
                    outputs: outputs$c,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Layer Array Directive
 * @private
 */
class LayersDirective extends ArrayBase {
    constructor() {
        super('layers');
    }
}
LayersDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LayersDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
LayersDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: LayersDirective, selector: "ej-diagram>e-layers", queries: [{ propertyName: "children", predicate: LayerDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LayersDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-diagram>e-layers',
                    queries: {
                        children: new ContentChildren(LayerDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$8 = ['action', 'cursor'];
let outputs$b = [];
/**
 * Cursor Maps Directive
 * ```html
 * <e-cusrsormaps>
 * <e-cursormap></e-cursormap>
 * </e-cursormaps>
 * ```
 */
class CustomCursorDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$b);
        this.directivePropList = input$8;
    }
}
CustomCursorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CustomCursorDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
CustomCursorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: CustomCursorDirective, selector: "e-cursormaps>e-cursormap", inputs: { action: "action", cursor: "cursor" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CustomCursorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-cursormaps>e-cursormap',
                    inputs: input$8,
                    outputs: outputs$b,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * CustomCursor Array Directive
 * @private
 */
class CustomCursorsDirective extends ArrayBase {
    constructor() {
        super('customcursor');
    }
}
CustomCursorsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CustomCursorsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
CustomCursorsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: CustomCursorsDirective, selector: "ej-diagram>e-cursormaps", queries: [{ propertyName: "children", predicate: CustomCursorDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CustomCursorsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-diagram>e-cursormaps',
                    queries: {
                        children: new ContentChildren(CustomCursorDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$7 = ['alignment', 'cornerRadius', 'displacement', 'fill', 'handleStrokeColor', 'handleStrokeWidth', 'height', 'iconStrokeColor', 'iconStrokeWidth', 'id', 'offset', 'padding', 'pathData', 'visibility', 'width'];
let outputs$a = [];
/**
 * Connectors Directive
 * ```html
 * <e-connectors>
 * <e-connector>
 * <e-connector-fixeduserhandles>
 * <e-connector-fixeduserhandle>
 * </e-connector-fixeduserhandle>
 * </e-connector-fixeduserhandles>
 * </e-connector>
 * </e-connectors>
 * ```
 */
class ConnectorFixedUserHandleDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$a);
        this.directivePropList = input$7;
    }
}
ConnectorFixedUserHandleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConnectorFixedUserHandleDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ConnectorFixedUserHandleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ConnectorFixedUserHandleDirective, selector: "e-connector>e-connector-fixeduserhandles>e-connector-fixeduserhandle", inputs: { alignment: "alignment", cornerRadius: "cornerRadius", displacement: "displacement", fill: "fill", handleStrokeColor: "handleStrokeColor", handleStrokeWidth: "handleStrokeWidth", height: "height", iconStrokeColor: "iconStrokeColor", iconStrokeWidth: "iconStrokeWidth", id: "id", offset: "offset", padding: "padding", pathData: "pathData", visibility: "visibility", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConnectorFixedUserHandleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-connector>e-connector-fixeduserhandles>e-connector-fixeduserhandle',
                    inputs: input$7,
                    outputs: outputs$a,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * ConnectorFixedUserHandle Array Directive
 * @private
 */
class ConnectorFixedUserHandlesDirective extends ArrayBase {
    constructor() {
        super('fixeduserhandles');
    }
}
ConnectorFixedUserHandlesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConnectorFixedUserHandlesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ConnectorFixedUserHandlesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ConnectorFixedUserHandlesDirective, selector: "e-connector>e-connector-fixeduserhandles", queries: [{ propertyName: "children", predicate: ConnectorFixedUserHandleDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConnectorFixedUserHandlesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-connector>e-connector-fixeduserhandles',
                    queries: {
                        children: new ContentChildren(ConnectorFixedUserHandleDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$6 = ['addInfo', 'alignment', 'annotationType', 'constraints', 'content', 'displacement', 'dragLimit', 'height', 'horizontalAlignment', 'hyperlink', 'id', 'margin', 'offset', 'rotateAngle', 'segmentAngle', 'style', 'template', 'type', 'verticalAlignment', 'visibility', 'width'];
let outputs$9 = [];
/**
 * Connectors Directive
 * ```html
 * <e-connectors>
 * <e-connector>
 * <e-connector-annotations>
 * <e-connector-annotation>
 * </e-connector-annotation>
 * </e-connector-annotations>
 * </e-connector>
 * </e-connectors>
 * ```
 */
class ConnectorAnnotationDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$9);
        this.directivePropList = input$6;
    }
}
ConnectorAnnotationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConnectorAnnotationDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ConnectorAnnotationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ConnectorAnnotationDirective, selector: "e-connector>e-connector-annotations>e-connector-annotation", inputs: { addInfo: "addInfo", alignment: "alignment", annotationType: "annotationType", constraints: "constraints", content: "content", displacement: "displacement", dragLimit: "dragLimit", height: "height", horizontalAlignment: "horizontalAlignment", hyperlink: "hyperlink", id: "id", margin: "margin", offset: "offset", rotateAngle: "rotateAngle", segmentAngle: "segmentAngle", style: "style", template: "template", type: "type", verticalAlignment: "verticalAlignment", visibility: "visibility", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConnectorAnnotationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-connector>e-connector-annotations>e-connector-annotation',
                    inputs: input$6,
                    outputs: outputs$9,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * ConnectorAnnotation Array Directive
 * @private
 */
class ConnectorAnnotationsDirective extends ArrayBase {
    constructor() {
        super('annotations');
    }
}
ConnectorAnnotationsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConnectorAnnotationsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ConnectorAnnotationsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ConnectorAnnotationsDirective, selector: "e-connector>e-connector-annotations", queries: [{ propertyName: "children", predicate: ConnectorAnnotationDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConnectorAnnotationsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-connector>e-connector-annotations',
                    queries: {
                        children: new ContentChildren(ConnectorAnnotationDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$5 = ['addInfo', 'annotations', 'bridgeSpace', 'connectionPadding', 'constraints', 'cornerRadius', 'dragSize', 'excludeFromLayout', 'fixedUserHandles', 'flip', 'flipMode', 'hitPadding', 'id', 'margin', 'previewSize', 'segments', 'shape', 'sourceDecorator', 'sourceID', 'sourcePadding', 'sourcePoint', 'sourcePortID', 'style', 'symbolInfo', 'targetDecorator', 'targetID', 'targetPadding', 'targetPoint', 'targetPortID', 'tooltip', 'type', 'visible', 'wrapper', 'zIndex'];
let outputs$8 = [];
/**
 * Connectors Directive
 * ```html
 * <e-connectors>
 * <e-connector></e-connector>
 * </e-connectors>
 * ```
 */
class ConnectorDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['fixedUserHandles', 'annotations'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$8);
        this.directivePropList = input$5;
    }
}
ConnectorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConnectorDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ConnectorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ConnectorDirective, selector: "e-connectors>e-connector", inputs: { addInfo: "addInfo", annotations: "annotations", bridgeSpace: "bridgeSpace", connectionPadding: "connectionPadding", constraints: "constraints", cornerRadius: "cornerRadius", dragSize: "dragSize", excludeFromLayout: "excludeFromLayout", fixedUserHandles: "fixedUserHandles", flip: "flip", flipMode: "flipMode", hitPadding: "hitPadding", id: "id", margin: "margin", previewSize: "previewSize", segments: "segments", shape: "shape", sourceDecorator: "sourceDecorator", sourceID: "sourceID", sourcePadding: "sourcePadding", sourcePoint: "sourcePoint", sourcePortID: "sourcePortID", style: "style", symbolInfo: "symbolInfo", targetDecorator: "targetDecorator", targetID: "targetID", targetPadding: "targetPadding", targetPoint: "targetPoint", targetPortID: "targetPortID", tooltip: "tooltip", type: "type", visible: "visible", wrapper: "wrapper", zIndex: "zIndex" }, queries: [{ propertyName: "childFixedUserHandles", first: true, predicate: ConnectorFixedUserHandlesDirective, descendants: true }, { propertyName: "childAnnotations", first: true, predicate: ConnectorAnnotationsDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConnectorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-connectors>e-connector',
                    inputs: input$5,
                    outputs: outputs$8,
                    queries: {
                        childFixedUserHandles: new ContentChild(ConnectorFixedUserHandlesDirective),
                        childAnnotations: new ContentChild(ConnectorAnnotationsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Connector Array Directive
 * @private
 */
class ConnectorsDirective extends ArrayBase {
    constructor() {
        super('connectors');
    }
}
ConnectorsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConnectorsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ConnectorsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ConnectorsDirective, selector: "ej-diagram>e-connectors", queries: [{ propertyName: "children", predicate: ConnectorDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConnectorsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-diagram>e-connectors',
                    queries: {
                        children: new ContentChildren(ConnectorDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$4 = ['cornerRadius', 'fill', 'handleStrokeColor', 'handleStrokeWidth', 'height', 'iconStrokeColor', 'iconStrokeWidth', 'id', 'margin', 'offset', 'padding', 'pathData', 'visibility', 'width'];
let outputs$7 = [];
/**
 * Nodes Directive
 * ```html
 * <e-nodes>
 * <e-node>
 * <e-node-fixeduserhandles>
 * <e-node-fixeduserhandle>
 * </e-node-fixeduserhandle>
 * </e-node-fixeduserhandles>
 * </e-node>
 * </e-nodes>
 * ```
 */
class NodeFixedUserHandleDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$7);
        this.directivePropList = input$4;
    }
}
NodeFixedUserHandleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NodeFixedUserHandleDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
NodeFixedUserHandleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: NodeFixedUserHandleDirective, selector: "e-node>e-node-fixeduserhandles>e-node-fixeduserhandle", inputs: { cornerRadius: "cornerRadius", fill: "fill", handleStrokeColor: "handleStrokeColor", handleStrokeWidth: "handleStrokeWidth", height: "height", iconStrokeColor: "iconStrokeColor", iconStrokeWidth: "iconStrokeWidth", id: "id", margin: "margin", offset: "offset", padding: "padding", pathData: "pathData", visibility: "visibility", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NodeFixedUserHandleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-node>e-node-fixeduserhandles>e-node-fixeduserhandle',
                    inputs: input$4,
                    outputs: outputs$7,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * NodeFixedUserHandle Array Directive
 * @private
 */
class NodeFixedUserHandlesDirective extends ArrayBase {
    constructor() {
        super('fixeduserhandles');
    }
}
NodeFixedUserHandlesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NodeFixedUserHandlesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NodeFixedUserHandlesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: NodeFixedUserHandlesDirective, selector: "e-node>e-node-fixeduserhandles", queries: [{ propertyName: "children", predicate: NodeFixedUserHandleDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NodeFixedUserHandlesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-node>e-node-fixeduserhandles',
                    queries: {
                        children: new ContentChildren(NodeFixedUserHandleDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$3 = ['addInfo', 'annotationType', 'constraints', 'content', 'dragLimit', 'height', 'horizontalAlignment', 'hyperlink', 'id', 'margin', 'offset', 'rotateAngle', 'style', 'template', 'type', 'verticalAlignment', 'visibility', 'width'];
let outputs$6 = [];
/**
 * Nodes Directive
 * ```html
 * <e-nodes>
 * <e-node>
 * <e-node-annotations>
 * <e-node-annotation>
 * </e-node-annotation>
 * </e-node-annotations>
 * </e-node>
 * </e-nodes>
 * ```
 */
class NodeAnnotationDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$6);
        this.directivePropList = input$3;
    }
}
NodeAnnotationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NodeAnnotationDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
NodeAnnotationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: NodeAnnotationDirective, selector: "e-node>e-node-annotations>e-node-annotation", inputs: { addInfo: "addInfo", annotationType: "annotationType", constraints: "constraints", content: "content", dragLimit: "dragLimit", height: "height", horizontalAlignment: "horizontalAlignment", hyperlink: "hyperlink", id: "id", margin: "margin", offset: "offset", rotateAngle: "rotateAngle", style: "style", template: "template", type: "type", verticalAlignment: "verticalAlignment", visibility: "visibility", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NodeAnnotationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-node>e-node-annotations>e-node-annotation',
                    inputs: input$3,
                    outputs: outputs$6,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * NodeAnnotation Array Directive
 * @private
 */
class NodeAnnotationsDirective extends ArrayBase {
    constructor() {
        super('annotations');
    }
}
NodeAnnotationsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NodeAnnotationsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NodeAnnotationsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: NodeAnnotationsDirective, selector: "e-node>e-node-annotations", queries: [{ propertyName: "children", predicate: NodeAnnotationDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NodeAnnotationsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-node>e-node-annotations',
                    queries: {
                        children: new ContentChildren(NodeAnnotationDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$2 = ['addInfo', 'constraints', 'height', 'horizontalAlignment', 'id', 'inEdges', 'margin', 'offset', 'outEdges', 'pathData', 'shape', 'style', 'verticalAlignment', 'visibility', 'width'];
let outputs$5 = [];
/**
 * Nodes Directive
 * ```html
 * <e-nodes>
 * <e-node>
 * <e-node-ports>
 * <e-node-port>
 * </e-node-port>
 * </e-node-ports>
 * </e-node>
 * </e-nodes>
 * ```
 */
class PortDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$5);
        this.directivePropList = input$2;
    }
}
PortDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PortDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PortDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PortDirective, selector: "e-node>e-node-ports>e-node-port", inputs: { addInfo: "addInfo", constraints: "constraints", height: "height", horizontalAlignment: "horizontalAlignment", id: "id", inEdges: "inEdges", margin: "margin", offset: "offset", outEdges: "outEdges", pathData: "pathData", shape: "shape", style: "style", verticalAlignment: "verticalAlignment", visibility: "visibility", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PortDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-node>e-node-ports>e-node-port',
                    inputs: input$2,
                    outputs: outputs$5,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Port Array Directive
 * @private
 */
class PortsDirective extends ArrayBase {
    constructor() {
        super('ports');
    }
}
PortsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PortsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PortsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PortsDirective, selector: "e-node>e-node-ports", queries: [{ propertyName: "children", predicate: PortDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PortsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-node>e-node-ports',
                    queries: {
                        children: new ContentChildren(PortDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$1 = ['addInfo', 'annotations', 'backgroundColor', 'borderColor', 'borderWidth', 'branch', 'children', 'collapseIcon', 'columnIndex', 'columnSpan', 'columns', 'constraints', 'container', 'data', 'dragSize', 'excludeFromLayout', 'expandIcon', 'fixedUserHandles', 'flip', 'flipMode', 'height', 'horizontalAlignment', 'id', 'isExpanded', 'layoutInfo', 'margin', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'offsetX', 'offsetY', 'padding', 'pivot', 'ports', 'previewSize', 'rotateAngle', 'rowIndex', 'rowSpan', 'rows', 'shadow', 'shape', 'style', 'symbolInfo', 'tooltip', 'verticalAlignment', 'visible', 'width', 'wrapper', 'zIndex'];
let outputs$4 = [];
/**
 * Nodes Directive
 * ```html
 * <e-nodes>
 * <e-node></e-node>
 * </e-nodes>
 * ```
 */
class NodeDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['fixedUserHandles', 'annotations', 'ports'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$4);
        this.directivePropList = input$1;
    }
}
NodeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NodeDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
NodeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: NodeDirective, selector: "e-nodes>e-node", inputs: { addInfo: "addInfo", annotations: "annotations", backgroundColor: "backgroundColor", borderColor: "borderColor", borderWidth: "borderWidth", branch: "branch", children: "children", collapseIcon: "collapseIcon", columnIndex: "columnIndex", columnSpan: "columnSpan", columns: "columns", constraints: "constraints", container: "container", data: "data", dragSize: "dragSize", excludeFromLayout: "excludeFromLayout", expandIcon: "expandIcon", fixedUserHandles: "fixedUserHandles", flip: "flip", flipMode: "flipMode", height: "height", horizontalAlignment: "horizontalAlignment", id: "id", isExpanded: "isExpanded", layoutInfo: "layoutInfo", margin: "margin", maxHeight: "maxHeight", maxWidth: "maxWidth", minHeight: "minHeight", minWidth: "minWidth", offsetX: "offsetX", offsetY: "offsetY", padding: "padding", pivot: "pivot", ports: "ports", previewSize: "previewSize", rotateAngle: "rotateAngle", rowIndex: "rowIndex", rowSpan: "rowSpan", rows: "rows", shadow: "shadow", shape: "shape", style: "style", symbolInfo: "symbolInfo", tooltip: "tooltip", verticalAlignment: "verticalAlignment", visible: "visible", width: "width", wrapper: "wrapper", zIndex: "zIndex" }, queries: [{ propertyName: "childFixedUserHandles", first: true, predicate: NodeFixedUserHandlesDirective, descendants: true }, { propertyName: "childAnnotations", first: true, predicate: NodeAnnotationsDirective, descendants: true }, { propertyName: "childPorts", first: true, predicate: PortsDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NodeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-nodes>e-node',
                    inputs: input$1,
                    outputs: outputs$4,
                    queries: {
                        childFixedUserHandles: new ContentChild(NodeFixedUserHandlesDirective),
                        childAnnotations: new ContentChild(NodeAnnotationsDirective),
                        childPorts: new ContentChild(PortsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Node Array Directive
 * @private
 */
class NodesDirective extends ArrayBase {
    constructor() {
        super('nodes');
    }
}
NodesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NodesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NodesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: NodesDirective, selector: "ej-diagram>e-nodes", queries: [{ propertyName: "children", predicate: NodeDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NodesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-diagram>e-nodes',
                    queries: {
                        children: new ContentChildren(NodeDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs$2 = ['addInfo', 'annotationTemplate', 'backgroundColor', 'bridgeDirection', 'commandManager', 'connectorDefaults', 'connectors', 'constraints', 'contextMenuSettings', 'customCursor', 'dataSourceSettings', 'diagramSettings', 'drawingObject', 'enablePersistence', 'enableRtl', 'getConnectorDefaults', 'getCustomCursor', 'getCustomProperty', 'getCustomTool', 'getDescription', 'getNodeDefaults', 'height', 'historyManager', 'layers', 'layout', 'locale', 'mode', 'nodeDefaults', 'nodeTemplate', 'nodes', 'pageSettings', 'rulerSettings', 'scrollSettings', 'selectedItems', 'serializationSettings', 'setNodeTemplate', 'snapSettings', 'tool', 'tooltip', 'updateSelection', 'userHandleTemplate', 'width'];
const outputs$3 = ['animationComplete', 'click', 'collectionChange', 'commandExecute', 'connectionChange', 'contextMenuBeforeItemRender', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataLoaded', 'doubleClick', 'dragEnter', 'dragLeave', 'dragOver', 'drop', 'expandStateChange', 'fixedUserHandleClick', 'historyChange', 'historyStateChange', 'keyDown', 'keyUp', 'mouseEnter', 'mouseLeave', 'mouseOver', 'onImageLoad', 'onUserHandleMouseDown', 'onUserHandleMouseEnter', 'onUserHandleMouseLeave', 'onUserHandleMouseUp', 'positionChange', 'propertyChange', 'rotateChange', 'scrollChange', 'segmentCollectionChange', 'selectionChange', 'sizeChange', 'sourcePointChange', 'targetPointChange', 'textEdit'];
const twoWays$2 = [''];
/**
 * Diagram Component
 * ```html
 * <ej-diagram></ej-diagram>
 * ```
 */
let DiagramComponent = class DiagramComponent extends Diagram {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['layers', 'customCursor', 'connectors', 'nodes'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('DiagramsHierarchicalTree');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('DiagramsMindMap');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('DiagramsRadialTree');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('DiagramsComplexHierarchicalTree');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('DiagramsDataBinding');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('DiagramsSnapping');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('DiagramsPrintAndExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('DiagramsBpmnDiagrams');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('DiagramsSymmetricLayout');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            let mod = this.injector.get('DiagramsConnectorBridging');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            let mod = this.injector.get('DiagramsUndoRedo');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            let mod = this.injector.get('DiagramsLayoutAnimation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            let mod = this.injector.get('DiagramsDiagramContextMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            let mod = this.injector.get('DiagramsLineRouting');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            let mod = this.injector.get('DiagramsConnectorEditing');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
        try {
            let mod = this.injector.get('DiagramsBlazorTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_r) { }
        try {
            let mod = this.injector.get('DiagramsLineDistribution');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_s) { }
        this.registerEvents(outputs$3);
        this.addTwoWay.call(this, twoWays$2);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childLayers;
        if (this.childCustomCursor) {
            this.tagObjects[1].instance = this.childCustomCursor;
        }
        if (this.childConnectors) {
            this.tagObjects[2].instance = this.childConnectors;
        }
        if (this.childNodes) {
            this.tagObjects[3].instance = this.childNodes;
        }
        this.context.ngAfterContentChecked(this);
    }
};
DiagramComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DiagramComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
DiagramComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DiagramComponent, selector: "ejs-diagram", inputs: { addInfo: "addInfo", annotationTemplate: "annotationTemplate", backgroundColor: "backgroundColor", bridgeDirection: "bridgeDirection", commandManager: "commandManager", connectorDefaults: "connectorDefaults", connectors: "connectors", constraints: "constraints", contextMenuSettings: "contextMenuSettings", customCursor: "customCursor", dataSourceSettings: "dataSourceSettings", diagramSettings: "diagramSettings", drawingObject: "drawingObject", enablePersistence: "enablePersistence", enableRtl: "enableRtl", getConnectorDefaults: "getConnectorDefaults", getCustomCursor: "getCustomCursor", getCustomProperty: "getCustomProperty", getCustomTool: "getCustomTool", getDescription: "getDescription", getNodeDefaults: "getNodeDefaults", height: "height", historyManager: "historyManager", layers: "layers", layout: "layout", locale: "locale", mode: "mode", nodeDefaults: "nodeDefaults", nodeTemplate: "nodeTemplate", nodes: "nodes", pageSettings: "pageSettings", rulerSettings: "rulerSettings", scrollSettings: "scrollSettings", selectedItems: "selectedItems", serializationSettings: "serializationSettings", setNodeTemplate: "setNodeTemplate", snapSettings: "snapSettings", tool: "tool", tooltip: "tooltip", updateSelection: "updateSelection", userHandleTemplate: "userHandleTemplate", width: "width" }, outputs: { animationComplete: "animationComplete", click: "click", collectionChange: "collectionChange", commandExecute: "commandExecute", connectionChange: "connectionChange", contextMenuBeforeItemRender: "contextMenuBeforeItemRender", contextMenuClick: "contextMenuClick", contextMenuOpen: "contextMenuOpen", created: "created", dataLoaded: "dataLoaded", doubleClick: "doubleClick", dragEnter: "dragEnter", dragLeave: "dragLeave", dragOver: "dragOver", drop: "drop", expandStateChange: "expandStateChange", fixedUserHandleClick: "fixedUserHandleClick", historyChange: "historyChange", historyStateChange: "historyStateChange", keyDown: "keyDown", keyUp: "keyUp", mouseEnter: "mouseEnter", mouseLeave: "mouseLeave", mouseOver: "mouseOver", onImageLoad: "onImageLoad", onUserHandleMouseDown: "onUserHandleMouseDown", onUserHandleMouseEnter: "onUserHandleMouseEnter", onUserHandleMouseLeave: "onUserHandleMouseLeave", onUserHandleMouseUp: "onUserHandleMouseUp", positionChange: "positionChange", propertyChange: "propertyChange", rotateChange: "rotateChange", scrollChange: "scrollChange", segmentCollectionChange: "segmentCollectionChange", selectionChange: "selectionChange", sizeChange: "sizeChange", sourcePointChange: "sourcePointChange", targetPointChange: "targetPointChange", textEdit: "textEdit" }, queries: [{ propertyName: "annotationTemplate", first: true, predicate: ["annotationTemplate"], descendants: true }, { propertyName: "nodeTemplate", first: true, predicate: ["nodeTemplate"], descendants: true }, { propertyName: "userHandleTemplate", first: true, predicate: ["userHandleTemplate"], descendants: true }, { propertyName: "childLayers", first: true, predicate: LayersDirective, descendants: true }, { propertyName: "childCustomCursor", first: true, predicate: CustomCursorsDirective, descendants: true }, { propertyName: "childConnectors", first: true, predicate: ConnectorsDirective, descendants: true }, { propertyName: "childNodes", first: true, predicate: NodesDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], DiagramComponent.prototype, "annotationTemplate", void 0);
__decorate([
    Template()
], DiagramComponent.prototype, "nodeTemplate", void 0);
__decorate([
    Template()
], DiagramComponent.prototype, "userHandleTemplate", void 0);
DiagramComponent = __decorate([
    ComponentMixins([ComponentBase])
], DiagramComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DiagramComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-diagram',
                    inputs: inputs$2,
                    outputs: outputs$3,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childLayers: new ContentChild(LayersDirective),
                        childCustomCursor: new ContentChild(CustomCursorsDirective),
                        childConnectors: new ContentChild(ConnectorsDirective),
                        childNodes: new ContentChild(NodesDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { annotationTemplate: [{
                type: ContentChild,
                args: ['annotationTemplate']
            }], nodeTemplate: [{
                type: ContentChild,
                args: ['nodeTemplate']
            }], userHandleTemplate: [{
                type: ContentChild,
                args: ['userHandleTemplate']
            }] } });

/**
 * NgModule definition for the Diagram component.
 */
class DiagramModule {
}
DiagramModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DiagramModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DiagramModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DiagramModule, declarations: [DiagramComponent,
        LayerDirective,
        LayersDirective,
        CustomCursorDirective,
        CustomCursorsDirective,
        ConnectorFixedUserHandleDirective,
        ConnectorFixedUserHandlesDirective,
        ConnectorAnnotationDirective,
        ConnectorAnnotationsDirective,
        ConnectorDirective,
        ConnectorsDirective,
        NodeFixedUserHandleDirective,
        NodeFixedUserHandlesDirective,
        NodeAnnotationDirective,
        NodeAnnotationsDirective,
        PortDirective,
        PortsDirective,
        NodeDirective,
        NodesDirective], imports: [CommonModule], exports: [DiagramComponent,
        LayerDirective,
        LayersDirective,
        CustomCursorDirective,
        CustomCursorsDirective,
        ConnectorFixedUserHandleDirective,
        ConnectorFixedUserHandlesDirective,
        ConnectorAnnotationDirective,
        ConnectorAnnotationsDirective,
        ConnectorDirective,
        ConnectorsDirective,
        NodeFixedUserHandleDirective,
        NodeFixedUserHandlesDirective,
        NodeAnnotationDirective,
        NodeAnnotationsDirective,
        PortDirective,
        PortsDirective,
        NodeDirective,
        NodesDirective] });
DiagramModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DiagramModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DiagramModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        DiagramComponent,
                        LayerDirective,
                        LayersDirective,
                        CustomCursorDirective,
                        CustomCursorsDirective,
                        ConnectorFixedUserHandleDirective,
                        ConnectorFixedUserHandlesDirective,
                        ConnectorAnnotationDirective,
                        ConnectorAnnotationsDirective,
                        ConnectorDirective,
                        ConnectorsDirective,
                        NodeFixedUserHandleDirective,
                        NodeFixedUserHandlesDirective,
                        NodeAnnotationDirective,
                        NodeAnnotationsDirective,
                        PortDirective,
                        PortsDirective,
                        NodeDirective,
                        NodesDirective
                    ],
                    exports: [
                        DiagramComponent,
                        LayerDirective,
                        LayersDirective,
                        CustomCursorDirective,
                        CustomCursorsDirective,
                        ConnectorFixedUserHandleDirective,
                        ConnectorFixedUserHandlesDirective,
                        ConnectorAnnotationDirective,
                        ConnectorAnnotationsDirective,
                        ConnectorDirective,
                        ConnectorsDirective,
                        NodeFixedUserHandleDirective,
                        NodeFixedUserHandlesDirective,
                        NodeAnnotationDirective,
                        NodeAnnotationsDirective,
                        PortDirective,
                        PortsDirective,
                        NodeDirective,
                        NodesDirective
                    ]
                }]
        }] });

const HierarchicalTreeService = { provide: 'DiagramsHierarchicalTree', useValue: HierarchicalTree };
const MindMapService = { provide: 'DiagramsMindMap', useValue: MindMap };
const RadialTreeService = { provide: 'DiagramsRadialTree', useValue: RadialTree };
const ComplexHierarchicalTreeService = { provide: 'DiagramsComplexHierarchicalTree', useValue: ComplexHierarchicalTree };
const DataBindingService = { provide: 'DiagramsDataBinding', useValue: DataBinding };
const SnappingService = { provide: 'DiagramsSnapping', useValue: Snapping };
const PrintAndExportService = { provide: 'DiagramsPrintAndExport', useValue: PrintAndExport };
const BpmnDiagramsService = { provide: 'DiagramsBpmnDiagrams', useValue: BpmnDiagrams };
const SymmetricLayoutService = { provide: 'DiagramsSymmetricLayout', useValue: SymmetricLayout };
const ConnectorBridgingService = { provide: 'DiagramsConnectorBridging', useValue: ConnectorBridging };
const UndoRedoService = { provide: 'DiagramsUndoRedo', useValue: UndoRedo };
const LayoutAnimationService = { provide: 'DiagramsLayoutAnimation', useValue: LayoutAnimation };
const DiagramContextMenuService = { provide: 'DiagramsDiagramContextMenu', useValue: DiagramContextMenu };
const LineRoutingService = { provide: 'DiagramsLineRouting', useValue: LineRouting };
const ConnectorEditingService = { provide: 'DiagramsConnectorEditing', useValue: ConnectorEditing };
const BlazorTooltipService = { provide: 'DiagramsBlazorTooltip', useValue: BlazorTooltip };
const LineDistributionService = { provide: 'DiagramsLineDistribution', useValue: LineDistribution };
/**
 * NgModule definition for the Diagram component with providers.
 */
class DiagramAllModule {
}
DiagramAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DiagramAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DiagramAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DiagramAllModule, imports: [CommonModule, DiagramModule], exports: [DiagramModule] });
DiagramAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DiagramAllModule, providers: [
        HierarchicalTreeService,
        MindMapService,
        RadialTreeService,
        ComplexHierarchicalTreeService,
        DataBindingService,
        SnappingService,
        PrintAndExportService,
        BpmnDiagramsService,
        SymmetricLayoutService,
        ConnectorBridgingService,
        UndoRedoService,
        LayoutAnimationService,
        DiagramContextMenuService,
        LineRoutingService,
        ConnectorEditingService,
        BlazorTooltipService,
        LineDistributionService
    ], imports: [[CommonModule, DiagramModule], DiagramModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DiagramAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DiagramModule],
                    exports: [
                        DiagramModule
                    ],
                    providers: [
                        HierarchicalTreeService,
                        MindMapService,
                        RadialTreeService,
                        ComplexHierarchicalTreeService,
                        DataBindingService,
                        SnappingService,
                        PrintAndExportService,
                        BpmnDiagramsService,
                        SymmetricLayoutService,
                        ConnectorBridgingService,
                        UndoRedoService,
                        LayoutAnimationService,
                        DiagramContextMenuService,
                        LineRoutingService,
                        ConnectorEditingService,
                        BlazorTooltipService,
                        LineDistributionService
                    ]
                }]
        }] });

let input = ['expanded', 'height', 'iconCss', 'id', 'symbols', 'title'];
let outputs$2 = [];
/**
 * Palette Directive
 * ```html
 * <e-palettes><e-palette></e-palette><e-palettes>
 * ```
 */
class PaletteDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
        this.directivePropList = input;
    }
}
PaletteDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PaletteDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PaletteDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PaletteDirective, selector: "e-palettes>e-palette", inputs: { expanded: "expanded", height: "height", iconCss: "iconCss", id: "id", symbols: "symbols", title: "title" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PaletteDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-palettes>e-palette',
                    inputs: input,
                    outputs: outputs$2,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Palette Array Directive
 * @private
 */
class PalettesDirective extends ArrayBase {
    constructor() {
        super('palettes');
    }
}
PalettesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PalettesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PalettesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PalettesDirective, selector: "ejs-symbolpalette>e-palettes", queries: [{ propertyName: "children", predicate: PaletteDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PalettesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-symbolpalette>e-palettes',
                    queries: {
                        children: new ContentChildren(PaletteDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs$1 = ['accessKey', 'allowDrag', 'connectorDefaults', 'enableAnimation', 'enablePersistence', 'enableRtl', 'enableSearch', 'expandMode', 'filterSymbols', 'getConnectorDefaults', 'getNodeDefaults', 'getSymbolInfo', 'getSymbolTemplate', 'height', 'ignoreSymbolsOnSearch', 'locale', 'nodeDefaults', 'palettes', 'symbolDragSize', 'symbolHeight', 'symbolInfo', 'symbolMargin', 'symbolPreview', 'symbolWidth', 'width'];
const outputs$1 = ['paletteExpanding', 'paletteSelectionChange'];
const twoWays$1 = [''];
/**
 * SymbolPalette Component
 * ```html
 * <ej-symbol-palette></ej-symbol-palette>
 * ```
 */
let SymbolPaletteComponent = class SymbolPaletteComponent extends SymbolPalette {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['palettes'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('DiagramsBpmnDiagrams');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        this.registerEvents(outputs$1);
        this.addTwoWay.call(this, twoWays$1);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childPalettes;
        this.context.ngAfterContentChecked(this);
    }
};
SymbolPaletteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SymbolPaletteComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
SymbolPaletteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: SymbolPaletteComponent, selector: "ejs-symbolpalette", inputs: { accessKey: "accessKey", allowDrag: "allowDrag", connectorDefaults: "connectorDefaults", enableAnimation: "enableAnimation", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enableSearch: "enableSearch", expandMode: "expandMode", filterSymbols: "filterSymbols", getConnectorDefaults: "getConnectorDefaults", getNodeDefaults: "getNodeDefaults", getSymbolInfo: "getSymbolInfo", getSymbolTemplate: "getSymbolTemplate", height: "height", ignoreSymbolsOnSearch: "ignoreSymbolsOnSearch", locale: "locale", nodeDefaults: "nodeDefaults", palettes: "palettes", symbolDragSize: "symbolDragSize", symbolHeight: "symbolHeight", symbolInfo: "symbolInfo", symbolMargin: "symbolMargin", symbolPreview: "symbolPreview", symbolWidth: "symbolWidth", width: "width" }, outputs: { paletteExpanding: "paletteExpanding", paletteSelectionChange: "paletteSelectionChange" }, queries: [{ propertyName: "childPalettes", first: true, predicate: PalettesDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
SymbolPaletteComponent = __decorate([
    ComponentMixins([ComponentBase])
], SymbolPaletteComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SymbolPaletteComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-symbolpalette',
                    inputs: inputs$1,
                    outputs: outputs$1,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childPalettes: new ContentChild(PalettesDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the SymbolPalette component.
 */
class SymbolPaletteModule {
}
SymbolPaletteModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SymbolPaletteModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SymbolPaletteModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SymbolPaletteModule, declarations: [SymbolPaletteComponent,
        PaletteDirective,
        PalettesDirective], imports: [CommonModule], exports: [SymbolPaletteComponent,
        PaletteDirective,
        PalettesDirective] });
SymbolPaletteModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SymbolPaletteModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SymbolPaletteModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        SymbolPaletteComponent,
                        PaletteDirective,
                        PalettesDirective
                    ],
                    exports: [
                        SymbolPaletteComponent,
                        PaletteDirective,
                        PalettesDirective
                    ]
                }]
        }] });

/**
 * NgModule definition for the SymbolPalette component with providers.
 */
class SymbolPaletteAllModule {
}
SymbolPaletteAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SymbolPaletteAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SymbolPaletteAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SymbolPaletteAllModule, imports: [CommonModule, SymbolPaletteModule], exports: [SymbolPaletteModule] });
SymbolPaletteAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SymbolPaletteAllModule, providers: [], imports: [[CommonModule, SymbolPaletteModule], SymbolPaletteModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SymbolPaletteAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SymbolPaletteModule],
                    exports: [
                        SymbolPaletteModule
                    ],
                    providers: []
                }]
        }] });

const inputs = ['enablePersistence', 'enableRtl', 'height', 'locale', 'sourceID', 'width'];
const outputs = ['created'];
const twoWays = [''];
/**
 * Overview Component
 * ```html
 * <ej-overview></ej-overview>
 * ```
 */
let OverviewComponent = class OverviewComponent extends Overview {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = [''];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.context.ngAfterContentChecked(this);
    }
};
OverviewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: OverviewComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
OverviewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: OverviewComponent, selector: "ejs-overview", inputs: { enablePersistence: "enablePersistence", enableRtl: "enableRtl", height: "height", locale: "locale", sourceID: "sourceID", width: "width" }, outputs: { created: "created" }, usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
OverviewComponent = __decorate([
    ComponentMixins([ComponentBase])
], OverviewComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: OverviewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-overview',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the Overview component.
 */
class OverviewModule {
}
OverviewModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: OverviewModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OverviewModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: OverviewModule, declarations: [OverviewComponent], imports: [CommonModule], exports: [OverviewComponent] });
OverviewModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: OverviewModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: OverviewModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        OverviewComponent
                    ],
                    exports: [
                        OverviewComponent
                    ]
                }]
        }] });

/**
 * NgModule definition for the Overview component with providers.
 */
class OverviewAllModule {
}
OverviewAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: OverviewAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OverviewAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: OverviewAllModule, imports: [CommonModule, OverviewModule], exports: [OverviewModule] });
OverviewAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: OverviewAllModule, providers: [], imports: [[CommonModule, OverviewModule], OverviewModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: OverviewAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, OverviewModule],
                    exports: [
                        OverviewModule
                    ],
                    providers: []
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { BlazorTooltipService, BpmnDiagramsService, ComplexHierarchicalTreeService, ConnectorAnnotationDirective, ConnectorAnnotationsDirective, ConnectorBridgingService, ConnectorDirective, ConnectorEditingService, ConnectorFixedUserHandleDirective, ConnectorFixedUserHandlesDirective, ConnectorsDirective, CustomCursorDirective, CustomCursorsDirective, DataBindingService, DiagramAllModule, DiagramComponent, DiagramContextMenuService, DiagramModule, HierarchicalTreeService, LayerDirective, LayersDirective, LayoutAnimationService, LineDistributionService, LineRoutingService, MindMapService, NodeAnnotationDirective, NodeAnnotationsDirective, NodeDirective, NodeFixedUserHandleDirective, NodeFixedUserHandlesDirective, NodesDirective, OverviewAllModule, OverviewComponent, OverviewModule, PaletteDirective, PalettesDirective, PortDirective, PortsDirective, PrintAndExportService, RadialTreeService, SnappingService, SymbolPaletteAllModule, SymbolPaletteComponent, SymbolPaletteModule, SymmetricLayoutService, UndoRedoService };
//# sourceMappingURL=syncfusion-ej2-angular-diagrams.mjs.map
