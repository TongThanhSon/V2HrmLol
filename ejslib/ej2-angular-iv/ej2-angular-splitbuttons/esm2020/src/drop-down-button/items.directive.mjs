import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['disabled', 'iconCss', 'id', 'separator', 'text', 'url'];
let outputs = [];
export class DropDownButtonItemDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
DropDownButtonItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonItemDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
DropDownButtonItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: DropDownButtonItemDirective, selector: "e-dropdownbuttonitems>e-dropdownbuttonitem", inputs: { disabled: "disabled", iconCss: "iconCss", id: "id", separator: "separator", text: "text", url: "url" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-dropdownbuttonitems>e-dropdownbuttonitem',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * DropDownButtonItem Array Directive
 * @private
 */
export class DropDownButtonItemsDirective extends ArrayBase {
    constructor() {
        super('items');
    }
}
DropDownButtonItemsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonItemsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DropDownButtonItemsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: DropDownButtonItemsDirective, selector: "ejs-dropdownbutton>e-dropdownbuttonitems", queries: [{ propertyName: "children", predicate: DropDownButtonItemDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonItemsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-dropdownbutton>e-dropdownbuttonitems',
                    queries: {
                        children: new ContentChildren(DropDownButtonItemDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Ryb3AtZG93bi1idXR0b24vaXRlbXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFJaEYsSUFBSSxLQUFLLEdBQWEsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hGLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztBQVUzQixNQUFNLE9BQU8sMkJBQTRCLFNBQVEsV0FBd0M7SUFxQ3JGLFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7d0hBMUNRLDJCQUEyQjs0R0FBM0IsMkJBQTJCOzJGQUEzQiwyQkFBMkI7a0JBUnZDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLDRDQUE0QztvQkFDdEQsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxFQUVSO2lCQUNKOztBQThDRDs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsU0FBdUM7SUFDckY7UUFDSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7eUhBSFEsNEJBQTRCOzZHQUE1Qiw0QkFBNEIseUdBSEgsMkJBQTJCOzJGQUdwRCw0QkFBNEI7a0JBTnhDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLDBDQUEwQztvQkFDcEQsT0FBTyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxJQUFJLGVBQWUsQ0FBQywyQkFBMkIsQ0FBQztxQkFDN0Q7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcGxleEJhc2UsIEFycmF5QmFzZSwgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2Rpc2FibGVkJywgJ2ljb25Dc3MnLCAnaWQnLCAnc2VwYXJhdG9yJywgJ3RleHQnLCAndXJsJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlLWRyb3Bkb3duYnV0dG9uaXRlbXM+ZS1kcm9wZG93bmJ1dHRvbml0ZW0nLFxuICAgIGlucHV0czogaW5wdXQsXG4gICAgb3V0cHV0czogb3V0cHV0cywgICAgXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wRG93bkJ1dHRvbkl0ZW1EaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxEcm9wRG93bkJ1dHRvbkl0ZW1EaXJlY3RpdmU+IHtcbiAgICBwdWJsaWMgZGlyZWN0aXZlUHJvcExpc3Q6IGFueTtcblx0XG5cblxuICAgIC8qKiBcbiAgICAgKiBVc2VkIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBpdGVtLlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgcHVibGljIGRpc2FibGVkOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgY2xhc3MvbXVsdGlwbGUgY2xhc3NlcyBzZXBhcmF0ZWQgYnkgYSBzcGFjZSBmb3IgdGhlIGl0ZW0gdGhhdCBpcyB1c2VkIHRvIGluY2x1ZGUgYW4gaWNvbi4gXG4gICAgICogQWN0aW9uIGl0ZW0gY2FuIGluY2x1ZGUgZm9udCBpY29uIGFuZCBzcHJpdGUgaW1hZ2UuXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgaWNvbkNzczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGlkIGZvciBpdGVtLlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIGlkOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyBzZXBhcmF0b3IgYmV0d2VlbiB0aGUgaXRlbXMuIFNlcGFyYXRvciBhcmUgaG9yaXpvbnRhbCBsaW5lcyB1c2VkIHRvIGdyb3VwIGFjdGlvbiBpdGVtcy5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXBhcmF0b3I6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRleHQgZm9yIGl0ZW0uXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgdGV4dDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdXJsIGZvciBpdGVtIHRoYXQgY3JlYXRlcyB0aGUgYW5jaG9yIGxpbmsgdG8gbmF2aWdhdGUgdG8gdGhlIHVybCBwcm92aWRlZC5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyB1cmw6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZVByb3BMaXN0ID0gaW5wdXQ7XG4gICAgfVxufVxuXG4vKipcbiAqIERyb3BEb3duQnV0dG9uSXRlbSBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZWpzLWRyb3Bkb3duYnV0dG9uPmUtZHJvcGRvd25idXR0b25pdGVtcycsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZHJlbjogbmV3IENvbnRlbnRDaGlsZHJlbihEcm9wRG93bkJ1dHRvbkl0ZW1EaXJlY3RpdmUpXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgRHJvcERvd25CdXR0b25JdGVtc0RpcmVjdGl2ZSBleHRlbmRzIEFycmF5QmFzZTxEcm9wRG93bkJ1dHRvbkl0ZW1zRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdpdGVtcycpO1xuICAgIH1cbn0iXX0=