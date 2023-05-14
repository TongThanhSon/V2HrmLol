import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { ProgressBar } from '@syncfusion/ej2-progressbar';
import { ProgressBarAnnotationsDirective } from './annotations.directive';
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
}
