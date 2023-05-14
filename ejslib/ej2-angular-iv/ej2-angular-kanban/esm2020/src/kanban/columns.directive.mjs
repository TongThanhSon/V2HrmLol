import { __decorate } from "tslib";
import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['allowDrag', 'allowDrop', 'allowToggle', 'headerText', 'isExpanded', 'keyField', 'maxCount', 'minCount', 'showAddButton', 'showItemCount', 'template', 'transitionColumns'];
let outputs = [];
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
ColumnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColumnDirective, selector: "e-columns>e-column", inputs: { allowDrag: "allowDrag", allowDrop: "allowDrop", allowToggle: "allowToggle", headerText: "headerText", isExpanded: "isExpanded", keyField: "keyField", maxCount: "maxCount", minCount: "minCount", showAddButton: "showAddButton", showItemCount: "showItemCount", template: "template", transitionColumns: "transitionColumns" }, queries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], ColumnDirective.prototype, "template", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-columns>e-column',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { template: [{
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
ColumnsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColumnsDirective, selector: "ejs-kanban>e-columns", queries: [{ propertyName: "children", predicate: ColumnDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-kanban>e-columns',
                    queries: {
                        children: new ContentChildren(ColumnDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1ucy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMva2FuYmFuL2NvbHVtbnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFHeEQsSUFBSSxLQUFLLEdBQWEsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFDbk0sSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7Ozs7Ozs7OztHQVdHO0FBU0gsTUFBTSxPQUFPLGVBQWdCLFNBQVEsV0FBNEI7SUF1RTdELFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7NEdBNUVRLGVBQWU7Z0dBQWYsZUFBZTtBQXFFeEI7SUFEQyxRQUFRLEVBQUU7aURBQ1U7MkZBckVaLGVBQWU7a0JBUjNCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxFQUVSO2lCQUNKO3VHQXNFVSxRQUFRO3NCQUZkLFlBQVk7dUJBQUMsVUFBVTs7QUFZNUI7OztHQUdHO0FBT0gsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFNBQTJCO0lBQzdEO1FBQ0ksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7OzZHQUhRLGdCQUFnQjtpR0FBaEIsZ0JBQWdCLHFGQUhTLGVBQWU7MkZBR3hDLGdCQUFnQjtrQkFONUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLGVBQWUsQ0FBQztxQkFDakQ7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZHJlbiwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV4QmFzZSwgQXJyYXlCYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5sZXQgaW5wdXQ6IHN0cmluZ1tdID0gWydhbGxvd0RyYWcnLCAnYWxsb3dEcm9wJywgJ2FsbG93VG9nZ2xlJywgJ2hlYWRlclRleHQnLCAnaXNFeHBhbmRlZCcsICdrZXlGaWVsZCcsICdtYXhDb3VudCcsICdtaW5Db3VudCcsICdzaG93QWRkQnV0dG9uJywgJ3Nob3dJdGVtQ291bnQnLCAndGVtcGxhdGUnLCAndHJhbnNpdGlvbkNvbHVtbnMnXTtcbmxldCBvdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuLyoqXG4gKiBgZS1jb2x1bW5zYCBkaXJlY3RpdmUgcmVwcmVzZW50IGEgY29sdW1ucyBvZiB0aGUgS2FuYmFuIGJvYXJkLiBcbiAqIEl0IG11c3QgYmUgY29udGFpbmVkIGluIGEgS2FuYmFuIGNvbXBvbmVudChgZWpzLWthbmJhbmApLiBcbiAqIGBgYGh0bWxcbiAqIDxlanMta2FuYmFuPlxuICogICA8ZS1jb2x1bW5zPlxuICogICAgPGUtY29sdW1uIGtleUZpZWxkPSdPcGVuJyB0ZXh0RmllbGQ9J1RvIERvJz48L2UtY29sdW1uPlxuICogICAgPGUtY29sdW1uIGtleUZpZWxkPSdDbG9zZScgdGV4dEZpZWxkPSdDb21wbGV0ZWQnPjwvZS1jb2x1bW4+XG4gKiAgIDwvZS1jb2x1bW5zPlxuICogPC9lanMta2FuYmFuPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1jb2x1bW5zPmUtY29sdW1uJyxcbiAgICBpbnB1dHM6IGlucHV0LFxuICAgIG91dHB1dHM6IG91dHB1dHMsICAgIFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgQ29sdW1uRGlyZWN0aXZlIGV4dGVuZHMgQ29tcGxleEJhc2U8Q29sdW1uRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdFxuXG5cbiAgICAvKiogXG4gICAgICogRW5hYmxlIG9yIGRpc2FibGUgY29sdW1uIGRyYWdcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgcHVibGljIGFsbG93RHJhZzogYW55O1xuICAgIC8qKiBcbiAgICAgKiBFbmFibGUgb3IgZGlzYWJsZSBjb2x1bW4gZHJvcFxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBwdWJsaWMgYWxsb3dEcm9wOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIEVuYWJsZSBvciBkaXNhYmxlIHRvZ2dsZSBjb2x1bW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBhbGxvd1RvZ2dsZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBjb2x1bW4gaGVhZGVyIHRpdGxlXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBoZWFkZXJUZXh0OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIGNvbGxhcHNlZCBvciBleHBhbmRhYmxlIHN0YXRlXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBpc0V4cGFuZGVkOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIGNvbHVtbiBrZXlGaWVsZC4gSXQgc3VwcG9ydHMgYm90aCBudW1iZXIgYW5kIHN0cmluZyB0eXBlLiBcbiAgICAgKiBTdHJpbmcgdHlwZSBzdXBwb3J0cyB0aGUgbXVsdGlwbGUgY29sdW1uIGtleXMgYW5kIG51bWJlciB0eXBlIGRvZXMgbm90IHN1cHBvcnQgdGhlIG11bHRpcGxlIGNvbHVtbiBrZXlzLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMga2V5RmllbGQ6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgbWF4aW11bSBjYXJkIGNvdW50IGluIGNvbHVtblxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKiBAYXNwdHlwZSBpbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgbWF4Q291bnQ6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgbWluaW11bSBjYXJkIGNvdW50IGluIGNvbHVtblxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKiBAYXNwdHlwZSBpbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgbWluQ291bnQ6IGFueTtcbiAgICAvKiogXG4gICAgICogRW5hYmxlIG9yIGRpc2FibGUgY2VsbCBhZGQgYnV0dG9uXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvd0FkZEJ1dHRvbjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBFbmFibGUgb3IgZGlzYWJsZSBjYXJkIGNvdW50IGluIGNvbHVtblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvd0l0ZW1Db3VudDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBjb2x1bW4gdHJhbnNpdGlvblxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG4gICAgcHVibGljIHRyYW5zaXRpb25Db2x1bW5zOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIGNvbHVtbiB0ZW1wbGF0ZVxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCd0ZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgdGVtcGxhdGU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZVByb3BMaXN0ID0gaW5wdXQ7XG4gICAgfVxufVxuXG4vKipcbiAqIENvbHVtbiBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZWpzLWthbmJhbj5lLWNvbHVtbnMnLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oQ29sdW1uRGlyZWN0aXZlKVxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIENvbHVtbnNEaXJlY3RpdmUgZXh0ZW5kcyBBcnJheUJhc2U8Q29sdW1uc0RpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignY29sdW1ucycpO1xuICAgIH1cbn0iXX0=