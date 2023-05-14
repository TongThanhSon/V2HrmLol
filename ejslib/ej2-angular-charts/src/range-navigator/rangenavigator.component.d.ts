import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { RangeNavigator } from '@syncfusion/ej2-charts';
import { RangenavigatorSeriesCollectionDirective } from './series.directive';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * RangeNavigator Component
 * ```html
 * <ejs-rangenavigator></ejs-rangenavigator>
 * ```
 */
export declare class RangeNavigatorComponent extends RangeNavigator implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    beforePrint: any;
    beforeResize: any;
    changed: any;
    labelRender: any;
    load: any;
    loaded: any;
    resized: any;
    selectorRender: any;
    tooltipRender: any;
    dataSourceChange: any;
    childSeries: QueryList<RangenavigatorSeriesCollectionDirective>;
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
