import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule, forwardRef, Directive, ContentChildren, ContentChild } from '@angular/core';
import { setValue, ComponentBase, ComponentMixins, FormBase, ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import { Button, CheckBox, RadioButton, Switch, ChipList } from '@syncfusion/ej2-buttons';
export * from '@syncfusion/ej2-buttons';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

const inputs$4 = ['content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'locale'];
const outputs$5 = ['created'];
const twoWays$4 = [];
/**
 * Represents the Angular Button Component.
 * ```html
 * <button ejs-button>Button</button>
 * ```
 */
let ButtonComponent = class ButtonComponent extends Button {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$5);
        this.addTwoWay.call(this, twoWays$4);
        setValue('currentInstance', this, this.viewContainerRef);
        this.containerContext = new ComponentBase();
    }
    ngOnInit() {
        this.containerContext.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.containerContext.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.containerContext.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.containerContext.ngAfterContentChecked(this);
    }
};
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ButtonComponent, selector: "[ejs-button]", inputs: { content: "content", cssClass: "cssClass", disabled: "disabled", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRtl: "enableRtl", iconCss: "iconCss", iconPosition: "iconPosition", isPrimary: "isPrimary", isToggle: "isToggle", locale: "locale" }, outputs: { created: "created" }, usesInheritance: true, ngImport: i0, template: `<ng-content ></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
ButtonComponent = __decorate([
    ComponentMixins([ComponentBase])
], ButtonComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[ejs-button]',
                    inputs: inputs$4,
                    outputs: outputs$5,
                    template: `<ng-content ></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the Button component.
 */
class ButtonModule {
}
ButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonModule, declarations: [ButtonComponent], imports: [CommonModule], exports: [ButtonComponent] });
ButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        ButtonComponent
                    ],
                    exports: [
                        ButtonComponent
                    ]
                }]
        }] });

/**
 * NgModule definition for the Button component with providers.
 */
class ButtonAllModule {
}
ButtonAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonAllModule, imports: [CommonModule, ButtonModule], exports: [ButtonModule] });
ButtonAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonAllModule, providers: [], imports: [[CommonModule, ButtonModule], ButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ButtonModule],
                    exports: [
                        ButtonModule
                    ],
                    providers: []
                }]
        }] });

var CheckBoxComponent_1;
const inputs$3 = ['checked', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'htmlAttributes', 'indeterminate', 'label', 'labelPosition', 'locale', 'name', 'value'];
const outputs$4 = ['focus', 'blur', 'change', 'created', 'checkedChange', 'indeterminateChange'];
const twoWays$3 = ['checked', 'indeterminate'];
/**
 * Represents the Angular CheckBox Component.
 * ```html
 * <ejs-checkbox label='Default'></ejs-checkbox>
 * ```
 */
let CheckBoxComponent = CheckBoxComponent_1 = class CheckBoxComponent extends CheckBox {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$4);
        this.addTwoWay.call(this, twoWays$3);
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
CheckBoxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CheckBoxComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
CheckBoxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: CheckBoxComponent, selector: "ejs-checkbox", inputs: { checked: "checked", cssClass: "cssClass", disabled: "disabled", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRtl: "enableRtl", htmlAttributes: "htmlAttributes", indeterminate: "indeterminate", label: "label", labelPosition: "labelPosition", locale: "locale", name: "name", value: "value" }, outputs: { focus: "focus", blur: "blur", change: "change", created: "created", checkedChange: "checkedChange", indeterminateChange: "indeterminateChange" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheckBoxComponent_1),
            multi: true
        }
    ], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
CheckBoxComponent = CheckBoxComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase])
], CheckBoxComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CheckBoxComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-checkbox',
                    inputs: inputs$3,
                    outputs: outputs$4,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => CheckBoxComponent),
                            multi: true
                        }
                    ],
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the CheckBox component.
 */
class CheckBoxModule {
}
CheckBoxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CheckBoxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CheckBoxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CheckBoxModule, declarations: [CheckBoxComponent], imports: [CommonModule], exports: [CheckBoxComponent] });
CheckBoxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CheckBoxModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CheckBoxModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        CheckBoxComponent
                    ],
                    exports: [
                        CheckBoxComponent
                    ]
                }]
        }] });

/**
 * NgModule definition for the CheckBox component with providers.
 */
class CheckBoxAllModule {
}
CheckBoxAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CheckBoxAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CheckBoxAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CheckBoxAllModule, imports: [CommonModule, CheckBoxModule], exports: [CheckBoxModule] });
CheckBoxAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CheckBoxAllModule, providers: [], imports: [[CommonModule, CheckBoxModule], CheckBoxModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CheckBoxAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, CheckBoxModule],
                    exports: [
                        CheckBoxModule
                    ],
                    providers: []
                }]
        }] });

var RadioButtonComponent_1;
const inputs$2 = ['checked', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'htmlAttributes', 'label', 'labelPosition', 'locale', 'name', 'value'];
const outputs$3 = ['focus', 'blur', 'change', 'created', 'valueChange'];
const twoWays$2 = ['value'];
/**
 * Represents the Angular RadioButton Component.
 * ```html
 * <ejs-radiobutton label='Default'></ejs-radiobutton>
 * ```
 */
let RadioButtonComponent = RadioButtonComponent_1 = class RadioButtonComponent extends RadioButton {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$3);
        this.addTwoWay.call(this, twoWays$2);
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
RadioButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RadioButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
RadioButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: RadioButtonComponent, selector: "ejs-radiobutton", inputs: { checked: "checked", cssClass: "cssClass", disabled: "disabled", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRtl: "enableRtl", htmlAttributes: "htmlAttributes", label: "label", labelPosition: "labelPosition", locale: "locale", name: "name", value: "value" }, outputs: { focus: "focus", blur: "blur", change: "change", created: "created", valueChange: "valueChange" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadioButtonComponent_1),
            multi: true
        }
    ], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
RadioButtonComponent = RadioButtonComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase])
], RadioButtonComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RadioButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-radiobutton',
                    inputs: inputs$2,
                    outputs: outputs$3,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RadioButtonComponent),
                            multi: true
                        }
                    ],
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the RadioButton component.
 */
class RadioButtonModule {
}
RadioButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RadioButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RadioButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RadioButtonModule, declarations: [RadioButtonComponent], imports: [CommonModule], exports: [RadioButtonComponent] });
RadioButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RadioButtonModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RadioButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        RadioButtonComponent
                    ],
                    exports: [
                        RadioButtonComponent
                    ]
                }]
        }] });

/**
 * NgModule definition for the RadioButton component with providers.
 */
class RadioButtonAllModule {
}
RadioButtonAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RadioButtonAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RadioButtonAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RadioButtonAllModule, imports: [CommonModule, RadioButtonModule], exports: [RadioButtonModule] });
RadioButtonAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RadioButtonAllModule, providers: [], imports: [[CommonModule, RadioButtonModule], RadioButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RadioButtonAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RadioButtonModule],
                    exports: [
                        RadioButtonModule
                    ],
                    providers: []
                }]
        }] });

var SwitchComponent_1;
const inputs$1 = ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'locale', 'name', 'offLabel', 'onLabel', 'value'];
const outputs$2 = ['focus', 'blur', 'change', 'created', 'checkedChange'];
const twoWays$1 = ['checked'];
/**
 * Represents the Angular Switch Component.
 * ```html
 * <ejs-switch></ejs-switch>
 * ```
 */
let SwitchComponent = SwitchComponent_1 = class SwitchComponent extends Switch {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$2);
        this.addTwoWay.call(this, twoWays$1);
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
SwitchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SwitchComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
SwitchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: SwitchComponent, selector: "ejs-switch", inputs: { checked: "checked", cssClass: "cssClass", disabled: "disabled", enablePersistence: "enablePersistence", enableRtl: "enableRtl", locale: "locale", name: "name", offLabel: "offLabel", onLabel: "onLabel", value: "value" }, outputs: { focus: "focus", blur: "blur", change: "change", created: "created", checkedChange: "checkedChange" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SwitchComponent_1),
            multi: true
        }
    ], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
SwitchComponent = SwitchComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase])
], SwitchComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SwitchComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-switch',
                    inputs: inputs$1,
                    outputs: outputs$2,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SwitchComponent),
                            multi: true
                        }
                    ],
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the Switch component.
 */
class SwitchModule {
}
SwitchModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SwitchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SwitchModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SwitchModule, declarations: [SwitchComponent], imports: [CommonModule], exports: [SwitchComponent] });
SwitchModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SwitchModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SwitchModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        SwitchComponent
                    ],
                    exports: [
                        SwitchComponent
                    ]
                }]
        }] });

/**
 * NgModule definition for the Switch component with providers.
 */
class SwitchAllModule {
}
SwitchAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SwitchAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SwitchAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SwitchAllModule, imports: [CommonModule, SwitchModule], exports: [SwitchModule] });
SwitchAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SwitchAllModule, providers: [], imports: [[CommonModule, SwitchModule], SwitchModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SwitchAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SwitchModule],
                    exports: [
                        SwitchModule
                    ],
                    providers: []
                }]
        }] });

let input = ['avatarIconCss', 'avatarText', 'cssClass', 'enabled', 'leadingIconCss', 'leadingIconUrl', 'text', 'trailingIconCss', 'trailingIconUrl', 'value'];
let outputs$1 = [];
/**
 * `e-chip` directive represent a chip of the Angular ChipList.
 * ```html
 * <ejs-chiplist >
 *   <e-chips>
 *    <e-chip text='chip1'></e-chip>
 *    <e-chip text='chip2'></e-chip>
 *   </e-chips>
 * </ejs-chiplist>
 * ```
 */
class ChipDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$1);
        this.directivePropList = input;
    }
}
ChipDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ChipDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ChipDirective, selector: "e-chips>e-chip", inputs: { avatarIconCss: "avatarIconCss", avatarText: "avatarText", cssClass: "cssClass", enabled: "enabled", leadingIconCss: "leadingIconCss", leadingIconUrl: "leadingIconUrl", text: "text", trailingIconCss: "trailingIconCss", trailingIconUrl: "trailingIconUrl", value: "value" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-chips>e-chip',
                    inputs: input,
                    outputs: outputs$1,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Chip Array Directive
 * @private
 */
class ChipsDirective extends ArrayBase {
    constructor() {
        super('chips');
    }
}
ChipsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ChipsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ChipsDirective, selector: "ejs-chiplist>e-chips", queries: [{ propertyName: "children", predicate: ChipDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-chiplist>e-chips',
                    queries: {
                        children: new ContentChildren(ChipDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs = ['avatarIconCss', 'avatarText', 'chips', 'cssClass', 'enableDelete', 'enablePersistence', 'enableRtl', 'enabled', 'leadingIconCss', 'leadingIconUrl', 'locale', 'selectedChips', 'selection', 'text', 'trailingIconCss', 'trailingIconUrl'];
const outputs = ['beforeClick', 'click', 'created', 'delete', 'deleted'];
const twoWays = [''];
/**
 * Represents the Essential JS 2 Angular ChipList Component.
 * ```html
 * <ejs-chiplist></ejs-chiplist>
 * ```
 */
let ChipListComponent = class ChipListComponent extends ChipList {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['chips'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childChips;
        this.context.ngAfterContentChecked(this);
    }
};
ChipListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipListComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
ChipListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ChipListComponent, selector: "ejs-chiplist", inputs: { avatarIconCss: "avatarIconCss", avatarText: "avatarText", chips: "chips", cssClass: "cssClass", enableDelete: "enableDelete", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enabled: "enabled", leadingIconCss: "leadingIconCss", leadingIconUrl: "leadingIconUrl", locale: "locale", selectedChips: "selectedChips", selection: "selection", text: "text", trailingIconCss: "trailingIconCss", trailingIconUrl: "trailingIconUrl" }, outputs: { beforeClick: "beforeClick", click: "click", created: "created", delete: "delete", deleted: "deleted" }, queries: [{ propertyName: "childChips", first: true, predicate: ChipsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
ChipListComponent = __decorate([
    ComponentMixins([ComponentBase])
], ChipListComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-chiplist',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childChips: new ContentChild(ChipsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the ChipList component.
 */
class ChipListModule {
}
ChipListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChipListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipListModule, declarations: [ChipListComponent,
        ChipDirective,
        ChipsDirective], imports: [CommonModule], exports: [ChipListComponent,
        ChipDirective,
        ChipsDirective] });
ChipListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipListModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipListModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        ChipListComponent,
                        ChipDirective,
                        ChipsDirective
                    ],
                    exports: [
                        ChipListComponent,
                        ChipDirective,
                        ChipsDirective
                    ]
                }]
        }] });

/**
 * NgModule definition for the ChipList component with providers.
 */
class ChipListAllModule {
}
ChipListAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipListAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChipListAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipListAllModule, imports: [CommonModule, ChipListModule], exports: [ChipListModule] });
ChipListAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipListAllModule, providers: [], imports: [[CommonModule, ChipListModule], ChipListModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChipListAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ChipListModule],
                    exports: [
                        ChipListModule
                    ],
                    providers: []
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonAllModule, ButtonComponent, ButtonModule, CheckBoxAllModule, CheckBoxComponent, CheckBoxModule, ChipDirective, ChipListAllModule, ChipListComponent, ChipListModule, ChipsDirective, RadioButtonAllModule, RadioButtonComponent, RadioButtonModule, SwitchAllModule, SwitchComponent, SwitchModule };
//# sourceMappingURL=syncfusion-ej2-angular-buttons.mjs.map
