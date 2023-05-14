import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { TreeMap } from '@syncfusion/ej2-treemap';
import { LevelsDirective } from './levels.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * TreeMap Component
 * ```html
 * <ej-treemap></ej-treemap>
 * ```
 */
export declare class TreeMapComponent extends TreeMap implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    beforePrint: any;
    click: any;
    doubleClick: any;
    drillEnd: any;
    drillStart: any;
    itemClick: any;
    itemHighlight: any;
    itemMove: any;
    itemRendering: any;
    itemSelected: any;
    legendItemRendering: any;
    legendRendering: any;
    load: any;
    loaded: any;
    mouseMove: any;
    resize: any;
    rightClick: any;
    tooltipRendering: any;
    childLevels: QueryList<LevelsDirective>;
    tags: string[];
    tooltipSettings_template: any;
    leafItemSettings_labelTemplate: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeMapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeMapComponent, "ejs-treemap", never, { "allowImageExport": "allowImageExport"; "allowPdfExport": "allowPdfExport"; "allowPrint": "allowPrint"; "background": "background"; "border": "border"; "breadcrumbConnector": "breadcrumbConnector"; "colorValuePath": "colorValuePath"; "dataSource": "dataSource"; "description": "description"; "drillDownView": "drillDownView"; "enableBreadcrumb": "enableBreadcrumb"; "enableDrillDown": "enableDrillDown"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "equalColorValuePath": "equalColorValuePath"; "format": "format"; "height": "height"; "highlightSettings": "highlightSettings"; "initialDrillDown": "initialDrillDown"; "layoutType": "layoutType"; "leafItemSettings": "leafItemSettings"; "legendSettings": "legendSettings"; "levels": "levels"; "locale": "locale"; "margin": "margin"; "palette": "palette"; "query": "query"; "rangeColorValuePath": "rangeColorValuePath"; "renderDirection": "renderDirection"; "selectionSettings": "selectionSettings"; "tabIndex": "tabIndex"; "theme": "theme"; "titleSettings": "titleSettings"; "tooltipSettings": "tooltipSettings"; "useGroupingSeparator": "useGroupingSeparator"; "weightValuePath": "weightValuePath"; "width": "width"; }, { "beforePrint": "beforePrint"; "click": "click"; "doubleClick": "doubleClick"; "drillEnd": "drillEnd"; "drillStart": "drillStart"; "itemClick": "itemClick"; "itemHighlight": "itemHighlight"; "itemMove": "itemMove"; "itemRendering": "itemRendering"; "itemSelected": "itemSelected"; "legendItemRendering": "legendItemRendering"; "legendRendering": "legendRendering"; "load": "load"; "loaded": "loaded"; "mouseMove": "mouseMove"; "resize": "resize"; "rightClick": "rightClick"; "tooltipRendering": "tooltipRendering"; }, ["tooltipSettings_template", "leafItemSettings_labelTemplate", "childLevels"], never>;
}
