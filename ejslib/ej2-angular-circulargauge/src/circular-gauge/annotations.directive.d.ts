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
     * Sets and gets the angle for annotation with respect to axis in circular gauge component.
     * @default 90
     */
    angle: any;
    /**
     * Enables and disables the annotation rotation along the axis.
     * @default false
     */
    autoAngle: any;
    /**
     * Sets and gets the information about annotation for assistive technology.
     * @default null
     */
    description: any;
    /**
     * Sets and gets the radius for annotation with respect to axis in circular gauge component.
     * @default '50%'
     */
    radius: any;
    /**
     * Sets and gets the style of the text in annotation.
     */
    textStyle: any;
    /**
     * Sets and gets the z-index of an annotation in an axis in the circular gauge component.
     * @default '-1'
     */
    zIndex: any;
    /**
     * Sets and gets the content of the annotation. This property accepts the id of the custom element.
     * @default null
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
