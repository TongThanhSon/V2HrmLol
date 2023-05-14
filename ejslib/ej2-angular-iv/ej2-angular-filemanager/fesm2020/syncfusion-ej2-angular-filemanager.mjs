import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { setValue, ComponentBase, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { FileManager, DetailsView, NavigationPane, LargeIconsView, Toolbar, ContextMenu, BreadCrumbBar } from '@syncfusion/ej2-filemanager';
export * from '@syncfusion/ej2-filemanager';
import { CommonModule } from '@angular/common';

const inputs = ['ajaxSettings', 'allowDragAndDrop', 'allowMultiSelection', 'contextMenuSettings', 'cssClass', 'detailsViewSettings', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'locale', 'navigationPaneSettings', 'path', 'popupTarget', 'rootAliasName', 'searchSettings', 'selectedItems', 'showFileExtension', 'showHiddenItems', 'showThumbnail', 'sortBy', 'sortOrder', 'toolbarSettings', 'uploadSettings', 'view', 'width'];
const outputs = ['beforeDownload', 'beforeImageLoad', 'beforePopupClose', 'beforePopupOpen', 'beforeSend', 'created', 'destroyed', 'failure', 'fileDragStart', 'fileDragStop', 'fileDragging', 'fileDropped', 'fileLoad', 'fileOpen', 'fileSelect', 'fileSelection', 'menuClick', 'menuOpen', 'popupClose', 'popupOpen', 'success', 'toolbarClick', 'toolbarCreate', 'uploadListCreate'];
const twoWays = [''];
/**
  * Represents the Essential JS 2 Angular FileManager Component.
 * ```html
 * <ejs-filemanager showThumbnail='false'></ejs-filemanager>
 * ```
 */
let FileManagerComponent = class FileManagerComponent extends FileManager {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('FileManagerDetailsView');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('FileManagerNavigationPane');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('FileManagerLargeIconsView');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('FileManagerToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('FileManagerContextMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('FileManagerBreadCrumbBar');
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
FileManagerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FileManagerComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
FileManagerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: FileManagerComponent, selector: "ejs-filemanager", inputs: { ajaxSettings: "ajaxSettings", allowDragAndDrop: "allowDragAndDrop", allowMultiSelection: "allowMultiSelection", contextMenuSettings: "contextMenuSettings", cssClass: "cssClass", detailsViewSettings: "detailsViewSettings", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRtl: "enableRtl", height: "height", locale: "locale", navigationPaneSettings: "navigationPaneSettings", path: "path", popupTarget: "popupTarget", rootAliasName: "rootAliasName", searchSettings: "searchSettings", selectedItems: "selectedItems", showFileExtension: "showFileExtension", showHiddenItems: "showHiddenItems", showThumbnail: "showThumbnail", sortBy: "sortBy", sortOrder: "sortOrder", toolbarSettings: "toolbarSettings", uploadSettings: "uploadSettings", view: "view", width: "width" }, outputs: { beforeDownload: "beforeDownload", beforeImageLoad: "beforeImageLoad", beforePopupClose: "beforePopupClose", beforePopupOpen: "beforePopupOpen", beforeSend: "beforeSend", created: "created", destroyed: "destroyed", failure: "failure", fileDragStart: "fileDragStart", fileDragStop: "fileDragStop", fileDragging: "fileDragging", fileDropped: "fileDropped", fileLoad: "fileLoad", fileOpen: "fileOpen", fileSelect: "fileSelect", fileSelection: "fileSelection", menuClick: "menuClick", menuOpen: "menuOpen", popupClose: "popupClose", popupOpen: "popupOpen", success: "success", toolbarClick: "toolbarClick", toolbarCreate: "toolbarCreate", uploadListCreate: "uploadListCreate" }, usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
FileManagerComponent = __decorate([
    ComponentMixins([ComponentBase])
], FileManagerComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FileManagerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-filemanager',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the FileManager component.
 */
class FileManagerModule {
}
FileManagerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FileManagerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FileManagerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FileManagerModule, declarations: [FileManagerComponent], imports: [CommonModule], exports: [FileManagerComponent] });
FileManagerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FileManagerModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FileManagerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        FileManagerComponent
                    ],
                    exports: [
                        FileManagerComponent
                    ]
                }]
        }] });

const DetailsViewService = { provide: 'FileManagerDetailsView', useValue: DetailsView };
const NavigationPaneService = { provide: 'FileManagerNavigationPane', useValue: NavigationPane };
const LargeIconsViewService = { provide: 'FileManagerLargeIconsView', useValue: LargeIconsView };
const ToolbarService = { provide: 'FileManagerToolbar', useValue: Toolbar };
const ContextMenuService = { provide: 'FileManagerContextMenu', useValue: ContextMenu };
const BreadCrumbBarService = { provide: 'FileManagerBreadCrumbBar', useValue: BreadCrumbBar };
/**
 * NgModule definition for the FileManager component with providers.
 */
class FileManagerAllModule {
}
FileManagerAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FileManagerAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FileManagerAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FileManagerAllModule, imports: [CommonModule, FileManagerModule], exports: [FileManagerModule] });
FileManagerAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FileManagerAllModule, providers: [
        DetailsViewService,
        NavigationPaneService,
        LargeIconsViewService,
        ToolbarService,
        ContextMenuService,
        BreadCrumbBarService
    ], imports: [[CommonModule, FileManagerModule], FileManagerModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FileManagerAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FileManagerModule],
                    exports: [
                        FileManagerModule
                    ],
                    providers: [
                        DetailsViewService,
                        NavigationPaneService,
                        LargeIconsViewService,
                        ToolbarService,
                        ContextMenuService,
                        BreadCrumbBarService
                    ]
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { BreadCrumbBarService, ContextMenuService, DetailsViewService, FileManagerAllModule, FileManagerComponent, FileManagerModule, LargeIconsViewService, NavigationPaneService, ToolbarService };
//# sourceMappingURL=syncfusion-ej2-angular-filemanager.mjs.map
