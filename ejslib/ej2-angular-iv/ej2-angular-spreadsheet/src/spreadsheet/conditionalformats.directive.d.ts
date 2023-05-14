import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * `e-conditionalformat` directive represent a conditionalformat of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-conditionalformats>
 *    <e-conditionalformat></e-conditionalformat>
 *    </e-conditionalformats>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
export declare class ConditionalFormatDirective extends ComplexBase<ConditionalFormatDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Specifies Conditional formatting Type.
     * @default 'GreaterThan'
     * @aspignore
     */
    type: any;
    /**
     * Specifies Conditional formatting Highlight Color.
     * @default 'RedFT'
     */
    cFColor: any;
    /**
     * Specifies format.
     * @default {}
     */
    format: any;
    /**
     * Specifies Conditional formatting range.
     * @default ''
     */
    range: any;
    /**
     * Specifies Conditional formatting Value.
     * @default ''
     */
    value: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ConditionalFormatDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ConditionalFormatDirective, "e-conditionalformats>e-conditionalformat", never, { "cFColor": "cFColor"; "format": "format"; "range": "range"; "type": "type"; "value": "value"; }, {}, never>;
}
/**
 * ConditionalFormat Array Directive
 * @private
 */
export declare class ConditionalFormatsDirective extends ArrayBase<ConditionalFormatsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ConditionalFormatsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ConditionalFormatsDirective, "e-sheet>e-conditionalformats", never, {}, {}, ["children"]>;
}
