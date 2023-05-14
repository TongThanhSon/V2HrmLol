import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['avatarIconCss', 'avatarText', 'cssClass', 'enabled', 'leadingIconCss', 'leadingIconUrl', 'text', 'trailingIconCss', 'trailingIconUrl', 'value'];
let outputs = [];
/**
 * `e-chip` directive represent a chip of the Angular ChipList.
 * ```html
 * <ejs-chiplist >
 *   <e-chips>
 *    <e-chip text='chip1'></e-chip>
 *    <e-chip text='chip2'></e-chip>
 *   </e-chips>
 * </ejs-chiplist>
 * ```
 */
export class ChipDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
ChipDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ChipDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ChipDirective, selector: "e-chips>e-chip", inputs: { avatarIconCss: "avatarIconCss", avatarText: "avatarText", cssClass: "cssClass", enabled: "enabled", leadingIconCss: "leadingIconCss", leadingIconUrl: "leadingIconUrl", text: "text", trailingIconCss: "trailingIconCss", trailingIconUrl: "trailingIconUrl", value: "value" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-chips>e-chip',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Chip Array Directive
 * @private
 */
export class ChipsDirective extends ArrayBase {
    constructor() {
        super('chips');
    }
}
ChipsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ChipsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ChipsDirective, selector: "ejs-chiplist>e-chips", queries: [{ propertyName: "children", predicate: ChipDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-chiplist>e-chips',
                    queries: {
                        children: new ContentChildren(ChipDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NoaXBzL2NoaXBzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBSWhGLElBQUksS0FBSyxHQUFhLENBQUMsZUFBZSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN4SyxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFDM0I7Ozs7Ozs7Ozs7R0FVRztBQVNILE1BQU0sT0FBTyxhQUFjLFNBQVEsV0FBMEI7SUF3RHpELFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7MEdBN0RRLGFBQWE7OEZBQWIsYUFBYTsyRkFBYixhQUFhO2tCQVJ6QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsRUFFUjtpQkFDSjs7QUFpRUQ7OztHQUdHO0FBT0gsTUFBTSxPQUFPLGNBQWUsU0FBUSxTQUF5QjtJQUN6RDtRQUNJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixDQUFDOzsyR0FIUSxjQUFjOytGQUFkLGNBQWMscUZBSFcsYUFBYTsyRkFHdEMsY0FBYztrQkFOMUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLGFBQWEsQ0FBQztxQkFDL0M7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcGxleEJhc2UsIEFycmF5QmFzZSwgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2F2YXRhckljb25Dc3MnLCAnYXZhdGFyVGV4dCcsICdjc3NDbGFzcycsICdlbmFibGVkJywgJ2xlYWRpbmdJY29uQ3NzJywgJ2xlYWRpbmdJY29uVXJsJywgJ3RleHQnLCAndHJhaWxpbmdJY29uQ3NzJywgJ3RyYWlsaW5nSWNvblVybCcsICd2YWx1ZSddO1xubGV0IG91dHB1dHM6IHN0cmluZ1tdID0gW107XG4vKipcbiAqIGBlLWNoaXBgIGRpcmVjdGl2ZSByZXByZXNlbnQgYSBjaGlwIG9mIHRoZSBBbmd1bGFyIENoaXBMaXN0LlxuICogYGBgaHRtbFxuICogPGVqcy1jaGlwbGlzdCA+IFxuICogICA8ZS1jaGlwcz5cbiAqICAgIDxlLWNoaXAgdGV4dD0nY2hpcDEnPjwvZS1jaGlwPlxuICogICAgPGUtY2hpcCB0ZXh0PSdjaGlwMic+PC9lLWNoaXA+XG4gKiAgIDwvZS1jaGlwcz5cbiAqIDwvZWpzLWNoaXBsaXN0PlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1jaGlwcz5lLWNoaXAnLFxuICAgIGlucHV0czogaW5wdXQsXG4gICAgb3V0cHV0czogb3V0cHV0cywgICAgXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBDaGlwRGlyZWN0aXZlIGV4dGVuZHMgQ29tcGxleEJhc2U8Q2hpcERpcmVjdGl2ZT4ge1xuICAgIHB1YmxpYyBkaXJlY3RpdmVQcm9wTGlzdDogYW55O1xuXHRcblxuXG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgaWNvbiBDU1MgY2xhc3MgZm9yIHRoZSBhdmF0YXIgaW4gdGhlIGNoaXAuXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgYXZhdGFySWNvbkNzczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGN1c3RvbWl6ZWQgdGV4dCB2YWx1ZSBmb3IgdGhlIGF2YXRhciBpbiB0aGUgY2hpcC5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyBhdmF0YXJUZXh0OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgY3VzdG9tIGNsYXNzZXMgdG8gYmUgYWRkZWQgdG8gdGhlIGNoaXAgZWxlbWVudCB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgQ2hpcExpc3QgY29tcG9uZW50LlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIGNzc0NsYXNzOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyBhIHZhbHVlIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGNoaXAgY29tcG9uZW50IGlzIGVuYWJsZWQgb3Igbm90LlxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZW5hYmxlZDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGxlYWRpbmcgaWNvbiBDU1MgY2xhc3MgZm9yIHRoZSBjaGlwLlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIGxlYWRpbmdJY29uQ3NzOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgbGVhZGluZyBpY29uIHVybCBmb3IgdGhlIGNoaXAuXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgbGVhZGluZ0ljb25Vcmw6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSB0ZXh0IGNvbnRlbnQgZm9yIHRoZSBjaGlwLlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIHRleHQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSB0cmFpbGluZyBpY29uIENTUyBjbGFzcyBmb3IgdGhlIGNoaXAuXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgdHJhaWxpbmdJY29uQ3NzOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgdHJhaWxpbmcgaWNvbiB1cmwgZm9yIHRoZSBjaGlwLlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIHRyYWlsaW5nSWNvblVybDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSB2YWx1ZSBvZiB0aGUgY2hpcC5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyB2YWx1ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogQ2hpcCBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZWpzLWNoaXBsaXN0PmUtY2hpcHMnLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oQ2hpcERpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc0RpcmVjdGl2ZSBleHRlbmRzIEFycmF5QmFzZTxDaGlwc0RpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignY2hpcHMnKTtcbiAgICB9XG59Il19