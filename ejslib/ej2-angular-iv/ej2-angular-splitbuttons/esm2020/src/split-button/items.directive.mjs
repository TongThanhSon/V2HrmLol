import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['disabled', 'iconCss', 'id', 'separator', 'text', 'url'];
let outputs = [];
export class SplitButtonItemDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
SplitButtonItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonItemDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
SplitButtonItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: SplitButtonItemDirective, selector: "e-splitbuttonitems>e-splitbuttonitem", inputs: { disabled: "disabled", iconCss: "iconCss", id: "id", separator: "separator", text: "text", url: "url" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-splitbuttonitems>e-splitbuttonitem',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * SplitButtonItem Array Directive
 * @private
 */
export class SplitButtonItemsDirective extends ArrayBase {
    constructor() {
        super('items');
    }
}
SplitButtonItemsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonItemsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
SplitButtonItemsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: SplitButtonItemsDirective, selector: "ejs-splitbutton>e-splitbuttonitems", queries: [{ propertyName: "children", predicate: SplitButtonItemDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonItemsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-splitbutton>e-splitbuttonitems',
                    queries: {
                        children: new ContentChildren(SplitButtonItemDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NwbGl0LWJ1dHRvbi9pdGVtcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUloRixJQUFJLEtBQUssR0FBYSxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEYsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBVTNCLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxXQUFxQztJQXFDL0UsWUFBb0IsZ0JBQWlDO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBRFEscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUVqRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOztxSEExQ1Esd0JBQXdCO3lHQUF4Qix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFScEMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsc0NBQXNDO29CQUNoRCxNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLEVBRVI7aUJBQ0o7O0FBOENEOzs7R0FHRztBQU9ILE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxTQUFvQztJQUMvRTtRQUNJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixDQUFDOztzSEFIUSx5QkFBeUI7MEdBQXpCLHlCQUF5QixtR0FIQSx3QkFBd0I7MkZBR2pELHlCQUF5QjtrQkFOckMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsb0NBQW9DO29CQUM5QyxPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLHdCQUF3QixDQUFDO3FCQUMxRDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV4QmFzZSwgQXJyYXlCYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cblxubGV0IGlucHV0OiBzdHJpbmdbXSA9IFsnZGlzYWJsZWQnLCAnaWNvbkNzcycsICdpZCcsICdzZXBhcmF0b3InLCAndGV4dCcsICd1cmwnXTtcbmxldCBvdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Utc3BsaXRidXR0b25pdGVtcz5lLXNwbGl0YnV0dG9uaXRlbScsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFNwbGl0QnV0dG9uSXRlbURpcmVjdGl2ZSBleHRlbmRzIENvbXBsZXhCYXNlPFNwbGl0QnV0dG9uSXRlbURpcmVjdGl2ZT4ge1xuICAgIHB1YmxpYyBkaXJlY3RpdmVQcm9wTGlzdDogYW55O1xuXHRcblxuXG4gICAgLyoqIFxuICAgICAqIFVzZWQgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGl0ZW0uXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgZGlzYWJsZWQ6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyBjbGFzcy9tdWx0aXBsZSBjbGFzc2VzIHNlcGFyYXRlZCBieSBhIHNwYWNlIGZvciB0aGUgaXRlbSB0aGF0IGlzIHVzZWQgdG8gaW5jbHVkZSBhbiBpY29uLiBcbiAgICAgKiBBY3Rpb24gaXRlbSBjYW4gaW5jbHVkZSBmb250IGljb24gYW5kIHNwcml0ZSBpbWFnZS5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyBpY29uQ3NzOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgaWQgZm9yIGl0ZW0uXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgaWQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHNlcGFyYXRvciBiZXR3ZWVuIHRoZSBpdGVtcy4gU2VwYXJhdG9yIGFyZSBob3Jpem9udGFsIGxpbmVzIHVzZWQgdG8gZ3JvdXAgYWN0aW9uIGl0ZW1zLlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgcHVibGljIHNlcGFyYXRvcjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGV4dCBmb3IgaXRlbS5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyB0ZXh0OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB1cmwgZm9yIGl0ZW0gdGhhdCBjcmVhdGVzIHRoZSBhbmNob3IgbGluayB0byBuYXZpZ2F0ZSB0byB0aGUgdXJsIHByb3ZpZGVkLlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIHVybDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogU3BsaXRCdXR0b25JdGVtIEFycmF5IERpcmVjdGl2ZVxuICogQHByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlanMtc3BsaXRidXR0b24+ZS1zcGxpdGJ1dHRvbml0ZW1zJyxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXcgQ29udGVudENoaWxkcmVuKFNwbGl0QnV0dG9uSXRlbURpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBTcGxpdEJ1dHRvbkl0ZW1zRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPFNwbGl0QnV0dG9uSXRlbXNEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2l0ZW1zJyk7XG4gICAgfVxufSJdfQ==