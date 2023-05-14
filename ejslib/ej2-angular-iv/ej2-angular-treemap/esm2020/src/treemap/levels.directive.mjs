import { __decorate } from "tslib";
import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import { ColorMappingsDirective } from './colormapping.directive';
import * as i0 from "@angular/core";
let input = ['autoFill', 'border', 'colorMapping', 'fill', 'groupGap', 'groupPadding', 'groupPath', 'headerAlignment', 'headerFormat', 'headerHeight', 'headerStyle', 'headerTemplate', 'opacity', 'showHeader', 'templatePosition'];
let outputs = [];
/**
 * Level Directive
 * ```html
 * <e-levels>
 * <e-level></e-level>
 * </e-levels>
 * ```
 */
export class LevelDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['colorMapping'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
LevelDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LevelDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
LevelDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: LevelDirective, selector: "e-levels>e-level", inputs: { autoFill: "autoFill", border: "border", colorMapping: "colorMapping", fill: "fill", groupGap: "groupGap", groupPadding: "groupPadding", groupPath: "groupPath", headerAlignment: "headerAlignment", headerFormat: "headerFormat", headerHeight: "headerHeight", headerStyle: "headerStyle", headerTemplate: "headerTemplate", opacity: "opacity", showHeader: "showHeader", templatePosition: "templatePosition" }, queries: [{ propertyName: "headerTemplate", first: true, predicate: ["headerTemplate"], descendants: true }, { propertyName: "childColorMapping", first: true, predicate: ColorMappingsDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], LevelDirective.prototype, "headerTemplate", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LevelDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-levels>e-level',
                    inputs: input,
                    outputs: outputs,
                    queries: {
                        childColorMapping: new ContentChild(ColorMappingsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { headerTemplate: [{
                type: ContentChild,
                args: ['headerTemplate']
            }] } });
/**
 * Level Array Directive
 * @private
 */
export class LevelsDirective extends ArrayBase {
    constructor() {
        super('levels');
    }
}
LevelsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LevelsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
LevelsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: LevelsDirective, selector: "ej-treemap>e-levels", queries: [{ propertyName: "children", predicate: LevelDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LevelsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-treemap>e-levels',
                    queries: {
                        children: new ContentChildren(LevelDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV2ZWxzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmVlbWFwL2xldmVscy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUVsRSxJQUFJLEtBQUssR0FBYSxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDL08sSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7Ozs7O0dBT0c7QUFTSCxNQUFNLE9BQU8sY0FBZSxTQUFRLFdBQTJCO0lBaUYzRCxZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBN0U5QyxTQUFJLEdBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQStFckMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7MkdBdEZRLGNBQWM7K0ZBQWQsY0FBYyx3bUJBSGlCLHNCQUFzQjtBQWtGOUQ7SUFEQyxRQUFRLEVBQUU7c0RBQ2dCOzJGQS9FbEIsY0FBYztrQkFSMUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFO3dCQUNMLGlCQUFpQixFQUFFLElBQUksWUFBWSxDQUFDLHNCQUFzQixDQUFDO3FCQUM5RDtpQkFDSjt1R0FnRlUsY0FBYztzQkFGcEIsWUFBWTt1QkFBQyxnQkFBZ0I7O0FBWWxDOzs7R0FHRztBQU9ILE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQTBCO0lBQzNEO1FBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7OzRHQUhRLGVBQWU7Z0dBQWYsZUFBZSxvRkFIVSxjQUFjOzJGQUd2QyxlQUFlO2tCQU4zQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMsY0FBYyxDQUFDO3FCQUNoRDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgQ29sb3JNYXBwaW5nc0RpcmVjdGl2ZSB9IGZyb20gJy4vY29sb3JtYXBwaW5nLmRpcmVjdGl2ZSc7XG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2F1dG9GaWxsJywgJ2JvcmRlcicsICdjb2xvck1hcHBpbmcnLCAnZmlsbCcsICdncm91cEdhcCcsICdncm91cFBhZGRpbmcnLCAnZ3JvdXBQYXRoJywgJ2hlYWRlckFsaWdubWVudCcsICdoZWFkZXJGb3JtYXQnLCAnaGVhZGVySGVpZ2h0JywgJ2hlYWRlclN0eWxlJywgJ2hlYWRlclRlbXBsYXRlJywgJ29wYWNpdHknLCAnc2hvd0hlYWRlcicsICd0ZW1wbGF0ZVBvc2l0aW9uJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbi8qKlxuICogTGV2ZWwgRGlyZWN0aXZlXG4gKiBgYGBodG1sXG4gKiA8ZS1sZXZlbHM+XG4gKiA8ZS1sZXZlbD48L2UtbGV2ZWw+XG4gKiA8L2UtbGV2ZWxzPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1sZXZlbHM+ZS1sZXZlbCcsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkQ29sb3JNYXBwaW5nOiBuZXcgQ29udGVudENoaWxkKENvbG9yTWFwcGluZ3NEaXJlY3RpdmUpXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBMZXZlbERpcmVjdGl2ZSBleHRlbmRzIENvbXBsZXhCYXNlPExldmVsRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdFxuICAgIHB1YmxpYyBjaGlsZENvbG9yTWFwcGluZzogYW55O1xuICAgIHB1YmxpYyB0YWdzOiBzdHJpbmdbXSA9IFsnY29sb3JNYXBwaW5nJ107XG4gICAgLyoqIFxuICAgICAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIGF1dG9tYXRpYyBmaWxsaW5nIG9mIHRoZSBjb2xvcnMgaW4gdGhlIGl0ZW1zIGluIHRoZSB0cmVlbWFwIGNvbXBvbmVudC5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBhdXRvRmlsbDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBvcHRpb25zIGZvciBjdXN0b21pemluZyB0aGUgY29sb3IgYW5kIHdpZHRoIG9mIHRoZSBib3JkZXIgb2YgXG4gICAgICogdGhlIGxldmVscyBvZiB0aGUgdHJlZW1hcCBjb21wb25lbnQuXG4gICAgICovXG4gICAgcHVibGljIGJvcmRlcjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBvcHRpb25zIGZvciBjdXN0b21pemluZyB0aGUgY29sb3ItbWFwcGluZyBpbiB0aGUgdHJlZW1hcCBjb21wb25lbnQuXG4gICAgICovXG4gICAgcHVibGljIGNvbG9yTWFwcGluZzogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBmaWxsIGNvbG9yIG9mIHRoZSBsZXZlbCBpbiB0aGUgdHJlZW1hcCBjb21wb25lbnQuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBmaWxsOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIGdhcCBiZXR3ZWVuIHRoZSBsZXZlbHMgaW4gdGhlIHRyZWVtYXAgY29tcG9uZW50LlxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBHYXA6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgcGFkZGluZyBvZiBsZXZlbHMgaW4gdGhlIHRyZWVtYXAgY29tcG9uZW50LlxuICAgICAqIEBkZWZhdWx0IDEwXG4gICAgICovXG4gICAgcHVibGljIGdyb3VwUGFkZGluZzogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSB2YWx1ZSBwYXRoIGZyb20gdGhlIGRhdGEgc291cmNlIGluIHRoZSB0cmVlbWFwIGNvbXBvbmVudCB0byByZW5kZXIgdGhlIGl0ZW0uXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBncm91cFBhdGg6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgYWxpZ25tZW50IG9mIHRoZSBoZWFkZXIgb2YgdGhlIHRyZWVtYXAgY29tcG9uZW50LlxuICAgICAqIEBkZWZhdWx0ICdOZWFyJ1xuICAgICAqL1xuICAgIHB1YmxpYyBoZWFkZXJBbGlnbm1lbnQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgZm9ybWF0IG9mIGhlYWRlciBvZiB0aGUgbGV2ZWxzIGluIHRoZSB0cmVlbWFwIGNvbXBvbmVudC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIGhlYWRlckZvcm1hdDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBoZWlnaHQgb2YgaGVhZGVyIGluIHRoZSB0cmVlbWFwIGNvbXBvbmVudC5cbiAgICAgKiBAZGVmYXVsdCAyMFxuICAgICAqL1xuICAgIHB1YmxpYyBoZWFkZXJIZWlnaHQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgb3B0aW9ucyBmb3IgY3VzdG9taXppbmcgdGhlIHN0eWxlIG9mIGhlYWRlciBvZiB0aGUgdHJlZW1hcCBjb21wb25lbnQuXG4gICAgICovXG4gICAgcHVibGljIGhlYWRlclN0eWxlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIG9wYWNpdHkgaW4gdGhlIHRyZWVtYXAgY29tcG9uZW50LlxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICBwdWJsaWMgb3BhY2l0eTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTaG93cyBvciBoaWRlcyB0aGUgaGVhZGVyIGluIGxldmVsIG9mIHRoZSB0cmVlbWFwIGNvbXBvbmVudC5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgcHVibGljIHNob3dIZWFkZXI6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgb3B0aW9ucyBmb3IgY3VzdG9taXppbmcgdGhlIHRlbXBsYXRlIHBvc2l0aW9uIG9mIHRoZSB0cmVlbWFwIGNvbXBvbmVudC5cbiAgICAgKiBAZGVmYXVsdCAnVG9wTGVmdCdcbiAgICAgKi9cbiAgICBwdWJsaWMgdGVtcGxhdGVQb3NpdGlvbjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSB0ZW1wbGF0ZSBmb3IgaGVhZGVyIGluIHRoZSB0cmVlbWFwIGNvbXBvbmVudC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnaGVhZGVyVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGhlYWRlclRlbXBsYXRlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBMZXZlbCBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZWotdHJlZW1hcD5lLWxldmVscycsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZHJlbjogbmV3IENvbnRlbnRDaGlsZHJlbihMZXZlbERpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBMZXZlbHNEaXJlY3RpdmUgZXh0ZW5kcyBBcnJheUJhc2U8TGV2ZWxzRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdsZXZlbHMnKTtcbiAgICB9XG59Il19