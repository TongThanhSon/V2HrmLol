import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['cornerRadius', 'fill', 'handleStrokeColor', 'handleStrokeWidth', 'height', 'iconStrokeColor', 'iconStrokeWidth', 'id', 'margin', 'offset', 'padding', 'pathData', 'visibility', 'width'];
let outputs = [];
/**
 * Nodes Directive
 * ```html
 * <e-nodes>
 * <e-node>
 * <e-node-fixeduserhandles>
 * <e-node-fixeduserhandle>
 * </e-node-fixeduserhandle>
 * </e-node-fixeduserhandles>
 * </e-node>
 * </e-nodes>
 * ```
 */
export class NodeFixedUserHandleDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
NodeFixedUserHandleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NodeFixedUserHandleDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
NodeFixedUserHandleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: NodeFixedUserHandleDirective, selector: "e-node>e-node-fixeduserhandles>e-node-fixeduserhandle", inputs: { cornerRadius: "cornerRadius", fill: "fill", handleStrokeColor: "handleStrokeColor", handleStrokeWidth: "handleStrokeWidth", height: "height", iconStrokeColor: "iconStrokeColor", iconStrokeWidth: "iconStrokeWidth", id: "id", margin: "margin", offset: "offset", padding: "padding", pathData: "pathData", visibility: "visibility", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NodeFixedUserHandleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-node>e-node-fixeduserhandles>e-node-fixeduserhandle',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * NodeFixedUserHandle Array Directive
 * @private
 */
export class NodeFixedUserHandlesDirective extends ArrayBase {
    constructor() {
        super('fixeduserhandles');
    }
}
NodeFixedUserHandlesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NodeFixedUserHandlesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NodeFixedUserHandlesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: NodeFixedUserHandlesDirective, selector: "e-node>e-node-fixeduserhandles", queries: [{ propertyName: "children", predicate: NodeFixedUserHandleDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NodeFixedUserHandlesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-node>e-node-fixeduserhandles',
                    queries: {
                        children: new ContentChildren(NodeFixedUserHandleDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS1maXhlZHVzZXJoYW5kbGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RpYWdyYW0vbm9kZS1maXhlZHVzZXJoYW5kbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFJaEYsSUFBSSxLQUFLLEdBQWEsQ0FBQyxjQUFjLEVBQUUsTUFBTSxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNqTixJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFDM0I7Ozs7Ozs7Ozs7OztHQVlHO0FBU0gsTUFBTSxPQUFPLDRCQUE2QixTQUFRLFdBQXlDO0lBNEV2RixZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRWpELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7O3lIQWpGUSw0QkFBNEI7NkdBQTVCLDRCQUE0QjsyRkFBNUIsNEJBQTRCO2tCQVJ4QyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSx1REFBdUQ7b0JBQ2pFLE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsRUFFUjtpQkFDSjs7QUFxRkQ7OztHQUdHO0FBT0gsTUFBTSxPQUFPLDZCQUE4QixTQUFRLFNBQXdDO0lBQ3ZGO1FBQ0ksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDOUIsQ0FBQzs7MEhBSFEsNkJBQTZCOzhHQUE3Qiw2QkFBNkIsK0ZBSEosNEJBQTRCOzJGQUdyRCw2QkFBNkI7a0JBTnpDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsT0FBTyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxJQUFJLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQztxQkFDOUQ7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcGxleEJhc2UsIEFycmF5QmFzZSwgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2Nvcm5lclJhZGl1cycsICdmaWxsJywgJ2hhbmRsZVN0cm9rZUNvbG9yJywgJ2hhbmRsZVN0cm9rZVdpZHRoJywgJ2hlaWdodCcsICdpY29uU3Ryb2tlQ29sb3InLCAnaWNvblN0cm9rZVdpZHRoJywgJ2lkJywgJ21hcmdpbicsICdvZmZzZXQnLCAncGFkZGluZycsICdwYXRoRGF0YScsICd2aXNpYmlsaXR5JywgJ3dpZHRoJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbi8qKlxuICogTm9kZXMgRGlyZWN0aXZlXG4gKiBgYGBodG1sXG4gKiA8ZS1ub2Rlcz5cbiAqIDxlLW5vZGU+XG4gKiA8ZS1ub2RlLWZpeGVkdXNlcmhhbmRsZXM+XG4gKiA8ZS1ub2RlLWZpeGVkdXNlcmhhbmRsZT5cbiAqIDwvZS1ub2RlLWZpeGVkdXNlcmhhbmRsZT5cbiAqIDwvZS1ub2RlLWZpeGVkdXNlcmhhbmRsZXM+XG4gKiA8L2Utbm9kZT5cbiAqIDwvZS1ub2Rlcz5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Utbm9kZT5lLW5vZGUtZml4ZWR1c2VyaGFuZGxlcz5lLW5vZGUtZml4ZWR1c2VyaGFuZGxlJyxcbiAgICBpbnB1dHM6IGlucHV0LFxuICAgIG91dHB1dHM6IG91dHB1dHMsICAgIFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgTm9kZUZpeGVkVXNlckhhbmRsZURpcmVjdGl2ZSBleHRlbmRzIENvbXBsZXhCYXNlPE5vZGVGaXhlZFVzZXJIYW5kbGVEaXJlY3RpdmU+IHtcbiAgICBwdWJsaWMgZGlyZWN0aXZlUHJvcExpc3Q6IGFueTtcblx0XG5cblxuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGNvcm5lclJhZGl1cyBmb3IgZml4ZWQgdXNlciBoYW5kbGUgY29udGFpbmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHB1YmxpYyBjb3JuZXJSYWRpdXM6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBmaWxsIGNvbG9yIG9mIHRoZSBmaXhlZCB1c2VyIGhhbmRsZVxuICAgICAqIEBkZWZhdWx0ICd0cmFuc3BhcmVudCdcbiAgICAgKi9cbiAgICBwdWJsaWMgZmlsbDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHN0cm9rZSBjb2xvciBvZiB0aGUgZml4ZWQgdXNlciBoYW5kbGUgY29udGFpbmVyXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFuZGxlU3Ryb2tlQ29sb3I6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBzdHJva2Ugd2lkdGggb2YgdGhlIGZpeGVkIHVzZXIgaGFuZGxlIGNvbnRhaW5lclxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFuZGxlU3Ryb2tlV2lkdGg6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBoZWlnaHQgb2YgdGhlIGZpeGVkIHVzZXIgaGFuZGxlXG4gICAgICogQGRlZmF1bHQgMTBcbiAgICAgKi9cbiAgICBwdWJsaWMgaGVpZ2h0OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgc3Ryb2tlIGNvbG9yIG9mIHRoZSBmaXhlZCB1c2VyIGhhbmRsZVxuICAgICAqIEBkZWZhdWx0ICd0cmFuc3BhcmVudCdcbiAgICAgKi9cbiAgICBwdWJsaWMgaWNvblN0cm9rZUNvbG9yOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgc3Ryb2tlIHdpZHRoIG9mIHRoZSBmaXhlZCB1c2VyIGhhbmRsZVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICBwdWJsaWMgaWNvblN0cm9rZVdpZHRoOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgdW5pcXVlIGlkIG9mIHRoZSBmaXhlZCB1c2VyIGhhbmRsZVxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIGlkOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgc3BhY2UgdGhhdCB0aGUgZml4ZWQgdXNlciBoYW5kbGUgaGFzIHRvIGJlIG1vdmVkIGZyb20gaXRzIGFjdHVhbCBwb3NpdGlvblxuICAgICAqIEBkZWZhdWx0IG5ldyBNYXJnaW4oMCwwLDAsMClcbiAgICAgKi9cbiAgICBwdWJsaWMgbWFyZ2luOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgcG9zaXRpb24gb2YgdGhlIG5vZGUgZml4ZWQgdXNlciBoYW5kbGVcbiAgICAgKiBAZGVmYXVsdCB7IHg6IDAsIHk6IDAgfVxuICAgICAqL1xuICAgIHB1YmxpYyBvZmZzZXQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBmaXhlZCB1c2VyIGhhbmRsZSBhbmQgY29udGFpbmVyXG4gICAgICogQGRlZmF1bHQgbmV3IE1hcmdpbigwLDAsMCwwKVxuICAgICAqL1xuICAgIHB1YmxpYyBwYWRkaW5nOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgc2hhcGUgaW5mb3JtYXRpb24gZm9yIGZpeGVkIHVzZXIgaGFuZGxlXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgcGF0aERhdGE6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBmaXhlZCB1c2VyIGhhbmRsZVxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBwdWJsaWMgdmlzaWJpbGl0eTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZHRoIG9mIHRoZSBmaXhlZCB1c2VyIGhhbmRsZVxuICAgICAqIEBkZWZhdWx0IDEwXG4gICAgICovXG4gICAgcHVibGljIHdpZHRoOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBOb2RlRml4ZWRVc2VySGFuZGxlIEFycmF5IERpcmVjdGl2ZVxuICogQHByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlLW5vZGU+ZS1ub2RlLWZpeGVkdXNlcmhhbmRsZXMnLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oTm9kZUZpeGVkVXNlckhhbmRsZURpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb2RlRml4ZWRVc2VySGFuZGxlc0RpcmVjdGl2ZSBleHRlbmRzIEFycmF5QmFzZTxOb2RlRml4ZWRVc2VySGFuZGxlc0RpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZml4ZWR1c2VyaGFuZGxlcycpO1xuICAgIH1cbn0iXX0=