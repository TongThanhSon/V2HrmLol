export declare const isExecute: any;
declare let vueImport: any;
export declare class PointersDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const PointersPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `Pointers` directive represent a pointers of the Vuejs circular gauge.
 * ```vue
 * <ejs-circulargauge>
 * <e-axes>
 * <e-axis>
 * <e-pointers><e-pointer></e-pointer></e-pointers>
 * </e-axis>
 * </e-axes>
 * </ejs-circulargauge>
 * ```
 */
export declare class PointerDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const PointerPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
