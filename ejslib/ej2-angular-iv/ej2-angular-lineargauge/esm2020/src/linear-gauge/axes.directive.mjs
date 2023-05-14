import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { RangesDirective } from './ranges.directive';
import { PointersDirective } from './pointers.directive';
import * as i0 from "@angular/core";
let input = ['isInversed', 'labelStyle', 'line', 'majorTicks', 'maximum', 'minimum', 'minorTicks', 'opposedPosition', 'pointers', 'ranges', 'showLastLabel'];
let outputs = [];
/**
 * Axes directive
 * ```html
 * <e-axes><e-axis></e-axis></e-axes>
 * ```
 */
export class AxisDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['ranges', 'pointers'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
AxisDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AxisDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
AxisDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AxisDirective, selector: "e-axes>e-axis", inputs: { isInversed: "isInversed", labelStyle: "labelStyle", line: "line", majorTicks: "majorTicks", maximum: "maximum", minimum: "minimum", minorTicks: "minorTicks", opposedPosition: "opposedPosition", pointers: "pointers", ranges: "ranges", showLastLabel: "showLastLabel" }, queries: [{ propertyName: "childRanges", first: true, predicate: RangesDirective, descendants: true }, { propertyName: "childPointers", first: true, predicate: PointersDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AxisDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-axes>e-axis',
                    inputs: input,
                    outputs: outputs,
                    queries: {
                        childRanges: new ContentChild(RangesDirective),
                        childPointers: new ContentChild(PointersDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Axis Array Directive
 * @private
 */
export class AxesDirective extends ArrayBase {
    constructor() {
        super('axes');
    }
}
AxesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AxesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AxesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AxesDirective, selector: "ej-lineargauge>e-axes", queries: [{ propertyName: "children", predicate: AxisDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AxesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-lineargauge>e-axes',
                    queries: {
                        children: new ContentChildren(AxisDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhlcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGluZWFyLWdhdWdlL2F4ZXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUV6RCxJQUFJLEtBQUssR0FBYSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3ZLLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztBQUMzQjs7Ozs7R0FLRztBQVVILE1BQU0sT0FBTyxhQUFjLFNBQVEsV0FBMEI7SUFxRHpELFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFoRDlDLFNBQUksR0FBYSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQWtEM0MsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7MEdBMURRLGFBQWE7OEZBQWIsYUFBYSxvWEFKWSxlQUFlLGdGQUNiLGlCQUFpQjsyRkFHNUMsYUFBYTtrQkFUekIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRTt3QkFDTCxXQUFXLEVBQUUsSUFBSSxZQUFZLENBQUMsZUFBZSxDQUFDO3dCQUM5QyxhQUFhLEVBQUUsSUFBSSxZQUFZLENBQUMsaUJBQWlCLENBQUM7cUJBQ3JEO2lCQUNKOztBQThERDs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sYUFBYyxTQUFRLFNBQXdCO0lBQ3ZEO1FBQ0ksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xCLENBQUM7OzBHQUhRLGFBQWE7OEZBQWIsYUFBYSxzRkFIWSxhQUFhOzJGQUd0QyxhQUFhO2tCQU56QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMsYUFBYSxDQUFDO3FCQUMvQztpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5cbmltcG9ydCB7IFJhbmdlc0RpcmVjdGl2ZSB9IGZyb20gJy4vcmFuZ2VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQb2ludGVyc0RpcmVjdGl2ZSB9IGZyb20gJy4vcG9pbnRlcnMuZGlyZWN0aXZlJztcblxubGV0IGlucHV0OiBzdHJpbmdbXSA9IFsnaXNJbnZlcnNlZCcsICdsYWJlbFN0eWxlJywgJ2xpbmUnLCAnbWFqb3JUaWNrcycsICdtYXhpbXVtJywgJ21pbmltdW0nLCAnbWlub3JUaWNrcycsICdvcHBvc2VkUG9zaXRpb24nLCAncG9pbnRlcnMnLCAncmFuZ2VzJywgJ3Nob3dMYXN0TGFiZWwnXTtcbmxldCBvdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuLyoqXG4gKiBBeGVzIGRpcmVjdGl2ZVxuICogYGBgaHRtbFxuICogPGUtYXhlcz48ZS1heGlzPjwvZS1heGlzPjwvZS1heGVzPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1heGVzPmUtYXhpcycsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkUmFuZ2VzOiBuZXcgQ29udGVudENoaWxkKFJhbmdlc0RpcmVjdGl2ZSksIFxuICAgICAgICBjaGlsZFBvaW50ZXJzOiBuZXcgQ29udGVudENoaWxkKFBvaW50ZXJzRGlyZWN0aXZlKVxuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgQXhpc0RpcmVjdGl2ZSBleHRlbmRzIENvbXBsZXhCYXNlPEF4aXNEaXJlY3RpdmU+IHtcbiAgICBwdWJsaWMgZGlyZWN0aXZlUHJvcExpc3Q6IGFueTtcblx0XG4gICAgcHVibGljIGNoaWxkUmFuZ2VzOiBhbnk7XG4gICAgcHVibGljIGNoaWxkUG9pbnRlcnM6IGFueTtcbiAgICBwdWJsaWMgdGFnczogc3RyaW5nW10gPSBbJ3JhbmdlcycsICdwb2ludGVycyddO1xuICAgIC8qKiBcbiAgICAgKiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBpbnZlcnNlZCBheGlzLlxuICAgICAqL1xuICAgIHB1YmxpYyBpc0ludmVyc2VkOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIG9wdGlvbnMgZm9yIGN1c3RvbWl6aW5nIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBsYWJlbCBpbiBheGlzLlxuICAgICAqL1xuICAgIHB1YmxpYyBsYWJlbFN0eWxlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIG9wdGlvbnMgZm9yIGN1c3RvbWl6aW5nIHRoZSBheGlzIGxpbmUuXG4gICAgICovXG4gICAgcHVibGljIGxpbmU6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgb3B0aW9ucyBmb3IgY3VzdG9taXppbmcgdGhlIG1ham9yIHRpY2sgbGluZXMuXG4gICAgICovXG4gICAgcHVibGljIG1ham9yVGlja3M6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgbWF4aW11bSB2YWx1ZSBmb3IgdGhlIGF4aXMuXG4gICAgICogQGRlZmF1bHQgMTAwXG4gICAgICovXG4gICAgcHVibGljIG1heGltdW06IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgbWluaW11bSB2YWx1ZSBmb3IgdGhlIGF4aXMuXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHB1YmxpYyBtaW5pbXVtOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIG9wdGlvbnMgZm9yIGN1c3RvbWl6aW5nIHRoZSBtaW5vciB0aWNrIGxpbmVzLlxuICAgICAqL1xuICAgIHB1YmxpYyBtaW5vclRpY2tzOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIG9wcG9zZWQgcG9zaXRpb24gb2YgdGhlIGF4aXMgaW4gdGhlIGxpbmVhciBnYXVnZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgb3Bwb3NlZFBvc2l0aW9uOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIG9wdGlvbnMgZm9yIGN1c3RvbWl6aW5nIHRoZSBwb2ludGVycyBvZiBhbiBheGlzLlxuICAgICAqL1xuICAgIHB1YmxpYyBwb2ludGVyczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBvcHRpb25zIGZvciBjdXN0b21pemluZyB0aGUgcmFuZ2VzIG9mIGFuIGF4aXMuXG4gICAgICovXG4gICAgcHVibGljIHJhbmdlczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTaG93cyBvciBoaWRlcyB0aGUgbGFzdCBsYWJlbCBpbiB0aGUgYXhpcyBvZiB0aGUgbGluZWFyIGdhdWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzaG93TGFzdExhYmVsOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBBeGlzIEFycmF5IERpcmVjdGl2ZVxuICogQHByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlai1saW5lYXJnYXVnZT5lLWF4ZXMnLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oQXhpc0RpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBBeGVzRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPEF4ZXNEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2F4ZXMnKTtcbiAgICB9XG59Il19