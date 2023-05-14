import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * Represents the VueJS Tab Component.
 * ```html
 * <ejs-tab></ejs-tab>
 * ```
 */
export declare class TabComponent extends ComponentBase {
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
    addTab(items: Object[], index?: number): void;
    disable(value: boolean): void;
    enableTab(index: number, value: boolean): void;
    getItemIndex(tabItemId: string): number;
    hideTab(index: number, value?: boolean): void;
    refresh(): void;
    refreshActiveTab(): void;
    removeTab(index: number): void;
    select(args: number | Object, event?: Object): void;
}
export declare const TabPlugin: {
    name: string;
    install(Vue: any): void;
};
