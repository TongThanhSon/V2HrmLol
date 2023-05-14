import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Maps } from '@syncfusion/ej2-maps';
import { LayersDirective } from './layers.directive';
import { AnnotationsDirective } from './annotations.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents Maps Component
 * ```html
 * <ej-maps></ej-maps>
 * ```
 */
export declare class MapsComponent extends Maps implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    animationComplete: any;
    annotationRendering: any;
    beforePrint: any;
    bubbleClick: any;
    bubbleMouseMove: any;
    bubbleRendering: any;
    click: any;
    dataLabelRendering: any;
    doubleClick: any;
    itemHighlight: any;
    itemSelection: any;
    layerRendering: any;
    legendRendering: any;
    load: any;
    loaded: any;
    markerClick: any;
    markerClusterClick: any;
    markerClusterMouseMove: any;
    markerClusterRendering: any;
    markerMouseMove: any;
    markerRendering: any;
    pan: any;
    resize: any;
    rightClick: any;
    shapeHighlight: any;
    shapeRendering: any;
    shapeSelected: any;
    tooltipRender: any;
    tooltipRenderComplete: any;
    zoom: any;
    dataSourceChange: any;
    childLayers: QueryList<LayersDirective>;
    childAnnotations: QueryList<AnnotationsDirective>;
    tags: string[];
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapsComponent, "ejs-maps", never, { "allowImageExport": "allowImageExport"; "allowPdfExport": "allowPdfExport"; "allowPrint": "allowPrint"; "annotations": "annotations"; "background": "background"; "baseLayerIndex": "baseLayerIndex"; "border": "border"; "centerPosition": "centerPosition"; "description": "description"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "format": "format"; "height": "height"; "layers": "layers"; "legendSettings": "legendSettings"; "locale": "locale"; "mapsArea": "mapsArea"; "margin": "margin"; "projectionType": "projectionType"; "tabIndex": "tabIndex"; "theme": "theme"; "titleSettings": "titleSettings"; "tooltipDisplayMode": "tooltipDisplayMode"; "useGroupingSeparator": "useGroupingSeparator"; "width": "width"; "zoomSettings": "zoomSettings"; }, { "animationComplete": "animationComplete"; "annotationRendering": "annotationRendering"; "beforePrint": "beforePrint"; "bubbleClick": "bubbleClick"; "bubbleMouseMove": "bubbleMouseMove"; "bubbleRendering": "bubbleRendering"; "click": "click"; "dataLabelRendering": "dataLabelRendering"; "doubleClick": "doubleClick"; "itemHighlight": "itemHighlight"; "itemSelection": "itemSelection"; "layerRendering": "layerRendering"; "legendRendering": "legendRendering"; "load": "load"; "loaded": "loaded"; "markerClick": "markerClick"; "markerClusterClick": "markerClusterClick"; "markerClusterMouseMove": "markerClusterMouseMove"; "markerClusterRendering": "markerClusterRendering"; "markerMouseMove": "markerMouseMove"; "markerRendering": "markerRendering"; "pan": "pan"; "resize": "resize"; "rightClick": "rightClick"; "shapeHighlight": "shapeHighlight"; "shapeRendering": "shapeRendering"; "shapeSelected": "shapeSelected"; "tooltipRender": "tooltipRender"; "tooltipRenderComplete": "tooltipRenderComplete"; "zoom": "zoom"; "dataSourceChange": "dataSourceChange"; }, ["childLayers", "childAnnotations"], never>;
}
