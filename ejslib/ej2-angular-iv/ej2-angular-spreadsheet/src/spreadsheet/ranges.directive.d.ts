import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * `e-range` directive represent a range of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-ranges>
 *    <e-range [dataSource]='data'></e-range>
 *    </e-ranges>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
export declare class RangeDirective extends ComplexBase<RangeDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Specifies the address for updating the dataSource or template.
     * @default 'A1'
     */
    address: any;
    /**
     * Specifies the data as JSON / Data manager to the sheet.
     * @default null
     */
    dataSource: any;
    /**
     * Defines the external [`Query`](https://ej2.syncfusion.com/documentation/data/api-query.html)
     * that will be executed along with data processing.
     * @default null
     */
    query: any;
    /**
     * Show/Hide the field of the datasource as header.
     * @default true
     */
    showFieldAsHeader: any;
    /**
     * Specifies the start cell from which the datasource will be populated.
     * @default 'A1'
     */
    startCell: any;
    /**
     * Template helps to compiles the given HTML String (or HTML Element ID) into HtML Element and append to the Cell.
     *
     *  @default ''
     *
     */
    template: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<RangeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RangeDirective, "e-ranges>e-range", never, { "address": "address"; "dataSource": "dataSource"; "query": "query"; "showFieldAsHeader": "showFieldAsHeader"; "startCell": "startCell"; "template": "template"; }, {}, ["template"]>;
}
/**
 * Range Array Directive
 * @private
 */
export declare class RangesDirective extends ArrayBase<RangesDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<RangesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RangesDirective, "e-sheet>e-ranges", never, {}, {}, ["children"]>;
}
