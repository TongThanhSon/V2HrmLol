import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * `e-definedname` directive represent a defined name of the Angular Spreadsheet.
 * It must be contained in a Spreadsheet component(`ejs-spreadsheet`).
 * ```html
 * <ejs-spreadsheet>
 *   <e-definednames>
 *    <e-definedname></e-definedname>
 *    <e-definedname></e-definedname>
 *   </e-definednames>
 * </ejs-spreadsheet>
 * ```
 */
export declare class DefinedNameDirective extends ComplexBase<DefinedNameDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Specifies comment for the defined name.
     * @default ''
     */
    comment: any;
    /**
     * Specifies name for the defined name, which can be used in formula.
     * @default ''
     */
    name: any;
    /**
     * Specifies reference for the defined name.
     * @default ''
     */
    refersTo: any;
    /**
     * Specifies scope for the defined name.
     * @default ''
     */
    scope: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<DefinedNameDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DefinedNameDirective, "e-definednames>e-definedname", never, { "comment": "comment"; "name": "name"; "refersTo": "refersTo"; "scope": "scope"; }, {}, never>;
}
/**
 * DefinedName Array Directive
 * @private
 */
export declare class DefinedNamesDirective extends ArrayBase<DefinedNamesDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<DefinedNamesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DefinedNamesDirective, "ejs-spreadsheet>e-definednames", never, {}, {}, ["children"]>;
}
