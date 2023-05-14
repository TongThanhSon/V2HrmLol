import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { AccumulationChart } from '@syncfusion/ej2-charts';
import { AccumulationSeriesCollectionDirective } from './series.directive';
import { AccumulationAnnotationsDirective } from './annotations.directive';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * AccumulationChart Component
 * ```html
 * <ejs-accumulationchart></ejs-accumulationchart>
 * ```
 */
export declare class AccumulationChartComponent extends AccumulationChart implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    afterExport: any;
    animationComplete: any;
    annotationRender: any;
    beforePrint: any;
    beforeResize: any;
    chartDoubleClick: any;
    chartMouseClick: any;
    chartMouseDown: any;
    chartMouseLeave: any;
    chartMouseMove: any;
    chartMouseUp: any;
    legendRender: any;
    load: any;
    loaded: any;
    pointClick: any;
    pointMove: any;
    pointRender: any;
    resized: any;
    selectionComplete: any;
    seriesRender: any;
    textRender: any;
    tooltipRender: any;
    dataSourceChange: any;
    childSeries: QueryList<AccumulationSeriesCollectionDirective>;
    childAnnotations: QueryList<AccumulationAnnotationsDirective>;
    tags: string[];
    tooltip_template: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
}
