import { __decorate } from "tslib";
import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['address', 'dataSource', 'query', 'showFieldAsHeader', 'startCell', 'template'];
let outputs = [];
/**
 * `e-range` directive represent a range of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-ranges>
 *    <e-range [dataSource]='data'></e-range>
 *    </e-ranges>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
export class RangeDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
RangeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
RangeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangeDirective, selector: "e-ranges>e-range", inputs: { address: "address", dataSource: "dataSource", query: "query", showFieldAsHeader: "showFieldAsHeader", startCell: "startCell", template: "template" }, queries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], RangeDirective.prototype, "template", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-ranges>e-range',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { template: [{
                type: ContentChild,
                args: ['template']
            }] } });
/**
 * Range Array Directive
 * @private
 */
export class RangesDirective extends ArrayBase {
    constructor() {
        super('ranges');
    }
}
RangesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RangesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangesDirective, selector: "e-sheet>e-ranges", queries: [{ propertyName: "children", predicate: RangeDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-sheet>e-ranges',
                    queries: {
                        children: new ContentChildren(RangeDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zcHJlYWRzaGVldC9yYW5nZXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFHeEQsSUFBSSxLQUFLLEdBQWEsQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDdkcsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBU0gsTUFBTSxPQUFPLGNBQWUsU0FBUSxXQUEyQjtJQXlDM0QsWUFBb0IsZ0JBQWlDO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBRFEscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUVqRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOzsyR0E5Q1EsY0FBYzsrRkFBZCxjQUFjO0FBdUN2QjtJQURDLFFBQVEsRUFBRTtnREFDVTsyRkF2Q1osY0FBYztrQkFSMUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLEVBRVI7aUJBQ0o7dUdBd0NVLFFBQVE7c0JBRmQsWUFBWTt1QkFBQyxVQUFVOztBQVk1Qjs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxTQUEwQjtJQUMzRDtRQUNJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQixDQUFDOzs0R0FIUSxlQUFlO2dHQUFmLGVBQWUsaUZBSFUsY0FBYzsyRkFHdkMsZUFBZTtrQkFOM0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLGNBQWMsQ0FBQztxQkFDaEQ7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZHJlbiwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV4QmFzZSwgQXJyYXlCYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5sZXQgaW5wdXQ6IHN0cmluZ1tdID0gWydhZGRyZXNzJywgJ2RhdGFTb3VyY2UnLCAncXVlcnknLCAnc2hvd0ZpZWxkQXNIZWFkZXInLCAnc3RhcnRDZWxsJywgJ3RlbXBsYXRlJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbi8qKlxuICogYGUtcmFuZ2VgIGRpcmVjdGl2ZSByZXByZXNlbnQgYSByYW5nZSBvZiB0aGUgQW5ndWxhciBTcHJlYWRzaGVldC5cbiAqIEl0IG11c3QgYmUgY29udGFpbmVkIGluIGEgYGUtc2hlZXRgIGRpcmVjdGl2ZS5cbiAqIGBgYGh0bWxcbiAqIDxlanMtc3ByZWFkc2hlZXQ+XG4gKiAgIDxlLXNoZWV0cz5cbiAqICAgIDxlLXNoZWV0PlxuICogICAgPGUtcmFuZ2VzPlxuICogICAgPGUtcmFuZ2UgW2RhdGFTb3VyY2VdPSdkYXRhJz48L2UtcmFuZ2U+XG4gKiAgICA8L2UtcmFuZ2VzPlxuICogICAgPC9lLXNoZWV0PlxuICogICA8L2Utc2hlZXRzPlxuICogPC9lanMtc3ByZWFkc2hlZXQ+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlLXJhbmdlcz5lLXJhbmdlJyxcbiAgICBpbnB1dHM6IGlucHV0LFxuICAgIG91dHB1dHM6IG91dHB1dHMsICAgIFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VEaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxSYW5nZURpcmVjdGl2ZT4ge1xuICAgIHB1YmxpYyBkaXJlY3RpdmVQcm9wTGlzdDogYW55O1xuXHRcblxuXG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgYWRkcmVzcyBmb3IgdXBkYXRpbmcgdGhlIGRhdGFTb3VyY2Ugb3IgdGVtcGxhdGUuXG4gICAgICogQGRlZmF1bHQgJ0ExJ1xuICAgICAqL1xuICAgIHB1YmxpYyBhZGRyZXNzOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgZGF0YSBhcyBKU09OIC8gRGF0YSBtYW5hZ2VyIHRvIHRoZSBzaGVldC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIGRhdGFTb3VyY2U6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgZXh0ZXJuYWwgW2BRdWVyeWBdKGh0dHBzOi8vZWoyLnN5bmNmdXNpb24uY29tL2RvY3VtZW50YXRpb24vZGF0YS9hcGktcXVlcnkuaHRtbCkgXG4gICAgICogdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGFsb25nIHdpdGggZGF0YSBwcm9jZXNzaW5nLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgcXVlcnk6IGFueTtcbiAgICAvKiogXG4gICAgICogU2hvdy9IaWRlIHRoZSBmaWVsZCBvZiB0aGUgZGF0YXNvdXJjZSBhcyBoZWFkZXIuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzaG93RmllbGRBc0hlYWRlcjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHN0YXJ0IGNlbGwgZnJvbSB3aGljaCB0aGUgZGF0YXNvdXJjZSB3aWxsIGJlIHBvcHVsYXRlZC5cbiAgICAgKiBAZGVmYXVsdCAnQTEnXG4gICAgICovXG4gICAgcHVibGljIHN0YXJ0Q2VsbDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUZW1wbGF0ZSBoZWxwcyB0byBjb21waWxlcyB0aGUgZ2l2ZW4gSFRNTCBTdHJpbmcgKG9yIEhUTUwgRWxlbWVudCBJRCkgaW50byBIdE1MIEVsZW1lbnQgYW5kIGFwcGVuZCB0byB0aGUgQ2VsbC5cbiAgICAgKiBcbiAgICAgKiAgQGRlZmF1bHQgJydcbiAgICAgKiAgICAgXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgndGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIHRlbXBsYXRlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBSYW5nZSBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1zaGVldD5lLXJhbmdlcycsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZHJlbjogbmV3IENvbnRlbnRDaGlsZHJlbihSYW5nZURpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBSYW5nZXNEaXJlY3RpdmUgZXh0ZW5kcyBBcnJheUJhc2U8UmFuZ2VzRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdyYW5nZXMnKTtcbiAgICB9XG59Il19