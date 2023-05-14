import { __decorate } from "tslib";
import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['angle', 'arrowSettings', 'color', 'dashArray', 'highlightSettings', 'latitude', 'longitude', 'selectionSettings', 'visible', 'width'];
let outputs = [];
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-navigationLineSettings>
 * <e-navigationLineSetting>
 * </e-navigationLineSetting>
 * </e-navigationLineSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
export class NavigationLineDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
NavigationLineDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NavigationLineDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
NavigationLineDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: NavigationLineDirective, selector: "e-layer>e-navigationLineSettings>e-navigationLineSetting", inputs: { angle: "angle", arrowSettings: "arrowSettings", color: "color", dashArray: "dashArray", highlightSettings: "highlightSettings", latitude: "latitude", longitude: "longitude", selectionSettings: "selectionSettings", visible: "visible", width: "width" }, queries: [{ propertyName: "tooltipSettings_template", first: true, predicate: ["tooltipSettingsTemplate"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], NavigationLineDirective.prototype, "tooltipSettings_template", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NavigationLineDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-layer>e-navigationLineSettings>e-navigationLineSetting',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { tooltipSettings_template: [{
                type: ContentChild,
                args: ['tooltipSettingsTemplate']
            }] } });
/**
 * NavigationLine Array Directive
 * @private
 */
export class NavigationLinesDirective extends ArrayBase {
    constructor() {
        super('navigationlinesettings');
    }
}
NavigationLinesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NavigationLinesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NavigationLinesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: NavigationLinesDirective, selector: "e-layer>e-navigationLineSettings", queries: [{ propertyName: "children", predicate: NavigationLineDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NavigationLinesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-layer>e-navigationLineSettings',
                    queries: {
                        children: new ContentChildren(NavigationLineDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbmxpbmVzZXR0aW5ncy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbWFwcy9uYXZpZ2F0aW9ubGluZXNldHRpbmdzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBR3hELElBQUksS0FBSyxHQUFhLENBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlKLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztBQUMzQjs7Ozs7Ozs7Ozs7O0dBWUc7QUFTSCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsV0FBb0M7SUF1RDdFLFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7b0hBNURRLHVCQUF1Qjt3R0FBdkIsdUJBQXVCO0FBcURoQztJQURDLFFBQVEsRUFBRTt5RUFDMEI7MkZBckQ1Qix1QkFBdUI7a0JBUm5DLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLDBEQUEwRDtvQkFDcEUsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxFQUVSO2lCQUNKO3VHQXNEVSx3QkFBd0I7c0JBRjlCLFlBQVk7dUJBQUMseUJBQXlCOztBQVkzQzs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsU0FBbUM7SUFDN0U7UUFDSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNwQyxDQUFDOztxSEFIUSx3QkFBd0I7eUdBQXhCLHdCQUF3QixpR0FIQyx1QkFBdUI7MkZBR2hELHdCQUF3QjtrQkFOcEMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsa0NBQWtDO29CQUM1QyxPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLHVCQUF1QixDQUFDO3FCQUN6RDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2FuZ2xlJywgJ2Fycm93U2V0dGluZ3MnLCAnY29sb3InLCAnZGFzaEFycmF5JywgJ2hpZ2hsaWdodFNldHRpbmdzJywgJ2xhdGl0dWRlJywgJ2xvbmdpdHVkZScsICdzZWxlY3Rpb25TZXR0aW5ncycsICd2aXNpYmxlJywgJ3dpZHRoJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbi8qKlxuICogTGF5ZXIgRGlyZWN0aXZlXG4gKiBgYGBodG1sXG4gKiA8ZS1sYXllcnM+XG4gKiA8ZS1sYXllcj5cbiAqIDxlLW5hdmlnYXRpb25MaW5lU2V0dGluZ3M+XG4gKiA8ZS1uYXZpZ2F0aW9uTGluZVNldHRpbmc+XG4gKiA8L2UtbmF2aWdhdGlvbkxpbmVTZXR0aW5nPlxuICogPC9lLW5hdmlnYXRpb25MaW5lU2V0dGluZ3M+XG4gKiA8L2UtbGF5ZXI+XG4gKiA8L2UtbGF5ZXJzPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1sYXllcj5lLW5hdmlnYXRpb25MaW5lU2V0dGluZ3M+ZS1uYXZpZ2F0aW9uTGluZVNldHRpbmcnLFxuICAgIGlucHV0czogaW5wdXQsXG4gICAgb3V0cHV0czogb3V0cHV0cywgICAgXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uTGluZURpcmVjdGl2ZSBleHRlbmRzIENvbXBsZXhCYXNlPE5hdmlnYXRpb25MaW5lRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdFxuXG5cbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgYW5nbGUgb2YgY3VydmUgY29ubmVjdGluZyBkaWZmZXJlbnQgbG9jYXRpb25zIGluIG1hcHMuXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHB1YmxpYyBhbmdsZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBvcHRpb25zIHRvIGN1c3RvbWl6ZSB0aGUgYXJyb3cgZm9yIHRoZSBuYXZpZ2F0aW9uIGxpbmUgaW4gbWFwcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXJyb3dTZXR0aW5nczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBjb2xvciBmb3IgdGhlIG5hdmlnYXRpb24gbGluZXMgaW4gbWFwcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgY29sb3I6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgZGFzaC1hcnJheSBmb3IgdGhlIG5hdmlnYXRpb24gbGluZXMgZHJhd24gaW4gbWFwcy5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyBkYXNoQXJyYXk6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgaGlnaGxpZ2h0IHNldHRpbmdzIG9mIHRoZSBuYXZpZ2F0aW9uIGxpbmUgaW4gbWFwcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgaGlnaGxpZ2h0U2V0dGluZ3M6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgbGF0aXR1ZGUgdmFsdWUgZm9yIHRoZSBuYXZpZ2F0aW9uIGxpbmVzIGRyYXduIGluIG1hcHMuXG4gICAgICogQGRlZmF1bHQgW11cbiAgICAgKi9cbiAgICBwdWJsaWMgbGF0aXR1ZGU6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyBhbmQgZ2V0cyB0aGUgbG9uZ2l0dWRlIGZvciB0aGUgbmF2aWdhdGlvbiBsaW5lcyBkcmF3biBpbiBtYXBzLlxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG4gICAgcHVibGljIGxvbmdpdHVkZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSBzZWxlY3Rpb24gc2V0dGluZ3Mgb2YgdGhlIG5hdmlnYXRpb24gbGluZSBpbiBtYXBzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3Rpb25TZXR0aW5nczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBuYXZpZ2F0aW9uIGxpbmVzIHRvIGJlIGRyYXduIGluIG1hcHMuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgdmlzaWJsZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGFuZCBnZXRzIHRoZSB3aWR0aCBvZiB0aGUgbmF2aWdhdGlvbiBsaW5lcyBpbiBtYXBzLlxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICBwdWJsaWMgd2lkdGg6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCd0b29sdGlwU2V0dGluZ3NUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgdG9vbHRpcFNldHRpbmdzX3RlbXBsYXRlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBOYXZpZ2F0aW9uTGluZSBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1sYXllcj5lLW5hdmlnYXRpb25MaW5lU2V0dGluZ3MnLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oTmF2aWdhdGlvbkxpbmVEaXJlY3RpdmUpXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkxpbmVzRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPE5hdmlnYXRpb25MaW5lc0RpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignbmF2aWdhdGlvbmxpbmVzZXR0aW5ncycpO1xuICAgIH1cbn0iXX0=