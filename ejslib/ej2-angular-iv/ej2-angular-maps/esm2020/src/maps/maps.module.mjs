import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialShapeSelectionDirective, InitialShapeSelectionsDirective } from './initialshapeselection.directive';
import { MarkerDirective, MarkersDirective } from './markersettings.directive';
import { ColorMappingDirective, ColorMappingsDirective } from './colormapping.directive';
import { BubbleDirective, BubblesDirective } from './bubblesettings.directive';
import { NavigationLineDirective, NavigationLinesDirective } from './navigationlinesettings.directive';
import { LayerDirective, LayersDirective } from './layers.directive';
import { AnnotationDirective, AnnotationsDirective } from './annotations.directive';
import { MapsComponent } from './maps.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the Maps component.
 */
export class MapsModule {
}
MapsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MapsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MapsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MapsModule, declarations: [MapsComponent,
        InitialShapeSelectionDirective,
        InitialShapeSelectionsDirective,
        MarkerDirective,
        MarkersDirective,
        ColorMappingDirective,
        ColorMappingsDirective,
        BubbleDirective,
        BubblesDirective,
        NavigationLineDirective,
        NavigationLinesDirective,
        LayerDirective,
        LayersDirective,
        AnnotationDirective,
        AnnotationsDirective], imports: [CommonModule], exports: [MapsComponent,
        InitialShapeSelectionDirective,
        InitialShapeSelectionsDirective,
        MarkerDirective,
        MarkersDirective,
        ColorMappingDirective,
        ColorMappingsDirective,
        BubbleDirective,
        BubblesDirective,
        NavigationLineDirective,
        NavigationLinesDirective,
        LayerDirective,
        LayersDirective,
        AnnotationDirective,
        AnnotationsDirective] });
MapsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MapsModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MapsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        MapsComponent,
                        InitialShapeSelectionDirective,
                        InitialShapeSelectionsDirective,
                        MarkerDirective,
                        MarkersDirective,
                        ColorMappingDirective,
                        ColorMappingsDirective,
                        BubbleDirective,
                        BubblesDirective,
                        NavigationLineDirective,
                        NavigationLinesDirective,
                        LayerDirective,
                        LayersDirective,
                        AnnotationDirective,
                        AnnotationsDirective
                    ],
                    exports: [
                        MapsComponent,
                        InitialShapeSelectionDirective,
                        InitialShapeSelectionsDirective,
                        MarkerDirective,
                        MarkersDirective,
                        ColorMappingDirective,
                        ColorMappingsDirective,
                        BubbleDirective,
                        BubblesDirective,
                        NavigationLineDirective,
                        NavigationLinesDirective,
                        LayerDirective,
                        LayersDirective,
                        AnnotationDirective,
                        AnnotationsDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbWFwcy9tYXBzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwSCxPQUFPLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekYsT0FBTyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUVqRDs7R0FFRztBQXNDSCxNQUFNLE9BQU8sVUFBVTs7dUdBQVYsVUFBVTt3R0FBVixVQUFVLGlCQWxDZixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLCtCQUErQjtRQUMvQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLG9CQUFvQixhQWhCZCxZQUFZLGFBbUJsQixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLCtCQUErQjtRQUMvQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLG9CQUFvQjt3R0FHZixVQUFVLFlBcENWLENBQUMsWUFBWSxDQUFDOzJGQW9DZCxVQUFVO2tCQXJDdEIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDVixhQUFhO3dCQUNiLDhCQUE4Qjt3QkFDOUIsK0JBQStCO3dCQUMvQixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIscUJBQXFCO3dCQUNyQixzQkFBc0I7d0JBQ3RCLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQix1QkFBdUI7d0JBQ3ZCLHdCQUF3Qjt3QkFDeEIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsYUFBYTt3QkFDYiw4QkFBOEI7d0JBQzlCLCtCQUErQjt3QkFDL0IsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsdUJBQXVCO3dCQUN2Qix3QkFBd0I7d0JBQ3hCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLG9CQUFvQjtxQkFDdkI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluaXRpYWxTaGFwZVNlbGVjdGlvbkRpcmVjdGl2ZSwgSW5pdGlhbFNoYXBlU2VsZWN0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vaW5pdGlhbHNoYXBlc2VsZWN0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNYXJrZXJEaXJlY3RpdmUsIE1hcmtlcnNEaXJlY3RpdmUgfSBmcm9tICcuL21hcmtlcnNldHRpbmdzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb2xvck1hcHBpbmdEaXJlY3RpdmUsIENvbG9yTWFwcGluZ3NEaXJlY3RpdmUgfSBmcm9tICcuL2NvbG9ybWFwcGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnViYmxlRGlyZWN0aXZlLCBCdWJibGVzRGlyZWN0aXZlIH0gZnJvbSAnLi9idWJibGVzZXR0aW5ncy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkxpbmVEaXJlY3RpdmUsIE5hdmlnYXRpb25MaW5lc0RpcmVjdGl2ZSB9IGZyb20gJy4vbmF2aWdhdGlvbmxpbmVzZXR0aW5ncy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTGF5ZXJEaXJlY3RpdmUsIExheWVyc0RpcmVjdGl2ZSB9IGZyb20gJy4vbGF5ZXJzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBbm5vdGF0aW9uRGlyZWN0aXZlLCBBbm5vdGF0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vYW5ub3RhdGlvbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1hcHNDb21wb25lbnQgfSBmcm9tICcuL21hcHMuY29tcG9uZW50JztcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgTWFwcyBjb21wb25lbnQuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE1hcHNDb21wb25lbnQsXG4gICAgICAgIEluaXRpYWxTaGFwZVNlbGVjdGlvbkRpcmVjdGl2ZSxcbiAgICAgICAgSW5pdGlhbFNoYXBlU2VsZWN0aW9uc0RpcmVjdGl2ZSxcbiAgICAgICAgTWFya2VyRGlyZWN0aXZlLFxuICAgICAgICBNYXJrZXJzRGlyZWN0aXZlLFxuICAgICAgICBDb2xvck1hcHBpbmdEaXJlY3RpdmUsXG4gICAgICAgIENvbG9yTWFwcGluZ3NEaXJlY3RpdmUsXG4gICAgICAgIEJ1YmJsZURpcmVjdGl2ZSxcbiAgICAgICAgQnViYmxlc0RpcmVjdGl2ZSxcbiAgICAgICAgTmF2aWdhdGlvbkxpbmVEaXJlY3RpdmUsXG4gICAgICAgIE5hdmlnYXRpb25MaW5lc0RpcmVjdGl2ZSxcbiAgICAgICAgTGF5ZXJEaXJlY3RpdmUsXG4gICAgICAgIExheWVyc0RpcmVjdGl2ZSxcbiAgICAgICAgQW5ub3RhdGlvbkRpcmVjdGl2ZSxcbiAgICAgICAgQW5ub3RhdGlvbnNEaXJlY3RpdmVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTWFwc0NvbXBvbmVudCxcbiAgICAgICAgSW5pdGlhbFNoYXBlU2VsZWN0aW9uRGlyZWN0aXZlLFxuICAgICAgICBJbml0aWFsU2hhcGVTZWxlY3Rpb25zRGlyZWN0aXZlLFxuICAgICAgICBNYXJrZXJEaXJlY3RpdmUsXG4gICAgICAgIE1hcmtlcnNEaXJlY3RpdmUsXG4gICAgICAgIENvbG9yTWFwcGluZ0RpcmVjdGl2ZSxcbiAgICAgICAgQ29sb3JNYXBwaW5nc0RpcmVjdGl2ZSxcbiAgICAgICAgQnViYmxlRGlyZWN0aXZlLFxuICAgICAgICBCdWJibGVzRGlyZWN0aXZlLFxuICAgICAgICBOYXZpZ2F0aW9uTGluZURpcmVjdGl2ZSxcbiAgICAgICAgTmF2aWdhdGlvbkxpbmVzRGlyZWN0aXZlLFxuICAgICAgICBMYXllckRpcmVjdGl2ZSxcbiAgICAgICAgTGF5ZXJzRGlyZWN0aXZlLFxuICAgICAgICBBbm5vdGF0aW9uRGlyZWN0aXZlLFxuICAgICAgICBBbm5vdGF0aW9uc0RpcmVjdGl2ZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTWFwc01vZHVsZSB7IH0iXX0=