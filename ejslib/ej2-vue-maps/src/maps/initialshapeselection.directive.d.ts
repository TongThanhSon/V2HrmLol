export declare const isExecute: any;
declare let vueImport: any;
export declare class InitialShapeSelectionsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const InitialShapeSelectionsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `InitialShapeSelectionsDirective` directive represent a selection settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-initialShapeSelections>
 * <e-initialShapeSelection>
 * </e-initialShapeSelection>
 * </e-initialShapeSelections>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
export declare class InitialShapeSelectionDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const InitialShapeSelectionPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
