import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { CircularGauge } from '@syncfusion/ej2-circulargauge';
import { AxesDirective } from './axes.directive';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Circular Gauge Component
 * ```html
 * <ej-circulargauge></ej-circulargauge>
 * ```
 */
export declare class CircularGaugeComponent extends CircularGauge implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    animationComplete: any;
    annotationRender: any;
    axisLabelRender: any;
    beforePrint: any;
    dragEnd: any;
    dragMove: any;
    dragStart: any;
    gaugeMouseDown: any;
    gaugeMouseLeave: any;
    gaugeMouseMove: any;
    gaugeMouseUp: any;
    legendRender: any;
    load: any;
    loaded: any;
    radiusCalculate: any;
    resized: any;
    tooltipRender: any;
    childAxes: QueryList<AxesDirective>;
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
