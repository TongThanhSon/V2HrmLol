import { __decorate } from "tslib";
import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['animationDelay', 'animationDuration', 'border', 'colorValuePath', 'dashArray', 'dataSource', 'fill', 'height', 'highlightSettings', 'imageUrl', 'imageUrlValuePath', 'initialMarkerSelection', 'latitudeValuePath', 'legendText', 'longitudeValuePath', 'offset', 'opacity', 'query', 'selectionSettings', 'shape', 'shapeValuePath', 'template', 'tooltipSettings', 'visible', 'width'];
let outputs = [];
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-markerSettings>
 * <e-markerSetting>
 * </e-markerSetting>
 * </e-markerSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
export class MarkerDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
MarkerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MarkerDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
MarkerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: MarkerDirective, selector: "e-layer>e-markerSettings>e-markerSetting", inputs: { animationDelay: "animationDelay", animationDuration: "animationDuration", border: "border", colorValuePath: "colorValuePath", dashArray: "dashArray", dataSource: "dataSource", fill: "fill", height: "height", highlightSettings: "highlightSettings", imageUrl: "imageUrl", imageUrlValuePath: "imageUrlValuePath", initialMarkerSelection: "initialMarkerSelection", latitudeValuePath: "latitudeValuePath", legendText: "legendText", longitudeValuePath: "longitudeValuePath", offset: "offset", opacity: "opacity", query: "query", selectionSettings: "selectionSettings", shape: "shape", shapeValuePath: "shapeValuePath", template: "template", tooltipSettings: "tooltipSettings", visible: "visible", width: "width" }, queries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true }, { propertyName: "tooltipSettings_template", first: true, predicate: ["tooltipSettingsTemplate"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], MarkerDirective.prototype, "template", void 0);
__decorate([
    Template()
], MarkerDirective.prototype, "tooltipSettings_template", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MarkerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-layer>e-markerSettings>e-markerSetting',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { template: [{
                type: ContentChild,
                args: ['template']
            }], tooltipSettings_template: [{
                type: ContentChild,
                args: ['tooltipSettingsTemplate']
            }] } });
/**
 * Marker Array Directive
 * @private
 */
export class MarkersDirective extends ArrayBase {
    constructor() {
        super('markersettings');
    }
}
MarkersDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MarkersDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MarkersDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: MarkersDirective, selector: "e-layer>e-markerSettings", queries: [{ propertyName: "children", predicate: MarkerDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MarkersDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-layer>e-markerSettings',
                    queries: {
                        children: new ContentChildren(MarkerDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Vyc2V0dGluZ3MuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21hcHMvbWFya2Vyc2V0dGluZ3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFHeEQsSUFBSSxLQUFLLEdBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDalosSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7Ozs7Ozs7Ozs7R0FZRztBQVNILE1BQU0sT0FBTyxlQUFnQixTQUFRLFdBQTRCO0lBb0k3RCxZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRWpELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7OzRHQXpJUSxlQUFlO2dHQUFmLGVBQWU7QUErSHhCO0lBREMsUUFBUSxFQUFFO2lEQUNVO0FBR3JCO0lBREMsUUFBUSxFQUFFO2lFQUMwQjsyRkFsSTVCLGVBQWU7a0JBUjNCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLDBDQUEwQztvQkFDcEQsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxFQUVSO2lCQUNKO3VHQWdJVSxRQUFRO3NCQUZkLFlBQVk7dUJBQUMsVUFBVTtnQkFLakIsd0JBQXdCO3NCQUY5QixZQUFZO3VCQUFDLHlCQUF5Qjs7QUFZM0M7OztHQUdHO0FBT0gsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFNBQTJCO0lBQzdEO1FBQ0ksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDNUIsQ0FBQzs7NkdBSFEsZ0JBQWdCO2lHQUFoQixnQkFBZ0IseUZBSFMsZUFBZTsyRkFHeEMsZ0JBQWdCO2tCQU41QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMsZUFBZSxDQUFDO3FCQUNqRDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2FuaW1hdGlvbkRlbGF5JywgJ2FuaW1hdGlvbkR1cmF0aW9uJywgJ2JvcmRlcicsICdjb2xvclZhbHVlUGF0aCcsICdkYXNoQXJyYXknLCAnZGF0YVNvdXJjZScsICdmaWxsJywgJ2hlaWdodCcsICdoaWdobGlnaHRTZXR0aW5ncycsICdpbWFnZVVybCcsICdpbWFnZVVybFZhbHVlUGF0aCcsICdpbml0aWFsTWFya2VyU2VsZWN0aW9uJywgJ2xhdGl0dWRlVmFsdWVQYXRoJywgJ2xlZ2VuZFRleHQnLCAnbG9uZ2l0dWRlVmFsdWVQYXRoJywgJ29mZnNldCcsICdvcGFjaXR5JywgJ3F1ZXJ5JywgJ3NlbGVjdGlvblNldHRpbmdzJywgJ3NoYXBlJywgJ3NoYXBlVmFsdWVQYXRoJywgJ3RlbXBsYXRlJywgJ3Rvb2x0aXBTZXR0aW5ncycsICd2aXNpYmxlJywgJ3dpZHRoJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbi8qKlxuICogTGF5ZXIgRGlyZWN0aXZlXG4gKiBgYGBodG1sXG4gKiA8ZS1sYXllcnM+XG4gKiA8ZS1sYXllcj5cbiAqIDxlLW1hcmtlclNldHRpbmdzPlxuICogPGUtbWFya2VyU2V0dGluZz5cbiAqIDwvZS1tYXJrZXJTZXR0aW5nPlxuICogPC9lLW1hcmtlclNldHRpbmdzPlxuICogPC9lLWxheWVyPlxuICogPC9lLWxheWVycz5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2UtbGF5ZXI+ZS1tYXJrZXJTZXR0aW5ncz5lLW1hcmtlclNldHRpbmcnLFxuICAgIGlucHV0czogaW5wdXQsXG4gICAgb3V0cHV0czogb3V0cHV0cywgICAgXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBNYXJrZXJEaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxNYXJrZXJEaXJlY3RpdmU+IHtcbiAgICBwdWJsaWMgZGlyZWN0aXZlUHJvcExpc3Q6IGFueTtcblx0XG5cblxuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBkZWxheSB0aW1lIGZvciB0aGUgYW5pbWF0aW9uIGluIG1hcmtlci5cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgcHVibGljIGFuaW1hdGlvbkRlbGF5OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIGR1cmF0aW9uIHRpbWUgZm9yIGFuaW1hdGluZyB0aGUgbWFya2VyLlxuICAgICAqIEBkZWZhdWx0IDEwMDBcbiAgICAgKi9cbiAgICBwdWJsaWMgYW5pbWF0aW9uRHVyYXRpb246IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgb3B0aW9ucyBmb3IgY3VzdG9taXppbmcgdGhlIGNvbG9yIGFuZCB3aWR0aCBvZiB0aGUgYm9yZGVyIGZvciB0aGUgbWFya2VyIGluIG1hcHMuXG4gICAgICovXG4gICAgcHVibGljIGJvcmRlcjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSB2YWx1ZSBwYXRoIGZyb20gdGhlIG1hcmtlciBkYXRhIHNvdXJjZSB0byBhcHBseSBjb2xvciBmb3IgdGhlIG1hcmtlci5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIGNvbG9yVmFsdWVQYXRoOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIGRhc2gtYXJyYXkgZm9yIHRoZSBtYXJrZXIuXG4gICAgICovXG4gICAgcHVibGljIGRhc2hBcnJheTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBkYXRhIHNvdXJjZSBmb3IgdGhlIG1hcmtlci4gXG4gICAgICogVGhlIGRhdGEgc291cmNlIGZvciB0aGUgbWFya2VyIHdpbGwgY29udGFpbiBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIHZhbHVlcyB0byBzcGVjaWZ5IHRoZSBsb2NhdGlvbiBcbiAgICAgKiBvZiB0aGUgbWFya2VyLiBcbiAgICAgKiBUaGUgZGF0YSBzb3VyY2UgY2FuIGNvbnRhaW4gZGF0YSBzdWNoIGFzIGNvbG9yLCBzaGFwZSwgYW5kIG90aGVyIGRldGFpbHMgdGhhdCBjYW4gYmUgYm91bmQgdG8gdGhlIGNvbG9yLCBzaGFwZSwgXG4gICAgICogYW5kIHRvb2x0aXAgb2YgdGhlIG1hcmtlci5cbiAgICAgKiBAaXNvYnNlcnZhYmxlIHRydWVcbiAgICAgKiBAZGVmYXVsdCBbXVxuICAgICAqL1xuICAgIHB1YmxpYyBkYXRhU291cmNlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIGNvbG9yIGZvciB0aGUgbWFya2VyIGluIG1hcHMuXG4gICAgICogQGRlZmF1bHQgJyNGRjQ3MUEnXG4gICAgICovXG4gICAgcHVibGljIGZpbGw6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSBtYXJrZXIgaW4gbWFwcy5cbiAgICAgKiBAZGVmYXVsdCAxMFxuICAgICAqL1xuICAgIHB1YmxpYyBoZWlnaHQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgb3B0aW9ucyB0byBjdXN0b21pemUgdGhlIG1hcmtlciB3aGlsZSB0aGUgbW91c2UgaGFzIGhvdmVyZWQgb24gdGhlIG1hcmtlciBpbiBtYXBzLlxuICAgICAqL1xuICAgIHB1YmxpYyBoaWdobGlnaHRTZXR0aW5nczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBVUkwgZm9yIHJlbmRlcmluZyB0aGUgbWFya2VyIGFzIGltYWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbWFnZVVybDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSB2YWx1ZSBwYXRoIGZyb20gdGhlIG1hcmtlciBkYXRhIHNvdXJjZSBmb3IgdGhlIGltYWdlIG9mIHRoZSBtYXJrZXIuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBpbWFnZVVybFZhbHVlUGF0aDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUbyBzZWxlY3QgdGhlIHNoYXBlIGF0IHRoZSByZW5kZXJpbmcgdGltZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdGlhbE1hcmtlclNlbGVjdGlvbjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSB2YWx1ZSBwYXRoIGZyb20gdGhlIG1hcmtlciBkYXRhIHNvdXJjZSBmb3Igc2V0dGluZyBsYXRpdHVkZSBmb3IgYSBzZXQgb2YgbWFya2Vycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbGF0aXR1ZGVWYWx1ZVBhdGg6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgdGV4dCBmb3IgdGhlIGxlZ2VuZCBmcm9tIHRoZSBtYXJrZXIgZGF0YSBzb3VyY2UuXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgbGVnZW5kVGV4dDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSB2YWx1ZSBwYXRoIGZyb20gdGhlIG1hcmtlciBkYXRhIHNvdXJjZSBmb3Igc2V0dGluZyBsb25naXR1ZGUgZm9yIGEgc2V0IG9mIG1hcmtlcnMuXG4gICAgICovXG4gICAgcHVibGljIGxvbmdpdHVkZVZhbHVlUGF0aDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBwb3NpdGlvbiB0byBtb3ZlIHRoZSBtYXJrZXIgYnkgc2V0dGluZyBzcGVjaWZpYyB2YWx1ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgb2Zmc2V0OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIG9wYWNpdHkgZm9yIHRoZSBtYXJrZXIgaW4gbWFwcy5cbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG4gICAgcHVibGljIG9wYWNpdHk6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgcXVlcnkgdG8gc2VsZWN0IHBhcnRpY3VsYXIgZGF0YSBmcm9tIHRoZSBtYXJrZXIgZGF0YS4gXG4gICAgICogVGhpcyBwcm9wZXJ0eSBpcyBhcHBsaWNhYmxlIG9ubHkgd2hlbiB0aGUgZGF0YSBzb3VyY2UgaXMgY3JlYXRlZCBieSBkYXRhIG1hbmFnZXIuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBxdWVyeTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBvcHRpb25zIHRvIGN1c3RvbWl6ZSB0aGUgbWFya2VyIHdoaWxlIHNlbGVjdGluZyB0aGUgbWFya2VyIGluIG1hcHMuXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdGlvblNldHRpbmdzOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIHNoYXBlIG9mIHRoZSBtYXJrZXIgaW4gbWFwcy5cbiAgICAgKiBAZGVmYXVsdCBCYWxsb29uXG4gICAgICovXG4gICAgcHVibGljIHNoYXBlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIHZhbHVlIHBhdGggZnJvbSB0aGUgbWFya2VyIGRhdGEgc291cmNlIHRvIHNldCB0aGUgc2hhcGUgb2YgdGhlIG1hcmtlci5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIHNoYXBlVmFsdWVQYXRoOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIG9wdGlvbnMgdG8gY3VzdG9taXplIHRoZSB0b29sdGlwIGZvciB0aGUgbWFya2VyIGluIG1hcHMuXG4gICAgICovXG4gICAgcHVibGljIHRvb2x0aXBTZXR0aW5nczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSB2aXNpYmlsaXR5IHN0YXRlIG9mIHRoZSBtYXJrZXIgYmFzZWQgb24gdGhlIG1hcmtlciBkYXRhIHNvdXJjZSBpbiBtYXBzLlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgcHVibGljIHZpc2libGU6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgd2lkdGggb2YgdGhlIG1hcmtlciBpbiBtYXBzLlxuICAgICAqIEBkZWZhdWx0IDEwXG4gICAgICovXG4gICAgcHVibGljIHdpZHRoOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgYW5kIGdldHMgdGhlIHRlbXBsYXRlIGZvciB0aGUgbWFya2VyLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCd0ZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgdGVtcGxhdGU6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCd0b29sdGlwU2V0dGluZ3NUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgdG9vbHRpcFNldHRpbmdzX3RlbXBsYXRlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBNYXJrZXIgQXJyYXkgRGlyZWN0aXZlXG4gKiBAcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2UtbGF5ZXI+ZS1tYXJrZXJTZXR0aW5ncycsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZHJlbjogbmV3IENvbnRlbnRDaGlsZHJlbihNYXJrZXJEaXJlY3RpdmUpXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTWFya2Vyc0RpcmVjdGl2ZSBleHRlbmRzIEFycmF5QmFzZTxNYXJrZXJzRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdtYXJrZXJzZXR0aW5ncycpO1xuICAgIH1cbn0iXX0=