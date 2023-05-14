import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * `ejs-gantt` represents the VueJS Gantt Component.
 * ```vue
 * <ejs-gantt :dataSource='data' allowSelection='true' allowSorting='true'></ejs-gantt>
 * ```
 */
export declare class GanttComponent extends ComponentBase {
    ej2Instances: any;
    propKeys: string[];
    models: string[];
    hasChildDirective: boolean;
    protected hasInjectedModules: boolean;
    tagMapper: {
        [key: string]: Object;
    };
    tagNameMapper: Object;
    isVue3: boolean;
    templateCollection: any;
    constructor();
    clearTemplate(templateNames?: string[]): any;
    setProperties(prop: any, muteOnChange: boolean): void;
    trigger(eventName: string, eventProp: {
        [key: string]: Object;
    }, successHandler?: Function): void;
    render(createElement: any): any;
    custom(): void;
    addPredecessor(id: number, predecessorString: string): void;
    addRecord(data?: Object[] | Object | Object, rowPosition?: Object, rowIndex?: number): void;
    cancelEdit(): void;
    changeTaskMode(data: Object): void;
    clearFiltering(fields?: string[]): void;
    clearSelection(): void;
    clearSorting(): void;
    collapseAll(): void;
    collapseByID(id: number): void;
    collapseByIndex(index: number): void;
    convertToMilestone(id: string): void;
    csvExport(excelExportProperties?: Object, isMultipleExport?: boolean, workbook?: any, isBlob?: boolean): Object;
    deleteRecord(taskDetail: number | string | number[] | string[] | Object | Object[]): void;
    enableItems(items: string[], isEnable: boolean): void;
    excelExport(excelExportProperties?: Object, isMultipleExport?: boolean, workbook?: any, isBlob?: boolean): Object;
    expandAll(): void;
    expandByID(id: number): void;
    expandByIndex(index: number[] | number): void;
    filterByColumn(fieldName: string, filterOperator: string, filterValue: string | number | Object | boolean | number[] | string[] | Object[] | boolean[], predicate?: string, matchCase?: boolean, ignoreAccent?: boolean): void;
    fitToProject(): void;
    getCriticalTasks(): Object[];
    getDurationString(duration: number, durationUnit: string): string;
    getExpandedRecords(records: Object[]): Object[];
    getFormatedDate(date: Object, format?: string): string;
    getGanttColumns(): Object[];
    getGridColumns(): Object[];
    getRecordByID(id: string): Object;
    getRowByID(id: string | number): Object;
    getRowByIndex(index: number): Object;
    getTaskByUniqueID(id: string): Object;
    getTaskbarHeight(): number;
    getWorkString(work: number, workUnit: string): string;
    hideColumn(keys: string | string[], hideBy?: string): void;
    hideSpinner(): void;
    indent(): void;
    keyActionHandler(e: Object): void;
    mergeTask(taskId: number | string, segmentIndexes: undefined[]): void;
    nextTimeSpan(mode?: string): void;
    openAddDialog(): void;
    openEditDialog(taskId?: number): void;
    outdent(): void;
    pdfExport(pdfExportProperties?: Object, isMultipleExport?: boolean, pdfDoc?: Object): Object;
    previousTimeSpan(mode?: string): void;
    removePredecessor(id: number): void;
    removeSortColumn(columnName: string): void;
    renderTemplates(): void;
    reorderColumns(fromFName: string | string[], toFName: string): void;
    reorderRows(fromIndexes: number[], toIndex: number, position: string): void;
    resetTemplates(): void;
    scrollToDate(date: string): void;
    scrollToTask(taskId: string): void;
    search(keyVal: string): void;
    selectCell(cellIndex: Object, isToggle?: boolean): void;
    selectCells(rowCellIndexes: Object[]): void;
    selectRow(index: number, isToggle?: boolean): void;
    selectRows(records: number[]): void;
    setScrollTop(scrollTop: number): void;
    setSplitterPosition(value: string | number, type: string): void;
    showColumn(keys: string | string[], showBy?: string): void;
    showCriticalPath(isCritical: boolean): void;
    showSpinner(): void;
    sortColumn(columnName: string, direction: Object, isMultiSort?: boolean): void;
    splitTask(taskId: number | string, splitDate: Object | Object[]): void;
    updateChartScrollOffset(left: number, top: number): void;
    updateDataSource(dataSource: Object[], args: object): void;
    updatePredecessor(id: number, predecessorString: string): void;
    updateProjectDates(startDate: Object, endDate: Object, isTimelineRoundOff: boolean, isFrom?: string): void;
    updateRecordByID(data: Object): void;
    updateRecordByIndex(index: number, data: Object): void;
    updateTaskId(currentId: number | string, newId: number | string): void;
    zoomIn(): void;
    zoomOut(): void;
}
export declare const GanttPlugin: {
    name: string;
    install(Vue: any): void;
};
