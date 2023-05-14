import * as i0 from '@angular/core';
import { Directive, ContentChildren, Component, ChangeDetectionStrategy, ContentChild, NgModule } from '@angular/core';
import { ComplexBase, setValue, ArrayBase, ComponentBase, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { __decorate } from 'tslib';
import { DropDownButton, SplitButton, ProgressButton } from '@syncfusion/ej2-splitbuttons';
export * from '@syncfusion/ej2-splitbuttons';
import { CommonModule } from '@angular/common';

let input$1 = ['disabled', 'iconCss', 'id', 'separator', 'text', 'url'];
let outputs$4 = [];
class DropDownButtonItemDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$4);
        this.directivePropList = input$1;
    }
}
DropDownButtonItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonItemDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
DropDownButtonItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: DropDownButtonItemDirective, selector: "e-dropdownbuttonitems>e-dropdownbuttonitem", inputs: { disabled: "disabled", iconCss: "iconCss", id: "id", separator: "separator", text: "text", url: "url" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-dropdownbuttonitems>e-dropdownbuttonitem',
                    inputs: input$1,
                    outputs: outputs$4,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * DropDownButtonItem Array Directive
 * @private
 */
class DropDownButtonItemsDirective extends ArrayBase {
    constructor() {
        super('items');
    }
}
DropDownButtonItemsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonItemsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DropDownButtonItemsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: DropDownButtonItemsDirective, selector: "ejs-dropdownbutton>e-dropdownbuttonitems", queries: [{ propertyName: "children", predicate: DropDownButtonItemDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonItemsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-dropdownbutton>e-dropdownbuttonitems',
                    queries: {
                        children: new ContentChildren(DropDownButtonItemDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs$2 = ['content', 'createPopupOnClick', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target'];
const outputs$3 = ['beforeClose', 'beforeItemRender', 'beforeOpen', 'close', 'created', 'open', 'select'];
const twoWays$2 = [];
/**
 * Represents the Angular DropDownButton Component.
 * ```html
 * <button ejs-dropdownbutton>DropDownButton</button>
 * ```
 */
let DropDownButtonComponent = class DropDownButtonComponent extends DropDownButton {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['items'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$3);
        this.addTwoWay.call(this, twoWays$2);
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
        this.tagObjects[0].instance = this.childItems;
        this.containerContext.ngAfterContentChecked(this);
    }
};
DropDownButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
DropDownButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DropDownButtonComponent, selector: "[ejs-dropdownbutton]", inputs: { content: "content", createPopupOnClick: "createPopupOnClick", cssClass: "cssClass", disabled: "disabled", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRtl: "enableRtl", iconCss: "iconCss", iconPosition: "iconPosition", items: "items", locale: "locale", target: "target" }, outputs: { beforeClose: "beforeClose", beforeItemRender: "beforeItemRender", beforeOpen: "beforeOpen", close: "close", created: "created", open: "open", select: "select" }, queries: [{ propertyName: "childItems", first: true, predicate: DropDownButtonItemsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: `<ng-content ></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
DropDownButtonComponent = __decorate([
    ComponentMixins([ComponentBase])
], DropDownButtonComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[ejs-dropdownbutton]',
                    inputs: inputs$2,
                    outputs: outputs$3,
                    template: `<ng-content ></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childItems: new ContentChild(DropDownButtonItemsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the DropDownButton component.
 */
class DropDownButtonModule {
}
DropDownButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DropDownButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonModule, declarations: [DropDownButtonComponent,
        DropDownButtonItemDirective,
        DropDownButtonItemsDirective], imports: [CommonModule], exports: [DropDownButtonComponent,
        DropDownButtonItemDirective,
        DropDownButtonItemsDirective] });
DropDownButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        DropDownButtonComponent,
                        DropDownButtonItemDirective,
                        DropDownButtonItemsDirective
                    ],
                    exports: [
                        DropDownButtonComponent,
                        DropDownButtonItemDirective,
                        DropDownButtonItemsDirective
                    ]
                }]
        }] });

/**
 * NgModule definition for the DropDownButton component with providers.
 */
class DropDownButtonAllModule {
}
DropDownButtonAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DropDownButtonAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonAllModule, imports: [CommonModule, DropDownButtonModule], exports: [DropDownButtonModule] });
DropDownButtonAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonAllModule, providers: [], imports: [[CommonModule, DropDownButtonModule], DropDownButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DropDownButtonModule],
                    exports: [
                        DropDownButtonModule
                    ],
                    providers: []
                }]
        }] });

let input = ['disabled', 'iconCss', 'id', 'separator', 'text', 'url'];
let outputs$2 = [];
class SplitButtonItemDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
        this.directivePropList = input;
    }
}
SplitButtonItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonItemDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
SplitButtonItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: SplitButtonItemDirective, selector: "e-splitbuttonitems>e-splitbuttonitem", inputs: { disabled: "disabled", iconCss: "iconCss", id: "id", separator: "separator", text: "text", url: "url" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-splitbuttonitems>e-splitbuttonitem',
                    inputs: input,
                    outputs: outputs$2,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * SplitButtonItem Array Directive
 * @private
 */
class SplitButtonItemsDirective extends ArrayBase {
    constructor() {
        super('items');
    }
}
SplitButtonItemsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonItemsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
SplitButtonItemsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: SplitButtonItemsDirective, selector: "ejs-splitbutton>e-splitbuttonitems", queries: [{ propertyName: "children", predicate: SplitButtonItemDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonItemsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-splitbutton>e-splitbuttonitems',
                    queries: {
                        children: new ContentChildren(SplitButtonItemDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs$1 = ['content', 'createPopupOnClick', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target'];
const outputs$1 = ['beforeClose', 'beforeItemRender', 'beforeOpen', 'click', 'close', 'created', 'open', 'select'];
const twoWays$1 = [];
/**
 * Represents the Angular SplitButton Component.
 * ```html
 * <ejs-splitbutton content='Split Button'></ejs-splitbutton>
 * ```
 */
let SplitButtonComponent = class SplitButtonComponent extends SplitButton {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['items'];
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
        this.tagObjects[0].instance = this.childItems;
        this.containerContext.ngAfterContentChecked(this);
    }
};
SplitButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
SplitButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: SplitButtonComponent, selector: "ejs-splitbutton", inputs: { content: "content", createPopupOnClick: "createPopupOnClick", cssClass: "cssClass", disabled: "disabled", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRtl: "enableRtl", iconCss: "iconCss", iconPosition: "iconPosition", items: "items", locale: "locale", target: "target" }, outputs: { beforeClose: "beforeClose", beforeItemRender: "beforeItemRender", beforeOpen: "beforeOpen", click: "click", close: "close", created: "created", open: "open", select: "select" }, queries: [{ propertyName: "childItems", first: true, predicate: SplitButtonItemsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: `<ng-content ></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
SplitButtonComponent = __decorate([
    ComponentMixins([ComponentBase])
], SplitButtonComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-splitbutton',
                    inputs: inputs$1,
                    outputs: outputs$1,
                    template: `<ng-content ></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childItems: new ContentChild(SplitButtonItemsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the SplitButton component.
 */
class SplitButtonModule {
}
SplitButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SplitButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonModule, declarations: [SplitButtonComponent,
        SplitButtonItemDirective,
        SplitButtonItemsDirective], imports: [CommonModule], exports: [SplitButtonComponent,
        SplitButtonItemDirective,
        SplitButtonItemsDirective] });
SplitButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        SplitButtonComponent,
                        SplitButtonItemDirective,
                        SplitButtonItemsDirective
                    ],
                    exports: [
                        SplitButtonComponent,
                        SplitButtonItemDirective,
                        SplitButtonItemsDirective
                    ]
                }]
        }] });

/**
 * NgModule definition for the SplitButton component with providers.
 */
class SplitButtonAllModule {
}
SplitButtonAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SplitButtonAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonAllModule, imports: [CommonModule, SplitButtonModule], exports: [SplitButtonModule] });
SplitButtonAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonAllModule, providers: [], imports: [[CommonModule, SplitButtonModule], SplitButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SplitButtonModule],
                    exports: [
                        SplitButtonModule
                    ],
                    providers: []
                }]
        }] });

const inputs = ['animationSettings', 'content', 'cssClass', 'disabled', 'duration', 'enableHtmlSanitizer', 'enableProgress', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'spinSettings'];
const outputs = ['begin', 'created', 'end', 'fail', 'progress'];
const twoWays = [];
/**
 * Represents the Angular ProgressButton Component.
 * ```html
 * <button ejs-progressbutton content='Progress Button'></button>
 * ```
 */
let ProgressButtonComponent = class ProgressButtonComponent extends ProgressButton {
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
ProgressButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
ProgressButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ProgressButtonComponent, selector: "[ejs-progressbutton]", inputs: { animationSettings: "animationSettings", content: "content", cssClass: "cssClass", disabled: "disabled", duration: "duration", enableHtmlSanitizer: "enableHtmlSanitizer", enableProgress: "enableProgress", iconCss: "iconCss", iconPosition: "iconPosition", isPrimary: "isPrimary", isToggle: "isToggle", spinSettings: "spinSettings" }, outputs: { begin: "begin", created: "created", end: "end", fail: "fail", progress: "progress" }, usesInheritance: true, ngImport: i0, template: `<ng-content ></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
ProgressButtonComponent = __decorate([
    ComponentMixins([ComponentBase])
], ProgressButtonComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[ejs-progressbutton]',
                    inputs: inputs,
                    outputs: outputs,
                    template: `<ng-content ></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the ProgressButton component.
 */
class ProgressButtonModule {
}
ProgressButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProgressButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressButtonModule, declarations: [ProgressButtonComponent], imports: [CommonModule], exports: [ProgressButtonComponent] });
ProgressButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressButtonModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        ProgressButtonComponent
                    ],
                    exports: [
                        ProgressButtonComponent
                    ]
                }]
        }] });

/**
 * NgModule definition for the ProgressButton component with providers.
 */
class ProgressButtonAllModule {
}
ProgressButtonAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressButtonAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProgressButtonAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressButtonAllModule, imports: [CommonModule, ProgressButtonModule], exports: [ProgressButtonModule] });
ProgressButtonAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressButtonAllModule, providers: [], imports: [[CommonModule, ProgressButtonModule], ProgressButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressButtonAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ProgressButtonModule],
                    exports: [
                        ProgressButtonModule
                    ],
                    providers: []
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { DropDownButtonAllModule, DropDownButtonComponent, DropDownButtonItemDirective, DropDownButtonItemsDirective, DropDownButtonModule, ProgressButtonAllModule, ProgressButtonComponent, ProgressButtonModule, SplitButtonAllModule, SplitButtonComponent, SplitButtonItemDirective, SplitButtonItemsDirective, SplitButtonModule };
//# sourceMappingURL=syncfusion-ej2-angular-splitbuttons.mjs.map
