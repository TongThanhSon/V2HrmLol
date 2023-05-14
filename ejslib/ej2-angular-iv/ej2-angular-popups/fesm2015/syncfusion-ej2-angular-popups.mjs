import * as i0 from '@angular/core';
import { Directive, ContentChildren, Component, ChangeDetectionStrategy, ContentChild, NgModule } from '@angular/core';
import { ComplexBase, setValue, ArrayBase, ComponentBase, Template, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { __decorate } from 'tslib';
import { Dialog, Tooltip } from '@syncfusion/ej2-popups';
export * from '@syncfusion/ej2-popups';
import { CommonModule } from '@angular/common';

let input = ['buttonModel', 'isFlat', 'type'];
let outputs$2 = ['click'];
/**
 * 'e-button' directive represent a button of angular dialog
 * It must be contained in a Dialog component(`ej-dialog`).
 * ```html
 * <ejs-dialog id='dialog' showCloseIcon=true>
 *   <e-buttons>
 *    <e-dialogbutton [buttonModal]='okButton'></e-button>
 *    <e-dialogbutton [buttonModal]='cancelButton'></e-button>
 *   </e-buttons>
 * </ejs-dialog>
 * ```
 */
class DialogButtonDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
        this.directivePropList = input;
    }
}
DialogButtonDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DialogButtonDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
DialogButtonDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: DialogButtonDirective, selector: "e-buttons>e-dialogbutton", inputs: { buttonModel: "buttonModel", isFlat: "isFlat", type: "type" }, outputs: { click: "click" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DialogButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-buttons>e-dialogbutton',
                    inputs: input,
                    outputs: outputs$2,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * DialogButton Array Directive
 * @private
 */
class ButtonsDirective extends ArrayBase {
    constructor() {
        super('buttons');
    }
}
ButtonsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ButtonsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ButtonsDirective, selector: "ejs-dialog>e-buttons", queries: [{ propertyName: "children", predicate: DialogButtonDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-dialog>e-buttons',
                    queries: {
                        children: new ContentChildren(DialogButtonDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs$1 = ['allowDragging', 'animationSettings', 'buttons', 'closeOnEscape', 'content', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableResize', 'enableRtl', 'footerTemplate', 'header', 'height', 'isModal', 'locale', 'minHeight', 'position', 'resizeHandles', 'showCloseIcon', 'target', 'visible', 'width', 'zIndex'];
const outputs$1 = ['beforeClose', 'beforeOpen', 'beforeSanitizeHtml', 'close', 'created', 'destroyed', 'drag', 'dragStart', 'dragStop', 'open', 'overlayClick', 'resizeStart', 'resizeStop', 'resizing', 'visibleChange'];
const twoWays$1 = ['visible'];
/**
 * Represents the Angular Dialog Component
 * ```html
 * <ejs-dialog></ejs-dialog>
 * ```
 */
let DialogComponent = class DialogComponent extends Dialog {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['buttons'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$1);
        this.addTwoWay.call(this, twoWays$1);
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
        this.tagObjects[0].instance = this.childButtons;
        this.containerContext.ngAfterContentChecked(this);
    }
};
DialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DialogComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
DialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DialogComponent, selector: "ejs-dialog", inputs: { allowDragging: "allowDragging", animationSettings: "animationSettings", buttons: "buttons", closeOnEscape: "closeOnEscape", content: "content", cssClass: "cssClass", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableResize: "enableResize", enableRtl: "enableRtl", footerTemplate: "footerTemplate", header: "header", height: "height", isModal: "isModal", locale: "locale", minHeight: "minHeight", position: "position", resizeHandles: "resizeHandles", showCloseIcon: "showCloseIcon", target: "target", visible: "visible", width: "width", zIndex: "zIndex" }, outputs: { beforeClose: "beforeClose", beforeOpen: "beforeOpen", beforeSanitizeHtml: "beforeSanitizeHtml", close: "close", created: "created", destroyed: "destroyed", drag: "drag", dragStart: "dragStart", dragStop: "dragStop", open: "open", overlayClick: "overlayClick", resizeStart: "resizeStart", resizeStop: "resizeStop", resizing: "resizing", visibleChange: "visibleChange" }, queries: [{ propertyName: "footerTemplate", first: true, predicate: ["footerTemplate"], descendants: true }, { propertyName: "header", first: true, predicate: ["header"], descendants: true }, { propertyName: "content", first: true, predicate: ["content"], descendants: true }, { propertyName: "childButtons", first: true, predicate: ButtonsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: `<ng-content ></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], DialogComponent.prototype, "footerTemplate", void 0);
__decorate([
    Template()
], DialogComponent.prototype, "header", void 0);
__decorate([
    Template()
], DialogComponent.prototype, "content", void 0);
DialogComponent = __decorate([
    ComponentMixins([ComponentBase])
], DialogComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DialogComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-dialog',
                    inputs: inputs$1,
                    outputs: outputs$1,
                    template: `<ng-content ></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childButtons: new ContentChild(ButtonsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { footerTemplate: [{
                type: ContentChild,
                args: ['footerTemplate']
            }], header: [{
                type: ContentChild,
                args: ['header']
            }], content: [{
                type: ContentChild,
                args: ['content']
            }] } });

/**
 * NgModule definition for the Dialog component.
 */
class DialogModule {
}
DialogModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DialogModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DialogModule, declarations: [DialogComponent,
        DialogButtonDirective,
        ButtonsDirective], imports: [CommonModule], exports: [DialogComponent,
        DialogButtonDirective,
        ButtonsDirective] });
DialogModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DialogModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DialogModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        DialogComponent,
                        DialogButtonDirective,
                        ButtonsDirective
                    ],
                    exports: [
                        DialogComponent,
                        DialogButtonDirective,
                        ButtonsDirective
                    ]
                }]
        }] });

/**
 * NgModule definition for the Dialog component with providers.
 */
class DialogAllModule {
}
DialogAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DialogAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DialogAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DialogAllModule, imports: [CommonModule, DialogModule], exports: [DialogModule] });
DialogAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DialogAllModule, providers: [], imports: [[CommonModule, DialogModule], DialogModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DialogAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DialogModule],
                    exports: [
                        DialogModule
                    ],
                    providers: []
                }]
        }] });

const inputs = ['animation', 'closeDelay', 'container', 'content', 'cssClass', 'enableHtmlParse', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'isSticky', 'locale', 'mouseTrail', 'offsetX', 'offsetY', 'openDelay', 'opensOn', 'position', 'showTipPointer', 'target', 'tipPointerPosition', 'width', 'windowCollision'];
const outputs = ['afterClose', 'afterOpen', 'beforeClose', 'beforeCollision', 'beforeOpen', 'beforeRender', 'created', 'destroyed'];
const twoWays = [''];
/**
 * Represents the Angular Tooltip component that displays a piece of information about the target element on mouse hover.
 * ```html
 * <ejs-tooltip content='Tooltip content'>Show Tooltip</ejs-tooltip>
 * ```
 */
let TooltipComponent = class TooltipComponent extends Tooltip {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
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
TooltipComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TooltipComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
TooltipComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TooltipComponent, selector: "ejs-tooltip", inputs: { animation: "animation", closeDelay: "closeDelay", container: "container", content: "content", cssClass: "cssClass", enableHtmlParse: "enableHtmlParse", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRtl: "enableRtl", height: "height", isSticky: "isSticky", locale: "locale", mouseTrail: "mouseTrail", offsetX: "offsetX", offsetY: "offsetY", openDelay: "openDelay", opensOn: "opensOn", position: "position", showTipPointer: "showTipPointer", target: "target", tipPointerPosition: "tipPointerPosition", width: "width", windowCollision: "windowCollision" }, outputs: { afterClose: "afterClose", afterOpen: "afterOpen", beforeClose: "beforeClose", beforeCollision: "beforeCollision", beforeOpen: "beforeOpen", beforeRender: "beforeRender", created: "created", destroyed: "destroyed" }, queries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, ngImport: i0, template: `<ng-content ></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], TooltipComponent.prototype, "content", void 0);
TooltipComponent = __decorate([
    ComponentMixins([ComponentBase])
], TooltipComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TooltipComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-tooltip',
                    inputs: inputs,
                    outputs: outputs,
                    template: `<ng-content ></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { content: [{
                type: ContentChild,
                args: ['content']
            }] } });

/**
 * NgModule definition for the Tooltip component.
 */
class TooltipModule {
}
TooltipModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TooltipModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TooltipModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TooltipModule, declarations: [TooltipComponent], imports: [CommonModule], exports: [TooltipComponent] });
TooltipModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TooltipModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TooltipModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        TooltipComponent
                    ],
                    exports: [
                        TooltipComponent
                    ]
                }]
        }] });

/**
 * NgModule definition for the Tooltip component with providers.
 */
class TooltipAllModule {
}
TooltipAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TooltipAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TooltipAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TooltipAllModule, imports: [CommonModule, TooltipModule], exports: [TooltipModule] });
TooltipAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TooltipAllModule, providers: [], imports: [[CommonModule, TooltipModule], TooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TooltipAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, TooltipModule],
                    exports: [
                        TooltipModule
                    ],
                    providers: []
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonsDirective, DialogAllModule, DialogButtonDirective, DialogComponent, DialogModule, TooltipAllModule, TooltipComponent, TooltipModule };
//# sourceMappingURL=syncfusion-ej2-angular-popups.mjs.map
