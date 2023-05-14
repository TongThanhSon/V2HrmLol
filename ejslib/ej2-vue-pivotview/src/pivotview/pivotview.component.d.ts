import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * `ejs-pivotview` represents the VueJS PivotView Component.
 * ```vue
 * <ejs-pivotview></ejs-pivotview>
 * ```
 */
export declare class PivotViewComponent extends ComponentBase {
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
    chartExport(type: Object, fileName: string, orientation?: Object, width?: number, height?: number): void;
    createCalculatedFieldDialog(): void;
    csvExport(excelExportProperties?: Object, isMultipleExport?: boolean, workbook?: any, isBlob?: boolean): void;
    excelExport(excelExportProperties?: Object, isMultipleExport?: boolean, workbook?: any, isBlob?: boolean): void;
    getCellTemplate(): Object;
    getRowText(rowIndex: number, colIndex: number): string;
    loadPersistData(persistData: string): void;
    pdfExport(pdfExportProperties?: Object, isMultipleExport?: boolean, pdfDoc?: Object, isBlob?: boolean): void;
    printChart(): void;
    refresh(): void;
    showConditionalFormattingDialog(): void;
    showNumberFormattingDialog(): void;
    templateParser(template: string): Object;
}
export declare const PivotViewPlugin: {
    name: string;
    install(Vue: any): void;
};
