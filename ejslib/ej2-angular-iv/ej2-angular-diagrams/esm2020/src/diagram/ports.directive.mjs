import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['addInfo', 'constraints', 'height', 'horizontalAlignment', 'id', 'inEdges', 'margin', 'offset', 'outEdges', 'pathData', 'shape', 'style', 'verticalAlignment', 'visibility', 'width'];
let outputs = [];
/**
 * Nodes Directive
 * ```html
 * <e-nodes>
 * <e-node>
 * <e-node-ports>
 * <e-node-port>
 * </e-node-port>
 * </e-node-ports>
 * </e-node>
 * </e-nodes>
 * ```
 */
export class PortDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
PortDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PortDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PortDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PortDirective, selector: "e-node>e-node-ports>e-node-port", inputs: { addInfo: "addInfo", constraints: "constraints", height: "height", horizontalAlignment: "horizontalAlignment", id: "id", inEdges: "inEdges", margin: "margin", offset: "offset", outEdges: "outEdges", pathData: "pathData", shape: "shape", style: "style", verticalAlignment: "verticalAlignment", visibility: "visibility", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PortDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-node>e-node-ports>e-node-port',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Port Array Directive
 * @private
 */
export class PortsDirective extends ArrayBase {
    constructor() {
        super('ports');
    }
}
PortsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PortsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PortsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PortsDirective, selector: "e-node>e-node-ports", queries: [{ propertyName: "children", predicate: PortDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PortsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-node>e-node-ports',
                    queries: {
                        children: new ContentChildren(PortDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydHMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RpYWdyYW0vcG9ydHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFJaEYsSUFBSSxLQUFLLEdBQWEsQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM3TSxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFDM0I7Ozs7Ozs7Ozs7OztHQVlHO0FBU0gsTUFBTSxPQUFPLGFBQWMsU0FBUSxXQUEwQjtJQTBHekQsWUFBb0IsZ0JBQWlDO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBRFEscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUVqRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOzswR0EvR1EsYUFBYTs4RkFBYixhQUFhOzJGQUFiLGFBQWE7a0JBUnpCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxFQUVSO2lCQUNKOztBQW1IRDs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sY0FBZSxTQUFRLFNBQXlCO0lBQ3pEO1FBQ0ksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25CLENBQUM7OzJHQUhRLGNBQWM7K0ZBQWQsY0FBYyxvRkFIVyxhQUFhOzJGQUd0QyxjQUFjO2tCQU4xQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMsYUFBYSxDQUFDO3FCQUMvQztpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV4QmFzZSwgQXJyYXlCYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cblxubGV0IGlucHV0OiBzdHJpbmdbXSA9IFsnYWRkSW5mbycsICdjb25zdHJhaW50cycsICdoZWlnaHQnLCAnaG9yaXpvbnRhbEFsaWdubWVudCcsICdpZCcsICdpbkVkZ2VzJywgJ21hcmdpbicsICdvZmZzZXQnLCAnb3V0RWRnZXMnLCAncGF0aERhdGEnLCAnc2hhcGUnLCAnc3R5bGUnLCAndmVydGljYWxBbGlnbm1lbnQnLCAndmlzaWJpbGl0eScsICd3aWR0aCddO1xubGV0IG91dHB1dHM6IHN0cmluZ1tdID0gW107XG4vKipcbiAqIE5vZGVzIERpcmVjdGl2ZVxuICogYGBgaHRtbFxuICogPGUtbm9kZXM+XG4gKiA8ZS1ub2RlPlxuICogPGUtbm9kZS1wb3J0cz5cbiAqIDxlLW5vZGUtcG9ydD5cbiAqIDwvZS1ub2RlLXBvcnQ+XG4gKiA8L2Utbm9kZS1wb3J0cz5cbiAqIDwvZS1ub2RlPlxuICogPC9lLW5vZGVzPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1ub2RlPmUtbm9kZS1wb3J0cz5lLW5vZGUtcG9ydCcsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFBvcnREaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxQb3J0RGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdFxuXG5cbiAgICAvKiogXG4gICAgICogQWxsb3dzIHRoZSB1c2VyIHRvIHNhdmUgY3VzdG9tIGluZm9ybWF0aW9uL2RhdGEgYWJvdXQgYSBwb3J0XG4gICAgICogQGFzcGRlZmF1bHR2YWx1ZWlnbm9yZSBcbiAgICAgKiBAZGVmYXVsdCB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkSW5mbzogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBjb25zdHJhaW50cyBvZiBwb3J0XG4gICAgICogQGRlZmF1bHQgJ0RlZmF1bHQnXG4gICAgICogQGFzcG51bWJlcmVudW0gXG4gICAgICovXG4gICAgcHVibGljIGNvbnN0cmFpbnRzOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgdGhlIGhlaWdodCBvZiB0aGUgcG9ydFxuICAgICAqIEBkZWZhdWx0IDEyXG4gICAgICovXG4gICAgcHVibGljIGhlaWdodDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIHRoZSBob3Jpem9udGFsIGFsaWdubWVudCBvZiB0aGUgcG9ydCB3aXRoIHJlc3BlY3QgdG8gaXRzIGltbWVkaWF0ZSBwYXJlbnQobm9kZS9jb25uZWN0b3IpIFxuICAgICAqICogU3RyZXRjaCAtIFN0cmV0Y2hlcyB0aGUgZGlhZ3JhbSBlbGVtZW50IHRocm91Z2hvdXQgaXRzIGltbWVkaWF0ZSBwYXJlbnQgXG4gICAgICogKiBMZWZ0IC0gQWxpZ25zIHRoZSBkaWFncmFtIGVsZW1lbnQgYXQgdGhlIGxlZnQgb2YgaXRzIGltbWVkaWF0ZSBwYXJlbnQgXG4gICAgICogKiBSaWdodCAtIEFsaWducyB0aGUgZGlhZ3JhbSBlbGVtZW50IGF0IHRoZSByaWdodCBvZiBpdHMgaW1tZWRpYXRlIHBhcmVudCBcbiAgICAgKiAqIENlbnRlciAtIEFsaWducyB0aGUgZGlhZ3JhbSBlbGVtZW50IGF0IHRoZSBjZW50ZXIgb2YgaXRzIGltbWVkaWF0ZSBwYXJlbnQgXG4gICAgICogKiBBdXRvIC0gQWxpZ25zIHRoZSBkaWFncmFtIGVsZW1lbnQgYmFzZWQgb24gdGhlIGNoYXJhY3RlcmlzdGljcyBvZiBpdHMgaW1tZWRpYXRlIHBhcmVudFxuICAgICAqIEBkZWZhdWx0ICdDZW50ZXInXG4gICAgICovXG4gICAgcHVibGljIGhvcml6b250YWxBbGlnbm1lbnQ6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgdW5pcXVlIGlkIG9mIHRoZSBwb3J0XG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgaWQ6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgY29sbGVjdGlvbiBvZiB0aGUgb2JqZWN0cyB0aGF0IGFyZSBjb25uZWN0ZWQgdG8gYSBwYXJ0aWN1bGFyIHBvcnRcbiAgICAgKiBAZGVmYXVsdCB1bmRlZmluZWRcbiAgICAgKiBAYmxhem9yZGVmYXVsdHZhbHVlIG5ldyBzdHJpbmdbXSB7IH1cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5FZGdlczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBzcGFjZSB0aGF0IHRoZSBwb3J0IGhhcyB0byBiZSBtb3ZlZCBmcm9tIGl0cyBhY3R1YWwgcG9zaXRpb25cbiAgICAgKiBAZGVmYXVsdCBuZXcgTWFyZ2luKDAsMCwwLDApXG4gICAgICovXG4gICAgcHVibGljIG1hcmdpbjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9ydCB3aXRoIHJlc3BlY3QgdG8gdGhlIGJvdW5kYXJpZXMgb2Ygbm9kZXMvY29ubmVjdG9yXG4gICAgICogQGRlZmF1bHQgbmV3IFBvaW50KDAuNSwwLjUpXG4gICAgICogQGJsYXpvcnR5cGUgTm9kZVBvcnRPZmZzZXRcbiAgICAgKi9cbiAgICBwdWJsaWMgb2Zmc2V0OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIGNvbGxlY3Rpb24gb2YgdGhlIG9iamVjdHMgdGhhdCBhcmUgY29ubmVjdGVkIHRvIGEgcGFydGljdWxhciBwb3J0XG4gICAgICogQGRlZmF1bHQgdW5kZWZpbmVkXG4gICAgICogQGJsYXpvcmRlZmF1bHR2YWx1ZSBuZXcgc3RyaW5nW10geyB9XG4gICAgICovXG4gICAgcHVibGljIG91dEVkZ2VzOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIGdlb21ldHJ5IG9mIHRoZSBwb3J0XG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgcGF0aERhdGE6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgdHlwZSBvZiB0aGUgcG9ydCBzaGFwZSBcbiAgICAgKiAqIFggLSBTZXRzIHRoZSBkZWNvcmF0b3Igc2hhcGUgYXMgWCBcbiAgICAgKiAqIENpcmNsZSAtIFNldHMgdGhlIGRlY29yYXRvciBzaGFwZSBhcyBDaXJjbGUgXG4gICAgICogKiBTcXVhcmUgLSBTZXRzIHRoZSBkZWNvcmF0b3Igc2hhcGUgYXMgU3F1YXJlIFxuICAgICAqICogQ3VzdG9tIC0gU2V0cyB0aGUgZGVjb3JhdG9yIHNoYXBlIGFzIEN1c3RvbVxuICAgICAqIEBkZWZhdWx0ICdTcXVhcmUnXG4gICAgICovXG4gICAgcHVibGljIHNoYXBlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHBvcnQgXG4gICAgICogXG4gICAgICogQGRlZmF1bHQge31cbiAgICAgKi9cbiAgICBwdWJsaWMgc3R5bGU6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyB0aGUgdmVydGljYWwgYWxpZ25tZW50IG9mIHRoZSBwb3J0IHdpdGggcmVzcGVjdCB0byBpdHMgaW1tZWRpYXRlIHBhcmVudChub2RlL2Nvbm5lY3RvcikgXG4gICAgICogKiBTdHJldGNoIC0gU3RyZXRjaGVzIHRoZSBkaWFncmFtIGVsZW1lbnQgdGhyb3VnaG91dCBpdHMgaW1tZWRpYXRlIHBhcmVudCBcbiAgICAgKiAqIFRvcCAtIEFsaWducyB0aGUgZGlhZ3JhbSBlbGVtZW50IGF0IHRoZSB0b3Agb2YgaXRzIGltbWVkaWF0ZSBwYXJlbnQgXG4gICAgICogKiBCb3R0b20gLSBBbGlnbnMgdGhlIGRpYWdyYW0gZWxlbWVudCBhdCB0aGUgYm90dG9tIG9mIGl0cyBpbW1lZGlhdGUgcGFyZW50IFxuICAgICAqICogQ2VudGVyIC0gQWxpZ25zIHRoZSBkaWFncmFtIGVsZW1lbnQgYXQgdGhlIGNlbnRlciBvZiBpdHMgaW1tZWRpYXRlIHBhcmVudCBcbiAgICAgKiAqIEF1dG8gLSBBbGlnbnMgdGhlIGRpYWdyYW0gZWxlbWVudCBiYXNlZCBvbiB0aGUgY2hhcmFjdGVyaXN0aWNzIG9mIGl0cyBpbW1lZGlhdGUgcGFyZW50XG4gICAgICogQGRlZmF1bHQgJ0NlbnRlcidcbiAgICAgKi9cbiAgICBwdWJsaWMgdmVydGljYWxBbGlnbm1lbnQ6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgdHlwZSBvZiB0aGUgcG9ydCB2aXNpYmlsaXR5IFxuICAgICAqICogVmlzaWJsZSAtIEFsd2F5cyBzaG93cyB0aGUgcG9ydCBcbiAgICAgKiAqIEhpZGRlbiAtIEFsd2F5cyBoaWRlcyB0aGUgcG9ydCBcbiAgICAgKiAqIEhvdmVyIC0gU2hvd3MgdGhlIHBvcnQgd2hlbiB0aGUgbW91c2UgaG92ZXJzIG92ZXIgYSBub2RlIFxuICAgICAqICogQ29ubmVjdCAtIFNob3dzIHRoZSBwb3J0IHdoZW4gYSBjb25uZWN0aW9uIGVuZCBwb2ludCBpcyBkcmFnZ2VkIG92ZXIgYSBub2RlXG4gICAgICogQGRlZmF1bHQgJ0Nvbm5lY3QnXG4gICAgICogQGFzcG51bWJlcmVudW0gXG4gICAgICovXG4gICAgcHVibGljIHZpc2liaWxpdHk6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyB0aGUgd2lkdGggb2YgdGhlIHBvcnRcbiAgICAgKiBAZGVmYXVsdCAxMlxuICAgICAqL1xuICAgIHB1YmxpYyB3aWR0aDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogUG9ydCBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1ub2RlPmUtbm9kZS1wb3J0cycsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZHJlbjogbmV3IENvbnRlbnRDaGlsZHJlbihQb3J0RGlyZWN0aXZlKVxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFBvcnRzRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPFBvcnRzRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdwb3J0cycpO1xuICAgIH1cbn0iXX0=