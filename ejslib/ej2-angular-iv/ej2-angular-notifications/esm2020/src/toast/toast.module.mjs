import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModelPropDirective, ButtonModelPropsDirective } from './buttons.directive';
import { ToastComponent } from './toast.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the Toast component.
 */
export class ToastModule {
}
ToastModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ToastModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ToastModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ToastModule, declarations: [ToastComponent,
        ButtonModelPropDirective,
        ButtonModelPropsDirective], imports: [CommonModule], exports: [ToastComponent,
        ButtonModelPropDirective,
        ButtonModelPropsDirective] });
ToastModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ToastModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ToastModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        ToastComponent,
                        ButtonModelPropDirective,
                        ButtonModelPropsDirective
                    ],
                    exports: [
                        ToastComponent,
                        ButtonModelPropDirective,
                        ButtonModelPropsDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RvYXN0L3RvYXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRW5EOztHQUVHO0FBY0gsTUFBTSxPQUFPLFdBQVc7O3dHQUFYLFdBQVc7eUdBQVgsV0FBVyxpQkFWaEIsY0FBYztRQUNkLHdCQUF3QjtRQUN4Qix5QkFBeUIsYUFKbkIsWUFBWSxhQU9sQixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLHlCQUF5Qjt5R0FHcEIsV0FBVyxZQVpYLENBQUMsWUFBWSxDQUFDOzJGQVlkLFdBQVc7a0JBYnZCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUU7d0JBQ1YsY0FBYzt3QkFDZCx3QkFBd0I7d0JBQ3hCLHlCQUF5QjtxQkFDNUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLGNBQWM7d0JBQ2Qsd0JBQXdCO3dCQUN4Qix5QkFBeUI7cUJBQzVCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCdXR0b25Nb2RlbFByb3BEaXJlY3RpdmUsIEJ1dHRvbk1vZGVsUHJvcHNEaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi90b2FzdC5jb21wb25lbnQnO1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBUb2FzdCBjb21wb25lbnQuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFRvYXN0Q29tcG9uZW50LFxuICAgICAgICBCdXR0b25Nb2RlbFByb3BEaXJlY3RpdmUsXG4gICAgICAgIEJ1dHRvbk1vZGVsUHJvcHNEaXJlY3RpdmVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgVG9hc3RDb21wb25lbnQsXG4gICAgICAgIEJ1dHRvbk1vZGVsUHJvcERpcmVjdGl2ZSxcbiAgICAgICAgQnV0dG9uTW9kZWxQcm9wc0RpcmVjdGl2ZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RNb2R1bGUgeyB9Il19