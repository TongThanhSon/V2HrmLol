import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { Schedule } from '@syncfusion/ej2-schedule';
import { Template } from '@syncfusion/ej2-angular-base';
import { ViewsDirective } from './views.directive';
import { ResourcesDirective } from './resources.directive';
import { HeaderRowsDirective } from './headerrows.directive';
import * as i0 from "@angular/core";
export const inputs = ['agendaDaysCount', 'allowDragAndDrop', 'allowInline', 'allowKeyboardInteraction', 'allowMultiCellSelection', 'allowMultiDrag', 'allowMultiRowSelection', 'allowResizing', 'calendarMode', 'cellHeaderTemplate', 'cellTemplate', 'cssClass', 'currentView', 'dateFormat', 'dateHeaderTemplate', 'dayHeaderTemplate', 'editorTemplate', 'enableAdaptiveUI', 'enableAllDayScroll', 'enablePersistence', 'enableRecurrenceValidation', 'enableRtl', 'endHour', 'eventDragArea', 'eventSettings', 'firstDayOfWeek', 'firstMonthOfYear', 'group', 'headerIndentTemplate', 'headerRows', 'height', 'hideEmptyAgendaDays', 'locale', 'maxDate', 'minDate', 'monthHeaderTemplate', 'monthsCount', 'quickInfoOnSelectionEnd', 'quickInfoTemplates', 'readonly', 'resourceHeaderTemplate', 'resources', 'rowAutoHeight', 'selectedDate', 'showHeaderBar', 'showQuickInfo', 'showTimeIndicator', 'showWeekNumber', 'showWeekend', 'startHour', 'timeFormat', 'timeScale', 'timezone', 'timezoneDataSource', 'views', 'weekRule', 'width', 'workDays', 'workHours'];
export const outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'cellClick', 'cellDoubleClick', 'created', 'dataBinding', 'dataBound', 'destroyed', 'drag', 'dragStart', 'dragStop', 'eventClick', 'eventRendered', 'hover', 'moreEventsClick', 'navigating', 'popupClose', 'popupOpen', 'renderCell', 'resizeStart', 'resizeStop', 'resizing', 'select', 'currentViewChange', 'selectedDateChange'];
export const twoWays = ['currentView', 'selectedDate'];
/**
 * `ej-schedule` represents the Angular Schedule Component.
 * ```html
 * <ejs-schedule></ejs-schedule>
 * ```
 */
let ScheduleComponent = class ScheduleComponent extends Schedule {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['views', 'resources', 'headerRows'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('ScheduleDay');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleWeek');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleWorkWeek');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleMonth');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleYear');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleAgenda');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleMonthAgenda');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleTimelineViews');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleTimelineMonth');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleTimelineYear');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleResize');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleDragAndDrop');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleExcelExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleICalendarExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleICalendarImport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('SchedulePrint');
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
        this.tagObjects[0].instance = this.childViews;
        if (this.childResources) {
            this.tagObjects[1].instance = this.childResources;
        }
        if (this.childHeaderRows) {
            this.tagObjects[2].instance = this.childHeaderRows;
        }
        this.context.ngAfterContentChecked(this);
    }
};
ScheduleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ScheduleComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
ScheduleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ScheduleComponent, selector: "ejs-schedule", inputs: { agendaDaysCount: "agendaDaysCount", allowDragAndDrop: "allowDragAndDrop", allowInline: "allowInline", allowKeyboardInteraction: "allowKeyboardInteraction", allowMultiCellSelection: "allowMultiCellSelection", allowMultiDrag: "allowMultiDrag", allowMultiRowSelection: "allowMultiRowSelection", allowResizing: "allowResizing", calendarMode: "calendarMode", cellHeaderTemplate: "cellHeaderTemplate", cellTemplate: "cellTemplate", cssClass: "cssClass", currentView: "currentView", dateFormat: "dateFormat", dateHeaderTemplate: "dateHeaderTemplate", dayHeaderTemplate: "dayHeaderTemplate", editorTemplate: "editorTemplate", enableAdaptiveUI: "enableAdaptiveUI", enableAllDayScroll: "enableAllDayScroll", enablePersistence: "enablePersistence", enableRecurrenceValidation: "enableRecurrenceValidation", enableRtl: "enableRtl", endHour: "endHour", eventDragArea: "eventDragArea", eventSettings: "eventSettings", firstDayOfWeek: "firstDayOfWeek", firstMonthOfYear: "firstMonthOfYear", group: "group", headerIndentTemplate: "headerIndentTemplate", headerRows: "headerRows", height: "height", hideEmptyAgendaDays: "hideEmptyAgendaDays", locale: "locale", maxDate: "maxDate", minDate: "minDate", monthHeaderTemplate: "monthHeaderTemplate", monthsCount: "monthsCount", quickInfoOnSelectionEnd: "quickInfoOnSelectionEnd", quickInfoTemplates: "quickInfoTemplates", readonly: "readonly", resourceHeaderTemplate: "resourceHeaderTemplate", resources: "resources", rowAutoHeight: "rowAutoHeight", selectedDate: "selectedDate", showHeaderBar: "showHeaderBar", showQuickInfo: "showQuickInfo", showTimeIndicator: "showTimeIndicator", showWeekNumber: "showWeekNumber", showWeekend: "showWeekend", startHour: "startHour", timeFormat: "timeFormat", timeScale: "timeScale", timezone: "timezone", timezoneDataSource: "timezoneDataSource", views: "views", weekRule: "weekRule", width: "width", workDays: "workDays", workHours: "workHours" }, outputs: { actionBegin: "actionBegin", actionComplete: "actionComplete", actionFailure: "actionFailure", cellClick: "cellClick", cellDoubleClick: "cellDoubleClick", created: "created", dataBinding: "dataBinding", dataBound: "dataBound", destroyed: "destroyed", drag: "drag", dragStart: "dragStart", dragStop: "dragStop", eventClick: "eventClick", eventRendered: "eventRendered", hover: "hover", moreEventsClick: "moreEventsClick", navigating: "navigating", popupClose: "popupClose", popupOpen: "popupOpen", renderCell: "renderCell", resizeStart: "resizeStart", resizeStop: "resizeStop", resizing: "resizing", select: "select", currentViewChange: "currentViewChange", selectedDateChange: "selectedDateChange" }, queries: [{ propertyName: "dateHeaderTemplate", first: true, predicate: ["dateHeaderTemplate"], descendants: true }, { propertyName: "dayHeaderTemplate", first: true, predicate: ["dayHeaderTemplate"], descendants: true }, { propertyName: "cellTemplate", first: true, predicate: ["cellTemplate"], descendants: true }, { propertyName: "cellHeaderTemplate", first: true, predicate: ["cellHeaderTemplate"], descendants: true }, { propertyName: "eventSettings_tooltipTemplate", first: true, predicate: ["eventSettingsTooltipTemplate"], descendants: true }, { propertyName: "eventSettings_template", first: true, predicate: ["eventSettingsTemplate"], descendants: true }, { propertyName: "editorTemplate", first: true, predicate: ["editorTemplate"], descendants: true }, { propertyName: "monthHeaderTemplate", first: true, predicate: ["monthHeaderTemplate"], descendants: true }, { propertyName: "timeScale_minorSlotTemplate", first: true, predicate: ["timeScaleMinorSlotTemplate"], descendants: true }, { propertyName: "timeScale_majorSlotTemplate", first: true, predicate: ["timeScaleMajorSlotTemplate"], descendants: true }, { propertyName: "resourceHeaderTemplate", first: true, predicate: ["resourceHeaderTemplate"], descendants: true }, { propertyName: "headerIndentTemplate", first: true, predicate: ["headerIndentTemplate"], descendants: true }, { propertyName: "quickInfoTemplates_header", first: true, predicate: ["quickInfoTemplatesHeader"], descendants: true }, { propertyName: "quickInfoTemplates_content", first: true, predicate: ["quickInfoTemplatesContent"], descendants: true }, { propertyName: "quickInfoTemplates_footer", first: true, predicate: ["quickInfoTemplatesFooter"], descendants: true }, { propertyName: "group_headerTooltipTemplate", first: true, predicate: ["groupHeaderTooltipTemplate"], descendants: true }, { propertyName: "childViews", first: true, predicate: ViewsDirective, descendants: true }, { propertyName: "childResources", first: true, predicate: ResourcesDirective, descendants: true }, { propertyName: "childHeaderRows", first: true, predicate: HeaderRowsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], ScheduleComponent.prototype, "dateHeaderTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "dayHeaderTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "cellTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "cellHeaderTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "eventSettings_tooltipTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "eventSettings_template", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "editorTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "monthHeaderTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "timeScale_minorSlotTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "timeScale_majorSlotTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "resourceHeaderTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "headerIndentTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "quickInfoTemplates_header", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "quickInfoTemplates_content", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "quickInfoTemplates_footer", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "group_headerTooltipTemplate", void 0);
ScheduleComponent = __decorate([
    ComponentMixins([ComponentBase])
], ScheduleComponent);
export { ScheduleComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ScheduleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-schedule',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childViews: new ContentChild(ViewsDirective),
                        childResources: new ContentChild(ResourcesDirective),
                        childHeaderRows: new ContentChild(HeaderRowsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { dateHeaderTemplate: [{
                type: ContentChild,
                args: ['dateHeaderTemplate']
            }], dayHeaderTemplate: [{
                type: ContentChild,
                args: ['dayHeaderTemplate']
            }], cellTemplate: [{
                type: ContentChild,
                args: ['cellTemplate']
            }], cellHeaderTemplate: [{
                type: ContentChild,
                args: ['cellHeaderTemplate']
            }], eventSettings_tooltipTemplate: [{
                type: ContentChild,
                args: ['eventSettingsTooltipTemplate']
            }], eventSettings_template: [{
                type: ContentChild,
                args: ['eventSettingsTemplate']
            }], editorTemplate: [{
                type: ContentChild,
                args: ['editorTemplate']
            }], monthHeaderTemplate: [{
                type: ContentChild,
                args: ['monthHeaderTemplate']
            }], timeScale_minorSlotTemplate: [{
                type: ContentChild,
                args: ['timeScaleMinorSlotTemplate']
            }], timeScale_majorSlotTemplate: [{
                type: ContentChild,
                args: ['timeScaleMajorSlotTemplate']
            }], resourceHeaderTemplate: [{
                type: ContentChild,
                args: ['resourceHeaderTemplate']
            }], headerIndentTemplate: [{
                type: ContentChild,
                args: ['headerIndentTemplate']
            }], quickInfoTemplates_header: [{
                type: ContentChild,
                args: ['quickInfoTemplatesHeader']
            }], quickInfoTemplates_content: [{
                type: ContentChild,
                args: ['quickInfoTemplatesContent']
            }], quickInfoTemplates_footer: [{
                type: ContentChild,
                args: ['quickInfoTemplatesFooter']
            }], group_headerTooltipTemplate: [{
                type: ContentChild,
                args: ['groupHeaderTooltipTemplate']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsdUJBQXVCLEVBQWlELFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SixPQUFPLEVBQUUsYUFBYSxFQUErQixlQUFlLEVBQTBCLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdJLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUU3RCxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQWEsQ0FBQyxpQkFBaUIsRUFBQyxrQkFBa0IsRUFBQyxhQUFhLEVBQUMsMEJBQTBCLEVBQUMseUJBQXlCLEVBQUMsZ0JBQWdCLEVBQUMsd0JBQXdCLEVBQUMsZUFBZSxFQUFDLGNBQWMsRUFBQyxvQkFBb0IsRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxZQUFZLEVBQUMsb0JBQW9CLEVBQUMsbUJBQW1CLEVBQUMsZ0JBQWdCLEVBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUMsbUJBQW1CLEVBQUMsNEJBQTRCLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxlQUFlLEVBQUMsZUFBZSxFQUFDLGdCQUFnQixFQUFDLGtCQUFrQixFQUFDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLHFCQUFxQixFQUFDLFFBQVEsRUFBQyxTQUFT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SUFBSSxZQUFZLENBQUMsa0JBQWtCLENBQUM7d0JBQ3BELGVBQWUsRUFBRSxJQUFJLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztxQkFDekQ7aUJBQ0o7K0tBNkNVLGtCQUFrQjtzQkFGeEIsWUFBWTt1QkFBQyxvQkFBb0I7Z0JBYTNCLGlCQUFpQjtzQkFGdkIsWUFBWTt1QkFBQyxtQkFBbUI7Z0JBbUIxQixZQUFZO3NCQUZsQixZQUFZO3VCQUFDLGNBQWM7Z0JBYXJCLGtCQUFrQjtzQkFGeEIsWUFBWTt1QkFBQyxvQkFBb0I7Z0JBSzNCLDZCQUE2QjtzQkFGbkMsWUFBWTt1QkFBQyw4QkFBOEI7Z0JBS3JDLHNCQUFzQjtzQkFGNUIsWUFBWTt1QkFBQyx1QkFBdUI7Z0JBYTlCLGNBQWM7c0JBRnBCLFlBQVk7dUJBQUMsZ0JBQWdCO2dCQWF2QixtQkFBbUI7c0JBRnpCLFlBQVk7dUJBQUMscUJBQXFCO2dCQUs1QiwyQkFBMkI7c0JBRmpDLFlBQVk7dUJBQUMsNEJBQTRCO2dCQUtuQywyQkFBMkI7c0JBRmpDLFlBQVk7dUJBQUMsNEJBQTRCO2dCQWtCbkMsc0JBQXNCO3NCQUY1QixZQUFZO3VCQUFDLHdCQUF3QjtnQkFlL0Isb0JBQW9CO3NCQUYxQixZQUFZO3VCQUFDLHNCQUFzQjtnQkFLN0IseUJBQXlCO3NCQUYvQixZQUFZO3VCQUFDLDBCQUEwQjtnQkFLakMsMEJBQTBCO3NCQUZoQyxZQUFZO3VCQUFDLDJCQUEyQjtnQkFLbEMseUJBQXlCO3NCQUYvQixZQUFZO3VCQUFDLDBCQUEwQjtnQkFLakMsMkJBQTJCO3NCQUZqQyxZQUFZO3VCQUFDLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyLCBJbmplY3RvciwgVmFsdWVQcm92aWRlciwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRCYXNlLCBJQ29tcG9uZW50QmFzZSwgYXBwbHlNaXhpbnMsIENvbXBvbmVudE1peGlucywgUHJvcGVydHlDb2xsZWN0aW9uSW5mbywgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcbmltcG9ydCB7IFNjaGVkdWxlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLXNjaGVkdWxlJztcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBWaWV3c0RpcmVjdGl2ZSB9IGZyb20gJy4vdmlld3MuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJlc291cmNlc0RpcmVjdGl2ZSB9IGZyb20gJy4vcmVzb3VyY2VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIZWFkZXJSb3dzRGlyZWN0aXZlIH0gZnJvbSAnLi9oZWFkZXJyb3dzLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBpbnB1dHM6IHN0cmluZ1tdID0gWydhZ2VuZGFEYXlzQ291bnQnLCdhbGxvd0RyYWdBbmREcm9wJywnYWxsb3dJbmxpbmUnLCdhbGxvd0tleWJvYXJkSW50ZXJhY3Rpb24nLCdhbGxvd011bHRpQ2VsbFNlbGVjdGlvbicsJ2FsbG93TXVsdGlEcmFnJywnYWxsb3dNdWx0aVJvd1NlbGVjdGlvbicsJ2FsbG93UmVzaXppbmcnLCdjYWxlbmRhck1vZGUnLCdjZWxsSGVhZGVyVGVtcGxhdGUnLCdjZWxsVGVtcGxhdGUnLCdjc3NDbGFzcycsJ2N1cnJlbnRWaWV3JywnZGF0ZUZvcm1hdCcsJ2RhdGVIZWFkZXJUZW1wbGF0ZScsJ2RheUhlYWRlclRlbXBsYXRlJywnZWRpdG9yVGVtcGxhdGUnLCdlbmFibGVBZGFwdGl2ZVVJJywnZW5hYmxlQWxsRGF5U2Nyb2xsJywnZW5hYmxlUGVyc2lzdGVuY2UnLCdlbmFibGVSZWN1cnJlbmNlVmFsaWRhdGlvbicsJ2VuYWJsZVJ0bCcsJ2VuZEhvdXInLCdldmVudERyYWdBcmVhJywnZXZlbnRTZXR0aW5ncycsJ2ZpcnN0RGF5T2ZXZWVrJywnZmlyc3RNb250aE9mWWVhcicsJ2dyb3VwJywnaGVhZGVySW5kZW50VGVtcGxhdGUnLCdoZWFkZXJSb3dzJywnaGVpZ2h0JywnaGlkZUVtcHR5QWdlbmRhRGF5cycsJ2xvY2FsZScsJ21heERhdGUnLCdtaW5EYXRlJywnbW9udGhIZWFkZXJUZW1wbGF0ZScsJ21vbnRoc0NvdW50JywncXVpY2tJbmZvT25TZWxlY3Rpb25FbmQnLCdxdWlja0luZm9UZW1wbGF0ZXMnLCdyZWFkb25seScsJ3Jlc291cmNlSGVhZGVyVGVtcGxhdGUnLCdyZXNvdXJjZXMnLCdyb3dBdXRvSGVpZ2h0Jywnc2VsZWN0ZWREYXRlJywnc2hvd0hlYWRlckJhcicsJ3Nob3dRdWlja0luZm8nLCdzaG93VGltZUluZGljYXRvcicsJ3Nob3dXZWVrTnVtYmVyJywnc2hvd1dlZWtlbmQnLCdzdGFydEhvdXInLCd0aW1lRm9ybWF0JywndGltZVNjYWxlJywndGltZXpvbmUnLCd0aW1lem9uZURhdGFTb3VyY2UnLCd2aWV3cycsJ3dlZWtSdWxlJywnd2lkdGgnLCd3b3JrRGF5cycsJ3dvcmtIb3VycyddO1xuZXhwb3J0IGNvbnN0IG91dHB1dHM6IHN0cmluZ1tdID0gWydhY3Rpb25CZWdpbicsJ2FjdGlvbkNvbXBsZXRlJywnYWN0aW9uRmFpbHVyZScsJ2NlbGxDbGljaycsJ2NlbGxEb3VibGVDbGljaycsJ2NyZWF0ZWQnLCdkYXRhQmluZGluZycsJ2RhdGFCb3VuZCcsJ2Rlc3Ryb3llZCcsJ2RyYWcnLCdkcmFnU3RhcnQnLCdkcmFnU3RvcCcsJ2V2ZW50Q2xpY2snLCdldmVudFJlbmRlcmVkJywnaG92ZXInLCdtb3JlRXZlbnRzQ2xpY2snLCduYXZpZ2F0aW5nJywncG9wdXBDbG9zZScsJ3BvcHVwT3BlbicsJ3JlbmRlckNlbGwnLCdyZXNpemVTdGFydCcsJ3Jlc2l6ZVN0b3AnLCdyZXNpemluZycsJ3NlbGVjdCcsJ2N1cnJlbnRWaWV3Q2hhbmdlJywnc2VsZWN0ZWREYXRlQ2hhbmdlJ107XG5leHBvcnQgY29uc3QgdHdvV2F5czogc3RyaW5nW10gPSBbJ2N1cnJlbnRWaWV3JywgJ3NlbGVjdGVkRGF0ZSddO1xuXG4vKipcbiAqIGBlai1zY2hlZHVsZWAgcmVwcmVzZW50cyB0aGUgQW5ndWxhciBTY2hlZHVsZSBDb21wb25lbnQuXG4gKiBgYGBodG1sXG4gKiA8ZWpzLXNjaGVkdWxlPjwvZWpzLXNjaGVkdWxlPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZWpzLXNjaGVkdWxlJyxcbiAgICBpbnB1dHM6IGlucHV0cyxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLFxuICAgIHRlbXBsYXRlOiAnJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkVmlld3M6IG5ldyBDb250ZW50Q2hpbGQoVmlld3NEaXJlY3RpdmUpLCBcbiAgICAgICAgY2hpbGRSZXNvdXJjZXM6IG5ldyBDb250ZW50Q2hpbGQoUmVzb3VyY2VzRGlyZWN0aXZlKSwgXG4gICAgICAgIGNoaWxkSGVhZGVyUm93czogbmV3IENvbnRlbnRDaGlsZChIZWFkZXJSb3dzRGlyZWN0aXZlKVxuICAgIH1cbn0pXG5AQ29tcG9uZW50TWl4aW5zKFtDb21wb25lbnRCYXNlXSlcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZUNvbXBvbmVudCBleHRlbmRzIFNjaGVkdWxlIGltcGxlbWVudHMgSUNvbXBvbmVudEJhc2Uge1xuICAgIHB1YmxpYyBjb250ZXh0IDogYW55O1xuICAgIHB1YmxpYyB0YWdPYmplY3RzOiBhbnk7XG5cdGFjdGlvbkJlZ2luOiBhbnk7XG5cdGFjdGlvbkNvbXBsZXRlOiBhbnk7XG5cdGFjdGlvbkZhaWx1cmU6IGFueTtcblx0Y2VsbENsaWNrOiBhbnk7XG5cdGNlbGxEb3VibGVDbGljazogYW55O1xuXHRjcmVhdGVkOiBhbnk7XG5cdGRhdGFCaW5kaW5nOiBhbnk7XG5cdGRhdGFCb3VuZDogYW55O1xuXHRkZXN0cm95ZWQ6IGFueTtcblx0ZHJhZzogYW55O1xuXHRkcmFnU3RhcnQ6IGFueTtcblx0ZHJhZ1N0b3A6IGFueTtcblx0ZXZlbnRDbGljazogYW55O1xuXHRldmVudFJlbmRlcmVkOiBhbnk7XG5cdGhvdmVyOiBhbnk7XG5cdG1vcmVFdmVudHNDbGljazogYW55O1xuXHRuYXZpZ2F0aW5nOiBhbnk7XG5cdHBvcHVwQ2xvc2U6IGFueTtcblx0cG9wdXBPcGVuOiBhbnk7XG5cdHJlbmRlckNlbGw6IGFueTtcblx0cmVzaXplU3RhcnQ6IGFueTtcblx0cmVzaXplU3RvcDogYW55O1xuXHRyZXNpemluZzogYW55O1xuXHRzZWxlY3Q6IGFueTtcblx0Y3VycmVudFZpZXdDaGFuZ2U6IGFueTtcblx0cHVibGljIHNlbGVjdGVkRGF0ZUNoYW5nZTogYW55O1xuICAgIHB1YmxpYyBjaGlsZFZpZXdzOiBRdWVyeUxpc3Q8Vmlld3NEaXJlY3RpdmU+O1xuICAgIHB1YmxpYyBjaGlsZFJlc291cmNlczogUXVlcnlMaXN0PFJlc291cmNlc0RpcmVjdGl2ZT47XG4gICAgcHVibGljIGNoaWxkSGVhZGVyUm93czogUXVlcnlMaXN0PEhlYWRlclJvd3NEaXJlY3RpdmU+O1xuICAgIHB1YmxpYyB0YWdzOiBzdHJpbmdbXSA9IFsndmlld3MnLCAncmVzb3VyY2VzJywgJ2hlYWRlclJvd3MnXTtcbiAgICAvKiogXG4gICAgICogSXQgYWNjZXB0cyBlaXRoZXIgdGhlIHN0cmluZyBvciBIVE1MRWxlbWVudCBhcyB0ZW1wbGF0ZSBkZXNpZ24gY29udGVudCBhbmQgcGFyc2UgaXQgYXBwcm9wcmlhdGVseSBiZWZvcmUgZGlzcGxheWluZyBpdCBvbnRvIFxuICAgICAqIHRoZSBkYXRlIGhlYWRlciBjZWxscy4gVGhlIGZpZWxkIHRoYXQgY2FuIGJlIGFjY2Vzc2VkIHZpYSB0aGlzIHRlbXBsYXRlIGlzIGBkYXRlYC5cbiAgICAgKiBcbiAgICAgKiB7JSBjb2RlQmxvY2sgc3JjPSdzY2hlZHVsZS9kYXRlSGVhZGVyVGVtcGxhdGUvaW5kZXgubWQnICV9eyUgZW5kY29kZUJsb2NrICV9XG4gICAgICogICAgIFxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdkYXRlSGVhZGVyVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGRhdGVIZWFkZXJUZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBJdCBhY2NlcHRzIGVpdGhlciB0aGUgc3RyaW5nIG9yIEhUTUxFbGVtZW50IGFzIHRlbXBsYXRlIGRlc2lnbiBjb250ZW50IGFuZCBwYXJzZSBpdCBhcHByb3ByaWF0ZWx5IGJlZm9yZSBkaXNwbGF5aW5nIGl0IG9udG8gXG4gICAgICogdGhlIGRheSBoZWFkZXIgY2VsbHMuIFRoaXMgdGVtcGxhdGUgaXMgb25seSBhcHBsaWNhYmxlIGZvciB5ZWFyIHZpZXcgaGVhZGVyIGNlbGxzLlxuICAgICAqIFxuICAgICAqIHslIGNvZGVCbG9jayBzcmM9J3NjaGVkdWxlL2RheUhlYWRlclRlbXBsYXRlL2luZGV4Lm1kJyAlfXslIGVuZGNvZGVCbG9jayAlfVxuICAgICAqICAgICBcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnZGF5SGVhZGVyVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGRheUhlYWRlclRlbXBsYXRlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFRoZSB0ZW1wbGF0ZSBvcHRpb24gd2hpY2ggaXMgdXNlZCB0byByZW5kZXIgdGhlIGN1c3RvbWl6ZWQgd29yayBjZWxscyBvbiB0aGUgU2NoZWR1bGUuIEhlcmUsIHRoZSB0ZW1wbGF0ZSBhY2NlcHRzIGVpdGhlciBcbiAgICAgKiAgdGhlIHN0cmluZyBvciBIVE1MRWxlbWVudCBhcyB0ZW1wbGF0ZSBkZXNpZ24gYW5kIHRoZW4gdGhlIHBhcnNlZCBkZXNpZ24gaXMgZGlzcGxheWVkIG9udG8gdGhlIHdvcmsgY2VsbHMuIFxuICAgICAqICBUaGUgZmllbGRzIGFjY2Vzc2libGUgdmlhIHRlbXBsYXRlIGFyZSBhcyBmb2xsb3dzLiBcbiAgICAgKiAqIGRhdGUgXG4gICAgICogKiBncm91cEluZGV4IFxuICAgICAqICogdHlwZVxuICAgICAqIFxuICAgICAqIFJlZmVyIHRvIHRoZSBiZWxvdyBjb2RlIHNuaXBwZXQuXG4gICAgICpcbiAgICAgKnslIGNvZGVCbG9jayBzcmM9J3NjaGVkdWxlL2NlbGxUZW1wbGF0ZS9pbmRleC5tZCcgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2NlbGxUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgY2VsbFRlbXBsYXRlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIEl0IGFjY2VwdHMgZWl0aGVyIHRoZSBzdHJpbmcgb3IgSFRNTEVsZW1lbnQgYXMgdGVtcGxhdGUgZGVzaWduIGNvbnRlbnQgYW5kIHBhcnNlIGl0IGFwcHJvcHJpYXRlbHkgYmVmb3JlIGRpc3BsYXlpbmcgaXQgb250byBcbiAgICAgKiB0aGUgbW9udGggZGF0ZSBjZWxscy4gVGhpcyB0ZW1wbGF0ZSBpcyBvbmx5IGFwcGxpY2FibGUgZm9yIG1vbnRoIHZpZXcgZGF5IGNlbGxzLlxuICAgICAqIFxuICAgICAqIHslIGNvZGVCbG9jayBzcmM9J3NjaGVkdWxlL2NlbGxIZWFkZXJUZW1wbGF0ZS9pbmRleC5tZCcgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2NlbGxIZWFkZXJUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgY2VsbEhlYWRlclRlbXBsYXRlOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZCgnZXZlbnRTZXR0aW5nc1Rvb2x0aXBUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgZXZlbnRTZXR0aW5nc190b29sdGlwVGVtcGxhdGU6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCdldmVudFNldHRpbmdzVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGV2ZW50U2V0dGluZ3NfdGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogVGhlIHRlbXBsYXRlIG9wdGlvbiB0byByZW5kZXIgdGhlIGN1c3RvbWl6ZWQgZWRpdG9yIHdpbmRvdy4gVGhlIGZvcm0gZWxlbWVudHMgZGVmaW5lZCB3aXRoaW4gdGhpcyB0ZW1wbGF0ZSBzaG91bGQgYmUgYWNjb21wYW5pZWQgXG4gICAgICogIHdpdGggYGUtZmllbGRgIGNsYXNzLCBzbyBhcyB0byBmZXRjaCBhbmQgcHJvY2VzcyBpdCBmcm9tIGludGVybmFsbHkuXG4gICAgICogXG4gICAgICogeyUgY29kZUJsb2NrIHNyYz0nc2NoZWR1bGUvZWRpdG9yVGVtcGxhdGUvaW5kZXgubWQnICV9eyUgZW5kY29kZUJsb2NrICV9XG4gICAgICogICAgIFxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdlZGl0b3JUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgZWRpdG9yVGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogSXQgYWNjZXB0cyBlaXRoZXIgdGhlIHN0cmluZyBvciBIVE1MRWxlbWVudCBhcyB0ZW1wbGF0ZSBkZXNpZ24gY29udGVudCBhbmQgcGFyc2UgaXQgYXBwcm9wcmlhdGVseSBiZWZvcmUgZGlzcGxheWluZyBpdCBvbnRvIFxuICAgICAqIHRoZSBtb250aCBoZWFkZXIgY2VsbHMuIFRoaXMgdGVtcGxhdGUgaXMgb25seSBhcHBsaWNhYmxlIGZvciB5ZWFyIHZpZXcgaGVhZGVyIGNlbGxzLlxuICAgICAqIFxuICAgICAqIHslIGNvZGVCbG9jayBzcmM9J3NjaGVkdWxlL21vbnRoSGVhZGVyVGVtcGxhdGUvaW5kZXgubWQnICV9eyUgZW5kY29kZUJsb2NrICV9XG4gICAgICogICAgIFxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdtb250aEhlYWRlclRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBtb250aEhlYWRlclRlbXBsYXRlOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZCgndGltZVNjYWxlTWlub3JTbG90VGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIHRpbWVTY2FsZV9taW5vclNsb3RUZW1wbGF0ZTogYW55O1xuICAgIEBDb250ZW50Q2hpbGQoJ3RpbWVTY2FsZU1ham9yU2xvdFRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyB0aW1lU2NhbGVfbWFqb3JTbG90VGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogVGVtcGxhdGUgb3B0aW9uIHRvIGN1c3RvbWl6ZSB0aGUgcmVzb3VyY2UgaGVhZGVyIGJhci4gSGVyZSwgdGhlIHRlbXBsYXRlIGFjY2VwdHMgZWl0aGVyIFxuICAgICAqICB0aGUgc3RyaW5nIG9yIEhUTUxFbGVtZW50IGFzIHRlbXBsYXRlIGRlc2lnbiBhbmQgdGhlbiB0aGUgcGFyc2VkIGRlc2lnbiBpcyBkaXNwbGF5ZWQgb250byB0aGUgcmVzb3VyY2UgaGVhZGVyIGNlbGxzLiBcbiAgICAgKiBUaGUgZm9sbG93aW5nIGNhbiBiZSBhY2Nlc3NpYmxlIHZpYSB0ZW1wbGF0ZS4gXG4gICAgICogKiByZXNvdXJjZSAtIEFsbCB0aGUgcmVzb3VyY2UgZmllbGRzLiBcbiAgICAgKiAqIHJlc291cmNlRGF0YSAtIG9iamVjdCBjb2xsZWN0aW9uIG9mIGN1cnJlbnQgcmVzb3VyY2UuXG4gICAgICogXG4gICAgICogUmVmZXIgdG8gdGhlIGJlbG93IGNvZGUgc25pcHBldC5cbiAgICAgKlxuICAgICAqeyUgY29kZUJsb2NrIHNyYz0nc2NoZWR1bGUvcmVzb3VyY2VIZWFkZXJUZW1wbGF0ZS9pbmRleC5tZCcgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ3Jlc291cmNlSGVhZGVyVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIHJlc291cmNlSGVhZGVyVGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogVGVtcGxhdGUgb3B0aW9uIHRvIGN1c3RvbWl6ZSB0aGUgaGVhZGVyIGluZGVudCBiYXIuIEhlcmUsIHRoZSB0ZW1wbGF0ZSBhY2NlcHRzIGVpdGhlciBcbiAgICAgKiAgdGhlIHN0cmluZyBvciBIVE1MRWxlbWVudCBhcyB0ZW1wbGF0ZSBkZXNpZ24gYW5kIHRoZW4gdGhlIHBhcnNlZCBkZXNpZ24gaXMgZGlzcGxheWVkIG9udG8gdGhlIGhlYWRlciBpbmRlbnQgY2VsbC5cbiAgICAgKiBcbiAgICAgKiBSZWZlciB0byB0aGUgYmVsb3cgY29kZSBzbmlwcGV0LlxuICAgICAqXG4gICAgICp7JSBjb2RlQmxvY2sgc3JjPSdzY2hlZHVsZS9oZWFkZXJJbmRlbnRUZW1wbGF0ZS9pbmRleC5tZCcgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2hlYWRlckluZGVudFRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBoZWFkZXJJbmRlbnRUZW1wbGF0ZTogYW55O1xuICAgIEBDb250ZW50Q2hpbGQoJ3F1aWNrSW5mb1RlbXBsYXRlc0hlYWRlcicpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgcXVpY2tJbmZvVGVtcGxhdGVzX2hlYWRlcjogYW55O1xuICAgIEBDb250ZW50Q2hpbGQoJ3F1aWNrSW5mb1RlbXBsYXRlc0NvbnRlbnQnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIHF1aWNrSW5mb1RlbXBsYXRlc19jb250ZW50OiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZCgncXVpY2tJbmZvVGVtcGxhdGVzRm9vdGVyJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBxdWlja0luZm9UZW1wbGF0ZXNfZm9vdGVyOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZCgnZ3JvdXBIZWFkZXJUb29sdGlwVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGdyb3VwX2hlYWRlclRvb2x0aXBUZW1wbGF0ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0VsZTogRWxlbWVudFJlZiwgcHJpdmF0ZSBzcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMubmdFbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMgPSB0aGlzLmluamVjdGVkTW9kdWxlcyB8fCBbXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1NjaGVkdWxlRGF5Jyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdTY2hlZHVsZVdlZWsnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1NjaGVkdWxlV29ya1dlZWsnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1NjaGVkdWxlTW9udGgnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1NjaGVkdWxlWWVhcicpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnU2NoZWR1bGVBZ2VuZGEnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1NjaGVkdWxlTW9udGhBZ2VuZGEnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1NjaGVkdWxlVGltZWxpbmVWaWV3cycpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnU2NoZWR1bGVUaW1lbGluZU1vbnRoJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdTY2hlZHVsZVRpbWVsaW5lWWVhcicpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnU2NoZWR1bGVSZXNpemUnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1NjaGVkdWxlRHJhZ0FuZERyb3AnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1NjaGVkdWxlRXhjZWxFeHBvcnQnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1NjaGVkdWxlSUNhbGVuZGFyRXhwb3J0Jyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdTY2hlZHVsZUlDYWxlbmRhckltcG9ydCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnU2NoZWR1bGVQcmludCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuYWRkVHdvV2F5LmNhbGwodGhpcywgdHdvV2F5cyk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLmNvbnRleHQgID0gbmV3IENvbXBvbmVudEJhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5uZ09uSW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRleHQubmdBZnRlclZpZXdJbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm5nT25EZXN0cm95KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFnT2JqZWN0c1swXS5pbnN0YW5jZSA9IHRoaXMuY2hpbGRWaWV3cztcbiAgICAgICAgXG5cdCAgICBpZiAodGhpcy5jaGlsZFJlc291cmNlcykge1xuICAgICAgICAgICAgdGhpcy50YWdPYmplY3RzWzFdLmluc3RhbmNlID0gdGhpcy5jaGlsZFJlc291cmNlcztcbiAgICAgICAgfVxuICAgICAgICBcblx0ICAgIGlmICh0aGlzLmNoaWxkSGVhZGVyUm93cykge1xuICAgICAgICAgICAgdGhpcy50YWdPYmplY3RzWzJdLmluc3RhbmNlID0gdGhpcy5jaGlsZEhlYWRlclJvd3M7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250ZXh0Lm5nQWZ0ZXJDb250ZW50Q2hlY2tlZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJFdmVudHM6IChldmVudExpc3Q6IHN0cmluZ1tdKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBhZGRUd29XYXk6IChwcm9wTGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG59XG5cbiJdfQ==