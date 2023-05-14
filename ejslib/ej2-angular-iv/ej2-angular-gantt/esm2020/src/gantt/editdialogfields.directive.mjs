import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['fields', 'headerText', 'type'];
let outputs = [];
/**
 * `e-edit-dialog-field` directive represent a edit dialog fields collection in Gantt task add dialog.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-edit-dialog-fields>
 *     <e-edit-dialog-field type='General' headerText='General'></e-edit-dialog-field>
 *     <e-edit-dialog-field type='Dependency' headerText='Dependency'></e-edit-dialog-field>
 *   </e-edit-dialog-fields>
 * </ejs-gantt>
 * ```
 */
export class EditDialogFieldDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
EditDialogFieldDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: EditDialogFieldDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
EditDialogFieldDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: EditDialogFieldDirective, selector: "ejs-gantt>e-edit-dialog-fields>e-edit-dialog-field", inputs: { fields: "fields", headerText: "headerText", type: "type" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: EditDialogFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-gantt>e-edit-dialog-fields>e-edit-dialog-field',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * EditDialogField Array Directive
 * @private
 */
export class EditDialogFieldsDirective extends ArrayBase {
    constructor() {
        super('editdialogfields');
    }
}
EditDialogFieldsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: EditDialogFieldsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
EditDialogFieldsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: EditDialogFieldsDirective, selector: "ejs-gantt>e-edit-dialog-fields", queries: [{ propertyName: "children", predicate: EditDialogFieldDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: EditDialogFieldsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-gantt>e-edit-dialog-fields',
                    queries: {
                        children: new ContentChildren(EditDialogFieldDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGRpYWxvZ2ZpZWxkcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZ2FudHQvZWRpdGRpYWxvZ2ZpZWxkcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUloRixJQUFJLEtBQUssR0FBYSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdkQsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7Ozs7Ozs7OztHQVdHO0FBU0gsTUFBTSxPQUFPLHdCQUF5QixTQUFRLFdBQXFDO0lBMEIvRSxZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRWpELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7O3FIQS9CUSx3QkFBd0I7eUdBQXhCLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQVJwQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxvREFBb0Q7b0JBQzlELE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsRUFFUjtpQkFDSjs7QUFtQ0Q7OztHQUdHO0FBT0gsTUFBTSxPQUFPLHlCQUEwQixTQUFRLFNBQW9DO0lBQy9FO1FBQ0ksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDOUIsQ0FBQzs7c0hBSFEseUJBQXlCOzBHQUF6Qix5QkFBeUIsK0ZBSEEsd0JBQXdCOzJGQUdqRCx5QkFBeUI7a0JBTnJDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsT0FBTyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxJQUFJLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQztxQkFDMUQ7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcGxleEJhc2UsIEFycmF5QmFzZSwgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2ZpZWxkcycsICdoZWFkZXJUZXh0JywgJ3R5cGUnXTtcbmxldCBvdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuLyoqXG4gKiBgZS1lZGl0LWRpYWxvZy1maWVsZGAgZGlyZWN0aXZlIHJlcHJlc2VudCBhIGVkaXQgZGlhbG9nIGZpZWxkcyBjb2xsZWN0aW9uIGluIEdhbnR0IHRhc2sgYWRkIGRpYWxvZy4gXG4gKiBJdCBtdXN0IGJlIGNvbnRhaW5lZCBpbiBhIEdhbnR0IGNvbXBvbmVudChgZWpzLWdhbnR0YCkuIFxuICogYGBgaHRtbFxuICogPGVqcy1nYW50dCBbZGF0YVNvdXJjZV09J2RhdGEnIGFsbG93U2VsZWN0aW9uPSd0cnVlJyBhbGxvd1NvcnRpbmc9J3RydWUnPiBcbiAqICAgPGUtZWRpdC1kaWFsb2ctZmllbGRzPlxuICogICAgIDxlLWVkaXQtZGlhbG9nLWZpZWxkIHR5cGU9J0dlbmVyYWwnIGhlYWRlclRleHQ9J0dlbmVyYWwnPjwvZS1lZGl0LWRpYWxvZy1maWVsZD5cbiAqICAgICA8ZS1lZGl0LWRpYWxvZy1maWVsZCB0eXBlPSdEZXBlbmRlbmN5JyBoZWFkZXJUZXh0PSdEZXBlbmRlbmN5Jz48L2UtZWRpdC1kaWFsb2ctZmllbGQ+XG4gKiAgIDwvZS1lZGl0LWRpYWxvZy1maWVsZHM+XG4gKiA8L2Vqcy1nYW50dD5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1nYW50dD5lLWVkaXQtZGlhbG9nLWZpZWxkcz5lLWVkaXQtZGlhbG9nLWZpZWxkJyxcbiAgICBpbnB1dHM6IGlucHV0LFxuICAgIG91dHB1dHM6IG91dHB1dHMsICAgIFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgRWRpdERpYWxvZ0ZpZWxkRGlyZWN0aXZlIGV4dGVuZHMgQ29tcGxleEJhc2U8RWRpdERpYWxvZ0ZpZWxkRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdFxuXG5cbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0eXBlcyBvZiB0YWIgd2hpY2ggY29udGFpbnMgZWRpdG9yIGZvciBjb2x1bW5zLiBcbiAgICAgKiAqIGBHZW5lcmFsYCAtIERlZmluZXMgdGFiIGNvbnRhaW5lciB0eXBlIGFzIGdlbmVyYWwuIFxuICAgICAqICogYERlcGVuZGVuY3lgIC0gRGVmaW5lcyB0YWIgYXMgZGVwZW5kZW5jeSBlZGl0b3IuIFxuICAgICAqICogYFJlc291cmNlc2AgLSBEZWZpbmVzIHRhYiBhcyByZXNvdXJjZXMgZWRpdG9yLiBcbiAgICAgKiAqIGBOb3Rlc2AgLSBEZWZpbmVzIHRhYiBhcyBub3RlcyBlZGl0b3IuIFxuICAgICAqICogYEN1c3RvbWAgLSBEZWZpbmVzIHRhYiBhcyBjdXN0b20gY29sdW1uIGVkaXRvci5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIHR5cGU6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyBlZGl0ZWQgY29sdW1uIGZpZWxkcyBwbGFjZWQgaW5zaWRlIHRoZSB0YWIuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBmaWVsZHM6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyBoZWFkZXIgdGV4dCBvZiB0YWIgaXRlbS5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIGhlYWRlclRleHQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZVByb3BMaXN0ID0gaW5wdXQ7XG4gICAgfVxufVxuXG4vKipcbiAqIEVkaXREaWFsb2dGaWVsZCBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZWpzLWdhbnR0PmUtZWRpdC1kaWFsb2ctZmllbGRzJyxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXcgQ29udGVudENoaWxkcmVuKEVkaXREaWFsb2dGaWVsZERpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0RGlhbG9nRmllbGRzRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPEVkaXREaWFsb2dGaWVsZHNEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2VkaXRkaWFsb2dmaWVsZHMnKTtcbiAgICB9XG59Il19