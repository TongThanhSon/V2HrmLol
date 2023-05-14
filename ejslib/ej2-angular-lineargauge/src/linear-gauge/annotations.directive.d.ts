import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * Annotation directive
 * ```html
 * <e-annotations><e-annotation></e-annotation></e-annotations>
 * ```
 */
export declare class AnnotationDirective extends ComplexBase<AnnotationDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Sets and gets the axis index of the linear gauge
     * @aspdefaultvalueignore
     */
    axisIndex: any;
    /**
     * Sets and gets the value of axis in linear gauge.
     * @aspdefaultvalueignore
     */
    axisValue: any;
    /**
     * Sets and gets the options to customize the font of the annotation in linear gauge.
     */
    font: any;
    /**
     * Sets and gets the horizontal alignment of annotation.
     * @default None
     */
    horizontalAlignment: any;
    /**
     * Sets and gets the vertical alignment of annotation.
     * @default None
     */
    verticalAlignment: any;
    /**
     * Sets and gets the x position for the annotation in linear gauge.
     */
    x: any;
    /**
     * Sets and gets the y position for the annotation in linear gauge.
     */
    y: any;
    /**
     * Sets and gets the z-index of the annotation.
     * @default '-1'
     */
    zIndex: any;
    /**
     * Sets and gets the content for the annotations.
     */
    content: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * Annotation Array Directive
 * @private
 */
export declare class AnnotationsDirective extends ArrayBase<AnnotationsDirective> {
    constructor();
}
