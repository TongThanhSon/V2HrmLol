import { __decorate } from "tslib";
import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['align', 'cssClass', 'disabled', 'htmlAttributes', 'id', 'overflow', 'prefixIcon', 'showAlwaysInPopup', 'showTextOn', 'suffixIcon', 'template', 'text', 'tooltipText', 'type', 'visible', 'width'];
let outputs = ['click'];
/**
 * 'e-item' directive represent a item of the Angular Toolbar.
 * It must be contained in a Toolbar component(`ejs-toolbar`).
 * ```html
 * <ejs-toolbar>
 *   <e-items>
 *    <e-item text='Cut'></e-item>
 *    <e-item text='Copy'></e-item>
 *   </e-items>
 * </ejs-toolbar>
 * ```
 */
export class ItemDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
ItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ItemDirective, selector: "e-items>e-item", inputs: { align: "align", cssClass: "cssClass", disabled: "disabled", htmlAttributes: "htmlAttributes", id: "id", overflow: "overflow", prefixIcon: "prefixIcon", showAlwaysInPopup: "showAlwaysInPopup", showTextOn: "showTextOn", suffixIcon: "suffixIcon", template: "template", text: "text", tooltipText: "tooltipText", type: "type", visible: "visible", width: "width" }, outputs: { click: "click" }, queries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], ItemDirective.prototype, "template", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-items>e-item',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { template: [{
                type: ContentChild,
                args: ['template']
            }] } });
/**
 * Item Array Directive
 * @private
 */
export class ItemsDirective extends ArrayBase {
    constructor() {
        super('items');
    }
}
ItemsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ItemsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ItemsDirective, selector: "ejs-toolbar>e-items", queries: [{ propertyName: "children", predicate: ItemDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-toolbar>e-items',
                    queries: {
                        children: new ContentChildren(ItemDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Rvb2xiYXIvaXRlbXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFHeEQsSUFBSSxLQUFLLEdBQWEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDMU4sSUFBSSxPQUFPLEdBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsQzs7Ozs7Ozs7Ozs7R0FXRztBQVNILE1BQU0sT0FBTyxhQUFjLFNBQVEsV0FBMEI7SUErR3pELFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7MEdBcEhRLGFBQWE7OEZBQWIsYUFBYTtBQTZHdEI7SUFEQyxRQUFRLEVBQUU7K0NBQ1U7MkZBN0daLGFBQWE7a0JBUnpCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxFQUVSO2lCQUNKO3VHQThHVSxRQUFRO3NCQUZkLFlBQVk7dUJBQUMsVUFBVTs7QUFZNUI7OztHQUdHO0FBT0gsTUFBTSxPQUFPLGNBQWUsU0FBUSxTQUF5QjtJQUN6RDtRQUNJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixDQUFDOzsyR0FIUSxjQUFjOytGQUFkLGNBQWMsb0ZBSFcsYUFBYTsyRkFHdEMsY0FBYztrQkFOMUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLGFBQWEsQ0FBQztxQkFDL0M7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZHJlbiwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV4QmFzZSwgQXJyYXlCYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5sZXQgaW5wdXQ6IHN0cmluZ1tdID0gWydhbGlnbicsICdjc3NDbGFzcycsICdkaXNhYmxlZCcsICdodG1sQXR0cmlidXRlcycsICdpZCcsICdvdmVyZmxvdycsICdwcmVmaXhJY29uJywgJ3Nob3dBbHdheXNJblBvcHVwJywgJ3Nob3dUZXh0T24nLCAnc3VmZml4SWNvbicsICd0ZW1wbGF0ZScsICd0ZXh0JywgJ3Rvb2x0aXBUZXh0JywgJ3R5cGUnLCAndmlzaWJsZScsICd3aWR0aCddO1xubGV0IG91dHB1dHM6IHN0cmluZ1tdID0gWydjbGljayddO1xuLyoqXG4gKiAnZS1pdGVtJyBkaXJlY3RpdmUgcmVwcmVzZW50IGEgaXRlbSBvZiB0aGUgQW5ndWxhciBUb29sYmFyLlxuICogSXQgbXVzdCBiZSBjb250YWluZWQgaW4gYSBUb29sYmFyIGNvbXBvbmVudChgZWpzLXRvb2xiYXJgKS4gXG4gKiBgYGBodG1sXG4gKiA8ZWpzLXRvb2xiYXI+IFxuICogICA8ZS1pdGVtcz5cbiAqICAgIDxlLWl0ZW0gdGV4dD0nQ3V0Jz48L2UtaXRlbT5cbiAqICAgIDxlLWl0ZW0gdGV4dD0nQ29weSc+PC9lLWl0ZW0+XG4gKiAgIDwvZS1pdGVtcz5cbiAqIDwvZWpzLXRvb2xiYXI+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlLWl0ZW1zPmUtaXRlbScsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1EaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxJdGVtRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdHB1YmxpYyBjbGljazogYW55O1xuXG5cbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSB0eXBlcyBvZiBjb21tYW5kIHRvIGJlIHJlbmRlcmVkIGluIHRoZSBUb29sYmFyLiBcbiAgICAgKiBTdXBwb3J0ZWQgdHlwZXMgYXJlOiBcbiAgICAgKiAtIEJ1dHRvbjogQ3JlYXRlcyB0aGUgQnV0dG9uIGNvbnRyb2wgd2l0aCBpdHMgZ2l2ZW4gcHJvcGVydGllcyBsaWtlIHRleHQsIHByZWZpeEljb24sIGV0Yy4gXG4gICAgICogLSBTZXBhcmF0b3I6IEFkZHMgYSBob3Jpem9udGFsIGxpbmUgdGhhdCBzZXBhcmF0ZXMgdGhlIFRvb2xiYXIgY29tbWFuZHMuIFxuICAgICAqIC0gSW5wdXQ6IENyZWF0ZXMgYW4gaW5wdXQgZWxlbWVudCB0aGF0IGlzIGFwcGxpY2FibGUgdG8gdGVtcGxhdGUgcmVuZGVyaW5nIHdpdGggU3luY2Z1c2lvbiBjb250cm9scyBsaWtlIERyb3BEb3duTGlzdCwgXG4gICAgICogQXV0b0NvbXBsZXRlLCBldGMuXG4gICAgICogQGRlZmF1bHQgJ0J1dHRvbidcbiAgICAgKi9cbiAgICBwdWJsaWMgdHlwZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGxvY2F0aW9uIGZvciBhbGlnbmluZyBUb29sYmFyIGl0ZW1zIG9uIHRoZSBUb29sYmFyLiBFYWNoIGNvbW1hbmQgd2lsbCBiZSBhbGlnbmVkIGFjY29yZGluZyB0byB0aGUgYGFsaWduYCBwcm9wZXJ0eS4gXG4gICAgICogUG9zc2libGUgdmFsdWVzIGFyZTogXG4gICAgICogLSBMZWZ0OiBUbyBhbGlnbiBjb21tYW5kcyB0byB0aGUgbGVmdCBzaWRlIG9mIHRoZSBUb29sYmFyLiBcbiAgICAgKiAtIENlbnRlcjogVG8gYWxpZ24gY29tbWFuZHMgYXQgdGhlIGNlbnRlciBvZiB0aGUgVG9vbGJhci4gXG4gICAgICogLSBSaWdodDogVG8gYWxpZ24gY29tbWFuZHMgdG8gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIFRvb2xiYXIuIFxuICAgICAqIFxuICAgICAqIEBkZWZhdWx0IFwiTGVmdFwiXG4gICAgICovXG4gICAgcHVibGljIGFsaWduOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgc2luZ2xlL211bHRpcGxlIGNsYXNzZXMgKHNlcGFyYXRlZCBieSBzcGFjZSkgdG8gYmUgdXNlZCBmb3IgY3VzdG9taXphdGlvbiBvZiBjb21tYW5kcy5cbiAgICAgKiBAZGVmYXVsdCBcIlwiXG4gICAgICovXG4gICAgcHVibGljIGNzc0NsYXNzOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIGFuIGl0ZW0gc2hvdWxkIGJlIGRpc2FibGVkIG9yIG5vdC5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBkaXNhYmxlZDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIGh0bWxBdHRyaWJ1dGVzIHVzZWQgdG8gYWRkIGN1c3RvbSBhdHRyaWJ1dGVzIHRvIFRvb2xiYXIgY29tbWFuZC4gXG4gICAgICogU3VwcG9ydHMgSFRNTCBhdHRyaWJ1dGVzIHN1Y2ggYXMgc3R5bGUsIGNsYXNzLCBldGMuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBodG1sQXR0cmlidXRlczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHVuaXF1ZSBJRCB0byBiZSB1c2VkIHdpdGggYnV0dG9uIG9yIGlucHV0IGVsZW1lbnQgb2YgVG9vbGJhciBpdGVtcy5cbiAgICAgKiBAZGVmYXVsdCBcIlwiXG4gICAgICovXG4gICAgcHVibGljIGlkOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgVG9vbGJhciBjb21tYW5kIGRpc3BsYXkgYXJlYSB3aGVuIGFuIGVsZW1lbnQncyBjb250ZW50IGlzIHRvbyBsYXJnZSB0byBmaXQgYXZhaWxhYmxlIHNwYWNlLiBcbiAgICAgKiBUaGlzIGlzIGFwcGxpY2FibGUgb25seSB0byBgcG9wdXBgIG1vZGUuIFBvc3NpYmxlIHZhbHVlcyBhcmU6IFxuICAgICAqIC0gU2hvdzogIEFsd2F5cyBzaG93cyB0aGUgaXRlbSBhcyB0aGUgcHJpbWFyeSBwcmlvcml0eSBvbiB0aGUgKlRvb2xiYXIqLiBcbiAgICAgKiAtIEhpZGU6IEFsd2F5cyBzaG93cyB0aGUgaXRlbSBhcyB0aGUgc2Vjb25kYXJ5IHByaW9yaXR5IG9uIHRoZSAqcG9wdXAqLiBcbiAgICAgKiAtIE5vbmU6IE5vIHByaW9yaXR5IGZvciBkaXNwbGF5LCBhbmQgYXMgcGVyIG5vcm1hbCBvcmRlciBtb3ZlcyB0byBwb3B1cCB3aGVuIGNvbnRlbnQgZXhjZWVkcy5cbiAgICAgKiBAZGVmYXVsdCAnTm9uZSdcbiAgICAgKi9cbiAgICBwdWJsaWMgb3ZlcmZsb3c6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyBzaW5nbGUvbXVsdGlwbGUgY2xhc3NlcyBzZXBhcmF0ZWQgYnkgc3BhY2UgdXNlZCB0byBzcGVjaWZ5IGFuIGljb24gZm9yIHRoZSBidXR0b24uIFxuICAgICAqIFRoZSBpY29uIHdpbGwgYmUgcG9zaXRpb25lZCBiZWZvcmUgdGhlIHRleHQgY29udGVudCBpZiB0ZXh0IGlzIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIHRoZSBpY29uIGFsb25lIHdpbGwgYmUgcmVuZGVyZWQuXG4gICAgICogQGRlZmF1bHQgXCJcIlxuICAgICAqL1xuICAgIHB1YmxpYyBwcmVmaXhJY29uOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIHByaW9yaXR5IG9mIGl0ZW1zIHRvIGRpc3BsYXkgaXQgaW4gcG9wdXAgYWx3YXlzLiBcbiAgICAgKiBJdCBhbGxvd3MgdG8gbWFpbnRhaW4gdG9vbGJhciBpdGVtIG9uIHBvcHVwIGFsd2F5cyBidXQgaXQgZG9lcyBub3Qgd29yayBmb3IgdG9vbGJhciBwcmlvcml0eSBpdGVtcy5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBzaG93QWx3YXlzSW5Qb3B1cDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgd2hlcmUgdGhlIGJ1dHRvbiB0ZXh0IHdpbGwgYmUgZGlzcGxheWVkIG9uICpwb3B1cCBtb2RlKiBvZiB0aGUgVG9vbGJhci4gXG4gICAgICogUG9zc2libGUgdmFsdWVzIGFyZTogXG4gICAgICogLSBUb29sYmFyOiAgVGV4dCB3aWxsIGJlIGRpc3BsYXllZCBvbiAqVG9vbGJhciogb25seS4gXG4gICAgICogLSBPdmVyZmxvdzogVGV4dCB3aWxsIGJlIGRpc3BsYXllZCBvbmx5IHdoZW4gY29udGVudCBvdmVyZmxvd3MgdG8gKnBvcHVwKi4gXG4gICAgICogLSBCb3RoOiBUZXh0IHdpbGwgYmUgZGlzcGxheWVkIG9uICpwb3B1cCogYW5kICpUb29sYmFyKi5cbiAgICAgKiBAZGVmYXVsdCAnQm90aCdcbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvd1RleHRPbjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHNpbmdsZS9tdWx0aXBsZSBjbGFzc2VzIHNlcGFyYXRlZCBieSBzcGFjZSB1c2VkIHRvIHNwZWNpZnkgYW4gaWNvbiBmb3IgdGhlIGJ1dHRvbi4gXG4gICAgICogVGhlIGljb24gd2lsbCBiZSBwb3NpdGlvbmVkIGFmdGVyIHRoZSB0ZXh0IGNvbnRlbnQgaWYgdGV4dCBpcyBhdmFpbGFibGUuXG4gICAgICogQGRlZmF1bHQgXCJcIlxuICAgICAqL1xuICAgIHB1YmxpYyBzdWZmaXhJY29uOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgdGV4dCB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIFRvb2xiYXIgYnV0dG9uLlxuICAgICAqIEBkZWZhdWx0IFwiXCJcbiAgICAgKi9cbiAgICBwdWJsaWMgdGV4dDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHRleHQgdG8gYmUgZGlzcGxheWVkIG9uIGhvdmVyaW5nIHRoZSBUb29sYmFyIGJ1dHRvbi5cbiAgICAgKiBAZGVmYXVsdCBcIlwiXG4gICAgICovXG4gICAgcHVibGljIHRvb2x0aXBUZXh0OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIGFuIGl0ZW0gc2hvdWxkIGJlIGhpZGRlbiBvciBub3QuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuICAgIHB1YmxpYyB2aXNpYmxlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkdGggb2YgdGhlIFRvb2xiYXIgYnV0dG9uIGNvbW1hbmRzLlxuICAgICAqIEBkZWZhdWx0ICdhdXRvJ1xuICAgICAqL1xuICAgIHB1YmxpYyB3aWR0aDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIEhUTUwgZWxlbWVudC9lbGVtZW50IElEIGFzIGEgc3RyaW5nIHRoYXQgY2FuIGJlIGFkZGVkIGFzIGEgVG9vbGJhciBjb21tYW5kLiBcbiAgICAgKiBcbiAgICAgKiBAZGVmYXVsdCBcIlwiXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgndGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIHRlbXBsYXRlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBJdGVtIEFycmF5IERpcmVjdGl2ZVxuICogQHByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlanMtdG9vbGJhcj5lLWl0ZW1zJyxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXcgQ29udGVudENoaWxkcmVuKEl0ZW1EaXJlY3RpdmUpXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNEaXJlY3RpdmUgZXh0ZW5kcyBBcnJheUJhc2U8SXRlbXNEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2l0ZW1zJyk7XG4gICAgfVxufSJdfQ==