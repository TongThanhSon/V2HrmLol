import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['border', 'color', 'end', 'endWidth', 'linearGradient', 'offset', 'position', 'radialGradient', 'start', 'startWidth'];
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
RangeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangeDirective, selector: "e-ranges>e-range", inputs: { border: "border", color: "color", end: "end", endWidth: "endWidth", linearGradient: "linearGradient", offset: "offset", position: "position", radialGradient: "radialGradient", start: "start", startWidth: "startWidth" }, usesInheritance: true, ngImport: i0 });
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
RangesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangesDirective, selector: "ej-lineargauge>e-axes>e-axis>e-ranges", queries: [{ propertyName: "children", predicate: RangeDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-lineargauge>e-axes>e-axis>e-ranges',
                    queries: {
                        children: new ContentChildren(RangeDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saW5lYXItZ2F1Z2UvcmFuZ2VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBSWhGLElBQUksS0FBSyxHQUFhLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQzlJLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztBQUMzQjs7Ozs7R0FLRztBQVNILE1BQU0sT0FBTyxjQUFlLFNBQVEsV0FBMkI7SUF1RDNELFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7MkdBNURRLGNBQWM7K0ZBQWQsY0FBYzsyRkFBZCxjQUFjO2tCQVIxQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsRUFFUjtpQkFDSjs7QUFnRUQ7OztHQUdHO0FBT0gsTUFBTSxPQUFPLGVBQWdCLFNBQVEsU0FBMEI7SUFDM0Q7UUFDSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7NEdBSFEsZUFBZTtnR0FBZixlQUFlLHNHQUhVLGNBQWM7MkZBR3ZDLGVBQWU7a0JBTjNCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHVDQUF1QztvQkFDakQsT0FBTyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxJQUFJLGVBQWUsQ0FBQyxjQUFjLENBQUM7cUJBQ2hEO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBDb250ZW50Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5cblxuXG5sZXQgaW5wdXQ6IHN0cmluZ1tdID0gWydib3JkZXInLCAnY29sb3InLCAnZW5kJywgJ2VuZFdpZHRoJywgJ2xpbmVhckdyYWRpZW50JywgJ29mZnNldCcsICdwb3NpdGlvbicsICdyYWRpYWxHcmFkaWVudCcsICdzdGFydCcsICdzdGFydFdpZHRoJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbi8qKlxuICogUmFuZ2VzIGRpcmVjdGl2ZVxuICogYGBgaHRtbFxuICogPGUtcmFuZ2VzPjxlLXJhbmdlPjwvZS1yYW5nZT48L2UtcmFuZ2VzPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1yYW5nZXM+ZS1yYW5nZScsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFJhbmdlRGlyZWN0aXZlIGV4dGVuZHMgQ29tcGxleEJhc2U8UmFuZ2VEaXJlY3RpdmU+IHtcbiAgICBwdWJsaWMgZGlyZWN0aXZlUHJvcExpc3Q6IGFueTtcblx0XG5cblxuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBvcHRpb25zIHRvIGN1c3RvbWl6ZSB0aGUgY29sb3IgYW5kIHdpZHRoIG9mIHRoZSBib3JkZXIgZm9yIHRoZSBheGlzIHJhbmdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBib3JkZXI6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgY29sb3Igb2YgdGhlIGF4aXMgcmFuZ2UuXG4gICAgICovXG4gICAgcHVibGljIGNvbG9yOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIGVuZCB2YWx1ZSBmb3IgdGhlIHJhbmdlIGluIGF4aXMuXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHB1YmxpYyBlbmQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgd2lkdGggb2YgdGhlIGVuZCBvZiB0aGUgcmFuZ2UgaW4gYXhpcy5cbiAgICAgKiBAZGVmYXVsdCAxMFxuICAgICAqL1xuICAgIHB1YmxpYyBlbmRXaWR0aDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBwcm9wZXJ0aWVzIHRvIHJlbmRlciBhIGxpbmVhciBncmFkaWVudCBmb3IgdGhlIHJhbmdlLiBcbiAgICAgKiBJZiBib3RoIGxpbmVhciBhbmQgcmFkaWFsIGdyYWRpZW50IGlzIHNldCwgdGhlbiB0aGUgbGluZWFyIGdyYWRpZW50IHdpbGwgYmUgcmVuZGVyZWQgaW4gdGhlIHJhbmdlLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgbGluZWFyR3JhZGllbnQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgdmFsdWUgdG8gcG9zaXRpb24gdGhlIHJhbmdlIGluIHRoZSBheGlzLlxuICAgICAqIEBkZWZhdWx0ICcwJ1xuICAgICAqL1xuICAgIHB1YmxpYyBvZmZzZXQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgcG9zaXRpb24gdG8gcGxhY2UgdGhlIHJhbmdlcyBpbiB0aGUgYXhpcy5cbiAgICAgKiBAZGVmYXVsdCBPdXRzaWRlXG4gICAgICovXG4gICAgcHVibGljIHBvc2l0aW9uOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIHByb3BlcnRpZXMgdG8gcmVuZGVyIGEgcmFkaWFsIGdyYWRpZW50IGZvciB0aGUgcmFuZ2UuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyByYWRpYWxHcmFkaWVudDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBzdGFydCB2YWx1ZSBmb3IgdGhlIHJhbmdlIGluIGF4aXMuXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGFydDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSB3aWR0aCBvZiB0aGUgc3RhcnQgb2YgdGhlIHJhbmdlIGluIGF4aXMuXG4gICAgICogQGRlZmF1bHQgMTBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhcnRXaWR0aDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogUmFuZ2UgQXJyYXkgRGlyZWN0aXZlXG4gKiBAcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2VqLWxpbmVhcmdhdWdlPmUtYXhlcz5lLWF4aXM+ZS1yYW5nZXMnLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oUmFuZ2VEaXJlY3RpdmUpXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VzRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPFJhbmdlc0RpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigncmFuZ2VzJyk7XG4gICAgfVxufSJdfQ==