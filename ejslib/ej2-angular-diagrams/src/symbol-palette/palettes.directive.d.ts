import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * Palette Directive
 * ```html
 * <e-palettes><e-palette></e-palette><e-palettes>
 * ```
 */
export declare class PaletteDirective extends ComplexBase<PaletteDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Sets whether the palette items to be expanded or not
     * @default true
     */
    expanded: any;
    /**
     * Sets the height of the symbol group
     * @aspdefaultvalueignore
     * @default undefined
     */
    height: any;
    /**
     * Defines the content of the symbol group
     * @default ''
     */
    iconCss: any;
    /**
     * Defines the unique id of a symbol group
     * @default ''
     */
    id: any;
    /**
     * Defines the collection of predefined symbols
     * @asptype object
     */
    symbols: any;
    /**
     * Defines the title of the symbol group
     * @default ''
     */
    title: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * Palette Array Directive
 * @private
 */
export declare class PalettesDirective extends ArrayBase<PalettesDirective> {
    constructor();
}
