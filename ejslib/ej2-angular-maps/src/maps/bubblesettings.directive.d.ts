import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-bubbleSetting>
 * </e-bubbleSetting>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
export declare class BubbleDirective extends ComplexBase<BubbleDirective> {
    private viewContainerRef;
    directivePropList: any;
    childColorMapping: any;
    tags: string[];
    /**
     * Sets and gets the delay in animation for bubble in maps.
     * @default 0
     */
    animationDelay: any;
    /**
     * Sets and gets the duration for the animation for bubble in maps.
     * @default 1000
     */
    animationDuration: any;
    /**
     * Sets and gets the options to customize the color and width of the border for the bubble in maps.
     */
    border: any;
    /**
     * Sets and gets the type of the bubble in maps.
     * @default Circle
     */
    bubbleType: any;
    /**
     * Sets and gets the color-mapping for the bubble in maps.
     * @default []
     */
    colorMapping: any;
    /**
     * Sets and gets the value from the data source of bubble settings for the color of the bubble in maps.
     * @default null
     */
    colorValuePath: any;
    /**
     * Sets and gets the data source for the bubble.
     * The data source must contain the size value of the bubble that can be bound to the bubble
     * of the Maps using the valuePath property in the bubbleSettings.
     * The data source can contain data such as color, and the other information that can be bound to the bubble, and tooltip of the bubble.
     * @isobservable true
     * @default []
     */
    dataSource: any;
    /**
     * Sets and gets the color for the bubble in maps.
     * @default ''
     */
    fill: any;
    /**
     * Sets and gets the highlight settings for the bubble in maps.
     */
    highlightSettings: any;
    /**
     * Sets and gets the maximum radius for the bubble in maps.
     * @default 20
     */
    maxRadius: any;
    /**
     * Sets and gets the minimum radius for the bubble in maps.
     * @default 10
     */
    minRadius: any;
    /**
     * Sets and gets the opacity of the bubble in maps.
     * @default 1
     */
    opacity: any;
    /**
     * Sets and gets the query to select particular data from the bubble data.
     * This property is applicable only when the data source is created by data manager.
     * @default null
     */
    query: any;
    /**
     * Sets and gets the selection settings for the bubble in maps.
     */
    selectionSettings: any;
    /**
     * Sets and gets the options to customize the tooltip for the bubbles in maps.
     */
    tooltipSettings: any;
    /**
     * Sets and gets the value from the data source of bubble settings for the bubble to be rendered in maps.
     * @default null
     */
    valuePath: any;
    /**
     * Enables or disables the visibility state of the bubbles in maps.
     * @default false
     */
    visible: any;
    tooltipSettings_template: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * Bubble Array Directive
 * @private
 */
export declare class BubblesDirective extends ArrayBase<BubblesDirective> {
    constructor();
}
