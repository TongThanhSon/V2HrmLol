import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the EJ2 Angular NumericTextBox Component.
 * ```html
 * <ej-numerictextbox [value]='value'></ej-numerictextbox>
 * ```
 */
export declare class NumericTextBoxComponent extends NumericTextBox implements IComponentBase {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NumericTextBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NumericTextBoxComponent, "ejs-numerictextbox", never, { "cssClass": "cssClass"; "currency": "currency"; "currencyCode": "currencyCode"; "decimals": "decimals"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "enabled": "enabled"; "floatLabelType": "floatLabelType"; "format": "format"; "htmlAttributes": "htmlAttributes"; "locale": "locale"; "max": "max"; "min": "min"; "placeholder": "placeholder"; "readonly": "readonly"; "showClearButton": "showClearButton"; "showSpinButton": "showSpinButton"; "step": "step"; "strictMode": "strictMode"; "validateDecimalOnType": "validateDecimalOnType"; "value": "value"; "width": "width"; }, { "blur": "blur"; "change": "change"; "created": "created"; "destroyed": "destroyed"; "focus": "focus"; "valueChange": "valueChange"; }, never, never>;
}
