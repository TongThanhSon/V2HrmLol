import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * Represents the VueJS Toolbar Component.
 * ```html
 * <ejs-toolbar></ejs-toolbar>
 * ```
 */
export declare class ToolbarComponent extends ComponentBase {
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
    addItems(items: Object[], index?: number): void;
    disable(value: boolean): void;
    enableItems(items: number | Object | Object, isEnable?: boolean): void;
    hideItem(index: number | Object | Object, value?: boolean): void;
    refreshOverflow(): void;
    removeItems(args: number | Object | Object | Object | Object[]): void;
}
export declare const ToolbarPlugin: {
    name: string;
    install(Vue: any): void;
};
