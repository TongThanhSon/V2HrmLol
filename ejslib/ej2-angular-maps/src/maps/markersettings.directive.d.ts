import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-markerSettings>
 * <e-markerSetting>
 * </e-markerSetting>
 * </e-markerSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
export declare class MarkerDirective extends ComplexBase<MarkerDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Sets and gets the delay time for the animation in marker.
     * @default 0
     */
    animationDelay: any;
    /**
     * Sets and gets the duration time for animating the marker.
     * @default 1000
     */
    animationDuration: any;
    /**
     * Sets and gets the options for customizing the color and width of the border for the marker in maps.
     */
    border: any;
    /**
     * Sets and gets the value path from the marker data source to apply color for the marker.
     * @default null
     */
    colorValuePath: any;
    /**
     * Sets and gets the dash-array for the marker.
     */
    dashArray: any;
    /**
     * Sets and gets the data source for the marker.
     * The data source for the marker will contain latitude and longitude values to specify the location
     * of the marker.
     * The data source can contain data such as color, shape, and other details that can be bound to the color, shape,
     * and tooltip of the marker.
     * @isobservable true
     * @default []
     */
    dataSource: any;
    /**
     * Sets and gets the color for the marker in maps.
     * @default '#FF471A'
     */
    fill: any;
    /**
     * Sets and gets the height of the marker in maps.
     * @default 10
     */
    height: any;
    /**
     * Sets and gets the options to customize the marker while the mouse has hovered on the marker in maps.
     */
    highlightSettings: any;
    /**
     * Sets and gets the URL for rendering the marker as image.
     */
    imageUrl: any;
    /**
     * Sets and gets the value path from the marker data source for the image of the marker.
     * @default null
     */
    imageUrlValuePath: any;
    /**
     * To select the shape at the rendering time.
     */
    initialMarkerSelection: any;
    /**
     * Defines the value path from the marker data source for setting latitude for a set of markers.
     */
    latitudeValuePath: any;
    /**
     * Sets and gets the text for the legend from the marker data source.
     * @default ''
     */
    legendText: any;
    /**
     * Defines the value path from the marker data source for setting longitude for a set of markers.
     */
    longitudeValuePath: any;
    /**
     * Sets and gets the position to move the marker by setting specific value.
     */
    offset: any;
    /**
     * Sets and gets the opacity for the marker in maps.
     * @default 1
     */
    opacity: any;
    /**
     * Sets and gets the query to select particular data from the marker data.
     * This property is applicable only when the data source is created by data manager.
     * @default null
     */
    query: any;
    /**
     * Sets and gets the options to customize the marker while selecting the marker in maps.
     */
    selectionSettings: any;
    /**
     * Sets and gets the shape of the marker in maps.
     * @default Balloon
     */
    shape: any;
    /**
     * Sets and gets the value path from the marker data source to set the shape of the marker.
     * @default null
     */
    shapeValuePath: any;
    /**
     * Sets and gets the options to customize the tooltip for the marker in maps.
     */
    tooltipSettings: any;
    /**
     * Enables or disables the visibility state of the marker based on the marker data source in maps.
     * @default false
     */
    visible: any;
    /**
     * Sets and gets the width of the marker in maps.
     * @default 10
     */
    width: any;
    /**
     * Sets and gets the template for the marker.
     * @default null
     */
    template: any;
    tooltipSettings_template: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * Marker Array Directive
 * @private
 */
export declare class MarkersDirective extends ArrayBase<MarkersDirective> {
    constructor();
}
