import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * `ejs-pdfviewer` represents the VueJS PdfViewer Component.
 * ```vue
 * <ejs-pdfviewer></ejs-pdfviewer>
 * ```
 */
export declare class PdfViewerComponent extends ComponentBase {
    ej2Instances: any;
    propKeys: string[];
    models: string[];
    hasChildDirective: boolean;
    protected hasInjectedModules: boolean;
    tagMapper: {
        [key: string]: Object;
    };
    tagNameMapper: Object;
    isVue3: boolean;
    templateCollection: any;
    constructor();
    clearTemplate(templateNames?: string[]): any;
    setProperties(prop: any, muteOnChange: boolean): void;
    render(createElement: any): any;
    custom(): void;
    addAnnotation(annotation: any): void;
    clearFormFields(formField?: any): void;
    convertClientPointToPagePoint(clientPoint: Object, pageNumber: number): Object;
    convertPagePointToClientPoint(pagePoint: Object, pageNumber: number): Object;
    convertPagePointToScrollingPoint(pagePoint: Object, pageNumber: number): Object;
    deleteAnnotations(): void;
    download(): void;
    exportAnnotation(annotationDataFormat?: Object): void;
    exportAnnotationsAsBase64String(annotationDataFormat: Object): Object;
    exportAnnotationsAsObject(): Object;
    exportFormFields(path?: string): void;
    exportFormFieldsAsObject(): Object;
    focusFormField(field: any): void;
    getPageNumberFromClientPoint(clientPoint: Object): number;
    importAnnotation(importData: any, annotationDataFormat?: Object): void;
    importFormFields(formFields: any): void;
    load(document: string, password: string): void;
    redo(): void;
    requiredModules(): Object[];
    resetFormFields(): void;
    retrieveFormFields(): Object[];
    saveAsBlob(): Object;
    setJsonData(jsonData: any): void;
    showNotificationPopup(errorString: string): void;
    undo(): void;
    unload(): void;
    updateFormFields(formFields: any): void;
    updateFormFieldsValue(fieldValue: any): void;
    updateViewerContainer(): void;
    zoomToRect(rectangle: Object): void;
}
export declare const PdfViewerPlugin: {
    name: string;
    install(Vue: any): void;
};
