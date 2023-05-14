import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularGaugeModule } from './circulargauge.module';
import { GaugeTooltip, Annotations, Legend, Print, PdfExport, ImageExport, Gradient } from '@syncfusion/ej2-circulargauge';
import * as i0 from "@angular/core";
export const GaugeTooltipService = { provide: 'CircularGaugeGaugeTooltip', useValue: GaugeTooltip };
export const AnnotationsService = { provide: 'CircularGaugeAnnotations', useValue: Annotations };
export const LegendService = { provide: 'CircularGaugeLegend', useValue: Legend };
export const PrintService = { provide: 'CircularGaugePrint', useValue: Print };
export const PdfExportService = { provide: 'CircularGaugePdfExport', useValue: PdfExport };
export const ImageExportService = { provide: 'CircularGaugeImageExport', useValue: ImageExport };
export const GradientService = { provide: 'CircularGaugeGradient', useValue: Gradient };
/**
 * NgModule definition for the CircularGauge component with providers.
 */
export class CircularGaugeAllModule {
}
CircularGaugeAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularGaugeAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CircularGaugeAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularGaugeAllModule, imports: [CommonModule, CircularGaugeModule], exports: [CircularGaugeModule] });
CircularGaugeAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularGaugeAllModule, providers: [
        GaugeTooltipService,
        AnnotationsService,
        LegendService,
        PrintService,
        PdfExportService,
        ImageExportService,
        GradientService
    ], imports: [[CommonModule, CircularGaugeModule], CircularGaugeModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularGaugeAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, CircularGaugeModule],
                    exports: [
                        CircularGaugeModule
                    ],
                    providers: [
                        GaugeTooltipService,
                        AnnotationsService,
                        LegendService,
                        PrintService,
                        PdfExportService,
                        ImageExportService,
                        GradientService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY3VsYXJnYXVnZS1hbGwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NpcmN1bGFyLWdhdWdlL2NpcmN1bGFyZ2F1Z2UtYWxsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBQyxNQUFNLCtCQUErQixDQUFBOztBQUd4SCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBQyxDQUFDO0FBQ2xILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFrQixFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDLENBQUM7QUFDL0csTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFrQixFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7QUFDaEcsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFrQixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDLENBQUM7QUFDN0YsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUMsQ0FBQztBQUN6RyxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxDQUFDO0FBQy9HLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBa0IsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDO0FBRXRHOztHQUVHO0FBZ0JILE1BQU0sT0FBTyxzQkFBc0I7O21IQUF0QixzQkFBc0I7b0hBQXRCLHNCQUFzQixZQWRyQixZQUFZLEVBQUUsbUJBQW1CLGFBRXZDLG1CQUFtQjtvSEFZZCxzQkFBc0IsYUFWckI7UUFDTixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixlQUFlO0tBQ2xCLFlBWlEsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLENBQUMsRUFFeEMsbUJBQW1COzJGQVlkLHNCQUFzQjtrQkFmbEMsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLENBQUM7b0JBQzVDLE9BQU8sRUFBRTt3QkFDTCxtQkFBbUI7cUJBQ3RCO29CQUNELFNBQVMsRUFBQzt3QkFDTixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixlQUFlO3FCQUNsQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQW5ub3RhdGlvbkRpcmVjdGl2ZSwgQW5ub3RhdGlvbnNEaXJlY3RpdmUgfSBmcm9tICcuL2Fubm90YXRpb25zLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBSYW5nZURpcmVjdGl2ZSwgUmFuZ2VzRGlyZWN0aXZlIH0gZnJvbSAnLi9yYW5nZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBvaW50ZXJEaXJlY3RpdmUsIFBvaW50ZXJzRGlyZWN0aXZlIH0gZnJvbSAnLi9wb2ludGVycy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQXhpc0RpcmVjdGl2ZSwgQXhlc0RpcmVjdGl2ZSB9IGZyb20gJy4vYXhlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2lyY3VsYXJHYXVnZUNvbXBvbmVudCB9IGZyb20gJy4vY2lyY3VsYXJnYXVnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2lyY3VsYXJHYXVnZU1vZHVsZSB9IGZyb20gJy4vY2lyY3VsYXJnYXVnZS5tb2R1bGUnO1xuaW1wb3J0IHtHYXVnZVRvb2x0aXAsIEFubm90YXRpb25zLCBMZWdlbmQsIFByaW50LCBQZGZFeHBvcnQsIEltYWdlRXhwb3J0LCBHcmFkaWVudH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWNpcmN1bGFyZ2F1Z2UnXG5cblxuZXhwb3J0IGNvbnN0IEdhdWdlVG9vbHRpcFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaXJjdWxhckdhdWdlR2F1Z2VUb29sdGlwJywgdXNlVmFsdWU6IEdhdWdlVG9vbHRpcH07XG5leHBvcnQgY29uc3QgQW5ub3RhdGlvbnNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2lyY3VsYXJHYXVnZUFubm90YXRpb25zJywgdXNlVmFsdWU6IEFubm90YXRpb25zfTtcbmV4cG9ydCBjb25zdCBMZWdlbmRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2lyY3VsYXJHYXVnZUxlZ2VuZCcsIHVzZVZhbHVlOiBMZWdlbmR9O1xuZXhwb3J0IGNvbnN0IFByaW50U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NpcmN1bGFyR2F1Z2VQcmludCcsIHVzZVZhbHVlOiBQcmludH07XG5leHBvcnQgY29uc3QgUGRmRXhwb3J0U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NpcmN1bGFyR2F1Z2VQZGZFeHBvcnQnLCB1c2VWYWx1ZTogUGRmRXhwb3J0fTtcbmV4cG9ydCBjb25zdCBJbWFnZUV4cG9ydFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaXJjdWxhckdhdWdlSW1hZ2VFeHBvcnQnLCB1c2VWYWx1ZTogSW1hZ2VFeHBvcnR9O1xuZXhwb3J0IGNvbnN0IEdyYWRpZW50U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NpcmN1bGFyR2F1Z2VHcmFkaWVudCcsIHVzZVZhbHVlOiBHcmFkaWVudH07XG5cbi8qKlxuICogTmdNb2R1bGUgZGVmaW5pdGlvbiBmb3IgdGhlIENpcmN1bGFyR2F1Z2UgY29tcG9uZW50IHdpdGggcHJvdmlkZXJzLlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENpcmN1bGFyR2F1Z2VNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQ2lyY3VsYXJHYXVnZU1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOltcbiAgICAgICAgR2F1Z2VUb29sdGlwU2VydmljZSxcbiAgICAgICAgQW5ub3RhdGlvbnNTZXJ2aWNlLFxuICAgICAgICBMZWdlbmRTZXJ2aWNlLFxuICAgICAgICBQcmludFNlcnZpY2UsXG4gICAgICAgIFBkZkV4cG9ydFNlcnZpY2UsXG4gICAgICAgIEltYWdlRXhwb3J0U2VydmljZSxcbiAgICAgICAgR3JhZGllbnRTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaXJjdWxhckdhdWdlQWxsTW9kdWxlIHsgfSJdfQ==