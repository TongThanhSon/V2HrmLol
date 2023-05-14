import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer></e-layer>
 * </e-layers>
 * ```
 */
export declare class LayerDirective extends ComplexBase<LayerDirective> {
    private viewContainerRef;
    directivePropList: any;
    childInitialShapeSelection: any;
    childMarkerSettings: any;
    childBubbleSettings: any;
    childNavigationLineSettings: any;
    tags: string[];
    /**
     * Sets and gets the type of the layer in maps.
     * @default Layer
     */
    type: any;
    /**
     * Sets and gets the duration for the animation of layers in maps.
     * @default 0
     */
    animationDuration: any;
    /**
     * Sets and gets the Bing map type for the layer. If you use shape data with BingMapType without using layer type as Bing,
     * then the map will render based on shape data since default layer type will be set as Geometry.
     * @default Aerial
     */
    bingMapType: any;
    /**
     * Sets and gets the options for customizing the bubble in maps.
     */
    bubbleSettings: any;
    /**
     * Sets and gets the options for customizing the data-label in maps.
     */
    dataLabelSettings: any;
    /**
     * * Sets and gets the data source for the layer.
     * * The data source can contain data that can be bound to the tooltip, marker, and bubble.
     * @isobservable true
     * @default []
     */
    dataSource: any;
    /**
     * Sets and gets the geometry type for the layer in maps.
     * @default Geographic
     */
    geometryType: any;
    /**
     * Sets and gets the options for customizing the shapes when the mouse has hovered on maps.
     */
    highlightSettings: any;
    /**
     * Sets and gets the settings for shapes that is selected at the time of rendering.
     */
    initialShapeSelection: any;
    /**
     * Sets and gets the key for the tile map layer in maps.
     * @default ''
     */
    key: any;
    /**
     * Sets and gets the type of the layer in maps. If we use layer type with shape data property in layer of the maps
     * then map will render based on the provided layer type.
     * @default Geometry
     */
    layerType: any;
    /**
     * Sets and gets the options for customizing the cluster of markers in maps.
     */
    markerClusterSettings: any;
    /**
     * Sets and gets the options for customizing the marker in maps.
     */
    markerSettings: any;
    /**
     * Sets and gets the options for customizing the navigation line in maps.
     */
    navigationLineSettings: any;
    /**
     * Sets and gets the query to select particular data from the shape data.
     * This property is applicable only when the data source is created by data manager.
     * @default null
     */
    query: any;
    /**
     * Sets and gets the options for customizing the shapes when clicking the shapes in maps.
     */
    selectionSettings: any;
    /**
     * Sets and gets the shape data for the maps to render.
     * @isobservable true
     * @default null
     */
    shapeData: any;
    /**
     * Sets and gets the path for the shape from the shape data in maps.
     * @default 'name'
     */
    shapeDataPath: any;
    /**
     * Sets and gets the path for the layers from the layer data source in maps.
     * @default 'name'
     */
    shapePropertyPath: any;
    /**
     * Sets and gets the options to customize the shape of the maps.
     */
    shapeSettings: any;
    /**
     * Sets and gets the type of the static maps.
     * @default RoadMap
     */
    staticMapType: any;
    /**
     * Sets and gets the options for customizing the toggle state of shapes when selecting the legend in maps.
     */
    toggleLegendSettings: any;
    /**
     * Sets and gets the options for customizing the tooltip for the layers, markers, and bubbles in maps.
     */
    tooltipSettings: any;
    /**
     * Sets and gets the template for the map using the url.
     * @default 'https://a.tile.openstreetmap.org/level/tileX/tileY.png'
     */
    urlTemplate: any;
    /**
     * Enables or disables the visibility state for the layers in maps.
     * @default true
     */
    visible: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<LayerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LayerDirective, "e-layers>e-layer", never, { "animationDuration": "animationDuration"; "bingMapType": "bingMapType"; "bubbleSettings": "bubbleSettings"; "dataLabelSettings": "dataLabelSettings"; "dataSource": "dataSource"; "geometryType": "geometryType"; "highlightSettings": "highlightSettings"; "initialShapeSelection": "initialShapeSelection"; "key": "key"; "layerType": "layerType"; "markerClusterSettings": "markerClusterSettings"; "markerSettings": "markerSettings"; "navigationLineSettings": "navigationLineSettings"; "query": "query"; "selectionSettings": "selectionSettings"; "shapeData": "shapeData"; "shapeDataPath": "shapeDataPath"; "shapePropertyPath": "shapePropertyPath"; "shapeSettings": "shapeSettings"; "staticMapType": "staticMapType"; "toggleLegendSettings": "toggleLegendSettings"; "tooltipSettings": "tooltipSettings"; "type": "type"; "urlTemplate": "urlTemplate"; "visible": "visible"; }, {}, ["childInitialShapeSelection", "childMarkerSettings", "childBubbleSettings", "childNavigationLineSettings"]>;
}
/**
 * Layer Array Directive
 * @private
 */
export declare class LayersDirective extends ArrayBase<LayersDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<LayersDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LayersDirective, "ej-maps>e-layers", never, {}, {}, ["children"]>;
}
