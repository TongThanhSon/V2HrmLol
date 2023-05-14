import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['point', 'series'];
let outputs = [];
/**
 * Selected Data Directive
 * ```html
 * <e-selecteddataindexes><e-selecteddataindex></e-selecteddataindex><e-selecteddataindexes>
 * ```
 */
export class StockChartSelectedDataIndexDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
StockChartSelectedDataIndexDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartSelectedDataIndexDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
StockChartSelectedDataIndexDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartSelectedDataIndexDirective, selector: "ejs-stockchart-selectedDataIndexes>e-stockchart-selectedDataIndex", inputs: { point: "point", series: "series" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartSelectedDataIndexDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-stockchart-selectedDataIndexes>e-stockchart-selectedDataIndex',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * StockChartSelectedDataIndex Array Directive
 * @private
 */
export class StockChartSelectedDataIndexesDirective extends ArrayBase {
    constructor() {
        super('selecteddataindexes');
    }
}
StockChartSelectedDataIndexesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartSelectedDataIndexesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StockChartSelectedDataIndexesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartSelectedDataIndexesDirective, selector: "ejs-stockchart>e-stockchart-selectedDataIndexes", queries: [{ propertyName: "children", predicate: StockChartSelectedDataIndexDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartSelectedDataIndexesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-stockchart>e-stockchart-selectedDataIndexes',
                    queries: {
                        children: new ContentChildren(StockChartSelectedDataIndexDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWRkYXRhaW5kZXhlcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3RvY2stY2hhcnQvc2VsZWN0ZWRkYXRhaW5kZXhlcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUloRixJQUFJLEtBQUssR0FBYSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMxQyxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFDM0I7Ozs7O0dBS0c7QUFTSCxNQUFNLE9BQU8sb0NBQXFDLFNBQVEsV0FBaUQ7SUFrQnZHLFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7aUlBdkJRLG9DQUFvQztxSEFBcEMsb0NBQW9DOzJGQUFwQyxvQ0FBb0M7a0JBUmhELFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLG1FQUFtRTtvQkFDN0UsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxFQUVSO2lCQUNKOztBQTJCRDs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sc0NBQXVDLFNBQVEsU0FBaUQ7SUFDekc7UUFDSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNqQyxDQUFDOzttSUFIUSxzQ0FBc0M7dUhBQXRDLHNDQUFzQyxnSEFIYixvQ0FBb0M7MkZBRzdELHNDQUFzQztrQkFObEQsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsaURBQWlEO29CQUMzRCxPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLG9DQUFvQyxDQUFDO3FCQUN0RTtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV4QmFzZSwgQXJyYXlCYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cblxubGV0IGlucHV0OiBzdHJpbmdbXSA9IFsncG9pbnQnLCAnc2VyaWVzJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbi8qKlxuICogU2VsZWN0ZWQgRGF0YSBEaXJlY3RpdmVcbiAqIGBgYGh0bWxcbiAqIDxlLXNlbGVjdGVkZGF0YWluZGV4ZXM+PGUtc2VsZWN0ZWRkYXRhaW5kZXg+PC9lLXNlbGVjdGVkZGF0YWluZGV4PjxlLXNlbGVjdGVkZGF0YWluZGV4ZXM+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlanMtc3RvY2tjaGFydC1zZWxlY3RlZERhdGFJbmRleGVzPmUtc3RvY2tjaGFydC1zZWxlY3RlZERhdGFJbmRleCcsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFN0b2NrQ2hhcnRTZWxlY3RlZERhdGFJbmRleERpcmVjdGl2ZSBleHRlbmRzIENvbXBsZXhCYXNlPFN0b2NrQ2hhcnRTZWxlY3RlZERhdGFJbmRleERpcmVjdGl2ZT4ge1xuICAgIHB1YmxpYyBkaXJlY3RpdmVQcm9wTGlzdDogYW55O1xuXHRcblxuXG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyBpbmRleCBvZiBwb2ludFxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKiBAYXNwdHlwZSBpbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgcG9pbnQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIGluZGV4IG9mIHNlcmllc1xuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKiBAYXNwdHlwZSBpbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VyaWVzOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBTdG9ja0NoYXJ0U2VsZWN0ZWREYXRhSW5kZXggQXJyYXkgRGlyZWN0aXZlXG4gKiBAcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1zdG9ja2NoYXJ0PmUtc3RvY2tjaGFydC1zZWxlY3RlZERhdGFJbmRleGVzJyxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXcgQ29udGVudENoaWxkcmVuKFN0b2NrQ2hhcnRTZWxlY3RlZERhdGFJbmRleERpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBTdG9ja0NoYXJ0U2VsZWN0ZWREYXRhSW5kZXhlc0RpcmVjdGl2ZSBleHRlbmRzIEFycmF5QmFzZTxTdG9ja0NoYXJ0U2VsZWN0ZWREYXRhSW5kZXhlc0RpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignc2VsZWN0ZWRkYXRhaW5kZXhlcycpO1xuICAgIH1cbn0iXX0=