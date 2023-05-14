import { ElementRef, ViewContainerRef, Renderer2, Injector, QueryList } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { SplitButton } from '@syncfusion/ej2-splitbuttons';
import { SplitButtonItemsDirective } from './items.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the Angular SplitButton Component.
 * ```html
 * <ejs-splitbutton content='Split Button'></ejs-splitbutton>
 * ```
 */
export declare class SplitButtonComponent extends SplitButton implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    containerContext: any;
    tagObjects: any;
    beforeClose: any;
    beforeItemRender: any;
    beforeOpen: any;
    click: any;
    close: any;
    created: any;
    open: any;
    select: any;
    childItems: QueryList<SplitButtonItemsDirective>;
    tags: string[];
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SplitButtonComponent, "ejs-splitbutton", never, { "content": "content"; "createPopupOnClick": "createPopupOnClick"; "cssClass": "cssClass"; "disabled": "disabled"; "enableHtmlSanitizer": "enableHtmlSanitizer"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "iconCss": "iconCss"; "iconPosition": "iconPosition"; "items": "items"; "locale": "locale"; "target": "target"; }, { "beforeClose": "beforeClose"; "beforeItemRender": "beforeItemRender"; "beforeOpen": "beforeOpen"; "click": "click"; "close": "close"; "created": "created"; "open": "open"; "select": "select"; }, ["childItems"], ["*"]>;
}
