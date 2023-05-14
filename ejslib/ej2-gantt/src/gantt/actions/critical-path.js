import { isNullOrUndefined } from "@syncfusion/ej2-base";
import { addClass, removeClass } from '@syncfusion/ej2-base';
import * as cls from '../base/css-constants';
var CriticalPath = /** @class */ (function () {
    function CriticalPath(parent) {
        this.resourceCollectionIds = [];
        this.criticalTasks = [];
        this.parent = parent;
    }
    CriticalPath.prototype.getCriticalTasks = function () {
        return this.criticalTasks;
    };
    CriticalPath.prototype.showCriticalPath = function (isCritical) {
        var modelIds = this.parent.ids;
        var totalRecords = this.parent.flatData;
        if (isCritical && this.parent.flatData.length > 0 && !this.parent.enableMultiTaskbar) {
            this.parent.enableCriticalPath = true;
            var parentRecords = this.parent.treeGrid.parentData;
            var checkEndDateTaskid = void 0;
            var checkEndDate = parentRecords[0].ganttProperties.endDate;
            var dateDifference = 0;
            var checkBeyondEnddate = [];
            var totalPredecessorsCollection = [];
            var totalPredecessorsCollectionId = [];
            var predecessorIndex = 0;
            var taskBeyondEnddate = [];
            var predecessorTaskBeyondEnddate = [];
            var collection = [];
            var collectionTaskId = [];
            var fromDataObject = [];
            var criticalPathIds = [];
            /* eslint-disable-next-line */
            if (parentRecords[0].ganttProperties.autoEndDate > parentRecords[0].ganttProperties.endDate && !parentRecords[0].ganttProperties.isAutoSchedule) {
                checkEndDate = parentRecords[0].ganttProperties.autoEndDate;
            }
            checkEndDateTaskid = parentRecords[0].ganttProperties.taskId;
            // Find the total project endDate
            for (var i = 1; i < parentRecords.length; i++) {
                if (parentRecords[i].ganttProperties.endDate >= checkEndDate) {
                    checkEndDate = parentRecords[i].ganttProperties.endDate;
                    checkEndDateTaskid = parentRecords[i].ganttProperties.taskId;
                }
                if (!parentRecords[i].ganttProperties.isAutoSchedule) {
                    if (parentRecords[i].ganttProperties.autoEndDate >= checkEndDate) {
                        checkEndDate = parentRecords[i].ganttProperties.autoEndDate;
                        checkEndDateTaskid = parentRecords[i].ganttProperties.taskId;
                    }
                }
            }
            this.maxEndDate = checkEndDate;
            // find the tasks that ends on total project end date that stored in checkBeyondEnddate
            // find the tasks with predecessor that stored in totalPredecessorsCollectionId.
            for (var j = 0; j < totalRecords.length; j++) {
                totalRecords[j].isCritical = false;
                totalRecords[j].ganttProperties.isCritical = false;
                /* eslint-disable-next-line */
                dateDifference = this.parent.dataOperation.getDuration(totalRecords[j].ganttProperties.endDate, checkEndDate, totalRecords[j].ganttProperties.durationUnit, totalRecords[j].ganttProperties.isAutoSchedule, totalRecords[j].ganttProperties.isMilestone);
                totalRecords[j].slack = dateDifference + ' ' + totalRecords[j].ganttProperties.durationUnit;
                totalRecords[j].ganttProperties.slack = dateDifference + ' ' + totalRecords[j].ganttProperties.durationUnit;
                if (totalRecords[j].ganttProperties.endDate >= checkEndDate) {
                    checkBeyondEnddate.push(parseInt(totalRecords[j].ganttProperties.taskId, 10));
                }
                if (totalRecords[j].ganttProperties.predecessor) {
                    if (totalRecords[j].ganttProperties.predecessor.length !== 0) {
                        totalPredecessorsCollection.push(totalRecords[j]);
                        totalPredecessorsCollectionId.push(parseInt(totalRecords[j].ganttProperties.taskId, 10));
                    }
                }
            }
            if (this.parent.viewType === 'ResourceView') {
                for (var i = 0; i < this.parent.taskIds.length; i++) {
                    this.resourceCollectionIds[i] = this.parent.taskIds[i].slice(1);
                }
            }
            // seperate the predecessor connected taskes from the individual taskes that ends on total project end date
            for (var k = 0; k < checkBeyondEnddate.length; k++) {
                if (totalPredecessorsCollectionId.indexOf(checkBeyondEnddate[k]) === -1) {
                    if (this.parent.viewType === 'ProjectView') {
                        predecessorIndex = modelIds.indexOf(checkBeyondEnddate[k].toString());
                    }
                    else {
                        predecessorIndex = this.resourceCollectionIds.indexOf(checkBeyondEnddate[k].toString());
                    }
                    if (totalRecords[predecessorIndex].ganttProperties.progress < 100) {
                        totalRecords[predecessorIndex].isCritical = true;
                        totalRecords[predecessorIndex].ganttProperties.isCritical = true;
                    }
                    totalRecords[predecessorIndex]['slack'] = 0 + ' ' + totalRecords[predecessorIndex].ganttProperties.durationUnit;
                    taskBeyondEnddate.push(checkBeyondEnddate[k]);
                }
                else {
                    predecessorTaskBeyondEnddate.push(checkBeyondEnddate[k]);
                }
            }
            var predecessorLength = totalPredecessorsCollection.length;
            var endTask = [];
            // find the detail collection of predecessor for each taskes that stored in collection.
            for (var x = 0; x < predecessorLength; x++) {
                var to = -1;
                var from = -1;
                var toPredecessor = -1;
                var fromPredecessor = -1;
                var currentIndex = x;
                var predecessor = totalPredecessorsCollection[x].ganttProperties.predecessor;
                var individualPredecessorLength = totalPredecessorsCollection[x].ganttProperties.predecessor.length;
                var taskid = (parseInt(totalPredecessorsCollection[x].ganttProperties.taskId, 10));
                for (var y = 0; y < individualPredecessorLength; y++) {
                    if (parseInt(predecessor[y].from, 10) === taskid) {
                        if (to === -1) {
                            if (!predecessor[y].offset) {
                                to = predecessor[y].to;
                                toPredecessor = predecessor[y].type;
                            }
                            else {
                                to = predecessor[y].to + ':' + predecessor[y].offset + predecessor[y].offsetUnit;
                                toPredecessor = predecessor[y].type;
                            }
                        }
                        else {
                            if (!predecessor[y].offset) {
                                to = to + ',' + predecessor[y].to;
                                toPredecessor = toPredecessor + ',' + predecessor[y].type;
                            }
                            else {
                                to = to + ',' + predecessor[y].to + ':' + predecessor[y].offset + predecessor[y].offsetUnit;
                                toPredecessor = toPredecessor + ',' + predecessor[y].type;
                            }
                        }
                    }
                    if (parseInt(predecessor[y].to, 10) === taskid) {
                        if (from === -1) {
                            if (!predecessor[y].offset) {
                                from = predecessor[y].from;
                                fromPredecessor = predecessor[y].type;
                            }
                            else {
                                from = predecessor[y].from + ':' + predecessor[y].offset + predecessor[y].offsetUnit;
                                fromPredecessor = predecessor[y].type;
                            }
                        }
                        else {
                            if (!predecessor[y].offset) {
                                from = from + ',' + predecessor[y].from;
                                fromPredecessor = fromPredecessor + ',' + predecessor[y].type;
                            }
                            else {
                                from = from + ',' + predecessor[y].from + ':' + predecessor[y].offset + predecessor[y].offsetUnit;
                                fromPredecessor = fromPredecessor + ',' + predecessor[y].type;
                            }
                        }
                    }
                }
                if (from === -1) {
                    from = null;
                    fromPredecessor = null;
                }
                if (to === -1) {
                    to = null;
                    toPredecessor = null;
                }
                /* eslint-disable-next-line */
                collection.push({ from: from, fromPredecessor: fromPredecessor, taskid: taskid, to: to, toPredecessor: toPredecessor, currentIndex: currentIndex, slack: null, enddate: null });
                collectionTaskId.push(taskid);
            }
            var collectionLength = collection.length;
            var indexEnddate = 0;
            var num = void 0;
            // find the predecessors connected taskes that does not contains any successor.
            for (var z = 0; z < collectionLength; z++) {
                if (!collection[z]['to']) {
                    num = collection[z]['taskid'];
                    if (this.parent.viewType === 'ProjectView') {
                        indexEnddate = modelIds.indexOf(num.toString());
                    }
                    else {
                        indexEnddate = this.resourceCollectionIds.indexOf(num.toString());
                    }
                    var flatData = totalRecords[indexEnddate].ganttProperties;
                    /* eslint-disable-next-line */
                    dateDifference = this.parent.dataOperation.getDuration(flatData.endDate, checkEndDate, 'minute', flatData.isAutoSchedule, flatData.isMilestone);
                    collection[z]['slack'] = dateDifference;
                    collection[z]['fs'] = -1;
                    collection[z]['enddate'] = flatData.endDate;
                    endTask.push({
                        fromdata: collection[z]['from'], todateID: collection[z]['taskid'],
                        fromDataPredecessor: collection[z]['fromPredecessor']
                    });
                }
            }
            for (var k = 0; k < endTask.length; k++) {
                fromDataObject.push(endTask[k]);
                this.slackCalculation(fromDataObject, collection, collectionTaskId, checkEndDate, totalRecords, modelIds);
            }
            criticalPathIds = this.finalCriticalPath(collection, taskBeyondEnddate, totalRecords, modelIds, checkEndDate);
            this.criticalPathCollection = criticalPathIds;
            this.detailPredecessorCollection = collection;
            this.predecessorCollectionTaskIds = collectionTaskId;
        }
        if (isCritical === false && this.parent.flatData.length > 0 && !this.parent.enableMultiTaskbar) {
            var pathIndex = void 0;
            this.parent.enableCriticalPath = false;
            for (var z = 0; z < this.criticalPathCollection.length; z++) {
                pathIndex = modelIds.indexOf(this.criticalPathCollection[z].toString());
                totalRecords[pathIndex].isCritical = false;
            }
            this.criticalPathCollection = [];
            this.detailPredecessorCollection = [];
            this.predecessorCollectionTaskIds = [];
        }
    };
    /* eslint-disable-next-line */
    CriticalPath.prototype.slackCalculation = function (fromDataObject, collection, collectionTaskId, checkEndDate, flatRecords, modelRecordIds) {
        var fromDateArray = fromDataObject[0]['fromdata'].split(',');
        var fromDataPredecessor = fromDataObject[0]['fromDataPredecessor'].split(',');
        var fromDateArray1 = [];
        var fromTaskIdIndex;
        var indexFromTaskId;
        var indexToTaskId;
        var totaskId;
        var dateDifference;
        var prevTaskEnddate;
        var offsetInMillSec;
        var ffslack;
        for (var i = 0; i < fromDateArray.length; i++) {
            fromDateArray1 = fromDateArray[i].split(':');
            fromTaskIdIndex = collectionTaskId.indexOf(parseInt(fromDateArray1[0], 10));
            totaskId = collectionTaskId.indexOf(parseInt(fromDataObject[0]['todateID'], 10));
            if (this.parent.viewType === 'ProjectView') {
                indexFromTaskId = modelRecordIds.indexOf(fromDateArray1[0].toString());
                indexToTaskId = modelRecordIds.indexOf(fromDataObject[0]['todateID'].toString());
            }
            else {
                indexFromTaskId = this.resourceCollectionIds.indexOf(fromDateArray1[0].toString());
                indexToTaskId = this.resourceCollectionIds.indexOf(fromDataObject[0]['todateID'].toString());
            }
            var fromIdFlatData = flatRecords[indexFromTaskId].ganttProperties;
            var toIdFlatData = flatRecords[indexToTaskId].ganttProperties;
            if (fromDateArray1.length > 1) {
                if (fromDateArray1[1].indexOf('hour') !== -1) {
                    offsetInMillSec = parseFloat(fromDateArray1[1]) * 60;
                }
                else if (fromDateArray1[1].indexOf('day') !== -1) {
                    offsetInMillSec = parseFloat(fromDateArray1[1]) * (this.parent.secondsPerDay / 3600) * 60;
                }
                else {
                    offsetInMillSec = parseFloat(fromDateArray1[1]);
                }
            }
            // calculate slack value for the task contains predecessor connection in "finish to start".
            if (fromDataPredecessor[i] === 'FS') {
                if (fromIdFlatData.endDate > toIdFlatData.startDate) {
                    /* eslint-disable-next-line */
                    dateDifference = -(this.parent.dataOperation.getDuration(toIdFlatData.startDate, fromIdFlatData.endDate, 'minute', fromIdFlatData.isAutoSchedule, fromIdFlatData.isMilestone));
                }
                else {
                    /* eslint-disable-next-line */
                    dateDifference = this.parent.dataOperation.getDuration(fromIdFlatData.endDate, toIdFlatData.startDate, 'minute', fromIdFlatData.isAutoSchedule, fromIdFlatData.isMilestone);
                }
                // execute if the slack value is not set initially.
                if (isNullOrUndefined(collection[fromTaskIdIndex]['slack'])) {
                    // execute if the offset value is not given.
                    if (fromDateArray1.length <= 1) {
                        if (collection[totaskId]['slack'] + dateDifference < 0) {
                            collection[fromTaskIdIndex]['slack'] = 0;
                        }
                        else {
                            collection[fromTaskIdIndex]['slack'] = collection[totaskId]['slack'] + dateDifference;
                        }
                    }
                }
                // execute if the current calculated slack value is less than the previous slack value.
                else if (collection[fromTaskIdIndex]['slack'] > dateDifference && collection[fromTaskIdIndex]['slack'] !== 0) {
                    // execute if the offset value is not given.
                    if (fromDateArray1.length <= 1) {
                        if (collection[totaskId]['slack'] + dateDifference < 0) {
                            collection[fromTaskIdIndex]['slack'] = 0;
                        }
                        else {
                            collection[fromTaskIdIndex]['slack'] = collection[totaskId]['slack'] + dateDifference;
                        }
                    }
                }
                // execute if the offset value is given.
                if (fromDateArray1.length > 1) {
                    collection[fromTaskIdIndex]['slack'] = collection[totaskId]['slack'] + dateDifference;
                    collection[fromTaskIdIndex]['slack'] = collection[fromTaskIdIndex]['slack'] - (offsetInMillSec);
                    if (collection[fromTaskIdIndex]['slack'] < 0) {
                        collection[fromTaskIdIndex]['slack'] = 0;
                    }
                }
                collection[fromTaskIdIndex]['fs'] = 1;
                collection[fromTaskIdIndex]['fsslack'] = collection[fromTaskIdIndex]['slack'];
                collection[fromTaskIdIndex]['enddate'] = fromIdFlatData.startDate;
                if (fromIdFlatData.endDate >= checkEndDate && fromIdFlatData.endDate <= checkEndDate) {
                    collection[fromTaskIdIndex]['slack'] = 0;
                }
            }
            //  calculate slack value for the task contains predecessor connection in "start to start".
            if (fromDataPredecessor[i] === 'SS') {
                // It execute if the task is in auto mode.
                if (fromIdFlatData.isAutoSchedule) {
                    if (fromIdFlatData.startDate > toIdFlatData.startDate) {
                        /* eslint-disable-next-line */
                        dateDifference = -(this.parent.dataOperation.getDuration(toIdFlatData.endDate, fromIdFlatData.startDate, 'minute', fromIdFlatData.isAutoSchedule, fromIdFlatData.isMilestone));
                    }
                    else {
                        /* eslint-disable-next-line */
                        dateDifference = this.parent.dataOperation.getDuration(fromIdFlatData.startDate, toIdFlatData.startDate, 'minute', fromIdFlatData.isAutoSchedule, fromIdFlatData.isMilestone);
                    }
                    // It execute while the slack value is not set to the corresponding task.
                    if (isNullOrUndefined(collection[fromTaskIdIndex]['slack'])) {
                        if (fromDateArray1.length <= 1) {
                            if (collection[totaskId]['slack'] + dateDifference < 0) {
                                collection[fromTaskIdIndex]['slack'] = 0;
                            }
                            else {
                                collection[fromTaskIdIndex]['slack'] = collection[totaskId]['slack'] + dateDifference;
                            }
                        }
                    }
                    //It execute while already the slack value is set and it is higher than the datedifference. 
                    else if (collection[fromTaskIdIndex]['slack'] > dateDifference && collection[fromTaskIdIndex]['slack'] !== 0) {
                        if (fromDateArray1.length <= 1) {
                            if (collection[totaskId]['slack'] + dateDifference < 0) {
                                collection[fromTaskIdIndex]['slack'] = 0;
                            }
                            else {
                                collection[fromTaskIdIndex]['slack'] = collection[totaskId]['slack'] + dateDifference;
                            }
                        }
                    }
                    // execute if the offset value is given.
                    if (fromDateArray1.length > 1) {
                        collection[fromTaskIdIndex]['slack'] = collection[totaskId]['slack'] + dateDifference;
                        collection[fromTaskIdIndex]['slack'] = collection[fromTaskIdIndex]['slack'] - (offsetInMillSec);
                        if (collection[fromTaskIdIndex]['slack'] < 0) {
                            collection[fromTaskIdIndex]['slack'] = 0;
                        }
                    }
                    collection[fromTaskIdIndex]['fs'] = 1;
                    collection[fromTaskIdIndex]['fsslack'] = collection[fromTaskIdIndex]['slack'];
                    collection[fromTaskIdIndex]['enddate'] = fromIdFlatData.startDate;
                }
                // It execute if the task is in not an auto mode task.
                else if (!fromIdFlatData.isAutoSchedule) {
                    dateDifference = this.getSlackDuration(fromIdFlatData.endDate, checkEndDate, 'minute', flatRecords[indexFromTaskId]);
                    if (isNullOrUndefined(collection[fromTaskIdIndex]['slack'])) {
                        collection[fromTaskIdIndex]['slack'] = dateDifference;
                    }
                    else if (collection[fromTaskIdIndex]['slack'] > dateDifference && collection[fromTaskIdIndex]['slack'] !== 0) {
                        collection[fromTaskIdIndex]['slack'] = dateDifference;
                    }
                }
                if (fromIdFlatData.endDate >= checkEndDate && fromIdFlatData.endDate <= checkEndDate) {
                    collection[fromTaskIdIndex]['slack'] = 0;
                }
            }
            //  calculate slack value for the task contains predecessor connection in "finish to finish".
            if (fromDataPredecessor[i] === 'FF') {
                // execute if the previous task is from finish to start or finish to finish state.
                if (collection[totaskId]['fs'] === 1 || collection[totaskId]['ff'] === 1 || collection[totaskId]['fs'] === -1) {
                    if (collection[totaskId]['fs'] === 1 || collection[totaskId]['ff'] === 1) {
                        prevTaskEnddate = toIdFlatData.endDate;
                        ffslack = collection[totaskId]['slack'];
                    }
                    if (collection[totaskId]['fs'] === -1) {
                        prevTaskEnddate = collection[totaskId]['enddate'];
                        ffslack = collection[totaskId]['slack'];
                    }
                    if (prevTaskEnddate > fromIdFlatData.endDate) {
                        dateDifference = -(this.getSlackDuration(fromIdFlatData.endDate, prevTaskEnddate, 'minute', flatRecords[indexFromTaskId]));
                    }
                    else {
                        dateDifference = this.getSlackDuration(prevTaskEnddate, fromIdFlatData.endDate, 'minute', flatRecords[indexFromTaskId]);
                    }
                    // set the slack value if the slack value is not set initially.
                    if (isNullOrUndefined(collection[fromTaskIdIndex]['slack'])) {
                        // execute if the offset value is not given.
                        if (fromDateArray1.length <= 1) {
                            if (ffslack - dateDifference < 0) {
                                collection[fromTaskIdIndex]['slack'] = 0;
                            }
                            else {
                                collection[fromTaskIdIndex]['slack'] = ffslack - dateDifference;
                            }
                        }
                    }
                    // overright the slack value if the current calculated slack value is less than the previous slack value.
                    else if (collection[fromTaskIdIndex]['slack'] > dateDifference && collection[fromTaskIdIndex]['slack'] !== 0) {
                        // execute if the offset value is not given.
                        if (fromDateArray1.length <= 1) {
                            if (ffslack - dateDifference < 0) {
                                collection[fromTaskIdIndex]['slack'] = 0;
                            }
                            else {
                                collection[fromTaskIdIndex]['slack'] = ffslack - dateDifference;
                            }
                        }
                    }
                    // execute if the offset value is given.
                    if (fromDateArray1.length > 1) {
                        collection[fromTaskIdIndex]['slack'] = collection[totaskId]['slack'] - dateDifference;
                        collection[fromTaskIdIndex]['slack'] = collection[fromTaskIdIndex]['slack'] - (offsetInMillSec);
                        if (collection[fromTaskIdIndex]['slack'] < 0) {
                            collection[fromTaskIdIndex]['slack'] = 0;
                        }
                    }
                    collection[fromTaskIdIndex]['ff'] = 1;
                    collection[fromTaskIdIndex]['enddate'] = prevTaskEnddate;
                    collection[fromTaskIdIndex]['fsslack'] = ffslack;
                }
                if (fromIdFlatData.endDate >= checkEndDate && fromIdFlatData.endDate <= checkEndDate) {
                    collection[fromTaskIdIndex]['slack'] = 0;
                }
            }
            //  calculate slack value for the task contains predecessor connection in "start to finish".
            if (fromDataPredecessor[i] === 'SF') {
                //It execute if the task is an auto mode task.
                if (fromIdFlatData.isAutoSchedule) {
                    //execute if the slack value is not set initially.
                    if (isNullOrUndefined(collection[fromTaskIdIndex]['slack'])) {
                        // execute if the offset value is not given.
                        if (fromDateArray1.length <= 1) {
                            // execute if the previous task does no has sucessor.
                            if (isNullOrUndefined(collection[totaskId]['to'])) {
                                dateDifference = this.getSlackDuration(fromIdFlatData.endDate, checkEndDate, 'minute', flatRecords[indexFromTaskId]);
                                collection[fromTaskIdIndex]['slack'] = dateDifference;
                            }
                            // execute if the previous task has sucessor.
                            else if (!isNullOrUndefined(collection[totaskId]['to'])) {
                                if (toIdFlatData.endDate > fromIdFlatData.startDate) {
                                    /* eslint-disable-next-line */
                                    dateDifference = -(this.parent.dataOperation.getDuration(fromIdFlatData.startDate, toIdFlatData.endDate, 'minute', fromIdFlatData.isAutoSchedule, fromIdFlatData.isMilestone));
                                }
                                else {
                                    dateDifference = this.getSlackDuration(toIdFlatData.endDate, fromIdFlatData.startDate, 'minute', flatRecords[indexFromTaskId]);
                                }
                                if (collection[totaskId]['slack'] + dateDifference < 0) {
                                    collection[fromTaskIdIndex]['slack'] = 0;
                                }
                                else {
                                    collection[fromTaskIdIndex]['slack'] = collection[totaskId]['slack'] + dateDifference;
                                }
                            }
                        }
                        // execute if the offset value is given.
                        else if (fromDateArray1.length > 1) {
                            if (toIdFlatData.endDate >= fromIdFlatData.endDate) {
                                if (fromIdFlatData.startDate > toIdFlatData.endDate) {
                                    /* eslint-disable-next-line */
                                    dateDifference = -(this.getSlackDuration(toIdFlatData.endDate, fromIdFlatData.startDate, 'minute', flatRecords[indexFromTaskId]));
                                }
                                else {
                                    /* eslint-disable-next-line */
                                    dateDifference = this.parent.dataOperation.getDuration(fromIdFlatData.startDate, toIdFlatData.endDate, 'minute', fromIdFlatData.isAutoSchedule, fromIdFlatData.isMilestone);
                                }
                            }
                            else {
                                dateDifference = this.getSlackDuration(fromIdFlatData.endDate, checkEndDate, 'minute', flatRecords[indexFromTaskId]);
                            }
                            collection[fromTaskIdIndex]['slack'] = collection[totaskId]['slack'] + dateDifference;
                            collection[fromTaskIdIndex]['slack'] = collection[fromTaskIdIndex]['slack'] - (offsetInMillSec);
                            if (collection[fromTaskIdIndex]['slack'] < 0) {
                                collection[fromTaskIdIndex]['slack'] = 0;
                            }
                        }
                        collection[fromTaskIdIndex]['fs'] = 1;
                        collection[fromTaskIdIndex]['fsslack'] = collection[fromTaskIdIndex]['slack'];
                        collection[fromTaskIdIndex]['enddate'] = fromIdFlatData.startDate;
                    }
                    else {
                        if (fromDateArray1.length <= 1) {
                            if (isNullOrUndefined(collection[totaskId]['to'])) {
                                /* eslint-disable-next-line */
                                dateDifference = this.getSlackDuration(fromIdFlatData.endDate, checkEndDate, 'minute', flatRecords[indexFromTaskId]);
                            }
                            else if (!isNullOrUndefined(collection[totaskId]['to'])) {
                                if (toIdFlatData.endDate > fromIdFlatData.startDate) {
                                    // eslint-disable-next-line
                                    dateDifference = -(this.parent.dataOperation.getDuration(fromIdFlatData.startDate, toIdFlatData.endDate, 'minute', fromIdFlatData.isAutoSchedule, fromIdFlatData.isMilestone));
                                }
                                else {
                                    dateDifference = this.getSlackDuration(toIdFlatData.endDate, fromIdFlatData.startDate, 'minute', flatRecords[indexFromTaskId]);
                                }
                            }
                            // execute if the current calculated slack value is less than the previous slack value.
                            if (collection[fromTaskIdIndex]['slack'] > dateDifference && collection[fromTaskIdIndex]['slack'] !== 0) {
                                if (isNullOrUndefined(collection[totaskId]['to'])) {
                                    collection[fromTaskIdIndex]['slack'] = dateDifference;
                                }
                                else if (!isNullOrUndefined(collection[totaskId]['to'])) {
                                    if (collection[totaskId]['slack'] + dateDifference < 0) {
                                        collection[fromTaskIdIndex]['slack'] = 0;
                                    }
                                    else {
                                        collection[fromTaskIdIndex]['slack'] = collection[totaskId]['slack'] + dateDifference;
                                    }
                                }
                            }
                        }
                        else if (fromDateArray1.length > 1) {
                            if (toIdFlatData.endDate > fromIdFlatData.endDate) {
                                if (fromIdFlatData.startDate > toIdFlatData.endDate) {
                                    /* eslint-disable-next-line */
                                    dateDifference = -(this.getSlackDuration(toIdFlatData.endDate, fromIdFlatData.startDate, 'minute', flatRecords[indexFromTaskId]));
                                }
                                else {
                                    // eslint-disable-next-line
                                    dateDifference = this.parent.dataOperation.getDuration(fromIdFlatData.startDate, toIdFlatData.endDate, 'minute', fromIdFlatData.isAutoSchedule, fromIdFlatData.isMilestone);
                                }
                            }
                            else {
                                /* eslint-disable-next-line */
                                dateDifference = this.getSlackDuration(fromIdFlatData.endDate, checkEndDate, 'minute', flatRecords[indexFromTaskId]);
                            }
                            // execute if the current calculated slack value is less than the previous slack value.
                            if (collection[fromTaskIdIndex]['slack'] > dateDifference && collection[fromTaskIdIndex]['slack'] !== 0) {
                                collection[fromTaskIdIndex]['slack'] = collection[totaskId]['slack'] + dateDifference;
                                collection[fromTaskIdIndex]['slack'] = collection[fromTaskIdIndex]['slack'] - (offsetInMillSec);
                                if (collection[fromTaskIdIndex]['slack'] < 0) {
                                    collection[fromTaskIdIndex]['slack'] = 0;
                                }
                            }
                        }
                        collection[fromTaskIdIndex]['fs'] = 1;
                        collection[fromTaskIdIndex]['fsslack'] = collection[fromTaskIdIndex]['slack'];
                        collection[fromTaskIdIndex]['enddate'] = fromIdFlatData.startDate;
                    }
                }
                //It execute if the task is an auto mode task.
                else if (!fromIdFlatData.isAutoSchedule) {
                    dateDifference = this.getSlackDuration(fromIdFlatData.endDate, checkEndDate, 'minute', flatRecords[indexFromTaskId]);
                    if (isNullOrUndefined(collection[fromTaskIdIndex]['slack'])) {
                        collection[fromTaskIdIndex]['slack'] = dateDifference;
                    }
                    else if (collection[fromTaskIdIndex]['slack'] > dateDifference && collection[fromTaskIdIndex]['slack'] !== 0) {
                        collection[fromTaskIdIndex]['slack'] = dateDifference;
                    }
                }
                if (fromIdFlatData.endDate >= checkEndDate && fromIdFlatData.endDate <= checkEndDate) {
                    collection[fromTaskIdIndex]['slack'] = 0;
                }
            }
            if (collection[fromTaskIdIndex]['from']) {
                fromDataObject.push({
                    fromdata: collection[fromTaskIdIndex]['from'], todateID: collection[fromTaskIdIndex]['taskid'],
                    fromDataPredecessor: collection[fromTaskIdIndex]['fromPredecessor']
                });
            }
        }
        if (fromDataObject) {
            fromDataObject.splice(0, 1);
            if (fromDataObject.length > 0) {
                this.slackCalculation(fromDataObject, collection, collectionTaskId, checkEndDate, flatRecords, modelRecordIds);
            }
        }
    };
    CriticalPath.prototype.getSlackDuration = function (sDate, eDate, durationUnit, record) {
        var startDate = this.parent.dateValidationModule.checkStartDate(new Date(sDate));
        var endDate = this.parent.dateValidationModule.checkEndDate(new Date(eDate));
        if (this.parent.dataOperation['getTimeDifference'](startDate, endDate, true) <= 0) {
            return 0;
        }
        else {
            return this.parent.dataOperation.getDuration(startDate, endDate, durationUnit, record.ganttProperties.isAutoSchedule, true);
        }
    };
    /* eslint-disable-next-line */
    CriticalPath.prototype.finalCriticalPath = function (collection, taskBeyondEnddate, flatRecords, modelRecordIds, checkEndDate) {
        var criticalPathIds = [];
        var index;
        for (var x = collection.length - 1; x >= 0; x--) {
            if (this.parent.viewType === 'ProjectView') {
                index = modelRecordIds.indexOf(collection[x]['taskid'].toString());
            }
            else {
                index = this.resourceCollectionIds.indexOf(collection[x]['taskid'].toString());
            }
            var predecessorLength = flatRecords[index].ganttProperties.predecessor;
            var noSlackValue = 0 + ' ' + flatRecords[index].ganttProperties.durationUnit;
            for (var i = 0; i < predecessorLength.length; i++) {
                var toID = void 0;
                if (this.parent.viewType === 'ProjectView') {
                    toID = this.parent.ids.indexOf(predecessorLength[i].to);
                }
                else {
                    toID = this.resourceCollectionIds.indexOf(predecessorLength[i].to);
                }
                var dateDifference = void 0;
                var currentData = flatRecords[index].ganttProperties;
                if (predecessorLength[i].type === 'FS') {
                    /* eslint-disable-next-line */
                    dateDifference = this.parent.dataOperation.getDuration(currentData.endDate, flatRecords[toID].ganttProperties.startDate, currentData.durationUnit, currentData.isAutoSchedule, currentData.isMilestone);
                    if (dateDifference === 0 && index !== toID && flatRecords[index].slack !== noSlackValue) {
                        flatRecords[index].slack = flatRecords[toID].slack;
                        flatRecords[index].ganttProperties.slack = flatRecords[toID].slack;
                    }
                    else if (dateDifference !== 0 && index !== toID && flatRecords[toID].isCritical) {
                        flatRecords[index].slack = dateDifference + ' ' + flatRecords[index].ganttProperties.durationUnit;
                        flatRecords[index].ganttProperties.slack = dateDifference + ' ' + flatRecords[index].ganttProperties.durationUnit;
                    }
                }
                else if (predecessorLength[i].type === 'SF') {
                    /* eslint-disable-next-line */
                    dateDifference = this.parent.dataOperation.getDuration(currentData.startDate, flatRecords[toID].ganttProperties.endDate, currentData.durationUnit, currentData.isAutoSchedule, currentData.isMilestone);
                }
                else if (predecessorLength[i].type === 'SS') {
                    /* eslint-disable-next-line */
                    dateDifference = this.parent.dataOperation.getDuration(currentData.startDate, flatRecords[toID].ganttProperties.startDate, currentData.durationUnit, currentData.isAutoSchedule, currentData.isMilestone);
                }
                else {
                    /* eslint-disable-next-line */
                    dateDifference = this.parent.dataOperation.getDuration(currentData.endDate, flatRecords[toID].ganttProperties.endDate, currentData.durationUnit, currentData.isAutoSchedule, currentData.isMilestone);
                }
                if (parseInt(predecessorLength[i].from, 10) === flatRecords[index][this.parent.taskFields.id] &&
                    flatRecords[toID].slack === noSlackValue && dateDifference <= 0) {
                    flatRecords[index].slack = noSlackValue;
                    flatRecords[index].ganttProperties.slack = noSlackValue;
                }
            }
            if (flatRecords[index].slack === noSlackValue) {
                if (flatRecords[index].ganttProperties.progress < 100) {
                    flatRecords[index].isCritical = true;
                    flatRecords[index].ganttProperties.isCritical = true;
                    this.criticalTasks.push(flatRecords[index]);
                    criticalPathIds.push(collection[x]['taskid']);
                }
            }
        }
        if (taskBeyondEnddate.length > 0) {
            for (var i = 0; i < taskBeyondEnddate.length; i++) {
                if (this.parent.viewType === 'ProjectView') {
                    index = modelRecordIds.indexOf(taskBeyondEnddate[i].toString());
                }
                else {
                    index = this.resourceCollectionIds.indexOf(taskBeyondEnddate[i].toString());
                }
                if (index !== -1 && flatRecords[index].ganttProperties.progress < 100) {
                    this.criticalTasks.push(flatRecords[index]);
                    criticalPathIds = criticalPathIds.concat(taskBeyondEnddate[i]);
                }
            }
        }
        return criticalPathIds;
    };
    /* eslint-disable-next-line */
    CriticalPath.prototype.criticalConnectorLine = function (criticalPathIds, collection, condition, collectionTaskId) {
        var ganttChartElement = this.parent.ganttChartModule.chartElement;
        removeClass(ganttChartElement.querySelectorAll('.e-gantt-child-taskbar-inner-div'), cls.criticalChildTaskBarInnerDiv);
        removeClass(ganttChartElement.querySelectorAll('.e-gantt-child-progressbar-inner-div'), cls.criticalChildProgressBarInnerDiv);
        removeClass(ganttChartElement.querySelectorAll('.e-milestone-top'), cls.criticalMilestoneTop);
        removeClass(ganttChartElement.querySelectorAll('.e-milestone-bottom'), cls.criticalMilestoneBottom);
        for (var i = 0; i < criticalPathIds.length; i++) {
            var criticalData = void 0;
            if (this.parent.viewType === 'ProjectView') {
                criticalData = this.parent.flatData[this.parent.ids.indexOf(criticalPathIds[i].toString())];
            }
            else {
                criticalData = this.parent.flatData[this.resourceCollectionIds.indexOf(criticalPathIds[i].toString())];
            }
            var index = this.parent.currentViewData.indexOf(criticalData);
            var element = this.parent.getRowByIndex(index);
            var taskClass = void 0;
            var columnFields = this.parent.taskFields;
            /* eslint-disable-next-line */
            if (this.parent.allowUnscheduledTasks && !criticalData[columnFields.startDate] && !criticalData[columnFields.endDate] && criticalData[columnFields.duration]) {
                taskClass = cls.criticalUnscheduledTask;
            }
            else {
                taskClass = cls.criticalChildProgressBarInnerDiv;
            }
            if (element) {
                if (element.getElementsByClassName('e-milestone-top')[0]) {
                    addClass(element.querySelectorAll('.e-milestone-top'), cls.criticalMilestoneTop);
                }
                if (element.getElementsByClassName('e-milestone-bottom')[0]) {
                    addClass(element.querySelectorAll('.e-milestone-bottom'), cls.criticalMilestoneBottom);
                }
                if (element.getElementsByClassName('e-gantt-child-taskbar-inner-div').length > 0) {
                    addClass(element.querySelectorAll('.e-gantt-child-taskbar-inner-div'), cls.criticalChildTaskBarInnerDiv);
                }
                if (element.getElementsByClassName('e-gantt-child-progressbar-inner-div').length > 0) {
                    addClass(element.querySelectorAll('.e-gantt-child-progressbar-inner-div'), taskClass);
                }
            }
        }
        removeClass(this.parent.element.querySelectorAll('.e-line'), cls.criticalConnectorLine);
        removeClass(this.parent.element.querySelectorAll('.e-connector-line-right-arrow'), cls.criticalConnectorLineRightArrow);
        removeClass(this.parent.element.querySelectorAll('.e-connector-line-left-arrow'), cls.criticalConnectorLineLeftArrow);
        if (collection.length !== 0) {
            var index = 0;
            var currentdata = void 0;
            var checking = [];
            var checkint = void 0;
            for (var i = 0; i < this.criticalPathCollection.length; i++) {
                index = collectionTaskId.indexOf(this.criticalPathCollection[i]);
                currentdata = collection[index];
                if (index !== -1 && currentdata['to']) {
                    checking = currentdata['to'].split(',');
                    for (var j = 0; j < checking.length; j++) {
                        checkint = parseInt(checking[j], 10);
                        if (criticalPathIds.indexOf(checkint) !== -1) {
                            var lineElement = this.parent.element.querySelectorAll('#ConnectorLineparent' +
                                currentdata['taskid'] + 'child' + checkint);
                            if (lineElement.length > 0) {
                                addClass(this.parent.element.querySelectorAll('#ConnectorLineparent' + currentdata['taskid'] + 'child' +
                                    checkint)[0].querySelectorAll('.e-line'), cls.criticalConnectorLine);
                                addClass(this.parent.element.querySelectorAll('#ConnectorLineparent' + currentdata['taskid'] + 'child' +
                                    checkint)[0].querySelectorAll('.e-connector-line-right-arrow'), cls.criticalConnectorLineRightArrow);
                                addClass(this.parent.element.querySelectorAll('#ConnectorLineparent' + currentdata['taskid'] + 'child' +
                                    checkint)[0].querySelectorAll('.e-connector-line-left-arrow'), cls.criticalConnectorLineLeftArrow);
                            }
                        }
                    }
                }
            }
        }
    };
    CriticalPath.prototype.getModuleName = function () {
        return 'criticalPath';
    };
    /**
     * Destroys the Critical Path of Gantt.
     *
     * @returns {void} .
     * @private
     */
    CriticalPath.prototype.destroy = function () {
        if (!this.parent.enableCriticalPath && this.parent.criticalPathModule) {
            this.parent.criticalPathModule = undefined;
        }
    };
    return CriticalPath;
}());
export { CriticalPath };
