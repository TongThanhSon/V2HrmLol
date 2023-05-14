import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * `e-cell` directive represent a cell of the Angular Spreadsheet.
 * It must be contained in a `e-row` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rows>
 *    <e-row>
 *    <e-cells>
 *    <e-cell value='A1'></e-cell>
 *    </e-cells>
 *    </e-row>
 *    </e-rows>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
export declare class CellDirective extends ComplexBase<CellDirective> {
    private viewContainerRef;
    directivePropList: any;
    childImage: any;
    childChart: any;
    tags: string[];
    /**
     * Specifies the chart of the cell.
     * @default []
     */
    chart: any;
    /**
     * Specifies the column-wise cell merge count.
     * @default 1
     * @asptype int
     */
    colSpan: any;
    /**
     * Specifies the number format code to display value in specified number format.
     * @default 'General'
     */
    format: any;
    /**
     * Defines the formula or expression of the cell.
     * @default ''
     */
    formula: any;
    /**
     * Specifies the hyperlink of the cell.
     * @default ''
     */
    hyperlink: any;
    /**
     * Specifies the image of the cell.
     * @default []
     */
    image: any;
    /**
     * Specifies the index of the cell.
     * @default 0
     * @asptype int
     */
    index: any;
    /**
     * Specifies the cell is locked or not, for allow edit range in spreadsheet protect option.
     * @default null
     */
    isLocked: any;
    /**
     * Specifies the row-wise cell merge count.
     * @default 1
     * @asptype int
     */
    rowSpan: any;
    /**
     * Specifies the cell style options.
     *
     * @default {}
     */
    style: any;
    /**
     * Specifies the validation of the cell.
     * @default ''
     */
    validation: any;
    /**
     * Defines the value of the cell which can be text or number.
     * @default ''
     */
    value: any;
    /**
     * Wraps the cell text to the next line, if the text width exceeds the column width.
     * @default false
     */
    wrap: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<CellDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CellDirective, "e-cells>e-cell", never, { "chart": "chart"; "colSpan": "colSpan"; "format": "format"; "formula": "formula"; "hyperlink": "hyperlink"; "image": "image"; "index": "index"; "isLocked": "isLocked"; "rowSpan": "rowSpan"; "style": "style"; "validation": "validation"; "value": "value"; "wrap": "wrap"; }, {}, ["childImage", "childChart"]>;
}
/**
 * Cell Array Directive
 * @private
 */
export declare class CellsDirective extends ArrayBase<CellsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CellsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CellsDirective, "e-row>e-cells", never, {}, {}, ["children"]>;
}
