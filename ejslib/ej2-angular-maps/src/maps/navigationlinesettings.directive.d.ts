import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-navigationLineSettings>
 * <e-navigationLineSetting>
 * </e-navigationLineSetting>
 * </e-navigationLineSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
export declare class NavigationLineDirective extends ComplexBase<NavigationLineDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Sets and gets the angle of curve connecting different locations in maps.
     * @default 0
     */
    angle: any;
    /**
     * Sets and gets the options to customize the arrow for the navigation line in maps.
     */
    arrowSettings: any;
    /**
     * Sets and gets the color for the navigation lines in maps.
     */
    color: any;
    /**
     * Sets and gets the dash-array for the navigation lines drawn in maps.
     * @default ''
     */
    dashArray: any;
    /**
     * Sets and gets the highlight settings of the navigation line in maps.
     */
    highlightSettings: any;
    /**
     * Sets and gets the latitude value for the navigation lines drawn in maps.
     * @default []
     */
    latitude: any;
    /**
     * Sets and gets the longitude for the navigation lines drawn in maps.
     * @default []
     */
    longitude: any;
    /**
     * Sets and gets the selection settings of the navigation line in maps.
     */
    selectionSettings: any;
    /**
     * Enables or disables the navigation lines to be drawn in maps.
     * @default false
     */
    visible: any;
    /**
     * Sets and gets the width of the navigation lines in maps.
     * @default 1
     */
    width: any;
    tooltipSettings_template: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * NavigationLine Array Directive
 * @private
 */
export declare class NavigationLinesDirective extends ArrayBase<NavigationLinesDirective> {
    constructor();
}
