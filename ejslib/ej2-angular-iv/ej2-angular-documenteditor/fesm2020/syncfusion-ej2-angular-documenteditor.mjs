import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { setValue, ComponentBase, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { DocumentEditor, Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, EditorHistory, OptionsPane, ContextMenu, ImageResizer, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, ParagraphDialog, ListDialog, StyleDialog, StylesDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, SpellChecker, SpellCheckDialog, CollaborativeEditing, DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';
export * from '@syncfusion/ej2-documenteditor';
import { CommonModule } from '@angular/common';

const inputs$1 = ['acceptTab', 'currentUser', 'defaultPasteOption', 'documentEditorSettings', 'documentName', 'documentSettings', 'enableBookmarkDialog', 'enableBordersAndShadingDialog', 'enableComment', 'enableContextMenu', 'enableCursorOnReadOnly', 'enableEditor', 'enableEditorHistory', 'enableFontDialog', 'enableFootnoteAndEndnoteDialog', 'enableFormField', 'enableHyperlinkDialog', 'enableImageResizer', 'enableListDialog', 'enableLocalPaste', 'enableLockAndEdit', 'enableOptionsPane', 'enablePageSetupDialog', 'enableParagraphDialog', 'enablePersistence', 'enablePrint', 'enableRtl', 'enableSearch', 'enableSelection', 'enableSfdtExport', 'enableSpellCheck', 'enableStyleDialog', 'enableTableDialog', 'enableTableOfContentsDialog', 'enableTableOptionsDialog', 'enableTablePropertiesDialog', 'enableTextExport', 'enableTrackChanges', 'enableWordExport', 'headers', 'height', 'isReadOnly', 'layoutType', 'locale', 'pageGap', 'pageOutline', 'serverActionSettings', 'serviceUrl', 'showComments', 'showRevisions', 'useCtrlClickToFollowHyperlink', 'userColor', 'width', 'zIndex', 'zoomFactor'];
const outputs$1 = ['actionComplete', 'afterFormFieldFill', 'beforeCommentAction', 'beforeFileOpen', 'beforeFormFieldFill', 'beforePaneSwitch', 'commentBegin', 'commentDelete', 'commentEnd', 'contentChange', 'contentControl', 'created', 'customContextMenuBeforeOpen', 'customContextMenuSelect', 'destroyed', 'documentChange', 'keyDown', 'requestNavigate', 'searchResultsChange', 'selectionChange', 'serviceFailure', 'trackChange', 'viewChange', 'zoomFactorChange', 'beforeXmlHttpRequestSend'];
const twoWays$1 = [];
/**
 * `ejs-documenteditor` represents the Angular Document Editor Component.
 * ```html
 * <ejs-documenteditor isReadOnly='true' enableSelection='true'></ejs-documenteditor>
 * ```
 */
let DocumentEditorComponent = class DocumentEditorComponent extends DocumentEditor {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('DocumentEditorPrint');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorSfdtExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorWordExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorTextExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorSearch');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorEditor');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorEditorHistory');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorOptionsPane');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorContextMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorImageResizer');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorHyperlinkDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorTableDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorBookmarkDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorTableOfContentsDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorPageSetupDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorParagraphDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorListDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorStyleDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorStylesDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorBulletsAndNumberingDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorFontDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorTablePropertiesDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorBordersAndShadingDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorTableOptionsDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorCellOptionsDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorSpellChecker');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorSpellCheckDialog');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('DocumentEditorCollaborativeEditing');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        this.registerEvents(outputs$1);
        this.addTwoWay.call(this, twoWays$1);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.context.ngAfterContentChecked(this);
    }
};
DocumentEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
DocumentEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DocumentEditorComponent, selector: "ejs-documenteditor", inputs: { acceptTab: "acceptTab", currentUser: "currentUser", defaultPasteOption: "defaultPasteOption", documentEditorSettings: "documentEditorSettings", documentName: "documentName", documentSettings: "documentSettings", enableBookmarkDialog: "enableBookmarkDialog", enableBordersAndShadingDialog: "enableBordersAndShadingDialog", enableComment: "enableComment", enableContextMenu: "enableContextMenu", enableCursorOnReadOnly: "enableCursorOnReadOnly", enableEditor: "enableEditor", enableEditorHistory: "enableEditorHistory", enableFontDialog: "enableFontDialog", enableFootnoteAndEndnoteDialog: "enableFootnoteAndEndnoteDialog", enableFormField: "enableFormField", enableHyperlinkDialog: "enableHyperlinkDialog", enableImageResizer: "enableImageResizer", enableListDialog: "enableListDialog", enableLocalPaste: "enableLocalPaste", enableLockAndEdit: "enableLockAndEdit", enableOptionsPane: "enableOptionsPane", enablePageSetupDialog: "enablePageSetupDialog", enableParagraphDialog: "enableParagraphDialog", enablePersistence: "enablePersistence", enablePrint: "enablePrint", enableRtl: "enableRtl", enableSearch: "enableSearch", enableSelection: "enableSelection", enableSfdtExport: "enableSfdtExport", enableSpellCheck: "enableSpellCheck", enableStyleDialog: "enableStyleDialog", enableTableDialog: "enableTableDialog", enableTableOfContentsDialog: "enableTableOfContentsDialog", enableTableOptionsDialog: "enableTableOptionsDialog", enableTablePropertiesDialog: "enableTablePropertiesDialog", enableTextExport: "enableTextExport", enableTrackChanges: "enableTrackChanges", enableWordExport: "enableWordExport", headers: "headers", height: "height", isReadOnly: "isReadOnly", layoutType: "layoutType", locale: "locale", pageGap: "pageGap", pageOutline: "pageOutline", serverActionSettings: "serverActionSettings", serviceUrl: "serviceUrl", showComments: "showComments", showRevisions: "showRevisions", useCtrlClickToFollowHyperlink: "useCtrlClickToFollowHyperlink", userColor: "userColor", width: "width", zIndex: "zIndex", zoomFactor: "zoomFactor" }, outputs: { actionComplete: "actionComplete", afterFormFieldFill: "afterFormFieldFill", beforeCommentAction: "beforeCommentAction", beforeFileOpen: "beforeFileOpen", beforeFormFieldFill: "beforeFormFieldFill", beforePaneSwitch: "beforePaneSwitch", commentBegin: "commentBegin", commentDelete: "commentDelete", commentEnd: "commentEnd", contentChange: "contentChange", contentControl: "contentControl", created: "created", customContextMenuBeforeOpen: "customContextMenuBeforeOpen", customContextMenuSelect: "customContextMenuSelect", destroyed: "destroyed", documentChange: "documentChange", keyDown: "keyDown", requestNavigate: "requestNavigate", searchResultsChange: "searchResultsChange", selectionChange: "selectionChange", serviceFailure: "serviceFailure", trackChange: "trackChange", viewChange: "viewChange", zoomFactorChange: "zoomFactorChange", beforeXmlHttpRequestSend: "beforeXmlHttpRequestSend" }, usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
DocumentEditorComponent = __decorate([
    ComponentMixins([ComponentBase])
], DocumentEditorComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-documenteditor',
                    inputs: inputs$1,
                    outputs: outputs$1,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the DocumentEditor component.
 */
class DocumentEditorModule {
}
DocumentEditorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DocumentEditorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorModule, declarations: [DocumentEditorComponent], imports: [CommonModule], exports: [DocumentEditorComponent] });
DocumentEditorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        DocumentEditorComponent
                    ],
                    exports: [
                        DocumentEditorComponent
                    ]
                }]
        }] });

const PrintService = { provide: 'DocumentEditorPrint', useValue: Print };
const SfdtExportService = { provide: 'DocumentEditorSfdtExport', useValue: SfdtExport };
const WordExportService = { provide: 'DocumentEditorWordExport', useValue: WordExport };
const TextExportService = { provide: 'DocumentEditorTextExport', useValue: TextExport };
const SelectionService = { provide: 'DocumentEditorSelection', useValue: Selection };
const SearchService = { provide: 'DocumentEditorSearch', useValue: Search };
const EditorService = { provide: 'DocumentEditorEditor', useValue: Editor };
const EditorHistoryService = { provide: 'DocumentEditorEditorHistory', useValue: EditorHistory };
const OptionsPaneService = { provide: 'DocumentEditorOptionsPane', useValue: OptionsPane };
const ContextMenuService = { provide: 'DocumentEditorContextMenu', useValue: ContextMenu };
const ImageResizerService = { provide: 'DocumentEditorImageResizer', useValue: ImageResizer };
const HyperlinkDialogService = { provide: 'DocumentEditorHyperlinkDialog', useValue: HyperlinkDialog };
const TableDialogService = { provide: 'DocumentEditorTableDialog', useValue: TableDialog };
const BookmarkDialogService = { provide: 'DocumentEditorBookmarkDialog', useValue: BookmarkDialog };
const TableOfContentsDialogService = { provide: 'DocumentEditorTableOfContentsDialog', useValue: TableOfContentsDialog };
const PageSetupDialogService = { provide: 'DocumentEditorPageSetupDialog', useValue: PageSetupDialog };
const ParagraphDialogService = { provide: 'DocumentEditorParagraphDialog', useValue: ParagraphDialog };
const ListDialogService = { provide: 'DocumentEditorListDialog', useValue: ListDialog };
const StyleDialogService = { provide: 'DocumentEditorStyleDialog', useValue: StyleDialog };
const StylesDialogService = { provide: 'DocumentEditorStylesDialog', useValue: StylesDialog };
const BulletsAndNumberingDialogService = { provide: 'DocumentEditorBulletsAndNumberingDialog', useValue: BulletsAndNumberingDialog };
const FontDialogService = { provide: 'DocumentEditorFontDialog', useValue: FontDialog };
const TablePropertiesDialogService = { provide: 'DocumentEditorTablePropertiesDialog', useValue: TablePropertiesDialog };
const BordersAndShadingDialogService = { provide: 'DocumentEditorBordersAndShadingDialog', useValue: BordersAndShadingDialog };
const TableOptionsDialogService = { provide: 'DocumentEditorTableOptionsDialog', useValue: TableOptionsDialog };
const CellOptionsDialogService = { provide: 'DocumentEditorCellOptionsDialog', useValue: CellOptionsDialog };
const SpellCheckerService = { provide: 'DocumentEditorSpellChecker', useValue: SpellChecker };
const SpellCheckDialogService = { provide: 'DocumentEditorSpellCheckDialog', useValue: SpellCheckDialog };
const CollaborativeEditingService = { provide: 'DocumentEditorCollaborativeEditing', useValue: CollaborativeEditing };
/**
 * NgModule definition for the DocumentEditor component with providers.
 */
class DocumentEditorAllModule {
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

const inputs = ['currentUser', 'documentEditorSettings', 'documentSettings', 'enableComment', 'enableCsp', 'enableLocalPaste', 'enableLockAndEdit', 'enablePersistence', 'enableRtl', 'enableSpellCheck', 'enableToolbar', 'enableTrackChanges', 'headers', 'height', 'layoutType', 'locale', 'restrictEditing', 'serverActionSettings', 'serviceUrl', 'showPropertiesPane', 'toolbarItems', 'userColor', 'width', 'zIndex'];
const outputs = ['beforeCommentAction', 'beforePaneSwitch', 'commentDelete', 'contentChange', 'contentControl', 'created', 'customContextMenuBeforeOpen', 'customContextMenuSelect', 'destroyed', 'documentChange', 'selectionChange', 'serviceFailure', 'toolbarClick', 'trackChange', 'beforeXmlHttpRequestSend'];
const twoWays = [];
/**
 * `ejs-documenteditor-container` represents the Angular Document Editor Container.
 * ```html
 * <ejs-documenteditor-container></ejs-documenteditor-container>
 * ```
 */
let DocumentEditorContainerComponent = class DocumentEditorContainerComponent extends DocumentEditorContainer {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('DocumentEditorToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.context.ngAfterContentChecked(this);
    }
};
DocumentEditorContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorContainerComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
DocumentEditorContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DocumentEditorContainerComponent, selector: "ejs-documenteditorcontainer", inputs: { currentUser: "currentUser", documentEditorSettings: "documentEditorSettings", documentSettings: "documentSettings", enableComment: "enableComment", enableCsp: "enableCsp", enableLocalPaste: "enableLocalPaste", enableLockAndEdit: "enableLockAndEdit", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enableSpellCheck: "enableSpellCheck", enableToolbar: "enableToolbar", enableTrackChanges: "enableTrackChanges", headers: "headers", height: "height", layoutType: "layoutType", locale: "locale", restrictEditing: "restrictEditing", serverActionSettings: "serverActionSettings", serviceUrl: "serviceUrl", showPropertiesPane: "showPropertiesPane", toolbarItems: "toolbarItems", userColor: "userColor", width: "width", zIndex: "zIndex" }, outputs: { beforeCommentAction: "beforeCommentAction", beforePaneSwitch: "beforePaneSwitch", commentDelete: "commentDelete", contentChange: "contentChange", contentControl: "contentControl", created: "created", customContextMenuBeforeOpen: "customContextMenuBeforeOpen", customContextMenuSelect: "customContextMenuSelect", destroyed: "destroyed", documentChange: "documentChange", selectionChange: "selectionChange", serviceFailure: "serviceFailure", toolbarClick: "toolbarClick", trackChange: "trackChange", beforeXmlHttpRequestSend: "beforeXmlHttpRequestSend" }, usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
DocumentEditorContainerComponent = __decorate([
    ComponentMixins([ComponentBase])
], DocumentEditorContainerComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-documenteditorcontainer',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the DocumentEditorContainer component.
 */
class DocumentEditorContainerModule {
}
DocumentEditorContainerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorContainerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DocumentEditorContainerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorContainerModule, declarations: [DocumentEditorContainerComponent], imports: [CommonModule], exports: [DocumentEditorContainerComponent] });
DocumentEditorContainerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorContainerModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorContainerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        DocumentEditorContainerComponent
                    ],
                    exports: [
                        DocumentEditorContainerComponent
                    ]
                }]
        }] });

const ToolbarService = { provide: 'DocumentEditorToolbar', useValue: Toolbar };
/**
 * NgModule definition for the DocumentEditorContainer component with providers.
 */
class DocumentEditorContainerAllModule {
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

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { BookmarkDialogService, BordersAndShadingDialogService, BulletsAndNumberingDialogService, CellOptionsDialogService, CollaborativeEditingService, ContextMenuService, DocumentEditorAllModule, DocumentEditorComponent, DocumentEditorContainerAllModule, DocumentEditorContainerComponent, DocumentEditorContainerModule, DocumentEditorModule, EditorHistoryService, EditorService, FontDialogService, HyperlinkDialogService, ImageResizerService, ListDialogService, OptionsPaneService, PageSetupDialogService, ParagraphDialogService, PrintService, SearchService, SelectionService, SfdtExportService, SpellCheckDialogService, SpellCheckerService, StyleDialogService, StylesDialogService, TableDialogService, TableOfContentsDialogService, TableOptionsDialogService, TablePropertiesDialogService, TextExportService, ToolbarService, WordExportService };
//# sourceMappingURL=syncfusion-ej2-angular-documenteditor.mjs.map
