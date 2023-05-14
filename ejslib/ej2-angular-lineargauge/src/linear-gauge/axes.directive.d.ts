import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * Axes directive
 * ```html
 * <e-axes><e-axis></e-axis></e-axes>
 * ```
 */
export declare class AxisDirective extends ComplexBase<AxisDirective> {
    private viewContainerRef;
    directivePropList: any;
    childRanges: any;
    childPointers: any;
    tags: string[];
    /**
     * Enables or disables the inversed axis.
     */
    isInversed: any;
    /**
     * Sets and gets the options for customizing the appearance of the label in axis.
     */
    labelStyle: any;
    /**
     * Sets and gets the options for customizing the axis line.
     */
    line: any;
    /**
     * Sets and gets the options for customizing the major tick lines.
     */
    majorTicks: any;
    /**
     * Sets and gets the maximum value for the axis.
     * @default 100
     */
    maximum: any;
    /**
     * Sets and gets the minimum value for the axis.
     * @default 0
     */
    minimum: any;
    /**
     * Sets and gets the options for customizing the minor tick lines.
     */
    minorTicks: any;
    /**
     * Enables or disables the opposed position of the axis in the linear gauge.
     */
    opposedPosition: any;
    /**
     * Sets and gets the options for customizing the pointers of an axis.
     */
    pointers: any;
    /**
     * Sets and gets the options for customizing the ranges of an axis.
     */
    ranges: any;
    /**
     * Shows or hides the last label in the axis of the linear gauge.
     */
    showLastLabel: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * Axis Array Directive
 * @private
 */
export declare class AxesDirective extends ArrayBase<AxesDirective> {
    constructor();
}
