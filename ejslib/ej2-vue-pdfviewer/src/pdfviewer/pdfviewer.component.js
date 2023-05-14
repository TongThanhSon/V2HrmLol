var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ComponentBase, EJComponentDecorator, getProps, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';
import { PdfViewer } from '@syncfusion/ej2-pdfviewer';
// {{VueImport}}
export var properties = ['isLazyUpdate', 'plugins', 'DropdownFieldSettings', 'ajaxRequestSettings', 'annotationSelectorSettings', 'annotationSettings', 'annotations', 'areaSettings', 'arrowSettings', 'checkBoxFieldSettings', 'circleSettings', 'contextMenuOption', 'contextMenuSettings', 'currentPageNumber', 'customStamp', 'customStampSettings', 'dateTimeFormat', 'designerMode', 'disableContextMenuItems', 'distanceSettings', 'documentPath', 'downloadFileName', 'drawingObject', 'enableAnnotation', 'enableAnnotationToolbar', 'enableAutoComplete', 'enableBookmark', 'enableBookmarkStyles', 'enableCommentPanel', 'enableDesktopMode', 'enableDownload', 'enableFormDesigner', 'enableFormDesignerToolbar', 'enableFormFields', 'enableFormFieldsValidation', 'enableFreeText', 'enableHandwrittenSignature', 'enableHyperlink', 'enableImportAnnotationMeasurement', 'enableInkAnnotation', 'enableMagnification', 'enableMeasureAnnotation', 'enableMultiLineOverlap', 'enableMultiPageAnnotation', 'enableNavigation', 'enableNavigationToolbar', 'enablePersistence', 'enablePinchZoom', 'enablePrint', 'enablePrintRotation', 'enableRtl', 'enableShapeAnnotation', 'enableShapeLabel', 'enableStampAnnotations', 'enableStickyNotesAnnotation', 'enableTextMarkupAnnotation', 'enableTextMarkupResizer', 'enableTextSearch', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'enableZoomOptimization', 'exportAnnotationFileName', 'formFieldCollections', 'formFields', 'freeTextSettings', 'handWrittenSignatureSettings', 'height', 'hideSaveSignature', 'highlightSettings', 'hyperlinkOpenState', 'initialDialogSettings', 'initialFieldSettings', 'inkAnnotationSettings', 'interactionMode', 'isAnnotationToolbarOpen', 'isAnnotationToolbarVisible', 'isBookmarkPanelOpen', 'isCommandPanelOpen', 'isDocumentEdited', 'isExtractText', 'isFormDesignerToolbarVisible', 'isFormFieldDocument', 'isInitialFieldToolbarSelection', 'isMaintainSelection', 'isSignatureEditable', 'isThumbnailViewOpen', 'isValidFreeText', 'lineSettings', 'listBoxFieldSettings', 'locale', 'measurementSettings', 'pageCount', 'passwordFieldSettings', 'perimeterSettings', 'polygonSettings', 'printMode', 'radioButtonFieldSettings', 'radiusSettings', 'rectangleSettings', 'restrictZoomRequest', 'retryCount', 'scrollSettings', 'selectedItems', 'serverActionSettings', 'serviceUrl', 'shapeLabelSettings', 'showNotificationDialog', 'signatureDialogSettings', 'signatureFieldSettings', 'signatureFitMode', 'stampSettings', 'stickyNotesSettings', 'strikethroughSettings', 'textFieldSettings', 'textSearchColorSettings', 'tileRenderingSettings', 'toolbarSettings', 'underlineSettings', 'volumeSettings', 'width', 'zoomMode', 'zoomValue', 'addSignature', 'ajaxRequestFailed', 'ajaxRequestInitiate', 'ajaxRequestSuccess', 'annotationAdd', 'annotationDoubleClick', 'annotationMouseLeave', 'annotationMouseover', 'annotationMove', 'annotationMoving', 'annotationPropertiesChange', 'annotationRemove', 'annotationResize', 'annotationSelect', 'annotationUnSelect', 'beforeAddFreeText', 'bookmarkClick', 'buttonFieldClick', 'commentAdd', 'commentDelete', 'commentEdit', 'commentSelect', 'commentStatusChanged', 'created', 'documentLoad', 'documentLoadFailed', 'documentUnload', 'downloadEnd', 'downloadStart', 'exportFailed', 'exportStart', 'exportSuccess', 'extractTextCompleted', 'formFieldAdd', 'formFieldClick', 'formFieldDoubleClick', 'formFieldFocusOut', 'formFieldMouseLeave', 'formFieldMouseover', 'formFieldMove', 'formFieldPropertiesChange', 'formFieldRemove', 'formFieldResize', 'formFieldSelect', 'formFieldUnselect', 'hyperlinkClick', 'hyperlinkMouseOver', 'importFailed', 'importStart', 'importSuccess', 'moveSignature', 'pageChange', 'pageClick', 'pageMouseover', 'printEnd', 'printStart', 'removeSignature', 'resizeSignature', 'signaturePropertiesChange', 'signatureSelect', 'textSearchComplete', 'textSearchHighlight', 'textSearchStart', 'textSelectionEnd', 'textSelectionStart', 'thumbnailClick', 'validateFormFields', 'zoomChange'];
export var modelProps = [];
export var testProp = getProps({ props: properties });
export var props = testProp[0];
export var watch = testProp[1];
export var emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (var _i = 0, modelProps_1 = modelProps; _i < modelProps_1.length; _i++) {
    var props_1 = modelProps_1[_i];
    emitProbs.push('update:' + props_1);
}
export var isExecute = gh ? false : true;
/**
 * `ejs-pdfviewer` represents the VueJS PdfViewer Component.
 * ```vue
 * <ejs-pdfviewer></ejs-pdfviewer>
 * ```
 */
var PdfViewerComponent = /** @class */ (function (_super) {
    __extends(PdfViewerComponent, _super);
    function PdfViewerComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = true;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.isVue3 = !isExecute;
        _this.ej2Instances = new PdfViewer({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    PdfViewerComponent.prototype.clearTemplate = function (templateNames) {
        if (!templateNames) {
            templateNames = Object.keys(this.templateCollection || {});
        }
        if (templateNames.length && this.templateCollection) {
            for (var _i = 0, templateNames_1 = templateNames; _i < templateNames_1.length; _i++) {
                var tempName = templateNames_1[_i];
                var elementCollection = this.templateCollection[tempName];
                if (elementCollection && elementCollection.length) {
                    for (var _a = 0, elementCollection_1 = elementCollection; _a < elementCollection_1.length; _a++) {
                        var ele = elementCollection_1[_a];
                        var destroy = getValue('__vue__.$destroy', ele);
                        if (destroy) {
                            ele.__vue__.$destroy();
                        }
                        if (ele.innerHTML) {
                            ele.innerHTML = '';
                        }
                    }
                    delete this.templateCollection[tempName];
                }
            }
        }
    };
    PdfViewerComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.isVue3) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        if (_this.isVue3) {
                            _this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                        }
                        else {
                            _this.$emit('update:' + key, prop[key]);
                            _this.$emit('modelchanged', prop[key]);
                        }
                    }
                });
            });
        }
    };
    PdfViewerComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    PdfViewerComponent.prototype.custom = function () {
        this.updated();
    };
    PdfViewerComponent.prototype.addAnnotation = function (annotation) {
        return this.ej2Instances.addAnnotation(annotation);
    };
    PdfViewerComponent.prototype.clearFormFields = function (formField) {
        return this.ej2Instances.clearFormFields(formField);
    };
    PdfViewerComponent.prototype.convertClientPointToPagePoint = function (clientPoint, pageNumber) {
        return this.ej2Instances.convertClientPointToPagePoint(clientPoint, pageNumber);
    };
    PdfViewerComponent.prototype.convertPagePointToClientPoint = function (pagePoint, pageNumber) {
        return this.ej2Instances.convertPagePointToClientPoint(pagePoint, pageNumber);
    };
    PdfViewerComponent.prototype.convertPagePointToScrollingPoint = function (pagePoint, pageNumber) {
        return this.ej2Instances.convertPagePointToScrollingPoint(pagePoint, pageNumber);
    };
    PdfViewerComponent.prototype.deleteAnnotations = function () {
        return this.ej2Instances.deleteAnnotations();
    };
    PdfViewerComponent.prototype.download = function () {
        return this.ej2Instances.download();
    };
    PdfViewerComponent.prototype.exportAnnotation = function (annotationDataFormat) {
        return this.ej2Instances.exportAnnotation(annotationDataFormat);
    };
    PdfViewerComponent.prototype.exportAnnotationsAsBase64String = function (annotationDataFormat) {
        return this.ej2Instances.exportAnnotationsAsBase64String(annotationDataFormat);
    };
    PdfViewerComponent.prototype.exportAnnotationsAsObject = function () {
        return this.ej2Instances.exportAnnotationsAsObject();
    };
    PdfViewerComponent.prototype.exportFormFields = function (path) {
        return this.ej2Instances.exportFormFields(path);
    };
    PdfViewerComponent.prototype.exportFormFieldsAsObject = function () {
        return this.ej2Instances.exportFormFieldsAsObject();
    };
    PdfViewerComponent.prototype.focusFormField = function (field) {
        return this.ej2Instances.focusFormField(field);
    };
    PdfViewerComponent.prototype.getPageNumberFromClientPoint = function (clientPoint) {
        return this.ej2Instances.getPageNumberFromClientPoint(clientPoint);
    };
    PdfViewerComponent.prototype.importAnnotation = function (importData, annotationDataFormat) {
        return this.ej2Instances.importAnnotation(importData, annotationDataFormat);
    };
    PdfViewerComponent.prototype.importFormFields = function (formFields) {
        return this.ej2Instances.importFormFields(formFields);
    };
    PdfViewerComponent.prototype.load = function (document, password) {
        return this.ej2Instances.load(document, password);
    };
    PdfViewerComponent.prototype.redo = function () {
        return this.ej2Instances.redo();
    };
    PdfViewerComponent.prototype.requiredModules = function () {
        return this.ej2Instances.requiredModules();
    };
    PdfViewerComponent.prototype.resetFormFields = function () {
        return this.ej2Instances.resetFormFields();
    };
    PdfViewerComponent.prototype.retrieveFormFields = function () {
        return this.ej2Instances.retrieveFormFields();
    };
    PdfViewerComponent.prototype.saveAsBlob = function () {
        return this.ej2Instances.saveAsBlob();
    };
    PdfViewerComponent.prototype.setJsonData = function (jsonData) {
        return this.ej2Instances.setJsonData(jsonData);
    };
    PdfViewerComponent.prototype.showNotificationPopup = function (errorString) {
        return this.ej2Instances.showNotificationPopup(errorString);
    };
    PdfViewerComponent.prototype.undo = function () {
        return this.ej2Instances.undo();
    };
    PdfViewerComponent.prototype.unload = function () {
        return this.ej2Instances.unload();
    };
    PdfViewerComponent.prototype.updateFormFields = function (formFields) {
        return this.ej2Instances.updateFormFields(formFields);
    };
    PdfViewerComponent.prototype.updateFormFieldsValue = function (fieldValue) {
        return this.ej2Instances.updateFormFieldsValue(fieldValue);
    };
    PdfViewerComponent.prototype.updateViewerContainer = function () {
        return this.ej2Instances.updateViewerContainer();
    };
    PdfViewerComponent.prototype.zoomToRect = function (rectangle) {
        return this.ej2Instances.zoomToRect(rectangle);
    };
    PdfViewerComponent = __decorate([
        EJComponentDecorator({
            props: properties
        }, isExecute)
        /* Start Options({
            props: props,
            watch: watch,
            emits: emitProbs,
            provide: function provide() {
                return {
                    custom: this.custom
                };
            }
        }) End */
    ], PdfViewerComponent);
    return PdfViewerComponent;
}(ComponentBase));
export { PdfViewerComponent };
export var PdfViewerPlugin = {
    name: 'ejs-pdfviewer',
    install: function (Vue) {
        Vue.component(PdfViewerPlugin.name, PdfViewerComponent);
    }
};
