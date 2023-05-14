import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeMapModule } from './treemap.module';
import { TreeMapTooltip, TreeMapLegend, TreeMapHighlight, TreeMapSelection, Print, PdfExport, ImageExport } from '@syncfusion/ej2-treemap';
import * as i0 from "@angular/core";
export const TreeMapTooltipService = { provide: 'TreeMapTreeMapTooltip', useValue: TreeMapTooltip };
export const TreeMapLegendService = { provide: 'TreeMapTreeMapLegend', useValue: TreeMapLegend };
export const TreeMapHighlightService = { provide: 'TreeMapTreeMapHighlight', useValue: TreeMapHighlight };
export const TreeMapSelectionService = { provide: 'TreeMapTreeMapSelection', useValue: TreeMapSelection };
export const PrintService = { provide: 'TreeMapPrint', useValue: Print };
export const PdfExportService = { provide: 'TreeMapPdfExport', useValue: PdfExport };
export const ImageExportService = { provide: 'TreeMapImageExport', useValue: ImageExport };
/**
 * NgModule definition for the TreeMap component with providers.
 */
export class TreeMapAllModule {
}
TreeMapAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeMapAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TreeMapAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeMapAllModule, imports: [CommonModule, TreeMapModule], exports: [TreeMapModule] });
TreeMapAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeMapAllModule, providers: [
        TreeMapTooltipService,
        TreeMapLegendService,
        TreeMapHighlightService,
        TreeMapSelectionService,
        PrintService,
        PdfExportService,
        ImageExportService
    ], imports: [[CommonModule, TreeMapModule], TreeMapModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeMapAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, TreeMapModule],
                    exports: [
                        TreeMapModule
                    ],
                    providers: [
                        TreeMapTooltipService,
                        TreeMapLegendService,
                        TreeMapHighlightService,
                        TreeMapSelectionService,
                        PrintService,
                        PdfExportService,
                        ImageExportService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZW1hcC1hbGwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RyZWVtYXAvdHJlZW1hcC1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUkvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFDLGNBQWMsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQTs7QUFHeEksTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUMsQ0FBQztBQUNsSCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQyxDQUFDO0FBQy9HLE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFrQixFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQztBQUN4SCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFDLENBQUM7QUFDeEgsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFrQixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFDO0FBQ3ZGLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFrQixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFDbkcsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsQ0FBQztBQUV6Rzs7R0FFRztBQWdCSCxNQUFNLE9BQU8sZ0JBQWdCOzs2R0FBaEIsZ0JBQWdCOzhHQUFoQixnQkFBZ0IsWUFkZixZQUFZLEVBQUUsYUFBYSxhQUVqQyxhQUFhOzhHQVlSLGdCQUFnQixhQVZmO1FBQ04scUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO0tBQ3JCLFlBWlEsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLEVBRWxDLGFBQWE7MkZBWVIsZ0JBQWdCO2tCQWY1QixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7b0JBQ3RDLE9BQU8sRUFBRTt3QkFDTCxhQUFhO3FCQUNoQjtvQkFDRCxTQUFTLEVBQUM7d0JBQ04scUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLHVCQUF1Qjt3QkFDdkIsdUJBQXVCO3dCQUN2QixZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3FCQUNyQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29sb3JNYXBwaW5nRGlyZWN0aXZlLCBDb2xvck1hcHBpbmdzRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2xvcm1hcHBpbmcuZGlyZWN0aXZlJztcbmltcG9ydCB7IExldmVsRGlyZWN0aXZlLCBMZXZlbHNEaXJlY3RpdmUgfSBmcm9tICcuL2xldmVscy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVHJlZU1hcENvbXBvbmVudCB9IGZyb20gJy4vdHJlZW1hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZU1hcE1vZHVsZSB9IGZyb20gJy4vdHJlZW1hcC5tb2R1bGUnO1xuaW1wb3J0IHtUcmVlTWFwVG9vbHRpcCwgVHJlZU1hcExlZ2VuZCwgVHJlZU1hcEhpZ2hsaWdodCwgVHJlZU1hcFNlbGVjdGlvbiwgUHJpbnQsIFBkZkV4cG9ydCwgSW1hZ2VFeHBvcnR9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi10cmVlbWFwJ1xuXG5cbmV4cG9ydCBjb25zdCBUcmVlTWFwVG9vbHRpcFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdUcmVlTWFwVHJlZU1hcFRvb2x0aXAnLCB1c2VWYWx1ZTogVHJlZU1hcFRvb2x0aXB9O1xuZXhwb3J0IGNvbnN0IFRyZWVNYXBMZWdlbmRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnVHJlZU1hcFRyZWVNYXBMZWdlbmQnLCB1c2VWYWx1ZTogVHJlZU1hcExlZ2VuZH07XG5leHBvcnQgY29uc3QgVHJlZU1hcEhpZ2hsaWdodFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdUcmVlTWFwVHJlZU1hcEhpZ2hsaWdodCcsIHVzZVZhbHVlOiBUcmVlTWFwSGlnaGxpZ2h0fTtcbmV4cG9ydCBjb25zdCBUcmVlTWFwU2VsZWN0aW9uU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1RyZWVNYXBUcmVlTWFwU2VsZWN0aW9uJywgdXNlVmFsdWU6IFRyZWVNYXBTZWxlY3Rpb259O1xuZXhwb3J0IGNvbnN0IFByaW50U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1RyZWVNYXBQcmludCcsIHVzZVZhbHVlOiBQcmludH07XG5leHBvcnQgY29uc3QgUGRmRXhwb3J0U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1RyZWVNYXBQZGZFeHBvcnQnLCB1c2VWYWx1ZTogUGRmRXhwb3J0fTtcbmV4cG9ydCBjb25zdCBJbWFnZUV4cG9ydFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdUcmVlTWFwSW1hZ2VFeHBvcnQnLCB1c2VWYWx1ZTogSW1hZ2VFeHBvcnR9O1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBUcmVlTWFwIGNvbXBvbmVudCB3aXRoIHByb3ZpZGVycy5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBUcmVlTWFwTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFRyZWVNYXBNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIFRyZWVNYXBUb29sdGlwU2VydmljZSxcbiAgICAgICAgVHJlZU1hcExlZ2VuZFNlcnZpY2UsXG4gICAgICAgIFRyZWVNYXBIaWdobGlnaHRTZXJ2aWNlLFxuICAgICAgICBUcmVlTWFwU2VsZWN0aW9uU2VydmljZSxcbiAgICAgICAgUHJpbnRTZXJ2aWNlLFxuICAgICAgICBQZGZFeHBvcnRTZXJ2aWNlLFxuICAgICAgICBJbWFnZUV4cG9ydFNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVNYXBBbGxNb2R1bGUgeyB9Il19