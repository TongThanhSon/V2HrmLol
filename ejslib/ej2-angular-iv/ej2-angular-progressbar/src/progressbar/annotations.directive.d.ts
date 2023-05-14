import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * ProgressBarAnnotations Directive
 * ```html
 * <e-progressbar-annotations>
 * <e-progressbar-annotation></e-progressbar-annotation>
 * </e-progressbar-annotations>
 * ```
 */
export declare class ProgressBarAnnotationDirective extends ComplexBase<ProgressBarAnnotationDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * to move annotation
     * @default 0
     */
    annotationAngle: any;
    /**
     * to move annotation
     * @default '0%'
     */
    annotationRadius: any;
    /**
     * Content of the annotation, which accepts the id of the custom element.
     * @default null
     */
    content: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarAnnotationDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ProgressBarAnnotationDirective, "e-progressbar-annotations>e-progressbar-annotation", never, { "annotationAngle": "annotationAngle"; "annotationRadius": "annotationRadius"; "content": "content"; }, {}, ["content"]>;
}
/**
 * ProgressBarAnnotation Array Directive
 * @private
 */
export declare class ProgressBarAnnotationsDirective extends ArrayBase<ProgressBarAnnotationsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarAnnotationsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ProgressBarAnnotationsDirective, "ej-progressbar>e-progressbar-annotations", never, {}, {}, ["children"]>;
}
