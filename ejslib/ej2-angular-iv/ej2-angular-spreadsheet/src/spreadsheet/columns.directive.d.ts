import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * `e-column` directive represent a column of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-columns>
 *    <e-column width='100'></e-column>
 *    </e-columns>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
export declare class ColumnDirective extends ComplexBase<ColumnDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * specifies custom width of the column.
     * @default false
     */
    customWidth: any;
    /**
     * Specifies format of the column.
     * @default {}
     */
    format: any;
    /**
     * To hide/show the column in spreadsheet.
     * @default false
     */
    hidden: any;
    /**
     * Specifies index of the column. Based on the index, column properties are applied.
     * @default 0
     * @asptype int
     */
    index: any;
    /**
     * To lock/unlock the column in the protected sheet.
     * @default true
     */
    isLocked: any;
    /**
     * Specifies the validation of the column.
     * @default ''
     */
    validation: any;
    /**
     * Specifies width of the column.
     * @default 64
     * @asptype int
     */
    width: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ColumnDirective, "e-columns>e-column", never, { "customWidth": "customWidth"; "format": "format"; "hidden": "hidden"; "index": "index"; "isLocked": "isLocked"; "validation": "validation"; "width": "width"; }, {}, never>;
}
/**
 * Column Array Directive
 * @private
 */
export declare class ColumnsDirective extends ArrayBase<ColumnsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ColumnsDirective, "e-sheet>e-columns", never, {}, {}, ["children"]>;
}
