import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Chart } from '@syncfusion/ej2-charts';
import { SeriesCollectionDirective } from './series.directive';
import { AxesDirective } from './axes.directive';
import { RowsDirective } from './rows.directive';
import { ColumnsDirective } from './columns.directive';
import { RangeColorSettingsDirective } from './rangecolorsettings.directive';
import { AnnotationsDirective } from './annotations.directive';
import { SelectedDataIndexesDirective } from './selecteddataindexes.directive';
import { IndicatorsDirective } from './indicators.directive';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Chart Component
 * ```html
 * <ejschart></ejschart>
 * ```
 */
export declare class ChartComponent extends Chart implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    afterExport: any;
    animationComplete: any;
    annotationRender: any;
    axisLabelClick: any;
    axisLabelRender: any;
    axisMultiLabelRender: any;
    axisRangeCalculated: any;
    beforeExport: any;
    beforePrint: any;
    beforeResize: any;
    chartDoubleClick: any;
    chartMouseClick: any;
    chartMouseDown: any;
    chartMouseLeave: any;
    chartMouseMove: any;
    chartMouseUp: any;
    drag: any;
    dragComplete: any;
    dragEnd: any;
    dragStart: any;
    legendClick: any;
    legendRender: any;
    load: any;
    loaded: any;
    multiLevelLabelClick: any;
    onZooming: any;
    pointClick: any;
    pointDoubleClick: any;
    pointMove: any;
    pointRender: any;
    resized: any;
    scrollChanged: any;
    scrollEnd: any;
    scrollStart: any;
    selectionComplete: any;
    seriesRender: any;
    sharedTooltipRender: any;
    textRender: any;
    tooltipRender: any;
    zoomComplete: any;
    dataSourceChange: any;
    childSeries: QueryList<SeriesCollectionDirective>;
    childAxes: QueryList<AxesDirective>;
    childRows: QueryList<RowsDirective>;
    childColumns: QueryList<ColumnsDirective>;
    childRangeColorSettings: QueryList<RangeColorSettingsDirective>;
    childAnnotations: QueryList<AnnotationsDirective>;
    childSelectedDataIndexes: QueryList<SelectedDataIndexesDirective>;
    childIndicators: QueryList<IndicatorsDirective>;
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
