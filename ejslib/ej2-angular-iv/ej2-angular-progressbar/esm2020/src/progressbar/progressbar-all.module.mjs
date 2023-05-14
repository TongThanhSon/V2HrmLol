import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from './progressbar.module';
import { ProgressAnnotation } from '@syncfusion/ej2-progressbar';
import * as i0 from "@angular/core";
export const ProgressAnnotationService = { provide: 'ProgressBarProgressAnnotation', useValue: ProgressAnnotation };
/**
 * NgModule definition for the ProgressBar component with providers.
 */
export class ProgressBarAllModule {
}
ProgressBarAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProgressBarAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarAllModule, imports: [CommonModule, ProgressBarModule], exports: [ProgressBarModule] });
ProgressBarAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarAllModule, providers: [
        ProgressAnnotationService
    ], imports: [[CommonModule, ProgressBarModule], ProgressBarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ProgressBarModule],
                    exports: [
                        ProgressBarModule
                    ],
                    providers: [
                        ProgressAnnotationService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXItYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQTs7QUFHOUQsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBQyxDQUFDO0FBRWxJOztHQUVHO0FBVUgsTUFBTSxPQUFPLG9CQUFvQjs7aUhBQXBCLG9CQUFvQjtrSEFBcEIsb0JBQW9CLFlBUm5CLFlBQVksRUFBRSxpQkFBaUIsYUFFckMsaUJBQWlCO2tIQU1aLG9CQUFvQixhQUpuQjtRQUNOLHlCQUF5QjtLQUM1QixZQU5RLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDLEVBRXRDLGlCQUFpQjsyRkFNWixvQkFBb0I7a0JBVGhDLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDO29CQUMxQyxPQUFPLEVBQUU7d0JBQ0wsaUJBQWlCO3FCQUNwQjtvQkFDRCxTQUFTLEVBQUM7d0JBQ04seUJBQXlCO3FCQUM1QjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJBbm5vdGF0aW9uRGlyZWN0aXZlLCBQcm9ncmVzc0JhckFubm90YXRpb25zRGlyZWN0aXZlIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9ncmVzc0Jhck1vZHVsZSB9IGZyb20gJy4vcHJvZ3Jlc3NiYXIubW9kdWxlJztcbmltcG9ydCB7UHJvZ3Jlc3NBbm5vdGF0aW9ufSBmcm9tICdAc3luY2Z1c2lvbi9lajItcHJvZ3Jlc3NiYXInXG5cblxuZXhwb3J0IGNvbnN0IFByb2dyZXNzQW5ub3RhdGlvblNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdQcm9ncmVzc0JhclByb2dyZXNzQW5ub3RhdGlvbicsIHVzZVZhbHVlOiBQcm9ncmVzc0Fubm90YXRpb259O1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBQcm9ncmVzc0JhciBjb21wb25lbnQgd2l0aCBwcm92aWRlcnMuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUHJvZ3Jlc3NCYXJNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUHJvZ3Jlc3NCYXJNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIFByb2dyZXNzQW5ub3RhdGlvblNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyQWxsTW9kdWxlIHsgfSJdfQ==