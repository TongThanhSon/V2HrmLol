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
 * `e-layers` directive represent a layers of the vue diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```vue
 * <ejs-diagram>
 * <e-layers>
 * <e-layer>
 * </e-layers>
 * </e-layers>
</ejs-diagram>
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
