import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { DocumentEditorContainer } from '@syncfusion/ej2-documenteditor';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * `ejs-documenteditor-container` represents the Angular Document Editor Container.
 * ```html
 * <ejs-documenteditor-container></ejs-documenteditor-container>
 * ```
 */
export declare class DocumentEditorContainerComponent extends DocumentEditorContainer implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    beforeCommentAction: any;
    beforePaneSwitch: any;
    commentDelete: any;
    contentChange: any;
    contentControl: any;
    created: any;
    customContextMenuBeforeOpen: any;
    customContextMenuSelect: any;
    destroyed: any;
    documentChange: any;
    selectionChange: any;
    serviceFailure: any;
    toolbarClick: any;
    trackChange: any;
    beforeXmlHttpRequestSend: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DocumentEditorContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DocumentEditorContainerComponent, "ejs-documenteditorcontainer", never, { "currentUser": "currentUser"; "documentEditorSettings": "documentEditorSettings"; "documentSettings": "documentSettings"; "enableComment": "enableComment"; "enableCsp": "enableCsp"; "enableLocalPaste": "enableLocalPaste"; "enableLockAndEdit": "enableLockAndEdit"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "enableSpellCheck": "enableSpellCheck"; "enableToolbar": "enableToolbar"; "enableTrackChanges": "enableTrackChanges"; "headers": "headers"; "height": "height"; "layoutType": "layoutType"; "locale": "locale"; "restrictEditing": "restrictEditing"; "serverActionSettings": "serverActionSettings"; "serviceUrl": "serviceUrl"; "showPropertiesPane": "showPropertiesPane"; "toolbarItems": "toolbarItems"; "userColor": "userColor"; "width": "width"; "zIndex": "zIndex"; }, { "beforeCommentAction": "beforeCommentAction"; "beforePaneSwitch": "beforePaneSwitch"; "commentDelete": "commentDelete"; "contentChange": "contentChange"; "contentControl": "contentControl"; "created": "created"; "customContextMenuBeforeOpen": "customContextMenuBeforeOpen"; "customContextMenuSelect": "customContextMenuSelect"; "destroyed": "destroyed"; "documentChange": "documentChange"; "selectionChange": "selectionChange"; "serviceFailure": "serviceFailure"; "toolbarClick": "toolbarClick"; "trackChange": "trackChange"; "beforeXmlHttpRequestSend": "beforeXmlHttpRequestSend"; }, never, never>;
}
