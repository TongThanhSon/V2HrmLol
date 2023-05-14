import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * Annotation Directive
 * ```html
 * <e-maps-annotations>
 * <e-maps-annotation></e-maps-annotation>
 * </e-maps-annotations>
 * ```
 */
export declare class AnnotationDirective extends ComplexBase<AnnotationDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Sets and gets the annotation element to be aligned horizontally.
     * @default None
     */
    horizontalAlignment: any;
    /**
     * Sets and gets the annotation element to be aligned vertically.
     * @default None
     */
    verticalAlignment: any;
    /**
     * Sets and gets the x position of the annotation in maps component.
     */
    x: any;
    /**
     * Sets and gets the y position of the annotation in maps component.
     */
    y: any;
    /**
     * Sets and gets the z-index of the annotation in maps component.
     * @default '-1'
     */
    zIndex: any;
    /**
     * Sets and gets the content for the annotation in maps component.
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
