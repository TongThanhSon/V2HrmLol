import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * Represents the Essential JS 2 VueJS Uploader Component
 * ```html
 * <ejs-uploader id='fileUpload' v-bind:multiple='true'></ejs-uploader>
 * ```
 */
export declare class UploaderComponent extends ComponentBase {
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
    bytesToSize(bytes: number): string;
    cancel(fileData?: Object[]): void;
    clearAll(): void;
    createFileList(fileData: Object[], isSelectedFile?: boolean): void;
    getFilesData(index?: number): Object[];
    pause(fileData?: Object | Object[], custom?: boolean): void;
    remove(fileData?: Object | Object[], customTemplate?: boolean, removeDirectly?: boolean, postRawFile?: boolean, args?: Object | Object | Object): void;
    resume(fileData?: Object | Object[], custom?: boolean): void;
    retry(fileData?: Object | Object[], fromcanceledStage?: boolean, custom?: boolean): void;
    sortFileList(filesData?: Object): Object[];
    traverseFileTree(item: any, event?: Object | Object | Object | Object): void;
    upload(files?: Object | Object[], custom?: boolean): void;
}
export declare const UploaderPlugin: {
    name: string;
    install(Vue: any): void;
};
