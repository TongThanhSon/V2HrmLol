import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * `e-stackedHeaders` directive represent a stacked header of the Kanban board.
 * It must be contained in a Kanban component(`ejs-kanban`).
 * ```html
 * <ejs-kanban>
 *   <e-stackedHeaders>
 *    <e-stackedHeader keyField='Open' text='To Do'></e-stackedHeader>
 *    <e-stackedHeader keyField='Close' text='Completed'></e-stackedHeader>
 *   </e-stackedHeaders>
 * </ejs-kanban>
 * ```
 */
export declare class StackedHeaderDirective extends ComplexBase<StackedHeaderDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Defines the multiple columns keyField
     * @default null
     */
    keyFields: any;
    /**
     * Defines the column header text
     * @default null
     */
    text: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<StackedHeaderDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StackedHeaderDirective, "e-stackedHeaders>e-stackedHeader", never, { "keyFields": "keyFields"; "text": "text"; }, {}, never>;
}
/**
 * StackedHeader Array Directive
 * @private
 */
export declare class StackedHeadersDirective extends ArrayBase<StackedHeadersDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<StackedHeadersDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StackedHeadersDirective, "ejs-kanban>e-stackedHeaders", never, {}, {}, ["children"]>;
}
