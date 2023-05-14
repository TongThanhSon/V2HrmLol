import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { PivotView } from '@syncfusion/ej2-pivotview';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
export const inputs = ['aggregateTypes', 'allowCalculatedField', 'allowConditionalFormatting', 'allowDataCompression', 'allowDeferLayoutUpdate', 'allowDrillThrough', 'allowExcelExport', 'allowGrouping', 'allowNumberFormatting', 'allowPdfExport', 'cellTemplate', 'chartSettings', 'chartTypes', 'cssClass', 'currencyCode', 'dataSourceSettings', 'displayOption', 'editSettings', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableValueSorting', 'enableVirtualization', 'exportAllPages', 'gridSettings', 'groupingBarSettings', 'height', 'hyperlinkSettings', 'loadOnDemandInMemberEditor', 'locale', 'maxNodeLimitInMemberEditor', 'maxRowsInDrillThrough', 'pivotValues', 'showFieldList', 'showGroupingBar', 'showToolbar', 'showTooltip', 'showValuesButton', 'spinnerTemplate', 'toolbar', 'toolbarTemplate', 'tooltipTemplate', 'width'];
export const outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'aggregateCellInfo', 'aggregateMenuOpen', 'beforeExport', 'beforeServiceInvoke', 'beginDrillThrough', 'calculatedFieldCreate', 'cellClick', 'cellSelected', 'cellSelecting', 'chartSeriesCreated', 'conditionalFormatting', 'created', 'dataBound', 'destroyed', 'drill', 'drillThrough', 'editCompleted', 'enginePopulated', 'enginePopulating', 'fetchReport', 'fieldDragStart', 'fieldDrop', 'fieldListRefreshed', 'fieldRemove', 'hyperlinkCellClick', 'load', 'loadReport', 'memberEditorOpen', 'memberFiltering', 'newReport', 'numberFormatting', 'onFieldDropped', 'onHeadersSort', 'onPdfCellRender', 'removeReport', 'renameReport', 'saveReport', 'toolbarClick', 'toolbarRender'];
export const twoWays = [];
/**
 * `ej-pivotview` represents the Angular PivotView Component.
 * ```html
 * <ej-pivotview></ej-pivotview>
 * ```
 */
let PivotViewComponent = class PivotViewComponent extends PivotView {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('PivotViewGroupingBar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewFieldList');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewCalculatedField');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewConditionalFormatting');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewVirtualScroll');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewDrillThrough');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewPivotChart');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewPDFExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewExcelExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewNumberFormatting');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewGrouping');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.context.ngAfterContentChecked(this);
    }
};
PivotViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
PivotViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: PivotViewComponent, selector: "ejs-pivotview", inputs: { aggregateTypes: "aggregateTypes", allowCalculatedField: "allowCalculatedField", allowConditionalFormatting: "allowConditionalFormatting", allowDataCompression: "allowDataCompression", allowDeferLayoutUpdate: "allowDeferLayoutUpdate", allowDrillThrough: "allowDrillThrough", allowExcelExport: "allowExcelExport", allowGrouping: "allowGrouping", allowNumberFormatting: "allowNumberFormatting", allowPdfExport: "allowPdfExport", cellTemplate: "cellTemplate", chartSettings: "chartSettings", chartTypes: "chartTypes", cssClass: "cssClass", currencyCode: "currencyCode", dataSourceSettings: "dataSourceSettings", displayOption: "displayOption", editSettings: "editSettings", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enableValueSorting: "enableValueSorting", enableVirtualization: "enableVirtualization", exportAllPages: "exportAllPages", gridSettings: "gridSettings", groupingBarSettings: "groupingBarSettings", height: "height", hyperlinkSettings: "hyperlinkSettings", loadOnDemandInMemberEditor: "loadOnDemandInMemberEditor", locale: "locale", maxNodeLimitInMemberEditor: "maxNodeLimitInMemberEditor", maxRowsInDrillThrough: "maxRowsInDrillThrough", pivotValues: "pivotValues", showFieldList: "showFieldList", showGroupingBar: "showGroupingBar", showToolbar: "showToolbar", showTooltip: "showTooltip", showValuesButton: "showValuesButton", spinnerTemplate: "spinnerTemplate", toolbar: "toolbar", toolbarTemplate: "toolbarTemplate", tooltipTemplate: "tooltipTemplate", width: "width" }, outputs: { actionBegin: "actionBegin", actionComplete: "actionComplete", actionFailure: "actionFailure", aggregateCellInfo: "aggregateCellInfo", aggregateMenuOpen: "aggregateMenuOpen", beforeExport: "beforeExport", beforeServiceInvoke: "beforeServiceInvoke", beginDrillThrough: "beginDrillThrough", calculatedFieldCreate: "calculatedFieldCreate", cellClick: "cellClick", cellSelected: "cellSelected", cellSelecting: "cellSelecting", chartSeriesCreated: "chartSeriesCreated", conditionalFormatting: "conditionalFormatting", created: "created", dataBound: "dataBound", destroyed: "destroyed", drill: "drill", drillThrough: "drillThrough", editCompleted: "editCompleted", enginePopulated: "enginePopulated", enginePopulating: "enginePopulating", fetchReport: "fetchReport", fieldDragStart: "fieldDragStart", fieldDrop: "fieldDrop", fieldListRefreshed: "fieldListRefreshed", fieldRemove: "fieldRemove", hyperlinkCellClick: "hyperlinkCellClick", load: "load", loadReport: "loadReport", memberEditorOpen: "memberEditorOpen", memberFiltering: "memberFiltering", newReport: "newReport", numberFormatting: "numberFormatting", onFieldDropped: "onFieldDropped", onHeadersSort: "onHeadersSort", onPdfCellRender: "onPdfCellRender", removeReport: "removeReport", renameReport: "renameReport", saveReport: "saveReport", toolbarClick: "toolbarClick", toolbarRender: "toolbarRender" }, queries: [{ propertyName: "cellTemplate", first: true, predicate: ["cellTemplate"], descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], PivotViewComponent.prototype, "cellTemplate", void 0);
PivotViewComponent = __decorate([
    ComponentMixins([ComponentBase])
], PivotViewComponent);
export { PivotViewComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-pivotview',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { cellTemplate: [{
                type: ContentChild,
                args: ['cellTemplate']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl2b3R2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9waXZvdHZpZXcvcGl2b3R2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsdUJBQXVCLEVBQWlELFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SixPQUFPLEVBQUUsYUFBYSxFQUErQixlQUFlLEVBQTBCLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdJLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBR3hELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBYSxDQUFDLGdCQUFnQixFQUFDLHNCQUFzQixFQUFDLDRCQUE0QixFQUFDLHNCQUFzQixFQUFDLHdCQUF3QixFQUFDLG1CQUFtQixFQUFDLGtCQUFrQixFQUFDLGVBQWUsRUFBQyx1QkFBdUIsRUFBQyxnQkFBZ0IsRUFBQyxjQUFjLEVBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsY0FBYyxFQUFDLG9CQUFvQixFQUFDLGVBQWUsRUFBQyxjQUFjLEVBQUMscUJBQXFCLEVBQUMsbUJBQW1CLEVBQUMsV0FBVyxFQUFDLG9CQUFvQixFQUFDLHNCQUFzQixFQUFDLGdCQUFnQixFQUFDLGNBQWMsRUFBQyxxQkFBcUIsRUFBQyxRQUFRLEVBQUMsbUJBQW1CLEVBQUMsNEJBQTRCLEVBQUMsUUFBUSxFQUFDLDRCQUE0QixFQUFDLHVCQUF1QixFQUFDLGFBQWEsRUFBQyxlQUFlLEVBQUMsaUJBQWlCLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxrQkFBa0IsRUFBQyxpQkFBaUIsRUFBQyxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxDQUFDLENBQUM7QUFDeHlCLE1BQU0sQ0FB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cG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgUXVlcnlMaXN0LCBSZW5kZXJlcjIsIEluamVjdG9yLCBWYWx1ZVByb3ZpZGVyLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEJhc2UsIElDb21wb25lbnRCYXNlLCBhcHBseU1peGlucywgQ29tcG9uZW50TWl4aW5zLCBQcm9wZXJ0eUNvbGxlY3Rpb25JbmZvLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgUGl2b3RWaWV3IH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLXBpdm90dmlldyc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cbmV4cG9ydCBjb25zdCBpbnB1dHM6IHN0cmluZ1tdID0gWydhZ2dyZWdhdGVUeXBlcycsJ2FsbG93Q2FsY3VsYXRlZEZpZWxkJywnYWxsb3dDb25kaXRpb25hbEZvcm1hdHRpbmcnLCdhbGxvd0RhdGFDb21wcmVzc2lvbicsJ2FsbG93RGVmZXJMYXlvdXRVcGRhdGUnLCdhbGxvd0RyaWxsVGhyb3VnaCcsJ2FsbG93RXhjZWxFeHBvcnQnLCdhbGxvd0dyb3VwaW5nJywnYWxsb3dOdW1iZXJGb3JtYXR0aW5nJywnYWxsb3dQZGZFeHBvcnQnLCdjZWxsVGVtcGxhdGUnLCdjaGFydFNldHRpbmdzJywnY2hhcnRUeXBlcycsJ2Nzc0NsYXNzJywnY3VycmVuY3lDb2RlJywnZGF0YVNvdXJjZVNldHRpbmdzJywnZGlzcGxheU9wdGlvbicsJ2VkaXRTZXR0aW5ncycsJ2VuYWJsZUh0bWxTYW5pdGl6ZXInLCdlbmFibGVQZXJzaXN0ZW5jZScsJ2VuYWJsZVJ0bCcsJ2VuYWJsZVZhbHVlU29ydGluZycsJ2VuYWJsZVZpcnR1YWxpemF0aW9uJywnZXhwb3J0QWxsUGFnZXMnLCdncmlkU2V0dGluZ3MnLCdncm91cGluZ0JhclNldHRpbmdzJywnaGVpZ2h0JywnaHlwZXJsaW5rU2V0dGluZ3MnLCdsb2FkT25EZW1hbmRJbk1lbWJlckVkaXRvcicsJ2xvY2FsZScsJ21heE5vZGVMaW1pdEluTWVtYmVyRWRpdG9yJywnbWF4Um93c0luRHJpbGxUaHJvdWdoJywncGl2b3RWYWx1ZXMnLCdzaG93RmllbGRMaXN0Jywnc2hvd0dyb3VwaW5nQmFyJywnc2hvd1Rvb2xiYXInLCdzaG93VG9vbHRpcCcsJ3Nob3dWYWx1ZXNCdXR0b24nLCdzcGlubmVyVGVtcGxhdGUnLCd0b29sYmFyJywndG9vbGJhclRlbXBsYXRlJywndG9vbHRpcFRlbXBsYXRlJywnd2lkdGgnXTtcbmV4cG9ydCBjb25zdCBvdXRwdXRzOiBzdHJpbmdbXSA9IFsnYWN0aW9uQmVnaW4nLCdhY3Rpb25Db21wbGV0ZScsJ2FjdGlvbkZhaWx1cmUnLCdhZ2dyZWdhdGVDZWxsSW5mbycsJ2FnZ3JlZ2F0ZU1lbnVPcGVuJywnYmVmb3JlRXhwb3J0JywnYmVmb3JlU2VydmljZUludm9rZScsJ2JlZ2luRHJpbGxUaHJvdWdoJywnY2FsY3VsYXRlZEZpZWxkQ3JlYXRlJywnY2VsbENsaWNrJywnY2VsbFNlbGVjdGVkJywnY2VsbFNlbGVjdGluZycsJ2NoYXJ0U2VyaWVzQ3JlYXRlZCcsJ2NvbmRpdGlvbmFsRm9ybWF0dGluZycsJ2NyZWF0ZWQnLCdkYXRhQm91bmQnLCdkZXN0cm95ZWQnLCdkcmlsbCcsJ2RyaWxsVGhyb3VnaCcsJ2VkaXRDb21wbGV0ZWQnLCdlbmdpbmVQb3B1bGF0ZWQnLCdlbmdpbmVQb3B1bGF0aW5nJywnZmV0Y2hSZXBvcnQnLCdmaWVsZERyYWdTdGFydCcsJ2ZpZWxkRHJvcCcsJ2ZpZWxkTGlzdFJlZnJlc2hlZCcsJ2ZpZWxkUmVtb3ZlJywnaHlwZXJsaW5rQ2VsbENsaWNrJywnbG9hZCcsJ2xvYWRSZXBvcnQnLCdtZW1iZXJFZGl0b3JPcGVuJywnbWVtYmVyRmlsdGVyaW5nJywnbmV3UmVwb3J0JywnbnVtYmVyRm9ybWF0dGluZycsJ29uRmllbGREcm9wcGVkJywnb25IZWFkZXJzU29ydCcsJ29uUGRmQ2VsbFJlbmRlcicsJ3JlbW92ZVJlcG9ydCcsJ3JlbmFtZVJlcG9ydCcsJ3NhdmVSZXBvcnQnLCd0b29sYmFyQ2xpY2snLCd0b29sYmFyUmVuZGVyJ107XG5leHBvcnQgY29uc3QgdHdvV2F5czogc3RyaW5nW10gPSBbXTtcblxuLyoqXG4gKiBgZWotcGl2b3R2aWV3YCByZXByZXNlbnRzIHRoZSBBbmd1bGFyIFBpdm90VmlldyBDb21wb25lbnQuXG4gKiBgYGBodG1sXG4gKiA8ZWotcGl2b3R2aWV3PjwvZWotcGl2b3R2aWV3PlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZWpzLXBpdm90dmlldycsXG4gICAgaW5wdXRzOiBpbnB1dHMsXG4gICAgb3V0cHV0czogb3V0cHV0cyxcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbkBDb21wb25lbnRNaXhpbnMoW0NvbXBvbmVudEJhc2VdKVxuZXhwb3J0IGNsYXNzIFBpdm90Vmlld0NvbXBvbmVudCBleHRlbmRzIFBpdm90VmlldyBpbXBsZW1lbnRzIElDb21wb25lbnRCYXNlIHtcbiAgICBwdWJsaWMgY29udGV4dCA6IGFueTtcbiAgICBwdWJsaWMgdGFnT2JqZWN0czogYW55O1xuXHRhY3Rpb25CZWdpbjogYW55O1xuXHRhY3Rpb25Db21wbGV0ZTogYW55O1xuXHRhY3Rpb25GYWlsdXJlOiBhbnk7XG5cdGFnZ3JlZ2F0ZUNlbGxJbmZvOiBhbnk7XG5cdGFnZ3JlZ2F0ZU1lbnVPcGVuOiBhbnk7XG5cdGJlZm9yZUV4cG9ydDogYW55O1xuXHRiZWZvcmVTZXJ2aWNlSW52b2tlOiBhbnk7XG5cdGJlZ2luRHJpbGxUaHJvdWdoOiBhbnk7XG5cdGNhbGN1bGF0ZWRGaWVsZENyZWF0ZTogYW55O1xuXHRjZWxsQ2xpY2s6IGFueTtcblx0Y2VsbFNlbGVjdGVkOiBhbnk7XG5cdGNlbGxTZWxlY3Rpbmc6IGFueTtcblx0Y2hhcnRTZXJpZXNDcmVhdGVkOiBhbnk7XG5cdGNvbmRpdGlvbmFsRm9ybWF0dGluZzogYW55O1xuXHRjcmVhdGVkOiBhbnk7XG5cdGRhdGFCb3VuZDogYW55O1xuXHRkZXN0cm95ZWQ6IGFueTtcblx0ZHJpbGw6IGFueTtcblx0ZHJpbGxUaHJvdWdoOiBhbnk7XG5cdGVkaXRDb21wbGV0ZWQ6IGFueTtcblx0ZW5naW5lUG9wdWxhdGVkOiBhbnk7XG5cdGVuZ2luZVBvcHVsYXRpbmc6IGFueTtcblx0ZmV0Y2hSZXBvcnQ6IGFueTtcblx0ZmllbGREcmFnU3RhcnQ6IGFueTtcblx0ZmllbGREcm9wOiBhbnk7XG5cdGZpZWxkTGlzdFJlZnJlc2hlZDogYW55O1xuXHRmaWVsZFJlbW92ZTogYW55O1xuXHRoeXBlcmxpbmtDZWxsQ2xpY2s6IGFueTtcblx0bG9hZDogYW55O1xuXHRsb2FkUmVwb3J0OiBhbnk7XG5cdG1lbWJlckVkaXRvck9wZW46IGFueTtcblx0bWVtYmVyRmlsdGVyaW5nOiBhbnk7XG5cdG5ld1JlcG9ydDogYW55O1xuXHRudW1iZXJGb3JtYXR0aW5nOiBhbnk7XG5cdG9uRmllbGREcm9wcGVkOiBhbnk7XG5cdG9uSGVhZGVyc1NvcnQ6IGFueTtcblx0b25QZGZDZWxsUmVuZGVyOiBhbnk7XG5cdHJlbW92ZVJlcG9ydDogYW55O1xuXHRyZW5hbWVSZXBvcnQ6IGFueTtcblx0c2F2ZVJlcG9ydDogYW55O1xuXHR0b29sYmFyQ2xpY2s6IGFueTtcblx0cHVibGljIHRvb2xiYXJSZW5kZXI6IGFueTtcblxuXG4gICAgLyoqIFxuICAgICAqIEFsbG93cyB0aGUgdGFibGUgY2VsbCBlbGVtZW50cyB0byBiZSBjdXN0b21pemVkIHdpdGggZWl0aGVyIGFuIEhUTUwgc3RyaW5nIG9yIHRoZSBlbGVtZW504oCZcyBJRCwgXG4gICAgICogdGhhdCBjYW4gYmUgdXNlZCB0byBhZGQgYWRkaXRpb25hbCBIVE1MIGVsZW1lbnRzIHdpdGggY3VzdG9tIGZvcm1hdHMgdG8gdGhlIGNlbGwgZWxlbWVudHMgdGhhdCBhcmUgZGlzcGxheWVkIGluIHRoZSBwaXZvdCB0YWJsZS5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnY2VsbFRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBjZWxsVGVtcGxhdGU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdFbGU6IEVsZW1lbnRSZWYsIHByaXZhdGUgc3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLm5nRWxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzID0gdGhpcy5pbmplY3RlZE1vZHVsZXMgfHwgW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdQaXZvdFZpZXdHcm91cGluZ0JhcicpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnUGl2b3RWaWV3RmllbGRMaXN0Jyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdQaXZvdFZpZXdDYWxjdWxhdGVkRmllbGQnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1Bpdm90Vmlld0NvbmRpdGlvbmFsRm9ybWF0dGluZycpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnUGl2b3RWaWV3VmlydHVhbFNjcm9sbCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnUGl2b3RWaWV3RHJpbGxUaHJvdWdoJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdQaXZvdFZpZXdUb29sYmFyJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdQaXZvdFZpZXdQaXZvdENoYXJ0Jyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdQaXZvdFZpZXdQREZFeHBvcnQnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1Bpdm90Vmlld0V4Y2VsRXhwb3J0Jyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdQaXZvdFZpZXdOdW1iZXJGb3JtYXR0aW5nJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdQaXZvdFZpZXdHcm91cGluZycpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuYWRkVHdvV2F5LmNhbGwodGhpcywgdHdvV2F5cyk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLmNvbnRleHQgID0gbmV3IENvbXBvbmVudEJhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5uZ09uSW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRleHQubmdBZnRlclZpZXdJbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm5nT25EZXN0cm95KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNvbnRleHQubmdBZnRlckNvbnRlbnRDaGVja2VkKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckV2ZW50czogKGV2ZW50TGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG4gICAgcHVibGljIGFkZFR3b1dheTogKHByb3BMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbn1cblxuIl19