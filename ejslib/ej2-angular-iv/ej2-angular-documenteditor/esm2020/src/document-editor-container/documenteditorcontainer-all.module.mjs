import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentEditorContainerModule } from './documenteditorcontainer.module';
import { Toolbar } from '@syncfusion/ej2-documenteditor';
import * as i0 from "@angular/core";
export const ToolbarService = { provide: 'DocumentEditorToolbar', useValue: Toolbar };
/**
 * NgModule definition for the DocumentEditorContainer component with providers.
 */
export class DocumentEditorContainerAllModule {
}
DocumentEditorContainerAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorContainerAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DocumentEditorContainerAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorContainerAllModule, imports: [CommonModule, DocumentEditorContainerModule], exports: [DocumentEditorContainerModule] });
DocumentEditorContainerAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorContainerAllModule, providers: [
        ToolbarService
    ], imports: [[CommonModule, DocumentEditorContainerModule], DocumentEditorContainerModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorContainerAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DocumentEditorContainerModule],
                    exports: [
                        DocumentEditorContainerModule
                    ],
                    providers: [
                        ToolbarService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRlZGl0b3Jjb250YWluZXItYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N1bWVudC1lZGl0b3ItY29udGFpbmVyL2RvY3VtZW50ZWRpdG9yY29udGFpbmVyLWFsbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQTs7QUFHdEQsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFrQixFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDLENBQUM7QUFFcEc7O0dBRUc7QUFVSCxNQUFNLE9BQU8sZ0NBQWdDOzs2SEFBaEMsZ0NBQWdDOzhIQUFoQyxnQ0FBZ0MsWUFSL0IsWUFBWSxFQUFFLDZCQUE2QixhQUVqRCw2QkFBNkI7OEhBTXhCLGdDQUFnQyxhQUovQjtRQUNOLGNBQWM7S0FDakIsWUFOUSxDQUFDLFlBQVksRUFBRSw2QkFBNkIsQ0FBQyxFQUVsRCw2QkFBNkI7MkZBTXhCLGdDQUFnQztrQkFUNUMsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsNkJBQTZCLENBQUM7b0JBQ3RELE9BQU8sRUFBRTt3QkFDTCw2QkFBNkI7cUJBQ2hDO29CQUNELFNBQVMsRUFBQzt3QkFDTixjQUFjO3FCQUNqQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9jdW1lbnRFZGl0b3JDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2RvY3VtZW50ZWRpdG9yY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb2N1bWVudEVkaXRvckNvbnRhaW5lck1vZHVsZSB9IGZyb20gJy4vZG9jdW1lbnRlZGl0b3Jjb250YWluZXIubW9kdWxlJztcbmltcG9ydCB7VG9vbGJhcn0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWRvY3VtZW50ZWRpdG9yJ1xuXG5cbmV4cG9ydCBjb25zdCBUb29sYmFyU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0RvY3VtZW50RWRpdG9yVG9vbGJhcicsIHVzZVZhbHVlOiBUb29sYmFyfTtcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgRG9jdW1lbnRFZGl0b3JDb250YWluZXIgY29tcG9uZW50IHdpdGggcHJvdmlkZXJzLlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERvY3VtZW50RWRpdG9yQ29udGFpbmVyTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIERvY3VtZW50RWRpdG9yQ29udGFpbmVyTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6W1xuICAgICAgICBUb29sYmFyU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRFZGl0b3JDb250YWluZXJBbGxNb2R1bGUgeyB9Il19