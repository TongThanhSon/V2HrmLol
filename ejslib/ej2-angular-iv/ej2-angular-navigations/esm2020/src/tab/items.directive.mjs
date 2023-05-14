import { __decorate } from "tslib";
import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['content', 'cssClass', 'disabled', 'header', 'headerTemplate', 'id', 'visible'];
let outputs = [];
/**
 * 'e-tabitem' directive represent a item of the Angular Tab.
 * It must be contained in a Tab component(`ejs-tab`).
 * ```html
 * <ejs-tab>
 *  <e-tabitems>
 *   <e-tabitem [header]='Header 1' [content]='Content 1'></e-tabitem>
 *   <e-tabitem [header]='Header 2' [content]='Content 2'></e-tabitem>
 *  <e-tabitems>
 * </ejs-tab>
 * ```
 */
export class TabItemDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
TabItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TabItemDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
TabItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: TabItemDirective, selector: "e-tabitems>e-tabitem", inputs: { content: "content", cssClass: "cssClass", disabled: "disabled", header: "header", headerTemplate: "headerTemplate", id: "id", visible: "visible" }, queries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }, { propertyName: "header_text", first: true, predicate: ["headerText"], descendants: true }, { propertyName: "headerTemplate", first: true, predicate: ["headerTemplate"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], TabItemDirective.prototype, "content", void 0);
__decorate([
    Template()
], TabItemDirective.prototype, "header_text", void 0);
__decorate([
    Template()
], TabItemDirective.prototype, "headerTemplate", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TabItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-tabitems>e-tabitem',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { content: [{
                type: ContentChild,
                args: ['content']
            }], header_text: [{
                type: ContentChild,
                args: ['headerText']
            }], headerTemplate: [{
                type: ContentChild,
                args: ['headerTemplate']
            }] } });
/**
 * TabItem Array Directive
 * @private
 */
export class TabItemsDirective extends ArrayBase {
    constructor() {
        super('items');
    }
}
TabItemsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TabItemsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
TabItemsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: TabItemsDirective, selector: "ejs-tab>e-tabitems", queries: [{ propertyName: "children", predicate: TabItemDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TabItemsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-tab>e-tabitems',
                    queries: {
                        children: new ContentChildren(TabItemDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RhYi9pdGVtcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUd4RCxJQUFJLEtBQUssR0FBYSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDdkcsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7Ozs7Ozs7OztHQVdHO0FBU0gsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFdBQTZCO0lBZ0QvRCxZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRWpELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7OzZHQXJEUSxnQkFBZ0I7aUdBQWhCLGdCQUFnQjtBQW9DekI7SUFEQyxRQUFRLEVBQUU7aURBQ1M7QUFHcEI7SUFEQyxRQUFRLEVBQUU7cURBQ2E7QUFPeEI7SUFEQyxRQUFRLEVBQUU7d0RBQ2dCOzJGQTlDbEIsZ0JBQWdCO2tCQVI1QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsRUFFUjtpQkFDSjt1R0FxQ1UsT0FBTztzQkFGYixZQUFZO3VCQUFDLFNBQVM7Z0JBS2hCLFdBQVc7c0JBRmpCLFlBQVk7dUJBQUMsWUFBWTtnQkFTbkIsY0FBYztzQkFGcEIsWUFBWTt1QkFBQyxnQkFBZ0I7O0FBWWxDOzs7R0FHRztBQU9ILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxTQUE0QjtJQUMvRDtRQUNJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixDQUFDOzs4R0FIUSxpQkFBaUI7a0dBQWpCLGlCQUFpQixtRkFIUSxnQkFBZ0I7MkZBR3pDLGlCQUFpQjtrQkFON0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLGdCQUFnQixDQUFDO3FCQUNsRDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2NvbnRlbnQnLCAnY3NzQ2xhc3MnLCAnZGlzYWJsZWQnLCAnaGVhZGVyJywgJ2hlYWRlclRlbXBsYXRlJywgJ2lkJywgJ3Zpc2libGUnXTtcbmxldCBvdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuLyoqXG4gKiAnZS10YWJpdGVtJyBkaXJlY3RpdmUgcmVwcmVzZW50IGEgaXRlbSBvZiB0aGUgQW5ndWxhciBUYWIuXG4gKiBJdCBtdXN0IGJlIGNvbnRhaW5lZCBpbiBhIFRhYiBjb21wb25lbnQoYGVqcy10YWJgKS4gXG4gKiBgYGBodG1sXG4gKiA8ZWpzLXRhYj5cbiAqICA8ZS10YWJpdGVtcz5cbiAqICAgPGUtdGFiaXRlbSBbaGVhZGVyXT0nSGVhZGVyIDEnIFtjb250ZW50XT0nQ29udGVudCAxJz48L2UtdGFiaXRlbT5cbiAqICAgPGUtdGFiaXRlbSBbaGVhZGVyXT0nSGVhZGVyIDInIFtjb250ZW50XT0nQ29udGVudCAyJz48L2UtdGFiaXRlbT5cbiAqICA8ZS10YWJpdGVtcz4gXG4gKiA8L2Vqcy10YWI+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlLXRhYml0ZW1zPmUtdGFiaXRlbScsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFRhYkl0ZW1EaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxUYWJJdGVtRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdFxuXG5cbiAgICAvKiogXG4gICAgICogU2V0cyB0aGUgQ1NTIGNsYXNzZXMgdG8gdGhlIFRhYiBpdGVtIHRvIGN1c3RvbWl6ZSBpdHMgc3R5bGVzLlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIGNzc0NsYXNzOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgdHJ1ZSB0byBkaXNhYmxlIHVzZXIgaW50ZXJhY3Rpb25zIG9mIHRoZSBUYWIgaXRlbS5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBkaXNhYmxlZDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUaGUgb2JqZWN0IHVzZWQgZm9yIGNvbmZpZ3VyaW5nIHRoZSBUYWIgaXRlbSBoZWFkZXIgcHJvcGVydGllcy5cbiAgICAgKiBAZGVmYXVsdCB7fVxuICAgICAqL1xuICAgIHB1YmxpYyBoZWFkZXI6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyB1bmlxdWUgSUQgdG8gVGFiIGl0ZW0uXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBpZDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGZhbHNlIHRvIGhpZGUgdGhlIFRhYiBpdGVtLlxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBwdWJsaWMgdmlzaWJsZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGNvbnRlbnQgb2YgVGFiIGl0ZW0sIHRoYXQgaXMgZGlzcGxheWVkIHdoZW4gY29uY2VybiBpdGVtIGhlYWRlciBpcyBzZWxlY3RlZC5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2NvbnRlbnQnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGNvbnRlbnQ6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCdoZWFkZXJUZXh0JylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBoZWFkZXJfdGV4dDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGhlYWRlciB0ZXh0IG9mIFRhYiBpdGVtLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdoZWFkZXJUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgaGVhZGVyVGVtcGxhdGU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZVByb3BMaXN0ID0gaW5wdXQ7XG4gICAgfVxufVxuXG4vKipcbiAqIFRhYkl0ZW0gQXJyYXkgRGlyZWN0aXZlXG4gKiBAcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Vqcy10YWI+ZS10YWJpdGVtcycsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZHJlbjogbmV3IENvbnRlbnRDaGlsZHJlbihUYWJJdGVtRGlyZWN0aXZlKVxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYkl0ZW1zRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPFRhYkl0ZW1zRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdpdGVtcycpO1xuICAgIH1cbn0iXX0=