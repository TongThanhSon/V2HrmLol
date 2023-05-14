import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { FileManager } from '@syncfusion/ej2-filemanager';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
  * Represents the Essential JS 2 Angular FileManager Component.
 * ```html
 * <ejs-filemanager showThumbnail='false'></ejs-filemanager>
 * ```
 */
export declare class FileManagerComponent extends FileManager implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    beforeDownload: any;
    beforeImageLoad: any;
    beforePopupClose: any;
    beforePopupOpen: any;
    beforeSend: any;
    created: any;
    destroyed: any;
    failure: any;
    fileDragStart: any;
    fileDragStop: any;
    fileDragging: any;
    fileDropped: any;
    fileLoad: any;
    fileOpen: any;
    fileSelect: any;
    fileSelection: any;
    menuClick: any;
    menuOpen: any;
    popupClose: any;
    popupOpen: any;
    success: any;
    toolbarClick: any;
    toolbarCreate: any;
    uploadListCreate: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileManagerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileManagerComponent, "ejs-filemanager", never, { "ajaxSettings": "ajaxSettings"; "allowDragAndDrop": "allowDragAndDrop"; "allowMultiSelection": "allowMultiSelection"; "contextMenuSettings": "contextMenuSettings"; "cssClass": "cssClass"; "detailsViewSettings": "detailsViewSettings"; "enableHtmlSanitizer": "enableHtmlSanitizer"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "height": "height"; "locale": "locale"; "navigationPaneSettings": "navigationPaneSettings"; "path": "path"; "popupTarget": "popupTarget"; "rootAliasName": "rootAliasName"; "searchSettings": "searchSettings"; "selectedItems": "selectedItems"; "showFileExtension": "showFileExtension"; "showHiddenItems": "showHiddenItems"; "showThumbnail": "showThumbnail"; "sortBy": "sortBy"; "sortOrder": "sortOrder"; "toolbarSettings": "toolbarSettings"; "uploadSettings": "uploadSettings"; "view": "view"; "width": "width"; }, { "beforeDownload": "beforeDownload"; "beforeImageLoad": "beforeImageLoad"; "beforePopupClose": "beforePopupClose"; "beforePopupOpen": "beforePopupOpen"; "beforeSend": "beforeSend"; "created": "created"; "destroyed": "destroyed"; "failure": "failure"; "fileDragStart": "fileDragStart"; "fileDragStop": "fileDragStop"; "fileDragging": "fileDragging"; "fileDropped": "fileDropped"; "fileLoad": "fileLoad"; "fileOpen": "fileOpen"; "fileSelect": "fileSelect"; "fileSelection": "fileSelection"; "menuClick": "menuClick"; "menuOpen": "menuOpen"; "popupClose": "popupClose"; "popupOpen": "popupOpen"; "success": "success"; "toolbarClick": "toolbarClick"; "toolbarCreate": "toolbarCreate"; "uploadListCreate": "uploadListCreate"; }, never, never>;
}
