import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
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
}
/**
 * ProgressBarAnnotation Array Directive
 * @private
 */
export declare class ProgressBarAnnotationsDirective extends ArrayBase<ProgressBarAnnotationsDirective> {
    constructor();
}
