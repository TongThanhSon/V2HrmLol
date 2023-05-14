import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * Represents the VueJS Accordion Component.
 * ```html
 * <ejs-accordion></ejs-accordion>
 * ```
 */
export declare class AccordionComponent extends ComponentBase {
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
    trigger(eventName: string, eventProp: {
        [key: string]: Object;
    }, successHandler?: Function): void;
    render(createElement: any): any;
    custom(): void;
    addItem(item: Object | Object[] | Object | Object[], index?: number): void;
    enableItem(index: number, isEnable: boolean): void;
    expandItem(isExpand: boolean, index?: number): void;
    hideItem(index: number, isHidden?: boolean): void;
    removeItem(index: number): void;
    select(index: number): void;
}
export declare const AccordionPlugin: {
    name: string;
    install(Vue: any): void;
};
