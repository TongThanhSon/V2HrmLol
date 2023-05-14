import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * Represents Vuejs ProgressBar Component
 * ```vue
 * <ejs-progressbar></ejs-progressbar>
 * ```
 */
export declare class ProgressBarComponent extends ComponentBase {
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
    calculateProgressRange(value: number, minimum?: number, maximum?: number): number;
    calculateSegmentSize(width: number, thickness: number): string;
    createClipPath(clipPath?: Object, range?: number, d?: string, refresh?: boolean, thickness?: number, isLabel?: boolean, isMaximum?: boolean): Object;
    getPathLine(x: number, width: number, thickness: number): string;
    hide(): void;
    removeSvg(): void;
    requiredModules(): Object[];
    show(): void;
}
export declare const ProgressBarPlugin: {
    name: string;
    install(Vue: any): void;
};
