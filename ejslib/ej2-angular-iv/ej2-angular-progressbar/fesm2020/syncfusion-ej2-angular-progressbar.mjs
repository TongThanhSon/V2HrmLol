import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Directive, ContentChild, ContentChildren, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { ComplexBase, setValue, Template, ArrayBase, ComponentBase, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { ProgressBar, ProgressAnnotation } from '@syncfusion/ej2-progressbar';
export * from '@syncfusion/ej2-progressbar';
import { CommonModule } from '@angular/common';

let input = ['annotationAngle', 'annotationRadius', 'content'];
let outputs$1 = [];
/**
 * ProgressBarAnnotations Directive
 * ```html
 * <e-progressbar-annotations>
 * <e-progressbar-annotation></e-progressbar-annotation>
 * </e-progressbar-annotations>
 * ```
 */
class ProgressBarAnnotationDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$1);
        this.directivePropList = input;
    }
}
ProgressBarAnnotationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarAnnotationDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ProgressBarAnnotationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ProgressBarAnnotationDirective, selector: "e-progressbar-annotations>e-progressbar-annotation", inputs: { annotationAngle: "annotationAngle", annotationRadius: "annotationRadius", content: "content" }, queries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], ProgressBarAnnotationDirective.prototype, "content", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarAnnotationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-progressbar-annotations>e-progressbar-annotation',
                    inputs: input,
                    outputs: outputs$1,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { content: [{
                type: ContentChild,
                args: ['content']
            }] } });
/**
 * ProgressBarAnnotation Array Directive
 * @private
 */
class ProgressBarAnnotationsDirective extends ArrayBase {
    constructor() {
        super('annotations');
    }
}
ProgressBarAnnotationsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarAnnotationsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ProgressBarAnnotationsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ProgressBarAnnotationsDirective, selector: "ej-progressbar>e-progressbar-annotations", queries: [{ propertyName: "children", predicate: ProgressBarAnnotationDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarAnnotationsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-progressbar>e-progressbar-annotations',
                    queries: {
                        children: new ContentChildren(ProgressBarAnnotationDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs = ['animation', 'annotations', 'cornerRadius', 'enablePersistence', 'enablePieProgress', 'enableProgressSegments', 'enableRtl', 'endAngle', 'gapWidth', 'height', 'innerRadius', 'isActive', 'isGradient', 'isIndeterminate', 'isStriped', 'labelOnTrack', 'labelStyle', 'locale', 'margin', 'maximum', 'minimum', 'progressColor', 'progressThickness', 'radius', 'rangeColors', 'role', 'secondaryProgress', 'segmentColor', 'segmentCount', 'showProgressValue', 'startAngle', 'theme', 'trackColor', 'trackThickness', 'type', 'value', 'width'];
const outputs = ['animationComplete', 'load', 'loaded', 'mouseClick', 'mouseDown', 'mouseLeave', 'mouseMove', 'mouseUp', 'progressCompleted', 'textRender', 'valueChanged'];
const twoWays = [''];
/**
 * ProgressBar Component
 * ```html
 * <ejsprogressbar></ejsprogressbar>
 * ```
 */
let ProgressBarComponent = class ProgressBarComponent extends ProgressBar {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['annotations'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('ProgressBarProgressAnnotation');
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
        this.tagObjects[0].instance = this.childAnnotations;
        this.context.ngAfterContentChecked(this);
    }
};
ProgressBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
ProgressBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ProgressBarComponent, selector: "ejs-progressbar", inputs: { animation: "animation", annotations: "annotations", cornerRadius: "cornerRadius", enablePersistence: "enablePersistence", enablePieProgress: "enablePieProgress", enableProgressSegments: "enableProgressSegments", enableRtl: "enableRtl", endAngle: "endAngle", gapWidth: "gapWidth", height: "height", innerRadius: "innerRadius", isActive: "isActive", isGradient: "isGradient", isIndeterminate: "isIndeterminate", isStriped: "isStriped", labelOnTrack: "labelOnTrack", labelStyle: "labelStyle", locale: "locale", margin: "margin", maximum: "maximum", minimum: "minimum", progressColor: "progressColor", progressThickness: "progressThickness", radius: "radius", rangeColors: "rangeColors", role: "role", secondaryProgress: "secondaryProgress", segmentColor: "segmentColor", segmentCount: "segmentCount", showProgressValue: "showProgressValue", startAngle: "startAngle", theme: "theme", trackColor: "trackColor", trackThickness: "trackThickness", type: "type", value: "value", width: "width" }, outputs: { animationComplete: "animationComplete", load: "load", loaded: "loaded", mouseClick: "mouseClick", mouseDown: "mouseDown", mouseLeave: "mouseLeave", mouseMove: "mouseMove", mouseUp: "mouseUp", progressCompleted: "progressCompleted", textRender: "textRender", valueChanged: "valueChanged" }, queries: [{ propertyName: "childAnnotations", first: true, predicate: ProgressBarAnnotationsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
ProgressBarComponent = __decorate([
    ComponentMixins([ComponentBase])
], ProgressBarComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-progressbar',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childAnnotations: new ContentChild(ProgressBarAnnotationsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the ProgressBar component.
 */
class ProgressBarModule {
}
ProgressBarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProgressBarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarModule, declarations: [ProgressBarComponent,
        ProgressBarAnnotationDirective,
        ProgressBarAnnotationsDirective], imports: [CommonModule], exports: [ProgressBarComponent,
        ProgressBarAnnotationDirective,
        ProgressBarAnnotationsDirective] });
ProgressBarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        ProgressBarComponent,
                        ProgressBarAnnotationDirective,
                        ProgressBarAnnotationsDirective
                    ],
                    exports: [
                        ProgressBarComponent,
                        ProgressBarAnnotationDirective,
                        ProgressBarAnnotationsDirective
                    ]
                }]
        }] });

const ProgressAnnotationService = { provide: 'ProgressBarProgressAnnotation', useValue: ProgressAnnotation };
/**
 * NgModule definition for the ProgressBar component with providers.
 */
class ProgressBarAllModule {
}
ProgressBarAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProgressBarAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarAllModule, imports: [CommonModule, ProgressBarModule], exports: [ProgressBarModule] });
ProgressBarAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarAllModule, providers: [
        ProgressAnnotationService
    ], imports: [[CommonModule, ProgressBarModule], ProgressBarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ProgressBarModule],
                    exports: [
                        ProgressBarModule
                    ],
                    providers: [
                        ProgressAnnotationService
                    ]
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { ProgressAnnotationService, ProgressBarAllModule, ProgressBarAnnotationDirective, ProgressBarAnnotationsDirective, ProgressBarComponent, ProgressBarModule };
//# sourceMappingURL=syncfusion-ej2-angular-progressbar.mjs.map
