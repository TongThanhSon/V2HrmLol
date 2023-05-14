import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['fields', 'headerText', 'type'];
let outputs = [];
/**
 * `e-add-dialog-field` directive represent a add dialog fields collection in Gantt task add dialog.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-add-dialog-fields>
 *     <e-add-dialog-field type='General' headerText='General'></e-add-dialog-field>
 *     <e-add-dialog-field type='Dependency' headerText='Dependency'></e-add-dialog-field>
 *   </e-add-dialog-fields>
 * </ejs-gantt>
 * ```
 */
export class AddDialogFieldDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
AddDialogFieldDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AddDialogFieldDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
AddDialogFieldDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AddDialogFieldDirective, selector: "ejs-gantt>e-add-dialog-fields>e-add-dialog-field", inputs: { fields: "fields", headerText: "headerText", type: "type" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AddDialogFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-gantt>e-add-dialog-fields>e-add-dialog-field',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * AddDialogField Array Directive
 * @private
 */
export class AddDialogFieldsDirective extends ArrayBase {
    constructor() {
        super('adddialogfields');
    }
}
AddDialogFieldsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AddDialogFieldsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AddDialogFieldsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AddDialogFieldsDirective, selector: "ejs-gantt>e-add-dialog-fields", queries: [{ propertyName: "children", predicate: AddDialogFieldDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AddDialogFieldsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-gantt>e-add-dialog-fields',
                    queries: {
                        children: new ContentChildren(AddDialogFieldDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZGlhbG9nZmllbGRzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nYW50dC9hZGRkaWFsb2dmaWVsZHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFJaEYsSUFBSSxLQUFLLEdBQWEsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZELElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztBQUMzQjs7Ozs7Ozs7Ozs7R0FXRztBQVNILE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxXQUFvQztJQTBCN0UsWUFBb0IsZ0JBQWlDO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBRFEscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUVqRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOztvSEEvQlEsdUJBQXVCO3dHQUF2Qix1QkFBdUI7MkZBQXZCLHVCQUF1QjtrQkFSbkMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsa0RBQWtEO29CQUM1RCxNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLEVBRVI7aUJBQ0o7O0FBbUNEOzs7R0FHRztBQU9ILE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxTQUFtQztJQUM3RTtRQUNJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzdCLENBQUM7O3FIQUhRLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLDhGQUhDLHVCQUF1QjsyRkFHaEQsd0JBQXdCO2tCQU5wQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMsdUJBQXVCLENBQUM7cUJBQ3pEO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBDb250ZW50Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5cblxuXG5sZXQgaW5wdXQ6IHN0cmluZ1tdID0gWydmaWVsZHMnLCAnaGVhZGVyVGV4dCcsICd0eXBlJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbi8qKlxuICogYGUtYWRkLWRpYWxvZy1maWVsZGAgZGlyZWN0aXZlIHJlcHJlc2VudCBhIGFkZCBkaWFsb2cgZmllbGRzIGNvbGxlY3Rpb24gaW4gR2FudHQgdGFzayBhZGQgZGlhbG9nLiBcbiAqIEl0IG11c3QgYmUgY29udGFpbmVkIGluIGEgR2FudHQgY29tcG9uZW50KGBlanMtZ2FudHRgKS4gXG4gKiBgYGBodG1sXG4gKiA8ZWpzLWdhbnR0IFtkYXRhU291cmNlXT0nZGF0YScgYWxsb3dTZWxlY3Rpb249J3RydWUnIGFsbG93U29ydGluZz0ndHJ1ZSc+IFxuICogICA8ZS1hZGQtZGlhbG9nLWZpZWxkcz5cbiAqICAgICA8ZS1hZGQtZGlhbG9nLWZpZWxkIHR5cGU9J0dlbmVyYWwnIGhlYWRlclRleHQ9J0dlbmVyYWwnPjwvZS1hZGQtZGlhbG9nLWZpZWxkPlxuICogICAgIDxlLWFkZC1kaWFsb2ctZmllbGQgdHlwZT0nRGVwZW5kZW5jeScgaGVhZGVyVGV4dD0nRGVwZW5kZW5jeSc+PC9lLWFkZC1kaWFsb2ctZmllbGQ+XG4gKiAgIDwvZS1hZGQtZGlhbG9nLWZpZWxkcz5cbiAqIDwvZWpzLWdhbnR0PlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZWpzLWdhbnR0PmUtYWRkLWRpYWxvZy1maWVsZHM+ZS1hZGQtZGlhbG9nLWZpZWxkJyxcbiAgICBpbnB1dHM6IGlucHV0LFxuICAgIG91dHB1dHM6IG91dHB1dHMsICAgIFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgQWRkRGlhbG9nRmllbGREaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxBZGREaWFsb2dGaWVsZERpcmVjdGl2ZT4ge1xuICAgIHB1YmxpYyBkaXJlY3RpdmVQcm9wTGlzdDogYW55O1xuXHRcblxuXG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdHlwZXMgb2YgdGFiIHdoaWNoIGNvbnRhaW5zIGVkaXRvciBmb3IgY29sdW1ucy4gXG4gICAgICogKiBgR2VuZXJhbGAgLSBEZWZpbmVzIHRhYiBjb250YWluZXIgdHlwZSBhcyBnZW5lcmFsLiBcbiAgICAgKiAqIGBEZXBlbmRlbmN5YCAtIERlZmluZXMgdGFiIGFzIGRlcGVuZGVuY3kgZWRpdG9yLiBcbiAgICAgKiAqIGBSZXNvdXJjZXNgIC0gRGVmaW5lcyB0YWIgYXMgcmVzb3VyY2VzIGVkaXRvci4gXG4gICAgICogKiBgTm90ZXNgIC0gRGVmaW5lcyB0YWIgYXMgbm90ZXMgZWRpdG9yLiBcbiAgICAgKiAqIGBDdXN0b21gIC0gRGVmaW5lcyB0YWIgYXMgY3VzdG9tIGNvbHVtbiBlZGl0b3IuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyB0eXBlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgZWRpdGVkIGNvbHVtbiBmaWVsZHMgcGxhY2VkIGluc2lkZSB0aGUgdGFiLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgZmllbGRzOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgaGVhZGVyIHRleHQgb2YgdGFiIGl0ZW0uXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBoZWFkZXJUZXh0OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBBZGREaWFsb2dGaWVsZCBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZWpzLWdhbnR0PmUtYWRkLWRpYWxvZy1maWVsZHMnLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oQWRkRGlhbG9nRmllbGREaXJlY3RpdmUpXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgQWRkRGlhbG9nRmllbGRzRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPEFkZERpYWxvZ0ZpZWxkc0RpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignYWRkZGlhbG9nZmllbGRzJyk7XG4gICAgfVxufSJdfQ==