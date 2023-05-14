import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * Axes directive
 * ```html
 * <e-axes><e-axis></e-axis></e-axes>
 * ```
 */
export declare class AxisDirective extends ComplexBase<AxisDirective> {
    private viewContainerRef;
    directivePropList: any;
    childAnnotations: any;
    childRanges: any;
    childPointers: any;
    tags: string[];
    /**
     * Sets and gets the annotation element for an axis in circular gauge component.
     */
    annotations: any;
    /**
     * Sets and gets the background color of an axis. This property accepts value in hex code, rgba string as a valid CSS color string.
     * @default null
     */
    background: any;
    /**
     * Sets and gets the direction of an axis.
     * @default ClockWise
     */
    direction: any;
    /**
     * Sets and gets the end angle of an axis in circular gauge component.
     * @default 160
     */
    endAngle: any;
    /**
     * Enables and disables the intersecting labels to be hidden in axis.
     * @default false
     */
    hideIntersectingLabel: any;
    /**
     * Sets and gets the style of the axis label in circular gauge component.
     */
    labelStyle: any;
    /**
     * Sets and gets the style of the line in axis of circular gauge component.
     */
    lineStyle: any;
    /**
     * Sets and gets the major tick lines of an axis in circular gauge component.
     * @default { width: 2, height: 10 }
     */
    majorTicks: any;
    /**
     * Sets and gets the maximum value of an axis in the circular gauge component.
     * @aspdefaultvalueignore
     * @default null
     */
    maximum: any;
    /**
     * Sets and gets the minimum value of an axis in the circular gauge component.
     * @aspdefaultvalueignore
     * @default null
     */
    minimum: any;
    /**
     * Sets and gets the minor tick lines of an axis in circular gauge component.
     * @default { width: 2, height: 5 }
     */
    minorTicks: any;
    /**
     * Sets and gets the pointers of an axis in circular gauge component.
     */
    pointers: any;
    /**
     * Sets and gets the radius of an axis in circular gauge.
     * @default null
     */
    radius: any;
    /**
     * Sets and gets the gap between the ranges by specified value in circular gauge component.
     * @default null
     */
    rangeGap: any;
    /**
     * Sets and gets the ranges of an axis in circular gauge component.
     */
    ranges: any;
    /**
     * Sets and gets the rounding Off value in the label in an axis.
     * @default null
     */
    roundingPlaces: any;
    /**
     * Enables and disables the last label of axis when it is hidden in circular gauge component.
     * @default false
     */
    showLastLabel: any;
    /**
     * Enables and disables the start and end gap between the ranges and axis in circular gauge.
     * @default false
     */
    startAndEndRangeGap: any;
    /**
     * Sets and gets the start angle of an axis in circular gauge component.
     * @default 200
     */
    startAngle: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<AxisDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AxisDirective, "e-axes>e-axis", never, { "annotations": "annotations"; "background": "background"; "direction": "direction"; "endAngle": "endAngle"; "hideIntersectingLabel": "hideIntersectingLabel"; "labelStyle": "labelStyle"; "lineStyle": "lineStyle"; "majorTicks": "majorTicks"; "maximum": "maximum"; "minimum": "minimum"; "minorTicks": "minorTicks"; "pointers": "pointers"; "radius": "radius"; "rangeGap": "rangeGap"; "ranges": "ranges"; "roundingPlaces": "roundingPlaces"; "showLastLabel": "showLastLabel"; "startAndEndRangeGap": "startAndEndRangeGap"; "startAngle": "startAngle"; }, {}, ["childAnnotations", "childRanges", "childPointers"]>;
}
/**
 * Axis Array Directive
 * @private
 */
export declare class AxesDirective extends ArrayBase<AxesDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<AxesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AxesDirective, "ej-circulargauge>e-axes", never, {}, {}, ["children"]>;
}
