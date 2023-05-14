import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorMappingDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ColorMappingDirective, "e-levels>e-colorMappings>e-colorMapping", never, { "color": "color"; "from": "from"; "label": "label"; "maxOpacity": "maxOpacity"; "minOpacity": "minOpacity"; "showLegend": "showLegend"; "to": "to"; "value": "value"; }, {}, never>;
}
/**
 * ColorMapping Array Directive
 * @private
 */
export declare class ColorMappingsDirective extends ArrayBase<ColorMappingsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorMappingsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ColorMappingsDirective, "e-levels>e-colorMappings", never, {}, {}, ["children"]>;
}
