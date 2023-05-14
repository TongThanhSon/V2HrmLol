import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['alignment', 'cornerRadius', 'displacement', 'fill', 'handleStrokeColor', 'handleStrokeWidth', 'height', 'iconStrokeColor', 'iconStrokeWidth', 'id', 'offset', 'padding', 'pathData', 'visibility', 'width'];
let outputs = [];
/**
 * Connectors Directive
 * ```html
 * <e-connectors>
 * <e-connector>
 * <e-connector-fixeduserhandles>
 * <e-connector-fixeduserhandle>
 * </e-connector-fixeduserhandle>
 * </e-connector-fixeduserhandles>
 * </e-connector>
 * </e-connectors>
 * ```
 */
export class ConnectorFixedUserHandleDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
ConnectorFixedUserHandleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConnectorFixedUserHandleDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ConnectorFixedUserHandleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ConnectorFixedUserHandleDirective, selector: "e-connector>e-connector-fixeduserhandles>e-connector-fixeduserhandle", inputs: { alignment: "alignment", cornerRadius: "cornerRadius", displacement: "displacement", fill: "fill", handleStrokeColor: "handleStrokeColor", handleStrokeWidth: "handleStrokeWidth", height: "height", iconStrokeColor: "iconStrokeColor", iconStrokeWidth: "iconStrokeWidth", id: "id", offset: "offset", padding: "padding", pathData: "pathData", visibility: "visibility", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConnectorFixedUserHandleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-connector>e-connector-fixeduserhandles>e-connector-fixeduserhandle',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * ConnectorFixedUserHandle Array Directive
 * @private
 */
export class ConnectorFixedUserHandlesDirective extends ArrayBase {
    constructor() {
        super('fixeduserhandles');
    }
}
ConnectorFixedUserHandlesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConnectorFixedUserHandlesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ConnectorFixedUserHandlesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ConnectorFixedUserHandlesDirective, selector: "e-connector>e-connector-fixeduserhandles", queries: [{ propertyName: "children", predicate: ConnectorFixedUserHandleDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConnectorFixedUserHandlesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-connector>e-connector-fixeduserhandles',
                    queries: {
                        children: new ContentChildren(ConnectorFixedUserHandleDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdG9yLWZpeGVkdXNlcmhhbmRsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGlhZ3JhbS9jb25uZWN0b3ItZml4ZWR1c2VyaGFuZGxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBSWhGLElBQUksS0FBSyxHQUFhLENBQUMsV0FBVyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3BPLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztBQUMzQjs7Ozs7Ozs7Ozs7O0dBWUc7QUFTSCxNQUFNLE9BQU8saUNBQWtDLFNBQVEsV0FBOEM7SUFxRmpHLFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7OEhBMUZRLGlDQUFpQztrSEFBakMsaUNBQWlDOzJGQUFqQyxpQ0FBaUM7a0JBUjdDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHNFQUFzRTtvQkFDaEYsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxFQUVSO2lCQUNKOztBQThGRDs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sa0NBQW1DLFNBQVEsU0FBNkM7SUFDakc7UUFDSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM5QixDQUFDOzsrSEFIUSxrQ0FBa0M7bUhBQWxDLGtDQUFrQyx5R0FIVCxpQ0FBaUM7MkZBRzFELGtDQUFrQztrQkFOOUMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsMENBQTBDO29CQUNwRCxPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLGlDQUFpQyxDQUFDO3FCQUNuRTtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV4QmFzZSwgQXJyYXlCYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cblxubGV0IGlucHV0OiBzdHJpbmdbXSA9IFsnYWxpZ25tZW50JywgJ2Nvcm5lclJhZGl1cycsICdkaXNwbGFjZW1lbnQnLCAnZmlsbCcsICdoYW5kbGVTdHJva2VDb2xvcicsICdoYW5kbGVTdHJva2VXaWR0aCcsICdoZWlnaHQnLCAnaWNvblN0cm9rZUNvbG9yJywgJ2ljb25TdHJva2VXaWR0aCcsICdpZCcsICdvZmZzZXQnLCAncGFkZGluZycsICdwYXRoRGF0YScsICd2aXNpYmlsaXR5JywgJ3dpZHRoJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbi8qKlxuICogQ29ubmVjdG9ycyBEaXJlY3RpdmVcbiAqIGBgYGh0bWxcbiAqIDxlLWNvbm5lY3RvcnM+XG4gKiA8ZS1jb25uZWN0b3I+XG4gKiA8ZS1jb25uZWN0b3ItZml4ZWR1c2VyaGFuZGxlcz5cbiAqIDxlLWNvbm5lY3Rvci1maXhlZHVzZXJoYW5kbGU+XG4gKiA8L2UtY29ubmVjdG9yLWZpeGVkdXNlcmhhbmRsZT5cbiAqIDwvZS1jb25uZWN0b3ItZml4ZWR1c2VyaGFuZGxlcz5cbiAqIDwvZS1jb25uZWN0b3I+XG4gKiA8L2UtY29ubmVjdG9ycz5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2UtY29ubmVjdG9yPmUtY29ubmVjdG9yLWZpeGVkdXNlcmhhbmRsZXM+ZS1jb25uZWN0b3ItZml4ZWR1c2VyaGFuZGxlJyxcbiAgICBpbnB1dHM6IGlucHV0LFxuICAgIG91dHB1dHM6IG91dHB1dHMsICAgIFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgQ29ubmVjdG9yRml4ZWRVc2VySGFuZGxlRGlyZWN0aXZlIGV4dGVuZHMgQ29tcGxleEJhc2U8Q29ubmVjdG9yRml4ZWRVc2VySGFuZGxlRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdFxuXG5cbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBzZWdtZW50IGFsaWdubWVudCBvZiB0aGUgZml4ZWQgdXNlciBoYW5kbGUgXG4gICAgICogICogQ2VudGVyIC0gQWxpZ25zIHRoZSBhbm5vdGF0aW9uIGF0IHRoZSBjZW50ZXIgb2YgYSBjb25uZWN0b3Igc2VnbWVudCBcbiAgICAgKiAgKiBCZWZvcmUgLSBBbGlnbnMgdGhlIGFubm90YXRpb24gYmVmb3JlIGEgY29ubmVjdG9yIHNlZ21lbnQgXG4gICAgICogICogQWZ0ZXIgLSBBbGlnbnMgdGhlIGFubm90YXRpb24gYWZ0ZXIgYSBjb25uZWN0b3Igc2VnbWVudFxuICAgICAqIEBkZWZhdWx0IENlbnRlclxuICAgICAqL1xuICAgIHB1YmxpYyBhbGlnbm1lbnQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBjb3JuZXJSYWRpdXMgZm9yIGZpeGVkIHVzZXIgaGFuZGxlIGNvbnRhaW5lclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICBwdWJsaWMgY29ybmVyUmFkaXVzOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgZGlzcGxhY2VtZW50IG9mIGFuIGZpeGVkIHVzZXIgaGFuZGxlIGZyb20gaXRzIGFjdHVhbCBwb3NpdGlvblxuICAgICAqIEBhc3BkZWZhdWx0dmFsdWVpZ25vcmUgXG4gICAgICogQGRlZmF1bHQgdW5kZWZpbmVkXG4gICAgICovXG4gICAgcHVibGljIGRpc3BsYWNlbWVudDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGZpbGwgY29sb3Igb2YgdGhlIGZpeGVkIHVzZXIgaGFuZGxlXG4gICAgICogQGRlZmF1bHQgJ3RyYW5zcGFyZW50J1xuICAgICAqL1xuICAgIHB1YmxpYyBmaWxsOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgc3Ryb2tlIGNvbG9yIG9mIHRoZSBmaXhlZCB1c2VyIGhhbmRsZSBjb250YWluZXJcbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGVTdHJva2VDb2xvcjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHN0cm9rZSB3aWR0aCBvZiB0aGUgZml4ZWQgdXNlciBoYW5kbGUgY29udGFpbmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGVTdHJva2VXaWR0aDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGhlaWdodCBvZiB0aGUgZml4ZWQgdXNlciBoYW5kbGVcbiAgICAgKiBAZGVmYXVsdCAxMFxuICAgICAqL1xuICAgIHB1YmxpYyBoZWlnaHQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBzdHJva2UgY29sb3Igb2YgdGhlIGZpeGVkIHVzZXIgaGFuZGxlXG4gICAgICogQGRlZmF1bHQgJ3RyYW5zcGFyZW50J1xuICAgICAqL1xuICAgIHB1YmxpYyBpY29uU3Ryb2tlQ29sb3I6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBzdHJva2Ugd2lkdGggb2YgdGhlIGZpeGVkIHVzZXIgaGFuZGxlXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHB1YmxpYyBpY29uU3Ryb2tlV2lkdGg6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSB1bmlxdWUgaWQgb2YgdGhlIGZpeGVkIHVzZXIgaGFuZGxlXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgaWQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgY29ubmVjdG9yIGZpeGVkIHVzZXIgaGFuZGxlXG4gICAgICogQGRlZmF1bHQgMC41XG4gICAgICovXG4gICAgcHVibGljIG9mZnNldDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHNwYWNlIGJldHdlZW4gdGhlIGZpeGVkIHVzZXIgaGFuZGxlIGFuZCBjb250YWluZXJcbiAgICAgKiBAZGVmYXVsdCBuZXcgTWFyZ2luKDAsMCwwLDApXG4gICAgICovXG4gICAgcHVibGljIHBhZGRpbmc6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBzaGFwZSBpbmZvcm1hdGlvbiBmb3IgZml4ZWQgdXNlciBoYW5kbGVcbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyBwYXRoRGF0YTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGZpeGVkIHVzZXIgaGFuZGxlXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuICAgIHB1YmxpYyB2aXNpYmlsaXR5OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgd2lkdGggb2YgdGhlIGZpeGVkIHVzZXIgaGFuZGxlXG4gICAgICogQGRlZmF1bHQgMTBcbiAgICAgKi9cbiAgICBwdWJsaWMgd2lkdGg6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZVByb3BMaXN0ID0gaW5wdXQ7XG4gICAgfVxufVxuXG4vKipcbiAqIENvbm5lY3RvckZpeGVkVXNlckhhbmRsZSBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1jb25uZWN0b3I+ZS1jb25uZWN0b3ItZml4ZWR1c2VyaGFuZGxlcycsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZHJlbjogbmV3IENvbnRlbnRDaGlsZHJlbihDb25uZWN0b3JGaXhlZFVzZXJIYW5kbGVEaXJlY3RpdmUpXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgQ29ubmVjdG9yRml4ZWRVc2VySGFuZGxlc0RpcmVjdGl2ZSBleHRlbmRzIEFycmF5QmFzZTxDb25uZWN0b3JGaXhlZFVzZXJIYW5kbGVzRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdmaXhlZHVzZXJoYW5kbGVzJyk7XG4gICAgfVxufSJdfQ==