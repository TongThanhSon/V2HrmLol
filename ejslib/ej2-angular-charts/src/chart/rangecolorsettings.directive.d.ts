import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * RangeColorSetting Directive
 * ```html
 * <e-rangeColorSettings><e-rangeColorSetting></e-rangeColorSetting><e-rangeColorSettings>
 * ```
 */
export declare class RangeColorSettingDirective extends ComplexBase<RangeColorSettingDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Specify the fill colors of point those lies on the given range, if multiple colors mentioned, then we need to fill gradient
     */
    colors: any;
    /**
     * Specify the end value of color mapping range
     */
    end: any;
    /**
     * Specify name for the range mapping item.
     */
    label: any;
    /**
     * Specify the start value of color mapping range
     */
    start: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * RangeColorSetting Array Directive
 * @private
 */
export declare class RangeColorSettingsDirective extends ArrayBase<RangeColorSettingsDirective> {
    constructor();
}
