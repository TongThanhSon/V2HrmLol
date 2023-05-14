import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * `ej-kanban` represents the VueJS Kanban Component.
 * ```vue
 * <ejs-kanban></ejs-kanban>
 * ```
 */
export declare class KanbanComponent extends ComponentBase {
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
    addCard(cardData: Object | Object[], index?: number): void;
    addColumn(columnOptions: Object, index: number): void;
    closeDialog(): void;
    deleteCard(cardData: string | number | Object | Object[]): void;
    deleteColumn(index: number): void;
    getCardDetails(target: Object): Object;
    getColumnData(columnKey: string | number, dataSource?: Object[]): Object[];
    getSelectedCards(): Object[];
    getSwimlaneData(keyField: string): Object[];
    hideColumn(key: string | number): void;
    hideSpinner(): void;
    openDialog(action: Object, data?: Object): void;
    refreshHeader(): void;
    refreshUI(args: Object, index?: number): void;
    renderTemplates(): void;
    resetTemplates(templates?: string[]): void;
    showColumn(key: string | number): void;
    showSpinner(): void;
    templateParser(template: string): any;
    updateCard(cardData: Object | Object[], index?: number): void;
}
export declare const KanbanPlugin: {
    name: string;
    install(Vue: any): void;
};
