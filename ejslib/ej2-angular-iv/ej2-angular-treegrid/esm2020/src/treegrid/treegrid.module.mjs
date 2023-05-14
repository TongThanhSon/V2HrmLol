import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { AggregateColumnDirective, AggregateColumnsDirective } from './aggregate-columns.directive';
import { AggregateDirective, AggregatesDirective } from './aggregates.directive';
import { TreeGridComponent } from './treegrid.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the TreeGrid component.
 */
export class TreeGridModule {
}
TreeGridModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TreeGridModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridModule, declarations: [TreeGridComponent,
        ColumnDirective,
        ColumnsDirective,
        AggregateColumnDirective,
        AggregateColumnsDirective,
        AggregateDirective,
        AggregatesDirective], imports: [CommonModule], exports: [TreeGridComponent,
        ColumnDirective,
        ColumnsDirective,
        AggregateColumnDirective,
        AggregateColumnsDirective,
        AggregateDirective,
        AggregatesDirective] });
TreeGridModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        TreeGridComponent,
                        ColumnDirective,
                        ColumnsDirective,
                        AggregateColumnDirective,
                        AggregateColumnsDirective,
                        AggregateDirective,
                        AggregatesDirective
                    ],
                    exports: [
                        TreeGridComponent,
                        ColumnDirective,
                        ColumnsDirective,
                        AggregateColumnDirective,
                        AggregateColumnsDirective,
                        AggregateDirective,
                        AggregatesDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZWdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RyZWVncmlkL3RyZWVncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRXpEOztHQUVHO0FBc0JILE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBbEJuQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQix3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixtQkFBbUIsYUFSYixZQUFZLGFBV2xCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLG1CQUFtQjs0R0FHZCxjQUFjLFlBcEJkLENBQUMsWUFBWSxDQUFDOzJGQW9CZCxjQUFjO2tCQXJCMUIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDVixpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQix3QkFBd0I7d0JBQ3hCLHlCQUF5Qjt3QkFDekIsa0JBQWtCO3dCQUNsQixtQkFBbUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQix3QkFBd0I7d0JBQ3hCLHlCQUF5Qjt3QkFDekIsa0JBQWtCO3dCQUNsQixtQkFBbUI7cUJBQ3RCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb2x1bW5EaXJlY3RpdmUsIENvbHVtbnNEaXJlY3RpdmUgfSBmcm9tICcuL2NvbHVtbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUNvbHVtbkRpcmVjdGl2ZSwgQWdncmVnYXRlQ29sdW1uc0RpcmVjdGl2ZSB9IGZyb20gJy4vYWdncmVnYXRlLWNvbHVtbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZURpcmVjdGl2ZSwgQWdncmVnYXRlc0RpcmVjdGl2ZSB9IGZyb20gJy4vYWdncmVnYXRlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVHJlZUdyaWRDb21wb25lbnQgfSBmcm9tICcuL3RyZWVncmlkLmNvbXBvbmVudCc7XG5cbi8qKlxuICogTmdNb2R1bGUgZGVmaW5pdGlvbiBmb3IgdGhlIFRyZWVHcmlkIGNvbXBvbmVudC5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVHJlZUdyaWRDb21wb25lbnQsXG4gICAgICAgIENvbHVtbkRpcmVjdGl2ZSxcbiAgICAgICAgQ29sdW1uc0RpcmVjdGl2ZSxcbiAgICAgICAgQWdncmVnYXRlQ29sdW1uRGlyZWN0aXZlLFxuICAgICAgICBBZ2dyZWdhdGVDb2x1bW5zRGlyZWN0aXZlLFxuICAgICAgICBBZ2dyZWdhdGVEaXJlY3RpdmUsXG4gICAgICAgIEFnZ3JlZ2F0ZXNEaXJlY3RpdmVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgVHJlZUdyaWRDb21wb25lbnQsXG4gICAgICAgIENvbHVtbkRpcmVjdGl2ZSxcbiAgICAgICAgQ29sdW1uc0RpcmVjdGl2ZSxcbiAgICAgICAgQWdncmVnYXRlQ29sdW1uRGlyZWN0aXZlLFxuICAgICAgICBBZ2dyZWdhdGVDb2x1bW5zRGlyZWN0aXZlLFxuICAgICAgICBBZ2dyZWdhdGVEaXJlY3RpdmUsXG4gICAgICAgIEFnZ3JlZ2F0ZXNEaXJlY3RpdmVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVHcmlkTW9kdWxlIHsgfSJdfQ==