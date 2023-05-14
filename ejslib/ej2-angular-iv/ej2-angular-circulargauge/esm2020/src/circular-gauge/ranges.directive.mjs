import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['color', 'end', 'endWidth', 'legendText', 'linearGradient', 'offset', 'opacity', 'position', 'radialGradient', 'radius', 'roundedCornerRadius', 'start', 'startWidth'];
let outputs = [];
/**
 * Ranges directive
 * ```html
 * <e-ranges><e-range></e-range></e-ranges>
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
RangeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangeDirective, selector: "e-ranges>e-range", inputs: { color: "color", end: "end", endWidth: "endWidth", legendText: "legendText", linearGradient: "linearGradient", offset: "offset", opacity: "opacity", position: "position", radialGradient: "radialGradient", radius: "radius", roundedCornerRadius: "roundedCornerRadius", start: "start", startWidth: "startWidth" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-ranges>e-range',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
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
RangesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangesDirective, selector: "ej-circulargauge>e-axes>e-axis>e-ranges", queries: [{ propertyName: "children", predicate: RangeDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-circulargauge>e-axes>e-axis>e-ranges',
                    queries: {
                        children: new ContentChildren(RangeDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jaXJjdWxhci1nYXVnZS9yYW5nZXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFJaEYsSUFBSSxLQUFLLEdBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUM5TCxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFDM0I7Ozs7O0dBS0c7QUFTSCxNQUFNLE9BQU8sY0FBZSxTQUFRLFdBQTJCO0lBMkUzRCxZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRWpELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7OzJHQWhGUSxjQUFjOytGQUFkLGNBQWM7MkZBQWQsY0FBYztrQkFSMUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLEVBRVI7aUJBQ0o7O0FBb0ZEOzs7R0FHRztBQU9ILE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQTBCO0lBQzNEO1FBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7OzRHQUhRLGVBQWU7Z0dBQWYsZUFBZSx3R0FIVSxjQUFjOzJGQUd2QyxlQUFlO2tCQU4zQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSx5Q0FBeUM7b0JBQ25ELE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMsY0FBYyxDQUFDO3FCQUNoRDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV4QmFzZSwgQXJyYXlCYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cblxubGV0IGlucHV0OiBzdHJpbmdbXSA9IFsnY29sb3InLCAnZW5kJywgJ2VuZFdpZHRoJywgJ2xlZ2VuZFRleHQnLCAnbGluZWFyR3JhZGllbnQnLCAnb2Zmc2V0JywgJ29wYWNpdHknLCAncG9zaXRpb24nLCAncmFkaWFsR3JhZGllbnQnLCAncmFkaXVzJywgJ3JvdW5kZWRDb3JuZXJSYWRpdXMnLCAnc3RhcnQnLCAnc3RhcnRXaWR0aCddO1xubGV0IG91dHB1dHM6IHN0cmluZ1tdID0gW107XG4vKipcbiAqIFJhbmdlcyBkaXJlY3RpdmVcbiAqIGBgYGh0bWxcbiAqIDxlLXJhbmdlcz48ZS1yYW5nZT48L2UtcmFuZ2U+PC9lLXJhbmdlcz5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2UtcmFuZ2VzPmUtcmFuZ2UnLFxuICAgIGlucHV0czogaW5wdXQsXG4gICAgb3V0cHV0czogb3V0cHV0cywgICAgXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBSYW5nZURpcmVjdGl2ZSBleHRlbmRzIENvbXBsZXhCYXNlPFJhbmdlRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdFxuXG5cbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgY29sb3Igb2YgdGhlIHJhbmdlcyBpbiBjaXJjdWxhciBnYXVnZSBjb21wb25lbnQuXG4gICAgICogQGFzcGRlZmF1bHR2YWx1ZWlnbm9yZSBcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIGNvbG9yOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIGVuZCB2YWx1ZSBvZiB0aGUgcmFuZ2UgaW4gY2lyY3VsYXIgZ2F1Z2UgY29tcG9uZW50LlxuICAgICAqIEBhc3BkZWZhdWx0dmFsdWVpZ25vcmUgXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHB1YmxpYyBlbmQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgd2lkdGggZm9yIHRoZSBlbmQgb2YgdGhlIHJhbmdlIGluIHRoZSBjaXJjdWxhciBnYXVnZSBjb21wb25lbnQuXG4gICAgICogQGRlZmF1bHQgJzEwJ1xuICAgICAqL1xuICAgIHB1YmxpYyBlbmRXaWR0aDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSB0ZXh0IGZvciB0aGUgbGVnZW5kIGluIHRoZSBjaXJjdWxhciBnYXVnZSBjb21wb25lbnQuXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgbGVnZW5kVGV4dDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBwcm9wZXJ0aWVzIHRvIHJlbmRlciBhIGxpbmVhciBncmFkaWVudCBmb3IgdGhlIHJhbmdlLiBcbiAgICAgKiBJZiBib3RoIGxpbmVhciBhbmQgcmFkaWFsIGdyYWRpZW50IGlzIHNldCwgdGhlbiB0aGUgbGluZWFyIGdyYWRpZW50IHdpbGwgYmUgcmVuZGVyZWQgaW4gdGhlIHJhbmdlLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgbGluZWFyR3JhZGllbnQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgb2Zmc2V0IHZhbHVlIG9mIHJhbmdlIGluIGNpcmN1bGFyIGdhdWdlIGNvbXBvbmVudC5cbiAgICAgKiBAZGVmYXVsdCAnMCdcbiAgICAgKi9cbiAgICBwdWJsaWMgb2Zmc2V0OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIG9wYWNpdHkgZm9yIHRoZSByYW5nZXMgaW4gY2lyY3VsYXIgZ2F1Z2UgY29tcG9uZW50LlxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICBwdWJsaWMgb3BhY2l0eTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgcmFuZ2UgYW5kIHBvaW50ZXIgZm9yIGFuIGF4aXMgaW4gY2lyY3VsYXIgZ2F1Z2UgY29tcG9uZW50LlxuICAgICAqIEBkZWZhdWx0IEF1dG9cbiAgICAgKi9cbiAgICBwdWJsaWMgcG9zaXRpb246IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgcHJvcGVydGllcyB0byByZW5kZXIgYSByYWRpYWwgZ3JhZGllbnQgZm9yIHRoZSByYW5nZS5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIHJhZGlhbEdyYWRpZW50OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIHJhZGl1cyBvZiB0aGUgcmFuZ2UgZm9yIGNpcmN1bGFyIGdhdWdlIGNvbXBvbmVudC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIHJhZGl1czogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBjb3JuZXIgcmFkaXVzIGZvciByYW5nZXMgaW4gY2lyY3VsYXIgZ2F1Z2UgY29tcG9uZW50LlxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICBwdWJsaWMgcm91bmRlZENvcm5lclJhZGl1czogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBzdGFydCB2YWx1ZSBvZiB0aGUgcmFuZ2UgaW4gY2lyY3VsYXIgZ2F1Z2UgY29tcG9uZW50LlxuICAgICAqIEBhc3BkZWZhdWx0dmFsdWVpZ25vcmUgXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGFydDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSB3aWR0aCBmb3IgdGhlIHN0YXJ0IG9mIHRoZSByYW5nZSBpbiB0aGUgY2lyY3VsYXIgZ2F1Z2UgY29tcG9uZW50LlxuICAgICAqIEBkZWZhdWx0ICcxMCdcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhcnRXaWR0aDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogUmFuZ2UgQXJyYXkgRGlyZWN0aXZlXG4gKiBAcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2VqLWNpcmN1bGFyZ2F1Z2U+ZS1heGVzPmUtYXhpcz5lLXJhbmdlcycsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZHJlbjogbmV3IENvbnRlbnRDaGlsZHJlbihSYW5nZURpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBSYW5nZXNEaXJlY3RpdmUgZXh0ZW5kcyBBcnJheUJhc2U8UmFuZ2VzRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdyYW5nZXMnKTtcbiAgICB9XG59Il19