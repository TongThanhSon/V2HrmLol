import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpreadsheetModule } from './spreadsheet.module';
import { Clipboard, Edit, KeyboardNavigation, KeyboardShortcut, CollaborativeEditing, Selection, ContextMenu, FormulaBar, Ribbon, Save, Open, SheetTabs, DataBind, AllModule, BasicModule, CellFormat, NumberFormat, Formula } from '@syncfusion/ej2-spreadsheet';
import * as i0 from "@angular/core";
export const ClipboardService = { provide: 'SpreadsheetClipboard', useValue: Clipboard };
export const EditService = { provide: 'SpreadsheetEdit', useValue: Edit };
export const KeyboardNavigationService = { provide: 'SpreadsheetKeyboardNavigation', useValue: KeyboardNavigation };
export const KeyboardShortcutService = { provide: 'SpreadsheetKeyboardShortcut', useValue: KeyboardShortcut };
export const CollaborativeEditingService = { provide: 'SpreadsheetCollaborativeEditing', useValue: CollaborativeEditing };
export const SelectionService = { provide: 'SpreadsheetSelection', useValue: Selection };
export const ContextMenuService = { provide: 'SpreadsheetContextMenu', useValue: ContextMenu };
export const FormulaBarService = { provide: 'SpreadsheetFormulaBar', useValue: FormulaBar };
export const RibbonService = { provide: 'SpreadsheetRibbon', useValue: Ribbon };
export const SaveService = { provide: 'SpreadsheetSave', useValue: Save };
export const OpenService = { provide: 'SpreadsheetOpen', useValue: Open };
export const SheetTabsService = { provide: 'SpreadsheetSheetTabs', useValue: SheetTabs };
export const DataBindService = { provide: 'SpreadsheetDataBind', useValue: DataBind };
export const AllModuleService = { provide: 'SpreadsheetAllModule', useValue: AllModule };
export const BasicModuleService = { provide: 'SpreadsheetBasicModule', useValue: BasicModule };
export const CellFormatService = { provide: 'SpreadsheetCellFormat', useValue: CellFormat };
export const NumberFormatService = { provide: 'SpreadsheetNumberFormat', useValue: NumberFormat };
export const FormulaService = { provide: 'SpreadsheetFormula', useValue: Formula };
/**
 * NgModule definition for the Spreadsheet component with providers.
 */
export class SpreadsheetAllModule {
}
SpreadsheetAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SpreadsheetAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SpreadsheetAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SpreadsheetAllModule, imports: [CommonModule, SpreadsheetModule], exports: [SpreadsheetModule] });
SpreadsheetAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SpreadsheetAllModule, providers: [
        ClipboardService,
        EditService,
        KeyboardNavigationService,
        KeyboardShortcutService,
        CollaborativeEditingService,
        SelectionService,
        ContextMenuService,
        FormulaBarService,
        RibbonService,
        SaveService,
        OpenService,
        SheetTabsService,
        DataBindService,
        AllModuleService,
        BasicModuleService,
        CellFormatService,
        NumberFormatService,
        FormulaService
    ], imports: [[CommonModule, SpreadsheetModule], SpreadsheetModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SpreadsheetAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SpreadsheetModule],
                    exports: [
                        SpreadsheetModule
                    ],
                    providers: [
                        ClipboardService,
                        EditService,
                        KeyboardNavigationService,
                        KeyboardShortcutService,
                        CollaborativeEditingService,
                        SelectionService,
                        ContextMenuService,
                        FormulaBarService,
                        RibbonService,
                        SaveService,
                        OpenService,
                        SheetTabsService,
                        DataBindService,
                        AllModuleService,
                        BasicModuleService,
                        CellFormatService,
                        NumberFormatService,
                        FormulaService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ByZWFkc2hlZXQtYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zcHJlYWRzaGVldC9zcHJlYWRzaGVldC1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVcvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQTs7QUFHL1AsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUMsQ0FBQztBQUN2RyxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQztBQUN4RixNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFDLENBQUM7QUFDbEksTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDO0FBQzVILE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUFrQixFQUFFLE9BQU8sRUFBRSxp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WCxXQUFXO3dCQUNYLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsaUJBQWlCO3dCQUNqQixtQkFBbUI7d0JBQ25CLGNBQWM7cUJBQ2pCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFZhbHVlUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbWFnZURpcmVjdGl2ZSwgSW1hZ2VzRGlyZWN0aXZlIH0gZnJvbSAnLi9pbWFnZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2hhcnREaXJlY3RpdmUsIENoYXJ0c0RpcmVjdGl2ZSB9IGZyb20gJy4vY2hhcnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IENlbGxEaXJlY3RpdmUsIENlbGxzRGlyZWN0aXZlIH0gZnJvbSAnLi9jZWxscy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUm93RGlyZWN0aXZlLCBSb3dzRGlyZWN0aXZlIH0gZnJvbSAnLi9yb3dzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb2x1bW5EaXJlY3RpdmUsIENvbHVtbnNEaXJlY3RpdmUgfSBmcm9tICcuL2NvbHVtbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJhbmdlRGlyZWN0aXZlLCBSYW5nZXNEaXJlY3RpdmUgfSBmcm9tICcuL3Jhbmdlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29uZGl0aW9uYWxGb3JtYXREaXJlY3RpdmUsIENvbmRpdGlvbmFsRm9ybWF0c0RpcmVjdGl2ZSB9IGZyb20gJy4vY29uZGl0aW9uYWxmb3JtYXRzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTaGVldERpcmVjdGl2ZSwgU2hlZXRzRGlyZWN0aXZlIH0gZnJvbSAnLi9zaGVldHMuZGlyZWN0aXZlJztcbmltcG9ydCB7IERlZmluZWROYW1lRGlyZWN0aXZlLCBEZWZpbmVkTmFtZXNEaXJlY3RpdmUgfSBmcm9tICcuL2RlZmluZWRuYW1lcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3ByZWFkc2hlZXRDb21wb25lbnQgfSBmcm9tICcuL3NwcmVhZHNoZWV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcHJlYWRzaGVldE1vZHVsZSB9IGZyb20gJy4vc3ByZWFkc2hlZXQubW9kdWxlJztcbmltcG9ydCB7Q2xpcGJvYXJkLCBFZGl0LCBLZXlib2FyZE5hdmlnYXRpb24sIEtleWJvYXJkU2hvcnRjdXQsIENvbGxhYm9yYXRpdmVFZGl0aW5nLCBTZWxlY3Rpb24sIENvbnRleHRNZW51LCBGb3JtdWxhQmFyLCBSaWJib24sIFNhdmUsIE9wZW4sIFNoZWV0VGFicywgRGF0YUJpbmQsIEFsbE1vZHVsZSwgQmFzaWNNb2R1bGUsIENlbGxGb3JtYXQsIE51bWJlckZvcm1hdCwgRm9ybXVsYX0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLXNwcmVhZHNoZWV0J1xuXG5cbmV4cG9ydCBjb25zdCBDbGlwYm9hcmRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnU3ByZWFkc2hlZXRDbGlwYm9hcmQnLCB1c2VWYWx1ZTogQ2xpcGJvYXJkfTtcbmV4cG9ydCBjb25zdCBFZGl0U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1NwcmVhZHNoZWV0RWRpdCcsIHVzZVZhbHVlOiBFZGl0fTtcbmV4cG9ydCBjb25zdCBLZXlib2FyZE5hdmlnYXRpb25TZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnU3ByZWFkc2hlZXRLZXlib2FyZE5hdmlnYXRpb24nLCB1c2VWYWx1ZTogS2V5Ym9hcmROYXZpZ2F0aW9ufTtcbmV4cG9ydCBjb25zdCBLZXlib2FyZFNob3J0Y3V0U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1NwcmVhZHNoZWV0S2V5Ym9hcmRTaG9ydGN1dCcsIHVzZVZhbHVlOiBLZXlib2FyZFNob3J0Y3V0fTtcbmV4cG9ydCBjb25zdCBDb2xsYWJvcmF0aXZlRWRpdGluZ1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdTcHJlYWRzaGVldENvbGxhYm9yYXRpdmVFZGl0aW5nJywgdXNlVmFsdWU6IENvbGxhYm9yYXRpdmVFZGl0aW5nfTtcbmV4cG9ydCBjb25zdCBTZWxlY3Rpb25TZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnU3ByZWFkc2hlZXRTZWxlY3Rpb24nLCB1c2VWYWx1ZTogU2VsZWN0aW9ufTtcbmV4cG9ydCBjb25zdCBDb250ZXh0TWVudVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdTcHJlYWRzaGVldENvbnRleHRNZW51JywgdXNlVmFsdWU6IENvbnRleHRNZW51fTtcbmV4cG9ydCBjb25zdCBGb3JtdWxhQmFyU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1NwcmVhZHNoZWV0Rm9ybXVsYUJhcicsIHVzZVZhbHVlOiBGb3JtdWxhQmFyfTtcbmV4cG9ydCBjb25zdCBSaWJib25TZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnU3ByZWFkc2hlZXRSaWJib24nLCB1c2VWYWx1ZTogUmliYm9ufTtcbmV4cG9ydCBjb25zdCBTYXZlU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1NwcmVhZHNoZWV0U2F2ZScsIHVzZVZhbHVlOiBTYXZlfTtcbmV4cG9ydCBjb25zdCBPcGVuU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1NwcmVhZHNoZWV0T3BlbicsIHVzZVZhbHVlOiBPcGVufTtcbmV4cG9ydCBjb25zdCBTaGVldFRhYnNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnU3ByZWFkc2hlZXRTaGVldFRhYnMnLCB1c2VWYWx1ZTogU2hlZXRUYWJzfTtcbmV4cG9ydCBjb25zdCBEYXRhQmluZFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdTcHJlYWRzaGVldERhdGFCaW5kJywgdXNlVmFsdWU6IERhdGFCaW5kfTtcbmV4cG9ydCBjb25zdCBBbGxNb2R1bGVTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnU3ByZWFkc2hlZXRBbGxNb2R1bGUnLCB1c2VWYWx1ZTogQWxsTW9kdWxlfTtcbmV4cG9ydCBjb25zdCBCYXNpY01vZHVsZVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdTcHJlYWRzaGVldEJhc2ljTW9kdWxlJywgdXNlVmFsdWU6IEJhc2ljTW9kdWxlfTtcbmV4cG9ydCBjb25zdCBDZWxsRm9ybWF0U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1NwcmVhZHNoZWV0Q2VsbEZvcm1hdCcsIHVzZVZhbHVlOiBDZWxsRm9ybWF0fTtcbmV4cG9ydCBjb25zdCBOdW1iZXJGb3JtYXRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnU3ByZWFkc2hlZXROdW1iZXJGb3JtYXQnLCB1c2VWYWx1ZTogTnVtYmVyRm9ybWF0fTtcbmV4cG9ydCBjb25zdCBGb3JtdWxhU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1NwcmVhZHNoZWV0Rm9ybXVsYScsIHVzZVZhbHVlOiBGb3JtdWxhfTtcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgU3ByZWFkc2hlZXQgY29tcG9uZW50IHdpdGggcHJvdmlkZXJzLlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFNwcmVhZHNoZWV0TW9kdWxlXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFNwcmVhZHNoZWV0TW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6W1xuICAgICAgICBDbGlwYm9hcmRTZXJ2aWNlLFxuICAgICAgICBFZGl0U2VydmljZSxcbiAgICAgICAgS2V5Ym9hcmROYXZpZ2F0aW9uU2VydmljZSxcbiAgICAgICAgS2V5Ym9hcmRTaG9ydGN1dFNlcnZpY2UsXG4gICAgICAgIENvbGxhYm9yYXRpdmVFZGl0aW5nU2VydmljZSxcbiAgICAgICAgU2VsZWN0aW9uU2VydmljZSxcbiAgICAgICAgQ29udGV4dE1lbnVTZXJ2aWNlLFxuICAgICAgICBGb3JtdWxhQmFyU2VydmljZSxcbiAgICAgICAgUmliYm9uU2VydmljZSxcbiAgICAgICAgU2F2ZVNlcnZpY2UsXG4gICAgICAgIE9wZW5TZXJ2aWNlLFxuICAgICAgICBTaGVldFRhYnNTZXJ2aWNlLFxuICAgICAgICBEYXRhQmluZFNlcnZpY2UsXG4gICAgICAgIEFsbE1vZHVsZVNlcnZpY2UsXG4gICAgICAgIEJhc2ljTW9kdWxlU2VydmljZSxcbiAgICAgICAgQ2VsbEZvcm1hdFNlcnZpY2UsXG4gICAgICAgIE51bWJlckZvcm1hdFNlcnZpY2UsXG4gICAgICAgIEZvcm11bGFTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTcHJlYWRzaGVldEFsbE1vZHVsZSB7IH0iXX0=