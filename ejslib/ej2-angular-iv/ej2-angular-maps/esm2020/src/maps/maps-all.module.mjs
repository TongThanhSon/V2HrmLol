import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsModule } from './maps.module';
import { Bubble, Legend, Marker, Highlight, Selection, MapsTooltip, Zoom, DataLabel, NavigationLine, Annotations, Print, PdfExport, ImageExport } from '@syncfusion/ej2-maps';
import * as i0 from "@angular/core";
export const BubbleService = { provide: 'MapsBubble', useValue: Bubble };
export const LegendService = { provide: 'MapsLegend', useValue: Legend };
export const MarkerService = { provide: 'MapsMarker', useValue: Marker };
export const HighlightService = { provide: 'MapsHighlight', useValue: Highlight };
export const SelectionService = { provide: 'MapsSelection', useValue: Selection };
export const MapsTooltipService = { provide: 'MapsMapsTooltip', useValue: MapsTooltip };
export const ZoomService = { provide: 'MapsZoom', useValue: Zoom };
export const DataLabelService = { provide: 'MapsDataLabel', useValue: DataLabel };
export const NavigationLineService = { provide: 'MapsNavigationLine', useValue: NavigationLine };
export const AnnotationsService = { provide: 'MapsAnnotations', useValue: Annotations };
export const PrintService = { provide: 'MapsPrint', useValue: Print };
export const PdfExportService = { provide: 'MapsPdfExport', useValue: PdfExport };
export const ImageExportService = { provide: 'MapsImageExport', useValue: ImageExport };
/**
 * NgModule definition for the Maps component with providers.
 */
export class MapsAllModule {
}
MapsAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MapsAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MapsAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MapsAllModule, imports: [CommonModule, MapsModule], exports: [MapsModule] });
MapsAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MapsAllModule, providers: [
        BubbleService,
        LegendService,
        MarkerService,
        HighlightService,
        SelectionService,
        MapsTooltipService,
        ZoomService,
        DataLabelService,
        NavigationLineService,
        AnnotationsService,
        PrintService,
        PdfExportService,
        ImageExportService
    ], imports: [[CommonModule, MapsModule], MapsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MapsAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MapsModule],
                    exports: [
                        MapsModule
                    ],
                    providers: [
                        BubbleService,
                        LegendService,
                        MarkerService,
                        HighlightService,
                        SelectionService,
                        MapsTooltipService,
                        ZoomService,
                        DataLabelService,
                        NavigationLineService,
                        AnnotationsService,
                        PrintService,
                        PdfExportService,
                        ImageExportService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwcy1hbGwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21hcHMvbWFwcy1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQTs7QUFHM0ssTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFrQixFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDO0FBQ3ZGLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBa0IsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQztBQUN2RixNQUFNLENBQUMsTUFBTSxhQUFhLEdBQWtCLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7QUFDdkYsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFDaEcsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFDaEcsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsQ0FBQztBQUN0RyxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQWtCLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7QUFDakYsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFDaEcsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUMsQ0FBQztBQUMvRyxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxDQUFDO0FBQ3RHLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBa0IsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FBQztBQUNwRixNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUMsQ0FBQztBQUNoRyxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxDQUFDO0FBRXRHOztHQUVHO0FBc0JILE1BQU0sT0FBTyxhQUFhOzswR0FBYixhQUFhOzJHQUFiLGFBQWEsWUFwQlosWUFBWSxFQUFFLFVBQVUsYUFFOUIsVUFBVTsyR0FrQkwsYUFBYSxhQWhCWjtRQUNOLGFBQWE7UUFDYixhQUFhO1FBQ2IsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtLQUNyQixZQWxCUSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsRUFFL0IsVUFBVTsyRkFrQkwsYUFBYTtrQkFyQnpCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQztvQkFDbkMsT0FBTyxFQUFFO3dCQUNMLFVBQVU7cUJBQ2I7b0JBQ0QsU0FBUyxFQUFDO3dCQUNOLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLFdBQVc7d0JBQ1gsZ0JBQWdCO3dCQUNoQixxQkFBcUI7d0JBQ3JCLGtCQUFrQjt3QkFDbEIsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjtxQkFDckI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVmFsdWVQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluaXRpYWxTaGFwZVNlbGVjdGlvbkRpcmVjdGl2ZSwgSW5pdGlhbFNoYXBlU2VsZWN0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vaW5pdGlhbHNoYXBlc2VsZWN0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNYXJrZXJEaXJlY3RpdmUsIE1hcmtlcnNEaXJlY3RpdmUgfSBmcm9tICcuL21hcmtlcnNldHRpbmdzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb2xvck1hcHBpbmdEaXJlY3RpdmUsIENvbG9yTWFwcGluZ3NEaXJlY3RpdmUgfSBmcm9tICcuL2NvbG9ybWFwcGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnViYmxlRGlyZWN0aXZlLCBCdWJibGVzRGlyZWN0aXZlIH0gZnJvbSAnLi9idWJibGVzZXR0aW5ncy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkxpbmVEaXJlY3RpdmUsIE5hdmlnYXRpb25MaW5lc0RpcmVjdGl2ZSB9IGZyb20gJy4vbmF2aWdhdGlvbmxpbmVzZXR0aW5ncy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTGF5ZXJEaXJlY3RpdmUsIExheWVyc0RpcmVjdGl2ZSB9IGZyb20gJy4vbGF5ZXJzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBbm5vdGF0aW9uRGlyZWN0aXZlLCBBbm5vdGF0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vYW5ub3RhdGlvbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1hcHNDb21wb25lbnQgfSBmcm9tICcuL21hcHMuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcHNNb2R1bGUgfSBmcm9tICcuL21hcHMubW9kdWxlJztcbmltcG9ydCB7QnViYmxlLCBMZWdlbmQsIE1hcmtlciwgSGlnaGxpZ2h0LCBTZWxlY3Rpb24sIE1hcHNUb29sdGlwLCBab29tLCBEYXRhTGFiZWwsIE5hdmlnYXRpb25MaW5lLCBBbm5vdGF0aW9ucywgUHJpbnQsIFBkZkV4cG9ydCwgSW1hZ2VFeHBvcnR9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1tYXBzJ1xuXG5cbmV4cG9ydCBjb25zdCBCdWJibGVTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnTWFwc0J1YmJsZScsIHVzZVZhbHVlOiBCdWJibGV9O1xuZXhwb3J0IGNvbnN0IExlZ2VuZFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdNYXBzTGVnZW5kJywgdXNlVmFsdWU6IExlZ2VuZH07XG5leHBvcnQgY29uc3QgTWFya2VyU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ01hcHNNYXJrZXInLCB1c2VWYWx1ZTogTWFya2VyfTtcbmV4cG9ydCBjb25zdCBIaWdobGlnaHRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnTWFwc0hpZ2hsaWdodCcsIHVzZVZhbHVlOiBIaWdobGlnaHR9O1xuZXhwb3J0IGNvbnN0IFNlbGVjdGlvblNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdNYXBzU2VsZWN0aW9uJywgdXNlVmFsdWU6IFNlbGVjdGlvbn07XG5leHBvcnQgY29uc3QgTWFwc1Rvb2x0aXBTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnTWFwc01hcHNUb29sdGlwJywgdXNlVmFsdWU6IE1hcHNUb29sdGlwfTtcbmV4cG9ydCBjb25zdCBab29tU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ01hcHNab29tJywgdXNlVmFsdWU6IFpvb219O1xuZXhwb3J0IGNvbnN0IERhdGFMYWJlbFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdNYXBzRGF0YUxhYmVsJywgdXNlVmFsdWU6IERhdGFMYWJlbH07XG5leHBvcnQgY29uc3QgTmF2aWdhdGlvbkxpbmVTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnTWFwc05hdmlnYXRpb25MaW5lJywgdXNlVmFsdWU6IE5hdmlnYXRpb25MaW5lfTtcbmV4cG9ydCBjb25zdCBBbm5vdGF0aW9uc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdNYXBzQW5ub3RhdGlvbnMnLCB1c2VWYWx1ZTogQW5ub3RhdGlvbnN9O1xuZXhwb3J0IGNvbnN0IFByaW50U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ01hcHNQcmludCcsIHVzZVZhbHVlOiBQcmludH07XG5leHBvcnQgY29uc3QgUGRmRXhwb3J0U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ01hcHNQZGZFeHBvcnQnLCB1c2VWYWx1ZTogUGRmRXhwb3J0fTtcbmV4cG9ydCBjb25zdCBJbWFnZUV4cG9ydFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdNYXBzSW1hZ2VFeHBvcnQnLCB1c2VWYWx1ZTogSW1hZ2VFeHBvcnR9O1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBNYXBzIGNvbXBvbmVudCB3aXRoIHByb3ZpZGVycy5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXBzTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE1hcHNNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIEJ1YmJsZVNlcnZpY2UsXG4gICAgICAgIExlZ2VuZFNlcnZpY2UsXG4gICAgICAgIE1hcmtlclNlcnZpY2UsXG4gICAgICAgIEhpZ2hsaWdodFNlcnZpY2UsXG4gICAgICAgIFNlbGVjdGlvblNlcnZpY2UsXG4gICAgICAgIE1hcHNUb29sdGlwU2VydmljZSxcbiAgICAgICAgWm9vbVNlcnZpY2UsXG4gICAgICAgIERhdGFMYWJlbFNlcnZpY2UsXG4gICAgICAgIE5hdmlnYXRpb25MaW5lU2VydmljZSxcbiAgICAgICAgQW5ub3RhdGlvbnNTZXJ2aWNlLFxuICAgICAgICBQcmludFNlcnZpY2UsXG4gICAgICAgIFBkZkV4cG9ydFNlcnZpY2UsXG4gICAgICAgIEltYWdlRXhwb3J0U2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTWFwc0FsbE1vZHVsZSB7IH0iXX0=