import { ElementRef, ViewContainerRef, Renderer2, Injector, QueryList } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
import { DropDownButtonItemsDirective } from './items.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the Angular DropDownButton Component.
 * ```html
 * <button ejs-dropdownbutton>DropDownButton</button>
 * ```
 */
export declare class DropDownButtonComponent extends DropDownButton implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    containerContext: any;
    tagObjects: any;
    beforeClose: any;
    beforeItemRender: any;
    beforeOpen: any;
    close: any;
    created: any;
    open: any;
    select: any;
    childItems: QueryList<DropDownButtonItemsDirective>;
    tags: string[];
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropDownButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropDownButtonComponent, "[ejs-dropdownbutton]", never, { "content": "content"; "createPopupOnClick": "createPopupOnClick"; "cssClass": "cssClass"; "disabled": "disabled"; "enableHtmlSanitizer": "enableHtmlSanitizer"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "iconCss": "iconCss"; "iconPosition": "iconPosition"; "items": "items"; "locale": "locale"; "target": "target"; }, { "beforeClose": "beforeClose"; "beforeItemRender": "beforeItemRender"; "beforeOpen": "beforeOpen"; "close": "close"; "created": "created"; "open": "open"; "select": "select"; }, ["childItems"], ["*"]>;
}
