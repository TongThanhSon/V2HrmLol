import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['animationDuration', 'dataSource', 'enableAnimation', 'enableSmartLabels', 'fill', 'marker', 'name', 'opacity', 'points', 'reactance', 'resistance', 'tooltip', 'tooltipMappingName', 'visibility', 'width'];
let outputs = [];
export class SmithchartSeriesDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
SmithchartSeriesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartSeriesDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
SmithchartSeriesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: SmithchartSeriesDirective, selector: "e-seriesCollection>e-series", inputs: { animationDuration: "animationDuration", dataSource: "dataSource", enableAnimation: "enableAnimation", enableSmartLabels: "enableSmartLabels", fill: "fill", marker: "marker", name: "name", opacity: "opacity", points: "points", reactance: "reactance", resistance: "resistance", tooltip: "tooltip", tooltipMappingName: "tooltipMappingName", visibility: "visibility", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartSeriesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-seriesCollection>e-series',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * SmithchartSeries Array Directive
 * @private
 */
export class SmithchartSeriesCollectionDirective extends ArrayBase {
    constructor() {
        super('series');
    }
}
SmithchartSeriesCollectionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartSeriesCollectionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
SmithchartSeriesCollectionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: SmithchartSeriesCollectionDirective, selector: "ejs-smithchart>e-seriesCollection", queries: [{ propertyName: "children", predicate: SmithchartSeriesDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartSeriesCollectionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-smithchart>e-seriesCollection',
                    queries: {
                        children: new ContentChildren(SmithchartSeriesDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zbWl0aGNoYXJ0L3Nlcmllcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUloRixJQUFJLEtBQUssR0FBYSxDQUFDLG1CQUFtQixFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNwTyxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFVM0IsTUFBTSxPQUFPLHlCQUEwQixTQUFRLFdBQXNDO0lBZ0ZqRixZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRWpELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7O3NIQXJGUSx5QkFBeUI7MEdBQXpCLHlCQUF5QjsyRkFBekIseUJBQXlCO2tCQVJyQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsRUFFUjtpQkFDSjs7QUF5RkQ7OztHQUdHO0FBT0gsTUFBTSxPQUFPLG1DQUFvQyxTQUFRLFNBQThDO0lBQ25HO1FBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7O2dJQUhRLG1DQUFtQztvSEFBbkMsbUNBQW1DLGtHQUhWLHlCQUF5QjsyRkFHbEQsbUNBQW1DO2tCQU4vQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxtQ0FBbUM7b0JBQzdDLE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMseUJBQXlCLENBQUM7cUJBQzNEO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBDb250ZW50Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5cblxuXG5sZXQgaW5wdXQ6IHN0cmluZ1tdID0gWydhbmltYXRpb25EdXJhdGlvbicsICdkYXRhU291cmNlJywgJ2VuYWJsZUFuaW1hdGlvbicsICdlbmFibGVTbWFydExhYmVscycsICdmaWxsJywgJ21hcmtlcicsICduYW1lJywgJ29wYWNpdHknLCAncG9pbnRzJywgJ3JlYWN0YW5jZScsICdyZXNpc3RhbmNlJywgJ3Rvb2x0aXAnLCAndG9vbHRpcE1hcHBpbmdOYW1lJywgJ3Zpc2liaWxpdHknLCAnd2lkdGgnXTtcbmxldCBvdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Utc2VyaWVzQ29sbGVjdGlvbj5lLXNlcmllcycsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFNtaXRoY2hhcnRTZXJpZXNEaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxTbWl0aGNoYXJ0U2VyaWVzRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdFxuXG5cbiAgICAvKiogXG4gICAgICogcGVyZm9ybSBhbmltYXRpb24gb2Ygc2VyaWVzIGJhc2VkIG9uIGFuaW1hdGlvbiBkdXJhdGlvbi5cbiAgICAgKiBAZGVmYXVsdCAnMjAwMG1zJ1xuICAgICAqL1xuICAgIHB1YmxpYyBhbmltYXRpb25EdXJhdGlvbjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGRhdGFTb3VyY2VcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQGlzZGF0YW1hbmFnZXIgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgZGF0YVNvdXJjZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYW5pbWF0aW9uIG9mIHNlcmllcy5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBlbmFibGVBbmltYXRpb246IGFueTtcbiAgICAvKiogXG4gICAgICogYXZvaWQgdGhlIG92ZXJsYXAgb2YgZGF0YUxhYmVscy5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBlbmFibGVTbWFydExhYmVsczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBjb2xvciBmb3Igc2VyaWVzLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgZmlsbDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBvcHRpb25zIGZvciBjdXN0b21pemluZyBtYXJrZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgbWFya2VyOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBzZXJpZXMgdmlzaWJsZSBpbiBsZWdlbmQuXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBvcGFjaXR5IGZvciBzZXJpZXMuXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuICAgIHB1YmxpYyBvcGFjaXR5OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIHBvaW50cyBmb3Igc2VyaWVzLlxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG4gICAgcHVibGljIHBvaW50czogYW55O1xuICAgIC8qKiBcbiAgICAgKiByZWFjdGFuY2UgbmFtZSBmb3IgZGF0YVNvdXJjZVxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIHJlYWN0YW5jZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiByZXNpc3RhbmNlIG5hbWUgZm9yIGRhdGFTb3VyY2VcbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyByZXNpc3RhbmNlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIG9wdGlvbnMgZm9yIGN1c3RvbWl6aW5nIHRvb2x0aXBcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9vbHRpcDogYW55O1xuICAgIC8qKiBcbiAgICAgKiB0b29sdGlwIG1hcHBpbmcgbmFtZSBmb3IgdGhlIHNlcmllc1xuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIHRvb2x0aXBNYXBwaW5nTmFtZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiB2aXNpYmlsaXR5IGZvciBzZXJpZXMuXG4gICAgICogQGRlZmF1bHQgJ3Zpc2libGUnXG4gICAgICovXG4gICAgcHVibGljIHZpc2liaWxpdHk6IGFueTtcbiAgICAvKiogXG4gICAgICogd2lkdGggZm9yIHNlcmllcy5cbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG4gICAgcHVibGljIHdpZHRoOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBTbWl0aGNoYXJ0U2VyaWVzIEFycmF5IERpcmVjdGl2ZVxuICogQHByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlanMtc21pdGhjaGFydD5lLXNlcmllc0NvbGxlY3Rpb24nLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oU21pdGhjaGFydFNlcmllc0RpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBTbWl0aGNoYXJ0U2VyaWVzQ29sbGVjdGlvbkRpcmVjdGl2ZSBleHRlbmRzIEFycmF5QmFzZTxTbWl0aGNoYXJ0U2VyaWVzQ29sbGVjdGlvbkRpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignc2VyaWVzJyk7XG4gICAgfVxufSJdfQ==