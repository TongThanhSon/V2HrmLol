import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * Represents vue SymbolPalette Component
 * ```html
 * <ej-symbol-palette></ej-symbol-palette>
 * ```
 */
export declare class SymbolPaletteComponent extends ComponentBase {
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
    addPaletteItem(paletteName: string, paletteSymbol: Object | Object, isChild?: boolean): void;
    addPalettes(palettes: Object[]): void;
    defaultLocale(): Object;
    removePaletteItem(paletteName: string, symbolId: string): void;
    removePalettes(palettes: string[]): void;
}
export declare const SymbolPalettePlugin: {
    name: string;
    install(Vue: any): void;
};
