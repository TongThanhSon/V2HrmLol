import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentEditorModule } from './documenteditor.module';
import { Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, EditorHistory, OptionsPane, ContextMenu, ImageResizer, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, ParagraphDialog, ListDialog, StyleDialog, StylesDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, SpellChecker, SpellCheckDialog, CollaborativeEditing } from '@syncfusion/ej2-documenteditor';
import * as i0 from "@angular/core";
export const PrintService = { provide: 'DocumentEditorPrint', useValue: Print };
export const SfdtExportService = { provide: 'DocumentEditorSfdtExport', useValue: SfdtExport };
export const WordExportService = { provide: 'DocumentEditorWordExport', useValue: WordExport };
export const TextExportService = { provide: 'DocumentEditorTextExport', useValue: TextExport };
export const SelectionService = { provide: 'DocumentEditorSelection', useValue: Selection };
export const SearchService = { provide: 'DocumentEditorSearch', useValue: Search };
export const EditorService = { provide: 'DocumentEditorEditor', useValue: Editor };
export const EditorHistoryService = { provide: 'DocumentEditorEditorHistory', useValue: EditorHistory };
export const OptionsPaneService = { provide: 'DocumentEditorOptionsPane', useValue: OptionsPane };
export const ContextMenuService = { provide: 'DocumentEditorContextMenu', useValue: ContextMenu };
export const ImageResizerService = { provide: 'DocumentEditorImageResizer', useValue: ImageResizer };
export const HyperlinkDialogService = { provide: 'DocumentEditorHyperlinkDialog', useValue: HyperlinkDialog };
export const TableDialogService = { provide: 'DocumentEditorTableDialog', useValue: TableDialog };
export const BookmarkDialogService = { provide: 'DocumentEditorBookmarkDialog', useValue: BookmarkDialog };
export const TableOfContentsDialogService = { provide: 'DocumentEditorTableOfContentsDialog', useValue: TableOfContentsDialog };
export const PageSetupDialogService = { provide: 'DocumentEditorPageSetupDialog', useValue: PageSetupDialog };
export const ParagraphDialogService = { provide: 'DocumentEditorParagraphDialog', useValue: ParagraphDialog };
export const ListDialogService = { provide: 'DocumentEditorListDialog', useValue: ListDialog };
export const StyleDialogService = { provide: 'DocumentEditorStyleDialog', useValue: StyleDialog };
export const StylesDialogService = { provide: 'DocumentEditorStylesDialog', useValue: StylesDialog };
export const BulletsAndNumberingDialogService = { provide: 'DocumentEditorBulletsAndNumberingDialog', useValue: BulletsAndNumberingDialog };
export const FontDialogService = { provide: 'DocumentEditorFontDialog', useValue: FontDialog };
export const TablePropertiesDialogService = { provide: 'DocumentEditorTablePropertiesDialog', useValue: TablePropertiesDialog };
export const BordersAndShadingDialogService = { provide: 'DocumentEditorBordersAndShadingDialog', useValue: BordersAndShadingDialog };
export const TableOptionsDialogService = { provide: 'DocumentEditorTableOptionsDialog', useValue: TableOptionsDialog };
export const CellOptionsDialogService = { provide: 'DocumentEditorCellOptionsDialog', useValue: CellOptionsDialog };
export const SpellCheckerService = { provide: 'DocumentEditorSpellChecker', useValue: SpellChecker };
export const SpellCheckDialogService = { provide: 'DocumentEditorSpellCheckDialog', useValue: SpellCheckDialog };
export const CollaborativeEditingService = { provide: 'DocumentEditorCollaborativeEditing', useValue: CollaborativeEditing };
/**
 * NgModule definition for the DocumentEditor component with providers.
 */
export class DocumentEditorAllModule {
}
DocumentEditorAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DocumentEditorAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorAllModule, imports: [CommonModule, DocumentEditorModule], exports: [DocumentEditorModule] });
DocumentEditorAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorAllModule, providers: [
        PrintService,
        SfdtExportService,
        WordExportService,
        TextExportService,
        SelectionService,
        SearchService,
        EditorService,
        EditorHistoryService,
        OptionsPaneService,
        ContextMenuService,
        ImageResizerService,
        HyperlinkDialogService,
        TableDialogService,
        BookmarkDialogService,
        TableOfContentsDialogService,
        PageSetupDialogService,
        ParagraphDialogService,
        ListDialogService,
        StyleDialogService,
        StylesDialogService,
        BulletsAndNumberingDialogService,
        FontDialogService,
        TablePropertiesDialogService,
        BordersAndShadingDialogService,
        TableOptionsDialogService,
        CellOptionsDialogService,
        SpellCheckerService,
        SpellCheckDialogService,
        CollaborativeEditingService
    ], imports: [[CommonModule, DocumentEditorModule], DocumentEditorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DocumentEditorModule],
                    exports: [
                        DocumentEditorModule
                    ],
                    providers: [
                        PrintService,
                        SfdtExportService,
                        WordExportService,
                        TextExportService,
                        SelectionService,
                        SearchService,
                        EditorService,
                        EditorHistoryService,
                        OptionsPaneService,
                        ContextMenuService,
                        ImageResizerService,
                        HyperlinkDialogService,
                        TableDialogService,
                        BookmarkDialogService,
                        TableOfContentsDialogService,
                        PageSetupDialogService,
                        ParagraphDialogService,
                        ListDialogService,
                        StyleDialogService,
                        StylesDialogService,
                        BulletsAndNumberingDialogService,
                        FontDialogService,
                        TablePropertiesDialogService,
                        BordersAndShadingDialogService,
                        TableOptionsDialogService,
                        CellOptionsDialogService,
                        SpellCheckerService,
                        SpellCheckDialogService,
                        CollaborativeEditingService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRlZGl0b3ItYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N1bWVudC1lZGl0b3IvZG9jdW1lbnRlZGl0b3ItYWxsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSx5QkFBeUIsRUFBRSxVQUFVLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUE7O0FBRzVlLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBa0IsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFDO0FBQzlGLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFrQixFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDLENBQUM7QUFDN0csTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUMsQ0FBQztBQUM3RyxNQUFN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O1FBQ25CLHVCQUF1QjtRQUN2QiwyQkFBMkI7S0FDOUIsWUFsQ1EsQ0FBQyxZQUFZLEVBQUUsb0JBQW9CLENBQUMsRUFFekMsb0JBQW9COzJGQWtDZix1QkFBdUI7a0JBckNuQyxRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQztvQkFDN0MsT0FBTyxFQUFFO3dCQUNMLG9CQUFvQjtxQkFDdkI7b0JBQ0QsU0FBUyxFQUFDO3dCQUNOLFlBQVk7d0JBQ1osaUJBQWlCO3dCQUNqQixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLGFBQWE7d0JBQ2Isb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixzQkFBc0I7d0JBQ3RCLGtCQUFrQjt3QkFDbEIscUJBQXFCO3dCQUNyQiw0QkFBNEI7d0JBQzVCLHNCQUFzQjt3QkFDdEIsc0JBQXNCO3dCQUN0QixpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixnQ0FBZ0M7d0JBQ2hDLGlCQUFpQjt3QkFDakIsNEJBQTRCO3dCQUM1Qiw4QkFBOEI7d0JBQzlCLHlCQUF5Qjt3QkFDekIsd0JBQXdCO3dCQUN4QixtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIsMkJBQTJCO3FCQUM5QjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9jdW1lbnRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2RvY3VtZW50ZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb2N1bWVudEVkaXRvck1vZHVsZSB9IGZyb20gJy4vZG9jdW1lbnRlZGl0b3IubW9kdWxlJztcbmltcG9ydCB7UHJpbnQsIFNmZHRFeHBvcnQsIFdvcmRFeHBvcnQsIFRleHRFeHBvcnQsIFNlbGVjdGlvbiwgU2VhcmNoLCBFZGl0b3IsIEVkaXRvckhpc3RvcnksIE9wdGlvbnNQYW5lLCBDb250ZXh0TWVudSwgSW1hZ2VSZXNpemVyLCBIeXBlcmxpbmtEaWFsb2csIFRhYmxlRGlhbG9nLCBCb29rbWFya0RpYWxvZywgVGFibGVPZkNvbnRlbnRzRGlhbG9nLCBQYWdlU2V0dXBEaWFsb2csIFBhcmFncmFwaERpYWxvZywgTGlzdERpYWxvZywgU3R5bGVEaWFsb2csIFN0eWxlc0RpYWxvZywgQnVsbGV0c0FuZE51bWJlcmluZ0RpYWxvZywgRm9udERpYWxvZywgVGFibGVQcm9wZXJ0aWVzRGlhbG9nLCBCb3JkZXJzQW5kU2hhZGluZ0RpYWxvZywgVGFibGVPcHRpb25zRGlhbG9nLCBDZWxsT3B0aW9uc0RpYWxvZywgU3BlbGxDaGVja2VyLCBTcGVsbENoZWNrRGlhbG9nLCBDb2xsYWJvcmF0aXZlRWRpdGluZ30gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWRvY3VtZW50ZWRpdG9yJ1xuXG5cbmV4cG9ydCBjb25zdCBQcmludFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdEb2N1bWVudEVkaXRvclByaW50JywgdXNlVmFsdWU6IFByaW50fTtcbmV4cG9ydCBjb25zdCBTZmR0RXhwb3J0U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0RvY3VtZW50RWRpdG9yU2ZkdEV4cG9ydCcsIHVzZVZhbHVlOiBTZmR0RXhwb3J0fTtcbmV4cG9ydCBjb25zdCBXb3JkRXhwb3J0U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0RvY3VtZW50RWRpdG9yV29yZEV4cG9ydCcsIHVzZVZhbHVlOiBXb3JkRXhwb3J0fTtcbmV4cG9ydCBjb25zdCBUZXh0RXhwb3J0U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0RvY3VtZW50RWRpdG9yVGV4dEV4cG9ydCcsIHVzZVZhbHVlOiBUZXh0RXhwb3J0fTtcbmV4cG9ydCBjb25zdCBTZWxlY3Rpb25TZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnRG9jdW1lbnRFZGl0b3JTZWxlY3Rpb24nLCB1c2VWYWx1ZTogU2VsZWN0aW9ufTtcbmV4cG9ydCBjb25zdCBTZWFyY2hTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnRG9jdW1lbnRFZGl0b3JTZWFyY2gnLCB1c2VWYWx1ZTogU2VhcmNofTtcbmV4cG9ydCBjb25zdCBFZGl0b3JTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnRG9jdW1lbnRFZGl0b3JFZGl0b3InLCB1c2VWYWx1ZTogRWRpdG9yfTtcbmV4cG9ydCBjb25zdCBFZGl0b3JIaXN0b3J5U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0RvY3VtZW50RWRpdG9yRWRpdG9ySGlzdG9yeScsIHVzZVZhbHVlOiBFZGl0b3JIaXN0b3J5fTtcbmV4cG9ydCBjb25zdCBPcHRpb25zUGFuZVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdEb2N1bWVudEVkaXRvck9wdGlvbnNQYW5lJywgdXNlVmFsdWU6IE9wdGlvbnNQYW5lfTtcbmV4cG9ydCBjb25zdCBDb250ZXh0TWVudVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdEb2N1bWVudEVkaXRvckNvbnRleHRNZW51JywgdXNlVmFsdWU6IENvbnRleHRNZW51fTtcbmV4cG9ydCBjb25zdCBJbWFnZVJlc2l6ZXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnRG9jdW1lbnRFZGl0b3JJbWFnZVJlc2l6ZXInLCB1c2VWYWx1ZTogSW1hZ2VSZXNpemVyfTtcbmV4cG9ydCBjb25zdCBIeXBlcmxpbmtEaWFsb2dTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnRG9jdW1lbnRFZGl0b3JIeXBlcmxpbmtEaWFsb2cnLCB1c2VWYWx1ZTogSHlwZXJsaW5rRGlhbG9nfTtcbmV4cG9ydCBjb25zdCBUYWJsZURpYWxvZ1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdEb2N1bWVudEVkaXRvclRhYmxlRGlhbG9nJywgdXNlVmFsdWU6IFRhYmxlRGlhbG9nfTtcbmV4cG9ydCBjb25zdCBCb29rbWFya0RpYWxvZ1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdEb2N1bWVudEVkaXRvckJvb2ttYXJrRGlhbG9nJywgdXNlVmFsdWU6IEJvb2ttYXJrRGlhbG9nfTtcbmV4cG9ydCBjb25zdCBUYWJsZU9mQ29udGVudHNEaWFsb2dTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnRG9jdW1lbnRFZGl0b3JUYWJsZU9mQ29udGVudHNEaWFsb2cnLCB1c2VWYWx1ZTogVGFibGVPZkNvbnRlbnRzRGlhbG9nfTtcbmV4cG9ydCBjb25zdCBQYWdlU2V0dXBEaWFsb2dTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnRG9jdW1lbnRFZGl0b3JQYWdlU2V0dXBEaWFsb2cnLCB1c2VWYWx1ZTogUGFnZVNldHVwRGlhbG9nfTtcbmV4cG9ydCBjb25zdCBQYXJhZ3JhcGhEaWFsb2dTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnRG9jdW1lbnRFZGl0b3JQYXJhZ3JhcGhEaWFsb2cnLCB1c2VWYWx1ZTogUGFyYWdyYXBoRGlhbG9nfTtcbmV4cG9ydCBjb25zdCBMaXN0RGlhbG9nU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0RvY3VtZW50RWRpdG9yTGlzdERpYWxvZycsIHVzZVZhbHVlOiBMaXN0RGlhbG9nfTtcbmV4cG9ydCBjb25zdCBTdHlsZURpYWxvZ1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdEb2N1bWVudEVkaXRvclN0eWxlRGlhbG9nJywgdXNlVmFsdWU6IFN0eWxlRGlhbG9nfTtcbmV4cG9ydCBjb25zdCBTdHlsZXNEaWFsb2dTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnRG9jdW1lbnRFZGl0b3JTdHlsZXNEaWFsb2cnLCB1c2VWYWx1ZTogU3R5bGVzRGlhbG9nfTtcbmV4cG9ydCBjb25zdCBCdWxsZXRzQW5kTnVtYmVyaW5nRGlhbG9nU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0RvY3VtZW50RWRpdG9yQnVsbGV0c0FuZE51bWJlcmluZ0RpYWxvZycsIHVzZVZhbHVlOiBCdWxsZXRzQW5kTnVtYmVyaW5nRGlhbG9nfTtcbmV4cG9ydCBjb25zdCBGb250RGlhbG9nU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0RvY3VtZW50RWRpdG9yRm9udERpYWxvZycsIHVzZVZhbHVlOiBGb250RGlhbG9nfTtcbmV4cG9ydCBjb25zdCBUYWJsZVByb3BlcnRpZXNEaWFsb2dTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnRG9jdW1lbnRFZGl0b3JUYWJsZVByb3BlcnRpZXNEaWFsb2cnLCB1c2VWYWx1ZTogVGFibGVQcm9wZXJ0aWVzRGlhbG9nfTtcbmV4cG9ydCBjb25zdCBCb3JkZXJzQW5kU2hhZGluZ0RpYWxvZ1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdEb2N1bWVudEVkaXRvckJvcmRlcnNBbmRTaGFkaW5nRGlhbG9nJywgdXNlVmFsdWU6IEJvcmRlcnNBbmRTaGFkaW5nRGlhbG9nfTtcbmV4cG9ydCBjb25zdCBUYWJsZU9wdGlvbnNEaWFsb2dTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnRG9jdW1lbnRFZGl0b3JUYWJsZU9wdGlvbnNEaWFsb2cnLCB1c2VWYWx1ZTogVGFibGVPcHRpb25zRGlhbG9nfTtcbmV4cG9ydCBjb25zdCBDZWxsT3B0aW9uc0RpYWxvZ1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdEb2N1bWVudEVkaXRvckNlbGxPcHRpb25zRGlhbG9nJywgdXNlVmFsdWU6IENlbGxPcHRpb25zRGlhbG9nfTtcbmV4cG9ydCBjb25zdCBTcGVsbENoZWNrZXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnRG9jdW1lbnRFZGl0b3JTcGVsbENoZWNrZXInLCB1c2VWYWx1ZTogU3BlbGxDaGVja2VyfTtcbmV4cG9ydCBjb25zdCBTcGVsbENoZWNrRGlhbG9nU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0RvY3VtZW50RWRpdG9yU3BlbGxDaGVja0RpYWxvZycsIHVzZVZhbHVlOiBTcGVsbENoZWNrRGlhbG9nfTtcbmV4cG9ydCBjb25zdCBDb2xsYWJvcmF0aXZlRWRpdGluZ1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdEb2N1bWVudEVkaXRvckNvbGxhYm9yYXRpdmVFZGl0aW5nJywgdXNlVmFsdWU6IENvbGxhYm9yYXRpdmVFZGl0aW5nfTtcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgRG9jdW1lbnRFZGl0b3IgY29tcG9uZW50IHdpdGggcHJvdmlkZXJzLlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERvY3VtZW50RWRpdG9yTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIERvY3VtZW50RWRpdG9yTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6W1xuICAgICAgICBQcmludFNlcnZpY2UsXG4gICAgICAgIFNmZHRFeHBvcnRTZXJ2aWNlLFxuICAgICAgICBXb3JkRXhwb3J0U2VydmljZSxcbiAgICAgICAgVGV4dEV4cG9ydFNlcnZpY2UsXG4gICAgICAgIFNlbGVjdGlvblNlcnZpY2UsXG4gICAgICAgIFNlYXJjaFNlcnZpY2UsXG4gICAgICAgIEVkaXRvclNlcnZpY2UsXG4gICAgICAgIEVkaXRvckhpc3RvcnlTZXJ2aWNlLFxuICAgICAgICBPcHRpb25zUGFuZVNlcnZpY2UsXG4gICAgICAgIENvbnRleHRNZW51U2VydmljZSxcbiAgICAgICAgSW1hZ2VSZXNpemVyU2VydmljZSxcbiAgICAgICAgSHlwZXJsaW5rRGlhbG9nU2VydmljZSxcbiAgICAgICAgVGFibGVEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBCb29rbWFya0RpYWxvZ1NlcnZpY2UsXG4gICAgICAgIFRhYmxlT2ZDb250ZW50c0RpYWxvZ1NlcnZpY2UsXG4gICAgICAgIFBhZ2VTZXR1cERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIFBhcmFncmFwaERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIExpc3REaWFsb2dTZXJ2aWNlLFxuICAgICAgICBTdHlsZURpYWxvZ1NlcnZpY2UsXG4gICAgICAgIFN0eWxlc0RpYWxvZ1NlcnZpY2UsXG4gICAgICAgIEJ1bGxldHNBbmROdW1iZXJpbmdEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBGb250RGlhbG9nU2VydmljZSxcbiAgICAgICAgVGFibGVQcm9wZXJ0aWVzRGlhbG9nU2VydmljZSxcbiAgICAgICAgQm9yZGVyc0FuZFNoYWRpbmdEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBUYWJsZU9wdGlvbnNEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBDZWxsT3B0aW9uc0RpYWxvZ1NlcnZpY2UsXG4gICAgICAgIFNwZWxsQ2hlY2tlclNlcnZpY2UsXG4gICAgICAgIFNwZWxsQ2hlY2tEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBDb2xsYWJvcmF0aXZlRWRpdGluZ1NlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIERvY3VtZW50RWRpdG9yQWxsTW9kdWxlIHsgfSJdfQ==