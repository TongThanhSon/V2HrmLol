import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { QueryBuilder } from '@syncfusion/ej2-querybuilder';
import { ColumnsDirective } from './columns.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the EJ2 Angular QueryBuilder Component.
 * ```html
 * <ejs-querybuilder></ejs-querybuilder>
 * ```
 */
export declare class QueryBuilderComponent extends QueryBuilder implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    actionBegin: any;
    beforeChange: any;
    change: any;
    created: any;
    dataBound: any;
    ruleChange: any;
    childColumns: QueryList<ColumnsDirective>;
    tags: string[];
    /**
     * Specifies the template for the header with any other widgets.
     * @default null
     */
    headerTemplate: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QueryBuilderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QueryBuilderComponent, "ejs-querybuilder", never, { "allowValidation": "allowValidation"; "columns": "columns"; "cssClass": "cssClass"; "dataSource": "dataSource"; "displayMode": "displayMode"; "enableNotCondition": "enableNotCondition"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "fieldMode": "fieldMode"; "fieldModel": "fieldModel"; "headerTemplate": "headerTemplate"; "height": "height"; "immediateModeDelay": "immediateModeDelay"; "locale": "locale"; "matchCase": "matchCase"; "maxGroupCount": "maxGroupCount"; "operatorModel": "operatorModel"; "readonly": "readonly"; "rule": "rule"; "separator": "separator"; "showButtons": "showButtons"; "sortDirection": "sortDirection"; "summaryView": "summaryView"; "valueModel": "valueModel"; "width": "width"; }, { "actionBegin": "actionBegin"; "beforeChange": "beforeChange"; "change": "change"; "created": "created"; "dataBound": "dataBound"; "ruleChange": "ruleChange"; }, ["headerTemplate", "childColumns"], never>;
}
