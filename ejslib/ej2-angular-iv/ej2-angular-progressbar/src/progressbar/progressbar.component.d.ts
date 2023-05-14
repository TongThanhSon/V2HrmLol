import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { ProgressBar } from '@syncfusion/ej2-progressbar';
import { ProgressBarAnnotationsDirective } from './annotations.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * ProgressBar Component
 * ```html
 * <ejsprogressbar></ejsprogressbar>
 * ```
 */
export declare class ProgressBarComponent extends ProgressBar implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    animationComplete: any;
    load: any;
    loaded: any;
    mouseClick: any;
    mouseDown: any;
    mouseLeave: any;
    mouseMove: any;
    mouseUp: any;
    progressCompleted: any;
    textRender: any;
    valueChanged: any;
    childAnnotations: QueryList<ProgressBarAnnotationsDirective>;
    tags: string[];
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBarComponent, "ejs-progressbar", never, { "animation": "animation"; "annotations": "annotations"; "cornerRadius": "cornerRadius"; "enablePersistence": "enablePersistence"; "enablePieProgress": "enablePieProgress"; "enableProgressSegments": "enableProgressSegments"; "enableRtl": "enableRtl"; "endAngle": "endAngle"; "gapWidth": "gapWidth"; "height": "height"; "innerRadius": "innerRadius"; "isActive": "isActive"; "isGradient": "isGradient"; "isIndeterminate": "isIndeterminate"; "isStriped": "isStriped"; "labelOnTrack": "labelOnTrack"; "labelStyle": "labelStyle"; "locale": "locale"; "margin": "margin"; "maximum": "maximum"; "minimum": "minimum"; "progressColor": "progressColor"; "progressThickness": "progressThickness"; "radius": "radius"; "rangeColors": "rangeColors"; "role": "role"; "secondaryProgress": "secondaryProgress"; "segmentColor": "segmentColor"; "segmentCount": "segmentCount"; "showProgressValue": "showProgressValue"; "startAngle": "startAngle"; "theme": "theme"; "trackColor": "trackColor"; "trackThickness": "trackThickness"; "type": "type"; "value": "value"; "width": "width"; }, { "animationComplete": "animationComplete"; "load": "load"; "loaded": "loaded"; "mouseClick": "mouseClick"; "mouseDown": "mouseDown"; "mouseLeave": "mouseLeave"; "mouseMove": "mouseMove"; "mouseUp": "mouseUp"; "progressCompleted": "progressCompleted"; "textRender": "textRender"; "valueChanged": "valueChanged"; }, ["childAnnotations"], never>;
}
