import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { FileManager } from '@syncfusion/ej2-filemanager';
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
}
