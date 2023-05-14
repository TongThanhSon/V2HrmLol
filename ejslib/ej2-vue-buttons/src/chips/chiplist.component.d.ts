import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * Represents the Essential JS 2 VueJS ChipList Component.
 * ```html
 * <ejs-chiplist></ejs-chiplist>
 * ```
 */
export declare class ChipListComponent extends ComponentBase {
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
    add(chipsData: string[] | number[] | Object[] | string | number | Object): void;
    find(fields: number | Object): Object;
    getSelectedChips(): Object | Object;
    remove(fields: number | number[] | Object | Object[]): void;
    select(fields: number | number[] | Object | Object[] | string[], selectionType?: Object): void;
}
export declare const ChipListPlugin: {
    name: string;
    install(Vue: any): void;
};
