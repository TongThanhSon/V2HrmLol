import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { ListView } from '@syncfusion/ej2-lists';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents Angular ListView Component
 * ```
 * <ejs-listview [dataSource]='data'></ejs-listview>
 * ```
 */
export declare class ListViewComponent extends ListView implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    actionBegin: any;
    actionComplete: any;
    actionFailure: any;
    select: any;
    /**
     * The ListView component supports to customize the content of each list items with the help of `template` property.
     *
     * {% codeBlock src='listview/template/index.md' %}{% endcodeBlock %}
     *
     * @default null
     * @deprecated
     */
    template: any;
    /**
     * The ListView has an option to custom design the group header title with the help of `groupTemplate` property.
     *
     * {% codeBlock src="listview/groupTemplate/index.md" %}{% endcodeBlock %}
     *
     * @default null
     * @deprecated
     */
    groupTemplate: any;
    /**
     * The ListView has an option to custom design the ListView header title with the help of `headerTemplate` property.
     *
     * {% codeBlock src="listview/headerTemplate/index.md" %}{% endcodeBlock %}
     *
     * @default null
     * @deprecated
     */
    headerTemplate: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListViewComponent, "ejs-listview", never, { "animation": "animation"; "checkBoxPosition": "checkBoxPosition"; "cssClass": "cssClass"; "dataSource": "dataSource"; "enable": "enable"; "enableHtmlSanitizer": "enableHtmlSanitizer"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "enableVirtualization": "enableVirtualization"; "fields": "fields"; "groupTemplate": "groupTemplate"; "headerTemplate": "headerTemplate"; "headerTitle": "headerTitle"; "height": "height"; "htmlAttributes": "htmlAttributes"; "locale": "locale"; "query": "query"; "showCheckBox": "showCheckBox"; "showHeader": "showHeader"; "showIcon": "showIcon"; "sortOrder": "sortOrder"; "template": "template"; "width": "width"; }, { "actionBegin": "actionBegin"; "actionComplete": "actionComplete"; "actionFailure": "actionFailure"; "select": "select"; }, ["template", "groupTemplate", "headerTemplate"], never>;
}
