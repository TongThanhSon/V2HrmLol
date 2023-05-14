import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Kanban } from '@syncfusion/ej2-kanban';
import { ColumnsDirective } from './columns.directive';
import { StackedHeadersDirective } from './stackedheaders.directive';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * `ej-kanban` represents the Angular Kanban Component.
 * ```html
 * <ejs-kanban></ejs-kanban>
 * ```
 */
export declare class KanbanComponent extends Kanban implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    actionBegin: any;
    actionComplete: any;
    actionFailure: any;
    cardClick: any;
    cardDoubleClick: any;
    cardRendered: any;
    created: any;
    dataBinding: any;
    dataBound: any;
    dataSourceChanged: any;
    dataStateChange: any;
    dialogClose: any;
    dialogOpen: any;
    drag: any;
    dragStart: any;
    dragStop: any;
    queryCellInfo: any;
    childColumns: QueryList<ColumnsDirective>;
    childStackedHeaders: QueryList<StackedHeadersDirective>;
    tags: string[];
    /**
     * Defines the template content to card’s tooltip. The property works by enabling the ‘enableTooltip’ property.
     * @default null
     */
    tooltipTemplate: any;
    columns_template: any;
    swimlaneSettings_template: any;
    cardSettings_template: any;
    dialogSettings_template: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
}
