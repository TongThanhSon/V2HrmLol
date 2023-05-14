export declare const isExecute: any;
declare let vueImport: any;
export declare class LayersDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const LayersPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `LayersDirective` directive represent a layers of the react maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer></e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
export declare class LayerDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const LayerPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
