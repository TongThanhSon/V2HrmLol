import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PivotViewModule } from './pivotview.module';
import { GroupingBar, FieldList, CalculatedField, ConditionalFormatting, VirtualScroll, DrillThrough, Toolbar, PivotChart, PDFExport, ExcelExport, NumberFormatting, Grouping } from '@syncfusion/ej2-pivotview';
import * as i0 from "@angular/core";
export const GroupingBarService = { provide: 'PivotViewGroupingBar', useValue: GroupingBar };
export const FieldListService = { provide: 'PivotViewFieldList', useValue: FieldList };
export const CalculatedFieldService = { provide: 'PivotViewCalculatedField', useValue: CalculatedField };
export const ConditionalFormattingService = { provide: 'PivotViewConditionalFormatting', useValue: ConditionalFormatting };
export const VirtualScrollService = { provide: 'PivotViewVirtualScroll', useValue: VirtualScroll };
export const DrillThroughService = { provide: 'PivotViewDrillThrough', useValue: DrillThrough };
export const ToolbarService = { provide: 'PivotViewToolbar', useValue: Toolbar };
export const PivotChartService = { provide: 'PivotViewPivotChart', useValue: PivotChart };
export const PDFExportService = { provide: 'PivotViewPDFExport', useValue: PDFExport };
export const ExcelExportService = { provide: 'PivotViewExcelExport', useValue: ExcelExport };
export const NumberFormattingService = { provide: 'PivotViewNumberFormatting', useValue: NumberFormatting };
export const GroupingService = { provide: 'PivotViewGrouping', useValue: Grouping };
/**
 * NgModule definition for the PivotView component with providers.
 */
export class PivotViewAllModule {
}
PivotViewAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PivotViewAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewAllModule, imports: [CommonModule, PivotViewModule], exports: [PivotViewModule] });
PivotViewAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewAllModule, providers: [
        GroupingBarService,
        FieldListService,
        CalculatedFieldService,
        ConditionalFormattingService,
        VirtualScrollService,
        DrillThroughService,
        ToolbarService,
        PivotChartService,
        PDFExportService,
        ExcelExportService,
        NumberFormattingService,
        GroupingService
    ], imports: [[CommonModule, PivotViewModule], PivotViewModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, PivotViewModule],
                    exports: [
                        PivotViewModule
                    ],
                    providers: [
                        GroupingBarService,
                        FieldListService,
                        CalculatedFieldService,
                        ConditionalFormattingService,
                        VirtualScrollService,
                        DrillThroughService,
                        ToolbarService,
                        PivotChartService,
                        PDFExportService,
                        ExcelExportService,
                        NumberFormattingService,
                        GroupingService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl2b3R2aWV3LWFsbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcGl2b3R2aWV3L3Bpdm90dmlldy1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBQyxNQUFNLDJCQUEyQixDQUFBOztBQUc5TSxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxDQUFDO0FBQzNHLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFrQixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFDckcsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUMsQ0FBQztBQUN2SCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFDLENBQUM7QUFDekksTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUMsQ0FBQztBQUNqSCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBQyxDQUFDO0FBQzlHLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBa0IsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQyxDQUFDO0FBQy9GLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFrQixFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDLENBQUM7QUFDeEcsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUMsQ0FBQztBQUNyRyxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxDQUFDO0FBQzNHLE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFrQixFQUFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQztBQUMxSCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQWtCLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQztBQUVsRzs7R0FFRztBQXFCSCxNQUFNLE9BQU8sa0JBQWtCOzsrR0FBbEIsa0JBQWtCO2dIQUFsQixrQkFBa0IsWUFuQmpCLFlBQVksRUFBRSxlQUFlLGFBRW5DLGVBQWU7Z0hBaUJWLGtCQUFrQixhQWZqQjtRQUNOLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1QixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsZUFBZTtLQUNsQixZQWpCUSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsRUFFcEMsZUFBZTsyRkFpQlYsa0JBQWtCO2tCQXBCOUIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO29CQUN4QyxPQUFPLEVBQUU7d0JBQ0wsZUFBZTtxQkFDbEI7b0JBQ0QsU0FBUyxFQUFDO3dCQUNOLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3dCQUNoQixzQkFBc0I7d0JBQ3RCLDRCQUE0Qjt3QkFDNUIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2QsaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsdUJBQXVCO3dCQUN2QixlQUFlO3FCQUNsQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGl2b3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9waXZvdHZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFBpdm90Vmlld01vZHVsZSB9IGZyb20gJy4vcGl2b3R2aWV3Lm1vZHVsZSc7XG5pbXBvcnQge0dyb3VwaW5nQmFyLCBGaWVsZExpc3QsIENhbGN1bGF0ZWRGaWVsZCwgQ29uZGl0aW9uYWxGb3JtYXR0aW5nLCBWaXJ0dWFsU2Nyb2xsLCBEcmlsbFRocm91Z2gsIFRvb2xiYXIsIFBpdm90Q2hhcnQsIFBERkV4cG9ydCwgRXhjZWxFeHBvcnQsIE51bWJlckZvcm1hdHRpbmcsIEdyb3VwaW5nfSBmcm9tICdAc3luY2Z1c2lvbi9lajItcGl2b3R2aWV3J1xuXG5cbmV4cG9ydCBjb25zdCBHcm91cGluZ0JhclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdQaXZvdFZpZXdHcm91cGluZ0JhcicsIHVzZVZhbHVlOiBHcm91cGluZ0Jhcn07XG5leHBvcnQgY29uc3QgRmllbGRMaXN0U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1Bpdm90Vmlld0ZpZWxkTGlzdCcsIHVzZVZhbHVlOiBGaWVsZExpc3R9O1xuZXhwb3J0IGNvbnN0IENhbGN1bGF0ZWRGaWVsZFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdQaXZvdFZpZXdDYWxjdWxhdGVkRmllbGQnLCB1c2VWYWx1ZTogQ2FsY3VsYXRlZEZpZWxkfTtcbmV4cG9ydCBjb25zdCBDb25kaXRpb25hbEZvcm1hdHRpbmdTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUGl2b3RWaWV3Q29uZGl0aW9uYWxGb3JtYXR0aW5nJywgdXNlVmFsdWU6IENvbmRpdGlvbmFsRm9ybWF0dGluZ307XG5leHBvcnQgY29uc3QgVmlydHVhbFNjcm9sbFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdQaXZvdFZpZXdWaXJ0dWFsU2Nyb2xsJywgdXNlVmFsdWU6IFZpcnR1YWxTY3JvbGx9O1xuZXhwb3J0IGNvbnN0IERyaWxsVGhyb3VnaFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdQaXZvdFZpZXdEcmlsbFRocm91Z2gnLCB1c2VWYWx1ZTogRHJpbGxUaHJvdWdofTtcbmV4cG9ydCBjb25zdCBUb29sYmFyU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1Bpdm90Vmlld1Rvb2xiYXInLCB1c2VWYWx1ZTogVG9vbGJhcn07XG5leHBvcnQgY29uc3QgUGl2b3RDaGFydFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdQaXZvdFZpZXdQaXZvdENoYXJ0JywgdXNlVmFsdWU6IFBpdm90Q2hhcnR9O1xuZXhwb3J0IGNvbnN0IFBERkV4cG9ydFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdQaXZvdFZpZXdQREZFeHBvcnQnLCB1c2VWYWx1ZTogUERGRXhwb3J0fTtcbmV4cG9ydCBjb25zdCBFeGNlbEV4cG9ydFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdQaXZvdFZpZXdFeGNlbEV4cG9ydCcsIHVzZVZhbHVlOiBFeGNlbEV4cG9ydH07XG5leHBvcnQgY29uc3QgTnVtYmVyRm9ybWF0dGluZ1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdQaXZvdFZpZXdOdW1iZXJGb3JtYXR0aW5nJywgdXNlVmFsdWU6IE51bWJlckZvcm1hdHRpbmd9O1xuZXhwb3J0IGNvbnN0IEdyb3VwaW5nU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1Bpdm90Vmlld0dyb3VwaW5nJywgdXNlVmFsdWU6IEdyb3VwaW5nfTtcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgUGl2b3RWaWV3IGNvbXBvbmVudCB3aXRoIHByb3ZpZGVycy5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBQaXZvdFZpZXdNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUGl2b3RWaWV3TW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6W1xuICAgICAgICBHcm91cGluZ0JhclNlcnZpY2UsXG4gICAgICAgIEZpZWxkTGlzdFNlcnZpY2UsXG4gICAgICAgIENhbGN1bGF0ZWRGaWVsZFNlcnZpY2UsXG4gICAgICAgIENvbmRpdGlvbmFsRm9ybWF0dGluZ1NlcnZpY2UsXG4gICAgICAgIFZpcnR1YWxTY3JvbGxTZXJ2aWNlLFxuICAgICAgICBEcmlsbFRocm91Z2hTZXJ2aWNlLFxuICAgICAgICBUb29sYmFyU2VydmljZSxcbiAgICAgICAgUGl2b3RDaGFydFNlcnZpY2UsXG4gICAgICAgIFBERkV4cG9ydFNlcnZpY2UsXG4gICAgICAgIEV4Y2VsRXhwb3J0U2VydmljZSxcbiAgICAgICAgTnVtYmVyRm9ybWF0dGluZ1NlcnZpY2UsXG4gICAgICAgIEdyb3VwaW5nU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUGl2b3RWaWV3QWxsTW9kdWxlIHsgfSJdfQ==