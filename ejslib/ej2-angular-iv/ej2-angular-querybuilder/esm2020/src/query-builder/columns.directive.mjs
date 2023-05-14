import { __decorate } from "tslib";
import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['category', 'columns', 'field', 'format', 'label', 'operators', 'ruleTemplate', 'step', 'template', 'type', 'validation', 'value', 'values'];
let outputs = [];
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
export class ColumnDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
ColumnDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ColumnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColumnDirective, selector: "ejs-querybuilder>e-columns>e-column", inputs: { category: "category", columns: "columns", field: "field", format: "format", label: "label", operators: "operators", ruleTemplate: "ruleTemplate", step: "step", template: "template", type: "type", validation: "validation", value: "value", values: "values" }, queries: [{ propertyName: "ruleTemplate", first: true, predicate: ["ruleTemplate"], descendants: true }, { propertyName: "template", first: true, predicate: ["template"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], ColumnDirective.prototype, "ruleTemplate", void 0);
__decorate([
    Template()
], ColumnDirective.prototype, "template", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-querybuilder>e-columns>e-column',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { ruleTemplate: [{
                type: ContentChild,
                args: ['ruleTemplate']
            }], template: [{
                type: ContentChild,
                args: ['template']
            }] } });
/**
 * Column Array Directive
 * @private
 */
export class ColumnsDirective extends ArrayBase {
    constructor() {
        super('columns');
    }
}
ColumnsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ColumnsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColumnsDirective, selector: "ejs-querybuilder>e-columns", queries: [{ propertyName: "children", predicate: ColumnDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-querybuilder>e-columns',
                    queries: {
                        children: new ContentChildren(ColumnDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1ucy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcXVlcnktYnVpbGRlci9jb2x1bW5zLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBR3hELElBQUksS0FBSyxHQUFhLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDcEssSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7Ozs7Ozs7OztHQVdHO0FBU0gsTUFBTSxPQUFPLGVBQWdCLFNBQVEsV0FBNEI7SUE4RTdELFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7NEdBbkZRLGVBQWU7Z0dBQWYsZUFBZTtBQXFFeEI7SUFEQyxRQUFRLEVBQUU7cURBQ2M7QUFPekI7SUFEQyxRQUFRLEVBQUU7aURBQ1U7MkZBNUVaLGVBQWU7a0JBUjNCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHFDQUFxQztvQkFDL0MsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxFQUVSO2lCQUNKO3VHQXNFVSxZQUFZO3NCQUZsQixZQUFZO3VCQUFDLGNBQWM7Z0JBU3JCLFFBQVE7c0JBRmQsWUFBWTt1QkFBQyxVQUFVOztBQVk1Qjs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsU0FBMkI7SUFDN0Q7UUFDSSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7NkdBSFEsZ0JBQWdCO2lHQUFoQixnQkFBZ0IsMkZBSFMsZUFBZTsyRkFHeEMsZ0JBQWdCO2tCQU41QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMsZUFBZSxDQUFDO3FCQUNqRDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2NhdGVnb3J5JywgJ2NvbHVtbnMnLCAnZmllbGQnLCAnZm9ybWF0JywgJ2xhYmVsJywgJ29wZXJhdG9ycycsICdydWxlVGVtcGxhdGUnLCAnc3RlcCcsICd0ZW1wbGF0ZScsICd0eXBlJywgJ3ZhbGlkYXRpb24nLCAndmFsdWUnLCAndmFsdWVzJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbi8qKlxuICogYGUtY29sdW1uYCBkaXJlY3RpdmUgcmVwcmVzZW50IGEgY29sdW1uIG9mIHRoZSBBbmd1bGFyIFF1ZXJ5QnVpbGRlci4gXG4gKiBJdCBtdXN0IGJlIGNvbnRhaW5lZCBpbiBhIFF1ZXJ5QnVpbGRlciBjb21wb25lbnQoYGVqcy1xdWVyeWJ1aWxkZXJgKS4gXG4gKiBgYGBodG1sXG4gKiA8ZWpzLXF1ZXJ5YnVpbGRlciBbZGF0YVNvdXJjZV09J2RhdGEnPiBcbiAqICAgPGUtY29sdW1ucz5cbiAqICAgIDxlLWNvbHVtbiBmaWVsZD0nSUQnIGxhYmVsPSdJRCcgdHlwZT0nbnVtYmVyJz48L2UtY29sdW1uPlxuICogICAgPGUtY29sdW1uIGZpZWxkPSdEYXRlJyBsYWJlbD0nRGF0ZScgdHlwZT0nZGF0ZScgZm9ybWF0PSdkZC9NTS95eXl5Jz48L2UtY29sdW1uPlxuICogICA8L2UtY29sdW1ucz5cbiAqIDwvZWpzLXF1ZXJ5YnVpbGRlcj5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1xdWVyeWJ1aWxkZXI+ZS1jb2x1bW5zPmUtY29sdW1uJyxcbiAgICBpbnB1dHM6IGlucHV0LFxuICAgIG91dHB1dHM6IG91dHB1dHMsICAgIFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgQ29sdW1uRGlyZWN0aXZlIGV4dGVuZHMgQ29tcGxleEJhc2U8Q29sdW1uRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdFxuXG5cbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSB0eXBlcyBpbiBjb2x1bW5zIGZpZWxkLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgdHlwZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGNhdGVnb3J5IGZvciBjb2x1bW5zLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgY2F0ZWdvcnk6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBzdWIgZmllbGRzIGluIGNvbHVtbnMuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuXG4gICAgICovXG4gICAgcHVibGljIGNvbHVtbnM6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBmaWVsZHMgaW4gY29sdW1ucy5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIGZpZWxkOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgZGF0ZSBmb3JtYXQgZm9yIGNvbHVtbnMuXG4gICAgICogQGFzcHR5cGUgc3RyaW5nXG4gICAgICogQGJsYXpvcnR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBmb3JtYXQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBsYWJlbHMgbmFtZSBpbiBjb2x1bW5zLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgbGFiZWw6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBvcGVyYXRvcnMgaW4gY29sdW1ucy5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIG9wZXJhdG9yczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHN0ZXAgdmFsdWUobnVtZXJpYyB0ZXh0Ym94KSBmb3IgY29sdW1ucy5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIHN0ZXA6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSB2YWxpZGF0aW9uIGZvciBjb2x1bW5zICh0ZXh0LCBudW1iZXIgYW5kIGRhdGUpLlxuICAgICAqIEBkZWZhdWx0IHsgaXNSZXF1aXJlZDogdHJ1ZSAsIG1pbjogMCwgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFIH1cbiAgICAgKi9cbiAgICBwdWJsaWMgdmFsaWRhdGlvbjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGRlZmF1bHQgdmFsdWUgZm9yIGNvbHVtbnMuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyB2YWx1ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHZhbHVlcyBpbiBjb2x1bW5zIG9yIGJpbmQgdGhlIHZhbHVlcyBmcm9tIHN1YiBjb250cm9scy5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIHZhbHVlczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHJ1bGUgdGVtcGxhdGUgZm9yIHRoZSBmaWVsZCB3aXRoIGFueSBvdGhlciB3aWRnZXRzLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdydWxlVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIHJ1bGVUZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHRlbXBsYXRlIGZvciB2YWx1ZSBmaWVsZCBzdWNoIGFzIHNsaWRlciBvciBhbnkgb3RoZXIgd2lkZ2V0cy5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgndGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIHRlbXBsYXRlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBDb2x1bW4gQXJyYXkgRGlyZWN0aXZlXG4gKiBAcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1xdWVyeWJ1aWxkZXI+ZS1jb2x1bW5zJyxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXcgQ29udGVudENoaWxkcmVuKENvbHVtbkRpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDb2x1bW5zRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPENvbHVtbnNEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2NvbHVtbnMnKTtcbiAgICB9XG59Il19