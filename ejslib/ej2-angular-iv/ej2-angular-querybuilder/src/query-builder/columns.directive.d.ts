import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * `e-column` directive represent a column of the Angular QueryBuilder.
 * It must be contained in a QueryBuilder component(`ejs-querybuilder`).
 * ```html
 * <ejs-querybuilder [dataSource]='data'>
 *   <e-columns>
 *    <e-column field='ID' label='ID' type='number'></e-column>
 *    <e-column field='Date' label='Date' type='date' format='dd/MM/yyyy'></e-column>
 *   </e-columns>
 * </ejs-querybuilder>
 * ```
 */
export declare class ColumnDirective extends ComplexBase<ColumnDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Specifies the types in columns field.
     * @default null
     */
    type: any;
    /**
     * Specifies the category for columns.
     * @default null
     */
    category: any;
    /**
     * Specifies the sub fields in columns.
     * @default null

     */
    columns: any;
    /**
     * Specifies the fields in columns.
     * @default null
     */
    field: any;
    /**
     * Specifies the date format for columns.
     * @asptype string
     * @blazortype string
     * @default null
     */
    format: any;
    /**
     * Specifies the labels name in columns.
     * @default null
     */
    label: any;
    /**
     * Specifies the operators in columns.
     * @default null
     */
    operators: any;
    /**
     * Specifies the step value(numeric textbox) for columns.
     * @default null
     */
    step: any;
    /**
     * Specifies the validation for columns (text, number and date).
     * @default { isRequired: true , min: 0, max: Number.MAX_VALUE }
     */
    validation: any;
    /**
     * Specifies the default value for columns.
     * @default null
     */
    value: any;
    /**
     * Specifies the values in columns or bind the values from sub controls.
     * @default null
     */
    values: any;
    /**
     * Specifies the rule template for the field with any other widgets.
     * @default null
     */
    ruleTemplate: any;
    /**
     * Specifies the template for value field such as slider or any other widgets.
     * @default null
     */
    template: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ColumnDirective, "ejs-querybuilder>e-columns>e-column", never, { "category": "category"; "columns": "columns"; "field": "field"; "format": "format"; "label": "label"; "operators": "operators"; "ruleTemplate": "ruleTemplate"; "step": "step"; "template": "template"; "type": "type"; "validation": "validation"; "value": "value"; "values": "values"; }, {}, ["ruleTemplate", "template"]>;
}
/**
 * Column Array Directive
 * @private
 */
export declare class ColumnsDirective extends ArrayBase<ColumnsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ColumnsDirective, "ejs-querybuilder>e-columns", never, {}, {}, ["children"]>;
}
