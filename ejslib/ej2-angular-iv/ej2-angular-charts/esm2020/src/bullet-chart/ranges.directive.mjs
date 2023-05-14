import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['color', 'end', 'index', 'legendImageUrl', 'name', 'opacity', 'shape'];
let outputs = [];
/**
 * BulletRange Directive
 * ```html
 * <e-bullet-range-collection>
 * <e-bullet-range></e-bullet-range>
 * </e-bullet-range-collection>
 * ```
 */
export class BulletRangeDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
BulletRangeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletRangeDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
BulletRangeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: BulletRangeDirective, selector: "e-bullet-range-collection>e-bullet-range", inputs: { color: "color", end: "end", index: "index", legendImageUrl: "legendImageUrl", name: "name", opacity: "opacity", shape: "shape" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletRangeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-bullet-range-collection>e-bullet-range',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * BulletRange Array Directive
 * @private
 */
export class BulletRangeCollectionDirective extends ArrayBase {
    constructor() {
        super('ranges');
    }
}
BulletRangeCollectionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletRangeCollectionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BulletRangeCollectionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: BulletRangeCollectionDirective, selector: "ej-bulletchart>e-bullet-range-collection", queries: [{ propertyName: "children", predicate: BulletRangeDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletRangeCollectionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-bulletchart>e-bullet-range-collection',
                    queries: {
                        children: new ContentChildren(BulletRangeDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9idWxsZXQtY2hhcnQvcmFuZ2VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBSWhGLElBQUksS0FBSyxHQUFhLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM5RixJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFDM0I7Ozs7Ozs7R0FPRztBQVNILE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxXQUFpQztJQW9EdkUsWUFBb0IsZ0JBQWlDO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBRFEscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUVqRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOztpSEF6RFEsb0JBQW9CO3FHQUFwQixvQkFBb0I7MkZBQXBCLG9CQUFvQjtrQkFSaEMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsMENBQTBDO29CQUNwRCxNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLEVBRVI7aUJBQ0o7O0FBNkREOzs7R0FHRztBQU9ILE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxTQUF5QztJQUN6RjtRQUNJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQixDQUFDOzsySEFIUSw4QkFBOEI7K0dBQTlCLDhCQUE4Qix5R0FITCxvQkFBb0I7MkZBRzdDLDhCQUE4QjtrQkFOMUMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsMENBQTBDO29CQUNwRCxPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLG9CQUFvQixDQUFDO3FCQUN0RDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV4QmFzZSwgQXJyYXlCYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cblxubGV0IGlucHV0OiBzdHJpbmdbXSA9IFsnY29sb3InLCAnZW5kJywgJ2luZGV4JywgJ2xlZ2VuZEltYWdlVXJsJywgJ25hbWUnLCAnb3BhY2l0eScsICdzaGFwZSddO1xubGV0IG91dHB1dHM6IHN0cmluZ1tdID0gW107XG4vKipcbiAqIEJ1bGxldFJhbmdlIERpcmVjdGl2ZVxuICogYGBgaHRtbFxuICogPGUtYnVsbGV0LXJhbmdlLWNvbGxlY3Rpb24+XG4gKiA8ZS1idWxsZXQtcmFuZ2U+PC9lLWJ1bGxldC1yYW5nZT5cbiAqIDwvZS1idWxsZXQtcmFuZ2UtY29sbGVjdGlvbj5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2UtYnVsbGV0LXJhbmdlLWNvbGxlY3Rpb24+ZS1idWxsZXQtcmFuZ2UnLFxuICAgIGlucHV0czogaW5wdXQsXG4gICAgb3V0cHV0czogb3V0cHV0cywgICAgXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBCdWxsZXRSYW5nZURpcmVjdGl2ZSBleHRlbmRzIENvbXBsZXhCYXNlPEJ1bGxldFJhbmdlRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdFxuXG5cbiAgICAvKiogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBmb3IgcXVhbGl0YXRpdmUgcmFuZ2UgQ29sb3JcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIGNvbG9yOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgZm9yIHF1YWxpdGF0aXZlIHJhbmdlIGVuZCB2YWx1ZVxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgZW5kOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgZm9yIHF1YWxpdGF0aXZlIHJhbmdlIENvbG9yXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBpbmRleDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUaGUgVVJMIGZvciB0aGUgSW1hZ2UgdGhhdCBpcyB0byBiZSBkaXNwbGF5ZWQgYXMgYSBMZWdlbmQgaWNvbi4gIEl0IHJlcXVpcmVzICBgbGVnZW5kU2hhcGVgIHZhbHVlIHRvIGJlIGFuIGBJbWFnZWAuXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgbGVnZW5kSW1hZ2VVcmw6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBmb3IgcXVhbGl0YXRpdmUgcmFuZ2UgbmFtZVxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBSYW5nZSBvcGFjaXR5XG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuICAgIHB1YmxpYyBvcGFjaXR5OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFRoZSBzaGFwZSBvZiB0aGUgbGVnZW5kLiBFYWNoIHJhbmdlcyBoYXMgaXRzIG93biBsZWdlbmQgc2hhcGUuIFRoZXkgYXJlLCBcbiAgICAgKiAqIENpcmNsZSBcbiAgICAgKiAqIFJlY3RhbmdsZSBcbiAgICAgKiAqIFRyaWFuZ2xlIFxuICAgICAqICogRGlhbW9uZCBcbiAgICAgKiAqIENyb3NzIFxuICAgICAqICogSG9yaXpvbnRhbExpbmUgXG4gICAgICogKiBWZXJ0aWNhbExpbmUgXG4gICAgICogKiBQZW50YWdvbiBcbiAgICAgKiAqIEludmVydGVkVHJpYW5nbGUgXG4gICAgICogKiBTZXJpZXNUeXBlIFxuICAgICAqICogSW1hZ2VcbiAgICAgKiBAZGVmYXVsdCAnUmVjdGFuZ2xlJ1xuICAgICAqL1xuICAgIHB1YmxpYyBzaGFwZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogQnVsbGV0UmFuZ2UgQXJyYXkgRGlyZWN0aXZlXG4gKiBAcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2VqLWJ1bGxldGNoYXJ0PmUtYnVsbGV0LXJhbmdlLWNvbGxlY3Rpb24nLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oQnVsbGV0UmFuZ2VEaXJlY3RpdmUpXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgQnVsbGV0UmFuZ2VDb2xsZWN0aW9uRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPEJ1bGxldFJhbmdlQ29sbGVjdGlvbkRpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigncmFuZ2VzJyk7XG4gICAgfVxufSJdfQ==