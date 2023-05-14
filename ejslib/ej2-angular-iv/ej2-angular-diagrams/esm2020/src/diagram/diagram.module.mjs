import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayerDirective, LayersDirective } from './layers.directive';
import { CustomCursorDirective, CustomCursorsDirective } from './customcursor.directive';
import { ConnectorFixedUserHandleDirective, ConnectorFixedUserHandlesDirective } from './connector-fixeduserhandle.directive';
import { ConnectorAnnotationDirective, ConnectorAnnotationsDirective } from './connector-annotation.directive';
import { ConnectorDirective, ConnectorsDirective } from './connectors.directive';
import { NodeFixedUserHandleDirective, NodeFixedUserHandlesDirective } from './node-fixeduserhandle.directive';
import { NodeAnnotationDirective, NodeAnnotationsDirective } from './node-annotation.directive';
import { PortDirective, PortsDirective } from './ports.directive';
import { NodeDirective, NodesDirective } from './nodes.directive';
import { DiagramComponent } from './diagram.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the Diagram component.
 */
export class DiagramModule {
}
DiagramModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DiagramModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DiagramModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DiagramModule, declarations: [DiagramComponent,
        LayerDirective,
        LayersDirective,
        CustomCursorDirective,
        CustomCursorsDirective,
        ConnectorFixedUserHandleDirective,
        ConnectorFixedUserHandlesDirective,
        ConnectorAnnotationDirective,
        ConnectorAnnotationsDirective,
        ConnectorDirective,
        ConnectorsDirective,
        NodeFixedUserHandleDirective,
        NodeFixedUserHandlesDirective,
        NodeAnnotationDirective,
        NodeAnnotationsDirective,
        PortDirective,
        PortsDirective,
        NodeDirective,
        NodesDirective], imports: [CommonModule], exports: [DiagramComponent,
        LayerDirective,
        LayersDirective,
        CustomCursorDirective,
        CustomCursorsDirective,
        ConnectorFixedUserHandleDirective,
        ConnectorFixedUserHandlesDirective,
        ConnectorAnnotationDirective,
        ConnectorAnnotationsDirective,
        ConnectorDirective,
        ConnectorsDirective,
        NodeFixedUserHandleDirective,
        NodeFixedUserHandlesDirective,
        NodeAnnotationDirective,
        NodeAnnotationsDirective,
        PortDirective,
        PortsDirective,
        NodeDirective,
        NodesDirective] });
DiagramModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DiagramModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DiagramModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        DiagramComponent,
                        LayerDirective,
                        LayersDirective,
                        CustomCursorDirective,
                        CustomCursorsDirective,
                        ConnectorFixedUserHandleDirective,
                        ConnectorFixedUserHandlesDirective,
                        ConnectorAnnotationDirective,
                        ConnectorAnnotationsDirective,
                        ConnectorDirective,
                        ConnectorsDirective,
                        NodeFixedUserHandleDirective,
                        NodeFixedUserHandlesDirective,
                        NodeAnnotationDirective,
                        NodeAnnotationsDirective,
                        PortDirective,
                        PortsDirective,
                        NodeDirective,
                        NodesDirective
                    ],
                    exports: [
                        DiagramComponent,
                        LayerDirective,
                        LayersDirective,
                        CustomCursorDirective,
                        CustomCursorsDirective,
                        ConnectorFixedUserHandleDirective,
                        ConnectorFixedUserHandlesDirective,
                        ConnectorAnnotationDirective,
                        ConnectorAnnotationsDirective,
                        ConnectorDirective,
                        ConnectorsDirective,
                        NodeFixedUserHandleDirective,
                        NodeFixedUserHandlesDirective,
                        NodeAnnotationDirective,
                        NodeAnnotationsDirective,
                        PortDirective,
                        PortsDirective,
                        NodeDirective,
                        NodesDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGlhZ3JhbS9kaWFncmFtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzlILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9HLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9HLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hHLE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdkQ7O0dBRUc7QUE4Q0gsTUFBTSxPQUFPLGFBQWE7OzBHQUFiLGFBQWE7MkdBQWIsYUFBYSxpQkExQ2xCLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsZUFBZTtRQUNmLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsaUNBQWlDO1FBQ2pDLGtDQUFrQztRQUNsQyw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUM3Qix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLGFBQWE7UUFDYixjQUFjO1FBQ2QsYUFBYTtRQUNiLGNBQWMsYUFwQlIsWUFBWSxhQXVCbEIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixpQ0FBaUM7UUFDakMsa0NBQWtDO1FBQ2xDLDRCQUE0QjtRQUM1Qiw2QkFBNkI7UUFDN0Isa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQiw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsYUFBYTtRQUNiLGNBQWM7UUFDZCxhQUFhO1FBQ2IsY0FBYzsyR0FHVCxhQUFhLFlBNUNiLENBQUMsWUFBWSxDQUFDOzJGQTRDZCxhQUFhO2tCQTdDekIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDVixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsaUNBQWlDO3dCQUNqQyxrQ0FBa0M7d0JBQ2xDLDRCQUE0Qjt3QkFDNUIsNkJBQTZCO3dCQUM3QixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsNEJBQTRCO3dCQUM1Qiw2QkFBNkI7d0JBQzdCLHVCQUF1Qjt3QkFDdkIsd0JBQXdCO3dCQUN4QixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixjQUFjO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YscUJBQXFCO3dCQUNyQixzQkFBc0I7d0JBQ3RCLGlDQUFpQzt3QkFDakMsa0NBQWtDO3dCQUNsQyw0QkFBNEI7d0JBQzVCLDZCQUE2Qjt3QkFDN0Isa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLDRCQUE0Qjt3QkFDNUIsNkJBQTZCO3dCQUM3Qix1QkFBdUI7d0JBQ3ZCLHdCQUF3Qjt3QkFDeEIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsY0FBYztxQkFDakI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IExheWVyRGlyZWN0aXZlLCBMYXllcnNEaXJlY3RpdmUgfSBmcm9tICcuL2xheWVycy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ3VzdG9tQ3Vyc29yRGlyZWN0aXZlLCBDdXN0b21DdXJzb3JzRGlyZWN0aXZlIH0gZnJvbSAnLi9jdXN0b21jdXJzb3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbm5lY3RvckZpeGVkVXNlckhhbmRsZURpcmVjdGl2ZSwgQ29ubmVjdG9yRml4ZWRVc2VySGFuZGxlc0RpcmVjdGl2ZSB9IGZyb20gJy4vY29ubmVjdG9yLWZpeGVkdXNlcmhhbmRsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29ubmVjdG9yQW5ub3RhdGlvbkRpcmVjdGl2ZSwgQ29ubmVjdG9yQW5ub3RhdGlvbnNEaXJlY3RpdmUgfSBmcm9tICcuL2Nvbm5lY3Rvci1hbm5vdGF0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb25uZWN0b3JEaXJlY3RpdmUsIENvbm5lY3RvcnNEaXJlY3RpdmUgfSBmcm9tICcuL2Nvbm5lY3RvcnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5vZGVGaXhlZFVzZXJIYW5kbGVEaXJlY3RpdmUsIE5vZGVGaXhlZFVzZXJIYW5kbGVzRGlyZWN0aXZlIH0gZnJvbSAnLi9ub2RlLWZpeGVkdXNlcmhhbmRsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTm9kZUFubm90YXRpb25EaXJlY3RpdmUsIE5vZGVBbm5vdGF0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vbm9kZS1hbm5vdGF0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQb3J0RGlyZWN0aXZlLCBQb3J0c0RpcmVjdGl2ZSB9IGZyb20gJy4vcG9ydHMuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5vZGVEaXJlY3RpdmUsIE5vZGVzRGlyZWN0aXZlIH0gZnJvbSAnLi9ub2Rlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gJy4vZGlhZ3JhbS5jb21wb25lbnQnO1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBEaWFncmFtIGNvbXBvbmVudC5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRGlhZ3JhbUNvbXBvbmVudCxcbiAgICAgICAgTGF5ZXJEaXJlY3RpdmUsXG4gICAgICAgIExheWVyc0RpcmVjdGl2ZSxcbiAgICAgICAgQ3VzdG9tQ3Vyc29yRGlyZWN0aXZlLFxuICAgICAgICBDdXN0b21DdXJzb3JzRGlyZWN0aXZlLFxuICAgICAgICBDb25uZWN0b3JGaXhlZFVzZXJIYW5kbGVEaXJlY3RpdmUsXG4gICAgICAgIENvbm5lY3RvckZpeGVkVXNlckhhbmRsZXNEaXJlY3RpdmUsXG4gICAgICAgIENvbm5lY3RvckFubm90YXRpb25EaXJlY3RpdmUsXG4gICAgICAgIENvbm5lY3RvckFubm90YXRpb25zRGlyZWN0aXZlLFxuICAgICAgICBDb25uZWN0b3JEaXJlY3RpdmUsXG4gICAgICAgIENvbm5lY3RvcnNEaXJlY3RpdmUsXG4gICAgICAgIE5vZGVGaXhlZFVzZXJIYW5kbGVEaXJlY3RpdmUsXG4gICAgICAgIE5vZGVGaXhlZFVzZXJIYW5kbGVzRGlyZWN0aXZlLFxuICAgICAgICBOb2RlQW5ub3RhdGlvbkRpcmVjdGl2ZSxcbiAgICAgICAgTm9kZUFubm90YXRpb25zRGlyZWN0aXZlLFxuICAgICAgICBQb3J0RGlyZWN0aXZlLFxuICAgICAgICBQb3J0c0RpcmVjdGl2ZSxcbiAgICAgICAgTm9kZURpcmVjdGl2ZSxcbiAgICAgICAgTm9kZXNEaXJlY3RpdmVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgRGlhZ3JhbUNvbXBvbmVudCxcbiAgICAgICAgTGF5ZXJEaXJlY3RpdmUsXG4gICAgICAgIExheWVyc0RpcmVjdGl2ZSxcbiAgICAgICAgQ3VzdG9tQ3Vyc29yRGlyZWN0aXZlLFxuICAgICAgICBDdXN0b21DdXJzb3JzRGlyZWN0aXZlLFxuICAgICAgICBDb25uZWN0b3JGaXhlZFVzZXJIYW5kbGVEaXJlY3RpdmUsXG4gICAgICAgIENvbm5lY3RvckZpeGVkVXNlckhhbmRsZXNEaXJlY3RpdmUsXG4gICAgICAgIENvbm5lY3RvckFubm90YXRpb25EaXJlY3RpdmUsXG4gICAgICAgIENvbm5lY3RvckFubm90YXRpb25zRGlyZWN0aXZlLFxuICAgICAgICBDb25uZWN0b3JEaXJlY3RpdmUsXG4gICAgICAgIENvbm5lY3RvcnNEaXJlY3RpdmUsXG4gICAgICAgIE5vZGVGaXhlZFVzZXJIYW5kbGVEaXJlY3RpdmUsXG4gICAgICAgIE5vZGVGaXhlZFVzZXJIYW5kbGVzRGlyZWN0aXZlLFxuICAgICAgICBOb2RlQW5ub3RhdGlvbkRpcmVjdGl2ZSxcbiAgICAgICAgTm9kZUFubm90YXRpb25zRGlyZWN0aXZlLFxuICAgICAgICBQb3J0RGlyZWN0aXZlLFxuICAgICAgICBQb3J0c0RpcmVjdGl2ZSxcbiAgICAgICAgTm9kZURpcmVjdGl2ZSxcbiAgICAgICAgTm9kZXNEaXJlY3RpdmVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIERpYWdyYW1Nb2R1bGUgeyB9Il19