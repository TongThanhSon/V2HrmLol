import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * Represents the Essential JS 2 VueJS DashboardLayout Component.
 * ```html
 * <ejs-dashboardlayout></ejs-dashboardlayout>
 * ```
 */
export declare class DashboardLayoutComponent extends ComponentBase {
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
    addPanel(panel: Object): void;
    movePanel(id: string, row: number, col: number): void;
    refresh(): void;
    removeAll(): void;
    removePanel(id: string): void;
    resizePanel(id: string, sizeX: number, sizeY: number): void;
    serialize(): Object[];
    updatePanel(panel: Object): void;
}
export declare const DashboardLayoutPlugin: {
    name: string;
    install(Vue: any): void;
};
