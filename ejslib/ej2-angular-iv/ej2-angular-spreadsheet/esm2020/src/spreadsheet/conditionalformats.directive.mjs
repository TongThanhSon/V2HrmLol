import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['cFColor', 'format', 'range', 'type', 'value'];
let outputs = [];
/**
 * `e-conditionalformat` directive represent a conditionalformat of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-conditionalformats>
 *    <e-conditionalformat></e-conditionalformat>
 *    </e-conditionalformats>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
export class ConditionalFormatDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
ConditionalFormatDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConditionalFormatDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ConditionalFormatDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ConditionalFormatDirective, selector: "e-conditionalformats>e-conditionalformat", inputs: { cFColor: "cFColor", format: "format", range: "range", type: "type", value: "value" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConditionalFormatDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-conditionalformats>e-conditionalformat',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * ConditionalFormat Array Directive
 * @private
 */
export class ConditionalFormatsDirective extends ArrayBase {
    constructor() {
        super('conditionalformats');
    }
}
ConditionalFormatsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConditionalFormatsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ConditionalFormatsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ConditionalFormatsDirective, selector: "e-sheet>e-conditionalformats", queries: [{ propertyName: "children", predicate: ConditionalFormatDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConditionalFormatsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-sheet>e-conditionalformats',
                    queries: {
                        children: new ContentChildren(ConditionalFormatDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZGl0aW9uYWxmb3JtYXRzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zcHJlYWRzaGVldC9jb25kaXRpb25hbGZvcm1hdHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFJaEYsSUFBSSxLQUFLLEdBQWEsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEUsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBU0gsTUFBTSxPQUFPLDBCQUEyQixTQUFRLFdBQXVDO0lBZ0NuRixZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRWpELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7O3VIQXJDUSwwQkFBMEI7MkdBQTFCLDBCQUEwQjsyRkFBMUIsMEJBQTBCO2tCQVJ0QyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSwwQ0FBMEM7b0JBQ3BELE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsRUFFUjtpQkFDSjs7QUF5Q0Q7OztHQUdHO0FBT0gsTUFBTSxPQUFPLDJCQUE0QixTQUFRLFNBQXNDO0lBQ25GO1FBQ0ksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDaEMsQ0FBQzs7d0hBSFEsMkJBQTJCOzRHQUEzQiwyQkFBMkIsNkZBSEYsMEJBQTBCOzJGQUduRCwyQkFBMkI7a0JBTnZDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsT0FBTyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxJQUFJLGVBQWUsQ0FBQywwQkFBMEIsQ0FBQztxQkFDNUQ7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcGxleEJhc2UsIEFycmF5QmFzZSwgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2NGQ29sb3InLCAnZm9ybWF0JywgJ3JhbmdlJywgJ3R5cGUnLCAndmFsdWUnXTtcbmxldCBvdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuLyoqXG4gKiBgZS1jb25kaXRpb25hbGZvcm1hdGAgZGlyZWN0aXZlIHJlcHJlc2VudCBhIGNvbmRpdGlvbmFsZm9ybWF0IG9mIHRoZSBBbmd1bGFyIFNwcmVhZHNoZWV0LlxuICogSXQgbXVzdCBiZSBjb250YWluZWQgaW4gYSBgZS1zaGVldGAgZGlyZWN0aXZlLlxuICogYGBgaHRtbFxuICogPGVqcy1zcHJlYWRzaGVldD5cbiAqICAgPGUtc2hlZXRzPlxuICogICAgPGUtc2hlZXQ+XG4gKiAgICA8ZS1jb25kaXRpb25hbGZvcm1hdHM+XG4gKiAgICA8ZS1jb25kaXRpb25hbGZvcm1hdD48L2UtY29uZGl0aW9uYWxmb3JtYXQ+XG4gKiAgICA8L2UtY29uZGl0aW9uYWxmb3JtYXRzPlxuICogICAgPC9lLXNoZWV0PlxuICogICA8L2Utc2hlZXRzPlxuICogPC9lanMtc3ByZWFkc2hlZXQ+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlLWNvbmRpdGlvbmFsZm9ybWF0cz5lLWNvbmRpdGlvbmFsZm9ybWF0JyxcbiAgICBpbnB1dHM6IGlucHV0LFxuICAgIG91dHB1dHM6IG91dHB1dHMsICAgIFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uYWxGb3JtYXREaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxDb25kaXRpb25hbEZvcm1hdERpcmVjdGl2ZT4ge1xuICAgIHB1YmxpYyBkaXJlY3RpdmVQcm9wTGlzdDogYW55O1xuXHRcblxuXG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyBDb25kaXRpb25hbCBmb3JtYXR0aW5nIFR5cGUuXG4gICAgICogQGRlZmF1bHQgJ0dyZWF0ZXJUaGFuJ1xuICAgICAqIEBhc3BpZ25vcmUgXG4gICAgICovXG4gICAgcHVibGljIHR5cGU6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIENvbmRpdGlvbmFsIGZvcm1hdHRpbmcgSGlnaGxpZ2h0IENvbG9yLlxuICAgICAqIEBkZWZhdWx0ICdSZWRGVCdcbiAgICAgKi9cbiAgICBwdWJsaWMgY0ZDb2xvcjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgZm9ybWF0LlxuICAgICAqIEBkZWZhdWx0IHt9XG4gICAgICovXG4gICAgcHVibGljIGZvcm1hdDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgQ29uZGl0aW9uYWwgZm9ybWF0dGluZyByYW5nZS5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyByYW5nZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgQ29uZGl0aW9uYWwgZm9ybWF0dGluZyBWYWx1ZS5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyB2YWx1ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogQ29uZGl0aW9uYWxGb3JtYXQgQXJyYXkgRGlyZWN0aXZlXG4gKiBAcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Utc2hlZXQ+ZS1jb25kaXRpb25hbGZvcm1hdHMnLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oQ29uZGl0aW9uYWxGb3JtYXREaXJlY3RpdmUpXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uYWxGb3JtYXRzRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPENvbmRpdGlvbmFsRm9ybWF0c0RpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignY29uZGl0aW9uYWxmb3JtYXRzJyk7XG4gICAgfVxufSJdfQ==