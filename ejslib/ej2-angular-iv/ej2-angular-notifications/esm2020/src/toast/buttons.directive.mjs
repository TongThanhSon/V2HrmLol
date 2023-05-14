import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['model'];
let outputs = ['click'];
/**
 * 'e-button' directive represent a button of angular toast
 * It must be contained in a Toast component(`ejs-toast`).
 * ```html
 * <ejs-toast id='toast' showCloseIcon=true>
 *   <e-buttons>
 *    <e-button content='Ok' isPrimary=true></e-button>
 *    <e-button content='Cancel'></e-button>
 *   </e-buttons>
 * </ejs-toast>
 * ```
 */
export class ButtonModelPropDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
ButtonModelPropDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonModelPropDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ButtonModelPropDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ButtonModelPropDirective, selector: "e-buttonmodelprops>e-buttonmodelprop", inputs: { model: "model" }, outputs: { click: "click" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonModelPropDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-buttonmodelprops>e-buttonmodelprop',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * ButtonModelProp Array Directive
 * @private
 */
export class ButtonModelPropsDirective extends ArrayBase {
    constructor() {
        super('buttons');
    }
}
ButtonModelPropsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonModelPropsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ButtonModelPropsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ButtonModelPropsDirective, selector: "ejs-toast>e-buttonmodelprops", queries: [{ propertyName: "children", predicate: ButtonModelPropDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonModelPropsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-toast>e-buttonmodelprops',
                    queries: {
                        children: new ContentChildren(ButtonModelPropDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9ucy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdG9hc3QvYnV0dG9ucy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUloRixJQUFJLEtBQUssR0FBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2hDLElBQUksT0FBTyxHQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEM7Ozs7Ozs7Ozs7O0dBV0c7QUFTSCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsV0FBcUM7SUFZL0UsWUFBb0IsZ0JBQWlDO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBRFEscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUVqRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOztxSEFqQlEsd0JBQXdCO3lHQUF4Qix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFScEMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsc0NBQXNDO29CQUNoRCxNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLEVBRVI7aUJBQ0o7O0FBcUJEOzs7R0FHRztBQU9ILE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxTQUFvQztJQUMvRTtRQUNJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQixDQUFDOztzSEFIUSx5QkFBeUI7MEdBQXpCLHlCQUF5Qiw2RkFIQSx3QkFBd0I7MkZBR2pELHlCQUF5QjtrQkFOckMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLHdCQUF3QixDQUFDO3FCQUMxRDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV4QmFzZSwgQXJyYXlCYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cblxubGV0IGlucHV0OiBzdHJpbmdbXSA9IFsnbW9kZWwnXTtcbmxldCBvdXRwdXRzOiBzdHJpbmdbXSA9IFsnY2xpY2snXTtcbi8qKlxuICogJ2UtYnV0dG9uJyBkaXJlY3RpdmUgcmVwcmVzZW50IGEgYnV0dG9uIG9mIGFuZ3VsYXIgdG9hc3QgXG4gKiBJdCBtdXN0IGJlIGNvbnRhaW5lZCBpbiBhIFRvYXN0IGNvbXBvbmVudChgZWpzLXRvYXN0YCkuIFxuICogYGBgaHRtbFxuICogPGVqcy10b2FzdCBpZD0ndG9hc3QnIHNob3dDbG9zZUljb249dHJ1ZT4gXG4gKiAgIDxlLWJ1dHRvbnM+XG4gKiAgICA8ZS1idXR0b24gY29udGVudD0nT2snIGlzUHJpbWFyeT10cnVlPjwvZS1idXR0b24+XG4gKiAgICA8ZS1idXR0b24gY29udGVudD0nQ2FuY2VsJz48L2UtYnV0dG9uPlxuICogICA8L2UtYnV0dG9ucz5cbiAqIDwvZWpzLXRvYXN0PlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1idXR0b25tb2RlbHByb3BzPmUtYnV0dG9ubW9kZWxwcm9wJyxcbiAgICBpbnB1dHM6IGlucHV0LFxuICAgIG91dHB1dHM6IG91dHB1dHMsICAgIFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uTW9kZWxQcm9wRGlyZWN0aXZlIGV4dGVuZHMgQ29tcGxleEJhc2U8QnV0dG9uTW9kZWxQcm9wRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdHB1YmxpYyBjbGljazogYW55O1xuXG5cbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBCdXR0b24gY29tcG9uZW50IG1vZGVsIHByb3BlcnRpZXMgdG8gcmVuZGVyIHRoZSBUb2FzdCBhY3Rpb24gYnV0dG9ucy4gXG4gICAgICogXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBtb2RlbDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogQnV0dG9uTW9kZWxQcm9wIEFycmF5IERpcmVjdGl2ZVxuICogQHByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlanMtdG9hc3Q+ZS1idXR0b25tb2RlbHByb3BzJyxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXcgQ29udGVudENoaWxkcmVuKEJ1dHRvbk1vZGVsUHJvcERpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Nb2RlbFByb3BzRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPEJ1dHRvbk1vZGVsUHJvcHNEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2J1dHRvbnMnKTtcbiAgICB9XG59Il19