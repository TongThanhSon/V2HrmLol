import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * Represents VueJS ListView Component
 * ```
 * <ejs-listview :dataSource='data'></ejs-listview>
 * ```
 */
export declare class ListViewComponent extends ComponentBase {
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
    addItem(data: undefined[], fields: Object): void;
    back(): void;
    checkAllItems(): void;
    checkItem(item: Object | Object | Object): void;
    disableItem(item: Object | Object | Object): void;
    enableItem(item: Object | Object | Object): void;
    findItem(item: Object | Object | Object): Object;
    getSelectedItems(): Object | Object | Object | Object;
    hideItem(item: Object | Object | Object): void;
    refreshItemHeight(): void;
    removeItem(item: Object | Object | Object): void;
    removeMultipleItems(item: Object[] | Object[] | Object[]): void;
    requiredModules(): Object[];
    selectItem(item: Object | Object | Object): void;
    selectMultipleItems(item: Object[] | Object[] | Object[]): void;
    showItem(item: Object | Object | Object): void;
    uncheckAllItems(): void;
    uncheckItem(item: Object | Object | Object): void;
}
export declare const ListViewPlugin: {
    name: string;
    install(Vue: any): void;
};
