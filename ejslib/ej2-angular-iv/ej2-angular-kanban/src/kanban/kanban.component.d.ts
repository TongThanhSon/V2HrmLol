import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Kanban } from '@syncfusion/ej2-kanban';
import { ColumnsDirective } from './columns.directive';
import { StackedHeadersDirective } from './stackedheaders.directive';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<KanbanComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KanbanComponent, "ejs-kanban", never, { "allowDragAndDrop": "allowDragAndDrop"; "allowKeyboard": "allowKeyboard"; "cardSettings": "cardSettings"; "columns": "columns"; "constraintType": "constraintType"; "cssClass": "cssClass"; "dataSource": "dataSource"; "dialogSettings": "dialogSettings"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "enableTooltip": "enableTooltip"; "externalDropId": "externalDropId"; "height": "height"; "keyField": "keyField"; "locale": "locale"; "query": "query"; "showEmptyColumn": "showEmptyColumn"; "sortSettings": "sortSettings"; "stackedHeaders": "stackedHeaders"; "swimlaneSettings": "swimlaneSettings"; "tooltipTemplate": "tooltipTemplate"; "width": "width"; }, { "actionBegin": "actionBegin"; "actionComplete": "actionComplete"; "actionFailure": "actionFailure"; "cardClick": "cardClick"; "cardDoubleClick": "cardDoubleClick"; "cardRendered": "cardRendered"; "created": "created"; "dataBinding": "dataBinding"; "dataBound": "dataBound"; "dataSourceChanged": "dataSourceChanged"; "dataStateChange": "dataStateChange"; "dialogClose": "dialogClose"; "dialogOpen": "dialogOpen"; "drag": "drag"; "dragStart": "dragStart"; "dragStop": "dragStop"; "queryCellInfo": "queryCellInfo"; }, ["tooltipTemplate", "columns_template", "swimlaneSettings_template", "cardSettings_template", "dialogSettings_template", "childColumns", "childStackedHeaders"], never>;
}
