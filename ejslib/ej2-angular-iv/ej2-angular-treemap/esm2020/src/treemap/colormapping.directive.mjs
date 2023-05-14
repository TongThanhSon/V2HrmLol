import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['color', 'from', 'label', 'maxOpacity', 'minOpacity', 'showLegend', 'to', 'value'];
let outputs = [];
export class ColorMappingDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
ColorMappingDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColorMappingDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ColorMappingDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColorMappingDirective, selector: "e-levels>e-colorMappings>e-colorMapping", inputs: { color: "color", from: "from", label: "label", maxOpacity: "maxOpacity", minOpacity: "minOpacity", showLegend: "showLegend", to: "to", value: "value" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColorMappingDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-levels>e-colorMappings>e-colorMapping',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * ColorMapping Array Directive
 * @private
 */
export class ColorMappingsDirective extends ArrayBase {
    constructor() {
        super('colormapping');
    }
}
ColorMappingsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColorMappingsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ColorMappingsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColorMappingsDirective, selector: "e-levels>e-colorMappings", queries: [{ propertyName: "children", predicate: ColorMappingDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColorMappingsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-levels>e-colorMappings',
                    queries: {
                        children: new ContentChildren(ColorMappingDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JtYXBwaW5nLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmVlbWFwL2NvbG9ybWFwcGluZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUloRixJQUFJLEtBQUssR0FBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMxRyxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFVM0IsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFdBQWtDO0lBOEN6RSxZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRWpELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7O2tIQW5EUSxxQkFBcUI7c0dBQXJCLHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQVJqQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSx5Q0FBeUM7b0JBQ25ELE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsRUFFUjtpQkFDSjs7QUF1REQ7OztHQUdHO0FBT0gsTUFBTSxPQUFPLHNCQUF1QixTQUFRLFNBQWlDO0lBQ3pFO1FBQ0ksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7O21IQUhRLHNCQUFzQjt1R0FBdEIsc0JBQXNCLHlGQUhHLHFCQUFxQjsyRkFHOUMsc0JBQXNCO2tCQU5sQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMscUJBQXFCLENBQUM7cUJBQ3ZEO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBDb250ZW50Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5cblxuXG5sZXQgaW5wdXQ6IHN0cmluZ1tdID0gWydjb2xvcicsICdmcm9tJywgJ2xhYmVsJywgJ21heE9wYWNpdHknLCAnbWluT3BhY2l0eScsICdzaG93TGVnZW5kJywgJ3RvJywgJ3ZhbHVlJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlLWxldmVscz5lLWNvbG9yTWFwcGluZ3M+ZS1jb2xvck1hcHBpbmcnLFxuICAgIGlucHV0czogaW5wdXQsXG4gICAgb3V0cHV0czogb3V0cHV0cywgICAgXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvck1hcHBpbmdEaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxDb2xvck1hcHBpbmdEaXJlY3RpdmU+IHtcbiAgICBwdWJsaWMgZGlyZWN0aXZlUHJvcExpc3Q6IGFueTtcblx0XG5cblxuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBjb2xvciBmb3IgdGhlIGNvbG9yLW1hcHBpbmcgaW4gdHJlZW1hcC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIGNvbG9yOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIHZhbHVlIGZyb20gd2hpY2ggdGhlIHJhbmdlIG9mIGNvbG9yIG1hcHBpbmcgc3RhcnRzLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgZnJvbTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBsYWJlbCB0ZXh0IGZvciB0aGUgbGVnZW5kIGJhc2VkIG9uIGNvbG9yIG1hcHBpbmcuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBsYWJlbDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBtYXhpbXVtIG9wYWNpdHkgZm9yIHRoZSBjb2xvci1tYXBwaW5nIGluIHRoZSB0cmVlbWFwIGNvbXBvbmVudC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIG1heE9wYWNpdHk6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgbWluaW11bSBvcGFjaXR5IGZvciB0aGUgY29sb3ItbWFwcGluZyBpbiB0aGUgdHJlZW1hcCBjb21wb25lbnQuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBtaW5PcGFjaXR5OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGxlZ2VuZCBmb3IgY29sb3IgbWFwcGluZyBpbiB0aGUgdHJlZW1hcCBjb21wb25lbnQuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzaG93TGVnZW5kOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIHZhbHVlIHRvIHdoaWNoIHRoZSByYW5nZSBvZiBjb2xvciBtYXBwaW5nIGVuZHMuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyB0bzogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSB2YWx1ZSBmb3IgdGhlIGNvbG9yLW1hcHBpbmcgZnJvbSB0aGUgZGF0YSBzb3VyY2UuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyB2YWx1ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogQ29sb3JNYXBwaW5nIEFycmF5IERpcmVjdGl2ZVxuICogQHByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlLWxldmVscz5lLWNvbG9yTWFwcGluZ3MnLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oQ29sb3JNYXBwaW5nRGlyZWN0aXZlKVxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yTWFwcGluZ3NEaXJlY3RpdmUgZXh0ZW5kcyBBcnJheUJhc2U8Q29sb3JNYXBwaW5nc0RpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignY29sb3JtYXBwaW5nJyk7XG4gICAgfVxufSJdfQ==