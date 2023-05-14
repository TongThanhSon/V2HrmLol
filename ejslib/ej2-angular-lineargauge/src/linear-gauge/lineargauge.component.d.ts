import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { LinearGauge } from '@syncfusion/ej2-lineargauge';
import { AxesDirective } from './axes.directive';
import { AnnotationsDirective } from './annotations.directive';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Linear Gauge Component
 * ```html
 * <ej-lineargauge></ej-lineargauge>
 * ```
 */
export declare class LinearGaugeComponent extends LinearGauge implements IComponentBase {
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
    load: any;
    loaded: any;
    resized: any;
    tooltipRender: any;
    valueChange: any;
    childAxes: QueryList<AxesDirective>;
    childAnnotations: QueryList<AnnotationsDirective>;
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
