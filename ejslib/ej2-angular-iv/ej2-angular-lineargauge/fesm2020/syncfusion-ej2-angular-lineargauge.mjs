import * as i0 from '@angular/core';
import { Directive, ContentChildren, ContentChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { ComplexBase, setValue, ArrayBase, Template, ComponentBase, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { __decorate } from 'tslib';
import { LinearGauge, GaugeTooltip, Annotations, Print, PdfExport, ImageExport, Gradient } from '@syncfusion/ej2-lineargauge';
export * from '@syncfusion/ej2-lineargauge';
import { CommonModule } from '@angular/common';

let input$3 = ['border', 'color', 'end', 'endWidth', 'linearGradient', 'offset', 'position', 'radialGradient', 'start', 'startWidth'];
let outputs$4 = [];
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
        this.registerEvents(outputs$4);
        this.directivePropList = input$3;
    }
}
RangeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
RangeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangeDirective, selector: "e-ranges>e-range", inputs: { border: "border", color: "color", end: "end", endWidth: "endWidth", linearGradient: "linearGradient", offset: "offset", position: "position", radialGradient: "radialGradient", start: "start", startWidth: "startWidth" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-ranges>e-range',
                    inputs: input$3,
                    outputs: outputs$4,
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
RangesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangesDirective, selector: "ej-lineargauge>e-axes>e-axis>e-ranges", queries: [{ propertyName: "children", predicate: RangeDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-lineargauge>e-axes>e-axis>e-ranges',
                    queries: {
                        children: new ContentChildren(RangeDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$2 = ['animationDuration', 'border', 'color', 'description', 'enableDrag', 'height', 'imageUrl', 'linearGradient', 'markerType', 'offset', 'opacity', 'placement', 'position', 'radialGradient', 'roundedCornerRadius', 'type', 'value', 'width'];
let outputs$3 = [];
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
        this.registerEvents(outputs$3);
        this.directivePropList = input$2;
    }
}
PointerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PointerDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PointerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PointerDirective, selector: "e-pointers>e-pointer", inputs: { animationDuration: "animationDuration", border: "border", color: "color", description: "description", enableDrag: "enableDrag", height: "height", imageUrl: "imageUrl", linearGradient: "linearGradient", markerType: "markerType", offset: "offset", opacity: "opacity", placement: "placement", position: "position", radialGradient: "radialGradient", roundedCornerRadius: "roundedCornerRadius", type: "type", value: "value", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PointerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-pointers>e-pointer',
                    inputs: input$2,
                    outputs: outputs$3,
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
PointersDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PointersDirective, selector: "ej-linear-gauge>e-axes>e-axis>e-pointers", queries: [{ propertyName: "children", predicate: PointerDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PointersDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-linear-gauge>e-axes>e-axis>e-pointers',
                    queries: {
                        children: new ContentChildren(PointerDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$1 = ['isInversed', 'labelStyle', 'line', 'majorTicks', 'maximum', 'minimum', 'minorTicks', 'opposedPosition', 'pointers', 'ranges', 'showLastLabel'];
let outputs$2 = [];
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
        this.tags = ['ranges', 'pointers'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
        this.directivePropList = input$1;
    }
}
AxisDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AxisDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
AxisDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AxisDirective, selector: "e-axes>e-axis", inputs: { isInversed: "isInversed", labelStyle: "labelStyle", line: "line", majorTicks: "majorTicks", maximum: "maximum", minimum: "minimum", minorTicks: "minorTicks", opposedPosition: "opposedPosition", pointers: "pointers", ranges: "ranges", showLastLabel: "showLastLabel" }, queries: [{ propertyName: "childRanges", first: true, predicate: RangesDirective, descendants: true }, { propertyName: "childPointers", first: true, predicate: PointersDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AxisDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-axes>e-axis',
                    inputs: input$1,
                    outputs: outputs$2,
                    queries: {
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
AxesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AxesDirective, selector: "ej-lineargauge>e-axes", queries: [{ propertyName: "children", predicate: AxisDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AxesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-lineargauge>e-axes',
                    queries: {
                        children: new ContentChildren(AxisDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input = ['axisIndex', 'axisValue', 'content', 'font', 'horizontalAlignment', 'verticalAlignment', 'x', 'y', 'zIndex'];
let outputs$1 = [];
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
        this.registerEvents(outputs$1);
        this.directivePropList = input;
    }
}
AnnotationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AnnotationDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
AnnotationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AnnotationDirective, selector: "e-annotations>e-annotation", inputs: { axisIndex: "axisIndex", axisValue: "axisValue", content: "content", font: "font", horizontalAlignment: "horizontalAlignment", verticalAlignment: "verticalAlignment", x: "x", y: "y", zIndex: "zIndex" }, queries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], AnnotationDirective.prototype, "content", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AnnotationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-annotations>e-annotation',
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
AnnotationsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AnnotationsDirective, selector: "ej-linear-gauge>e-annotations", queries: [{ propertyName: "children", predicate: AnnotationDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AnnotationsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-linear-gauge>e-annotations',
                    queries: {
                        children: new ContentChildren(AnnotationDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs = ['allowImageExport', 'allowMargin', 'allowPdfExport', 'allowPrint', 'annotations', 'axes', 'background', 'border', 'container', 'description', 'edgeLabelPlacement', 'enablePersistence', 'enableRtl', 'format', 'height', 'locale', 'margin', 'orientation', 'rangePalettes', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width'];
const outputs = ['animationComplete', 'annotationRender', 'axisLabelRender', 'beforePrint', 'dragEnd', 'dragMove', 'dragStart', 'gaugeMouseDown', 'gaugeMouseLeave', 'gaugeMouseMove', 'gaugeMouseUp', 'load', 'loaded', 'resized', 'tooltipRender', 'valueChange'];
const twoWays = [''];
/**
 * Linear Gauge Component
 * ```html
 * <ej-lineargauge></ej-lineargauge>
 * ```
 */
let LinearGaugeComponent = class LinearGaugeComponent extends LinearGauge {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['axes', 'annotations'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('LinearGaugeGaugeTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('LinearGaugeAnnotations');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('LinearGaugePrint');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('LinearGaugePdfExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('LinearGaugeImageExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('LinearGaugeGradient');
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
        this.tagObjects[0].instance = this.childAxes;
        if (this.childAnnotations) {
            this.tagObjects[1].instance = this.childAnnotations;
        }
        this.context.ngAfterContentChecked(this);
    }
};
LinearGaugeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LinearGaugeComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
LinearGaugeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: LinearGaugeComponent, selector: "ejs-lineargauge", inputs: { allowImageExport: "allowImageExport", allowMargin: "allowMargin", allowPdfExport: "allowPdfExport", allowPrint: "allowPrint", annotations: "annotations", axes: "axes", background: "background", border: "border", container: "container", description: "description", edgeLabelPlacement: "edgeLabelPlacement", enablePersistence: "enablePersistence", enableRtl: "enableRtl", format: "format", height: "height", locale: "locale", margin: "margin", orientation: "orientation", rangePalettes: "rangePalettes", tabIndex: "tabIndex", theme: "theme", title: "title", titleStyle: "titleStyle", tooltip: "tooltip", useGroupingSeparator: "useGroupingSeparator", width: "width" }, outputs: { animationComplete: "animationComplete", annotationRender: "annotationRender", axisLabelRender: "axisLabelRender", beforePrint: "beforePrint", dragEnd: "dragEnd", dragMove: "dragMove", dragStart: "dragStart", gaugeMouseDown: "gaugeMouseDown", gaugeMouseLeave: "gaugeMouseLeave", gaugeMouseMove: "gaugeMouseMove", gaugeMouseUp: "gaugeMouseUp", load: "load", loaded: "loaded", resized: "resized", tooltipRender: "tooltipRender", valueChange: "valueChange" }, queries: [{ propertyName: "tooltip_template", first: true, predicate: ["tooltipTemplate"], descendants: true }, { propertyName: "childAxes", first: true, predicate: AxesDirective, descendants: true }, { propertyName: "childAnnotations", first: true, predicate: AnnotationsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], LinearGaugeComponent.prototype, "tooltip_template", void 0);
LinearGaugeComponent = __decorate([
    ComponentMixins([ComponentBase])
], LinearGaugeComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LinearGaugeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-lineargauge',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childAxes: new ContentChild(AxesDirective),
                        childAnnotations: new ContentChild(AnnotationsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { tooltip_template: [{
                type: ContentChild,
                args: ['tooltipTemplate']
            }] } });

/**
 * NgModule definition for the LinearGauge component.
 */
class LinearGaugeModule {
}
LinearGaugeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LinearGaugeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LinearGaugeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LinearGaugeModule, declarations: [LinearGaugeComponent,
        RangeDirective,
        RangesDirective,
        PointerDirective,
        PointersDirective,
        AxisDirective,
        AxesDirective,
        AnnotationDirective,
        AnnotationsDirective], imports: [CommonModule], exports: [LinearGaugeComponent,
        RangeDirective,
        RangesDirective,
        PointerDirective,
        PointersDirective,
        AxisDirective,
        AxesDirective,
        AnnotationDirective,
        AnnotationsDirective] });
LinearGaugeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LinearGaugeModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LinearGaugeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        LinearGaugeComponent,
                        RangeDirective,
                        RangesDirective,
                        PointerDirective,
                        PointersDirective,
                        AxisDirective,
                        AxesDirective,
                        AnnotationDirective,
                        AnnotationsDirective
                    ],
                    exports: [
                        LinearGaugeComponent,
                        RangeDirective,
                        RangesDirective,
                        PointerDirective,
                        PointersDirective,
                        AxisDirective,
                        AxesDirective,
                        AnnotationDirective,
                        AnnotationsDirective
                    ]
                }]
        }] });

const GaugeTooltipService = { provide: 'LinearGaugeGaugeTooltip', useValue: GaugeTooltip };
const AnnotationsService = { provide: 'LinearGaugeAnnotations', useValue: Annotations };
const PrintService = { provide: 'LinearGaugePrint', useValue: Print };
const PdfExportService = { provide: 'LinearGaugePdfExport', useValue: PdfExport };
const ImageExportService = { provide: 'LinearGaugeImageExport', useValue: ImageExport };
const GradientService = { provide: 'LinearGaugeGradient', useValue: Gradient };
/**
 * NgModule definition for the LinearGauge component with providers.
 */
class LinearGaugeAllModule {
}
LinearGaugeAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LinearGaugeAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LinearGaugeAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LinearGaugeAllModule, imports: [CommonModule, LinearGaugeModule], exports: [LinearGaugeModule] });
LinearGaugeAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LinearGaugeAllModule, providers: [
        GaugeTooltipService,
        AnnotationsService,
        PrintService,
        PdfExportService,
        ImageExportService,
        GradientService
    ], imports: [[CommonModule, LinearGaugeModule], LinearGaugeModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LinearGaugeAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, LinearGaugeModule],
                    exports: [
                        LinearGaugeModule
                    ],
                    providers: [
                        GaugeTooltipService,
                        AnnotationsService,
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

export { AnnotationDirective, AnnotationsDirective, AnnotationsService, AxesDirective, AxisDirective, GaugeTooltipService, GradientService, ImageExportService, LinearGaugeAllModule, LinearGaugeComponent, LinearGaugeModule, PdfExportService, PointerDirective, PointersDirective, PrintService, RangeDirective, RangesDirective };
//# sourceMappingURL=syncfusion-ej2-angular-lineargauge.mjs.map
