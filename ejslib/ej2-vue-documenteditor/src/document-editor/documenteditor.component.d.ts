import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * Represents the Essential JS 2 VueJS Document Editor Component
 * ```html
 * <ejs-documenteditor id='container'></ejs-documenteditor>
 * ```
 */
export declare class DocumentEditorComponent extends ComponentBase {
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
    enableAllModules(): void;
    exportAsImage(pageNumber: number, format: Object): Object;
    exportFormData(): Object[];
    fitPage(pageFitType?: Object): void;
    focusIn(): void;
    getBookmarks(): string[];
    getFormFieldInfo(name: string): Object | Object | Object;
    getFormFieldNames(): string[];
    getStyleNames(styleType?: Object): string[];
    getStyles(styleType?: Object): Object[];
    importFormData(formData: Object[]): void;
    open(sfdtText: string): void;
    openBlank(): void;
    print(printWindow?: Object): void;
    resetFormFields(name?: string): void;
    resize(width?: number, height?: number): void;
    save(fileName: string, formatType?: Object): void;
    saveAsBlob(formatType?: Object): Object;
    scrollToPage(pageNumber: number): boolean;
    serialize(): string;
    setDefaultCharacterFormat(characterFormat: Object): void;
    setDefaultParagraphFormat(paragraphFormat: Object): void;
    setDefaultSectionFormat(sectionFormat: Object): void;
    setFormFieldInfo(name: string, formFieldInfo: Object | Object | Object): void;
    showDialog(dialogType: Object): void;
    showOptionsPane(): void;
    showRestrictEditingPane(show?: boolean): void;
    updateFields(): void;
}
export declare const DocumentEditorPlugin: {
    name: string;
    install(Vue: any): void;
};
