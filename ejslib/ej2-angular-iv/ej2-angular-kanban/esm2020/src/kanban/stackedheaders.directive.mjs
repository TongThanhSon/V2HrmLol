import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['keyFields', 'text'];
let outputs = [];
/**
 * `e-stackedHeaders` directive represent a stacked header of the Kanban board.
 * It must be contained in a Kanban component(`ejs-kanban`).
 * ```html
 * <ejs-kanban>
 *   <e-stackedHeaders>
 *    <e-stackedHeader keyField='Open' text='To Do'></e-stackedHeader>
 *    <e-stackedHeader keyField='Close' text='Completed'></e-stackedHeader>
 *   </e-stackedHeaders>
 * </ejs-kanban>
 * ```
 */
export class StackedHeaderDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
StackedHeaderDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StackedHeaderDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
StackedHeaderDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StackedHeaderDirective, selector: "e-stackedHeaders>e-stackedHeader", inputs: { keyFields: "keyFields", text: "text" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StackedHeaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-stackedHeaders>e-stackedHeader',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * StackedHeader Array Directive
 * @private
 */
export class StackedHeadersDirective extends ArrayBase {
    constructor() {
        super('stackedheaders');
    }
}
StackedHeadersDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StackedHeadersDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StackedHeadersDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StackedHeadersDirective, selector: "ejs-kanban>e-stackedHeaders", queries: [{ propertyName: "children", predicate: StackedHeaderDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StackedHeadersDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-kanban>e-stackedHeaders',
                    queries: {
                        children: new ContentChildren(StackedHeaderDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2tlZGhlYWRlcnMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2thbmJhbi9zdGFja2VkaGVhZGVycy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUloRixJQUFJLEtBQUssR0FBYSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM1QyxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFDM0I7Ozs7Ozs7Ozs7O0dBV0c7QUFTSCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsV0FBbUM7SUFnQjNFLFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7bUhBckJRLHNCQUFzQjt1R0FBdEIsc0JBQXNCOzJGQUF0QixzQkFBc0I7a0JBUmxDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGtDQUFrQztvQkFDNUMsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxFQUVSO2lCQUNKOztBQXlCRDs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsU0FBa0M7SUFDM0U7UUFDSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1QixDQUFDOztvSEFIUSx1QkFBdUI7d0dBQXZCLHVCQUF1Qiw0RkFIRSxzQkFBc0I7MkZBRy9DLHVCQUF1QjtrQkFObkMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLHNCQUFzQixDQUFDO3FCQUN4RDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV4QmFzZSwgQXJyYXlCYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cblxubGV0IGlucHV0OiBzdHJpbmdbXSA9IFsna2V5RmllbGRzJywgJ3RleHQnXTtcbmxldCBvdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuLyoqXG4gKiBgZS1zdGFja2VkSGVhZGVyc2AgZGlyZWN0aXZlIHJlcHJlc2VudCBhIHN0YWNrZWQgaGVhZGVyIG9mIHRoZSBLYW5iYW4gYm9hcmQuIFxuICogSXQgbXVzdCBiZSBjb250YWluZWQgaW4gYSBLYW5iYW4gY29tcG9uZW50KGBlanMta2FuYmFuYCkuIFxuICogYGBgaHRtbFxuICogPGVqcy1rYW5iYW4+XG4gKiAgIDxlLXN0YWNrZWRIZWFkZXJzPlxuICogICAgPGUtc3RhY2tlZEhlYWRlciBrZXlGaWVsZD0nT3BlbicgdGV4dD0nVG8gRG8nPjwvZS1zdGFja2VkSGVhZGVyPlxuICogICAgPGUtc3RhY2tlZEhlYWRlciBrZXlGaWVsZD0nQ2xvc2UnIHRleHQ9J0NvbXBsZXRlZCc+PC9lLXN0YWNrZWRIZWFkZXI+XG4gKiAgIDwvZS1zdGFja2VkSGVhZGVycz5cbiAqIDwvZWpzLWthbmJhbj5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Utc3RhY2tlZEhlYWRlcnM+ZS1zdGFja2VkSGVhZGVyJyxcbiAgICBpbnB1dHM6IGlucHV0LFxuICAgIG91dHB1dHM6IG91dHB1dHMsICAgIFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgU3RhY2tlZEhlYWRlckRpcmVjdGl2ZSBleHRlbmRzIENvbXBsZXhCYXNlPFN0YWNrZWRIZWFkZXJEaXJlY3RpdmU+IHtcbiAgICBwdWJsaWMgZGlyZWN0aXZlUHJvcExpc3Q6IGFueTtcblx0XG5cblxuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBtdWx0aXBsZSBjb2x1bW5zIGtleUZpZWxkXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBrZXlGaWVsZHM6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgY29sdW1uIGhlYWRlciB0ZXh0XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyB0ZXh0OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBTdGFja2VkSGVhZGVyIEFycmF5IERpcmVjdGl2ZVxuICogQHByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlanMta2FuYmFuPmUtc3RhY2tlZEhlYWRlcnMnLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oU3RhY2tlZEhlYWRlckRpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBTdGFja2VkSGVhZGVyc0RpcmVjdGl2ZSBleHRlbmRzIEFycmF5QmFzZTxTdGFja2VkSGVhZGVyc0RpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignc3RhY2tlZGhlYWRlcnMnKTtcbiAgICB9XG59Il19