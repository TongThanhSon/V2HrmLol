import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * `ejs-inplaceeditor` represents the Angular InPlaceEditor Component.
 * ```html
 * <ejs-inplaceeditor></ejs-inplaceeditor>
 * ```
 */
export declare class InPlaceEditorComponent extends InPlaceEditor implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    formCompContext: any;
    formContext: any;
    tagObjects: any;
    actionBegin: any;
    actionFailure: any;
    actionSuccess: any;
    beforeSanitizeHtml: any;
    beginEdit: any;
    cancelClick: any;
    change: any;
    created: any;
    destroyed: any;
    endEdit: any;
    submitClick: any;
    validating: any;
    valueChange: any;
    /**
     * Specifies the HTML element ID as a string that can be added as a editable field.
     *
     * {% codeBlock src='inplace-editor/template/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     * @blazortype string
     */
    template: any;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<InPlaceEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InPlaceEditorComponent, "ejs-inplaceeditor", never, { "actionOnBlur": "actionOnBlur"; "adaptor": "adaptor"; "cancelButton": "cancelButton"; "cssClass": "cssClass"; "disabled": "disabled"; "editableOn": "editableOn"; "emptyText": "emptyText"; "enableEditMode": "enableEditMode"; "enableHtmlParse": "enableHtmlParse"; "enableHtmlSanitizer": "enableHtmlSanitizer"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "locale": "locale"; "mode": "mode"; "model": "model"; "name": "name"; "popupSettings": "popupSettings"; "primaryKey": "primaryKey"; "saveButton": "saveButton"; "showButtons": "showButtons"; "submitOnEnter": "submitOnEnter"; "template": "template"; "textOption": "textOption"; "type": "type"; "url": "url"; "validationRules": "validationRules"; "value": "value"; }, { "focus": "focus"; "blur": "blur"; "actionBegin": "actionBegin"; "actionFailure": "actionFailure"; "actionSuccess": "actionSuccess"; "beforeSanitizeHtml": "beforeSanitizeHtml"; "beginEdit": "beginEdit"; "cancelClick": "cancelClick"; "change": "change"; "created": "created"; "destroyed": "destroyed"; "endEdit": "endEdit"; "submitClick": "submitClick"; "validating": "validating"; "valueChange": "valueChange"; }, ["template"], never>;
}
