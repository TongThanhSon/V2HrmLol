import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarAnnotationDirective, ProgressBarAnnotationsDirective } from './annotations.directive';
import { ProgressBarComponent } from './progressbar.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the ProgressBar component.
 */
export class ProgressBarModule {
}
ProgressBarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProgressBarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarModule, declarations: [ProgressBarComponent,
        ProgressBarAnnotationDirective,
        ProgressBarAnnotationsDirective], imports: [CommonModule], exports: [ProgressBarComponent,
        ProgressBarAnnotationDirective,
        ProgressBarAnnotationsDirective] });
ProgressBarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        ProgressBarComponent,
                        ProgressBarAnnotationDirective,
                        ProgressBarAnnotationsDirective
                    ],
                    exports: [
                        ProgressBarComponent,
                        ProgressBarAnnotationDirective,
                        ProgressBarAnnotationsDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFL0Q7O0dBRUc7QUFjSCxNQUFNLE9BQU8saUJBQWlCOzs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBVnRCLG9CQUFvQjtRQUNwQiw4QkFBOEI7UUFDOUIsK0JBQStCLGFBSnpCLFlBQVksYUFPbEIsb0JBQW9CO1FBQ3BCLDhCQUE4QjtRQUM5QiwrQkFBK0I7K0dBRzFCLGlCQUFpQixZQVpqQixDQUFDLFlBQVksQ0FBQzsyRkFZZCxpQkFBaUI7a0JBYjdCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUU7d0JBQ1Ysb0JBQW9CO3dCQUNwQiw4QkFBOEI7d0JBQzlCLCtCQUErQjtxQkFDbEM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLG9CQUFvQjt3QkFDcEIsOEJBQThCO3dCQUM5QiwrQkFBK0I7cUJBQ2xDO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQcm9ncmVzc0JhckFubm90YXRpb25EaXJlY3RpdmUsIFByb2dyZXNzQmFyQW5ub3RhdGlvbnNEaXJlY3RpdmUgfSBmcm9tICcuL2Fubm90YXRpb25zLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQcm9ncmVzc0JhckNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3NiYXIuY29tcG9uZW50JztcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgUHJvZ3Jlc3NCYXIgY29tcG9uZW50LlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBQcm9ncmVzc0JhckNvbXBvbmVudCxcbiAgICAgICAgUHJvZ3Jlc3NCYXJBbm5vdGF0aW9uRGlyZWN0aXZlLFxuICAgICAgICBQcm9ncmVzc0JhckFubm90YXRpb25zRGlyZWN0aXZlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFByb2dyZXNzQmFyQ29tcG9uZW50LFxuICAgICAgICBQcm9ncmVzc0JhckFubm90YXRpb25EaXJlY3RpdmUsXG4gICAgICAgIFByb2dyZXNzQmFyQW5ub3RhdGlvbnNEaXJlY3RpdmVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyTW9kdWxlIHsgfSJdfQ==