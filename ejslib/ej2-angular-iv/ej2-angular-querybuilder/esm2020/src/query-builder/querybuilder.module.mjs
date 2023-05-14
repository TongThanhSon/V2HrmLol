import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { QueryBuilderComponent } from './querybuilder.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the QueryBuilder component.
 */
export class QueryBuilderModule {
}
QueryBuilderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QueryBuilderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
QueryBuilderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QueryBuilderModule, declarations: [QueryBuilderComponent,
        ColumnDirective,
        ColumnsDirective], imports: [CommonModule], exports: [QueryBuilderComponent,
        ColumnDirective,
        ColumnsDirective] });
QueryBuilderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QueryBuilderModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QueryBuilderModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        QueryBuilderComponent,
                        ColumnDirective,
                        ColumnsDirective
                    ],
                    exports: [
                        QueryBuilderComponent,
                        ColumnDirective,
                        ColumnsDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnlidWlsZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9xdWVyeS1idWlsZGVyL3F1ZXJ5YnVpbGRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUVqRTs7R0FFRztBQWNILE1BQU0sT0FBTyxrQkFBa0I7OytHQUFsQixrQkFBa0I7Z0hBQWxCLGtCQUFrQixpQkFWdkIscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixnQkFBZ0IsYUFKVixZQUFZLGFBT2xCLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsZ0JBQWdCO2dIQUdYLGtCQUFrQixZQVpsQixDQUFDLFlBQVksQ0FBQzsyRkFZZCxrQkFBa0I7a0JBYjlCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUU7d0JBQ1YscUJBQXFCO3dCQUNyQixlQUFlO3dCQUNmLGdCQUFnQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLHFCQUFxQjt3QkFDckIsZUFBZTt3QkFDZixnQkFBZ0I7cUJBQ25CO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb2x1bW5EaXJlY3RpdmUsIENvbHVtbnNEaXJlY3RpdmUgfSBmcm9tICcuL2NvbHVtbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFF1ZXJ5QnVpbGRlckNvbXBvbmVudCB9IGZyb20gJy4vcXVlcnlidWlsZGVyLmNvbXBvbmVudCc7XG5cbi8qKlxuICogTmdNb2R1bGUgZGVmaW5pdGlvbiBmb3IgdGhlIFF1ZXJ5QnVpbGRlciBjb21wb25lbnQuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFF1ZXJ5QnVpbGRlckNvbXBvbmVudCxcbiAgICAgICAgQ29sdW1uRGlyZWN0aXZlLFxuICAgICAgICBDb2x1bW5zRGlyZWN0aXZlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFF1ZXJ5QnVpbGRlckNvbXBvbmVudCxcbiAgICAgICAgQ29sdW1uRGlyZWN0aXZlLFxuICAgICAgICBDb2x1bW5zRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBRdWVyeUJ1aWxkZXJNb2R1bGUgeyB9Il19