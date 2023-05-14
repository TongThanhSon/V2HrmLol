import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeatMapModule } from './heatmap.module';
import { Legend, Tooltip, Adaptor } from '@syncfusion/ej2-heatmap';
import * as i0 from "@angular/core";
export const LegendService = { provide: 'HeatMapLegend', useValue: Legend };
export const TooltipService = { provide: 'HeatMapTooltip', useValue: Tooltip };
export const AdaptorService = { provide: 'HeatMapAdaptor', useValue: Adaptor };
/**
 * NgModule definition for the HeatMap component with providers.
 */
export class HeatMapAllModule {
}
HeatMapAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: HeatMapAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HeatMapAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: HeatMapAllModule, imports: [CommonModule, HeatMapModule], exports: [HeatMapModule] });
HeatMapAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: HeatMapAllModule, providers: [
        LegendService,
        TooltipService,
        AdaptorService
    ], imports: [[CommonModule, HeatMapModule], HeatMapModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: HeatMapAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, HeatMapModule],
                    exports: [
                        HeatMapModule
                    ],
                    providers: [
                        LegendService,
                        TooltipService,
                        AdaptorService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhdG1hcC1hbGwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2hlYXRtYXAvaGVhdG1hcC1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLE1BQU0seUJBQXlCLENBQUE7O0FBR2hFLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBa0IsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQztBQUMxRixNQUFNLENBQUMsTUFBTSxjQUFjLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUMsQ0FBQztBQUM3RixNQUFNLENBQUMsTUFBTSxjQUFjLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUMsQ0FBQztBQUU3Rjs7R0FFRztBQVlILE1BQU0sT0FBTyxnQkFBZ0I7OzZHQUFoQixnQkFBZ0I7OEdBQWhCLGdCQUFnQixZQVZmLFlBQVksRUFBRSxhQUFhLGFBRWpDLGFBQWE7OEdBUVIsZ0JBQWdCLGFBTmY7UUFDTixhQUFhO1FBQ2IsY0FBYztRQUNkLGNBQWM7S0FDakIsWUFSUSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsRUFFbEMsYUFBYTsyRkFRUixnQkFBZ0I7a0JBWDVCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztvQkFDdEMsT0FBTyxFQUFFO3dCQUNMLGFBQWE7cUJBQ2hCO29CQUNELFNBQVMsRUFBQzt3QkFDTixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsY0FBYztxQkFDakI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVmFsdWVQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhlYXRNYXBDb21wb25lbnQgfSBmcm9tICcuL2hlYXRtYXAuY29tcG9uZW50JztcbmltcG9ydCB7IEhlYXRNYXBNb2R1bGUgfSBmcm9tICcuL2hlYXRtYXAubW9kdWxlJztcbmltcG9ydCB7TGVnZW5kLCBUb29sdGlwLCBBZGFwdG9yfSBmcm9tICdAc3luY2Z1c2lvbi9lajItaGVhdG1hcCdcblxuXG5leHBvcnQgY29uc3QgTGVnZW5kU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0hlYXRNYXBMZWdlbmQnLCB1c2VWYWx1ZTogTGVnZW5kfTtcbmV4cG9ydCBjb25zdCBUb29sdGlwU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0hlYXRNYXBUb29sdGlwJywgdXNlVmFsdWU6IFRvb2x0aXB9O1xuZXhwb3J0IGNvbnN0IEFkYXB0b3JTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnSGVhdE1hcEFkYXB0b3InLCB1c2VWYWx1ZTogQWRhcHRvcn07XG5cbi8qKlxuICogTmdNb2R1bGUgZGVmaW5pdGlvbiBmb3IgdGhlIEhlYXRNYXAgY29tcG9uZW50IHdpdGggcHJvdmlkZXJzLlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEhlYXRNYXBNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgSGVhdE1hcE1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOltcbiAgICAgICAgTGVnZW5kU2VydmljZSxcbiAgICAgICAgVG9vbHRpcFNlcnZpY2UsXG4gICAgICAgIEFkYXB0b3JTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBIZWF0TWFwQWxsTW9kdWxlIHsgfSJdfQ==