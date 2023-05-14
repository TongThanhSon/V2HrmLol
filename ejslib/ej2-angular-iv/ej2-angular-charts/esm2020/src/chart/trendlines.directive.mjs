import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['animation', 'backwardForecast', 'dashArray', 'enableTooltip', 'fill', 'forwardForecast', 'intercept', 'legendShape', 'marker', 'name', 'period', 'polynomialOrder', 'type', 'visible', 'width'];
let outputs = [];
/**
 * Series Directive
 * ```html
 * <e-series-collection>
 * <e-series>
 * <e-trendlines>
 * <e-trendline>
 * </e-trendline>
 * </e-trendlines>
 * </e-series-collection>
 * ```
 */
export class TrendlineDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
TrendlineDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TrendlineDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
TrendlineDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: TrendlineDirective, selector: "e-series>e-trendlines>e-trendline", inputs: { animation: "animation", backwardForecast: "backwardForecast", dashArray: "dashArray", enableTooltip: "enableTooltip", fill: "fill", forwardForecast: "forwardForecast", intercept: "intercept", legendShape: "legendShape", marker: "marker", name: "name", period: "period", polynomialOrder: "polynomialOrder", type: "type", visible: "visible", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TrendlineDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-series>e-trendlines>e-trendline',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Trendline Array Directive
 * @private
 */
export class TrendlinesDirective extends ArrayBase {
    constructor() {
        super('trendlines');
    }
}
TrendlinesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TrendlinesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
TrendlinesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: TrendlinesDirective, selector: "e-series>e-trendlines", queries: [{ propertyName: "children", predicate: TrendlineDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TrendlinesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-series>e-trendlines',
                    queries: {
                        children: new ContentChildren(TrendlineDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmRsaW5lcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2hhcnQvdHJlbmRsaW5lcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUloRixJQUFJLEtBQUssR0FBYSxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeE4sSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7Ozs7Ozs7OztHQVdHO0FBU0gsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFdBQStCO0lBaUZuRSxZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRWpELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7OytHQXRGUSxrQkFBa0I7bUdBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQVI5QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxtQ0FBbUM7b0JBQzdDLE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsRUFFUjtpQkFDSjs7QUEwRkQ7OztHQUdHO0FBT0gsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFNBQThCO0lBQ25FO1FBQ0ksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7O2dIQUhRLG1CQUFtQjtvR0FBbkIsbUJBQW1CLHNGQUhNLGtCQUFrQjsyRkFHM0MsbUJBQW1CO2tCQU4vQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMsa0JBQWtCLENBQUM7cUJBQ3BEO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBDb250ZW50Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5cblxuXG5sZXQgaW5wdXQ6IHN0cmluZ1tdID0gWydhbmltYXRpb24nLCAnYmFja3dhcmRGb3JlY2FzdCcsICdkYXNoQXJyYXknLCAnZW5hYmxlVG9vbHRpcCcsICdmaWxsJywgJ2ZvcndhcmRGb3JlY2FzdCcsICdpbnRlcmNlcHQnLCAnbGVnZW5kU2hhcGUnLCAnbWFya2VyJywgJ25hbWUnLCAncGVyaW9kJywgJ3BvbHlub21pYWxPcmRlcicsICd0eXBlJywgJ3Zpc2libGUnLCAnd2lkdGgnXTtcbmxldCBvdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuLyoqXG4gKiBTZXJpZXMgRGlyZWN0aXZlXG4gKiBgYGBodG1sXG4gKiA8ZS1zZXJpZXMtY29sbGVjdGlvbj5cbiAqIDxlLXNlcmllcz5cbiAqIDxlLXRyZW5kbGluZXM+XG4gKiA8ZS10cmVuZGxpbmU+XG4gKiA8L2UtdHJlbmRsaW5lPlxuICogPC9lLXRyZW5kbGluZXM+XG4gKiA8L2Utc2VyaWVzLWNvbGxlY3Rpb24+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlLXNlcmllcz5lLXRyZW5kbGluZXM+ZS10cmVuZGxpbmUnLFxuICAgIGlucHV0czogaW5wdXQsXG4gICAgb3V0cHV0czogb3V0cHV0cywgICAgXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBUcmVuZGxpbmVEaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxUcmVuZGxpbmVEaXJlY3RpdmU+IHtcbiAgICBwdWJsaWMgZGlyZWN0aXZlUHJvcExpc3Q6IGFueTtcblx0XG5cblxuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSB0eXBlIG9mIHRoZSB0cmVuZGxpbmVcbiAgICAgKiBAZGVmYXVsdCAnTGluZWFyJ1xuICAgICAqL1xuICAgIHB1YmxpYyB0eXBlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIE9wdGlvbnMgdG8gY3VzdG9taXplIHRoZSBhbmltYXRpb24gZm9yIHRyZW5kbGluZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgYW5pbWF0aW9uOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIHBlcmlvZCwgYnkgd2hpY2ggdGhlIHRyZW5kIGhhcyB0byBiYWNrd2FyZCBmb3JlY2FzdFxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICBwdWJsaWMgYmFja3dhcmRGb3JlY2FzdDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBwYXR0ZXJuIG9mIGRhc2hlcyBhbmQgZ2FwcyB0byBzdHJva2UuXG4gICAgICogQGRlZmF1bHQgJzAnXG4gICAgICovXG4gICAgcHVibGljIGRhc2hBcnJheTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBFbmFibGVzL2Rpc2FibGVzIHRvb2x0aXAgZm9yIHRyZW5kbGluZXNcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgcHVibGljIGVuYWJsZVRvb2x0aXA6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgZmlsbCBjb2xvciBvZiB0cmVuZGxpbmVcbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyBmaWxsOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIHBlcmlvZCwgYnkgd2hpY2ggdGhlIHRyZW5kIGhhcyB0byBmb3J3YXJkIGZvcmVjYXN0XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHB1YmxpYyBmb3J3YXJkRm9yZWNhc3Q6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgaW50ZXJjZXB0IG9mIHRoZSB0cmVuZGxpbmVcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQGFzcGRlZmF1bHR2YWx1ZWlnbm9yZSBcbiAgICAgKi9cbiAgICBwdWJsaWMgaW50ZXJjZXB0OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgdGhlIGxlZ2VuZCBzaGFwZSBvZiB0aGUgdHJlbmRsaW5lXG4gICAgICogQGRlZmF1bHQgJ1Nlcmllc1R5cGUnXG4gICAgICovXG4gICAgcHVibGljIGxlZ2VuZFNoYXBlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIE9wdGlvbnMgdG8gY3VzdG9taXplIHRoZSBtYXJrZXIgZm9yIHRyZW5kbGluZXNcbiAgICAgKiBAZGVwcmVjYXRlZCBcbiAgICAgKi9cbiAgICBwdWJsaWMgbWFya2VyOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIG5hbWUgb2YgdHJlbmRsaW5lXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBwZXJpb2QsIHRoZSBwcmljZSBjaGFuZ2VzIG92ZXIgd2hpY2ggd2lsbCBiZSBjb25zaWRlcmVkIHRvIHByZWRpY3QgbW92aW5nIGF2ZXJhZ2UgdHJlbmQgbGluZVxuICAgICAqIEBkZWZhdWx0IDJcbiAgICAgKi9cbiAgICBwdWJsaWMgcGVyaW9kOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIHBvbHlub21pYWwgb3JkZXIgb2YgdGhlIHBvbHlub21pYWwgdHJlbmRsaW5lXG4gICAgICogQGRlZmF1bHQgMlxuICAgICAqL1xuICAgIHB1YmxpYyBwb2x5bm9taWFsT3JkZXI6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSB2aXNpYmlsaXR5IG9mIHRyZW5kbGluZS5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgcHVibGljIHZpc2libGU6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgd2lkdGggb2YgdGhlIHRyZW5kbGluZVxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICBwdWJsaWMgd2lkdGg6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZVByb3BMaXN0ID0gaW5wdXQ7XG4gICAgfVxufVxuXG4vKipcbiAqIFRyZW5kbGluZSBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1zZXJpZXM+ZS10cmVuZGxpbmVzJyxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXcgQ29udGVudENoaWxkcmVuKFRyZW5kbGluZURpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUcmVuZGxpbmVzRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPFRyZW5kbGluZXNEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3RyZW5kbGluZXMnKTtcbiAgICB9XG59Il19