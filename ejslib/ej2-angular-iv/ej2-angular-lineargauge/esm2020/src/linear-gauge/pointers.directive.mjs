import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['animationDuration', 'border', 'color', 'description', 'enableDrag', 'height', 'imageUrl', 'linearGradient', 'markerType', 'offset', 'opacity', 'placement', 'position', 'radialGradient', 'roundedCornerRadius', 'type', 'value', 'width'];
let outputs = [];
/**
 * Pointers directive
 * ```html
 * <e-pointers><e-pointer></e-pointer></e-pointers>
 * ```
 */
export class PointerDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
PointerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PointerDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PointerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PointerDirective, selector: "e-pointers>e-pointer", inputs: { animationDuration: "animationDuration", border: "border", color: "color", description: "description", enableDrag: "enableDrag", height: "height", imageUrl: "imageUrl", linearGradient: "linearGradient", markerType: "markerType", offset: "offset", opacity: "opacity", placement: "placement", position: "position", radialGradient: "radialGradient", roundedCornerRadius: "roundedCornerRadius", type: "type", value: "value", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PointerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-pointers>e-pointer',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Pointer Array Directive
 * @private
 */
export class PointersDirective extends ArrayBase {
    constructor() {
        super('pointers');
    }
}
PointersDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PointersDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PointersDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PointersDirective, selector: "ej-linear-gauge>e-axes>e-axis>e-pointers", queries: [{ propertyName: "children", predicate: PointerDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PointersDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-linear-gauge>e-axes>e-axis>e-pointers',
                    queries: {
                        children: new ContentChildren(PointerDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9pbnRlcnMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpbmVhci1nYXVnZS9wb2ludGVycy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUloRixJQUFJLEtBQUssR0FBYSxDQUFDLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNuUSxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFDM0I7Ozs7O0dBS0c7QUFTSCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsV0FBNkI7SUErRi9ELFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7NkdBcEdRLGdCQUFnQjtpR0FBaEIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBUjVCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxFQUVSO2lCQUNKOztBQXdHRDs7O0dBR0c7QUFPSCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsU0FBNEI7SUFDL0Q7UUFDSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7OEdBSFEsaUJBQWlCO2tHQUFqQixpQkFBaUIseUdBSFEsZ0JBQWdCOzJGQUd6QyxpQkFBaUI7a0JBTjdCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLDBDQUEwQztvQkFDcEQsT0FBTyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxJQUFJLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDbEQ7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcGxleEJhc2UsIEFycmF5QmFzZSwgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2FuaW1hdGlvbkR1cmF0aW9uJywgJ2JvcmRlcicsICdjb2xvcicsICdkZXNjcmlwdGlvbicsICdlbmFibGVEcmFnJywgJ2hlaWdodCcsICdpbWFnZVVybCcsICdsaW5lYXJHcmFkaWVudCcsICdtYXJrZXJUeXBlJywgJ29mZnNldCcsICdvcGFjaXR5JywgJ3BsYWNlbWVudCcsICdwb3NpdGlvbicsICdyYWRpYWxHcmFkaWVudCcsICdyb3VuZGVkQ29ybmVyUmFkaXVzJywgJ3R5cGUnLCAndmFsdWUnLCAnd2lkdGgnXTtcbmxldCBvdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuLyoqXG4gKiBQb2ludGVycyBkaXJlY3RpdmVcbiAqIGBgYGh0bWxcbiAqIDxlLXBvaW50ZXJzPjxlLXBvaW50ZXI+PC9lLXBvaW50ZXI+PC9lLXBvaW50ZXJzPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1wb2ludGVycz5lLXBvaW50ZXInLFxuICAgIGlucHV0czogaW5wdXQsXG4gICAgb3V0cHV0czogb3V0cHV0cywgICAgXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBQb2ludGVyRGlyZWN0aXZlIGV4dGVuZHMgQ29tcGxleEJhc2U8UG9pbnRlckRpcmVjdGl2ZT4ge1xuICAgIHB1YmxpYyBkaXJlY3RpdmVQcm9wTGlzdDogYW55O1xuXHRcblxuXG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIHR5cGUgb2YgcG9pbnRlciBpbiBheGlzLlxuICAgICAqIEBkZWZhdWx0IE1hcmtlclxuICAgICAqL1xuICAgIHB1YmxpYyB0eXBlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIGR1cmF0aW9uIG9mIGFuaW1hdGlvbiBpbiBwb2ludGVyLlxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICBwdWJsaWMgYW5pbWF0aW9uRHVyYXRpb246IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgb3B0aW9ucyB0byBvcHRpbWl6ZSB0aGUgY29sb3IgYW5kIHdpZHRoIG9mIHRoZSBib3JkZXIgZm9yIHBvaW50ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBib3JkZXI6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgY29sb3Igb2YgdGhlIHBvaW50ZXIuXG4gICAgICovXG4gICAgcHVibGljIGNvbG9yOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIGRlc2NyaXB0aW9uIGZvciB0aGUgcG9pbnRlci5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIGRyYWcgbW92ZW1lbnQgb2YgcG9pbnRlci5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBlbmFibGVEcmFnOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIGhlaWdodCBvZiB0aGUgcG9pbnRlci5cbiAgICAgKiBAZGVmYXVsdCAyMFxuICAgICAqL1xuICAgIHB1YmxpYyBoZWlnaHQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgVVJMIHBhdGggZm9yIHRoZSBpbWFnZSBpbiBtYXJrZXIgd2hlbiB0aGUgbWFya2VyIHR5cGUgaXMgY2hvc2VuIGFzIGltYWdlLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgaW1hZ2VVcmw6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgcHJvcGVydGllcyB0byByZW5kZXIgYSBsaW5lYXIgZ3JhZGllbnQgZm9yIHRoZSBwb2ludGVyLiBcbiAgICAgKiBJZiBib3RoIGxpbmVhciBhbmQgcmFkaWFsIGdyYWRpZW50IGlzIHNldCwgdGhlbiB0aGUgbGluZWFyIGdyYWRpZW50IHdpbGwgYmUgcmVuZGVyZWQgaW4gdGhlIHBvaW50ZXIuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBsaW5lYXJHcmFkaWVudDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSB0eXBlIG9mIHRoZSBtYXJrZXIgZm9yIHBvaW50ZXJzIGluIGF4aXMuXG4gICAgICogQGRlZmF1bHQgSW52ZXJ0ZWRUcmlhbmdsZVxuICAgICAqL1xuICAgIHB1YmxpYyBtYXJrZXJUeXBlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIHZhbHVlIHRvIHBvc2l0aW9uIHRoZSBwb2ludGVyIGZyb20gdGhlIGF4aXMuXG4gICAgICogQGRlZmF1bHQgJzAnXG4gICAgICovXG4gICAgcHVibGljIG9mZnNldDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBvcGFjaXR5IG9mIHBvaW50ZXIgaW4gbGluZWFyIGdhdWdlLlxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICBwdWJsaWMgb3BhY2l0eTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBwbGFjZSBvZiB0aGUgcG9pbnRlci5cbiAgICAgKiBAZGVmYXVsdCBGYXJcbiAgICAgKi9cbiAgICBwdWJsaWMgcGxhY2VtZW50OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBwb2ludGVyLlxuICAgICAqIEBkZWZhdWx0IEF1dG9cbiAgICAgKi9cbiAgICBwdWJsaWMgcG9zaXRpb246IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgcHJvcGVydGllcyB0byByZW5kZXIgYSByYWRpYWwgZ3JhZGllbnQgZm9yIHRoZSBwb2ludGVyLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgcmFkaWFsR3JhZGllbnQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgY29ybmVyIHJhZGl1cyBmb3IgcG9pbnRlci5cbiAgICAgKiBAZGVmYXVsdCAxMFxuICAgICAqL1xuICAgIHB1YmxpYyByb3VuZGVkQ29ybmVyUmFkaXVzOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIHZhbHVlIG9mIHRoZSBwb2ludGVyIGluIGF4aXMuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyB2YWx1ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSB3aWR0aCBvZiB0aGUgcG9pbnRlci5cbiAgICAgKiBAZGVmYXVsdCAyMFxuICAgICAqL1xuICAgIHB1YmxpYyB3aWR0aDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogUG9pbnRlciBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZWotbGluZWFyLWdhdWdlPmUtYXhlcz5lLWF4aXM+ZS1wb2ludGVycycsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZHJlbjogbmV3IENvbnRlbnRDaGlsZHJlbihQb2ludGVyRGlyZWN0aXZlKVxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFBvaW50ZXJzRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPFBvaW50ZXJzRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdwb2ludGVycycpO1xuICAgIH1cbn0iXX0=