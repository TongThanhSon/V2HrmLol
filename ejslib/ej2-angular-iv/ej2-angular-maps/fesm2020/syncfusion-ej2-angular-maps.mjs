import * as i0 from '@angular/core';
import { Directive, ContentChildren, ContentChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { ComplexBase, setValue, ArrayBase, Template, ComponentBase, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { __decorate } from 'tslib';
import { Maps, Bubble, Legend, Marker, Highlight, Selection, MapsTooltip, Zoom, DataLabel, NavigationLine, Annotations, Print, PdfExport, ImageExport } from '@syncfusion/ej2-maps';
export * from '@syncfusion/ej2-maps';
import { CommonModule } from '@angular/common';

let input$6 = ['shapePath', 'shapeValue'];
let outputs$7 = [];
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-initialShapeSelections>
 * <e-initialShapeSelection>
 * </e-initialShapeSelection>
 * </e-initialShapeSelections>
 * </e-layer>
 * </e-layers>
 * ```
 */
class InitialShapeSelectionDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$7);
        this.directivePropList = input$6;
    }
}
InitialShapeSelectionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InitialShapeSelectionDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
InitialShapeSelectionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: InitialShapeSelectionDirective, selector: "e-layer>e-initialShapeSelections>e-initialShapeSelection", inputs: { shapePath: "shapePath", shapeValue: "shapeValue" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InitialShapeSelectionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-layer>e-initialShapeSelections>e-initialShapeSelection',
                    inputs: input$6,
                    outputs: outputs$7,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * InitialShapeSelection Array Directive
 * @private
 */
class InitialShapeSelectionsDirective extends ArrayBase {
    constructor() {
        super('initialshapeselection');
    }
}
InitialShapeSelectionsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InitialShapeSelectionsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
InitialShapeSelectionsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: InitialShapeSelectionsDirective, selector: "e-layer>e-initialShapeSelections", queries: [{ propertyName: "children", predicate: InitialShapeSelectionDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InitialShapeSelectionsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-layer>e-initialShapeSelections',
                    queries: {
                        children: new ContentChildren(InitialShapeSelectionDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$5 = ['animationDelay', 'animationDuration', 'border', 'colorValuePath', 'dashArray', 'dataSource', 'fill', 'height', 'highlightSettings', 'imageUrl', 'imageUrlValuePath', 'initialMarkerSelection', 'latitudeValuePath', 'legendText', 'longitudeValuePath', 'offset', 'opacity', 'query', 'selectionSettings', 'shape', 'shapeValuePath', 'template', 'tooltipSettings', 'visible', 'width'];
let outputs$6 = [];
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-markerSettings>
 * <e-markerSetting>
 * </e-markerSetting>
 * </e-markerSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
class MarkerDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$6);
        this.directivePropList = input$5;
    }
}
MarkerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MarkerDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
MarkerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: MarkerDirective, selector: "e-layer>e-markerSettings>e-markerSetting", inputs: { animationDelay: "animationDelay", animationDuration: "animationDuration", border: "border", colorValuePath: "colorValuePath", dashArray: "dashArray", dataSource: "dataSource", fill: "fill", height: "height", highlightSettings: "highlightSettings", imageUrl: "imageUrl", imageUrlValuePath: "imageUrlValuePath", initialMarkerSelection: "initialMarkerSelection", latitudeValuePath: "latitudeValuePath", legendText: "legendText", longitudeValuePath: "longitudeValuePath", offset: "offset", opacity: "opacity", query: "query", selectionSettings: "selectionSettings", shape: "shape", shapeValuePath: "shapeValuePath", template: "template", tooltipSettings: "tooltipSettings", visible: "visible", width: "width" }, queries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true }, { propertyName: "tooltipSettings_template", first: true, predicate: ["tooltipSettingsTemplate"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], MarkerDirective.prototype, "template", void 0);
__decorate([
    Template()
], MarkerDirective.prototype, "tooltipSettings_template", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MarkerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-layer>e-markerSettings>e-markerSetting',
                    inputs: input$5,
                    outputs: outputs$6,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { template: [{
                type: ContentChild,
                args: ['template']
            }], tooltipSettings_template: [{
                type: ContentChild,
                args: ['tooltipSettingsTemplate']
            }] } });
/**
 * Marker Array Directive
 * @private
 */
class MarkersDirective extends ArrayBase {
    constructor() {
        super('markersettings');
    }
}
MarkersDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MarkersDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MarkersDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: MarkersDirective, selector: "e-layer>e-markerSettings", queries: [{ propertyName: "children", predicate: MarkerDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MarkersDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-layer>e-markerSettings',
                    queries: {
                        children: new ContentChildren(MarkerDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$4 = ['color', 'from', 'label', 'maxOpacity', 'minOpacity', 'showLegend', 'to', 'value'];
let outputs$5 = [];
/**
 * ColorMapping Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-colorMappings>
 * <e-colorMapping>
 * </e-colorMapping>
 * </e-colorMappings>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
class ColorMappingDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$5);
        this.directivePropList = input$4;
    }
}
ColorMappingDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColorMappingDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ColorMappingDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColorMappingDirective, selector: "e-bubbleSettings>e-colorMappings>e-colorMapping", inputs: { color: "color", from: "from", label: "label", maxOpacity: "maxOpacity", minOpacity: "minOpacity", showLegend: "showLegend", to: "to", value: "value" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColorMappingDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-bubbleSettings>e-colorMappings>e-colorMapping',
                    inputs: input$4,
                    outputs: outputs$5,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * ColorMapping Array Directive
 * @private
 */
class ColorMappingsDirective extends ArrayBase {
    constructor() {
        super('colormapping');
    }
}
ColorMappingsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColorMappingsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ColorMappingsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColorMappingsDirective, selector: "e-bubbleSettings>e-colorMappings", queries: [{ propertyName: "children", predicate: ColorMappingDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColorMappingsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-bubbleSettings>e-colorMappings',
                    queries: {
                        children: new ContentChildren(ColorMappingDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$3 = ['animationDelay', 'animationDuration', 'border', 'bubbleType', 'colorMapping', 'colorValuePath', 'dataSource', 'fill', 'highlightSettings', 'maxRadius', 'minRadius', 'opacity', 'query', 'selectionSettings', 'tooltipSettings', 'valuePath', 'visible'];
let outputs$4 = [];
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-bubbleSetting>
 * </e-bubbleSetting>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
class BubbleDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['colorMapping'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$4);
        this.directivePropList = input$3;
    }
}
BubbleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BubbleDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
BubbleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: BubbleDirective, selector: "e-layer>e-bubbleSettings>e-bubbleSetting", inputs: { animationDelay: "animationDelay", animationDuration: "animationDuration", border: "border", bubbleType: "bubbleType", colorMapping: "colorMapping", colorValuePath: "colorValuePath", dataSource: "dataSource", fill: "fill", highlightSettings: "highlightSettings", maxRadius: "maxRadius", minRadius: "minRadius", opacity: "opacity", query: "query", selectionSettings: "selectionSettings", tooltipSettings: "tooltipSettings", valuePath: "valuePath", visible: "visible" }, queries: [{ propertyName: "tooltipSettings_template", first: true, predicate: ["tooltipSettingsTemplate"], descendants: true }, { propertyName: "childColorMapping", first: true, predicate: ColorMappingsDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], BubbleDirective.prototype, "tooltipSettings_template", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BubbleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-layer>e-bubbleSettings>e-bubbleSetting',
                    inputs: input$3,
                    outputs: outputs$4,
                    queries: {
                        childColorMapping: new ContentChild(ColorMappingsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { tooltipSettings_template: [{
                type: ContentChild,
                args: ['tooltipSettingsTemplate']
            }] } });
/**
 * Bubble Array Directive
 * @private
 */
class BubblesDirective extends ArrayBase {
    constructor() {
        super('bubblesettings');
    }
}
BubblesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BubblesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BubblesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: BubblesDirective, selector: "e-layer>e-bubbleSettings", queries: [{ propertyName: "children", predicate: BubbleDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BubblesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-layer>e-bubbleSettings',
                    queries: {
                        children: new ContentChildren(BubbleDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$2 = ['angle', 'arrowSettings', 'color', 'dashArray', 'highlightSettings', 'latitude', 'longitude', 'selectionSettings', 'visible', 'width'];
let outputs$3 = [];
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-navigationLineSettings>
 * <e-navigationLineSetting>
 * </e-navigationLineSetting>
 * </e-navigationLineSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
class NavigationLineDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$3);
        this.directivePropList = input$2;
    }
}
NavigationLineDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NavigationLineDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
NavigationLineDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: NavigationLineDirective, selector: "e-layer>e-navigationLineSettings>e-navigationLineSetting", inputs: { angle: "angle", arrowSettings: "arrowSettings", color: "color", dashArray: "dashArray", highlightSettings: "highlightSettings", latitude: "latitude", longitude: "longitude", selectionSettings: "selectionSettings", visible: "visible", width: "width" }, queries: [{ propertyName: "tooltipSettings_template", first: true, predicate: ["tooltipSettingsTemplate"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], NavigationLineDirective.prototype, "tooltipSettings_template", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NavigationLineDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-layer>e-navigationLineSettings>e-navigationLineSetting',
                    inputs: input$2,
                    outputs: outputs$3,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { tooltipSettings_template: [{
                type: ContentChild,
                args: ['tooltipSettingsTemplate']
            }] } });
/**
 * NavigationLine Array Directive
 * @private
 */
class NavigationLinesDirective extends ArrayBase {
    constructor() {
        super('navigationlinesettings');
    }
}
NavigationLinesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NavigationLinesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NavigationLinesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: NavigationLinesDirective, selector: "e-layer>e-navigationLineSettings", queries: [{ propertyName: "children", predicate: NavigationLineDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NavigationLinesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-layer>e-navigationLineSettings',
                    queries: {
                        children: new ContentChildren(NavigationLineDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$1 = ['animationDuration', 'bingMapType', 'bubbleSettings', 'dataLabelSettings', 'dataSource', 'geometryType', 'highlightSettings', 'initialShapeSelection', 'key', 'layerType', 'markerClusterSettings', 'markerSettings', 'navigationLineSettings', 'query', 'selectionSettings', 'shapeData', 'shapeDataPath', 'shapePropertyPath', 'shapeSettings', 'staticMapType', 'toggleLegendSettings', 'tooltipSettings', 'type', 'urlTemplate', 'visible'];
let outputs$2 = [];
/**
 * Layer Directive
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
        this.tags = ['initialShapeSelection', 'markerSettings', 'bubbleSettings', 'navigationLineSettings'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
        this.directivePropList = input$1;
    }
}
LayerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LayerDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
LayerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: LayerDirective, selector: "e-layers>e-layer", inputs: { animationDuration: "animationDuration", bingMapType: "bingMapType", bubbleSettings: "bubbleSettings", dataLabelSettings: "dataLabelSettings", dataSource: "dataSource", geometryType: "geometryType", highlightSettings: "highlightSettings", initialShapeSelection: "initialShapeSelection", key: "key", layerType: "layerType", markerClusterSettings: "markerClusterSettings", markerSettings: "markerSettings", navigationLineSettings: "navigationLineSettings", query: "query", selectionSettings: "selectionSettings", shapeData: "shapeData", shapeDataPath: "shapeDataPath", shapePropertyPath: "shapePropertyPath", shapeSettings: "shapeSettings", staticMapType: "staticMapType", toggleLegendSettings: "toggleLegendSettings", tooltipSettings: "tooltipSettings", type: "type", urlTemplate: "urlTemplate", visible: "visible" }, queries: [{ propertyName: "childInitialShapeSelection", first: true, predicate: InitialShapeSelectionsDirective, descendants: true }, { propertyName: "childMarkerSettings", first: true, predicate: MarkersDirective, descendants: true }, { propertyName: "childBubbleSettings", first: true, predicate: BubblesDirective, descendants: true }, { propertyName: "childNavigationLineSettings", first: true, predicate: NavigationLinesDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LayerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-layers>e-layer',
                    inputs: input$1,
                    outputs: outputs$2,
                    queries: {
                        childInitialShapeSelection: new ContentChild(InitialShapeSelectionsDirective),
                        childMarkerSettings: new ContentChild(MarkersDirective),
                        childBubbleSettings: new ContentChild(BubblesDirective),
                        childNavigationLineSettings: new ContentChild(NavigationLinesDirective)
                    }
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
LayersDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: LayersDirective, selector: "ej-maps>e-layers", queries: [{ propertyName: "children", predicate: LayerDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LayersDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-maps>e-layers',
                    queries: {
                        children: new ContentChildren(LayerDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input = ['content', 'horizontalAlignment', 'verticalAlignment', 'x', 'y', 'zIndex'];
let outputs$1 = [];
/**
 * Annotation Directive
 * ```html
 * <e-maps-annotations>
 * <e-maps-annotation></e-maps-annotation>
 * </e-maps-annotations>
 * ```
 */
class AnnotationDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$1);
        this.directivePropList = input;
    }
}
AnnotationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AnnotationDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
AnnotationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AnnotationDirective, selector: "e-maps-annotations>e-maps-annotation", inputs: { content: "content", horizontalAlignment: "horizontalAlignment", verticalAlignment: "verticalAlignment", x: "x", y: "y", zIndex: "zIndex" }, queries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], AnnotationDirective.prototype, "content", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AnnotationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-maps-annotations>e-maps-annotation',
                    inputs: input,
                    outputs: outputs$1,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { content: [{
                type: ContentChild,
                args: ['content']
            }] } });
/**
 * Annotation Array Directive
 * @private
 */
class AnnotationsDirective extends ArrayBase {
    constructor() {
        super('annotations');
    }
}
AnnotationsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AnnotationsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AnnotationsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AnnotationsDirective, selector: "ej-maps>e-maps-annotations", queries: [{ propertyName: "children", predicate: AnnotationDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AnnotationsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-maps>e-maps-annotations',
                    queries: {
                        children: new ContentChildren(AnnotationDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs = ['allowImageExport', 'allowPdfExport', 'allowPrint', 'annotations', 'background', 'baseLayerIndex', 'border', 'centerPosition', 'description', 'enablePersistence', 'enableRtl', 'format', 'height', 'layers', 'legendSettings', 'locale', 'mapsArea', 'margin', 'projectionType', 'tabIndex', 'theme', 'titleSettings', 'tooltipDisplayMode', 'useGroupingSeparator', 'width', 'zoomSettings'];
const outputs = ['animationComplete', 'annotationRendering', 'beforePrint', 'bubbleClick', 'bubbleMouseMove', 'bubbleRendering', 'click', 'dataLabelRendering', 'doubleClick', 'itemHighlight', 'itemSelection', 'layerRendering', 'legendRendering', 'load', 'loaded', 'markerClick', 'markerClusterClick', 'markerClusterMouseMove', 'markerClusterRendering', 'markerMouseMove', 'markerRendering', 'pan', 'resize', 'rightClick', 'shapeHighlight', 'shapeRendering', 'shapeSelected', 'tooltipRender', 'tooltipRenderComplete', 'zoom', 'dataSourceChange'];
const twoWays = ['dataSource'];
/**
 * Represents Maps Component
 * ```html
 * <ej-maps></ej-maps>
 * ```
 */
let MapsComponent = class MapsComponent extends Maps {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['layers', 'annotations'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('MapsBubble');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('MapsLegend');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('MapsMarker');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('MapsHighlight');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('MapsSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('MapsMapsTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('MapsZoom');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('MapsDataLabel');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('MapsNavigationLine');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('MapsAnnotations');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('MapsPrint');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('MapsPdfExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('MapsImageExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
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
        this.tagObjects[0].instance = this.childLayers;
        if (this.childAnnotations) {
            this.tagObjects[1].instance = this.childAnnotations;
        }
        this.context.ngAfterContentChecked(this);
    }
};
MapsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MapsComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
MapsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: MapsComponent, selector: "ejs-maps", inputs: { allowImageExport: "allowImageExport", allowPdfExport: "allowPdfExport", allowPrint: "allowPrint", annotations: "annotations", background: "background", baseLayerIndex: "baseLayerIndex", border: "border", centerPosition: "centerPosition", description: "description", enablePersistence: "enablePersistence", enableRtl: "enableRtl", format: "format", height: "height", layers: "layers", legendSettings: "legendSettings", locale: "locale", mapsArea: "mapsArea", margin: "margin", projectionType: "projectionType", tabIndex: "tabIndex", theme: "theme", titleSettings: "titleSettings", tooltipDisplayMode: "tooltipDisplayMode", useGroupingSeparator: "useGroupingSeparator", width: "width", zoomSettings: "zoomSettings" }, outputs: { animationComplete: "animationComplete", annotationRendering: "annotationRendering", beforePrint: "beforePrint", bubbleClick: "bubbleClick", bubbleMouseMove: "bubbleMouseMove", bubbleRendering: "bubbleRendering", click: "click", dataLabelRendering: "dataLabelRendering", doubleClick: "doubleClick", itemHighlight: "itemHighlight", itemSelection: "itemSelection", layerRendering: "layerRendering", legendRendering: "legendRendering", load: "load", loaded: "loaded", markerClick: "markerClick", markerClusterClick: "markerClusterClick", markerClusterMouseMove: "markerClusterMouseMove", markerClusterRendering: "markerClusterRendering", markerMouseMove: "markerMouseMove", markerRendering: "markerRendering", pan: "pan", resize: "resize", rightClick: "rightClick", shapeHighlight: "shapeHighlight", shapeRendering: "shapeRendering", shapeSelected: "shapeSelected", tooltipRender: "tooltipRender", tooltipRenderComplete: "tooltipRenderComplete", zoom: "zoom", dataSourceChange: "dataSourceChange" }, queries: [{ propertyName: "childLayers", first: true, predicate: LayersDirective, descendants: true }, { propertyName: "childAnnotations", first: true, predicate: AnnotationsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
MapsComponent = __decorate([
    ComponentMixins([ComponentBase])
], MapsComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MapsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-maps',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childLayers: new ContentChild(LayersDirective),
                        childAnnotations: new ContentChild(AnnotationsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the Maps component.
 */
class MapsModule {
}
MapsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MapsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MapsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MapsModule, declarations: [MapsComponent,
        InitialShapeSelectionDirective,
        InitialShapeSelectionsDirective,
        MarkerDirective,
        MarkersDirective,
        ColorMappingDirective,
        ColorMappingsDirective,
        BubbleDirective,
        BubblesDirective,
        NavigationLineDirective,
        NavigationLinesDirective,
        LayerDirective,
        LayersDirective,
        AnnotationDirective,
        AnnotationsDirective], imports: [CommonModule], exports: [MapsComponent,
        InitialShapeSelectionDirective,
        InitialShapeSelectionsDirective,
        MarkerDirective,
        MarkersDirective,
        ColorMappingDirective,
        ColorMappingsDirective,
        BubbleDirective,
        BubblesDirective,
        NavigationLineDirective,
        NavigationLinesDirective,
        LayerDirective,
        LayersDirective,
        AnnotationDirective,
        AnnotationsDirective] });
MapsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MapsModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MapsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        MapsComponent,
                        InitialShapeSelectionDirective,
                        InitialShapeSelectionsDirective,
                        MarkerDirective,
                        MarkersDirective,
                        ColorMappingDirective,
                        ColorMappingsDirective,
                        BubbleDirective,
                        BubblesDirective,
                        NavigationLineDirective,
                        NavigationLinesDirective,
                        LayerDirective,
                        LayersDirective,
                        AnnotationDirective,
                        AnnotationsDirective
                    ],
                    exports: [
                        MapsComponent,
                        InitialShapeSelectionDirective,
                        InitialShapeSelectionsDirective,
                        MarkerDirective,
                        MarkersDirective,
                        ColorMappingDirective,
                        ColorMappingsDirective,
                        BubbleDirective,
                        BubblesDirective,
                        NavigationLineDirective,
                        NavigationLinesDirective,
                        LayerDirective,
                        LayersDirective,
                        AnnotationDirective,
                        AnnotationsDirective
                    ]
                }]
        }] });

const BubbleService = { provide: 'MapsBubble', useValue: Bubble };
const LegendService = { provide: 'MapsLegend', useValue: Legend };
const MarkerService = { provide: 'MapsMarker', useValue: Marker };
const HighlightService = { provide: 'MapsHighlight', useValue: Highlight };
const SelectionService = { provide: 'MapsSelection', useValue: Selection };
const MapsTooltipService = { provide: 'MapsMapsTooltip', useValue: MapsTooltip };
const ZoomService = { provide: 'MapsZoom', useValue: Zoom };
const DataLabelService = { provide: 'MapsDataLabel', useValue: DataLabel };
const NavigationLineService = { provide: 'MapsNavigationLine', useValue: NavigationLine };
const AnnotationsService = { provide: 'MapsAnnotations', useValue: Annotations };
const PrintService = { provide: 'MapsPrint', useValue: Print };
const PdfExportService = { provide: 'MapsPdfExport', useValue: PdfExport };
const ImageExportService = { provide: 'MapsImageExport', useValue: ImageExport };
/**
 * NgModule definition for the Maps component with providers.
 */
class MapsAllModule {
}
MapsAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MapsAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MapsAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MapsAllModule, imports: [CommonModule, MapsModule], exports: [MapsModule] });
MapsAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MapsAllModule, providers: [
        BubbleService,
        LegendService,
        MarkerService,
        HighlightService,
        SelectionService,
        MapsTooltipService,
        ZoomService,
        DataLabelService,
        NavigationLineService,
        AnnotationsService,
        PrintService,
        PdfExportService,
        ImageExportService
    ], imports: [[CommonModule, MapsModule], MapsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MapsAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MapsModule],
                    exports: [
                        MapsModule
                    ],
                    providers: [
                        BubbleService,
                        LegendService,
                        MarkerService,
                        HighlightService,
                        SelectionService,
                        MapsTooltipService,
                        ZoomService,
                        DataLabelService,
                        NavigationLineService,
                        AnnotationsService,
                        PrintService,
                        PdfExportService,
                        ImageExportService
                    ]
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { AnnotationDirective, AnnotationsDirective, AnnotationsService, BubbleDirective, BubbleService, BubblesDirective, ColorMappingDirective, ColorMappingsDirective, DataLabelService, HighlightService, ImageExportService, InitialShapeSelectionDirective, InitialShapeSelectionsDirective, LayerDirective, LayersDirective, LegendService, MapsAllModule, MapsComponent, MapsModule, MapsTooltipService, MarkerDirective, MarkerService, MarkersDirective, NavigationLineDirective, NavigationLineService, NavigationLinesDirective, PdfExportService, PrintService, SelectionService, ZoomService };
//# sourceMappingURL=syncfusion-ej2-angular-maps.mjs.map
