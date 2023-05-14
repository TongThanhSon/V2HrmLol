import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Directive, ContentChild, ContentChildren, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { ComplexBase, setValue, Template, ArrayBase, ComponentBase, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { Kanban } from '@syncfusion/ej2-kanban';
export * from '@syncfusion/ej2-kanban';
import { CommonModule } from '@angular/common';

let input$1 = ['allowDrag', 'allowDrop', 'allowToggle', 'headerText', 'isExpanded', 'keyField', 'maxCount', 'minCount', 'showAddButton', 'showItemCount', 'template', 'transitionColumns'];
let outputs$2 = [];
/**
 * `e-columns` directive represent a columns of the Kanban board.
 * It must be contained in a Kanban component(`ejs-kanban`).
 * ```html
 * <ejs-kanban>
 *   <e-columns>
 *    <e-column keyField='Open' textField='To Do'></e-column>
 *    <e-column keyField='Close' textField='Completed'></e-column>
 *   </e-columns>
 * </ejs-kanban>
 * ```
 */
class ColumnDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
        this.directivePropList = input$1;
    }
}
ColumnDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ColumnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColumnDirective, selector: "e-columns>e-column", inputs: { allowDrag: "allowDrag", allowDrop: "allowDrop", allowToggle: "allowToggle", headerText: "headerText", isExpanded: "isExpanded", keyField: "keyField", maxCount: "maxCount", minCount: "minCount", showAddButton: "showAddButton", showItemCount: "showItemCount", template: "template", transitionColumns: "transitionColumns" }, queries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], ColumnDirective.prototype, "template", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-columns>e-column',
                    inputs: input$1,
                    outputs: outputs$2,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { template: [{
                type: ContentChild,
                args: ['template']
            }] } });
/**
 * Column Array Directive
 * @private
 */
class ColumnsDirective extends ArrayBase {
    constructor() {
        super('columns');
    }
}
ColumnsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ColumnsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColumnsDirective, selector: "ejs-kanban>e-columns", queries: [{ propertyName: "children", predicate: ColumnDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-kanban>e-columns',
                    queries: {
                        children: new ContentChildren(ColumnDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input = ['keyFields', 'text'];
let outputs$1 = [];
/**
 * `e-stackedHeaders` directive represent a stacked header of the Kanban board.
 * It must be contained in a Kanban component(`ejs-kanban`).
 * ```html
 * <ejs-kanban>
 *   <e-stackedHeaders>
 *    <e-stackedHeader keyField='Open' text='To Do'></e-stackedHeader>
 *    <e-stackedHeader keyField='Close' text='Completed'></e-stackedHeader>
 *   </e-stackedHeaders>
 * </ejs-kanban>
 * ```
 */
class StackedHeaderDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$1);
        this.directivePropList = input;
    }
}
StackedHeaderDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StackedHeaderDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
StackedHeaderDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StackedHeaderDirective, selector: "e-stackedHeaders>e-stackedHeader", inputs: { keyFields: "keyFields", text: "text" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StackedHeaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-stackedHeaders>e-stackedHeader',
                    inputs: input,
                    outputs: outputs$1,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * StackedHeader Array Directive
 * @private
 */
class StackedHeadersDirective extends ArrayBase {
    constructor() {
        super('stackedheaders');
    }
}
StackedHeadersDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StackedHeadersDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StackedHeadersDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StackedHeadersDirective, selector: "ejs-kanban>e-stackedHeaders", queries: [{ propertyName: "children", predicate: StackedHeaderDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StackedHeadersDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-kanban>e-stackedHeaders',
                    queries: {
                        children: new ContentChildren(StackedHeaderDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs = ['allowDragAndDrop', 'allowKeyboard', 'cardSettings', 'columns', 'constraintType', 'cssClass', 'dataSource', 'dialogSettings', 'enablePersistence', 'enableRtl', 'enableTooltip', 'externalDropId', 'height', 'keyField', 'locale', 'query', 'showEmptyColumn', 'sortSettings', 'stackedHeaders', 'swimlaneSettings', 'tooltipTemplate', 'width'];
const outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'cardClick', 'cardDoubleClick', 'cardRendered', 'created', 'dataBinding', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'dialogClose', 'dialogOpen', 'drag', 'dragStart', 'dragStop', 'queryCellInfo'];
const twoWays = [''];
/**
 * `ej-kanban` represents the Angular Kanban Component.
 * ```html
 * <ejs-kanban></ejs-kanban>
 * ```
 */
let KanbanComponent = class KanbanComponent extends Kanban {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['columns', 'stackedHeaders'];
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
        this.tagObjects[0].instance = this.childColumns;
        if (this.childStackedHeaders) {
            this.tagObjects[1].instance = this.childStackedHeaders;
        }
        this.context.ngAfterContentChecked(this);
    }
};
KanbanComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KanbanComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
KanbanComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: KanbanComponent, selector: "ejs-kanban", inputs: { allowDragAndDrop: "allowDragAndDrop", allowKeyboard: "allowKeyboard", cardSettings: "cardSettings", columns: "columns", constraintType: "constraintType", cssClass: "cssClass", dataSource: "dataSource", dialogSettings: "dialogSettings", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enableTooltip: "enableTooltip", externalDropId: "externalDropId", height: "height", keyField: "keyField", locale: "locale", query: "query", showEmptyColumn: "showEmptyColumn", sortSettings: "sortSettings", stackedHeaders: "stackedHeaders", swimlaneSettings: "swimlaneSettings", tooltipTemplate: "tooltipTemplate", width: "width" }, outputs: { actionBegin: "actionBegin", actionComplete: "actionComplete", actionFailure: "actionFailure", cardClick: "cardClick", cardDoubleClick: "cardDoubleClick", cardRendered: "cardRendered", created: "created", dataBinding: "dataBinding", dataBound: "dataBound", dataSourceChanged: "dataSourceChanged", dataStateChange: "dataStateChange", dialogClose: "dialogClose", dialogOpen: "dialogOpen", drag: "drag", dragStart: "dragStart", dragStop: "dragStop", queryCellInfo: "queryCellInfo" }, queries: [{ propertyName: "tooltipTemplate", first: true, predicate: ["tooltipTemplate"], descendants: true }, { propertyName: "columns_template", first: true, predicate: ["columnsTemplate"], descendants: true }, { propertyName: "swimlaneSettings_template", first: true, predicate: ["swimlaneSettingsTemplate"], descendants: true }, { propertyName: "cardSettings_template", first: true, predicate: ["cardSettingsTemplate"], descendants: true }, { propertyName: "dialogSettings_template", first: true, predicate: ["dialogSettingsTemplate"], descendants: true }, { propertyName: "childColumns", first: true, predicate: ColumnsDirective, descendants: true }, { propertyName: "childStackedHeaders", first: true, predicate: StackedHeadersDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], KanbanComponent.prototype, "tooltipTemplate", void 0);
__decorate([
    Template()
], KanbanComponent.prototype, "columns_template", void 0);
__decorate([
    Template()
], KanbanComponent.prototype, "swimlaneSettings_template", void 0);
__decorate([
    Template()
], KanbanComponent.prototype, "cardSettings_template", void 0);
__decorate([
    Template()
], KanbanComponent.prototype, "dialogSettings_template", void 0);
KanbanComponent = __decorate([
    ComponentMixins([ComponentBase])
], KanbanComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KanbanComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-kanban',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childColumns: new ContentChild(ColumnsDirective),
                        childStackedHeaders: new ContentChild(StackedHeadersDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { tooltipTemplate: [{
                type: ContentChild,
                args: ['tooltipTemplate']
            }], columns_template: [{
                type: ContentChild,
                args: ['columnsTemplate']
            }], swimlaneSettings_template: [{
                type: ContentChild,
                args: ['swimlaneSettingsTemplate']
            }], cardSettings_template: [{
                type: ContentChild,
                args: ['cardSettingsTemplate']
            }], dialogSettings_template: [{
                type: ContentChild,
                args: ['dialogSettingsTemplate']
            }] } });

/**
 * NgModule definition for the Kanban component.
 */
class KanbanModule {
}
KanbanModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KanbanModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
KanbanModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KanbanModule, declarations: [KanbanComponent,
        ColumnDirective,
        ColumnsDirective,
        StackedHeaderDirective,
        StackedHeadersDirective], imports: [CommonModule], exports: [KanbanComponent,
        ColumnDirective,
        ColumnsDirective,
        StackedHeaderDirective,
        StackedHeadersDirective] });
KanbanModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KanbanModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KanbanModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        KanbanComponent,
                        ColumnDirective,
                        ColumnsDirective,
                        StackedHeaderDirective,
                        StackedHeadersDirective
                    ],
                    exports: [
                        KanbanComponent,
                        ColumnDirective,
                        ColumnsDirective,
                        StackedHeaderDirective,
                        StackedHeadersDirective
                    ]
                }]
        }] });

/**
 * NgModule definition for the Kanban component with providers.
 */
class KanbanAllModule {
}
KanbanAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KanbanAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
KanbanAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KanbanAllModule, imports: [CommonModule, KanbanModule], exports: [KanbanModule] });
KanbanAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KanbanAllModule, providers: [], imports: [[CommonModule, KanbanModule], KanbanModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: KanbanAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, KanbanModule],
                    exports: [
                        KanbanModule
                    ],
                    providers: []
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { ColumnDirective, ColumnsDirective, KanbanAllModule, KanbanComponent, KanbanModule, StackedHeaderDirective, StackedHeadersDirective };
//# sourceMappingURL=syncfusion-ej2-angular-kanban.mjs.map
