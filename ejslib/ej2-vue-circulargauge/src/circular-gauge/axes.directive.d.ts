export declare const isExecute: any;
declare let vueImport: any;
export declare class AxesDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const AxesPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `Axis` directive represent a axes of the Vuejs circular gauge.
 * ```vue
 * <ejs-circulargauge>
 * <e-axes><e-axis></e-axis></e-axes>
 * </ejs-circulargauge>
 * ```
 */
export declare class AxisDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const AxisPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
