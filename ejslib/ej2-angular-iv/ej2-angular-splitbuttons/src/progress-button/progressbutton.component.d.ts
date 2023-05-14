import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { ProgressButton } from '@syncfusion/ej2-splitbuttons';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the Angular ProgressButton Component.
 * ```html
 * <button ejs-progressbutton content='Progress Button'></button>
 * ```
 */
export declare class ProgressButtonComponent extends ProgressButton implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    containerContext: any;
    tagObjects: any;
    begin: any;
    created: any;
    end: any;
    fail: any;
    progress: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressButtonComponent, "[ejs-progressbutton]", never, { "animationSettings": "animationSettings"; "content": "content"; "cssClass": "cssClass"; "disabled": "disabled"; "duration": "duration"; "enableHtmlSanitizer": "enableHtmlSanitizer"; "enableProgress": "enableProgress"; "iconCss": "iconCss"; "iconPosition": "iconPosition"; "isPrimary": "isPrimary"; "isToggle": "isToggle"; "spinSettings": "spinSettings"; }, { "begin": "begin"; "created": "created"; "end": "end"; "fail": "fail"; "progress": "progress"; }, never, ["*"]>;
}
