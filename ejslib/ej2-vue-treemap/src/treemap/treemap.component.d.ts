import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * Represents Vuejs TreeMap Component
 * ```vue
 * <ejs-treemap></ejs-treemap>
 * ```
 */
export declare class TreeMapComponent extends ComponentBase {
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
    calculatePreviousLevelChildItems(labelText: string, drillLevelValues: any, item: any, directLevel: boolean): boolean;
    calculateSelectedTextLevels(labelText: string, item: any): any;
    clickOnTreeMap(e: Object): void;
    compareSelectedLabelWithDrillDownItems(drillLevelValues: any, item: any, i: number): any;
    doubleClickOnTreeMap(e: Object): void;
    export(type: Object, fileName: string, orientation?: Object, allowDownload?: boolean): Object;
    findTotalWeight(processData: any[], type: string): void;
    mouseDownOnTreeMap(e: Object): void;
    mouseEndOnTreeMap(e: Object): void;
    mouseLeaveOnTreeMap(e: Object): void;
    mouseMoveOnTreeMap(e: Object): void;
    print(id?: string[] | string | Object): void;
    reOrderLevelData(start: number): void;
    resizeOnTreeMap(e: Object): void;
    rightClickOnTreeMap(e: Object): void;
    selectItem(levelOrder: string[], isSelected?: boolean): void;
}
export declare const TreeMapPlugin: {
    name: string;
    install(Vue: any): void;
};
