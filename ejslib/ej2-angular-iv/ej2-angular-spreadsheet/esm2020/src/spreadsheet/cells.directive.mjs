import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { ImagesDirective } from './image.directive';
import { ChartsDirective } from './chart.directive';
import * as i0 from "@angular/core";
let input = ['chart', 'colSpan', 'format', 'formula', 'hyperlink', 'image', 'index', 'isLocked', 'rowSpan', 'style', 'validation', 'value', 'wrap'];
let outputs = [];
/**
 * `e-cell` directive represent a cell of the Angular Spreadsheet.
 * It must be contained in a `e-row` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rows>
 *    <e-row>
 *    <e-cells>
 *    <e-cell value='A1'></e-cell>
 *    </e-cells>
 *    </e-row>
 *    </e-rows>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
export class CellDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['image', 'chart'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
CellDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CellDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
CellDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: CellDirective, selector: "e-cells>e-cell", inputs: { chart: "chart", colSpan: "colSpan", format: "format", formula: "formula", hyperlink: "hyperlink", image: "image", index: "index", isLocked: "isLocked", rowSpan: "rowSpan", style: "style", validation: "validation", value: "value", wrap: "wrap" }, queries: [{ propertyName: "childImage", first: true, predicate: ImagesDirective, descendants: true }, { propertyName: "childChart", first: true, predicate: ChartsDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CellDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-cells>e-cell',
                    inputs: input,
                    outputs: outputs,
                    queries: {
                        childImage: new ContentChild(ImagesDirective),
                        childChart: new ContentChild(ChartsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Cell Array Directive
 * @private
 */
export class CellsDirective extends ArrayBase {
    constructor() {
        super('cells');
    }
}
CellsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CellsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
CellsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: CellsDirective, selector: "e-row>e-cells", queries: [{ propertyName: "children", predicate: CellDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CellsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-row>e-cells',
                    queries: {
                        children: new ContentChildren(CellDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbHMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NwcmVhZHNoZWV0L2NlbGxzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWhGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRXBELElBQUksS0FBSyxHQUFhLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDOUosSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFVSCxNQUFNLE9BQU8sYUFBYyxTQUFRLFdBQTBCO0lBNEV6RCxZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBdkU5QyxTQUFJLEdBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUF5RXZDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7OzBHQWpGUSxhQUFhOzhGQUFiLGFBQWEsOFZBSlcsZUFBZSw2RUFDZixlQUFlOzJGQUd2QyxhQUFhO2tCQVR6QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUU7d0JBQ0wsVUFBVSxFQUFFLElBQUksWUFBWSxDQUFDLGVBQWUsQ0FBQzt3QkFDN0MsVUFBVSxFQUFFLElBQUksWUFBWSxDQUFDLGVBQWUsQ0FBQztxQkFDaEQ7aUJBQ0o7O0FBcUZEOzs7R0FHRztBQU9ILE1BQU0sT0FBTyxjQUFlLFNBQVEsU0FBeUI7SUFDekQ7UUFDSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7MkdBSFEsY0FBYzsrRkFBZCxjQUFjLDhFQUhXLGFBQWE7MkZBR3RDLGNBQWM7a0JBTjFCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMsYUFBYSxDQUFDO3FCQUMvQztpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5cbmltcG9ydCB7IEltYWdlc0RpcmVjdGl2ZSB9IGZyb20gJy4vaW1hZ2UuZGlyZWN0aXZlJztcbmltcG9ydCB7IENoYXJ0c0RpcmVjdGl2ZSB9IGZyb20gJy4vY2hhcnQuZGlyZWN0aXZlJztcblxubGV0IGlucHV0OiBzdHJpbmdbXSA9IFsnY2hhcnQnLCAnY29sU3BhbicsICdmb3JtYXQnLCAnZm9ybXVsYScsICdoeXBlcmxpbmsnLCAnaW1hZ2UnLCAnaW5kZXgnLCAnaXNMb2NrZWQnLCAncm93U3BhbicsICdzdHlsZScsICd2YWxpZGF0aW9uJywgJ3ZhbHVlJywgJ3dyYXAnXTtcbmxldCBvdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuLyoqXG4gKiBgZS1jZWxsYCBkaXJlY3RpdmUgcmVwcmVzZW50IGEgY2VsbCBvZiB0aGUgQW5ndWxhciBTcHJlYWRzaGVldC5cbiAqIEl0IG11c3QgYmUgY29udGFpbmVkIGluIGEgYGUtcm93YCBkaXJlY3RpdmUuXG4gKiBgYGBodG1sXG4gKiA8ZWpzLXNwcmVhZHNoZWV0PlxuICogICA8ZS1zaGVldHM+XG4gKiAgICA8ZS1zaGVldD5cbiAqICAgIDxlLXJvd3M+XG4gKiAgICA8ZS1yb3c+XG4gKiAgICA8ZS1jZWxscz5cbiAqICAgIDxlLWNlbGwgdmFsdWU9J0ExJz48L2UtY2VsbD5cbiAqICAgIDwvZS1jZWxscz5cbiAqICAgIDwvZS1yb3c+XG4gKiAgICA8L2Utcm93cz5cbiAqICAgIDwvZS1zaGVldD5cbiAqICAgPC9lLXNoZWV0cz5cbiAqIDwvZWpzLXNwcmVhZHNoZWV0PlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1jZWxscz5lLWNlbGwnLFxuICAgIGlucHV0czogaW5wdXQsXG4gICAgb3V0cHV0czogb3V0cHV0cywgICAgXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZEltYWdlOiBuZXcgQ29udGVudENoaWxkKEltYWdlc0RpcmVjdGl2ZSksIFxuICAgICAgICBjaGlsZENoYXJ0OiBuZXcgQ29udGVudENoaWxkKENoYXJ0c0RpcmVjdGl2ZSlcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIENlbGxEaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxDZWxsRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdFxuICAgIHB1YmxpYyBjaGlsZEltYWdlOiBhbnk7XG4gICAgcHVibGljIGNoaWxkQ2hhcnQ6IGFueTtcbiAgICBwdWJsaWMgdGFnczogc3RyaW5nW10gPSBbJ2ltYWdlJywgJ2NoYXJ0J107XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgY2hhcnQgb2YgdGhlIGNlbGwuXG4gICAgICogQGRlZmF1bHQgW11cbiAgICAgKi9cbiAgICBwdWJsaWMgY2hhcnQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBjb2x1bW4td2lzZSBjZWxsIG1lcmdlIGNvdW50LlxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKiBAYXNwdHlwZSBpbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgY29sU3BhbjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciBmb3JtYXQgY29kZSB0byBkaXNwbGF5IHZhbHVlIGluIHNwZWNpZmllZCBudW1iZXIgZm9ybWF0LlxuICAgICAqIEBkZWZhdWx0ICdHZW5lcmFsJ1xuICAgICAqL1xuICAgIHB1YmxpYyBmb3JtYXQ6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgZm9ybXVsYSBvciBleHByZXNzaW9uIG9mIHRoZSBjZWxsLlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIGZvcm11bGE6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBoeXBlcmxpbmsgb2YgdGhlIGNlbGwuXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgaHlwZXJsaW5rOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgaW1hZ2Ugb2YgdGhlIGNlbGwuXG4gICAgICogQGRlZmF1bHQgW11cbiAgICAgKi9cbiAgICBwdWJsaWMgaW1hZ2U6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBpbmRleCBvZiB0aGUgY2VsbC5cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICogQGFzcHR5cGUgaW50XG4gICAgICovXG4gICAgcHVibGljIGluZGV4OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgY2VsbCBpcyBsb2NrZWQgb3Igbm90LCBmb3IgYWxsb3cgZWRpdCByYW5nZSBpbiBzcHJlYWRzaGVldCBwcm90ZWN0IG9wdGlvbi5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIGlzTG9ja2VkOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgcm93LXdpc2UgY2VsbCBtZXJnZSBjb3VudC5cbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICogQGFzcHR5cGUgaW50XG4gICAgICovXG4gICAgcHVibGljIHJvd1NwYW46IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBjZWxsIHN0eWxlIG9wdGlvbnMuIFxuICAgICAqICBcbiAgICAgKiBAZGVmYXVsdCB7fVxuICAgICAqL1xuICAgIHB1YmxpYyBzdHlsZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHZhbGlkYXRpb24gb2YgdGhlIGNlbGwuXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgdmFsaWRhdGlvbjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSB2YWx1ZSBvZiB0aGUgY2VsbCB3aGljaCBjYW4gYmUgdGV4dCBvciBudW1iZXIuXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgdmFsdWU6IGFueTtcbiAgICAvKiogXG4gICAgICogV3JhcHMgdGhlIGNlbGwgdGV4dCB0byB0aGUgbmV4dCBsaW5lLCBpZiB0aGUgdGV4dCB3aWR0aCBleGNlZWRzIHRoZSBjb2x1bW4gd2lkdGguXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgd3JhcDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogQ2VsbCBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1yb3c+ZS1jZWxscycsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZHJlbjogbmV3IENvbnRlbnRDaGlsZHJlbihDZWxsRGlyZWN0aXZlKVxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIENlbGxzRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPENlbGxzRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdjZWxscycpO1xuICAgIH1cbn0iXX0=