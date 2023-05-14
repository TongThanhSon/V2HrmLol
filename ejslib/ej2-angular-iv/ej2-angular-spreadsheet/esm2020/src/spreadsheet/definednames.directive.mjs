import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['comment', 'name', 'refersTo', 'scope'];
let outputs = [];
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
export class DefinedNameDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
DefinedNameDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DefinedNameDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
DefinedNameDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: DefinedNameDirective, selector: "e-definednames>e-definedname", inputs: { comment: "comment", name: "name", refersTo: "refersTo", scope: "scope" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DefinedNameDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-definednames>e-definedname',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * DefinedName Array Directive
 * @private
 */
export class DefinedNamesDirective extends ArrayBase {
    constructor() {
        super('definednames');
    }
}
DefinedNamesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DefinedNamesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DefinedNamesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: DefinedNamesDirective, selector: "ejs-spreadsheet>e-definednames", queries: [{ propertyName: "children", predicate: DefinedNameDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DefinedNamesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-spreadsheet>e-definednames',
                    queries: {
                        children: new ContentChildren(DefinedNameDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lZG5hbWVzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zcHJlYWRzaGVldC9kZWZpbmVkbmFtZXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFJaEYsSUFBSSxLQUFLLEdBQWEsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvRCxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFDM0I7Ozs7Ozs7Ozs7O0dBV0c7QUFTSCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsV0FBaUM7SUEwQnZFLFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7aUhBL0JRLG9CQUFvQjtxR0FBcEIsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBUmhDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxFQUVSO2lCQUNKOztBQW1DRDs7O0dBR0c7QUFPSCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsU0FBZ0M7SUFDdkU7UUFDSSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7a0hBSFEscUJBQXFCO3NHQUFyQixxQkFBcUIsK0ZBSEksb0JBQW9COzJGQUc3QyxxQkFBcUI7a0JBTmpDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsT0FBTyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxJQUFJLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQztxQkFDdEQ7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcGxleEJhc2UsIEFycmF5QmFzZSwgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2NvbW1lbnQnLCAnbmFtZScsICdyZWZlcnNUbycsICdzY29wZSddO1xubGV0IG91dHB1dHM6IHN0cmluZ1tdID0gW107XG4vKipcbiAqIGBlLWRlZmluZWRuYW1lYCBkaXJlY3RpdmUgcmVwcmVzZW50IGEgZGVmaW5lZCBuYW1lIG9mIHRoZSBBbmd1bGFyIFNwcmVhZHNoZWV0LlxuICogSXQgbXVzdCBiZSBjb250YWluZWQgaW4gYSBTcHJlYWRzaGVldCBjb21wb25lbnQoYGVqcy1zcHJlYWRzaGVldGApLlxuICogYGBgaHRtbFxuICogPGVqcy1zcHJlYWRzaGVldD5cbiAqICAgPGUtZGVmaW5lZG5hbWVzPlxuICogICAgPGUtZGVmaW5lZG5hbWU+PC9lLWRlZmluZWRuYW1lPlxuICogICAgPGUtZGVmaW5lZG5hbWU+PC9lLWRlZmluZWRuYW1lPlxuICogICA8L2UtZGVmaW5lZG5hbWVzPlxuICogPC9lanMtc3ByZWFkc2hlZXQ+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlLWRlZmluZWRuYW1lcz5lLWRlZmluZWRuYW1lJyxcbiAgICBpbnB1dHM6IGlucHV0LFxuICAgIG91dHB1dHM6IG91dHB1dHMsICAgIFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgRGVmaW5lZE5hbWVEaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxEZWZpbmVkTmFtZURpcmVjdGl2ZT4ge1xuICAgIHB1YmxpYyBkaXJlY3RpdmVQcm9wTGlzdDogYW55O1xuXHRcblxuXG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyBjb21tZW50IGZvciB0aGUgZGVmaW5lZCBuYW1lLlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIGNvbW1lbnQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIG5hbWUgZm9yIHRoZSBkZWZpbmVkIG5hbWUsIHdoaWNoIGNhbiBiZSB1c2VkIGluIGZvcm11bGEuXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgcmVmZXJlbmNlIGZvciB0aGUgZGVmaW5lZCBuYW1lLlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIHJlZmVyc1RvOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyBzY29wZSBmb3IgdGhlIGRlZmluZWQgbmFtZS5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyBzY29wZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogRGVmaW5lZE5hbWUgQXJyYXkgRGlyZWN0aXZlXG4gKiBAcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1zcHJlYWRzaGVldD5lLWRlZmluZWRuYW1lcycsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZHJlbjogbmV3IENvbnRlbnRDaGlsZHJlbihEZWZpbmVkTmFtZURpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBEZWZpbmVkTmFtZXNEaXJlY3RpdmUgZXh0ZW5kcyBBcnJheUJhc2U8RGVmaW5lZE5hbWVzRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdkZWZpbmVkbmFtZXMnKTtcbiAgICB9XG59Il19