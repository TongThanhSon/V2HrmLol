export declare const isExecute: any;
declare let vueImport: any;
export declare class RangesDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const RangesPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `Ranges` directive represent a ranges of the VueJS linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-axes>
 * <e-axis>
 * <e-ranges><e-range></e-range></e-ranges>
 * </e-axis>
 * </e-axes>
 * </ejs-lineargauge>
 * ```
 */
export declare class RangeDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const RangePlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
