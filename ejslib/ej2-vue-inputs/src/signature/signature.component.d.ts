import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * Represents the Essential JS 2 VueJS Signature Component
 * ```html
 * <ejs-signature></ejs-signature>
 * ```
 */
export declare class SignatureComponent extends ComponentBase {
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
    canRedo(): boolean;
    canUndo(): boolean;
    clear(): void;
    draw(text: string, fontFamily?: string, fontSize?: number): void;
    getBlob(url: string): Object;
    initialize(): void;
    isEmpty(): boolean;
    load(signature: string, width?: number, height?: number): void;
    redo(): void;
    save(type?: Object, fileName?: string): void;
    saveAsBlob(): Object;
    undo(): void;
}
export declare const SignaturePlugin: {
    name: string;
    install(Vue: any): void;
};
