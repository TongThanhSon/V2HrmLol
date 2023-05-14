import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewModule } from './listview.module';
import { Virtualization } from '@syncfusion/ej2-lists';
import * as i0 from "@angular/core";
export const VirtualizationService = { provide: 'ListsVirtualization', useValue: Virtualization };
/**
 * NgModule definition for the ListView component with providers.
 */
export class ListViewAllModule {
}
ListViewAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ListViewAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListViewAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ListViewAllModule, imports: [CommonModule, ListViewModule], exports: [ListViewModule] });
ListViewAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ListViewAllModule, providers: [
        VirtualizationService
    ], imports: [[CommonModule, ListViewModule], ListViewModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ListViewAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ListViewModule],
                    exports: [
                        ListViewModule
                    ],
                    providers: [
                        VirtualizationService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHZpZXctYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saXN0LXZpZXcvbGlzdHZpZXctYWxsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQTs7QUFHcEQsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUMsQ0FBQztBQUVoSDs7R0FFRztBQVVILE1BQU0sT0FBTyxpQkFBaUI7OzhHQUFqQixpQkFBaUI7K0dBQWpCLGlCQUFpQixZQVJoQixZQUFZLEVBQUUsY0FBYyxhQUVsQyxjQUFjOytHQU1ULGlCQUFpQixhQUpoQjtRQUNOLHFCQUFxQjtLQUN4QixZQU5RLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQyxFQUVuQyxjQUFjOzJGQU1ULGlCQUFpQjtrQkFUN0IsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDO29CQUN2QyxPQUFPLEVBQUU7d0JBQ0wsY0FBYztxQkFDakI7b0JBQ0QsU0FBUyxFQUFDO3dCQUNOLHFCQUFxQjtxQkFDeEI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVmFsdWVQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0dmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2R1bGUgfSBmcm9tICcuL2xpc3R2aWV3Lm1vZHVsZSc7XG5pbXBvcnQge1ZpcnR1YWxpemF0aW9ufSBmcm9tICdAc3luY2Z1c2lvbi9lajItbGlzdHMnXG5cblxuZXhwb3J0IGNvbnN0IFZpcnR1YWxpemF0aW9uU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0xpc3RzVmlydHVhbGl6YXRpb24nLCB1c2VWYWx1ZTogVmlydHVhbGl6YXRpb259O1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBMaXN0VmlldyBjb21wb25lbnQgd2l0aCBwcm92aWRlcnMuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTGlzdFZpZXdNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTGlzdFZpZXdNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIFZpcnR1YWxpemF0aW9uU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdBbGxNb2R1bGUgeyB9Il19