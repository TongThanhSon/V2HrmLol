export declare const isExecute: any;
declare let vueImport: any;
export declare class PalettesDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const PalettesPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `Palette` directive represent a axis palette of the vue SymbolPalette.
 * It must be contained in a SymbolPalette component(`SymbolPaletteComponent`).
 * ```html
 * <e-palettes><e-palette></e-palette><e-palettes>
 * ```
 */
export declare class PaletteDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const PalettePlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
