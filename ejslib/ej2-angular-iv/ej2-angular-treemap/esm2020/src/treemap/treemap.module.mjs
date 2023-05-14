import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorMappingDirective, ColorMappingsDirective } from './colormapping.directive';
import { LevelDirective, LevelsDirective } from './levels.directive';
import { TreeMapComponent } from './treemap.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the TreeMap component.
 */
export class TreeMapModule {
}
TreeMapModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeMapModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TreeMapModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeMapModule, declarations: [TreeMapComponent,
        ColorMappingDirective,
        ColorMappingsDirective,
        LevelDirective,
        LevelsDirective], imports: [CommonModule], exports: [TreeMapComponent,
        ColorMappingDirective,
        ColorMappingsDirective,
        LevelDirective,
        LevelsDirective] });
TreeMapModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeMapModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeMapModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        TreeMapComponent,
                        ColorMappingDirective,
                        ColorMappingsDirective,
                        LevelDirective,
                        LevelsDirective
                    ],
                    exports: [
                        TreeMapComponent,
                        ColorMappingDirective,
                        ColorMappingsDirective,
                        LevelDirective,
                        LevelsDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZW1hcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdHJlZW1hcC90cmVlbWFwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RixPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUV2RDs7R0FFRztBQWtCSCxNQUFNLE9BQU8sYUFBYTs7MEdBQWIsYUFBYTsyR0FBYixhQUFhLGlCQWRsQixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixjQUFjO1FBQ2QsZUFBZSxhQU5ULFlBQVksYUFTbEIsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsY0FBYztRQUNkLGVBQWU7MkdBR1YsYUFBYSxZQWhCYixDQUFDLFlBQVksQ0FBQzsyRkFnQmQsYUFBYTtrQkFqQnpCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUU7d0JBQ1YsZ0JBQWdCO3dCQUNoQixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsY0FBYzt3QkFDZCxlQUFlO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsZ0JBQWdCO3dCQUNoQixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsY0FBYzt3QkFDZCxlQUFlO3FCQUNsQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29sb3JNYXBwaW5nRGlyZWN0aXZlLCBDb2xvck1hcHBpbmdzRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2xvcm1hcHBpbmcuZGlyZWN0aXZlJztcbmltcG9ydCB7IExldmVsRGlyZWN0aXZlLCBMZXZlbHNEaXJlY3RpdmUgfSBmcm9tICcuL2xldmVscy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVHJlZU1hcENvbXBvbmVudCB9IGZyb20gJy4vdHJlZW1hcC5jb21wb25lbnQnO1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBUcmVlTWFwIGNvbXBvbmVudC5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVHJlZU1hcENvbXBvbmVudCxcbiAgICAgICAgQ29sb3JNYXBwaW5nRGlyZWN0aXZlLFxuICAgICAgICBDb2xvck1hcHBpbmdzRGlyZWN0aXZlLFxuICAgICAgICBMZXZlbERpcmVjdGl2ZSxcbiAgICAgICAgTGV2ZWxzRGlyZWN0aXZlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFRyZWVNYXBDb21wb25lbnQsXG4gICAgICAgIENvbG9yTWFwcGluZ0RpcmVjdGl2ZSxcbiAgICAgICAgQ29sb3JNYXBwaW5nc0RpcmVjdGl2ZSxcbiAgICAgICAgTGV2ZWxEaXJlY3RpdmUsXG4gICAgICAgIExldmVsc0RpcmVjdGl2ZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVHJlZU1hcE1vZHVsZSB7IH0iXX0=