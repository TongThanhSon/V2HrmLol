import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Maps } from '@syncfusion/ej2-maps';
import { LayersDirective } from './layers.directive';
import { AnnotationsDirective } from './annotations.directive';
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
    onclick: any;
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
}
