import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * `e-columns` directive represent a columns of the Kanban board.
 * It must be contained in a Kanban component(`ejs-kanban`).
 * ```html
 * <ejs-kanban>
 *   <e-columns>
 *    <e-column keyField='Open' textField='To Do'></e-column>
 *    <e-column keyField='Close' textField='Completed'></e-column>
 *   </e-columns>
 * </ejs-kanban>
 * ```
 */
export declare class ColumnDirective extends ComplexBase<ColumnDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Enable or disable column drag
     * @default true
     */
    allowDrag: any;
    /**
     * Enable or disable column drop
     * @default true
     */
    allowDrop: any;
    /**
     * Enable or disable toggle column
     * @default false
     */
    allowToggle: any;
    /**
     * Defines the column header title
     * @default null
     */
    headerText: any;
    /**
     * Defines the collapsed or expandable state
     * @default true
     */
    isExpanded: any;
    /**
     * Defines the column keyField. It supports both number and string type.
     * String type supports the multiple column keys and number type does not support the multiple column keys.
     * @default null
     */
    keyField: any;
    /**
     * Defines the maximum card count in column
     * @default null
     * @asptype int
     */
    maxCount: any;
    /**
     * Defines the minimum card count in column
     * @default null
     * @asptype int
     */
    minCount: any;
    /**
     * Enable or disable cell add button
     * @default false
     */
    showAddButton: any;
    /**
     * Enable or disable card count in column
     * @default true
     */
    showItemCount: any;
    /**
     * Defines the column transition
     * @default []
     */
    transitionColumns: any;
    /**
     * Defines the column template
     * @default null
     */
    template: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * Column Array Directive
 * @private
 */
export declare class ColumnsDirective extends ArrayBase<ColumnsDirective> {
    constructor();
}
