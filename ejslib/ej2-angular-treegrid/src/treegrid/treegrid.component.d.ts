import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { ColumnsDirective } from './columns.directive';
import { AggregatesDirective } from './aggregates.directive';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * `ejs-treegrid` represents the Angular TreeTreeGrid Component.
 * ```html
 * <ejs-treegrid [dataSource]='data' allowPaging='true' allowSorting='true'></ejs-treegrid>
 * ```
 */
export declare class TreeGridComponent extends TreeGrid implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    actionBegin: any;
    actionComplete: any;
    actionFailure: any;
    batchAdd: any;
    batchCancel: any;
    batchDelete: any;
    beforeBatchAdd: any;
    beforeBatchDelete: any;
    beforeBatchSave: any;
    beforeCopy: any;
    beforeDataBound: any;
    beforeExcelExport: any;
    beforePaste: any;
    beforePdfExport: any;
    beforePrint: any;
    beginEdit: any;
    cellDeselected: any;
    cellDeselecting: any;
    cellEdit: any;
    cellSave: any;
    cellSaved: any;
    cellSelected: any;
    cellSelecting: any;
    checkboxChange: any;
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
    dataSourceChanged: any;
    dataStateChange: any;
    detailDataBound: any;
    excelExportComplete: any;
    excelHeaderQueryCellInfo: any;
    excelQueryCellInfo: any;
    expanded: any;
    expanding: any;
    headerCellInfo: any;
    load: any;
    pdfExportComplete: any;
    pdfHeaderQueryCellInfo: any;
    pdfQueryCellInfo: any;
    printComplete: any;
    queryCellInfo: any;
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
    toolbarClick: any;
    dataSourceChange: any;
    childColumns: QueryList<ColumnsDirective>;
    childAggregates: QueryList<AggregatesDirective>;
    tags: string[];
    toolbarTemplate: any;
    pagerTemplate: any;
    /**
     * The row template that renders customized rows from the given template.
     * By default, TreeGrid renders a table row for every data source item.
     * > * It accepts either [template string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
     * or HTML element ID.
     * > * The row template must be a table row.
     *
     * > Check the [`Row Template`](../../treegrid/row) customization.
     *
     */
    rowTemplate: any;
    /**
     * The detail template allows you to show or hide additional information about a particular row.
     *
     * > It accepts either the [template string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
     *or the HTML element ID.
     *
     *
     */
    detailTemplate: any;
    editSettings_template: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
}
