import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { setValue, ComponentBase, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { PdfViewer, LinkAnnotation, BookmarkView, Magnification, ThumbnailView, Toolbar, Navigation, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';
export * from '@syncfusion/ej2-pdfviewer';
import { CommonModule } from '@angular/common';

const inputs = ['DropdownFieldSettings', 'ajaxRequestSettings', 'annotationSelectorSettings', 'annotationSettings', 'annotations', 'areaSettings', 'arrowSettings', 'checkBoxFieldSettings', 'circleSettings', 'contextMenuOption', 'contextMenuSettings', 'currentPageNumber', 'customStamp', 'customStampSettings', 'dateTimeFormat', 'designerMode', 'disableContextMenuItems', 'distanceSettings', 'documentPath', 'downloadFileName', 'drawingObject', 'enableAnnotation', 'enableAnnotationToolbar', 'enableAutoComplete', 'enableBookmark', 'enableBookmarkStyles', 'enableCommentPanel', 'enableDesktopMode', 'enableDownload', 'enableFormDesigner', 'enableFormDesignerToolbar', 'enableFormFields', 'enableFormFieldsValidation', 'enableFreeText', 'enableHandwrittenSignature', 'enableHyperlink', 'enableImportAnnotationMeasurement', 'enableInkAnnotation', 'enableMagnification', 'enableMeasureAnnotation', 'enableMultiLineOverlap', 'enableMultiPageAnnotation', 'enableNavigation', 'enableNavigationToolbar', 'enablePersistence', 'enablePinchZoom', 'enablePrint', 'enablePrintRotation', 'enableRtl', 'enableShapeAnnotation', 'enableShapeLabel', 'enableStampAnnotations', 'enableStickyNotesAnnotation', 'enableTextMarkupAnnotation', 'enableTextMarkupResizer', 'enableTextSearch', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'enableZoomOptimization', 'exportAnnotationFileName', 'formFieldCollections', 'formFields', 'freeTextSettings', 'handWrittenSignatureSettings', 'height', 'hideSaveSignature', 'highlightSettings', 'hyperlinkOpenState', 'initialDialogSettings', 'initialFieldSettings', 'inkAnnotationSettings', 'interactionMode', 'isAnnotationToolbarOpen', 'isAnnotationToolbarVisible', 'isBookmarkPanelOpen', 'isCommandPanelOpen', 'isDocumentEdited', 'isExtractText', 'isFormDesignerToolbarVisible', 'isFormFieldDocument', 'isInitialFieldToolbarSelection', 'isMaintainSelection', 'isSignatureEditable', 'isThumbnailViewOpen', 'isValidFreeText', 'lineSettings', 'listBoxFieldSettings', 'locale', 'measurementSettings', 'pageCount', 'passwordFieldSettings', 'perimeterSettings', 'polygonSettings', 'printMode', 'radioButtonFieldSettings', 'radiusSettings', 'rectangleSettings', 'restrictZoomRequest', 'retryCount', 'scrollSettings', 'selectedItems', 'serverActionSettings', 'serviceUrl', 'shapeLabelSettings', 'showNotificationDialog', 'signatureDialogSettings', 'signatureFieldSettings', 'signatureFitMode', 'stampSettings', 'stickyNotesSettings', 'strikethroughSettings', 'textFieldSettings', 'textSearchColorSettings', 'tileRenderingSettings', 'toolbarSettings', 'underlineSettings', 'volumeSettings', 'width', 'zoomMode', 'zoomValue'];
const outputs = ['addSignature', 'ajaxRequestFailed', 'ajaxRequestInitiate', 'ajaxRequestSuccess', 'annotationAdd', 'annotationDoubleClick', 'annotationMouseLeave', 'annotationMouseover', 'annotationMove', 'annotationMoving', 'annotationPropertiesChange', 'annotationRemove', 'annotationResize', 'annotationSelect', 'annotationUnSelect', 'beforeAddFreeText', 'bookmarkClick', 'buttonFieldClick', 'commentAdd', 'commentDelete', 'commentEdit', 'commentSelect', 'commentStatusChanged', 'created', 'documentLoad', 'documentLoadFailed', 'documentUnload', 'downloadEnd', 'downloadStart', 'exportFailed', 'exportStart', 'exportSuccess', 'extractTextCompleted', 'formFieldAdd', 'formFieldClick', 'formFieldDoubleClick', 'formFieldFocusOut', 'formFieldMouseLeave', 'formFieldMouseover', 'formFieldMove', 'formFieldPropertiesChange', 'formFieldRemove', 'formFieldResize', 'formFieldSelect', 'formFieldUnselect', 'hyperlinkClick', 'hyperlinkMouseOver', 'importFailed', 'importStart', 'importSuccess', 'moveSignature', 'pageChange', 'pageClick', 'pageMouseover', 'printEnd', 'printStart', 'removeSignature', 'resizeSignature', 'signaturePropertiesChange', 'signatureSelect', 'textSearchComplete', 'textSearchHighlight', 'textSearchStart', 'textSelectionEnd', 'textSelectionStart', 'thumbnailClick', 'validateFormFields', 'zoomChange'];
const twoWays = [];
/**
 * `ejs-pdfviewer` represents the Angular PdfViewer Component.
 * ```html
 * <ejs-pdfviewer></ejs-pdfviewer>
 * ```
 */
let PdfViewerComponent = class PdfViewerComponent extends PdfViewer {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('PdfViewerLinkAnnotation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('PdfViewerBookmarkView');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('PdfViewerMagnification');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('PdfViewerThumbnailView');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('PdfViewerToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('PdfViewerNavigation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('PdfViewerPrint');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('PdfViewerTextSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('PdfViewerTextSearch');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            let mod = this.injector.get('PdfViewerAnnotation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            let mod = this.injector.get('PdfViewerFormDesigner');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            let mod = this.injector.get('PdfViewerFormFields');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
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
PdfViewerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PdfViewerComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
PdfViewerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: PdfViewerComponent, selector: "ejs-pdfviewer", inputs: { DropdownFieldSettings: "DropdownFieldSettings", ajaxRequestSettings: "ajaxRequestSettings", annotationSelectorSettings: "annotationSelectorSettings", annotationSettings: "annotationSettings", annotations: "annotations", areaSettings: "areaSettings", arrowSettings: "arrowSettings", checkBoxFieldSettings: "checkBoxFieldSettings", circleSettings: "circleSettings", contextMenuOption: "contextMenuOption", contextMenuSettings: "contextMenuSettings", currentPageNumber: "currentPageNumber", customStamp: "customStamp", customStampSettings: "customStampSettings", dateTimeFormat: "dateTimeFormat", designerMode: "designerMode", disableContextMenuItems: "disableContextMenuItems", distanceSettings: "distanceSettings", documentPath: "documentPath", downloadFileName: "downloadFileName", drawingObject: "drawingObject", enableAnnotation: "enableAnnotation", enableAnnotationToolbar: "enableAnnotationToolbar", enableAutoComplete: "enableAutoComplete", enableBookmark: "enableBookmark", enableBookmarkStyles: "enableBookmarkStyles", enableCommentPanel: "enableCommentPanel", enableDesktopMode: "enableDesktopMode", enableDownload: "enableDownload", enableFormDesigner: "enableFormDesigner", enableFormDesignerToolbar: "enableFormDesignerToolbar", enableFormFields: "enableFormFields", enableFormFieldsValidation: "enableFormFieldsValidation", enableFreeText: "enableFreeText", enableHandwrittenSignature: "enableHandwrittenSignature", enableHyperlink: "enableHyperlink", enableImportAnnotationMeasurement: "enableImportAnnotationMeasurement", enableInkAnnotation: "enableInkAnnotation", enableMagnification: "enableMagnification", enableMeasureAnnotation: "enableMeasureAnnotation", enableMultiLineOverlap: "enableMultiLineOverlap", enableMultiPageAnnotation: "enableMultiPageAnnotation", enableNavigation: "enableNavigation", enableNavigationToolbar: "enableNavigationToolbar", enablePersistence: "enablePersistence", enablePinchZoom: "enablePinchZoom", enablePrint: "enablePrint", enablePrintRotation: "enablePrintRotation", enableRtl: "enableRtl", enableShapeAnnotation: "enableShapeAnnotation", enableShapeLabel: "enableShapeLabel", enableStampAnnotations: "enableStampAnnotations", enableStickyNotesAnnotation: "enableStickyNotesAnnotation", enableTextMarkupAnnotation: "enableTextMarkupAnnotation", enableTextMarkupResizer: "enableTextMarkupResizer", enableTextSearch: "enableTextSearch", enableTextSelection: "enableTextSelection", enableThumbnail: "enableThumbnail", enableToolbar: "enableToolbar", enableZoomOptimization: "enableZoomOptimization", exportAnnotationFileName: "exportAnnotationFileName", formFieldCollections: "formFieldCollections", formFields: "formFields", freeTextSettings: "freeTextSettings", handWrittenSignatureSettings: "handWrittenSignatureSettings", height: "height", hideSaveSignature: "hideSaveSignature", highlightSettings: "highlightSettings", hyperlinkOpenState: "hyperlinkOpenState", initialDialogSettings: "initialDialogSettings", initialFieldSettings: "initialFieldSettings", inkAnnotationSettings: "inkAnnotationSettings", interactionMode: "interactionMode", isAnnotationToolbarOpen: "isAnnotationToolbarOpen", isAnnotationToolbarVisible: "isAnnotationToolbarVisible", isBookmarkPanelOpen: "isBookmarkPanelOpen", isCommandPanelOpen: "isCommandPanelOpen", isDocumentEdited: "isDocumentEdited", isExtractText: "isExtractText", isFormDesignerToolbarVisible: "isFormDesignerToolbarVisible", isFormFieldDocument: "isFormFieldDocument", isInitialFieldToolbarSelection: "isInitialFieldToolbarSelection", isMaintainSelection: "isMaintainSelection", isSignatureEditable: "isSignatureEditable", isThumbnailViewOpen: "isThumbnailViewOpen", isValidFreeText: "isValidFreeText", lineSettings: "lineSettings", listBoxFieldSettings: "listBoxFieldSettings", locale: "locale", measurementSettings: "measurementSettings", pageCount: "pageCount", passwordFieldSettings: "passwordFieldSettings", perimeterSettings: "perimeterSettings", polygonSettings: "polygonSettings", printMode: "printMode", radioButtonFieldSettings: "radioButtonFieldSettings", radiusSettings: "radiusSettings", rectangleSettings: "rectangleSettings", restrictZoomRequest: "restrictZoomRequest", retryCount: "retryCount", scrollSettings: "scrollSettings", selectedItems: "selectedItems", serverActionSettings: "serverActionSettings", serviceUrl: "serviceUrl", shapeLabelSettings: "shapeLabelSettings", showNotificationDialog: "showNotificationDialog", signatureDialogSettings: "signatureDialogSettings", signatureFieldSettings: "signatureFieldSettings", signatureFitMode: "signatureFitMode", stampSettings: "stampSettings", stickyNotesSettings: "stickyNotesSettings", strikethroughSettings: "strikethroughSettings", textFieldSettings: "textFieldSettings", textSearchColorSettings: "textSearchColorSettings", tileRenderingSettings: "tileRenderingSettings", toolbarSettings: "toolbarSettings", underlineSettings: "underlineSettings", volumeSettings: "volumeSettings", width: "width", zoomMode: "zoomMode", zoomValue: "zoomValue" }, outputs: { addSignature: "addSignature", ajaxRequestFailed: "ajaxRequestFailed", ajaxRequestInitiate: "ajaxRequestInitiate", ajaxRequestSuccess: "ajaxRequestSuccess", annotationAdd: "annotationAdd", annotationDoubleClick: "annotationDoubleClick", annotationMouseLeave: "annotationMouseLeave", annotationMouseover: "annotationMouseover", annotationMove: "annotationMove", annotationMoving: "annotationMoving", annotationPropertiesChange: "annotationPropertiesChange", annotationRemove: "annotationRemove", annotationResize: "annotationResize", annotationSelect: "annotationSelect", annotationUnSelect: "annotationUnSelect", beforeAddFreeText: "beforeAddFreeText", bookmarkClick: "bookmarkClick", buttonFieldClick: "buttonFieldClick", commentAdd: "commentAdd", commentDelete: "commentDelete", commentEdit: "commentEdit", commentSelect: "commentSelect", commentStatusChanged: "commentStatusChanged", created: "created", documentLoad: "documentLoad", documentLoadFailed: "documentLoadFailed", documentUnload: "documentUnload", downloadEnd: "downloadEnd", downloadStart: "downloadStart", exportFailed: "exportFailed", exportStart: "exportStart", exportSuccess: "exportSuccess", extractTextCompleted: "extractTextCompleted", formFieldAdd: "formFieldAdd", formFieldClick: "formFieldClick", formFieldDoubleClick: "formFieldDoubleClick", formFieldFocusOut: "formFieldFocusOut", formFieldMouseLeave: "formFieldMouseLeave", formFieldMouseover: "formFieldMouseover", formFieldMove: "formFieldMove", formFieldPropertiesChange: "formFieldPropertiesChange", formFieldRemove: "formFieldRemove", formFieldResize: "formFieldResize", formFieldSelect: "formFieldSelect", formFieldUnselect: "formFieldUnselect", hyperlinkClick: "hyperlinkClick", hyperlinkMouseOver: "hyperlinkMouseOver", importFailed: "importFailed", importStart: "importStart", importSuccess: "importSuccess", moveSignature: "moveSignature", pageChange: "pageChange", pageClick: "pageClick", pageMouseover: "pageMouseover", printEnd: "printEnd", printStart: "printStart", removeSignature: "removeSignature", resizeSignature: "resizeSignature", signaturePropertiesChange: "signaturePropertiesChange", signatureSelect: "signatureSelect", textSearchComplete: "textSearchComplete", textSearchHighlight: "textSearchHighlight", textSearchStart: "textSearchStart", textSelectionEnd: "textSelectionEnd", textSelectionStart: "textSelectionStart", thumbnailClick: "thumbnailClick", validateFormFields: "validateFormFields", zoomChange: "zoomChange" }, usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
PdfViewerComponent = __decorate([
    ComponentMixins([ComponentBase])
], PdfViewerComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PdfViewerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-pdfviewer',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the PdfViewer component.
 */
class PdfViewerModule {
}
PdfViewerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PdfViewerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PdfViewerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PdfViewerModule, declarations: [PdfViewerComponent], imports: [CommonModule], exports: [PdfViewerComponent] });
PdfViewerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PdfViewerModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PdfViewerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        PdfViewerComponent
                    ],
                    exports: [
                        PdfViewerComponent
                    ]
                }]
        }] });

const LinkAnnotationService = { provide: 'PdfViewerLinkAnnotation', useValue: LinkAnnotation };
const BookmarkViewService = { provide: 'PdfViewerBookmarkView', useValue: BookmarkView };
const MagnificationService = { provide: 'PdfViewerMagnification', useValue: Magnification };
const ThumbnailViewService = { provide: 'PdfViewerThumbnailView', useValue: ThumbnailView };
const ToolbarService = { provide: 'PdfViewerToolbar', useValue: Toolbar };
const NavigationService = { provide: 'PdfViewerNavigation', useValue: Navigation };
const PrintService = { provide: 'PdfViewerPrint', useValue: Print };
const TextSelectionService = { provide: 'PdfViewerTextSelection', useValue: TextSelection };
const TextSearchService = { provide: 'PdfViewerTextSearch', useValue: TextSearch };
const AnnotationService = { provide: 'PdfViewerAnnotation', useValue: Annotation };
const FormDesignerService = { provide: 'PdfViewerFormDesigner', useValue: FormDesigner };
const FormFieldsService = { provide: 'PdfViewerFormFields', useValue: FormFields };
/**
 * NgModule definition for the PdfViewer component with providers.
 */
class PdfViewerAllModule {
}
PdfViewerAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PdfViewerAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PdfViewerAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PdfViewerAllModule, imports: [CommonModule, PdfViewerModule], exports: [PdfViewerModule] });
PdfViewerAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PdfViewerAllModule, providers: [
        LinkAnnotationService,
        BookmarkViewService,
        MagnificationService,
        ThumbnailViewService,
        ToolbarService,
        NavigationService,
        PrintService,
        TextSelectionService,
        TextSearchService,
        AnnotationService,
        FormDesignerService,
        FormFieldsService
    ], imports: [[CommonModule, PdfViewerModule], PdfViewerModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PdfViewerAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, PdfViewerModule],
                    exports: [
                        PdfViewerModule
                    ],
                    providers: [
                        LinkAnnotationService,
                        BookmarkViewService,
                        MagnificationService,
                        ThumbnailViewService,
                        ToolbarService,
                        NavigationService,
                        PrintService,
                        TextSelectionService,
                        TextSearchService,
                        AnnotationService,
                        FormDesignerService,
                        FormFieldsService
                    ]
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { AnnotationService, BookmarkViewService, FormDesignerService, FormFieldsService, LinkAnnotationService, MagnificationService, NavigationService, PdfViewerAllModule, PdfViewerComponent, PdfViewerModule, PrintService, TextSearchService, TextSelectionService, ThumbnailViewService, ToolbarService };
//# sourceMappingURL=syncfusion-ej2-angular-pdfviewer.mjs.map
