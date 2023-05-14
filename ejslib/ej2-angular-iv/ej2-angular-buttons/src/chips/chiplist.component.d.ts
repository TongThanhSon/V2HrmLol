import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { ChipList } from '@syncfusion/ej2-buttons';
import { ChipsDirective } from './chips.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the Essential JS 2 Angular ChipList Component.
 * ```html
 * <ejs-chiplist></ejs-chiplist>
 * ```
 */
export declare class ChipListComponent extends ChipList implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    beforeClick: any;
    click: any;
    created: any;
    delete: any;
    deleted: any;
    childChips: QueryList<ChipsDirective>;
    tags: string[];
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipListComponent, "ejs-chiplist", never, { "avatarIconCss": "avatarIconCss"; "avatarText": "avatarText"; "chips": "chips"; "cssClass": "cssClass"; "enableDelete": "enableDelete"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "enabled": "enabled"; "leadingIconCss": "leadingIconCss"; "leadingIconUrl": "leadingIconUrl"; "locale": "locale"; "selectedChips": "selectedChips"; "selection": "selection"; "text": "text"; "trailingIconCss": "trailingIconCss"; "trailingIconUrl": "trailingIconUrl"; }, { "beforeClick": "beforeClick"; "click": "click"; "created": "created"; "delete": "delete"; "deleted": "deleted"; }, ["childChips"], never>;
}
