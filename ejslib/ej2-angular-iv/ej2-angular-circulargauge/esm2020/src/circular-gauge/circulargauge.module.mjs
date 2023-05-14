import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnotationDirective, AnnotationsDirective } from './annotations.directive';
import { RangeDirective, RangesDirective } from './ranges.directive';
import { PointerDirective, PointersDirective } from './pointers.directive';
import { AxisDirective, AxesDirective } from './axes.directive';
import { CircularGaugeComponent } from './circulargauge.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the CircularGauge component.
 */
export class CircularGaugeModule {
}
CircularGaugeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularGaugeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CircularGaugeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularGaugeModule, declarations: [CircularGaugeComponent,
        AnnotationDirective,
        AnnotationsDirective,
        RangeDirective,
        RangesDirective,
        PointerDirective,
        PointersDirective,
        AxisDirective,
        AxesDirective], imports: [CommonModule], exports: [CircularGaugeComponent,
        AnnotationDirective,
        AnnotationsDirective,
        RangeDirective,
        RangesDirective,
        PointerDirective,
        PointersDirective,
        AxisDirective,
        AxesDirective] });
CircularGaugeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularGaugeModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularGaugeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        CircularGaugeComponent,
                        AnnotationDirective,
                        AnnotationsDirective,
                        RangeDirective,
                        RangesDirective,
                        PointerDirective,
                        PointersDirective,
                        AxisDirective,
                        AxesDirective
                    ],
                    exports: [
                        CircularGaugeComponent,
                        AnnotationDirective,
                        AnnotationsDirective,
                        RangeDirective,
                        RangesDirective,
                        PointerDirective,
                        PointersDirective,
                        AxisDirective,
                        AxesDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY3VsYXJnYXVnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2lyY3VsYXItZ2F1Z2UvY2lyY3VsYXJnYXVnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUVuRTs7R0FFRztBQTBCSCxNQUFNLE9BQU8sbUJBQW1COztnSEFBbkIsbUJBQW1CO2lIQUFuQixtQkFBbUIsaUJBdEJ4QixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGFBQWEsYUFWUCxZQUFZLGFBYWxCLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsYUFBYTtpSEFHUixtQkFBbUIsWUF4Qm5CLENBQUMsWUFBWSxDQUFDOzJGQXdCZCxtQkFBbUI7a0JBekIvQixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFO3dCQUNWLHNCQUFzQjt3QkFDdEIsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixhQUFhO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsc0JBQXNCO3dCQUN0QixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGFBQWE7cUJBQ2hCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBbm5vdGF0aW9uRGlyZWN0aXZlLCBBbm5vdGF0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vYW5ub3RhdGlvbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJhbmdlRGlyZWN0aXZlLCBSYW5nZXNEaXJlY3RpdmUgfSBmcm9tICcuL3Jhbmdlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUG9pbnRlckRpcmVjdGl2ZSwgUG9pbnRlcnNEaXJlY3RpdmUgfSBmcm9tICcuL3BvaW50ZXJzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBeGlzRGlyZWN0aXZlLCBBeGVzRGlyZWN0aXZlIH0gZnJvbSAnLi9heGVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDaXJjdWxhckdhdWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jaXJjdWxhcmdhdWdlLmNvbXBvbmVudCc7XG5cbi8qKlxuICogTmdNb2R1bGUgZGVmaW5pdGlvbiBmb3IgdGhlIENpcmN1bGFyR2F1Z2UgY29tcG9uZW50LlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDaXJjdWxhckdhdWdlQ29tcG9uZW50LFxuICAgICAgICBBbm5vdGF0aW9uRGlyZWN0aXZlLFxuICAgICAgICBBbm5vdGF0aW9uc0RpcmVjdGl2ZSxcbiAgICAgICAgUmFuZ2VEaXJlY3RpdmUsXG4gICAgICAgIFJhbmdlc0RpcmVjdGl2ZSxcbiAgICAgICAgUG9pbnRlckRpcmVjdGl2ZSxcbiAgICAgICAgUG9pbnRlcnNEaXJlY3RpdmUsXG4gICAgICAgIEF4aXNEaXJlY3RpdmUsXG4gICAgICAgIEF4ZXNEaXJlY3RpdmVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQ2lyY3VsYXJHYXVnZUNvbXBvbmVudCxcbiAgICAgICAgQW5ub3RhdGlvbkRpcmVjdGl2ZSxcbiAgICAgICAgQW5ub3RhdGlvbnNEaXJlY3RpdmUsXG4gICAgICAgIFJhbmdlRGlyZWN0aXZlLFxuICAgICAgICBSYW5nZXNEaXJlY3RpdmUsXG4gICAgICAgIFBvaW50ZXJEaXJlY3RpdmUsXG4gICAgICAgIFBvaW50ZXJzRGlyZWN0aXZlLFxuICAgICAgICBBeGlzRGlyZWN0aXZlLFxuICAgICAgICBBeGVzRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaXJjdWxhckdhdWdlTW9kdWxlIHsgfSJdfQ==