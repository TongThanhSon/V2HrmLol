import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { PivotView } from '@syncfusion/ej2-pivotview';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * `ej-pivotview` represents the Angular PivotView Component.
 * ```html
 * <ej-pivotview></ej-pivotview>
 * ```
 */
export declare class PivotViewComponent extends PivotView implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    actionBegin: any;
    actionComplete: any;
    actionFailure: any;
    aggregateCellInfo: any;
    aggregateMenuOpen: any;
    beforeExport: any;
    beforeServiceInvoke: any;
    beginDrillThrough: any;
    calculatedFieldCreate: any;
    cellClick: any;
    cellSelected: any;
    cellSelecting: any;
    chartSeriesCreated: any;
    conditionalFormatting: any;
    created: any;
    dataBound: any;
    destroyed: any;
    drill: any;
    drillThrough: any;
    editCompleted: any;
    enginePopulated: any;
    enginePopulating: any;
    exportComplete: any;
    fetchReport: any;
    fieldDragStart: any;
    fieldDrop: any;
    fieldListRefreshed: any;
    fieldRemove: any;
    hyperlinkCellClick: any;
    load: any;
    loadReport: any;
    memberEditorOpen: any;
    memberFiltering: any;
    newReport: any;
    numberFormatting: any;
    onFieldDropped: any;
    onHeadersSort: any;
    onPdfCellRender: any;
    removeReport: any;
    renameReport: any;
    saveReport: any;
    toolbarClick: any;
    toolbarRender: any;
    /**
     * Allows the table cell elements to be customized with either an HTML string or the element’s ID,
     * that can be used to add additional HTML elements with custom formats to the cell elements that are displayed in the pivot table.
     * @default null
     */
    cellTemplate: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
}
