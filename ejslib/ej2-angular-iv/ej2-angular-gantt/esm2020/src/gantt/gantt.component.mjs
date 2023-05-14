import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { Gantt } from '@syncfusion/ej2-gantt';
import { Template } from '@syncfusion/ej2-angular-base';
import { ColumnsDirective } from './columns.directive';
import { AddDialogFieldsDirective } from './adddialogfields.directive';
import { EditDialogFieldsDirective } from './editdialogfields.directive';
import { DayWorkingTimeCollectionDirective } from './dayworkingtime.directive';
import { HolidaysDirective } from './holidays.directive';
import { EventMarkersDirective } from './eventmarkers.directive';
import * as i0 from "@angular/core";
export const inputs = ['addDialogFields', 'allowExcelExport', 'allowFiltering', 'allowKeyboard', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowUnscheduledTasks', 'autoFocusTasks', 'baselineColor', 'collapseAllParentTasks', 'columnMenuItems', 'columns', 'connectorLineBackground', 'connectorLineWidth', 'contextMenuItems', 'dataSource', 'dateFormat', 'dayWorkingTime', 'disableHtmlEncode', 'durationUnit', 'editDialogFields', 'editSettings', 'enableContextMenu', 'enableImmutableMode', 'enableMultiTaskbar', 'enablePersistence', 'enablePredecessorValidation', 'enableRtl', 'enableVirtualization', 'eventMarkers', 'filterSettings', 'gridLines', 'height', 'highlightWeekends', 'holidays', 'includeWeekend', 'labelSettings', 'locale', 'milestoneTemplate', 'parentTaskbarTemplate', 'projectEndDate', 'projectStartDate', 'query', 'readOnly', 'renderBaseline', 'resourceFields', 'resourceIDMapping', 'resourceNameMapping', 'resources', 'rowHeight', 'searchSettings', 'segmentData', 'selectedRowIndex', 'selectionSettings', 'showColumnMenu', 'showInlineNotes', 'showOverAllocation', 'sortSettings', 'splitterSettings', 'taskFields', 'taskMode', 'taskType', 'taskbarHeight', 'taskbarTemplate', 'timelineSettings', 'timezone', 'toolbar', 'tooltipSettings', 'treeColumnIndex', 'validateManualTasksOnLinking', 'viewType', 'width', 'workUnit', 'workWeek'];
export const outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeExcelExport', 'beforePdfExport', 'beforeTooltipRender', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSelected', 'cellSelecting', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'dataStateChange', 'destroyed', 'endEdit', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'expanded', 'expanding', 'headerCellInfo', 'load', 'onMouseMove', 'onTaskbarClick', 'pdfColumnHeaderQueryCellInfo', 'pdfExportComplete', 'pdfQueryCellInfo', 'pdfQueryTaskbarInfo', 'pdfQueryTimelineCellInfo', 'queryCellInfo', 'queryTaskbarInfo', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'splitterResizeStart', 'splitterResized', 'splitterResizing', 'taskbarEdited', 'taskbarEditing', 'toolbarClick', 'dataSourceChange'];
export const twoWays = ['dataSource'];
/**
 * `ejs-gantt` represents the Angular Gantt Component.
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'></ejs-gantt>
 * ```
 */
let GanttComponent = class GanttComponent extends Gantt {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['columns', 'addDialogFields', 'editDialogFields', 'dayWorkingTime', 'holidays', 'eventMarkers'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('GanttFilter');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttSort');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttReorder');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttResize');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttEdit');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttDayMarkers');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttContextMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttExcelExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttRowDD');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttColumnMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttPdfExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttVirtualScroll');
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
        this.tagObjects[0].instance = this.childColumns;
        if (this.childAddDialogFields) {
            this.tagObjects[1].instance = this.childAddDialogFields;
        }
        if (this.childEditDialogFields) {
            this.tagObjects[2].instance = this.childEditDialogFields;
        }
        if (this.childDayWorkingTime) {
            this.tagObjects[3].instance = this.childDayWorkingTime;
        }
        if (this.childHolidays) {
            this.tagObjects[4].instance = this.childHolidays;
        }
        if (this.childEventMarkers) {
            this.tagObjects[5].instance = this.childEventMarkers;
        }
        this.context.ngAfterContentChecked(this);
    }
};
GanttComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GanttComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
GanttComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: GanttComponent, selector: "ejs-gantt", inputs: { addDialogFields: "addDialogFields", allowExcelExport: "allowExcelExport", allowFiltering: "allowFiltering", allowKeyboard: "allowKeyboard", allowPdfExport: "allowPdfExport", allowReordering: "allowReordering", allowResizing: "allowResizing", allowRowDragAndDrop: "allowRowDragAndDrop", allowSelection: "allowSelection", allowSorting: "allowSorting", allowUnscheduledTasks: "allowUnscheduledTasks", autoFocusTasks: "autoFocusTasks", baselineColor: "baselineColor", collapseAllParentTasks: "collapseAllParentTasks", columnMenuItems: "columnMenuItems", columns: "columns", connectorLineBackground: "connectorLineBackground", connectorLineWidth: "connectorLineWidth", contextMenuItems: "contextMenuItems", dataSource: "dataSource", dateFormat: "dateFormat", dayWorkingTime: "dayWorkingTime", disableHtmlEncode: "disableHtmlEncode", durationUnit: "durationUnit", editDialogFields: "editDialogFields", editSettings: "editSettings", enableContextMenu: "enableContextMenu", enableImmutableMode: "enableImmutableMode", enableMultiTaskbar: "enableMultiTaskbar", enablePersistence: "enablePersistence", enablePredecessorValidation: "enablePredecessorValidation", enableRtl: "enableRtl", enableVirtualization: "enableVirtualization", eventMarkers: "eventMarkers", filterSettings: "filterSettings", gridLines: "gridLines", height: "height", highlightWeekends: "highlightWeekends", holidays: "holidays", includeWeekend: "includeWeekend", labelSettings: "labelSettings", locale: "locale", milestoneTemplate: "milestoneTemplate", parentTaskbarTemplate: "parentTaskbarTemplate", projectEndDate: "projectEndDate", projectStartDate: "projectStartDate", query: "query", readOnly: "readOnly", renderBaseline: "renderBaseline", resourceFields: "resourceFields", resourceIDMapping: "resourceIDMapping", resourceNameMapping: "resourceNameMapping", resources: "resources", rowHeight: "rowHeight", searchSettings: "searchSettings", segmentData: "segmentData", selectedRowIndex: "selectedRowIndex", selectionSettings: "selectionSettings", showColumnMenu: "showColumnMenu", showInlineNotes: "showInlineNotes", showOverAllocation: "showOverAllocation", sortSettings: "sortSettings", splitterSettings: "splitterSettings", taskFields: "taskFields", taskMode: "taskMode", taskType: "taskType", taskbarHeight: "taskbarHeight", taskbarTemplate: "taskbarTemplate", timelineSettings: "timelineSettings", timezone: "timezone", toolbar: "toolbar", tooltipSettings: "tooltipSettings", treeColumnIndex: "treeColumnIndex", validateManualTasksOnLinking: "validateManualTasksOnLinking", viewType: "viewType", width: "width", workUnit: "workUnit", workWeek: "workWeek" }, outputs: { actionBegin: "actionBegin", actionComplete: "actionComplete", actionFailure: "actionFailure", beforeExcelExport: "beforeExcelExport", beforePdfExport: "beforePdfExport", beforeTooltipRender: "beforeTooltipRender", cellDeselected: "cellDeselected", cellDeselecting: "cellDeselecting", cellEdit: "cellEdit", cellSelected: "cellSelected", cellSelecting: "cellSelecting", collapsed: "collapsed", collapsing: "collapsing", columnDrag: "columnDrag", columnDragStart: "columnDragStart", columnDrop: "columnDrop", columnMenuClick: "columnMenuClick", columnMenuOpen: "columnMenuOpen", contextMenuClick: "contextMenuClick", contextMenuOpen: "contextMenuOpen", created: "created", dataBound: "dataBound", dataStateChange: "dataStateChange", destroyed: "destroyed", endEdit: "endEdit", excelExportComplete: "excelExportComplete", excelHeaderQueryCellInfo: "excelHeaderQueryCellInfo", excelQueryCellInfo: "excelQueryCellInfo", expanded: "expanded", expanding: "expanding", headerCellInfo: "headerCellInfo", load: "load", onMouseMove: "onMouseMove", onTaskbarClick: "onTaskbarClick", pdfColumnHeaderQueryCellInfo: "pdfColumnHeaderQueryCellInfo", pdfExportComplete: "pdfExportComplete", pdfQueryCellInfo: "pdfQueryCellInfo", pdfQueryTaskbarInfo: "pdfQueryTaskbarInfo", pdfQueryTimelineCellInfo: "pdfQueryTimelineCellInfo", queryCellInfo: "queryCellInfo", queryTaskbarInfo: "queryTaskbarInfo", recordDoubleClick: "recordDoubleClick", resizeStart: "resizeStart", resizeStop: "resizeStop", resizing: "resizing", rowDataBound: "rowDataBound", rowDeselected: "rowDeselected", rowDeselecting: "rowDeselecting", rowDrag: "rowDrag", rowDragStart: "rowDragStart", rowDragStartHelper: "rowDragStartHelper", rowDrop: "rowDrop", rowSelected: "rowSelected", rowSelecting: "rowSelecting", splitterResizeStart: "splitterResizeStart", splitterResized: "splitterResized", splitterResizing: "splitterResizing", taskbarEdited: "taskbarEdited", taskbarEditing: "taskbarEditing", toolbarClick: "toolbarClick", dataSourceChange: "dataSourceChange" }, queries: [{ propertyName: "parentTaskbarTemplate", first: true, predicate: ["parentTaskbarTemplate"], descendants: true }, { propertyName: "milestoneTemplate", first: true, predicate: ["milestoneTemplate"], descendants: true }, { propertyName: "taskbarTemplate", first: true, predicate: ["taskbarTemplate"], descendants: true }, { propertyName: "labelSettings_rightLabel", first: true, predicate: ["labelSettingsRightLabel"], descendants: true }, { propertyName: "labelSettings_leftLabel", first: true, predicate: ["labelSettingsLeftLabel"], descendants: true }, { propertyName: "labelSettings_taskLabel", first: true, predicate: ["labelSettingsTaskLabel"], descendants: true }, { propertyName: "tooltipSettings_taskbar", first: true, predicate: ["tooltipSettingsTaskbar"], descendants: true }, { propertyName: "tooltipSettings_baseline", first: true, predicate: ["tooltipSettingsBaseline"], descendants: true }, { propertyName: "tooltipSettings_connectorLine", first: true, predicate: ["tooltipSettingsConnectorLine"], descendants: true }, { propertyName: "tooltipSettings_editing", first: true, predicate: ["tooltipSettingsEditing"], descendants: true }, { propertyName: "childColumns", first: true, predicate: ColumnsDirective, descendants: true }, { propertyName: "childAddDialogFields", first: true, predicate: AddDialogFieldsDirective, descendants: true }, { propertyName: "childEditDialogFields", first: true, predicate: EditDialogFieldsDirective, descendants: true }, { propertyName: "childDayWorkingTime", first: true, predicate: DayWorkingTimeCollectionDirective, descendants: true }, { propertyName: "childHolidays", first: true, predicate: HolidaysDirective, descendants: true }, { propertyName: "childEventMarkers", first: true, predicate: EventMarkersDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], GanttComponent.prototype, "parentTaskbarTemplate", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "milestoneTemplate", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "taskbarTemplate", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "labelSettings_rightLabel", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "labelSettings_leftLabel", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "labelSettings_taskLabel", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "tooltipSettings_taskbar", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "tooltipSettings_baseline", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "tooltipSettings_connectorLine", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "tooltipSettings_editing", void 0);
GanttComponent = __decorate([
    ComponentMixins([ComponentBase])
], GanttComponent);
export { GanttComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GanttComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-gantt',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childColumns: new ContentChild(ColumnsDirective),
                        childAddDialogFields: new ContentChild(AddDialogFieldsDirective),
                        childEditDialogFields: new ContentChild(EditDialogFieldsDirective),
                        childDayWorkingTime: new ContentChild(DayWorkingTimeCollectionDirective),
                        childHolidays: new ContentChild(HolidaysDirective),
                        childEventMarkers: new ContentChild(EventMarkersDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { parentTaskbarTemplate: [{
                type: ContentChild,
                args: ['parentTaskbarTemplate']
            }], milestoneTemplate: [{
                type: ContentChild,
                args: ['milestoneTemplate']
            }], taskbarTemplate: [{
                type: ContentChild,
                args: ['taskbarTemplate']
            }], labelSettings_rightLabel: [{
                type: ContentChild,
                args: ['labelSettingsRightLabel']
            }], labelSettings_leftLabel: [{
                type: ContentChild,
                args: ['labelSettingsLeftLabel']
            }], labelSettings_taskLabel: [{
                type: ContentChild,
                args: ['labelSettingsTaskLabel']
            }], tooltipSettings_taskbar: [{
                type: ContentChild,
                args: ['tooltipSettingsTaskbar']
            }], tooltipSettings_baseline: [{
                type: ContentChild,
                args: ['tooltipSettingsBaseline']
            }], tooltipSettings_connectorLine: [{
                type: ContentChild,
                args: ['tooltipSettingsConnectorLine']
            }], tooltipSettings_editing: [{
                type: ContentChild,
                args: ['tooltipSettingsEditing']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FudHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2dhbnR0L2dhbnR0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsdUJBQXVCLEVBQWlELFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SixPQUFPLEVBQUUsYUFBYSxFQUErQixlQUFlLEVBQTBCLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdJLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDekUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRWpFLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBYSxDQUFDLGlCQUFpQixFQUFDLGtCQUFrQixFQUFDLGdCQUFnQixFQUFDLGVBQWUsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxlQUFlLEVBQUMscUJBQXFCLEVBQUMsZ0JBQWdCLEVBQUMsY0FBYyxFQUFDLHVCQUF1QixFQUFDLGdCQUFnQixFQUFDLGVBQWUsRUFBQyx3QkFBd0IsRUFBQyxpQkFBaUIsRUFBQyxTQUFTLEVBQUMseUJBQXlCLEVBQUMsb0JBQW9CLEVBQUMsa0JBQWtCLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxnQkFB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eUJBQXlCO2dCQUtoQyx1QkFBdUI7c0JBRjdCLFlBQVk7dUJBQUMsd0JBQXdCO2dCQUsvQix1QkFBdUI7c0JBRjdCLFlBQVk7dUJBQUMsd0JBQXdCO2dCQUsvQix1QkFBdUI7c0JBRjdCLFlBQVk7dUJBQUMsd0JBQXdCO2dCQUsvQix3QkFBd0I7c0JBRjlCLFlBQVk7dUJBQUMseUJBQXlCO2dCQUtoQyw2QkFBNkI7c0JBRm5DLFlBQVk7dUJBQUMsOEJBQThCO2dCQUtyQyx1QkFBdUI7c0JBRjdCLFlBQVk7dUJBQUMsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgUXVlcnlMaXN0LCBSZW5kZXJlcjIsIEluamVjdG9yLCBWYWx1ZVByb3ZpZGVyLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEJhc2UsIElDb21wb25lbnRCYXNlLCBhcHBseU1peGlucywgQ29tcG9uZW50TWl4aW5zLCBQcm9wZXJ0eUNvbGxlY3Rpb25JbmZvLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgR2FudHQgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItZ2FudHQnO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcbmltcG9ydCB7IENvbHVtbnNEaXJlY3RpdmUgfSBmcm9tICcuL2NvbHVtbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFkZERpYWxvZ0ZpZWxkc0RpcmVjdGl2ZSB9IGZyb20gJy4vYWRkZGlhbG9nZmllbGRzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBFZGl0RGlhbG9nRmllbGRzRGlyZWN0aXZlIH0gZnJvbSAnLi9lZGl0ZGlhbG9nZmllbGRzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXlXb3JraW5nVGltZUNvbGxlY3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuL2RheXdvcmtpbmd0aW1lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIb2xpZGF5c0RpcmVjdGl2ZSB9IGZyb20gJy4vaG9saWRheXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEV2ZW50TWFya2Vyc0RpcmVjdGl2ZSB9IGZyb20gJy4vZXZlbnRtYXJrZXJzLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBpbnB1dHM6IHN0cmluZ1tdID0gWydhZGREaWFsb2dGaWVsZHMnLCdhbGxvd0V4Y2VsRXhwb3J0JywnYWxsb3dGaWx0ZXJpbmcnLCdhbGxvd0tleWJvYXJkJywnYWxsb3dQZGZFeHBvcnQnLCdhbGxvd1Jlb3JkZXJpbmcnLCdhbGxvd1Jlc2l6aW5nJywnYWxsb3dSb3dEcmFnQW5kRHJvcCcsJ2FsbG93U2VsZWN0aW9uJywnYWxsb3dTb3J0aW5nJywnYWxsb3dVbnNjaGVkdWxlZFRhc2tzJywnYXV0b0ZvY3VzVGFza3MnLCdiYXNlbGluZUNvbG9yJywnY29sbGFwc2VBbGxQYXJlbnRUYXNrcycsJ2NvbHVtbk1lbnVJdGVtcycsJ2NvbHVtbnMnLCdjb25uZWN0b3JMaW5lQmFja2dyb3VuZCcsJ2Nvbm5lY3RvckxpbmVXaWR0aCcsJ2NvbnRleHRNZW51SXRlbXMnLCdkYXRhU291cmNlJywnZGF0ZUZvcm1hdCcsJ2RheVdvcmtpbmdUaW1lJywnZGlzYWJsZUh0bWxFbmNvZGUnLCdkdXJhdGlvblVuaXQnLCdlZGl0RGlhbG9nRmllbGRzJywnZWRpdFNldHRpbmdzJywnZW5hYmxlQ29udGV4dE1lbnUnLCdlbmFibGVJbW11dGFibGVNb2RlJywnZW5hYmxlTXVsdGlUYXNrYmFyJywnZW5hYmxlUGVyc2lzdGVuY2UnLCdlbmFibGVQcmVkZWNlc3NvclZhbGlkYXRpb24nLCdlbmFibGVSdGwnLCdlbmFibGVWaXJ0dWFsaXphdGlvbicsJ2V2ZW50TWFya2VycycsJ2ZpbHRlclNldHRpbmdzJywnZ3JpZExpbmVzJywnaGVpZ2h0JywnaGlnaGxpZ2h0V2Vla2VuZHMnLCdob2xpZGF5cycsJ2luY2x1ZGVXZWVrZW5kJywnbGFiZWxTZXR0aW5ncycsJ2xvY2FsZScsJ21pbGVzdG9uZVRlbXBsYXRlJywncGFyZW50VGFza2JhclRlbXBsYXRlJywncHJvamVjdEVuZERhdGUnLCdwcm9qZWN0U3RhcnREYXRlJywncXVlcnknLCdyZWFkT25seScsJ3JlbmRlckJhc2VsaW5lJywncmVzb3VyY2VGaWVsZHMnLCdyZXNvdXJjZUlETWFwcGluZycsJ3Jlc291cmNlTmFtZU1hcHBpbmcnLCdyZXNvdXJjZXMnLCdyb3dIZWlnaHQnLCdzZWFyY2hTZXR0aW5ncycsJ3NlZ21lbnREYXRhJywnc2VsZWN0ZWRSb3dJbmRleCcsJ3NlbGVjdGlvblNldHRpbmdzJywnc2hvd0NvbHVtbk1lbnUnLCdzaG93SW5saW5lTm90ZXMnLCdzaG93T3ZlckFsbG9jYXRpb24nLCdzb3J0U2V0dGluZ3MnLCdzcGxpdHRlclNldHRpbmdzJywndGFza0ZpZWxkcycsJ3Rhc2tNb2RlJywndGFza1R5cGUnLCd0YXNrYmFySGVpZ2h0JywndGFza2JhclRlbXBsYXRlJywndGltZWxpbmVTZXR0aW5ncycsJ3RpbWV6b25lJywndG9vbGJhcicsJ3Rvb2x0aXBTZXR0aW5ncycsJ3RyZWVDb2x1bW5JbmRleCcsJ3ZhbGlkYXRlTWFudWFsVGFza3NPbkxpbmtpbmcnLCd2aWV3VHlwZScsJ3dpZHRoJywnd29ya1VuaXQnLCd3b3JrV2VlayddO1xuZXhwb3J0IGNvbnN0IG91dHB1dHM6IHN0cmluZ1tdID0gWydhY3Rpb25CZWdpbicsJ2FjdGlvbkNvbXBsZXRlJywnYWN0aW9uRmFpbHVyZScsJ2JlZm9yZUV4Y2VsRXhwb3J0JywnYmVmb3JlUGRmRXhwb3J0JywnYmVmb3JlVG9vbHRpcFJlbmRlcicsJ2NlbGxEZXNlbGVjdGVkJywnY2VsbERlc2VsZWN0aW5nJywnY2VsbEVkaXQnLCdjZWxsU2VsZWN0ZWQnLCdjZWxsU2VsZWN0aW5nJywnY29sbGFwc2VkJywnY29sbGFwc2luZycsJ2NvbHVtbkRyYWcnLCdjb2x1bW5EcmFnU3RhcnQnLCdjb2x1bW5Ecm9wJywnY29sdW1uTWVudUNsaWNrJywnY29sdW1uTWVudU9wZW4nLCdjb250ZXh0TWVudUNsaWNrJywnY29udGV4dE1lbnVPcGVuJywnY3JlYXRlZCcsJ2RhdGFCb3VuZCcsJ2RhdGFTdGF0ZUNoYW5nZScsJ2Rlc3Ryb3llZCcsJ2VuZEVkaXQnLCdleGNlbEV4cG9ydENvbXBsZXRlJywnZXhjZWxIZWFkZXJRdWVyeUNlbGxJbmZvJywnZXhjZWxRdWVyeUNlbGxJbmZvJywnZXhwYW5kZWQnLCdleHBhbmRpbmcnLCdoZWFkZXJDZWxsSW5mbycsJ2xvYWQnLCdvbk1vdXNlTW92ZScsJ29uVGFza2JhckNsaWNrJywncGRmQ29sdW1uSGVhZGVyUXVlcnlDZWxsSW5mbycsJ3BkZkV4cG9ydENvbXBsZXRlJywncGRmUXVlcnlDZWxsSW5mbycsJ3BkZlF1ZXJ5VGFza2JhckluZm8nLCdwZGZRdWVyeVRpbWVsaW5lQ2VsbEluZm8nLCdxdWVyeUNlbGxJbmZvJywncXVlcnlUYXNrYmFySW5mbycsJ3JlY29yZERvdWJsZUNsaWNrJywncmVzaXplU3RhcnQnLCdyZXNpemVTdG9wJywncmVzaXppbmcnLCdyb3dEYXRhQm91bmQnLCdyb3dEZXNlbGVjdGVkJywncm93RGVzZWxlY3RpbmcnLCdyb3dEcmFnJywncm93RHJhZ1N0YXJ0Jywncm93RHJhZ1N0YXJ0SGVscGVyJywncm93RHJvcCcsJ3Jvd1NlbGVjdGVkJywncm93U2VsZWN0aW5nJywnc3BsaXR0ZXJSZXNpemVTdGFydCcsJ3NwbGl0dGVyUmVzaXplZCcsJ3NwbGl0dGVyUmVzaXppbmcnLCd0YXNrYmFyRWRpdGVkJywndGFza2JhckVkaXRpbmcnLCd0b29sYmFyQ2xpY2snLCdkYXRhU291cmNlQ2hhbmdlJ107XG5leHBvcnQgY29uc3QgdHdvV2F5czogc3RyaW5nW10gPSBbJ2RhdGFTb3VyY2UnXTtcblxuLyoqXG4gKiBgZWpzLWdhbnR0YCByZXByZXNlbnRzIHRoZSBBbmd1bGFyIEdhbnR0IENvbXBvbmVudC5cbiAqIGBgYGh0bWxcbiAqIDxlanMtZ2FudHQgW2RhdGFTb3VyY2VdPSdkYXRhJyBhbGxvd1NlbGVjdGlvbj0ndHJ1ZScgYWxsb3dTb3J0aW5nPSd0cnVlJz48L2Vqcy1nYW50dD5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1nYW50dCcsXG4gICAgaW5wdXRzOiBpbnB1dHMsXG4gICAgb3V0cHV0czogb3V0cHV0cyxcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZENvbHVtbnM6IG5ldyBDb250ZW50Q2hpbGQoQ29sdW1uc0RpcmVjdGl2ZSksIFxuICAgICAgICBjaGlsZEFkZERpYWxvZ0ZpZWxkczogbmV3IENvbnRlbnRDaGlsZChBZGREaWFsb2dGaWVsZHNEaXJlY3RpdmUpLCBcbiAgICAgICAgY2hpbGRFZGl0RGlhbG9nRmllbGRzOiBuZXcgQ29udGVudENoaWxkKEVkaXREaWFsb2dGaWVsZHNEaXJlY3RpdmUpLCBcbiAgICAgICAgY2hpbGREYXlXb3JraW5nVGltZTogbmV3IENvbnRlbnRDaGlsZChEYXlXb3JraW5nVGltZUNvbGxlY3Rpb25EaXJlY3RpdmUpLCBcbiAgICAgICAgY2hpbGRIb2xpZGF5czogbmV3IENvbnRlbnRDaGlsZChIb2xpZGF5c0RpcmVjdGl2ZSksIFxuICAgICAgICBjaGlsZEV2ZW50TWFya2VyczogbmV3IENvbnRlbnRDaGlsZChFdmVudE1hcmtlcnNEaXJlY3RpdmUpXG4gICAgfVxufSlcbkBDb21wb25lbnRNaXhpbnMoW0NvbXBvbmVudEJhc2VdKVxuZXhwb3J0IGNsYXNzIEdhbnR0Q29tcG9uZW50IGV4dGVuZHMgR2FudHQgaW1wbGVtZW50cyBJQ29tcG9uZW50QmFzZSB7XG4gICAgcHVibGljIGNvbnRleHQgOiBhbnk7XG4gICAgcHVibGljIHRhZ09iamVjdHM6IGFueTtcblx0YWN0aW9uQmVnaW46IGFueTtcblx0YWN0aW9uQ29tcGxldGU6IGFueTtcblx0YWN0aW9uRmFpbHVyZTogYW55O1xuXHRiZWZvcmVFeGNlbEV4cG9ydDogYW55O1xuXHRiZWZvcmVQZGZFeHBvcnQ6IGFueTtcblx0YmVmb3JlVG9vbHRpcFJlbmRlcjogYW55O1xuXHRjZWxsRGVzZWxlY3RlZDogYW55O1xuXHRjZWxsRGVzZWxlY3Rpbmc6IGFueTtcblx0Y2VsbEVkaXQ6IGFueTtcblx0Y2VsbFNlbGVjdGVkOiBhbnk7XG5cdGNlbGxTZWxlY3Rpbmc6IGFueTtcblx0Y29sbGFwc2VkOiBhbnk7XG5cdGNvbGxhcHNpbmc6IGFueTtcblx0Y29sdW1uRHJhZzogYW55O1xuXHRjb2x1bW5EcmFnU3RhcnQ6IGFueTtcblx0Y29sdW1uRHJvcDogYW55O1xuXHRjb2x1bW5NZW51Q2xpY2s6IGFueTtcblx0Y29sdW1uTWVudU9wZW46IGFueTtcblx0Y29udGV4dE1lbnVDbGljazogYW55O1xuXHRjb250ZXh0TWVudU9wZW46IGFueTtcblx0Y3JlYXRlZDogYW55O1xuXHRkYXRhQm91bmQ6IGFueTtcblx0ZGF0YVN0YXRlQ2hhbmdlOiBhbnk7XG5cdGRlc3Ryb3llZDogYW55O1xuXHRlbmRFZGl0OiBhbnk7XG5cdGV4Y2VsRXhwb3J0Q29tcGxldGU6IGFueTtcblx0ZXhjZWxIZWFkZXJRdWVyeUNlbGxJbmZvOiBhbnk7XG5cdGV4Y2VsUXVlcnlDZWxsSW5mbzogYW55O1xuXHRleHBhbmRlZDogYW55O1xuXHRleHBhbmRpbmc6IGFueTtcblx0aGVhZGVyQ2VsbEluZm86IGFueTtcblx0bG9hZDogYW55O1xuXHRvbk1vdXNlTW92ZTogYW55O1xuXHRvblRhc2tiYXJDbGljazogYW55O1xuXHRwZGZDb2x1bW5IZWFkZXJRdWVyeUNlbGxJbmZvOiBhbnk7XG5cdHBkZkV4cG9ydENvbXBsZXRlOiBhbnk7XG5cdHBkZlF1ZXJ5Q2VsbEluZm86IGFueTtcblx0cGRmUXVlcnlUYXNrYmFySW5mbzogYW55O1xuXHRwZGZRdWVyeVRpbWVsaW5lQ2VsbEluZm86IGFueTtcblx0cXVlcnlDZWxsSW5mbzogYW55O1xuXHRxdWVyeVRhc2tiYXJJbmZvOiBhbnk7XG5cdHJlY29yZERvdWJsZUNsaWNrOiBhbnk7XG5cdHJlc2l6ZVN0YXJ0OiBhbnk7XG5cdHJlc2l6ZVN0b3A6IGFueTtcblx0cmVzaXppbmc6IGFueTtcblx0cm93RGF0YUJvdW5kOiBhbnk7XG5cdHJvd0Rlc2VsZWN0ZWQ6IGFueTtcblx0cm93RGVzZWxlY3Rpbmc6IGFueTtcblx0cm93RHJhZzogYW55O1xuXHRyb3dEcmFnU3RhcnQ6IGFueTtcblx0cm93RHJhZ1N0YXJ0SGVscGVyOiBhbnk7XG5cdHJvd0Ryb3A6IGFueTtcblx0cm93U2VsZWN0ZWQ6IGFueTtcblx0cm93U2VsZWN0aW5nOiBhbnk7XG5cdHNwbGl0dGVyUmVzaXplU3RhcnQ6IGFueTtcblx0c3BsaXR0ZXJSZXNpemVkOiBhbnk7XG5cdHNwbGl0dGVyUmVzaXppbmc6IGFueTtcblx0dGFza2JhckVkaXRlZDogYW55O1xuXHR0YXNrYmFyRWRpdGluZzogYW55O1xuXHR0b29sYmFyQ2xpY2s6IGFueTtcblx0cHVibGljIGRhdGFTb3VyY2VDaGFuZ2U6IGFueTtcbiAgICBwdWJsaWMgY2hpbGRDb2x1bW5zOiBRdWVyeUxpc3Q8Q29sdW1uc0RpcmVjdGl2ZT47XG4gICAgcHVibGljIGNoaWxkQWRkRGlhbG9nRmllbGRzOiBRdWVyeUxpc3Q8QWRkRGlhbG9nRmllbGRzRGlyZWN0aXZlPjtcbiAgICBwdWJsaWMgY2hpbGRFZGl0RGlhbG9nRmllbGRzOiBRdWVyeUxpc3Q8RWRpdERpYWxvZ0ZpZWxkc0RpcmVjdGl2ZT47XG4gICAgcHVibGljIGNoaWxkRGF5V29ya2luZ1RpbWU6IFF1ZXJ5TGlzdDxEYXlXb3JraW5nVGltZUNvbGxlY3Rpb25EaXJlY3RpdmU+O1xuICAgIHB1YmxpYyBjaGlsZEhvbGlkYXlzOiBRdWVyeUxpc3Q8SG9saWRheXNEaXJlY3RpdmU+O1xuICAgIHB1YmxpYyBjaGlsZEV2ZW50TWFya2VyczogUXVlcnlMaXN0PEV2ZW50TWFya2Vyc0RpcmVjdGl2ZT47XG4gICAgcHVibGljIHRhZ3M6IHN0cmluZ1tdID0gWydjb2x1bW5zJywgJ2FkZERpYWxvZ0ZpZWxkcycsICdlZGl0RGlhbG9nRmllbGRzJywgJ2RheVdvcmtpbmdUaW1lJywgJ2hvbGlkYXlzJywgJ2V2ZW50TWFya2VycyddO1xuICAgIC8qKiBcbiAgICAgKiBUaGUgcGFyZW50IHRhc2sgYmFyIHRlbXBsYXRlIHRoYXQgcmVuZGVycyBjdXN0b21pemVkIHBhcmVudCB0YXNrIGJhcnMgZnJvbSB0aGUgZ2l2ZW4gdGVtcGxhdGUuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ3BhcmVudFRhc2tiYXJUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgcGFyZW50VGFza2JhclRlbXBsYXRlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFRoZSBtaWxlc3RvbmUgdGVtcGxhdGUgdGhhdCByZW5kZXJzIGN1c3RvbWl6ZWQgbWlsZXN0b25lIHRhc2sgZnJvbSB0aGUgZ2l2ZW4gdGVtcGxhdGUuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ21pbGVzdG9uZVRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBtaWxlc3RvbmVUZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUaGUgdGFzayBiYXIgdGVtcGxhdGUgdGhhdCByZW5kZXJzIGN1c3RvbWl6ZWQgY2hpbGQgdGFzayBiYXJzIGZyb20gdGhlIGdpdmVuIHRlbXBsYXRlLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCd0YXNrYmFyVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIHRhc2tiYXJUZW1wbGF0ZTogYW55O1xuICAgIEBDb250ZW50Q2hpbGQoJ2xhYmVsU2V0dGluZ3NSaWdodExhYmVsJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBsYWJlbFNldHRpbmdzX3JpZ2h0TGFiZWw6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCdsYWJlbFNldHRpbmdzTGVmdExhYmVsJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBsYWJlbFNldHRpbmdzX2xlZnRMYWJlbDogYW55O1xuICAgIEBDb250ZW50Q2hpbGQoJ2xhYmVsU2V0dGluZ3NUYXNrTGFiZWwnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGxhYmVsU2V0dGluZ3NfdGFza0xhYmVsOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZCgndG9vbHRpcFNldHRpbmdzVGFza2JhcicpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgdG9vbHRpcFNldHRpbmdzX3Rhc2tiYXI6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCd0b29sdGlwU2V0dGluZ3NCYXNlbGluZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgdG9vbHRpcFNldHRpbmdzX2Jhc2VsaW5lOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZCgndG9vbHRpcFNldHRpbmdzQ29ubmVjdG9yTGluZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgdG9vbHRpcFNldHRpbmdzX2Nvbm5lY3RvckxpbmU6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCd0b29sdGlwU2V0dGluZ3NFZGl0aW5nJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyB0b29sdGlwU2V0dGluZ3NfZWRpdGluZzogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0VsZTogRWxlbWVudFJlZiwgcHJpdmF0ZSBzcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMubmdFbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMgPSB0aGlzLmluamVjdGVkTW9kdWxlcyB8fCBbXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ0dhbnR0RmlsdGVyJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHYW50dFNlbGVjdGlvbicpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnR2FudHRTb3J0Jyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHYW50dFJlb3JkZXInKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ0dhbnR0UmVzaXplJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHYW50dEVkaXQnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ0dhbnR0RGF5TWFya2VycycpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnR2FudHRUb29sYmFyJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHYW50dENvbnRleHRNZW51Jyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHYW50dEV4Y2VsRXhwb3J0Jyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHYW50dFJvd0REJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHYW50dENvbHVtbk1lbnUnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ0dhbnR0UGRmRXhwb3J0Jyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHYW50dFZpcnR1YWxTY3JvbGwnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmFkZFR3b1dheS5jYWxsKHRoaXMsIHR3b1dheXMpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ICA9IG5ldyBDb21wb25lbnRCYXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbnRleHQubmdPbkluaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm5nQWZ0ZXJWaWV3SW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5uZ09uRGVzdHJveSh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRhZ09iamVjdHNbMF0uaW5zdGFuY2UgPSB0aGlzLmNoaWxkQ29sdW1ucztcbiAgICAgICAgXG5cdCAgICBpZiAodGhpcy5jaGlsZEFkZERpYWxvZ0ZpZWxkcykge1xuICAgICAgICAgICAgdGhpcy50YWdPYmplY3RzWzFdLmluc3RhbmNlID0gdGhpcy5jaGlsZEFkZERpYWxvZ0ZpZWxkcztcbiAgICAgICAgfVxuICAgICAgICBcblx0ICAgIGlmICh0aGlzLmNoaWxkRWRpdERpYWxvZ0ZpZWxkcykge1xuICAgICAgICAgICAgdGhpcy50YWdPYmplY3RzWzJdLmluc3RhbmNlID0gdGhpcy5jaGlsZEVkaXREaWFsb2dGaWVsZHM7XG4gICAgICAgIH1cbiAgICAgICAgXG5cdCAgICBpZiAodGhpcy5jaGlsZERheVdvcmtpbmdUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLnRhZ09iamVjdHNbM10uaW5zdGFuY2UgPSB0aGlzLmNoaWxkRGF5V29ya2luZ1RpbWU7XG4gICAgICAgIH1cbiAgICAgICAgXG5cdCAgICBpZiAodGhpcy5jaGlsZEhvbGlkYXlzKSB7XG4gICAgICAgICAgICB0aGlzLnRhZ09iamVjdHNbNF0uaW5zdGFuY2UgPSB0aGlzLmNoaWxkSG9saWRheXM7XG4gICAgICAgIH1cbiAgICAgICAgXG5cdCAgICBpZiAodGhpcy5jaGlsZEV2ZW50TWFya2Vycykge1xuICAgICAgICAgICAgdGhpcy50YWdPYmplY3RzWzVdLmluc3RhbmNlID0gdGhpcy5jaGlsZEV2ZW50TWFya2VycztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRleHQubmdBZnRlckNvbnRlbnRDaGVja2VkKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckV2ZW50czogKGV2ZW50TGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG4gICAgcHVibGljIGFkZFR3b1dheTogKHByb3BMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbn1cblxuIl19