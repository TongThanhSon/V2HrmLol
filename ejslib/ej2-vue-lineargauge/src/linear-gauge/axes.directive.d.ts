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
 * Axes directive represent a axes of the VueJS linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-axes><e-axis></e-axis></e-axes>
 * </ejs-lineargauge>
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
