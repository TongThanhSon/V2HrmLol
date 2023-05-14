import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * Level Directive
 * ```html
 * <e-levels>
 * <e-level></e-level>
 * </e-levels>
 * ```
 */
export declare class LevelDirective extends ComplexBase<LevelDirective> {
    private viewContainerRef;
    directivePropList: any;
    childColorMapping: any;
    tags: string[];
    /**
     * Enables or disables the automatic filling of the colors in the items in the treemap component.
     * @default false
     */
    autoFill: any;
    /**
     * Sets and gets the options for customizing the color and width of the border of
     * the levels of the treemap component.
     */
    border: any;
    /**
     * Sets and gets the options for customizing the color-mapping in the treemap component.
     */
    colorMapping: any;
    /**
     * Sets and gets the fill color of the level in the treemap component.
     * @default null
     */
    fill: any;
    /**
     * Sets and gets the gap between the levels in the treemap component.
     * @default 0
     */
    groupGap: any;
    /**
     * Sets and gets the padding of levels in the treemap component.
     * @default 10
     */
    groupPadding: any;
    /**
     * Sets and gets the value path from the data source in the treemap component to render the item.
     * @default null
     */
    groupPath: any;
    /**
     * Sets and gets the alignment of the header of the treemap component.
     * @default 'Near'
     */
    headerAlignment: any;
    /**
     * Sets and gets the format of header of the levels in the treemap component.
     * @default null
     */
    headerFormat: any;
    /**
     * Sets and gets the height of header in the treemap component.
     * @default 20
     */
    headerHeight: any;
    /**
     * Sets and gets the options for customizing the style of header of the treemap component.
     */
    headerStyle: any;
    /**
     * Sets and gets the opacity in the treemap component.
     * @default 1
     */
    opacity: any;
    /**
     * Shows or hides the header in level of the treemap component.
     * @default true
     */
    showHeader: any;
    /**
     * Sets and gets the options for customizing the template position of the treemap component.
     * @default 'TopLeft'
     */
    templatePosition: any;
    /**
     * Sets and gets the template for header in the treemap component.
     * @default null
     */
    headerTemplate: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * Level Array Directive
 * @private
 */
export declare class LevelsDirective extends ArrayBase<LevelsDirective> {
    constructor();
}
