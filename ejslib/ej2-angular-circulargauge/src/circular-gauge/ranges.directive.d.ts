import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
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
     * Sets and gets the color of the ranges in circular gauge component.
     * @aspdefaultvalueignore
     * @default null
     */
    color: any;
    /**
     * Sets and gets the end value of the range in circular gauge component.
     * @aspdefaultvalueignore
     * @default 0
     */
    end: any;
    /**
     * Sets and gets the width for the end of the range in the circular gauge component.
     * @default '10'
     */
    endWidth: any;
    /**
     * Sets and gets the text for the legend in the circular gauge component.
     * @default ''
     */
    legendText: any;
    /**
     * Sets and gets the properties to render a linear gradient for the range.
     * If both linear and radial gradient is set, then the linear gradient will be rendered in the range.
     * @default null
     */
    linearGradient: any;
    /**
     * Sets and gets the offset value of range in circular gauge component.
     * @default '0'
     */
    offset: any;
    /**
     * Sets and gets the opacity for the ranges in circular gauge component.
     * @default 1
     */
    opacity: any;
    /**
     * Sets and gets the position of the range and pointer for an axis in circular gauge component.
     * @default Auto
     */
    position: any;
    /**
     * Sets and gets the properties to render a radial gradient for the range.
     * @default null
     */
    radialGradient: any;
    /**
     * Sets and gets the radius of the range for circular gauge component.
     * @default null
     */
    radius: any;
    /**
     * Sets and gets the corner radius for ranges in circular gauge component.
     * @default 0
     */
    roundedCornerRadius: any;
    /**
     * Sets and gets the start value of the range in circular gauge component.
     * @aspdefaultvalueignore
     * @default 0
     */
    start: any;
    /**
     * Sets and gets the width for the start of the range in the circular gauge component.
     * @default '10'
     */
    startWidth: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * Range Array Directive
 * @private
 */
export declare class RangesDirective extends ArrayBase<RangesDirective> {
    constructor();
}
