import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * Represents Vuejs Circular Gauge Component
 * ```vue
 * <ejs-circulargauge></ejs-circulargauge>
 * ```
 */
export declare class CircularGaugeComponent extends ComponentBase {
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
    export(type: Object, fileName: string, orientation?: Object, allowDownload?: boolean): Object;
    print(id?: string[] | string | Object): void;
    setAnnotationValue(axisIndex: number, annotationIndex: number, content: string): void;
    setPointerValue(axisIndex: number, pointerIndex: number, value: number): void;
    setRangeValue(axisIndex: number, rangeIndex: number, start: number, end: number): void;
}
export declare const CircularGaugePlugin: {
    name: string;
    install(Vue: any): void;
};
