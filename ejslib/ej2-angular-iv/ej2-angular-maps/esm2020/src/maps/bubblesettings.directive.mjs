import { __decorate } from "tslib";
import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import { ColorMappingsDirective } from './colormapping.directive';
import * as i0 from "@angular/core";
let input = ['animationDelay', 'animationDuration', 'border', 'bubbleType', 'colorMapping', 'colorValuePath', 'dataSource', 'fill', 'highlightSettings', 'maxRadius', 'minRadius', 'opacity', 'query', 'selectionSettings', 'tooltipSettings', 'valuePath', 'visible'];
let outputs = [];
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-bubbleSetting>
 * </e-bubbleSetting>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
export class BubbleDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['colorMapping'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
BubbleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BubbleDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
BubbleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: BubbleDirective, selector: "e-layer>e-bubbleSettings>e-bubbleSetting", inputs: { animationDelay: "animationDelay", animationDuration: "animationDuration", border: "border", bubbleType: "bubbleType", colorMapping: "colorMapping", colorValuePath: "colorValuePath", dataSource: "dataSource", fill: "fill", highlightSettings: "highlightSettings", maxRadius: "maxRadius", minRadius: "minRadius", opacity: "opacity", query: "query", selectionSettings: "selectionSettings", tooltipSettings: "tooltipSettings", valuePath: "valuePath", visible: "visible" }, queries: [{ propertyName: "tooltipSettings_template", first: true, predicate: ["tooltipSettingsTemplate"], descendants: true }, { propertyName: "childColorMapping", first: true, predicate: ColorMappingsDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], BubbleDirective.prototype, "tooltipSettings_template", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BubbleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-layer>e-bubbleSettings>e-bubbleSetting',
                    inputs: input,
                    outputs: outputs,
                    queries: {
                        childColorMapping: new ContentChild(ColorMappingsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { tooltipSettings_template: [{
                type: ContentChild,
                args: ['tooltipSettingsTemplate']
            }] } });
/**
 * Bubble Array Directive
 * @private
 */
export class BubblesDirective extends ArrayBase {
    constructor() {
        super('bubblesettings');
    }
}
BubblesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BubblesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BubblesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: BubblesDirective, selector: "e-layer>e-bubbleSettings", queries: [{ propertyName: "children", predicate: BubbleDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BubblesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-layer>e-bubbleSettings',
                    queries: {
                        children: new ContentChildren(BubbleDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlc2V0dGluZ3MuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21hcHMvYnViYmxlc2V0dGluZ3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFbEUsSUFBSSxLQUFLLEdBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDalIsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7Ozs7Ozs7Ozs7R0FZRztBQVNILE1BQU0sT0FBTyxlQUFnQixTQUFRLFdBQTRCO0lBK0Y3RCxZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBM0Y5QyxTQUFJLEdBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQTZGckMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7NEdBcEdRLGVBQWU7Z0dBQWYsZUFBZSxtdEJBSGdCLHNCQUFzQjtBQWdHOUQ7SUFEQyxRQUFRLEVBQUU7aUVBQzBCOzJGQTdGNUIsZUFBZTtrQkFSM0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsMENBQTBDO29CQUNwRCxNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFO3dCQUNMLGlCQUFpQixFQUFFLElBQUksWUFBWSxDQUFDLHNCQUFzQixDQUFDO3FCQUM5RDtpQkFDSjt1R0E4RlUsd0JBQXdCO3NCQUY5QixZQUFZO3VCQUFDLHlCQUF5Qjs7QUFZM0M7OztHQUdHO0FBT0gsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFNBQTJCO0lBQzdEO1FBQ0ksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDNUIsQ0FBQzs7NkdBSFEsZ0JBQWdCO2lHQUFoQixnQkFBZ0IseUZBSFMsZUFBZTsyRkFHeEMsZ0JBQWdCO2tCQU41QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMsZUFBZSxDQUFDO3FCQUNqRDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgQ29sb3JNYXBwaW5nc0RpcmVjdGl2ZSB9IGZyb20gJy4vY29sb3JtYXBwaW5nLmRpcmVjdGl2ZSc7XG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2FuaW1hdGlvbkRlbGF5JywgJ2FuaW1hdGlvbkR1cmF0aW9uJywgJ2JvcmRlcicsICdidWJibGVUeXBlJywgJ2NvbG9yTWFwcGluZycsICdjb2xvclZhbHVlUGF0aCcsICdkYXRhU291cmNlJywgJ2ZpbGwnLCAnaGlnaGxpZ2h0U2V0dGluZ3MnLCAnbWF4UmFkaXVzJywgJ21pblJhZGl1cycsICdvcGFjaXR5JywgJ3F1ZXJ5JywgJ3NlbGVjdGlvblNldHRpbmdzJywgJ3Rvb2x0aXBTZXR0aW5ncycsICd2YWx1ZVBhdGgnLCAndmlzaWJsZSddO1xubGV0IG91dHB1dHM6IHN0cmluZ1tdID0gW107XG4vKipcbiAqIExheWVyIERpcmVjdGl2ZVxuICogYGBgaHRtbFxuICogPGUtbGF5ZXJzPlxuICogPGUtbGF5ZXI+XG4gKiA8ZS1idWJibGVTZXR0aW5ncz5cbiAqIDxlLWJ1YmJsZVNldHRpbmc+XG4gKiA8L2UtYnViYmxlU2V0dGluZz5cbiAqIDwvZS1idWJibGVTZXR0aW5ncz5cbiAqIDwvZS1sYXllcj5cbiAqIDwvZS1sYXllcnM+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlLWxheWVyPmUtYnViYmxlU2V0dGluZ3M+ZS1idWJibGVTZXR0aW5nJyxcbiAgICBpbnB1dHM6IGlucHV0LFxuICAgIG91dHB1dHM6IG91dHB1dHMsICAgIFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRDb2xvck1hcHBpbmc6IG5ldyBDb250ZW50Q2hpbGQoQ29sb3JNYXBwaW5nc0RpcmVjdGl2ZSlcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIEJ1YmJsZURpcmVjdGl2ZSBleHRlbmRzIENvbXBsZXhCYXNlPEJ1YmJsZURpcmVjdGl2ZT4ge1xuICAgIHB1YmxpYyBkaXJlY3RpdmVQcm9wTGlzdDogYW55O1xuXHRcbiAgICBwdWJsaWMgY2hpbGRDb2xvck1hcHBpbmc6IGFueTtcbiAgICBwdWJsaWMgdGFnczogc3RyaW5nW10gPSBbJ2NvbG9yTWFwcGluZyddO1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBkZWxheSBpbiBhbmltYXRpb24gZm9yIGJ1YmJsZSBpbiBtYXBzLlxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICBwdWJsaWMgYW5pbWF0aW9uRGVsYXk6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgZHVyYXRpb24gZm9yIHRoZSBhbmltYXRpb24gZm9yIGJ1YmJsZSBpbiBtYXBzLlxuICAgICAqIEBkZWZhdWx0IDEwMDBcbiAgICAgKi9cbiAgICBwdWJsaWMgYW5pbWF0aW9uRHVyYXRpb246IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgb3B0aW9ucyB0byBjdXN0b21pemUgdGhlIGNvbG9yIGFuZCB3aWR0aCBvZiB0aGUgYm9yZGVyIGZvciB0aGUgYnViYmxlIGluIG1hcHMuXG4gICAgICovXG4gICAgcHVibGljIGJvcmRlcjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSB0eXBlIG9mIHRoZSBidWJibGUgaW4gbWFwcy5cbiAgICAgKiBAZGVmYXVsdCBDaXJjbGVcbiAgICAgKi9cbiAgICBwdWJsaWMgYnViYmxlVHlwZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBjb2xvci1tYXBwaW5nIGZvciB0aGUgYnViYmxlIGluIG1hcHMuXG4gICAgICogQGRlZmF1bHQgW11cbiAgICAgKi9cbiAgICBwdWJsaWMgY29sb3JNYXBwaW5nOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIHZhbHVlIGZyb20gdGhlIGRhdGEgc291cmNlIG9mIGJ1YmJsZSBzZXR0aW5ncyBmb3IgdGhlIGNvbG9yIG9mIHRoZSBidWJibGUgaW4gbWFwcy5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIGNvbG9yVmFsdWVQYXRoOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIGRhdGEgc291cmNlIGZvciB0aGUgYnViYmxlLiBcbiAgICAgKiBUaGUgZGF0YSBzb3VyY2UgbXVzdCBjb250YWluIHRoZSBzaXplIHZhbHVlIG9mIHRoZSBidWJibGUgdGhhdCBjYW4gYmUgYm91bmQgdG8gdGhlIGJ1YmJsZSBcbiAgICAgKiBvZiB0aGUgTWFwcyB1c2luZyB0aGUgdmFsdWVQYXRoIHByb3BlcnR5IGluIHRoZSBidWJibGVTZXR0aW5ncy4gXG4gICAgICogVGhlIGRhdGEgc291cmNlIGNhbiBjb250YWluIGRhdGEgc3VjaCBhcyBjb2xvciwgYW5kIHRoZSBvdGhlciBpbmZvcm1hdGlvbiB0aGF0IGNhbiBiZSBib3VuZCB0byB0aGUgYnViYmxlLCBhbmQgdG9vbHRpcCBvZiB0aGUgYnViYmxlLlxuICAgICAqIEBpc29ic2VydmFibGUgdHJ1ZVxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG4gICAgcHVibGljIGRhdGFTb3VyY2U6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgY29sb3IgZm9yIHRoZSBidWJibGUgaW4gbWFwcy5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyBmaWxsOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIGhpZ2hsaWdodCBzZXR0aW5ncyBmb3IgdGhlIGJ1YmJsZSBpbiBtYXBzLlxuICAgICAqL1xuICAgIHB1YmxpYyBoaWdobGlnaHRTZXR0aW5nczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBtYXhpbXVtIHJhZGl1cyBmb3IgdGhlIGJ1YmJsZSBpbiBtYXBzLlxuICAgICAqIEBkZWZhdWx0IDIwXG4gICAgICovXG4gICAgcHVibGljIG1heFJhZGl1czogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBtaW5pbXVtIHJhZGl1cyBmb3IgdGhlIGJ1YmJsZSBpbiBtYXBzLlxuICAgICAqIEBkZWZhdWx0IDEwXG4gICAgICovXG4gICAgcHVibGljIG1pblJhZGl1czogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBvcGFjaXR5IG9mIHRoZSBidWJibGUgaW4gbWFwcy5cbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG4gICAgcHVibGljIG9wYWNpdHk6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgcXVlcnkgdG8gc2VsZWN0IHBhcnRpY3VsYXIgZGF0YSBmcm9tIHRoZSBidWJibGUgZGF0YS4gXG4gICAgICogVGhpcyBwcm9wZXJ0eSBpcyBhcHBsaWNhYmxlIG9ubHkgd2hlbiB0aGUgZGF0YSBzb3VyY2UgaXMgY3JlYXRlZCBieSBkYXRhIG1hbmFnZXIuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBxdWVyeTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBzZWxlY3Rpb24gc2V0dGluZ3MgZm9yIHRoZSBidWJibGUgaW4gbWFwcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0aW9uU2V0dGluZ3M6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgb3B0aW9ucyB0byBjdXN0b21pemUgdGhlIHRvb2x0aXAgZm9yIHRoZSBidWJibGVzIGluIG1hcHMuXG4gICAgICovXG4gICAgcHVibGljIHRvb2x0aXBTZXR0aW5nczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSB2YWx1ZSBmcm9tIHRoZSBkYXRhIHNvdXJjZSBvZiBidWJibGUgc2V0dGluZ3MgZm9yIHRoZSBidWJibGUgdG8gYmUgcmVuZGVyZWQgaW4gbWFwcy5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIHZhbHVlUGF0aDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSB2aXNpYmlsaXR5IHN0YXRlIG9mIHRoZSBidWJibGVzIGluIG1hcHMuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgdmlzaWJsZTogYW55O1xuICAgIEBDb250ZW50Q2hpbGQoJ3Rvb2x0aXBTZXR0aW5nc1RlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyB0b29sdGlwU2V0dGluZ3NfdGVtcGxhdGU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZVByb3BMaXN0ID0gaW5wdXQ7XG4gICAgfVxufVxuXG4vKipcbiAqIEJ1YmJsZSBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1sYXllcj5lLWJ1YmJsZVNldHRpbmdzJyxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXcgQ29udGVudENoaWxkcmVuKEJ1YmJsZURpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBCdWJibGVzRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPEJ1YmJsZXNEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2J1YmJsZXNldHRpbmdzJyk7XG4gICAgfVxufSJdfQ==