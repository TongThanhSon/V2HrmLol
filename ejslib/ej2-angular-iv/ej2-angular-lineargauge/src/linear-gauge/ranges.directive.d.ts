import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * Ranges directive
 * ```html
 * <e-ranges><e-range></e-range></e-ranges>
 * ```
 */
export declare class RangeDirective extends ComplexBase<RangeDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Sets and gets the options to customize the color and width of the border for the axis range.
     */
    border: any;
    /**
     * Sets and gets the color of the axis range.
     */
    color: any;
    /**
     * Sets and gets the end value for the range in axis.
     * @default 0
     */
    end: any;
    /**
     * Sets and gets the width of the end of the range in axis.
     * @default 10
     */
    endWidth: any;
    /**
     * Sets and gets the properties to render a linear gradient for the range.
     * If both linear and radial gradient is set, then the linear gradient will be rendered in the range.
     * @default null
     */
    linearGradient: any;
    /**
     * Sets and gets the value to position the range in the axis.
     * @default '0'
     */
    offset: any;
    /**
     * Sets and gets the position to place the ranges in the axis.
     * @default Outside
     */
    position: any;
    /**
     * Sets and gets the properties to render a radial gradient for the range.
     * @default null
     */
    radialGradient: any;
    /**
     * Sets and gets the start value for the range in axis.
     * @default 0
     */
    start: any;
    /**
     * Sets and gets the width of the start of the range in axis.
     * @default 10
     */
    startWidth: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<RangeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RangeDirective, "e-ranges>e-range", never, { "border": "border"; "color": "color"; "end": "end"; "endWidth": "endWidth"; "linearGradient": "linearGradient"; "offset": "offset"; "position": "position"; "radialGradient": "radialGradient"; "start": "start"; "startWidth": "startWidth"; }, {}, never>;
}
/**
 * Range Array Directive
 * @private
 */
export declare class RangesDirective extends ArrayBase<RangesDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<RangesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RangesDirective, "ej-lineargauge>e-axes>e-axis>e-ranges", never, {}, {}, ["children"]>;
}
