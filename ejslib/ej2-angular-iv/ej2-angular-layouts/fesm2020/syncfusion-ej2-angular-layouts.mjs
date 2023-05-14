import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Directive, ContentChild, ContentChildren, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { ComplexBase, setValue, Template, ArrayBase, ComponentBase, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { Splitter, DashboardLayout } from '@syncfusion/ej2-layouts';
export * from '@syncfusion/ej2-layouts';
import { CommonModule } from '@angular/common';

let input$1 = ['collapsed', 'collapsible', 'content', 'cssClass', 'max', 'min', 'resizable', 'size'];
let outputs$3 = [];
/**
 * 'e-panesettings' directive represent a panes of angular splitter
 * It must be contained in a Splitter component(`ejs-splitter`).
 * ```html
 * <ejs-splitter id='splitter' >
 *   <e-panes>
 *    <e-pane size ='150px'></e-pane>
 *    <e-pane size = '20%'></e-pane>
 *   </e-panes>
 * </ejs-splitter>
 * ```
 */
class PaneDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$3);
        this.directivePropList = input$1;
    }
}
PaneDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PaneDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PaneDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PaneDirective, selector: "e-panes>e-pane", inputs: { collapsed: "collapsed", collapsible: "collapsible", content: "content", cssClass: "cssClass", max: "max", min: "min", resizable: "resizable", size: "size" }, queries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], PaneDirective.prototype, "content", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PaneDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-panes>e-pane',
                    inputs: input$1,
                    outputs: outputs$3,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { content: [{
                type: ContentChild,
                args: ['content']
            }] } });
/**
 * Pane Array Directive
 * @private
 */
class PanesDirective extends ArrayBase {
    constructor() {
        super('panesettings');
    }
}
PanesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PanesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PanesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PanesDirective, selector: "ejs-splitter>e-panes", queries: [{ propertyName: "children", predicate: PaneDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PanesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-splitter>e-panes',
                    queries: {
                        children: new ContentChildren(PaneDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs$1 = ['cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableReversePanes', 'enableRtl', 'enabled', 'height', 'locale', 'orientation', 'paneSettings', 'separatorSize', 'width'];
const outputs$2 = ['beforeCollapse', 'beforeExpand', 'beforeSanitizeHtml', 'collapsed', 'created', 'expanded', 'resizeStart', 'resizeStop', 'resizing'];
const twoWays$1 = [''];
/**
 * Represents the Angular Splitter Component
 * ```html
 * <ejs-splitter></ejs-splitter>
 * ```
 */
let SplitterComponent = class SplitterComponent extends Splitter {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['paneSettings'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$2);
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
        this.tagObjects[0].instance = this.childPaneSettings;
        this.containerContext.ngAfterContentChecked(this);
    }
};
SplitterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
SplitterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: SplitterComponent, selector: "ejs-splitter", inputs: { cssClass: "cssClass", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableReversePanes: "enableReversePanes", enableRtl: "enableRtl", enabled: "enabled", height: "height", locale: "locale", orientation: "orientation", paneSettings: "paneSettings", separatorSize: "separatorSize", width: "width" }, outputs: { beforeCollapse: "beforeCollapse", beforeExpand: "beforeExpand", beforeSanitizeHtml: "beforeSanitizeHtml", collapsed: "collapsed", created: "created", expanded: "expanded", resizeStart: "resizeStart", resizeStop: "resizeStop", resizing: "resizing" }, queries: [{ propertyName: "childPaneSettings", first: true, predicate: PanesDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: `<ng-content select='div'></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
SplitterComponent = __decorate([
    ComponentMixins([ComponentBase])
], SplitterComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-splitter',
                    inputs: inputs$1,
                    outputs: outputs$2,
                    template: `<ng-content select='div'></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childPaneSettings: new ContentChild(PanesDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the Splitter component.
 */
class SplitterModule {
}
SplitterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SplitterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterModule, declarations: [SplitterComponent,
        PaneDirective,
        PanesDirective], imports: [CommonModule], exports: [SplitterComponent,
        PaneDirective,
        PanesDirective] });
SplitterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        SplitterComponent,
                        PaneDirective,
                        PanesDirective
                    ],
                    exports: [
                        SplitterComponent,
                        PaneDirective,
                        PanesDirective
                    ]
                }]
        }] });

/**
 * NgModule definition for the Splitter component with providers.
 */
class SplitterAllModule {
}
SplitterAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SplitterAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterAllModule, imports: [CommonModule, SplitterModule], exports: [SplitterModule] });
SplitterAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterAllModule, providers: [], imports: [[CommonModule, SplitterModule], SplitterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SplitterModule],
                    exports: [
                        SplitterModule
                    ],
                    providers: []
                }]
        }] });

let input = ['col', 'content', 'cssClass', 'enabled', 'header', 'id', 'maxSizeX', 'maxSizeY', 'minSizeX', 'minSizeY', 'row', 'sizeX', 'sizeY', 'zIndex'];
let outputs$1 = [];
/**
 * 'e-panels' directive represent a panels of angular dashboardlayout
 * It must be contained in a dashboardlayout component(`ej-dashboardlayout`).
 * ```html
 * <ejs-dashboardlayout>
 *   <e-panels>
 *    <e-panel></e-panel>
 *    <e-panel></e-panel>
 *   </e-panels>
 * </ejs-dashboardlayout>
 * ```
 */
class PanelDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$1);
        this.directivePropList = input;
    }
}
PanelDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PanelDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PanelDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PanelDirective, selector: "e-panels>e-panel", inputs: { col: "col", content: "content", cssClass: "cssClass", enabled: "enabled", header: "header", id: "id", maxSizeX: "maxSizeX", maxSizeY: "maxSizeY", minSizeX: "minSizeX", minSizeY: "minSizeY", row: "row", sizeX: "sizeX", sizeY: "sizeY", zIndex: "zIndex" }, queries: [{ propertyName: "header", first: true, predicate: ["header"], descendants: true }, { propertyName: "content", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], PanelDirective.prototype, "header", void 0);
__decorate([
    Template()
], PanelDirective.prototype, "content", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PanelDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-panels>e-panel',
                    inputs: input,
                    outputs: outputs$1,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { header: [{
                type: ContentChild,
                args: ['header']
            }], content: [{
                type: ContentChild,
                args: ['content']
            }] } });
/**
 * Panel Array Directive
 * @private
 */
class PanelsDirective extends ArrayBase {
    constructor() {
        super('panels');
    }
}
PanelsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PanelsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PanelsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PanelsDirective, selector: "ejs-dashboardlayout>e-panels", queries: [{ propertyName: "children", predicate: PanelDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PanelsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-dashboardlayout>e-panels',
                    queries: {
                        children: new ContentChildren(PanelDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs = ['allowDragging', 'allowFloating', 'allowPushing', 'allowResizing', 'cellAspectRatio', 'cellSpacing', 'columns', 'draggableHandle', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'locale', 'mediaQuery', 'panels', 'resizableHandles', 'showGridLines'];
const outputs = ['change', 'created', 'destroyed', 'drag', 'dragStart', 'dragStop', 'resize', 'resizeStart', 'resizeStop'];
const twoWays = [''];
/**
 * Represents the Essential JS 2 Angular DashboardLayout Component.
 * ```html
 * <ejs-dashboardlayout></ejs-dashboardlayout>
 * ```
 */
let DashboardLayoutComponent = class DashboardLayoutComponent extends DashboardLayout {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['panels'];
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
        this.tagObjects[0].instance = this.childPanels;
        this.containerContext.ngAfterContentChecked(this);
    }
};
DashboardLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
DashboardLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DashboardLayoutComponent, selector: "ejs-dashboardlayout", inputs: { allowDragging: "allowDragging", allowFloating: "allowFloating", allowPushing: "allowPushing", allowResizing: "allowResizing", cellAspectRatio: "cellAspectRatio", cellSpacing: "cellSpacing", columns: "columns", draggableHandle: "draggableHandle", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRtl: "enableRtl", locale: "locale", mediaQuery: "mediaQuery", panels: "panels", resizableHandles: "resizableHandles", showGridLines: "showGridLines" }, outputs: { change: "change", created: "created", destroyed: "destroyed", drag: "drag", dragStart: "dragStart", dragStop: "dragStop", resize: "resize", resizeStart: "resizeStart", resizeStop: "resizeStop" }, queries: [{ propertyName: "childPanels", first: true, predicate: PanelsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: `<ng-content select='div'></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
DashboardLayoutComponent = __decorate([
    ComponentMixins([ComponentBase])
], DashboardLayoutComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-dashboardlayout',
                    inputs: inputs,
                    outputs: outputs,
                    template: `<ng-content select='div'></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childPanels: new ContentChild(PanelsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the DashboardLayout component.
 */
class DashboardLayoutModule {
}
DashboardLayoutModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DashboardLayoutModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutModule, declarations: [DashboardLayoutComponent,
        PanelDirective,
        PanelsDirective], imports: [CommonModule], exports: [DashboardLayoutComponent,
        PanelDirective,
        PanelsDirective] });
DashboardLayoutModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        DashboardLayoutComponent,
                        PanelDirective,
                        PanelsDirective
                    ],
                    exports: [
                        DashboardLayoutComponent,
                        PanelDirective,
                        PanelsDirective
                    ]
                }]
        }] });

/**
 * NgModule definition for the DashboardLayout component with providers.
 */
class DashboardLayoutAllModule {
}
DashboardLayoutAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DashboardLayoutAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutAllModule, imports: [CommonModule, DashboardLayoutModule], exports: [DashboardLayoutModule] });
DashboardLayoutAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutAllModule, providers: [], imports: [[CommonModule, DashboardLayoutModule], DashboardLayoutModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DashboardLayoutModule],
                    exports: [
                        DashboardLayoutModule
                    ],
                    providers: []
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { DashboardLayoutAllModule, DashboardLayoutComponent, DashboardLayoutModule, PaneDirective, PanelDirective, PanelsDirective, PanesDirective, SplitterAllModule, SplitterComponent, SplitterModule };
//# sourceMappingURL=syncfusion-ej2-angular-layouts.mjs.map
