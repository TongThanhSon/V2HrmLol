import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Overview } from '@syncfusion/ej2-diagrams';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Overview Component
 * ```html
 * <ej-overview></ej-overview>
 * ```
 */
export declare class OverviewComponent extends Overview implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    created: any;
    tags: string[];
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OverviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OverviewComponent, "ejs-overview", never, { "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "height": "height"; "locale": "locale"; "sourceID": "sourceID"; "width": "width"; }, { "created": "created"; }, never, never>;
}
