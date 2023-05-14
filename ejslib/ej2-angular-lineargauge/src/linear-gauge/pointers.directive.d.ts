import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * Pointers directive
 * ```html
 * <e-pointers><e-pointer></e-pointer></e-pointers>
 * ```
 */
export declare class PointerDirective extends ComplexBase<PointerDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Sets and gets the type of pointer in axis.
     * @default Marker
     */
    type: any;
    /**
     * Sets and gets the duration of animation in pointer.
     * @default 0
     */
    animationDuration: any;
    /**
     * Sets and gets the options to optimize the color and width of the border for pointers.
     */
    border: any;
    /**
     * Sets and gets the color of the pointer.
     */
    color: any;
    /**
     * Sets and gets the description for the pointer.
     * @default null
     */
    description: any;
    /**
     * Enables or disables the drag movement of pointer.
     * @default false
     */
    enableDrag: any;
    /**
     * Sets and gets the height of the pointer.
     * @default 20
     */
    height: any;
    /**
     * Sets and gets the URL path for the image in marker when the marker type is chosen as image.
     * @default null
     */
    imageUrl: any;
    /**
     * Sets and gets the properties to render a linear gradient for the pointer.
     * If both linear and radial gradient is set, then the linear gradient will be rendered in the pointer.
     * @default null
     */
    linearGradient: any;
    /**
     * Sets and gets the type of the marker for pointers in axis.
     * @default InvertedTriangle
     */
    markerType: any;
    /**
     * Sets and gets the value to position the pointer from the axis.
     * @default '0'
     */
    offset: any;
    /**
     * Sets and gets the opacity of pointer in linear gauge.
     * @default 1
     */
    opacity: any;
    /**
     * Sets and gets the place of the pointer.
     * @default Far
     */
    placement: any;
    /**
     * Sets and gets the position of the pointer.
     * @default Auto
     */
    position: any;
    /**
     * Sets and gets the properties to render a radial gradient for the pointer.
     * @default null
     */
    radialGradient: any;
    /**
     * Sets and gets the corner radius for pointer.
     * @default 10
     */
    roundedCornerRadius: any;
    /**
     * Sets and gets the value of the pointer in axis.
     * @default null
     */
    value: any;
    /**
     * Sets and gets the width of the pointer.
     * @default 20
     */
    width: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * Pointer Array Directive
 * @private
 */
export declare class PointersDirective extends ArrayBase<PointersDirective> {
    constructor();
}
