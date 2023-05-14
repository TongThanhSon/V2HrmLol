import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['animation', 'border', 'dashArray', 'dataSource', 'fill', 'opacity', 'query', 'type', 'width', 'xName', 'yName'];
let outputs = [];
/**
 * RangenavigatorSeries Directive
 * ```html
 * <e-rangenavigator-series-collection>
 * <e-rangenavigator-series></e-rangenavigator-series>
 * </e-rangenavigator-series-collection>
 * ```
 */
export class RangenavigatorSeriesDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
RangenavigatorSeriesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangenavigatorSeriesDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
RangenavigatorSeriesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangenavigatorSeriesDirective, selector: "e-rangenavigator-series-collection>e-rangenavigator-series", inputs: { animation: "animation", border: "border", dashArray: "dashArray", dataSource: "dataSource", fill: "fill", opacity: "opacity", query: "query", type: "type", width: "width", xName: "xName", yName: "yName" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangenavigatorSeriesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-rangenavigator-series-collection>e-rangenavigator-series',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * RangenavigatorSeries Array Directive
 * @private
 */
export class RangenavigatorSeriesCollectionDirective extends ArrayBase {
    constructor() {
        super('series');
    }
}
RangenavigatorSeriesCollectionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangenavigatorSeriesCollectionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RangenavigatorSeriesCollectionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangenavigatorSeriesCollectionDirective, selector: "ej-rangenavigator>e-rangenavigator-series-collection", queries: [{ propertyName: "children", predicate: RangenavigatorSeriesDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangenavigatorSeriesCollectionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-rangenavigator>e-rangenavigator-series-collection',
                    queries: {
                        children: new ContentChildren(RangenavigatorSeriesDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yYW5nZS1uYXZpZ2F0b3Ivc2VyaWVzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBSWhGLElBQUksS0FBSyxHQUFhLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3hJLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztBQUMzQjs7Ozs7OztHQU9HO0FBU0gsTUFBTSxPQUFPLDZCQUE4QixTQUFRLFdBQTBDO0lBOER6RixZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRWpELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7OzBIQW5FUSw2QkFBNkI7OEdBQTdCLDZCQUE2QjsyRkFBN0IsNkJBQTZCO2tCQVJ6QyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSw0REFBNEQ7b0JBQ3RFLE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsRUFFUjtpQkFDSjs7QUF1RUQ7OztHQUdHO0FBT0gsTUFBTSxPQUFPLHVDQUF3QyxTQUFRLFNBQWtEO0lBQzNHO1FBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7O29JQUhRLHVDQUF1Qzt3SEFBdkMsdUNBQXVDLHFIQUhkLDZCQUE2QjsyRkFHdEQsdUNBQXVDO2tCQU5uRCxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxzREFBc0Q7b0JBQ2hFLE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMsNkJBQTZCLENBQUM7cUJBQy9EO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBDb250ZW50Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5cblxuXG5sZXQgaW5wdXQ6IHN0cmluZ1tdID0gWydhbmltYXRpb24nLCAnYm9yZGVyJywgJ2Rhc2hBcnJheScsICdkYXRhU291cmNlJywgJ2ZpbGwnLCAnb3BhY2l0eScsICdxdWVyeScsICd0eXBlJywgJ3dpZHRoJywgJ3hOYW1lJywgJ3lOYW1lJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbi8qKlxuICogUmFuZ2VuYXZpZ2F0b3JTZXJpZXMgRGlyZWN0aXZlXG4gKiBgYGBodG1sXG4gKiA8ZS1yYW5nZW5hdmlnYXRvci1zZXJpZXMtY29sbGVjdGlvbj5cbiAqIDxlLXJhbmdlbmF2aWdhdG9yLXNlcmllcz48L2UtcmFuZ2VuYXZpZ2F0b3Itc2VyaWVzPlxuICogPC9lLXJhbmdlbmF2aWdhdG9yLXNlcmllcy1jb2xsZWN0aW9uPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1yYW5nZW5hdmlnYXRvci1zZXJpZXMtY29sbGVjdGlvbj5lLXJhbmdlbmF2aWdhdG9yLXNlcmllcycsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFJhbmdlbmF2aWdhdG9yU2VyaWVzRGlyZWN0aXZlIGV4dGVuZHMgQ29tcGxleEJhc2U8UmFuZ2VuYXZpZ2F0b3JTZXJpZXNEaXJlY3RpdmU+IHtcbiAgICBwdWJsaWMgZGlyZWN0aXZlUHJvcExpc3Q6IGFueTtcblx0XG5cblxuICAgIC8qKiBcbiAgICAgKiBJdCBkZWZpbmVzIHRoZSBzZXJpZXMgdHlwZSBvZiB0aGUgcmFuZ2UgbmF2aWdhdG9yXG4gICAgICogQGRlZmF1bHQgJ0xpbmUnXG4gICAgICovXG4gICAgcHVibGljIHR5cGU6IGFueTtcbiAgICAvKiogXG4gICAgICogT3B0aW9ucyB0byBjdXN0b21pemluZyBhbmltYXRpb24gZm9yIHRoZSBzZXJpZXMuXG4gICAgICovXG4gICAgcHVibGljIGFuaW1hdGlvbjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBPcHRpb25zIGZvciBjdXN0b21pemluZyB0aGUgY29sb3IgYW5kIHdpZHRoIG9mIHRoZSBzZXJpZXMgYm9yZGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBib3JkZXI6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgcGF0dGVybiBvZiBkYXNoZXMgYW5kIGdhcHMgdG8gc3Ryb2tlIHRoZSBsaW5lcyBpbiBgTGluZWAgdHlwZSBzZXJpZXMuXG4gICAgICogQGRlZmF1bHQgJzAnXG4gICAgICovXG4gICAgcHVibGljIGRhc2hBcnJheTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBJdCBkZWZpbmVzIHRoZSBkYXRhIHNvdXJjZSBmb3IgYSBzZXJpZXMuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBkYXRhU291cmNlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFRoZSBmaWxsIGNvbG9yIGZvciB0aGUgc2VyaWVzIHRoYXQgYWNjZXB0cyB2YWx1ZSBpbiBoZXggYW5kIHJnYmEgYXMgYSB2YWxpZCBDU1MgY29sb3Igc3RyaW5nLiBcbiAgICAgKiBJdCBhbHNvIHJlcHJlc2VudHMgdGhlIGNvbG9yIG9mIHRoZSBzaWduYWwgbGluZXMgaW4gdGVjaG5pY2FsIGluZGljYXRvcnMuIFxuICAgICAqIEZvciB0ZWNobmljYWwgaW5kaWNhdG9ycywgdGhlIGRlZmF1bHQgdmFsdWUgaXMgJ2JsdWUnIGFuZCBmb3Igc2VyaWVzLCBpdCBoYXMgbnVsbC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIGZpbGw6IGFueTtcbiAgICAvKiogXG4gICAgICogVGhlIG9wYWNpdHkgZm9yIHRoZSBiYWNrZ3JvdW5kLlxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICBwdWJsaWMgb3BhY2l0eTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBJdCBkZWZpbmVzIHRoZSBxdWVyeSBmb3IgdGhlIGRhdGEgc291cmNlXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBxdWVyeTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUaGUgc3Ryb2tlIHdpZHRoIGZvciB0aGUgc2VyaWVzIHRoYXQgaXMgYXBwbGljYWJsZSBvbmx5IGZvciBgTGluZWAgdHlwZSBzZXJpZXMuIFxuICAgICAqIEl0IGFsc28gcmVwcmVzZW50cyB0aGUgc3Ryb2tlIHdpZHRoIG9mIHRoZSBzaWduYWwgbGluZXMgaW4gdGVjaG5pY2FsIGluZGljYXRvcnMuXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuICAgIHB1YmxpYyB3aWR0aDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBJdCBkZWZpbmVzIHRoZSB4TmFtZSBmb3IgdGhlIHNlcmllc1xuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgeE5hbWU6IGFueTtcbiAgICAvKiogXG4gICAgICogSXQgZGVmaW5lcyB0aGUgeU5hbWUgZm9yIHRoZSBzZXJpZXNcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIHlOYW1lOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBSYW5nZW5hdmlnYXRvclNlcmllcyBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZWotcmFuZ2VuYXZpZ2F0b3I+ZS1yYW5nZW5hdmlnYXRvci1zZXJpZXMtY29sbGVjdGlvbicsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZHJlbjogbmV3IENvbnRlbnRDaGlsZHJlbihSYW5nZW5hdmlnYXRvclNlcmllc0RpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBSYW5nZW5hdmlnYXRvclNlcmllc0NvbGxlY3Rpb25EaXJlY3RpdmUgZXh0ZW5kcyBBcnJheUJhc2U8UmFuZ2VuYXZpZ2F0b3JTZXJpZXNDb2xsZWN0aW9uRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdzZXJpZXMnKTtcbiAgICB9XG59Il19