import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { StackedHeaderDirective, StackedHeadersDirective } from './stackedheaders.directive';
import { KanbanComponent } from './kanban.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the Kanban component.
 */
export class KanbanModule {
}
KanbanModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KanbanModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
KanbanModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KanbanModule, declarations: [KanbanComponent,
        ColumnDirective,
        ColumnsDirective,
        StackedHeaderDirective,
        StackedHeadersDirective], imports: [CommonModule], exports: [KanbanComponent,
        ColumnDirective,
        ColumnsDirective,
        StackedHeaderDirective,
        StackedHeadersDirective] });
KanbanModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KanbanModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KanbanModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        KanbanComponent,
                        ColumnDirective,
                        ColumnsDirective,
                        StackedHeaderDirective,
                        StackedHeadersDirective
                    ],
                    exports: [
                        KanbanComponent,
                        ColumnDirective,
                        ColumnsDirective,
                        StackedHeaderDirective,
                        StackedHeadersDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FuYmFuLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9rYW5iYW4va2FuYmFuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUVyRDs7R0FFRztBQWtCSCxNQUFNLE9BQU8sWUFBWTs7eUdBQVosWUFBWTswR0FBWixZQUFZLGlCQWRqQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsdUJBQXVCLGFBTmpCLFlBQVksYUFTbEIsZUFBZTtRQUNmLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLHVCQUF1QjswR0FHbEIsWUFBWSxZQWhCWixDQUFDLFlBQVksQ0FBQzsyRkFnQmQsWUFBWTtrQkFqQnhCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUU7d0JBQ1YsZUFBZTt3QkFDZixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7cUJBQzFCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixzQkFBc0I7d0JBQ3RCLHVCQUF1QjtxQkFDMUI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbHVtbkRpcmVjdGl2ZSwgQ29sdW1uc0RpcmVjdGl2ZSB9IGZyb20gJy4vY29sdW1ucy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3RhY2tlZEhlYWRlckRpcmVjdGl2ZSwgU3RhY2tlZEhlYWRlcnNEaXJlY3RpdmUgfSBmcm9tICcuL3N0YWNrZWRoZWFkZXJzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBLYW5iYW5Db21wb25lbnQgfSBmcm9tICcuL2thbmJhbi5jb21wb25lbnQnO1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBLYW5iYW4gY29tcG9uZW50LlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBLYW5iYW5Db21wb25lbnQsXG4gICAgICAgIENvbHVtbkRpcmVjdGl2ZSxcbiAgICAgICAgQ29sdW1uc0RpcmVjdGl2ZSxcbiAgICAgICAgU3RhY2tlZEhlYWRlckRpcmVjdGl2ZSxcbiAgICAgICAgU3RhY2tlZEhlYWRlcnNEaXJlY3RpdmVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgS2FuYmFuQ29tcG9uZW50LFxuICAgICAgICBDb2x1bW5EaXJlY3RpdmUsXG4gICAgICAgIENvbHVtbnNEaXJlY3RpdmUsXG4gICAgICAgIFN0YWNrZWRIZWFkZXJEaXJlY3RpdmUsXG4gICAgICAgIFN0YWNrZWRIZWFkZXJzRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBLYW5iYW5Nb2R1bGUgeyB9Il19