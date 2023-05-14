import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * `e-sheet` directive represent a sheet of the Angular Spreadsheet.
 * It must be contained in a Spreadsheet component(`ejs-spreadsheet`).
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet></e-sheet>
 *    <e-sheet></e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
export declare class SheetDirective extends ComplexBase<SheetDirective> {
    private viewContainerRef;
    directivePropList: any;
    childRows: any;
    childColumns: any;
    childRanges: any;
    childConditionalFormats: any;
    tags: string[];
    /**
     * Specifies active cell within `selectedRange` in the sheet.
     * @default 'A1'
     */
    activeCell: any;
    /**
     * Defines the number of columns to be rendered in the sheet.
     * @default 100
     * @asptype int
     */
    colCount: any;
    /**
     * Configures column and its properties for the sheet.
     * @default null
     */
    columns: any;
    /**
     * Specifies the conditional formatting for the sheet.
     * @default []
     */
    conditionalFormats: any;
    /**
     * Gets or sets the number of frozen columns.
     * @default 0
     * @asptype int
     */
    frozenColumns: any;
    /**
     * Gets or sets the number of frozen rows.
     * @default 0
     * @asptype int
     */
    frozenRows: any;
    /**
     * Specifies index of the sheet. Based on the index, sheet properties are applied.
     * @default 0
     * @asptype int
     */
    index: any;
    /**
     * Specifies to  protect the cells in the sheet.
     * @default false
     */
    isProtected: any;
    /**
     * Specifies the name of the sheet, the name will show in the sheet tabs.
     * @default ''
     */
    name: any;
    /**
     * Represents the freeze pane top left cell. Its default value would be based on the number of freeze rows and columns.
     * @default 'A1'
     */
    paneTopLeftCell: any;
    /**
     * Specifies the password.
     * @default ''
     */
    password: any;
    /**
     * Configures protect and its options.
     * @default { selectCells: false, formatCells: false, formatRows: false, formatColumns: false, insertLink: false  }
     */
    protectSettings: any;
    /**
     * Specifies the collection of range for the sheet.
     * @default []
     */
    ranges: any;
    /**
     * Defines the number of rows to be rendered in the sheet.
     * @default 100
     * @asptype int
     */
    rowCount: any;
    /**
     * Configures row and its properties for the sheet.
     * @default null
     */
    rows: any;
    /**
     * Specifies selected range in the sheet.
     *
     * @default 'A1:A1'
     */
    selectedRange: any;
    /**
     * Specifies to show / hide grid lines in the sheet.
     * @default true
     */
    showGridLines: any;
    /**
     * Specifies to show / hide column and row headers in the sheet.
     * @default true
     */
    showHeaders: any;
    /**
     * Specifies the sheet visibility state. There must be at least one visible sheet in Spreadsheet.
     * @default 'Visible'
     */
    state: any;
    /**
     * Specified cell will be positioned at the upper-left corner of the sheet.
     * @default 'A1'
     */
    topLeftCell: any;
    /**
     * Defines the used range of the sheet.
     * @default { rowIndex: 0, colIndex: 0 }
     */
    usedRange: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * Sheet Array Directive
 * @private
 */
export declare class SheetsDirective extends ArrayBase<SheetsDirective> {
    constructor();
}
