import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['animation', 'backwardForecast', 'dashArray', 'enableTooltip', 'fill', 'forwardForecast', 'intercept', 'legendShape', 'marker', 'name', 'period', 'polynomialOrder', 'type', 'visible', 'width'];
let outputs = [];
/**
 * Series Directive
 * ```html
 * <e-stockchart-series-collection>
 * <e-stockchart-series>
 * <e-trendlines>
 * </e-trendline>
 * <e-trendline>
 * </e-trendlines>
 * </e-stockchart-series>
 * </e-stockchart-series-collection>
 * ```
 */
export class StockChartTrendlineDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
StockChartTrendlineDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartTrendlineDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
StockChartTrendlineDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartTrendlineDirective, selector: "e-stockchart-series>e-trendlines>e-trendline", inputs: { animation: "animation", backwardForecast: "backwardForecast", dashArray: "dashArray", enableTooltip: "enableTooltip", fill: "fill", forwardForecast: "forwardForecast", intercept: "intercept", legendShape: "legendShape", marker: "marker", name: "name", period: "period", polynomialOrder: "polynomialOrder", type: "type", visible: "visible", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartTrendlineDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-stockchart-series>e-trendlines>e-trendline',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * StockChartTrendline Array Directive
 * @private
 */
export class StockChartTrendlinesDirective extends ArrayBase {
    constructor() {
        super('trendlines');
    }
}
StockChartTrendlinesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartTrendlinesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StockChartTrendlinesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartTrendlinesDirective, selector: "e-stockchart-series>e-trendlines", queries: [{ propertyName: "children", predicate: StockChartTrendlineDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartTrendlinesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-stockchart-series>e-trendlines',
                    queries: {
                        children: new ContentChildren(StockChartTrendlineDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmRsaW5lcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3RvY2stY2hhcnQvdHJlbmRsaW5lcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUloRixJQUFJLEtBQUssR0FBYSxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeE4sSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7Ozs7Ozs7Ozs7R0FZRztBQVNILE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxXQUF5QztJQWlGdkYsWUFBb0IsZ0JBQWlDO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBRFEscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUVqRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOzt5SEF0RlEsNEJBQTRCOzZHQUE1Qiw0QkFBNEI7MkZBQTVCLDRCQUE0QjtrQkFSeEMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsOENBQThDO29CQUN4RCxNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLEVBRVI7aUJBQ0o7O0FBMEZEOzs7R0FHRztBQU9ILE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxTQUF3QztJQUN2RjtRQUNJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QixDQUFDOzswSEFIUSw2QkFBNkI7OEdBQTdCLDZCQUE2QixpR0FISiw0QkFBNEI7MkZBR3JELDZCQUE2QjtrQkFOekMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsa0NBQWtDO29CQUM1QyxPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLDRCQUE0QixDQUFDO3FCQUM5RDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV4QmFzZSwgQXJyYXlCYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cblxubGV0IGlucHV0OiBzdHJpbmdbXSA9IFsnYW5pbWF0aW9uJywgJ2JhY2t3YXJkRm9yZWNhc3QnLCAnZGFzaEFycmF5JywgJ2VuYWJsZVRvb2x0aXAnLCAnZmlsbCcsICdmb3J3YXJkRm9yZWNhc3QnLCAnaW50ZXJjZXB0JywgJ2xlZ2VuZFNoYXBlJywgJ21hcmtlcicsICduYW1lJywgJ3BlcmlvZCcsICdwb2x5bm9taWFsT3JkZXInLCAndHlwZScsICd2aXNpYmxlJywgJ3dpZHRoJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbi8qKlxuICogU2VyaWVzIERpcmVjdGl2ZVxuICogYGBgaHRtbFxuICogPGUtc3RvY2tjaGFydC1zZXJpZXMtY29sbGVjdGlvbj5cbiAqIDxlLXN0b2NrY2hhcnQtc2VyaWVzPlxuICogPGUtdHJlbmRsaW5lcz5cbiAqIDwvZS10cmVuZGxpbmU+XG4gKiA8ZS10cmVuZGxpbmU+XG4gKiA8L2UtdHJlbmRsaW5lcz5cbiAqIDwvZS1zdG9ja2NoYXJ0LXNlcmllcz5cbiAqIDwvZS1zdG9ja2NoYXJ0LXNlcmllcy1jb2xsZWN0aW9uPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1zdG9ja2NoYXJ0LXNlcmllcz5lLXRyZW5kbGluZXM+ZS10cmVuZGxpbmUnLFxuICAgIGlucHV0czogaW5wdXQsXG4gICAgb3V0cHV0czogb3V0cHV0cywgICAgXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBTdG9ja0NoYXJ0VHJlbmRsaW5lRGlyZWN0aXZlIGV4dGVuZHMgQ29tcGxleEJhc2U8U3RvY2tDaGFydFRyZW5kbGluZURpcmVjdGl2ZT4ge1xuICAgIHB1YmxpYyBkaXJlY3RpdmVQcm9wTGlzdDogYW55O1xuXHRcblxuXG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIHR5cGUgb2YgdGhlIHRyZW5kbGluZVxuICAgICAqIEBkZWZhdWx0ICdMaW5lYXInXG4gICAgICovXG4gICAgcHVibGljIHR5cGU6IGFueTtcbiAgICAvKiogXG4gICAgICogT3B0aW9ucyB0byBjdXN0b21pemUgdGhlIGFuaW1hdGlvbiBmb3IgdHJlbmRsaW5lc1xuICAgICAqL1xuICAgIHB1YmxpYyBhbmltYXRpb246IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgcGVyaW9kLCBieSB3aGljaCB0aGUgdHJlbmQgaGFzIHRvIGJhY2t3YXJkIGZvcmVjYXN0XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHB1YmxpYyBiYWNrd2FyZEZvcmVjYXN0OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIHBhdHRlcm4gb2YgZGFzaGVzIGFuZCBnYXBzIHRvIHN0cm9rZS5cbiAgICAgKiBAZGVmYXVsdCAnMCdcbiAgICAgKi9cbiAgICBwdWJsaWMgZGFzaEFycmF5OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIEVuYWJsZXMvZGlzYWJsZXMgdG9vbHRpcCBmb3IgdHJlbmRsaW5lc1xuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZW5hYmxlVG9vbHRpcDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBmaWxsIGNvbG9yIG9mIHRyZW5kbGluZVxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIGZpbGw6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgcGVyaW9kLCBieSB3aGljaCB0aGUgdHJlbmQgaGFzIHRvIGZvcndhcmQgZm9yZWNhc3RcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgcHVibGljIGZvcndhcmRGb3JlY2FzdDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBpbnRlcmNlcHQgb2YgdGhlIHRyZW5kbGluZVxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKiBAYXNwZGVmYXVsdHZhbHVlaWdub3JlIFxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRlcmNlcHQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyB0aGUgbGVnZW5kIHNoYXBlIG9mIHRoZSB0cmVuZGxpbmVcbiAgICAgKiBAZGVmYXVsdCAnU2VyaWVzVHlwZSdcbiAgICAgKi9cbiAgICBwdWJsaWMgbGVnZW5kU2hhcGU6IGFueTtcbiAgICAvKiogXG4gICAgICogT3B0aW9ucyB0byBjdXN0b21pemUgdGhlIG1hcmtlciBmb3IgdHJlbmRsaW5lc1xuICAgICAqIEBkZXByZWNhdGVkIFxuICAgICAqL1xuICAgIHB1YmxpYyBtYXJrZXI6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgbmFtZSBvZiB0cmVuZGxpbmVcbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIHBlcmlvZCwgdGhlIHByaWNlIGNoYW5nZXMgb3ZlciB3aGljaCB3aWxsIGJlIGNvbnNpZGVyZWQgdG8gcHJlZGljdCBtb3ZpbmcgYXZlcmFnZSB0cmVuZCBsaW5lXG4gICAgICogQGRlZmF1bHQgMlxuICAgICAqL1xuICAgIHB1YmxpYyBwZXJpb2Q6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgcG9seW5vbWlhbCBvcmRlciBvZiB0aGUgcG9seW5vbWlhbCB0cmVuZGxpbmVcbiAgICAgKiBAZGVmYXVsdCAyXG4gICAgICovXG4gICAgcHVibGljIHBvbHlub21pYWxPcmRlcjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHZpc2liaWxpdHkgb2YgdHJlbmRsaW5lLlxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBwdWJsaWMgdmlzaWJsZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSB3aWR0aCBvZiB0aGUgdHJlbmRsaW5lXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuICAgIHB1YmxpYyB3aWR0aDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogU3RvY2tDaGFydFRyZW5kbGluZSBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1zdG9ja2NoYXJ0LXNlcmllcz5lLXRyZW5kbGluZXMnLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oU3RvY2tDaGFydFRyZW5kbGluZURpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBTdG9ja0NoYXJ0VHJlbmRsaW5lc0RpcmVjdGl2ZSBleHRlbmRzIEFycmF5QmFzZTxTdG9ja0NoYXJ0VHJlbmRsaW5lc0RpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigndHJlbmRsaW5lcycpO1xuICAgIH1cbn0iXX0=