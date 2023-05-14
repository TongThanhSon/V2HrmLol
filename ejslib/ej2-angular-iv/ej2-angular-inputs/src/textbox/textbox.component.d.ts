import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { TextBox } from '@syncfusion/ej2-inputs';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the EJ2 Angular TextBox Component.
 * ```html
 * <ejs-textbox [value]='value'></ejs-textbox>
 * ```
 */
export declare class TextBoxComponent extends TextBox implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    formCompContext: any;
    formContext: any;
    tagObjects: any;
    blur: any;
    change: any;
    created: any;
    destroyed: any;
    focus: any;
    input: any;
    valueChange: any;
    private skipFromEvent;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<TextBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextBoxComponent, "ejs-textbox", never, { "autocomplete": "autocomplete"; "cssClass": "cssClass"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "enabled": "enabled"; "floatLabelType": "floatLabelType"; "htmlAttributes": "htmlAttributes"; "locale": "locale"; "multiline": "multiline"; "placeholder": "placeholder"; "readonly": "readonly"; "showClearButton": "showClearButton"; "type": "type"; "value": "value"; "width": "width"; }, { "blur": "blur"; "change": "change"; "created": "created"; "destroyed": "destroyed"; "focus": "focus"; "input": "input"; "valueChange": "valueChange"; }, never, never>;
}
