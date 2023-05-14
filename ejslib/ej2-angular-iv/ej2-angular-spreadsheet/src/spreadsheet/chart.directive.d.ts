import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
export declare class ChartDirective extends ComplexBase<ChartDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Specifies the type of a chart.
     * @default 'Line'
     */
    type: any;
    /**
     * The data label for the series.
     * @default {}
     */
    dataLabelSettings: any;
    /**
     * Specifies the height of the chart.
     * @default 290
     */
    height: any;
    /**
     * Specifies chart element id.
     * @default ''
     */
    id: any;
    /**
     * Specifies to switch the row or a column.
     * @default false
     */
    isSeriesInRows: any;
    /**
     * Options for customizing the legend of the chart.
     * @default {}
     */
    legendSettings: any;
    /**
     * Options to configure the horizontal axis.
     * @default {}
     */
    primaryXAxis: any;
    /**
     * Options to configure the vertical axis.
     * @default {}
     */
    primaryYAxis: any;
    /**
     * Specifies the selected range or specified range.
     * @default ''
     */
    range: any;
    /**
     * Specifies the theme of a chart.
     * @default 'Material'
     */
    theme: any;
    /**
     * Title of the chart
     * @default ''
     */
    title: any;
    /**
     * Specifies the width of the chart.
     * @default 480
     */
    width: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ChartDirective, "e-charts>e-chart", never, { "dataLabelSettings": "dataLabelSettings"; "height": "height"; "id": "id"; "isSeriesInRows": "isSeriesInRows"; "legendSettings": "legendSettings"; "primaryXAxis": "primaryXAxis"; "primaryYAxis": "primaryYAxis"; "range": "range"; "theme": "theme"; "title": "title"; "type": "type"; "width": "width"; }, {}, never>;
}
/**
 * Chart Array Directive
 * @private
 */
export declare class ChartsDirective extends ArrayBase<ChartsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ChartsDirective, "e-cell>e-charts", never, {}, {}, ["children"]>;
}
