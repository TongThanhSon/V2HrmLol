import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * ColorMapping Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-colorMappings>
 * <e-colorMapping>
 * </e-colorMapping>
 * </e-colorMappings>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
export declare class ColorMappingDirective extends ComplexBase<ColorMappingDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Sets and gets the color for the color-mapping in maps.
     * @default null
     */
    color: any;
    /**
     * Sets and gets the value from where the range color-mapping starts.
     * @aspdefaultvalueignore
     * @default null
     */
    from: any;
    /**
     * Sets and gets the label for the color-mapping from the data source in maps.
     * @default null
     */
    label: any;
    /**
     * Sets and gets the maximum opacity for the color-mapping in maps.
     * @default null
     */
    maxOpacity: any;
    /**
     * Sets and gets the minimum opacity for the color-mapping in maps.
     * @default null
     */
    minOpacity: any;
    /**
     * Enables or disables the visibility state of legend for the color-mapping shapes in maps.
     * @default true
     */
    showLegend: any;
    /**
     * Sets and gets the value to where the range color-mapping ends.
     * @aspdefaultvalueignore
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
    static ɵdir: i0.ɵɵDirectiveDeclaration<ColorMappingDirective, "e-bubbleSettings>e-colorMappings>e-colorMapping", never, { "color": "color"; "from": "from"; "label": "label"; "maxOpacity": "maxOpacity"; "minOpacity": "minOpacity"; "showLegend": "showLegend"; "to": "to"; "value": "value"; }, {}, never>;
}
/**
 * ColorMapping Array Directive
 * @private
 */
export declare class ColorMappingsDirective extends ArrayBase<ColorMappingsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorMappingsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ColorMappingsDirective, "e-bubbleSettings>e-colorMappings", never, {}, {}, ["children"]>;
}
