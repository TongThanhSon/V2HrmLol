import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
export declare class ColorMappingDirective extends ComplexBase<ColorMappingDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Sets and gets the color for the color-mapping in treemap.
     * @default null
     */
    color: any;
    /**
     * Sets and gets the value from which the range of color mapping starts.
     * @default null
     */
    from: any;
    /**
     * Sets and gets the label text for the legend based on color mapping.
     * @default null
     */
    label: any;
    /**
     * Sets and gets the maximum opacity for the color-mapping in the treemap component.
     * @default null
     */
    maxOpacity: any;
    /**
     * Sets and gets the minimum opacity for the color-mapping in the treemap component.
     * @default null
     */
    minOpacity: any;
    /**
     * Enables or disables the visibility of the legend for color mapping in the treemap component.
     * @default true
     */
    showLegend: any;
    /**
     * Sets and gets the value to which the range of color mapping ends.
     * @default null
     */
    to: any;
    /**
     * Sets and gets the value for the color-mapping from the data source.
     * @default null
     */
    value: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * ColorMapping Array Directive
 * @private
 */
export declare class ColorMappingsDirective extends ArrayBase<ColorMappingsDirective> {
    constructor();
}
