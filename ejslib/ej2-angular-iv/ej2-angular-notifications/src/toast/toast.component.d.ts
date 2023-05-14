import { ElementRef, ViewContainerRef, Renderer2, Injector, QueryList } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Toast } from '@syncfusion/ej2-notifications';
import { ButtonModelPropsDirective } from './buttons.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the Angular Toast Component
 * ```html
 * <ejs-toast></ejs-toast>
 * ```
 */
export declare class ToastComponent extends Toast implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    containerContext: any;
    tagObjects: any;
    beforeClose: any;
    beforeOpen: any;
    beforeSanitizeHtml: any;
    click: any;
    close: any;
    created: any;
    destroyed: any;
    open: any;
    childButtons: QueryList<ButtonModelPropsDirective>;
    tags: string[];
    /**
     * Specifies the title to be displayed on the Toast.
     * Accepts selectors, string values and HTML elements.
     * @default null
     */
    title: any;
    /**
     * Specifies the content to be displayed on the Toast.
     * Accepts selectors, string values and HTML elements.
     * @default null
     * @blazortype string
     */
    content: any;
    /**
     * Specifies the HTML element/element ID as a string that can be displayed as a Toast.
     * The given template is taken as preference to render the Toast, even if the built-in properties such as title and content are defined.
     *
     * {% codeBlock src='toast/template/index.md' %}{% endcodeBlock %}
     *
     * @default null
     */
    template: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastComponent, "ejs-toast", never, { "animation": "animation"; "buttons": "buttons"; "content": "content"; "cssClass": "cssClass"; "enableHtmlSanitizer": "enableHtmlSanitizer"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "extendedTimeout": "extendedTimeout"; "height": "height"; "icon": "icon"; "locale": "locale"; "newestOnTop": "newestOnTop"; "position": "position"; "progressDirection": "progressDirection"; "showCloseButton": "showCloseButton"; "showProgressBar": "showProgressBar"; "target": "target"; "template": "template"; "timeOut": "timeOut"; "title": "title"; "width": "width"; }, { "beforeClose": "beforeClose"; "beforeOpen": "beforeOpen"; "beforeSanitizeHtml": "beforeSanitizeHtml"; "click": "click"; "close": "close"; "created": "created"; "destroyed": "destroyed"; "open": "open"; }, ["title", "content", "template", "childButtons"], ["*"]>;
}
