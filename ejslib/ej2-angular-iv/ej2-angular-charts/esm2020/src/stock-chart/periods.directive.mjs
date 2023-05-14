import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['interval', 'intervalType', 'selected', 'text'];
let outputs = [];
/**
 * Indicator Directive
 * ```html
 * <e-stockchart-periods>
 * <e-stockchart-period></e-stockchart-period>
 * </e-stockchart-periods>
 * ```
 */
export class StockChartPeriodDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
StockChartPeriodDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartPeriodDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
StockChartPeriodDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartPeriodDirective, selector: "e-stockchart-indicators>e-stockchart-period", inputs: { interval: "interval", intervalType: "intervalType", selected: "selected", text: "text" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartPeriodDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-stockchart-indicators>e-stockchart-period',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * StockChartPeriod Array Directive
 * @private
 */
export class StockChartPeriodsDirective extends ArrayBase {
    constructor() {
        super('periods');
    }
}
StockChartPeriodsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartPeriodsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StockChartPeriodsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartPeriodsDirective, selector: "ejs-stockchart>e-stockchart-periods", queries: [{ propertyName: "children", predicate: StockChartPeriodDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartPeriodsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-stockchart>e-stockchart-periods',
                    queries: {
                        children: new ContentChildren(StockChartPeriodDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyaW9kcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3RvY2stY2hhcnQvcGVyaW9kcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUloRixJQUFJLEtBQUssR0FBYSxDQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZFLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztBQUMzQjs7Ozs7OztHQU9HO0FBU0gsTUFBTSxPQUFPLHlCQUEwQixTQUFRLFdBQXNDO0lBMEJqRixZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRWpELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7O3NIQS9CUSx5QkFBeUI7MEdBQXpCLHlCQUF5QjsyRkFBekIseUJBQXlCO2tCQVJyQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSw2Q0FBNkM7b0JBQ3ZELE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsRUFFUjtpQkFDSjs7QUFtQ0Q7OztHQUdHO0FBT0gsTUFBTSxPQUFPLDBCQUEyQixTQUFRLFNBQXFDO0lBQ2pGO1FBQ0ksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7O3VIQUhRLDBCQUEwQjsyR0FBMUIsMEJBQTBCLG9HQUhELHlCQUF5QjsyRkFHbEQsMEJBQTBCO2tCQU50QyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxxQ0FBcUM7b0JBQy9DLE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMseUJBQXlCLENBQUM7cUJBQzNEO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBDb250ZW50Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5cblxuXG5sZXQgaW5wdXQ6IHN0cmluZ1tdID0gWydpbnRlcnZhbCcsICdpbnRlcnZhbFR5cGUnLCAnc2VsZWN0ZWQnLCAndGV4dCddO1xubGV0IG91dHB1dHM6IHN0cmluZ1tdID0gW107XG4vKipcbiAqIEluZGljYXRvciBEaXJlY3RpdmVcbiAqIGBgYGh0bWxcbiAqIDxlLXN0b2NrY2hhcnQtcGVyaW9kcz5cbiAqIDxlLXN0b2NrY2hhcnQtcGVyaW9kPjwvZS1zdG9ja2NoYXJ0LXBlcmlvZD5cbiAqIDwvZS1zdG9ja2NoYXJ0LXBlcmlvZHM+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlLXN0b2NrY2hhcnQtaW5kaWNhdG9ycz5lLXN0b2NrY2hhcnQtcGVyaW9kJyxcbiAgICBpbnB1dHM6IGlucHV0LFxuICAgIG91dHB1dHM6IG91dHB1dHMsICAgIFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgU3RvY2tDaGFydFBlcmlvZERpcmVjdGl2ZSBleHRlbmRzIENvbXBsZXhCYXNlPFN0b2NrQ2hhcnRQZXJpb2REaXJlY3RpdmU+IHtcbiAgICBwdWJsaWMgZGlyZWN0aXZlUHJvcExpc3Q6IGFueTtcblx0XG5cblxuICAgIC8qKiBcbiAgICAgKiBDb3VudCB2YWx1ZSBmb3IgdGhlIGJ1dHRvblxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICBwdWJsaWMgaW50ZXJ2YWw6IGFueTtcbiAgICAvKiogXG4gICAgICogSW50ZXJ2YWxUeXBlIG9mIGJ1dHRvblxuICAgICAqIEBkZWZhdWx0ICdZZWFycydcbiAgICAgKi9cbiAgICBwdWJsaWMgaW50ZXJ2YWxUeXBlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFRvIHNlbGVjdCB0aGUgZGVmYXVsdCBwZXJpb2RcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RlZDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUZXh0IHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgYnV0dG9uXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyB0ZXh0OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBTdG9ja0NoYXJ0UGVyaW9kIEFycmF5IERpcmVjdGl2ZVxuICogQHByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlanMtc3RvY2tjaGFydD5lLXN0b2NrY2hhcnQtcGVyaW9kcycsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZHJlbjogbmV3IENvbnRlbnRDaGlsZHJlbihTdG9ja0NoYXJ0UGVyaW9kRGlyZWN0aXZlKVxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b2NrQ2hhcnRQZXJpb2RzRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPFN0b2NrQ2hhcnRQZXJpb2RzRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdwZXJpb2RzJyk7XG4gICAgfVxufSJdfQ==