import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeGridModule } from './treegrid.module';
import { Filter, Page, Sort, Reorder, Toolbar, Aggregate, Resize, ColumnMenu, ExcelExport, PdfExport, CommandColumn, ContextMenu, Edit, Selection, VirtualScroll, DetailRow, RowDD, Freeze, ColumnChooser, Logger, InfiniteScroll } from '@syncfusion/ej2-treegrid';
import * as i0 from "@angular/core";
export const FilterService = { provide: 'TreeGridFilter', useValue: Filter };
export const PageService = { provide: 'TreeGridPage', useValue: Page };
export const SortService = { provide: 'TreeGridSort', useValue: Sort };
export const ReorderService = { provide: 'TreeGridReorder', useValue: Reorder };
export const ToolbarService = { provide: 'TreeGridToolbar', useValue: Toolbar };
export const AggregateService = { provide: 'TreeGridAggregate', useValue: Aggregate };
export const ResizeService = { provide: 'TreeGridResize', useValue: Resize };
export const ColumnMenuService = { provide: 'TreeGridColumnMenu', useValue: ColumnMenu };
export const ExcelExportService = { provide: 'TreeGridExcelExport', useValue: ExcelExport };
export const PdfExportService = { provide: 'TreeGridPdfExport', useValue: PdfExport };
export const CommandColumnService = { provide: 'TreeGridCommandColumn', useValue: CommandColumn };
export const ContextMenuService = { provide: 'TreeGridContextMenu', useValue: ContextMenu };
export const EditService = { provide: 'TreeGridEdit', useValue: Edit };
export const SelectionService = { provide: 'TreeGridSelection', useValue: Selection };
export const VirtualScrollService = { provide: 'TreeGridVirtualScroll', useValue: VirtualScroll };
export const DetailRowService = { provide: 'TreeGridDetailRow', useValue: DetailRow };
export const RowDDService = { provide: 'TreeGridRowDD', useValue: RowDD };
export const FreezeService = { provide: 'TreeGridFreeze', useValue: Freeze };
export const ColumnChooserService = { provide: 'TreeGridColumnChooser', useValue: ColumnChooser };
export const LoggerService = { provide: 'TreeGridLogger', useValue: Logger };
export const InfiniteScrollService = { provide: 'TreeGridInfiniteScroll', useValue: InfiniteScroll };
/**
 * NgModule definition for the TreeGrid component with providers.
 */
export class TreeGridAllModule {
}
TreeGridAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TreeGridAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridAllModule, imports: [CommonModule, TreeGridModule], exports: [TreeGridModule] });
TreeGridAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridAllModule, providers: [
        FilterService,
        PageService,
        SortService,
        ReorderService,
        ToolbarService,
        AggregateService,
        ResizeService,
        ColumnMenuService,
        ExcelExportService,
        PdfExportService,
        CommandColumnService,
        ContextMenuService,
        EditService,
        SelectionService,
        VirtualScrollService,
        DetailRowService,
        RowDDService,
        FreezeService,
        ColumnChooserService,
        LoggerService,
        InfiniteScrollService
    ], imports: [[CommonModule, TreeGridModule], TreeGridModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, TreeGridModule],
                    exports: [
                        TreeGridModule
                    ],
                    providers: [
                        FilterService,
                        PageService,
                        SortService,
                        ReorderService,
                        ToolbarService,
                        AggregateService,
                        ResizeService,
                        ColumnMenuService,
                        ExcelExportService,
                        PdfExportService,
                        CommandColumnService,
                        ContextMenuService,
                        EditService,
                        SelectionService,
                        VirtualScrollService,
                        DetailRowService,
                        RowDDService,
                        FreezeService,
                        ColumnChooserService,
                        LoggerService,
                        InfiniteScrollService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZWdyaWQtYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmVlZ3JpZC90cmVlZ3JpZC1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUsvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFDLE1BQU0sMEJBQTBCLENBQUE7O0FBR2pRLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBa0IsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDO0FBQzNGLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBa0IsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQztBQUNyRixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7QUFDckYsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFrQixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDLENBQUM7QUFDOUYsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFrQixFQUFFLE9BQU8sRUFBRSxpQkFB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QWM7MkZBMEJULGlCQUFpQjtrQkE3QjdCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQztvQkFDdkMsT0FBTyxFQUFFO3dCQUNMLGNBQWM7cUJBQ2pCO29CQUNELFNBQVMsRUFBQzt3QkFDTixhQUFhO3dCQUNiLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQixXQUFXO3dCQUNYLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3dCQUNwQixnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixvQkFBb0I7d0JBQ3BCLGFBQWE7d0JBQ2IscUJBQXFCO3FCQUN4QjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29sdW1uRGlyZWN0aXZlLCBDb2x1bW5zRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2x1bW5zLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVDb2x1bW5EaXJlY3RpdmUsIEFnZ3JlZ2F0ZUNvbHVtbnNEaXJlY3RpdmUgfSBmcm9tICcuL2FnZ3JlZ2F0ZS1jb2x1bW5zLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVEaXJlY3RpdmUsIEFnZ3JlZ2F0ZXNEaXJlY3RpdmUgfSBmcm9tICcuL2FnZ3JlZ2F0ZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRyZWVHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi90cmVlZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZUdyaWRNb2R1bGUgfSBmcm9tICcuL3RyZWVncmlkLm1vZHVsZSc7XG5pbXBvcnQge0ZpbHRlciwgUGFnZSwgU29ydCwgUmVvcmRlciwgVG9vbGJhciwgQWdncmVnYXRlLCBSZXNpemUsIENvbHVtbk1lbnUsIEV4Y2VsRXhwb3J0LCBQZGZFeHBvcnQsIENvbW1hbmRDb2x1bW4sIENvbnRleHRNZW51LCBFZGl0LCBTZWxlY3Rpb24sIFZpcnR1YWxTY3JvbGwsIERldGFpbFJvdywgUm93REQsIEZyZWV6ZSwgQ29sdW1uQ2hvb3NlciwgTG9nZ2VyLCBJbmZpbml0ZVNjcm9sbH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLXRyZWVncmlkJ1xuXG5cbmV4cG9ydCBjb25zdCBGaWx0ZXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnVHJlZUdyaWRGaWx0ZXInLCB1c2VWYWx1ZTogRmlsdGVyfTtcbmV4cG9ydCBjb25zdCBQYWdlU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1RyZWVHcmlkUGFnZScsIHVzZVZhbHVlOiBQYWdlfTtcbmV4cG9ydCBjb25zdCBTb3J0U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1RyZWVHcmlkU29ydCcsIHVzZVZhbHVlOiBTb3J0fTtcbmV4cG9ydCBjb25zdCBSZW9yZGVyU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1RyZWVHcmlkUmVvcmRlcicsIHVzZVZhbHVlOiBSZW9yZGVyfTtcbmV4cG9ydCBjb25zdCBUb29sYmFyU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1RyZWVHcmlkVG9vbGJhcicsIHVzZVZhbHVlOiBUb29sYmFyfTtcbmV4cG9ydCBjb25zdCBBZ2dyZWdhdGVTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnVHJlZUdyaWRBZ2dyZWdhdGUnLCB1c2VWYWx1ZTogQWdncmVnYXRlfTtcbmV4cG9ydCBjb25zdCBSZXNpemVTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnVHJlZUdyaWRSZXNpemUnLCB1c2VWYWx1ZTogUmVzaXplfTtcbmV4cG9ydCBjb25zdCBDb2x1bW5NZW51U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1RyZWVHcmlkQ29sdW1uTWVudScsIHVzZVZhbHVlOiBDb2x1bW5NZW51fTtcbmV4cG9ydCBjb25zdCBFeGNlbEV4cG9ydFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdUcmVlR3JpZEV4Y2VsRXhwb3J0JywgdXNlVmFsdWU6IEV4Y2VsRXhwb3J0fTtcbmV4cG9ydCBjb25zdCBQZGZFeHBvcnRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnVHJlZUdyaWRQZGZFeHBvcnQnLCB1c2VWYWx1ZTogUGRmRXhwb3J0fTtcbmV4cG9ydCBjb25zdCBDb21tYW5kQ29sdW1uU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1RyZWVHcmlkQ29tbWFuZENvbHVtbicsIHVzZVZhbHVlOiBDb21tYW5kQ29sdW1ufTtcbmV4cG9ydCBjb25zdCBDb250ZXh0TWVudVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdUcmVlR3JpZENvbnRleHRNZW51JywgdXNlVmFsdWU6IENvbnRleHRNZW51fTtcbmV4cG9ydCBjb25zdCBFZGl0U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1RyZWVHcmlkRWRpdCcsIHVzZVZhbHVlOiBFZGl0fTtcbmV4cG9ydCBjb25zdCBTZWxlY3Rpb25TZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnVHJlZUdyaWRTZWxlY3Rpb24nLCB1c2VWYWx1ZTogU2VsZWN0aW9ufTtcbmV4cG9ydCBjb25zdCBWaXJ0dWFsU2Nyb2xsU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1RyZWVHcmlkVmlydHVhbFNjcm9sbCcsIHVzZVZhbHVlOiBWaXJ0dWFsU2Nyb2xsfTtcbmV4cG9ydCBjb25zdCBEZXRhaWxSb3dTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnVHJlZUdyaWREZXRhaWxSb3cnLCB1c2VWYWx1ZTogRGV0YWlsUm93fTtcbmV4cG9ydCBjb25zdCBSb3dERFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdUcmVlR3JpZFJvd0REJywgdXNlVmFsdWU6IFJvd0REfTtcbmV4cG9ydCBjb25zdCBGcmVlemVTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnVHJlZUdyaWRGcmVlemUnLCB1c2VWYWx1ZTogRnJlZXplfTtcbmV4cG9ydCBjb25zdCBDb2x1bW5DaG9vc2VyU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1RyZWVHcmlkQ29sdW1uQ2hvb3NlcicsIHVzZVZhbHVlOiBDb2x1bW5DaG9vc2VyfTtcbmV4cG9ydCBjb25zdCBMb2dnZXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnVHJlZUdyaWRMb2dnZXInLCB1c2VWYWx1ZTogTG9nZ2VyfTtcbmV4cG9ydCBjb25zdCBJbmZpbml0ZVNjcm9sbFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdUcmVlR3JpZEluZmluaXRlU2Nyb2xsJywgdXNlVmFsdWU6IEluZmluaXRlU2Nyb2xsfTtcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgVHJlZUdyaWQgY29tcG9uZW50IHdpdGggcHJvdmlkZXJzLlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFRyZWVHcmlkTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFRyZWVHcmlkTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6W1xuICAgICAgICBGaWx0ZXJTZXJ2aWNlLFxuICAgICAgICBQYWdlU2VydmljZSxcbiAgICAgICAgU29ydFNlcnZpY2UsXG4gICAgICAgIFJlb3JkZXJTZXJ2aWNlLFxuICAgICAgICBUb29sYmFyU2VydmljZSxcbiAgICAgICAgQWdncmVnYXRlU2VydmljZSxcbiAgICAgICAgUmVzaXplU2VydmljZSxcbiAgICAgICAgQ29sdW1uTWVudVNlcnZpY2UsXG4gICAgICAgIEV4Y2VsRXhwb3J0U2VydmljZSxcbiAgICAgICAgUGRmRXhwb3J0U2VydmljZSxcbiAgICAgICAgQ29tbWFuZENvbHVtblNlcnZpY2UsXG4gICAgICAgIENvbnRleHRNZW51U2VydmljZSxcbiAgICAgICAgRWRpdFNlcnZpY2UsXG4gICAgICAgIFNlbGVjdGlvblNlcnZpY2UsXG4gICAgICAgIFZpcnR1YWxTY3JvbGxTZXJ2aWNlLFxuICAgICAgICBEZXRhaWxSb3dTZXJ2aWNlLFxuICAgICAgICBSb3dERFNlcnZpY2UsXG4gICAgICAgIEZyZWV6ZVNlcnZpY2UsXG4gICAgICAgIENvbHVtbkNob29zZXJTZXJ2aWNlLFxuICAgICAgICBMb2dnZXJTZXJ2aWNlLFxuICAgICAgICBJbmZpbml0ZVNjcm9sbFNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVHcmlkQWxsTW9kdWxlIHsgfSJdfQ==