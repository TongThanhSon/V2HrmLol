import { Gantt } from "../base/gantt";
import { IGanttData } from "../base/interface";
export declare class CriticalPath {
    private parent;
    detailPredecessorCollection: object[];
    criticalPathCollection: number[];
    resourceCollectionIds: string[];
    predecessorCollectionTaskIds: number[];
    criticalTasks: IGanttData[];
    maxEndDate: Date;
    constructor(parent: Gantt);
    getCriticalTasks(): IGanttData[];
    showCriticalPath(isCritical: boolean): void;
    slackCalculation(fromDataObject: object[], collection: object[], collectionTaskId: number[], checkEndDate: Date, flatRecords: IGanttData[], modelRecordIds: string[]): void;
    private getSlackDuration;
    private finalCriticalPath;
    criticalConnectorLine(criticalPathIds: number[], collection: object[], condition: boolean, collectionTaskId: number[]): void;
    getModuleName(): string;
    /**
     * Destroys the Critical Path of Gantt.
     *
     * @returns {void} .
     * @private
     */
    destroy(): void;
}
