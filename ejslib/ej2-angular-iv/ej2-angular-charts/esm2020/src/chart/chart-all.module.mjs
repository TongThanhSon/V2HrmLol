import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from './chart.module';
import { LineSeries, ScatterSeries, ColumnSeries, SplineSeries, SplineAreaSeries, StripLine, AreaSeries, ScrollBar, StepLineSeries, StepAreaSeries, StackingColumnSeries, StackingLineSeries, StackingAreaSeries, StackingStepAreaSeries, BarSeries, StackingBarSeries, RangeColumnSeries, BubbleSeries, Tooltip, Crosshair, Category, DateTime, Logarithmic, Legend, Zoom, DataLabel, Selection, ChartAnnotation, HiloSeries, HiloOpenCloseSeries, WaterfallSeries, RangeAreaSeries, SplineRangeAreaSeries, CandleSeries, PolarSeries, RadarSeries, SmaIndicator, TmaIndicator, EmaIndicator, AccumulationDistributionIndicator, MacdIndicator, AtrIndicator, RsiIndicator, MomentumIndicator, StochasticIndicator, BollingerBands, BoxAndWhiskerSeries, HistogramSeries, ErrorBar, Trendlines, DateTimeCategory, MultiColoredLineSeries, MultiColoredAreaSeries, MultiLevelLabel, ParetoSeries, Export, DataEditing, Highlight } from '@syncfusion/ej2-charts';
import * as i0 from "@angular/core";
export const LineSeriesService = { provide: 'ChartsLineSeries', useValue: LineSeries };
export const ScatterSeriesService = { provide: 'ChartsScatterSeries', useValue: ScatterSeries };
export const ColumnSeriesService = { provide: 'ChartsColumnSeries', useValue: ColumnSeries };
export const SplineSeriesService = { provide: 'ChartsSplineSeries', useValue: SplineSeries };
export const SplineAreaSeriesService = { provide: 'ChartsSplineAreaSeries', useValue: SplineAreaSeries };
export const StripLineService = { provide: 'ChartsStripLine', useValue: StripLine };
export const AreaSeriesService = { provide: 'ChartsAreaSeries', useValue: AreaSeries };
export const ScrollBarService = { provide: 'ChartsScrollBar', useValue: ScrollBar };
export const StepLineSeriesService = { provide: 'ChartsStepLineSeries', useValue: StepLineSeries };
export const StepAreaSeriesService = { provide: 'ChartsStepAreaSeries', useValue: StepAreaSeries };
export const StackingColumnSeriesService = { provide: 'ChartsStackingColumnSeries', useValue: StackingColumnSeries };
export const StackingLineSeriesService = { provide: 'ChartsStackingLineSeries', useValue: StackingLineSeries };
export const StackingAreaSeriesService = { provide: 'ChartsStackingAreaSeries', useValue: StackingAreaSeries };
export const StackingStepAreaSeriesService = { provide: 'ChartsStackingStepAreaSeries', useValue: StackingStepAreaSeries };
export const BarSeriesService = { provide: 'ChartsBarSeries', useValue: BarSeries };
export const StackingBarSeriesService = { provide: 'ChartsStackingBarSeries', useValue: StackingBarSeries };
export const RangeColumnSeriesService = { provide: 'ChartsRangeColumnSeries', useValue: RangeColumnSeries };
export const BubbleSeriesService = { provide: 'ChartsBubbleSeries', useValue: BubbleSeries };
export const TooltipService = { provide: 'ChartsTooltip', useValue: Tooltip };
export const CrosshairService = { provide: 'ChartsCrosshair', useValue: Crosshair };
export const CategoryService = { provide: 'ChartsCategory', useValue: Category };
export const DateTimeService = { provide: 'ChartsDateTime', useValue: DateTime };
export const LogarithmicService = { provide: 'ChartsLogarithmic', useValue: Logarithmic };
export const LegendService = { provide: 'ChartsLegend', useValue: Legend };
export const ZoomService = { provide: 'ChartsZoom', useValue: Zoom };
export const DataLabelService = { provide: 'ChartsDataLabel', useValue: DataLabel };
export const SelectionService = { provide: 'ChartsSelection', useValue: Selection };
export const ChartAnnotationService = { provide: 'ChartsChartAnnotation', useValue: ChartAnnotation };
export const HiloSeriesService = { provide: 'ChartsHiloSeries', useValue: HiloSeries };
export const HiloOpenCloseSeriesService = { provide: 'ChartsHiloOpenCloseSeries', useValue: HiloOpenCloseSeries };
export const WaterfallSeriesService = { provide: 'ChartsWaterfallSeries', useValue: WaterfallSeries };
export const RangeAreaSeriesService = { provide: 'ChartsRangeAreaSeries', useValue: RangeAreaSeries };
export const SplineRangeAreaSeriesService = { provide: 'ChartsSplineRangeAreaSeries', useValue: SplineRangeAreaSeries };
export const CandleSeriesService = { provide: 'ChartsCandleSeries', useValue: CandleSeries };
export const PolarSeriesService = { provide: 'ChartsPolarSeries', useValue: PolarSeries };
export const RadarSeriesService = { provide: 'ChartsRadarSeries', useValue: RadarSeries };
export const SmaIndicatorService = { provide: 'ChartsSmaIndicator', useValue: SmaIndicator };
export const TmaIndicatorService = { provide: 'ChartsTmaIndicator', useValue: TmaIndicator };
export const EmaIndicatorService = { provide: 'ChartsEmaIndicator', useValue: EmaIndicator };
export const AccumulationDistributionIndicatorService = { provide: 'ChartsAccumulationDistributionIndicator', useValue: AccumulationDistributionIndicator };
export const MacdIndicatorService = { provide: 'ChartsMacdIndicator', useValue: MacdIndicator };
export const AtrIndicatorService = { provide: 'ChartsAtrIndicator', useValue: AtrIndicator };
export const RsiIndicatorService = { provide: 'ChartsRsiIndicator', useValue: RsiIndicator };
export const MomentumIndicatorService = { provide: 'ChartsMomentumIndicator', useValue: MomentumIndicator };
export const StochasticIndicatorService = { provide: 'ChartsStochasticIndicator', useValue: StochasticIndicator };
export const BollingerBandsService = { provide: 'ChartsBollingerBands', useValue: BollingerBands };
export const BoxAndWhiskerSeriesService = { provide: 'ChartsBoxAndWhiskerSeries', useValue: BoxAndWhiskerSeries };
export const HistogramSeriesService = { provide: 'ChartsHistogramSeries', useValue: HistogramSeries };
export const ErrorBarService = { provide: 'ChartsErrorBar', useValue: ErrorBar };
export const TrendlinesService = { provide: 'ChartsTrendlines', useValue: Trendlines };
export const DateTimeCategoryService = { provide: 'ChartsDateTimeCategory', useValue: DateTimeCategory };
export const MultiColoredLineSeriesService = { provide: 'ChartsMultiColoredLineSeries', useValue: MultiColoredLineSeries };
export const MultiColoredAreaSeriesService = { provide: 'ChartsMultiColoredAreaSeries', useValue: MultiColoredAreaSeries };
export const MultiLevelLabelService = { provide: 'ChartsMultiLevelLabel', useValue: MultiLevelLabel };
export const ParetoSeriesService = { provide: 'ChartsParetoSeries', useValue: ParetoSeries };
export const ExportService = { provide: 'ChartsExport', useValue: Export };
export const DataEditingService = { provide: 'ChartsDataEditing', useValue: DataEditing };
export const HighlightService = { provide: 'ChartsHighlight', useValue: Highlight };
/**
 * NgModule definition for the Chart component with providers.
 */
export class ChartAllModule {
}
ChartAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChartAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartAllModule, imports: [CommonModule, ChartModule], exports: [ChartModule] });
ChartAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartAllModule, providers: [
        LineSeriesService,
        ScatterSeriesService,
        ColumnSeriesService,
        SplineSeriesService,
        SplineAreaSeriesService,
        StripLineService,
        AreaSeriesService,
        ScrollBarService,
        StepLineSeriesService,
        StepAreaSeriesService,
        StackingColumnSeriesService,
        StackingLineSeriesService,
        StackingAreaSeriesService,
        StackingStepAreaSeriesService,
        BarSeriesService,
        StackingBarSeriesService,
        RangeColumnSeriesService,
        BubbleSeriesService,
        TooltipService,
        CrosshairService,
        CategoryService,
        DateTimeService,
        LogarithmicService,
        LegendService,
        ZoomService,
        DataLabelService,
        SelectionService,
        ChartAnnotationService,
        HiloSeriesService,
        HiloOpenCloseSeriesService,
        WaterfallSeriesService,
        RangeAreaSeriesService,
        SplineRangeAreaSeriesService,
        CandleSeriesService,
        PolarSeriesService,
        RadarSeriesService,
        SmaIndicatorService,
        TmaIndicatorService,
        EmaIndicatorService,
        AccumulationDistributionIndicatorService,
        MacdIndicatorService,
        AtrIndicatorService,
        RsiIndicatorService,
        MomentumIndicatorService,
        StochasticIndicatorService,
        BollingerBandsService,
        BoxAndWhiskerSeriesService,
        HistogramSeriesService,
        ErrorBarService,
        TrendlinesService,
        DateTimeCategoryService,
        MultiColoredLineSeriesService,
        MultiColoredAreaSeriesService,
        MultiLevelLabelService,
        ParetoSeriesService,
        ExportService,
        DataEditingService,
        HighlightService
    ], imports: [[CommonModule, ChartModule], ChartModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ChartModule],
                    exports: [
                        ChartModule
                    ],
                    providers: [
                        LineSeriesService,
                        ScatterSeriesService,
                        ColumnSeriesService,
                        SplineSeriesService,
                        SplineAreaSeriesService,
                        StripLineService,
                        AreaSeriesService,
                        ScrollBarService,
                        StepLineSeriesService,
                        StepAreaSeriesService,
                        StackingColumnSeriesService,
                        StackingLineSeriesService,
                        StackingAreaSeriesService,
                        StackingStepAreaSeriesService,
                        BarSeriesService,
                        StackingBarSeriesService,
                        RangeColumnSeriesService,
                        BubbleSeriesService,
                        TooltipService,
                        CrosshairService,
                        CategoryService,
                        DateTimeService,
                        LogarithmicService,
                        LegendService,
                        ZoomService,
                        DataLabelService,
                        SelectionService,
                        ChartAnnotationService,
                        HiloSeriesService,
                        HiloOpenCloseSeriesService,
                        WaterfallSeriesService,
                        RangeAreaSeriesService,
                        SplineRangeAreaSeriesService,
                        CandleSeriesService,
                        PolarSeriesService,
                        RadarSeriesService,
                        SmaIndicatorService,
                        TmaIndicatorService,
                        EmaIndicatorService,
                        AccumulationDistributionIndicatorService,
                        MacdIndicatorService,
                        AtrIndicatorService,
                        RsiIndicatorService,
                        MomentumIndicatorService,
                        StochasticIndicatorService,
                        BollingerBandsService,
                        BoxAndWhiskerSeriesService,
                        HistogramSeriesService,
                        ErrorBarService,
                        TrendlinesService,
                        DateTimeCategoryService,
                        MultiColoredLineSeriesService,
                        MultiColoredAreaSeriesService,
                        MultiLevelLabelService,
                        ParetoSeriesService,
                        ExportService,
                        DataEditingService,
                        HighlightService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jaGFydC9jaGFydC1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQWUvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGlDQUFpQyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFDLE1BQU0sd0JB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ZUFBZTt3QkFDZixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixXQUFXO3dCQUNYLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixzQkFBc0I7d0JBQ3RCLGlCQUFpQjt3QkFDakIsMEJBQTBCO3dCQUMxQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsNEJBQTRCO3dCQUM1QixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQix3Q0FBd0M7d0JBQ3hDLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLHdCQUF3Qjt3QkFDeEIsMEJBQTBCO3dCQUMxQixxQkFBcUI7d0JBQ3JCLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0QixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsdUJBQXVCO3dCQUN2Qiw2QkFBNkI7d0JBQzdCLDZCQUE2Qjt3QkFDN0Isc0JBQXNCO3dCQUN0QixtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixnQkFBZ0I7cUJBQ25CO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFZhbHVlUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmVuZGxpbmVEaXJlY3RpdmUsIFRyZW5kbGluZXNEaXJlY3RpdmUgfSBmcm9tICcuL3RyZW5kbGluZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNlZ21lbnREaXJlY3RpdmUsIFNlZ21lbnRzRGlyZWN0aXZlIH0gZnJvbSAnLi9zZWdtZW50cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2VyaWVzRGlyZWN0aXZlLCBTZXJpZXNDb2xsZWN0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9zZXJpZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFN0cmlwTGluZURpcmVjdGl2ZSwgU3RyaXBMaW5lc0RpcmVjdGl2ZSB9IGZyb20gJy4vc3RyaXBsaW5lcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2F0ZWdvcnlEaXJlY3RpdmUsIENhdGVnb3JpZXNEaXJlY3RpdmUgfSBmcm9tICcuL2NhdGVnb3JpZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IE11bHRpTGV2ZWxMYWJlbERpcmVjdGl2ZSwgTXVsdGlMZXZlbExhYmVsc0RpcmVjdGl2ZSB9IGZyb20gJy4vbXVsdGlsZXZlbGxhYmVscy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQXhpc0RpcmVjdGl2ZSwgQXhlc0RpcmVjdGl2ZSB9IGZyb20gJy4vYXhlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUm93RGlyZWN0aXZlLCBSb3dzRGlyZWN0aXZlIH0gZnJvbSAnLi9yb3dzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb2x1bW5EaXJlY3RpdmUsIENvbHVtbnNEaXJlY3RpdmUgfSBmcm9tICcuL2NvbHVtbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJhbmdlQ29sb3JTZXR0aW5nRGlyZWN0aXZlLCBSYW5nZUNvbG9yU2V0dGluZ3NEaXJlY3RpdmUgfSBmcm9tICcuL3JhbmdlY29sb3JzZXR0aW5ncy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQW5ub3RhdGlvbkRpcmVjdGl2ZSwgQW5ub3RhdGlvbnNEaXJlY3RpdmUgfSBmcm9tICcuL2Fubm90YXRpb25zLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTZWxlY3RlZERhdGFJbmRleERpcmVjdGl2ZSwgU2VsZWN0ZWREYXRhSW5kZXhlc0RpcmVjdGl2ZSB9IGZyb20gJy4vc2VsZWN0ZWRkYXRhaW5kZXhlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW5kaWNhdG9yRGlyZWN0aXZlLCBJbmRpY2F0b3JzRGlyZWN0aXZlIH0gZnJvbSAnLi9pbmRpY2F0b3JzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gJy4vY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0TW9kdWxlIH0gZnJvbSAnLi9jaGFydC5tb2R1bGUnO1xuaW1wb3J0IHtMaW5lU2VyaWVzLCBTY2F0dGVyU2VyaWVzLCBDb2x1bW5TZXJpZXMsIFNwbGluZVNlcmllcywgU3BsaW5lQXJlYVNlcmllcywgU3RyaXBMaW5lLCBBcmVhU2VyaWVzLCBTY3JvbGxCYXIsIFN0ZXBMaW5lU2VyaWVzLCBTdGVwQXJlYVNlcmllcywgU3RhY2tpbmdDb2x1bW5TZXJpZXMsIFN0YWNraW5nTGluZVNlcmllcywgU3RhY2tpbmdBcmVhU2VyaWVzLCBTdGFja2luZ1N0ZXBBcmVhU2VyaWVzLCBCYXJTZXJpZXMsIFN0YWNraW5nQmFyU2VyaWVzLCBSYW5nZUNvbHVtblNlcmllcywgQnViYmxlU2VyaWVzLCBUb29sdGlwLCBDcm9zc2hhaXIsIENhdGVnb3J5LCBEYXRlVGltZSwgTG9nYXJpdGhtaWMsIExlZ2VuZCwgWm9vbSwgRGF0YUxhYmVsLCBTZWxlY3Rpb24sIENoYXJ0QW5ub3RhdGlvbiwgSGlsb1NlcmllcywgSGlsb09wZW5DbG9zZVNlcmllcywgV2F0ZXJmYWxsU2VyaWVzLCBSYW5nZUFyZWFTZXJpZXMsIFNwbGluZVJhbmdlQXJlYVNlcmllcywgQ2FuZGxlU2VyaWVzLCBQb2xhclNlcmllcywgUmFkYXJTZXJpZXMsIFNtYUluZGljYXRvciwgVG1hSW5kaWNhdG9yLCBFbWFJbmRpY2F0b3IsIEFjY3VtdWxhdGlvbkRpc3RyaWJ1dGlvbkluZGljYXRvciwgTWFjZEluZGljYXRvciwgQXRySW5kaWNhdG9yLCBSc2lJbmRpY2F0b3IsIE1vbWVudHVtSW5kaWNhdG9yLCBTdG9jaGFzdGljSW5kaWNhdG9yLCBCb2xsaW5nZXJCYW5kcywgQm94QW5kV2hpc2tlclNlcmllcywgSGlzdG9ncmFtU2VyaWVzLCBFcnJvckJhciwgVHJlbmRsaW5lcywgRGF0ZVRpbWVDYXRlZ29yeSwgTXVsdGlDb2xvcmVkTGluZVNlcmllcywgTXVsdGlDb2xvcmVkQXJlYVNlcmllcywgTXVsdGlMZXZlbExhYmVsLCBQYXJldG9TZXJpZXMsIEV4cG9ydCwgRGF0YUVkaXRpbmcsIEhpZ2hsaWdodH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWNoYXJ0cydcblxuXG5leHBvcnQgY29uc3QgTGluZVNlcmllc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNMaW5lU2VyaWVzJywgdXNlVmFsdWU6IExpbmVTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IFNjYXR0ZXJTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzU2NhdHRlclNlcmllcycsIHVzZVZhbHVlOiBTY2F0dGVyU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBDb2x1bW5TZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzQ29sdW1uU2VyaWVzJywgdXNlVmFsdWU6IENvbHVtblNlcmllc307XG5leHBvcnQgY29uc3QgU3BsaW5lU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1NwbGluZVNlcmllcycsIHVzZVZhbHVlOiBTcGxpbmVTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IFNwbGluZUFyZWFTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzU3BsaW5lQXJlYVNlcmllcycsIHVzZVZhbHVlOiBTcGxpbmVBcmVhU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBTdHJpcExpbmVTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzU3RyaXBMaW5lJywgdXNlVmFsdWU6IFN0cmlwTGluZX07XG5leHBvcnQgY29uc3QgQXJlYVNlcmllc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNBcmVhU2VyaWVzJywgdXNlVmFsdWU6IEFyZWFTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IFNjcm9sbEJhclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNTY3JvbGxCYXInLCB1c2VWYWx1ZTogU2Nyb2xsQmFyfTtcbmV4cG9ydCBjb25zdCBTdGVwTGluZVNlcmllc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNTdGVwTGluZVNlcmllcycsIHVzZVZhbHVlOiBTdGVwTGluZVNlcmllc307XG5leHBvcnQgY29uc3QgU3RlcEFyZWFTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzU3RlcEFyZWFTZXJpZXMnLCB1c2VWYWx1ZTogU3RlcEFyZWFTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IFN0YWNraW5nQ29sdW1uU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1N0YWNraW5nQ29sdW1uU2VyaWVzJywgdXNlVmFsdWU6IFN0YWNraW5nQ29sdW1uU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBTdGFja2luZ0xpbmVTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzU3RhY2tpbmdMaW5lU2VyaWVzJywgdXNlVmFsdWU6IFN0YWNraW5nTGluZVNlcmllc307XG5leHBvcnQgY29uc3QgU3RhY2tpbmdBcmVhU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1N0YWNraW5nQXJlYVNlcmllcycsIHVzZVZhbHVlOiBTdGFja2luZ0FyZWFTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IFN0YWNraW5nU3RlcEFyZWFTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzU3RhY2tpbmdTdGVwQXJlYVNlcmllcycsIHVzZVZhbHVlOiBTdGFja2luZ1N0ZXBBcmVhU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBCYXJTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzQmFyU2VyaWVzJywgdXNlVmFsdWU6IEJhclNlcmllc307XG5leHBvcnQgY29uc3QgU3RhY2tpbmdCYXJTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzU3RhY2tpbmdCYXJTZXJpZXMnLCB1c2VWYWx1ZTogU3RhY2tpbmdCYXJTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IFJhbmdlQ29sdW1uU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1JhbmdlQ29sdW1uU2VyaWVzJywgdXNlVmFsdWU6IFJhbmdlQ29sdW1uU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBCdWJibGVTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzQnViYmxlU2VyaWVzJywgdXNlVmFsdWU6IEJ1YmJsZVNlcmllc307XG5leHBvcnQgY29uc3QgVG9vbHRpcFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNUb29sdGlwJywgdXNlVmFsdWU6IFRvb2x0aXB9O1xuZXhwb3J0IGNvbnN0IENyb3NzaGFpclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNDcm9zc2hhaXInLCB1c2VWYWx1ZTogQ3Jvc3NoYWlyfTtcbmV4cG9ydCBjb25zdCBDYXRlZ29yeVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNDYXRlZ29yeScsIHVzZVZhbHVlOiBDYXRlZ29yeX07XG5leHBvcnQgY29uc3QgRGF0ZVRpbWVTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzRGF0ZVRpbWUnLCB1c2VWYWx1ZTogRGF0ZVRpbWV9O1xuZXhwb3J0IGNvbnN0IExvZ2FyaXRobWljU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0xvZ2FyaXRobWljJywgdXNlVmFsdWU6IExvZ2FyaXRobWljfTtcbmV4cG9ydCBjb25zdCBMZWdlbmRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzTGVnZW5kJywgdXNlVmFsdWU6IExlZ2VuZH07XG5leHBvcnQgY29uc3QgWm9vbVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNab29tJywgdXNlVmFsdWU6IFpvb219O1xuZXhwb3J0IGNvbnN0IERhdGFMYWJlbFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNEYXRhTGFiZWwnLCB1c2VWYWx1ZTogRGF0YUxhYmVsfTtcbmV4cG9ydCBjb25zdCBTZWxlY3Rpb25TZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzU2VsZWN0aW9uJywgdXNlVmFsdWU6IFNlbGVjdGlvbn07XG5leHBvcnQgY29uc3QgQ2hhcnRBbm5vdGF0aW9uU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0NoYXJ0QW5ub3RhdGlvbicsIHVzZVZhbHVlOiBDaGFydEFubm90YXRpb259O1xuZXhwb3J0IGNvbnN0IEhpbG9TZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzSGlsb1NlcmllcycsIHVzZVZhbHVlOiBIaWxvU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBIaWxvT3BlbkNsb3NlU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0hpbG9PcGVuQ2xvc2VTZXJpZXMnLCB1c2VWYWx1ZTogSGlsb09wZW5DbG9zZVNlcmllc307XG5leHBvcnQgY29uc3QgV2F0ZXJmYWxsU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1dhdGVyZmFsbFNlcmllcycsIHVzZVZhbHVlOiBXYXRlcmZhbGxTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IFJhbmdlQXJlYVNlcmllc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNSYW5nZUFyZWFTZXJpZXMnLCB1c2VWYWx1ZTogUmFuZ2VBcmVhU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBTcGxpbmVSYW5nZUFyZWFTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzU3BsaW5lUmFuZ2VBcmVhU2VyaWVzJywgdXNlVmFsdWU6IFNwbGluZVJhbmdlQXJlYVNlcmllc307XG5leHBvcnQgY29uc3QgQ2FuZGxlU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0NhbmRsZVNlcmllcycsIHVzZVZhbHVlOiBDYW5kbGVTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IFBvbGFyU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1BvbGFyU2VyaWVzJywgdXNlVmFsdWU6IFBvbGFyU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBSYWRhclNlcmllc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNSYWRhclNlcmllcycsIHVzZVZhbHVlOiBSYWRhclNlcmllc307XG5leHBvcnQgY29uc3QgU21hSW5kaWNhdG9yU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1NtYUluZGljYXRvcicsIHVzZVZhbHVlOiBTbWFJbmRpY2F0b3J9O1xuZXhwb3J0IGNvbnN0IFRtYUluZGljYXRvclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNUbWFJbmRpY2F0b3InLCB1c2VWYWx1ZTogVG1hSW5kaWNhdG9yfTtcbmV4cG9ydCBjb25zdCBFbWFJbmRpY2F0b3JTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzRW1hSW5kaWNhdG9yJywgdXNlVmFsdWU6IEVtYUluZGljYXRvcn07XG5leHBvcnQgY29uc3QgQWNjdW11bGF0aW9uRGlzdHJpYnV0aW9uSW5kaWNhdG9yU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0FjY3VtdWxhdGlvbkRpc3RyaWJ1dGlvbkluZGljYXRvcicsIHVzZVZhbHVlOiBBY2N1bXVsYXRpb25EaXN0cmlidXRpb25JbmRpY2F0b3J9O1xuZXhwb3J0IGNvbnN0IE1hY2RJbmRpY2F0b3JTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzTWFjZEluZGljYXRvcicsIHVzZVZhbHVlOiBNYWNkSW5kaWNhdG9yfTtcbmV4cG9ydCBjb25zdCBBdHJJbmRpY2F0b3JTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzQXRySW5kaWNhdG9yJywgdXNlVmFsdWU6IEF0ckluZGljYXRvcn07XG5leHBvcnQgY29uc3QgUnNpSW5kaWNhdG9yU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1JzaUluZGljYXRvcicsIHVzZVZhbHVlOiBSc2lJbmRpY2F0b3J9O1xuZXhwb3J0IGNvbnN0IE1vbWVudHVtSW5kaWNhdG9yU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c01vbWVudHVtSW5kaWNhdG9yJywgdXNlVmFsdWU6IE1vbWVudHVtSW5kaWNhdG9yfTtcbmV4cG9ydCBjb25zdCBTdG9jaGFzdGljSW5kaWNhdG9yU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1N0b2NoYXN0aWNJbmRpY2F0b3InLCB1c2VWYWx1ZTogU3RvY2hhc3RpY0luZGljYXRvcn07XG5leHBvcnQgY29uc3QgQm9sbGluZ2VyQmFuZHNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzQm9sbGluZ2VyQmFuZHMnLCB1c2VWYWx1ZTogQm9sbGluZ2VyQmFuZHN9O1xuZXhwb3J0IGNvbnN0IEJveEFuZFdoaXNrZXJTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzQm94QW5kV2hpc2tlclNlcmllcycsIHVzZVZhbHVlOiBCb3hBbmRXaGlza2VyU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBIaXN0b2dyYW1TZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzSGlzdG9ncmFtU2VyaWVzJywgdXNlVmFsdWU6IEhpc3RvZ3JhbVNlcmllc307XG5leHBvcnQgY29uc3QgRXJyb3JCYXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzRXJyb3JCYXInLCB1c2VWYWx1ZTogRXJyb3JCYXJ9O1xuZXhwb3J0IGNvbnN0IFRyZW5kbGluZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzVHJlbmRsaW5lcycsIHVzZVZhbHVlOiBUcmVuZGxpbmVzfTtcbmV4cG9ydCBjb25zdCBEYXRlVGltZUNhdGVnb3J5U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0RhdGVUaW1lQ2F0ZWdvcnknLCB1c2VWYWx1ZTogRGF0ZVRpbWVDYXRlZ29yeX07XG5leHBvcnQgY29uc3QgTXVsdGlDb2xvcmVkTGluZVNlcmllc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNNdWx0aUNvbG9yZWRMaW5lU2VyaWVzJywgdXNlVmFsdWU6IE11bHRpQ29sb3JlZExpbmVTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IE11bHRpQ29sb3JlZEFyZWFTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzTXVsdGlDb2xvcmVkQXJlYVNlcmllcycsIHVzZVZhbHVlOiBNdWx0aUNvbG9yZWRBcmVhU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBNdWx0aUxldmVsTGFiZWxTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzTXVsdGlMZXZlbExhYmVsJywgdXNlVmFsdWU6IE11bHRpTGV2ZWxMYWJlbH07XG5leHBvcnQgY29uc3QgUGFyZXRvU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1BhcmV0b1NlcmllcycsIHVzZVZhbHVlOiBQYXJldG9TZXJpZXN9O1xuZXhwb3J0IGNvbnN0IEV4cG9ydFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNFeHBvcnQnLCB1c2VWYWx1ZTogRXhwb3J0fTtcbmV4cG9ydCBjb25zdCBEYXRhRWRpdGluZ1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNEYXRhRWRpdGluZycsIHVzZVZhbHVlOiBEYXRhRWRpdGluZ307XG5leHBvcnQgY29uc3QgSGlnaGxpZ2h0U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0hpZ2hsaWdodCcsIHVzZVZhbHVlOiBIaWdobGlnaHR9O1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBDaGFydCBjb21wb25lbnQgd2l0aCBwcm92aWRlcnMuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ2hhcnRNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQ2hhcnRNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIExpbmVTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBTY2F0dGVyU2VyaWVzU2VydmljZSxcbiAgICAgICAgQ29sdW1uU2VyaWVzU2VydmljZSxcbiAgICAgICAgU3BsaW5lU2VyaWVzU2VydmljZSxcbiAgICAgICAgU3BsaW5lQXJlYVNlcmllc1NlcnZpY2UsXG4gICAgICAgIFN0cmlwTGluZVNlcnZpY2UsXG4gICAgICAgIEFyZWFTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBTY3JvbGxCYXJTZXJ2aWNlLFxuICAgICAgICBTdGVwTGluZVNlcmllc1NlcnZpY2UsXG4gICAgICAgIFN0ZXBBcmVhU2VyaWVzU2VydmljZSxcbiAgICAgICAgU3RhY2tpbmdDb2x1bW5TZXJpZXNTZXJ2aWNlLFxuICAgICAgICBTdGFja2luZ0xpbmVTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBTdGFja2luZ0FyZWFTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBTdGFja2luZ1N0ZXBBcmVhU2VyaWVzU2VydmljZSxcbiAgICAgICAgQmFyU2VyaWVzU2VydmljZSxcbiAgICAgICAgU3RhY2tpbmdCYXJTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBSYW5nZUNvbHVtblNlcmllc1NlcnZpY2UsXG4gICAgICAgIEJ1YmJsZVNlcmllc1NlcnZpY2UsXG4gICAgICAgIFRvb2x0aXBTZXJ2aWNlLFxuICAgICAgICBDcm9zc2hhaXJTZXJ2aWNlLFxuICAgICAgICBDYXRlZ29yeVNlcnZpY2UsXG4gICAgICAgIERhdGVUaW1lU2VydmljZSxcbiAgICAgICAgTG9nYXJpdGhtaWNTZXJ2aWNlLFxuICAgICAgICBMZWdlbmRTZXJ2aWNlLFxuICAgICAgICBab29tU2VydmljZSxcbiAgICAgICAgRGF0YUxhYmVsU2VydmljZSxcbiAgICAgICAgU2VsZWN0aW9uU2VydmljZSxcbiAgICAgICAgQ2hhcnRBbm5vdGF0aW9uU2VydmljZSxcbiAgICAgICAgSGlsb1Nlcmllc1NlcnZpY2UsXG4gICAgICAgIEhpbG9PcGVuQ2xvc2VTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBXYXRlcmZhbGxTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBSYW5nZUFyZWFTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBTcGxpbmVSYW5nZUFyZWFTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBDYW5kbGVTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBQb2xhclNlcmllc1NlcnZpY2UsXG4gICAgICAgIFJhZGFyU2VyaWVzU2VydmljZSxcbiAgICAgICAgU21hSW5kaWNhdG9yU2VydmljZSxcbiAgICAgICAgVG1hSW5kaWNhdG9yU2VydmljZSxcbiAgICAgICAgRW1hSW5kaWNhdG9yU2VydmljZSxcbiAgICAgICAgQWNjdW11bGF0aW9uRGlzdHJpYnV0aW9uSW5kaWNhdG9yU2VydmljZSxcbiAgICAgICAgTWFjZEluZGljYXRvclNlcnZpY2UsXG4gICAgICAgIEF0ckluZGljYXRvclNlcnZpY2UsXG4gICAgICAgIFJzaUluZGljYXRvclNlcnZpY2UsXG4gICAgICAgIE1vbWVudHVtSW5kaWNhdG9yU2VydmljZSxcbiAgICAgICAgU3RvY2hhc3RpY0luZGljYXRvclNlcnZpY2UsXG4gICAgICAgIEJvbGxpbmdlckJhbmRzU2VydmljZSxcbiAgICAgICAgQm94QW5kV2hpc2tlclNlcmllc1NlcnZpY2UsXG4gICAgICAgIEhpc3RvZ3JhbVNlcmllc1NlcnZpY2UsXG4gICAgICAgIEVycm9yQmFyU2VydmljZSxcbiAgICAgICAgVHJlbmRsaW5lc1NlcnZpY2UsXG4gICAgICAgIERhdGVUaW1lQ2F0ZWdvcnlTZXJ2aWNlLFxuICAgICAgICBNdWx0aUNvbG9yZWRMaW5lU2VyaWVzU2VydmljZSxcbiAgICAgICAgTXVsdGlDb2xvcmVkQXJlYVNlcmllc1NlcnZpY2UsXG4gICAgICAgIE11bHRpTGV2ZWxMYWJlbFNlcnZpY2UsXG4gICAgICAgIFBhcmV0b1Nlcmllc1NlcnZpY2UsXG4gICAgICAgIEV4cG9ydFNlcnZpY2UsXG4gICAgICAgIERhdGFFZGl0aW5nU2VydmljZSxcbiAgICAgICAgSGlnaGxpZ2h0U2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRBbGxNb2R1bGUgeyB9Il19