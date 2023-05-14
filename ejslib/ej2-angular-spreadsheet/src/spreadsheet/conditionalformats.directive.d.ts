import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
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
}
/**
 * ConditionalFormat Array Directive
 * @private
 */
export declare class ConditionalFormatsDirective extends ArrayBase<ConditionalFormatsDirective> {
    constructor();
}
