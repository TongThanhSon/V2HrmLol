import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Directive, ContentChild, ContentChildren, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { ComplexBase, setValue, Template, ArrayBase, ComponentBase, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { CircularGauge, GaugeTooltip, Annotations, Legend, Print, PdfExport, ImageExport, Gradient } from '@syncfusion/ej2-circulargauge';
export * from '@syncfusion/ej2-circulargauge';
import { CommonModule } from '@angular/common';

let input$3 = ['angle', 'autoAngle', 'content', 'description', 'radius', 'textStyle', 'zIndex'];
let outputs$4 = [];
/**
 * Annotation directive
 * ```html
 * <e-annotations><e-annotation></e-annotation></e-annotations>
 * ```
 */
class AnnotationDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$4);
        this.directivePropList = input$3;
    }
}
AnnotationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AnnotationDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
AnnotationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AnnotationDirective, selector: "e-annotations>e-annotation", inputs: { angle: "angle", autoAngle: "autoAngle", content: "content", description: "description", radius: "radius", textStyle: "textStyle", zIndex: "zIndex" }, queries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], AnnotationDirective.prototype, "content", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AnnotationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-annotations>e-annotation',
                    inputs: input$3,
                    outputs: outputs$4,
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
AnnotationsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AnnotationsDirective, selector: "ej-circulargauge>e-axes>e-axis>e-annotations", queries: [{ propertyName: "children", predicate: AnnotationDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AnnotationsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-circulargauge>e-axes>e-axis>e-annotations',
                    queries: {
                        children: new ContentChildren(AnnotationDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$2 = ['color', 'end', 'endWidth', 'legendText', 'linearGradient', 'offset', 'opacity', 'position', 'radialGradient', 'radius', 'roundedCornerRadius', 'start', 'startWidth'];
let outputs$3 = [];
/**
 * Ranges directive
 * ```html
 * <e-ranges><e-range></e-range></e-ranges>
 * ```
 */
class RangeDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$3);
        this.directivePropList = input$2;
    }
}
RangeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
RangeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangeDirective, selector: "e-ranges>e-range", inputs: { color: "color", end: "end", endWidth: "endWidth", legendText: "legendText", linearGradient: "linearGradient", offset: "offset", opacity: "opacity", position: "position", radialGradient: "radialGradient", radius: "radius", roundedCornerRadius: "roundedCornerRadius", start: "start", startWidth: "startWidth" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-ranges>e-range',
                    inputs: input$2,
                    outputs: outputs$3,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Range Array Directive
 * @private
 */
class RangesDirective extends ArrayBase {
    constructor() {
        super('ranges');
    }
}
RangesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RangesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangesDirective, selector: "ej-circulargauge>e-axes>e-axis>e-ranges", queries: [{ propertyName: "children", predicate: RangeDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-circulargauge>e-axes>e-axis>e-ranges',
                    queries: {
                        children: new ContentChildren(RangeDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$1 = ['animation', 'border', 'cap', 'color', 'description', 'imageUrl', 'linearGradient', 'markerHeight', 'markerShape', 'markerWidth', 'needleEndWidth', 'needleStartWidth', 'needleTail', 'offset', 'pointerWidth', 'position', 'radialGradient', 'radius', 'roundedCornerRadius', 'text', 'textStyle', 'type', 'value'];
let outputs$2 = [];
/**
 * Pointers directive
 * ```html
 * <e-pointers><e-pointer></e-pointer></e-pointers>
 * ```
 */
class PointerDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
        this.directivePropList = input$1;
    }
}
PointerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PointerDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PointerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PointerDirective, selector: "e-pointers>e-pointer", inputs: { animation: "animation", border: "border", cap: "cap", color: "color", description: "description", imageUrl: "imageUrl", linearGradient: "linearGradient", markerHeight: "markerHeight", markerShape: "markerShape", markerWidth: "markerWidth", needleEndWidth: "needleEndWidth", needleStartWidth: "needleStartWidth", needleTail: "needleTail", offset: "offset", pointerWidth: "pointerWidth", position: "position", radialGradient: "radialGradient", radius: "radius", roundedCornerRadius: "roundedCornerRadius", text: "text", textStyle: "textStyle", type: "type", value: "value" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PointerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-pointers>e-pointer',
                    inputs: input$1,
                    outputs: outputs$2,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Pointer Array Directive
 * @private
 */
class PointersDirective extends ArrayBase {
    constructor() {
        super('pointers');
    }
}
PointersDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PointersDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PointersDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PointersDirective, selector: "ej-circulargauge>e-axes>e-axis>e-pointers", queries: [{ propertyName: "children", predicate: PointerDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PointersDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-circulargauge>e-axes>e-axis>e-pointers',
                    queries: {
                        children: new ContentChildren(PointerDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input = ['annotations', 'background', 'direction', 'endAngle', 'hideIntersectingLabel', 'labelStyle', 'lineStyle', 'majorTicks', 'maximum', 'minimum', 'minorTicks', 'pointers', 'radius', 'rangeGap', 'ranges', 'roundingPlaces', 'showLastLabel', 'startAndEndRangeGap', 'startAngle'];
let outputs$1 = [];
/**
 * Axes directive
 * ```html
 * <e-axes><e-axis></e-axis></e-axes>
 * ```
 */
class AxisDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['annotations', 'ranges', 'pointers'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$1);
        this.directivePropList = input;
    }
}
AxisDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AxisDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
AxisDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AxisDirective, selector: "e-axes>e-axis", inputs: { annotations: "annotations", background: "background", direction: "direction", endAngle: "endAngle", hideIntersectingLabel: "hideIntersectingLabel", labelStyle: "labelStyle", lineStyle: "lineStyle", majorTicks: "majorTicks", maximum: "maximum", minimum: "minimum", minorTicks: "minorTicks", pointers: "pointers", radius: "radius", rangeGap: "rangeGap", ranges: "ranges", roundingPlaces: "roundingPlaces", showLastLabel: "showLastLabel", startAndEndRangeGap: "startAndEndRangeGap", startAngle: "startAngle" }, queries: [{ propertyName: "childAnnotations", first: true, predicate: AnnotationsDirective, descendants: true }, { propertyName: "childRanges", first: true, predicate: RangesDirective, descendants: true }, { propertyName: "childPointers", first: true, predicate: PointersDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AxisDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-axes>e-axis',
                    inputs: input,
                    outputs: outputs$1,
                    queries: {
                        childAnnotations: new ContentChild(AnnotationsDirective),
                        childRanges: new ContentChild(RangesDirective),
                        childPointers: new ContentChild(PointersDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Axis Array Directive
 * @private
 */
class AxesDirective extends ArrayBase {
    constructor() {
        super('axes');
    }
}
AxesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AxesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AxesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AxesDirective, selector: "ej-circulargauge>e-axes", queries: [{ propertyName: "children", predicate: AxisDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AxesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-circulargauge>e-axes',
                    queries: {
                        children: new ContentChildren(AxisDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs = ['allowImageExport', 'allowMargin', 'allowPdfExport', 'allowPrint', 'axes', 'background', 'border', 'centerX', 'centerY', 'description', 'enablePersistence', 'enablePointerDrag', 'enableRangeDrag', 'enableRtl', 'height', 'legendSettings', 'locale', 'margin', 'moveToCenter', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width'];
const outputs = ['animationComplete', 'annotationRender', 'axisLabelRender', 'beforePrint', 'dragEnd', 'dragMove', 'dragStart', 'gaugeMouseDown', 'gaugeMouseLeave', 'gaugeMouseMove', 'gaugeMouseUp', 'legendRender', 'load', 'loaded', 'radiusCalculate', 'resized', 'tooltipRender'];
const twoWays = [''];
/**
 * Circular Gauge Component
 * ```html
 * <ej-circulargauge></ej-circulargauge>
 * ```
 */
let CircularGaugeComponent = class CircularGaugeComponent extends CircularGauge {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['axes'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('CircularGaugeGaugeTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('CircularGaugeAnnotations');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('CircularGaugeLegend');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('CircularGaugePrint');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('CircularGaugePdfExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('CircularGaugeImageExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('CircularGaugeGradient');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
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
        this.tagObjects[0].instance = this.childAxes;
        this.context.ngAfterContentChecked(this);
    }
};
CircularGaugeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularGaugeComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
CircularGaugeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: CircularGaugeComponent, selector: "ejs-circulargauge", inputs: { allowImageExport: "allowImageExport", allowMargin: "allowMargin", allowPdfExport: "allowPdfExport", allowPrint: "allowPrint", axes: "axes", background: "background", border: "border", centerX: "centerX", centerY: "centerY", description: "description", enablePersistence: "enablePersistence", enablePointerDrag: "enablePointerDrag", enableRangeDrag: "enableRangeDrag", enableRtl: "enableRtl", height: "height", legendSettings: "legendSettings", locale: "locale", margin: "margin", moveToCenter: "moveToCenter", tabIndex: "tabIndex", theme: "theme", title: "title", titleStyle: "titleStyle", tooltip: "tooltip", useGroupingSeparator: "useGroupingSeparator", width: "width" }, outputs: { animationComplete: "animationComplete", annotationRender: "annotationRender", axisLabelRender: "axisLabelRender", beforePrint: "beforePrint", dragEnd: "dragEnd", dragMove: "dragMove", dragStart: "dragStart", gaugeMouseDown: "gaugeMouseDown", gaugeMouseLeave: "gaugeMouseLeave", gaugeMouseMove: "gaugeMouseMove", gaugeMouseUp: "gaugeMouseUp", legendRender: "legendRender", load: "load", loaded: "loaded", radiusCalculate: "radiusCalculate", resized: "resized", tooltipRender: "tooltipRender" }, queries: [{ propertyName: "tooltip_template", first: true, predicate: ["tooltipTemplate"], descendants: true }, { propertyName: "childAxes", first: true, predicate: AxesDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], CircularGaugeComponent.prototype, "tooltip_template", void 0);
CircularGaugeComponent = __decorate([
    ComponentMixins([ComponentBase])
], CircularGaugeComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularGaugeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-circulargauge',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childAxes: new ContentChild(AxesDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { tooltip_template: [{
                type: ContentChild,
                args: ['tooltipTemplate']
            }] } });

/**
 * NgModule definition for the CircularGauge component.
 */
class CircularGaugeModule {
}
CircularGaugeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularGaugeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CircularGaugeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularGaugeModule, declarations: [CircularGaugeComponent,
        AnnotationDirective,
        AnnotationsDirective,
        RangeDirective,
        RangesDirective,
        PointerDirective,
        PointersDirective,
        AxisDirective,
        AxesDirective], imports: [CommonModule], exports: [CircularGaugeComponent,
        AnnotationDirective,
        AnnotationsDirective,
        RangeDirective,
        RangesDirective,
        PointerDirective,
        PointersDirective,
        AxisDirective,
        AxesDirective] });
CircularGaugeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularGaugeModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularGaugeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        CircularGaugeComponent,
                        AnnotationDirective,
                        AnnotationsDirective,
                        RangeDirective,
                        RangesDirective,
                        PointerDirective,
                        PointersDirective,
                        AxisDirective,
                        AxesDirective
                    ],
                    exports: [
                        CircularGaugeComponent,
                        AnnotationDirective,
                        AnnotationsDirective,
                        RangeDirective,
                        RangesDirective,
                        PointerDirective,
                        PointersDirective,
                        AxisDirective,
                        AxesDirective
                    ]
                }]
        }] });

const GaugeTooltipService = { provide: 'CircularGaugeGaugeTooltip', useValue: GaugeTooltip };
const AnnotationsService = { provide: 'CircularGaugeAnnotations', useValue: Annotations };
const LegendService = { provide: 'CircularGaugeLegend', useValue: Legend };
const PrintService = { provide: 'CircularGaugePrint', useValue: Print };
const PdfExportService = { provide: 'CircularGaugePdfExport', useValue: PdfExport };
const ImageExportService = { provide: 'CircularGaugeImageExport', useValue: ImageExport };
const GradientService = { provide: 'CircularGaugeGradient', useValue: Gradient };
/**
 * NgModule definition for the CircularGauge component with providers.
 */
class CircularGaugeAllModule {
}
CircularGaugeAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularGaugeAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CircularGaugeAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularGaugeAllModule, imports: [CommonModule, CircularGaugeModule], exports: [CircularGaugeModule] });
CircularGaugeAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularGaugeAllModule, providers: [
        GaugeTooltipService,
        AnnotationsService,
        LegendService,
        PrintService,
        PdfExportService,
        ImageExportService,
        GradientService
    ], imports: [[CommonModule, CircularGaugeModule], CircularGaugeModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularGaugeAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, CircularGaugeModule],
                    exports: [
                        CircularGaugeModule
                    ],
                    providers: [
                        GaugeTooltipService,
                        AnnotationsService,
                        LegendService,
                        PrintService,
                        PdfExportService,
                        ImageExportService,
                        GradientService
                    ]
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { AnnotationDirective, AnnotationsDirective, AnnotationsService, AxesDirective, AxisDirective, CircularGaugeAllModule, CircularGaugeComponent, CircularGaugeModule, GaugeTooltipService, GradientService, ImageExportService, LegendService, PdfExportService, PointerDirective, PointersDirective, PrintService, RangeDirective, RangesDirective };
//# sourceMappingURL=syncfusion-ej2-angular-circulargauge.mjs.map
