import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinearGaugeModule } from './lineargauge.module';
import { GaugeTooltip, Annotations, Print, PdfExport, ImageExport, Gradient } from '@syncfusion/ej2-lineargauge';
import * as i0 from "@angular/core";
export const GaugeTooltipService = { provide: 'LinearGaugeGaugeTooltip', useValue: GaugeTooltip };
export const AnnotationsService = { provide: 'LinearGaugeAnnotations', useValue: Annotations };
export const PrintService = { provide: 'LinearGaugePrint', useValue: Print };
export const PdfExportService = { provide: 'LinearGaugePdfExport', useValue: PdfExport };
export const ImageExportService = { provide: 'LinearGaugeImageExport', useValue: ImageExport };
export const GradientService = { provide: 'LinearGaugeGradient', useValue: Gradient };
/**
 * NgModule definition for the LinearGauge component with providers.
 */
export class LinearGaugeAllModule {
}
LinearGaugeAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LinearGaugeAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LinearGaugeAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LinearGaugeAllModule, imports: [CommonModule, LinearGaugeModule], exports: [LinearGaugeModule] });
LinearGaugeAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LinearGaugeAllModule, providers: [
        GaugeTooltipService,
        AnnotationsService,
        PrintService,
        PdfExportService,
        ImageExportService,
        GradientService
    ], imports: [[CommonModule, LinearGaugeModule], LinearGaugeModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LinearGaugeAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, LinearGaugeModule],
                    exports: [
                        LinearGaugeModule
                    ],
                    providers: [
                        GaugeTooltipService,
                        AnnotationsService,
                        PrintService,
                        PdfExportService,
                        ImageExportService,
                        GradientService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZWFyZ2F1Z2UtYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saW5lYXItZ2F1Z2UvbGluZWFyZ2F1Z2UtYWxsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFDLE1BQU0sNkJBQTZCLENBQUE7O0FBRzlHLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFrQixFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFDLENBQUM7QUFDaEgsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsQ0FBQztBQUM3RyxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FBQztBQUMzRixNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQyxDQUFDO0FBQ3ZHLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFrQixFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDLENBQUM7QUFDN0csTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFrQixFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUM7QUFFcEc7O0dBRUc7QUFlSCxNQUFNLE9BQU8sb0JBQW9COztpSEFBcEIsb0JBQW9CO2tIQUFwQixvQkFBb0IsWUFibkIsWUFBWSxFQUFFLGlCQUFpQixhQUVyQyxpQkFBaUI7a0hBV1osb0JBQW9CLGFBVG5CO1FBQ04sbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixlQUFlO0tBQ2xCLFlBWFEsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsRUFFdEMsaUJBQWlCOzJGQVdaLG9CQUFvQjtrQkFkaEMsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUM7b0JBQzFDLE9BQU8sRUFBRTt3QkFDTCxpQkFBaUI7cUJBQ3BCO29CQUNELFNBQVMsRUFBQzt3QkFDTixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsZUFBZTtxQkFDbEI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVmFsdWVQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJhbmdlRGlyZWN0aXZlLCBSYW5nZXNEaXJlY3RpdmUgfSBmcm9tICcuL3Jhbmdlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUG9pbnRlckRpcmVjdGl2ZSwgUG9pbnRlcnNEaXJlY3RpdmUgfSBmcm9tICcuL3BvaW50ZXJzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBeGlzRGlyZWN0aXZlLCBBeGVzRGlyZWN0aXZlIH0gZnJvbSAnLi9heGVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBbm5vdGF0aW9uRGlyZWN0aXZlLCBBbm5vdGF0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vYW5ub3RhdGlvbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IExpbmVhckdhdWdlQ29tcG9uZW50IH0gZnJvbSAnLi9saW5lYXJnYXVnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGluZWFyR2F1Z2VNb2R1bGUgfSBmcm9tICcuL2xpbmVhcmdhdWdlLm1vZHVsZSc7XG5pbXBvcnQge0dhdWdlVG9vbHRpcCwgQW5ub3RhdGlvbnMsIFByaW50LCBQZGZFeHBvcnQsIEltYWdlRXhwb3J0LCBHcmFkaWVudH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWxpbmVhcmdhdWdlJ1xuXG5cbmV4cG9ydCBjb25zdCBHYXVnZVRvb2x0aXBTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnTGluZWFyR2F1Z2VHYXVnZVRvb2x0aXAnLCB1c2VWYWx1ZTogR2F1Z2VUb29sdGlwfTtcbmV4cG9ydCBjb25zdCBBbm5vdGF0aW9uc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdMaW5lYXJHYXVnZUFubm90YXRpb25zJywgdXNlVmFsdWU6IEFubm90YXRpb25zfTtcbmV4cG9ydCBjb25zdCBQcmludFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdMaW5lYXJHYXVnZVByaW50JywgdXNlVmFsdWU6IFByaW50fTtcbmV4cG9ydCBjb25zdCBQZGZFeHBvcnRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnTGluZWFyR2F1Z2VQZGZFeHBvcnQnLCB1c2VWYWx1ZTogUGRmRXhwb3J0fTtcbmV4cG9ydCBjb25zdCBJbWFnZUV4cG9ydFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdMaW5lYXJHYXVnZUltYWdlRXhwb3J0JywgdXNlVmFsdWU6IEltYWdlRXhwb3J0fTtcbmV4cG9ydCBjb25zdCBHcmFkaWVudFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdMaW5lYXJHYXVnZUdyYWRpZW50JywgdXNlVmFsdWU6IEdyYWRpZW50fTtcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgTGluZWFyR2F1Z2UgY29tcG9uZW50IHdpdGggcHJvdmlkZXJzLlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIExpbmVhckdhdWdlTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIExpbmVhckdhdWdlTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6W1xuICAgICAgICBHYXVnZVRvb2x0aXBTZXJ2aWNlLFxuICAgICAgICBBbm5vdGF0aW9uc1NlcnZpY2UsXG4gICAgICAgIFByaW50U2VydmljZSxcbiAgICAgICAgUGRmRXhwb3J0U2VydmljZSxcbiAgICAgICAgSW1hZ2VFeHBvcnRTZXJ2aWNlLFxuICAgICAgICBHcmFkaWVudFNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIExpbmVhckdhdWdlQWxsTW9kdWxlIHsgfSJdfQ==