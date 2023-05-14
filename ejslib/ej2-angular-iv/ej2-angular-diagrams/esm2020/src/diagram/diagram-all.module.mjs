import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagramModule } from './diagram.module';
import { HierarchicalTree, MindMap, RadialTree, ComplexHierarchicalTree, DataBinding, Snapping, PrintAndExport, BpmnDiagrams, SymmetricLayout, ConnectorBridging, UndoRedo, LayoutAnimation, DiagramContextMenu, LineRouting, ConnectorEditing, BlazorTooltip, LineDistribution } from '@syncfusion/ej2-diagrams';
import * as i0 from "@angular/core";
export const HierarchicalTreeService = { provide: 'DiagramsHierarchicalTree', useValue: HierarchicalTree };
export const MindMapService = { provide: 'DiagramsMindMap', useValue: MindMap };
export const RadialTreeService = { provide: 'DiagramsRadialTree', useValue: RadialTree };
export const ComplexHierarchicalTreeService = { provide: 'DiagramsComplexHierarchicalTree', useValue: ComplexHierarchicalTree };
export const DataBindingService = { provide: 'DiagramsDataBinding', useValue: DataBinding };
export const SnappingService = { provide: 'DiagramsSnapping', useValue: Snapping };
export const PrintAndExportService = { provide: 'DiagramsPrintAndExport', useValue: PrintAndExport };
export const BpmnDiagramsService = { provide: 'DiagramsBpmnDiagrams', useValue: BpmnDiagrams };
export const SymmetricLayoutService = { provide: 'DiagramsSymmetricLayout', useValue: SymmetricLayout };
export const ConnectorBridgingService = { provide: 'DiagramsConnectorBridging', useValue: ConnectorBridging };
export const UndoRedoService = { provide: 'DiagramsUndoRedo', useValue: UndoRedo };
export const LayoutAnimationService = { provide: 'DiagramsLayoutAnimation', useValue: LayoutAnimation };
export const DiagramContextMenuService = { provide: 'DiagramsDiagramContextMenu', useValue: DiagramContextMenu };
export const LineRoutingService = { provide: 'DiagramsLineRouting', useValue: LineRouting };
export const ConnectorEditingService = { provide: 'DiagramsConnectorEditing', useValue: ConnectorEditing };
export const BlazorTooltipService = { provide: 'DiagramsBlazorTooltip', useValue: BlazorTooltip };
export const LineDistributionService = { provide: 'DiagramsLineDistribution', useValue: LineDistribution };
/**
 * NgModule definition for the Diagram component with providers.
 */
export class DiagramAllModule {
}
DiagramAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DiagramAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DiagramAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DiagramAllModule, imports: [CommonModule, DiagramModule], exports: [DiagramModule] });
DiagramAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DiagramAllModule, providers: [
        HierarchicalTreeService,
        MindMapService,
        RadialTreeService,
        ComplexHierarchicalTreeService,
        DataBindingService,
        SnappingService,
        PrintAndExportService,
        BpmnDiagramsService,
        SymmetricLayoutService,
        ConnectorBridgingService,
        UndoRedoService,
        LayoutAnimationService,
        DiagramContextMenuService,
        LineRoutingService,
        ConnectorEditingService,
        BlazorTooltipService,
        LineDistributionService
    ], imports: [[CommonModule, DiagramModule], DiagramModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DiagramAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DiagramModule],
                    exports: [
                        DiagramModule
                    ],
                    providers: [
                        HierarchicalTreeService,
                        MindMapService,
                        RadialTreeService,
                        ComplexHierarchicalTreeService,
                        DataBindingService,
                        SnappingService,
                        PrintAndExportService,
                        BpmnDiagramsService,
                        SymmetricLayoutService,
                        ConnectorBridgingService,
                        UndoRedoService,
                        LayoutAnimationService,
                        DiagramContextMenuService,
                        LineRoutingService,
                        ConnectorEditingService,
                        BlazorTooltipService,
                        LineDistributionService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS1hbGwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RpYWdyYW0vZGlhZ3JhbS1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVcvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFDLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQTs7QUFHL1MsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDO0FBQ3pILE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBa0IsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQyxDQUFDO0FBQzlGLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFrQixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDLENBQUM7QUFDdkcsTUFBTSxDQUFDLE1BQU0sOEJBQThCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBQyxDQUFDO0FBQzlJLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFrQixFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVB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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFZhbHVlUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMYXllckRpcmVjdGl2ZSwgTGF5ZXJzRGlyZWN0aXZlIH0gZnJvbSAnLi9sYXllcnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEN1c3RvbUN1cnNvckRpcmVjdGl2ZSwgQ3VzdG9tQ3Vyc29yc0RpcmVjdGl2ZSB9IGZyb20gJy4vY3VzdG9tY3Vyc29yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb25uZWN0b3JGaXhlZFVzZXJIYW5kbGVEaXJlY3RpdmUsIENvbm5lY3RvckZpeGVkVXNlckhhbmRsZXNEaXJlY3RpdmUgfSBmcm9tICcuL2Nvbm5lY3Rvci1maXhlZHVzZXJoYW5kbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbm5lY3RvckFubm90YXRpb25EaXJlY3RpdmUsIENvbm5lY3RvckFubm90YXRpb25zRGlyZWN0aXZlIH0gZnJvbSAnLi9jb25uZWN0b3ItYW5ub3RhdGlvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29ubmVjdG9yRGlyZWN0aXZlLCBDb25uZWN0b3JzRGlyZWN0aXZlIH0gZnJvbSAnLi9jb25uZWN0b3JzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOb2RlRml4ZWRVc2VySGFuZGxlRGlyZWN0aXZlLCBOb2RlRml4ZWRVc2VySGFuZGxlc0RpcmVjdGl2ZSB9IGZyb20gJy4vbm9kZS1maXhlZHVzZXJoYW5kbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5vZGVBbm5vdGF0aW9uRGlyZWN0aXZlLCBOb2RlQW5ub3RhdGlvbnNEaXJlY3RpdmUgfSBmcm9tICcuL25vZGUtYW5ub3RhdGlvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUG9ydERpcmVjdGl2ZSwgUG9ydHNEaXJlY3RpdmUgfSBmcm9tICcuL3BvcnRzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOb2RlRGlyZWN0aXZlLCBOb2Rlc0RpcmVjdGl2ZSB9IGZyb20gJy4vbm9kZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IERpYWdyYW1Db21wb25lbnQgfSBmcm9tICcuL2RpYWdyYW0uY29tcG9uZW50JztcbmltcG9ydCB7IERpYWdyYW1Nb2R1bGUgfSBmcm9tICcuL2RpYWdyYW0ubW9kdWxlJztcbmltcG9ydCB7SGllcmFyY2hpY2FsVHJlZSwgTWluZE1hcCwgUmFkaWFsVHJlZSwgQ29tcGxleEhpZXJhcmNoaWNhbFRyZWUsIERhdGFCaW5kaW5nLCBTbmFwcGluZywgUHJpbnRBbmRFeHBvcnQsIEJwbW5EaWFncmFtcywgU3ltbWV0cmljTGF5b3V0LCBDb25uZWN0b3JCcmlkZ2luZywgVW5kb1JlZG8sIExheW91dEFuaW1hdGlvbiwgRGlhZ3JhbUNvbnRleHRNZW51LCBMaW5lUm91dGluZywgQ29ubmVjdG9yRWRpdGluZywgQmxhem9yVG9vbHRpcCwgTGluZURpc3RyaWJ1dGlvbn0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWRpYWdyYW1zJ1xuXG5cbmV4cG9ydCBjb25zdCBIaWVyYXJjaGljYWxUcmVlU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0RpYWdyYW1zSGllcmFyY2hpY2FsVHJlZScsIHVzZVZhbHVlOiBIaWVyYXJjaGljYWxUcmVlfTtcbmV4cG9ydCBjb25zdCBNaW5kTWFwU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0RpYWdyYW1zTWluZE1hcCcsIHVzZVZhbHVlOiBNaW5kTWFwfTtcbmV4cG9ydCBjb25zdCBSYWRpYWxUcmVlU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0RpYWdyYW1zUmFkaWFsVHJlZScsIHVzZVZhbHVlOiBSYWRpYWxUcmVlfTtcbmV4cG9ydCBjb25zdCBDb21wbGV4SGllcmFyY2hpY2FsVHJlZVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdEaWFncmFtc0NvbXBsZXhIaWVyYXJjaGljYWxUcmVlJywgdXNlVmFsdWU6IENvbXBsZXhIaWVyYXJjaGljYWxUcmVlfTtcbmV4cG9ydCBjb25zdCBEYXRhQmluZGluZ1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdEaWFncmFtc0RhdGFCaW5kaW5nJywgdXNlVmFsdWU6IERhdGFCaW5kaW5nfTtcbmV4cG9ydCBjb25zdCBTbmFwcGluZ1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdEaWFncmFtc1NuYXBwaW5nJywgdXNlVmFsdWU6IFNuYXBwaW5nfTtcbmV4cG9ydCBjb25zdCBQcmludEFuZEV4cG9ydFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdEaWFncmFtc1ByaW50QW5kRXhwb3J0JywgdXNlVmFsdWU6IFByaW50QW5kRXhwb3J0fTtcbmV4cG9ydCBjb25zdCBCcG1uRGlhZ3JhbXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnRGlhZ3JhbXNCcG1uRGlhZ3JhbXMnLCB1c2VWYWx1ZTogQnBtbkRpYWdyYW1zfTtcbmV4cG9ydCBjb25zdCBTeW1tZXRyaWNMYXlvdXRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnRGlhZ3JhbXNTeW1tZXRyaWNMYXlvdXQnLCB1c2VWYWx1ZTogU3ltbWV0cmljTGF5b3V0fTtcbmV4cG9ydCBjb25zdCBDb25uZWN0b3JCcmlkZ2luZ1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdEaWFncmFtc0Nvbm5lY3RvckJyaWRnaW5nJywgdXNlVmFsdWU6IENvbm5lY3RvckJyaWRnaW5nfTtcbmV4cG9ydCBjb25zdCBVbmRvUmVkb1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdEaWFncmFtc1VuZG9SZWRvJywgdXNlVmFsdWU6IFVuZG9SZWRvfTtcbmV4cG9ydCBjb25zdCBMYXlvdXRBbmltYXRpb25TZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnRGlhZ3JhbXNMYXlvdXRBbmltYXRpb24nLCB1c2VWYWx1ZTogTGF5b3V0QW5pbWF0aW9ufTtcbmV4cG9ydCBjb25zdCBEaWFncmFtQ29udGV4dE1lbnVTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnRGlhZ3JhbXNEaWFncmFtQ29udGV4dE1lbnUnLCB1c2VWYWx1ZTogRGlhZ3JhbUNvbnRleHRNZW51fTtcbmV4cG9ydCBjb25zdCBMaW5lUm91dGluZ1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdEaWFncmFtc0xpbmVSb3V0aW5nJywgdXNlVmFsdWU6IExpbmVSb3V0aW5nfTtcbmV4cG9ydCBjb25zdCBDb25uZWN0b3JFZGl0aW5nU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0RpYWdyYW1zQ29ubmVjdG9yRWRpdGluZycsIHVzZVZhbHVlOiBDb25uZWN0b3JFZGl0aW5nfTtcbmV4cG9ydCBjb25zdCBCbGF6b3JUb29sdGlwU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0RpYWdyYW1zQmxhem9yVG9vbHRpcCcsIHVzZVZhbHVlOiBCbGF6b3JUb29sdGlwfTtcbmV4cG9ydCBjb25zdCBMaW5lRGlzdHJpYnV0aW9uU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0RpYWdyYW1zTGluZURpc3RyaWJ1dGlvbicsIHVzZVZhbHVlOiBMaW5lRGlzdHJpYnV0aW9ufTtcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgRGlhZ3JhbSBjb21wb25lbnQgd2l0aCBwcm92aWRlcnMuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGlhZ3JhbU1vZHVsZV0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBEaWFncmFtTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6W1xuICAgICAgICBIaWVyYXJjaGljYWxUcmVlU2VydmljZSxcbiAgICAgICAgTWluZE1hcFNlcnZpY2UsXG4gICAgICAgIFJhZGlhbFRyZWVTZXJ2aWNlLFxuICAgICAgICBDb21wbGV4SGllcmFyY2hpY2FsVHJlZVNlcnZpY2UsXG4gICAgICAgIERhdGFCaW5kaW5nU2VydmljZSxcbiAgICAgICAgU25hcHBpbmdTZXJ2aWNlLFxuICAgICAgICBQcmludEFuZEV4cG9ydFNlcnZpY2UsXG4gICAgICAgIEJwbW5EaWFncmFtc1NlcnZpY2UsXG4gICAgICAgIFN5bW1ldHJpY0xheW91dFNlcnZpY2UsXG4gICAgICAgIENvbm5lY3RvckJyaWRnaW5nU2VydmljZSxcbiAgICAgICAgVW5kb1JlZG9TZXJ2aWNlLFxuICAgICAgICBMYXlvdXRBbmltYXRpb25TZXJ2aWNlLFxuICAgICAgICBEaWFncmFtQ29udGV4dE1lbnVTZXJ2aWNlLFxuICAgICAgICBMaW5lUm91dGluZ1NlcnZpY2UsXG4gICAgICAgIENvbm5lY3RvckVkaXRpbmdTZXJ2aWNlLFxuICAgICAgICBCbGF6b3JUb29sdGlwU2VydmljZSxcbiAgICAgICAgTGluZURpc3RyaWJ1dGlvblNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIERpYWdyYW1BbGxNb2R1bGUgeyB9Il19