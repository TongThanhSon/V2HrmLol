import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { forwardRef, Component, ChangeDetectionStrategy, ContentChild, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { setValue, FormBase, ComponentBase, Template, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { InPlaceEditor, AutoComplete, ColorPicker, ComboBox, DateRangePicker, MultiSelect, Rte, Slider, TimePicker } from '@syncfusion/ej2-inplace-editor';
export * from '@syncfusion/ej2-inplace-editor';
import { CommonModule } from '@angular/common';

var InPlaceEditorComponent_1;
const inputs = ['actionOnBlur', 'adaptor', 'cancelButton', 'cssClass', 'disabled', 'editableOn', 'emptyText', 'enableEditMode', 'enableHtmlParse', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'locale', 'mode', 'model', 'name', 'popupSettings', 'primaryKey', 'saveButton', 'showButtons', 'submitOnEnter', 'template', 'textOption', 'type', 'url', 'validationRules', 'value'];
const outputs = ['focus', 'blur', 'actionBegin', 'actionFailure', 'actionSuccess', 'beforeSanitizeHtml', 'beginEdit', 'cancelClick', 'change', 'created', 'destroyed', 'endEdit', 'submitClick', 'validating', 'valueChange'];
const twoWays = ['value'];
/**
 * `ejs-inplaceeditor` represents the Angular InPlaceEditor Component.
 * ```html
 * <ejs-inplaceeditor></ejs-inplaceeditor>
 * ```
 */
let InPlaceEditorComponent = InPlaceEditorComponent_1 = class InPlaceEditorComponent extends InPlaceEditor {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('InPlace-EditorAutoComplete');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('InPlace-EditorColorPicker');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('InPlace-EditorComboBox');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('InPlace-EditorDateRangePicker');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('InPlace-EditorMultiSelect');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('InPlace-EditorRte');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('InPlace-EditorSlider');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('InPlace-EditorTimePicker');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.formContext = new FormBase();
        this.formCompContext = new ComponentBase();
    }
    registerOnChange(registerFunction) {
    }
    registerOnTouched(registerFunction) {
    }
    writeValue(value) {
    }
    setDisabledState(disabled) {
    }
    ngOnInit() {
        this.formCompContext.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.formContext.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.formCompContext.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.formCompContext.ngAfterContentChecked(this);
    }
};
InPlaceEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InPlaceEditorComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
InPlaceEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: InPlaceEditorComponent, selector: "ejs-inplaceeditor", inputs: { actionOnBlur: "actionOnBlur", adaptor: "adaptor", cancelButton: "cancelButton", cssClass: "cssClass", disabled: "disabled", editableOn: "editableOn", emptyText: "emptyText", enableEditMode: "enableEditMode", enableHtmlParse: "enableHtmlParse", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRtl: "enableRtl", locale: "locale", mode: "mode", model: "model", name: "name", popupSettings: "popupSettings", primaryKey: "primaryKey", saveButton: "saveButton", showButtons: "showButtons", submitOnEnter: "submitOnEnter", template: "template", textOption: "textOption", type: "type", url: "url", validationRules: "validationRules", value: "value" }, outputs: { focus: "focus", blur: "blur", actionBegin: "actionBegin", actionFailure: "actionFailure", actionSuccess: "actionSuccess", beforeSanitizeHtml: "beforeSanitizeHtml", beginEdit: "beginEdit", cancelClick: "cancelClick", change: "change", created: "created", destroyed: "destroyed", endEdit: "endEdit", submitClick: "submitClick", validating: "validating", valueChange: "valueChange" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InPlaceEditorComponent_1),
            multi: true
        }
    ], queries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], InPlaceEditorComponent.prototype, "template", void 0);
InPlaceEditorComponent = InPlaceEditorComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase])
], InPlaceEditorComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InPlaceEditorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-inplaceeditor',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => InPlaceEditorComponent),
                            multi: true
                        }
                    ],
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { template: [{
                type: ContentChild,
                args: ['template']
            }] } });

/**
 * NgModule definition for the InPlaceEditor component.
 */
class InPlaceEditorModule {
}
InPlaceEditorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InPlaceEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
InPlaceEditorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InPlaceEditorModule, declarations: [InPlaceEditorComponent], imports: [CommonModule], exports: [InPlaceEditorComponent] });
InPlaceEditorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InPlaceEditorModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InPlaceEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        InPlaceEditorComponent
                    ],
                    exports: [
                        InPlaceEditorComponent
                    ]
                }]
        }] });

const AutoCompleteService = { provide: 'InPlace-EditorAutoComplete', useValue: AutoComplete };
const ColorPickerService = { provide: 'InPlace-EditorColorPicker', useValue: ColorPicker };
const ComboBoxService = { provide: 'InPlace-EditorComboBox', useValue: ComboBox };
const DateRangePickerService = { provide: 'InPlace-EditorDateRangePicker', useValue: DateRangePicker };
const MultiSelectService = { provide: 'InPlace-EditorMultiSelect', useValue: MultiSelect };
const RteService = { provide: 'InPlace-EditorRte', useValue: Rte };
const SliderService = { provide: 'InPlace-EditorSlider', useValue: Slider };
const TimePickerService = { provide: 'InPlace-EditorTimePicker', useValue: TimePicker };
/**
 * NgModule definition for the InPlaceEditor component with providers.
 */
class InPlaceEditorAllModule {
}
InPlaceEditorAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InPlaceEditorAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
InPlaceEditorAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InPlaceEditorAllModule, imports: [CommonModule, InPlaceEditorModule], exports: [InPlaceEditorModule] });
InPlaceEditorAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InPlaceEditorAllModule, providers: [
        AutoCompleteService,
        ColorPickerService,
        ComboBoxService,
        DateRangePickerService,
        MultiSelectService,
        RteService,
        SliderService,
        TimePickerService
    ], imports: [[CommonModule, InPlaceEditorModule], InPlaceEditorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InPlaceEditorAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, InPlaceEditorModule],
                    exports: [
                        InPlaceEditorModule
                    ],
                    providers: [
                        AutoCompleteService,
                        ColorPickerService,
                        ComboBoxService,
                        DateRangePickerService,
                        MultiSelectService,
                        RteService,
                        SliderService,
                        TimePickerService
                    ]
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { AutoCompleteService, ColorPickerService, ComboBoxService, DateRangePickerService, InPlaceEditorAllModule, InPlaceEditorComponent, InPlaceEditorModule, MultiSelectService, RteService, SliderService, TimePickerService };
//# sourceMappingURL=syncfusion-ej2-angular-inplace-editor.mjs.map
