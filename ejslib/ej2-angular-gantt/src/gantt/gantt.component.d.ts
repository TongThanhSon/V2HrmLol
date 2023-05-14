import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Gantt } from '@syncfusion/ej2-gantt';
import { ColumnsDirective } from './columns.directive';
import { AddDialogFieldsDirective } from './adddialogfields.directive';
import { EditDialogFieldsDirective } from './editdialogfields.directive';
import { DayWorkingTimeCollectionDirective } from './dayworkingtime.directive';
import { HolidaysDirective } from './holidays.directive';
import { EventMarkersDirective } from './eventmarkers.directive';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * `ejs-gantt` represents the Angular Gantt Component.
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'></ejs-gantt>
 * ```
 */
export declare class GanttComponent extends Gantt implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    actionBegin: any;
    actionComplete: any;
    actionFailure: any;
    beforeExcelExport: any;
    beforePdfExport: any;
    beforeTooltipRender: any;
    cellDeselected: any;
    cellDeselecting: any;
    cellEdit: any;
    cellSelected: any;
    cellSelecting: any;
    collapsed: any;
    collapsing: any;
    columnDrag: any;
    columnDragStart: any;
    columnDrop: any;
    columnMenuClick: any;
    columnMenuOpen: any;
    contextMenuClick: any;
    contextMenuOpen: any;
    created: any;
    dataBound: any;
    dataStateChange: any;
    destroyed: any;
    endEdit: any;
    excelExportComplete: any;
    excelHeaderQueryCellInfo: any;
    excelQueryCellInfo: any;
    expanded: any;
    expanding: any;
    headerCellInfo: any;
    load: any;
    onMouseMove: any;
    onTaskbarClick: any;
    pdfColumnHeaderQueryCellInfo: any;
    pdfExportComplete: any;
    pdfQueryCellInfo: any;
    pdfQueryTaskbarInfo: any;
    pdfQueryTimelineCellInfo: any;
    queryCellInfo: any;
    queryTaskbarInfo: any;
    recordDoubleClick: any;
    resizeStart: any;
    resizeStop: any;
    resizing: any;
    rowDataBound: any;
    rowDeselected: any;
    rowDeselecting: any;
    rowDrag: any;
    rowDragStart: any;
    rowDragStartHelper: any;
    rowDrop: any;
    rowSelected: any;
    rowSelecting: any;
    splitterResizeStart: any;
    splitterResized: any;
    splitterResizing: any;
    taskbarEdited: any;
    taskbarEditing: any;
    toolbarClick: any;
    dataSourceChange: any;
    childColumns: QueryList<ColumnsDirective>;
    childAddDialogFields: QueryList<AddDialogFieldsDirective>;
    childEditDialogFields: QueryList<EditDialogFieldsDirective>;
    childDayWorkingTime: QueryList<DayWorkingTimeCollectionDirective>;
    childHolidays: QueryList<HolidaysDirective>;
    childEventMarkers: QueryList<EventMarkersDirective>;
    tags: string[];
    /**
     * The parent task bar template that renders customized parent task bars from the given template.
     * @default null
     */
    parentTaskbarTemplate: any;
    /**
     * The milestone template that renders customized milestone task from the given template.
     * @default null
     */
    milestoneTemplate: any;
    /**
     * The task bar template that renders customized child task bars from the given template.
     * @default null
     */
    taskbarTemplate: any;
    labelSettings_rightLabel: any;
    labelSettings_leftLabel: any;
    labelSettings_taskLabel: any;
    tooltipSettings_taskbar: any;
    tooltipSettings_baseline: any;
    tooltipSettings_connectorLine: any;
    tooltipSettings_editing: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
}
