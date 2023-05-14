import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ContentChild, NgModule } from '@angular/core';
import { setValue, ComponentBase, Template, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { ListView, Virtualization } from '@syncfusion/ej2-lists';
export * from '@syncfusion/ej2-lists';
import { CommonModule } from '@angular/common';

const inputs = ['animation', 'checkBoxPosition', 'cssClass', 'dataSource', 'enable', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'fields', 'groupTemplate', 'headerTemplate', 'headerTitle', 'height', 'htmlAttributes', 'locale', 'query', 'showCheckBox', 'showHeader', 'showIcon', 'sortOrder', 'template', 'width'];
const outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'select'];
const twoWays = [''];
/**
 * Represents Angular ListView Component
 * ```
 * <ejs-listview [dataSource]='data'></ejs-listview>
 * ```
 */
let ListViewComponent = class ListViewComponent extends ListView {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('ListsVirtualization');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
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
        this.context.ngAfterContentChecked(this);
    }
};
ListViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ListViewComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
ListViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ListViewComponent, selector: "ejs-listview", inputs: { animation: "animation", checkBoxPosition: "checkBoxPosition", cssClass: "cssClass", dataSource: "dataSource", enable: "enable", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enableVirtualization: "enableVirtualization", fields: "fields", groupTemplate: "groupTemplate", headerTemplate: "headerTemplate", headerTitle: "headerTitle", height: "height", htmlAttributes: "htmlAttributes", locale: "locale", query: "query", showCheckBox: "showCheckBox", showHeader: "showHeader", showIcon: "showIcon", sortOrder: "sortOrder", template: "template", width: "width" }, outputs: { actionBegin: "actionBegin", actionComplete: "actionComplete", actionFailure: "actionFailure", select: "select" }, queries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true }, { propertyName: "groupTemplate", first: true, predicate: ["groupTemplate"], descendants: true }, { propertyName: "headerTemplate", first: true, predicate: ["headerTemplate"], descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], ListViewComponent.prototype, "template", void 0);
__decorate([
    Template()
], ListViewComponent.prototype, "groupTemplate", void 0);
__decorate([
    Template()
], ListViewComponent.prototype, "headerTemplate", void 0);
ListViewComponent = __decorate([
    ComponentMixins([ComponentBase])
], ListViewComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ListViewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-listview',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { template: [{
                type: ContentChild,
                args: ['template']
            }], groupTemplate: [{
                type: ContentChild,
                args: ['groupTemplate']
            }], headerTemplate: [{
                type: ContentChild,
                args: ['headerTemplate']
            }] } });

/**
 * NgModule definition for the ListView component.
 */
class ListViewModule {
}
ListViewModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ListViewModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListViewModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ListViewModule, declarations: [ListViewComponent], imports: [CommonModule], exports: [ListViewComponent] });
ListViewModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ListViewModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ListViewModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        ListViewComponent
                    ],
                    exports: [
                        ListViewComponent
                    ]
                }]
        }] });

const VirtualizationService = { provide: 'ListsVirtualization', useValue: Virtualization };
/**
 * NgModule definition for the ListView component with providers.
 */
class ListViewAllModule {
}
ListViewAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ListViewAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListViewAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ListViewAllModule, imports: [CommonModule, ListViewModule], exports: [ListViewModule] });
ListViewAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ListViewAllModule, providers: [
        VirtualizationService
    ], imports: [[CommonModule, ListViewModule], ListViewModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ListViewAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ListViewModule],
                    exports: [
                        ListViewModule
                    ],
                    providers: [
                        VirtualizationService
                    ]
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { ListViewAllModule, ListViewComponent, ListViewModule, VirtualizationService };
//# sourceMappingURL=syncfusion-ej2-angular-lists.mjs.map
