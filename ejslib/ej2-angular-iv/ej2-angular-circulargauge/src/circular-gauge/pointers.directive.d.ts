import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
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
     * Sets and gets the type of pointer for an axis in Circular gauge component.
     * @default Needle
     */
    type: any;
    /**
     * Sets and gets the animation of pointers while rendering the axis in circular gauge.
     */
    animation: any;
    /**
     * Sets and gets the options to customize the color and width of the border for the needle pointer in an axis.
     */
    border: any;
    /**
     * Sets and gets the cap of pointer in an axis.
     */
    cap: any;
    /**
     * Sets and gets the color of the pointer in an axis.
     */
    color: any;
    /**
     * Sets and gets the information about pointer for assistive technology.
     * @default null
     */
    description: any;
    /**
     * Sets and gets the url for the image that is to be displayed as pointer.
     * It requires marker shape value to be Image.
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
     * Sets and gets the height of the marker pointer in an axis.
     * @default 5
     */
    markerHeight: any;
    /**
     * Sets and gets the shape of the marker type pointer in an axis.
     * @default Circle
     */
    markerShape: any;
    /**
     * Sets and gets the width of the marker pointer in an axis.
     * @default 5
     */
    markerWidth: any;
    /**
     * Sets or gets the end width of the needle pointer in an axis.
     * @default null
     */
    needleEndWidth: any;
    /**
     * Sets or gets the start width of the needle pointer in an axis.
     * @default null
     */
    needleStartWidth: any;
    /**
     * Sets and gets the tail of needle pointer in an axis.
     */
    needleTail: any;
    /**
     * Sets and gets the offset value of pointer from scale.
     * @default '0'
     */
    offset: any;
    /**
     * Sets and gets the width of the pointer in axis.
     * @default 20
     */
    pointerWidth: any;
    /**
     * Sets and gets the position of pointer for an axis.
     * @default Auto
     */
    position: any;
    /**
     * Sets and gets the properties to render a radial gradient for pointer.
     * @default null
     */
    radialGradient: any;
    /**
     * Sets and gets the radius of pointer for marker and range type pointer and fix length of pointer for needle pointer.
     * @default null
     */
    radius: any;
    /**
     * Sets and gets the corner radius for pointer in axis.
     * @default 0
     */
    roundedCornerRadius: any;
    /**
     * Sets and gets the text in pointer.
     * @default ''
     */
    text: any;
    /**
     * Sets and gets the style of text in pointer of an axis.
     */
    textStyle: any;
    /**
     * Sets and gets the value of the pointer in circular gauge component.
     * @aspdefaultvalueignore
     * @default null
     */
    value: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<PointerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PointerDirective, "e-pointers>e-pointer", never, { "animation": "animation"; "border": "border"; "cap": "cap"; "color": "color"; "description": "description"; "imageUrl": "imageUrl"; "linearGradient": "linearGradient"; "markerHeight": "markerHeight"; "markerShape": "markerShape"; "markerWidth": "markerWidth"; "needleEndWidth": "needleEndWidth"; "needleStartWidth": "needleStartWidth"; "needleTail": "needleTail"; "offset": "offset"; "pointerWidth": "pointerWidth"; "position": "position"; "radialGradient": "radialGradient"; "radius": "radius"; "roundedCornerRadius": "roundedCornerRadius"; "text": "text"; "textStyle": "textStyle"; "type": "type"; "value": "value"; }, {}, never>;
}
/**
 * Pointer Array Directive
 * @private
 */
export declare class PointersDirective extends ArrayBase<PointersDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<PointersDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PointersDirective, "ej-circulargauge>e-axes>e-axis>e-pointers", never, {}, {}, ["children"]>;
}
