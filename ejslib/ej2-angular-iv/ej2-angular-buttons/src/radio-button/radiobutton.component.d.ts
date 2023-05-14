import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { RadioButton } from '@syncfusion/ej2-buttons';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the Angular RadioButton Component.
 * ```html
 * <ejs-radiobutton label='Default'></ejs-radiobutton>
 * ```
 */
export declare class RadioButtonComponent extends RadioButton implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    formCompContext: any;
    formContext: any;
    tagObjects: any;
    change: any;
    created: any;
    valueChange: any;
    focus: any;
    blur: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    registerOnChange(registerFunction: (_: any) => void): void;
    registerOnTouched(registerFunction: () => void): void;
    writeValue(value: any): void;
    setDisabledState(disabled: boolean): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioButtonComponent, "ejs-radiobutton", never, { "checked": "checked"; "cssClass": "cssClass"; "disabled": "disabled"; "enableHtmlSanitizer": "enableHtmlSanitizer"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "htmlAttributes": "htmlAttributes"; "label": "label"; "labelPosition": "labelPosition"; "locale": "locale"; "name": "name"; "value": "value"; }, { "focus": "focus"; "blur": "blur"; "change": "change"; "created": "created"; "valueChange": "valueChange"; }, never, never>;
}
