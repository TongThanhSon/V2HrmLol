import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { DocumentEditor } from '@syncfusion/ej2-documenteditor';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * `ejs-documenteditor` represents the Angular Document Editor Component.
 * ```html
 * <ejs-documenteditor isReadOnly='true' enableSelection='true'></ejs-documenteditor>
 * ```
 */
export declare class DocumentEditorComponent extends DocumentEditor implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    actionComplete: any;
    afterFormFieldFill: any;
    beforeCommentAction: any;
    beforeFileOpen: any;
    beforeFormFieldFill: any;
    beforePaneSwitch: any;
    commentBegin: any;
    commentDelete: any;
    commentEnd: any;
    contentChange: any;
    contentControl: any;
    created: any;
    customContextMenuBeforeOpen: any;
    customContextMenuSelect: any;
    destroyed: any;
    documentChange: any;
    keyDown: any;
    requestNavigate: any;
    searchResultsChange: any;
    selectionChange: any;
    serviceFailure: any;
    trackChange: any;
    viewChange: any;
    zoomFactorChange: any;
    beforeXmlHttpRequestSend: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DocumentEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DocumentEditorComponent, "ejs-documenteditor", never, { "acceptTab": "acceptTab"; "currentUser": "currentUser"; "defaultPasteOption": "defaultPasteOption"; "documentEditorSettings": "documentEditorSettings"; "documentName": "documentName"; "documentSettings": "documentSettings"; "enableBookmarkDialog": "enableBookmarkDialog"; "enableBordersAndShadingDialog": "enableBordersAndShadingDialog"; "enableComment": "enableComment"; "enableContextMenu": "enableContextMenu"; "enableCursorOnReadOnly": "enableCursorOnReadOnly"; "enableEditor": "enableEditor"; "enableEditorHistory": "enableEditorHistory"; "enableFontDialog": "enableFontDialog"; "enableFootnoteAndEndnoteDialog": "enableFootnoteAndEndnoteDialog"; "enableFormField": "enableFormField"; "enableHyperlinkDialog": "enableHyperlinkDialog"; "enableImageResizer": "enableImageResizer"; "enableListDialog": "enableListDialog"; "enableLocalPaste": "enableLocalPaste"; "enableLockAndEdit": "enableLockAndEdit"; "enableOptionsPane": "enableOptionsPane"; "enablePageSetupDialog": "enablePageSetupDialog"; "enableParagraphDialog": "enableParagraphDialog"; "enablePersistence": "enablePersistence"; "enablePrint": "enablePrint"; "enableRtl": "enableRtl"; "enableSearch": "enableSearch"; "enableSelection": "enableSelection"; "enableSfdtExport": "enableSfdtExport"; "enableSpellCheck": "enableSpellCheck"; "enableStyleDialog": "enableStyleDialog"; "enableTableDialog": "enableTableDialog"; "enableTableOfContentsDialog": "enableTableOfContentsDialog"; "enableTableOptionsDialog": "enableTableOptionsDialog"; "enableTablePropertiesDialog": "enableTablePropertiesDialog"; "enableTextExport": "enableTextExport"; "enableTrackChanges": "enableTrackChanges"; "enableWordExport": "enableWordExport"; "headers": "headers"; "height": "height"; "isReadOnly": "isReadOnly"; "layoutType": "layoutType"; "locale": "locale"; "pageGap": "pageGap"; "pageOutline": "pageOutline"; "serverActionSettings": "serverActionSettings"; "serviceUrl": "serviceUrl"; "showComments": "showComments"; "showRevisions": "showRevisions"; "useCtrlClickToFollowHyperlink": "useCtrlClickToFollowHyperlink"; "userColor": "userColor"; "width": "width"; "zIndex": "zIndex"; "zoomFactor": "zoomFactor"; }, { "actionComplete": "actionComplete"; "afterFormFieldFill": "afterFormFieldFill"; "beforeCommentAction": "beforeCommentAction"; "beforeFileOpen": "beforeFileOpen"; "beforeFormFieldFill": "beforeFormFieldFill"; "beforePaneSwitch": "beforePaneSwitch"; "commentBegin": "commentBegin"; "commentDelete": "commentDelete"; "commentEnd": "commentEnd"; "contentChange": "contentChange"; "contentControl": "contentControl"; "created": "created"; "customContextMenuBeforeOpen": "customContextMenuBeforeOpen"; "customContextMenuSelect": "customContextMenuSelect"; "destroyed": "destroyed"; "documentChange": "documentChange"; "keyDown": "keyDown"; "requestNavigate": "requestNavigate"; "searchResultsChange": "searchResultsChange"; "selectionChange": "selectionChange"; "serviceFailure": "serviceFailure"; "trackChange": "trackChange"; "viewChange": "viewChange"; "zoomFactorChange": "zoomFactorChange"; "beforeXmlHttpRequestSend": "beforeXmlHttpRequestSend"; }, never, never>;
}
