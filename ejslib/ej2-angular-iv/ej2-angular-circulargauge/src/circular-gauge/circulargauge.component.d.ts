import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { CircularGauge } from '@syncfusion/ej2-circulargauge';
import { AxesDirective } from './axes.directive';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<CircularGaugeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CircularGaugeComponent, "ejs-circulargauge", never, { "allowImageExport": "allowImageExport"; "allowMargin": "allowMargin"; "allowPdfExport": "allowPdfExport"; "allowPrint": "allowPrint"; "axes": "axes"; "background": "background"; "border": "border"; "centerX": "centerX"; "centerY": "centerY"; "description": "description"; "enablePersistence": "enablePersistence"; "enablePointerDrag": "enablePointerDrag"; "enableRangeDrag": "enableRangeDrag"; "enableRtl": "enableRtl"; "height": "height"; "legendSettings": "legendSettings"; "locale": "locale"; "margin": "margin"; "moveToCenter": "moveToCenter"; "tabIndex": "tabIndex"; "theme": "theme"; "title": "title"; "titleStyle": "titleStyle"; "tooltip": "tooltip"; "useGroupingSeparator": "useGroupingSeparator"; "width": "width"; }, { "animationComplete": "animationComplete"; "annotationRender": "annotationRender"; "axisLabelRender": "axisLabelRender"; "beforePrint": "beforePrint"; "dragEnd": "dragEnd"; "dragMove": "dragMove"; "dragStart": "dragStart"; "gaugeMouseDown": "gaugeMouseDown"; "gaugeMouseLeave": "gaugeMouseLeave"; "gaugeMouseMove": "gaugeMouseMove"; "gaugeMouseUp": "gaugeMouseUp"; "legendRender": "legendRender"; "load": "load"; "loaded": "loaded"; "radiusCalculate": "radiusCalculate"; "resized": "resized"; "tooltipRender": "tooltipRender"; }, ["tooltip_template", "childAxes"], never>;
}
