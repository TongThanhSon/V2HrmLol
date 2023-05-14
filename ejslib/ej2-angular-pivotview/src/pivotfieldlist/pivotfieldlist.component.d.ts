import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { PivotFieldList } from '@syncfusion/ej2-pivotview';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * `ej-pivotfieldlist` represents the Angular PivotFieldList Component.
 * ```html
 * <ej-pivotfieldlist></ej-pivotfieldlist>
 * ```
 */
export declare class PivotFieldListComponent extends PivotFieldList implements IComponentBase {
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
    beforeServiceInvoke: any;
    calculatedFieldCreate: any;
    created: any;
    dataBound: any;
    destroyed: any;
    enginePopulated: any;
    enginePopulating: any;
    fieldDragStart: any;
    fieldDrop: any;
    fieldRemove: any;
    load: any;
    memberEditorOpen: any;
    memberFiltering: any;
    onFieldDropped: any;
    onHeadersSort: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
}
