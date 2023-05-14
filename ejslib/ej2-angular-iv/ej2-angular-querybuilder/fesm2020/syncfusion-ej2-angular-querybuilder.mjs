import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Directive, ContentChild, ContentChildren, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { ComplexBase, setValue, Template, ArrayBase, ComponentBase, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { QueryBuilder } from '@syncfusion/ej2-querybuilder';
export * from '@syncfusion/ej2-querybuilder';
import { CommonModule } from '@angular/common';

let input = ['category', 'columns', 'field', 'format', 'label', 'operators', 'ruleTemplate', 'step', 'template', 'type', 'validation', 'value', 'values'];
let outputs$1 = [];
/**
 * `e-column` directive represent a column of the Angular QueryBuilder.
 * It must be contained in a QueryBuilder component(`ejs-querybuilder`).
 * ```html
 * <ejs-querybuilder [dataSource]='data'>
 *   <e-columns>
 *    <e-column field='ID' label='ID' type='number'></e-column>
 *    <e-column field='Date' label='Date' type='date' format='dd/MM/yyyy'></e-column>
 *   </e-columns>
 * </ejs-querybuilder>
 * ```
 */
class ColumnDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$1);
        this.directivePropList = input;
    }
}
ColumnDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ColumnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColumnDirective, selector: "ejs-querybuilder>e-columns>e-column", inputs: { category: "category", columns: "columns", field: "field", format: "format", label: "label", operators: "operators", ruleTemplate: "ruleTemplate", step: "step", template: "template", type: "type", validation: "validation", value: "value", values: "values" }, queries: [{ propertyName: "ruleTemplate", first: true, predicate: ["ruleTemplate"], descendants: true }, { propertyName: "template", first: true, predicate: ["template"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], ColumnDirective.prototype, "ruleTemplate", void 0);
__decorate([
    Template()
], ColumnDirective.prototype, "template", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-querybuilder>e-columns>e-column',
                    inputs: input,
                    outputs: outputs$1,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { ruleTemplate: [{
                type: ContentChild,
                args: ['ruleTemplate']
            }], template: [{
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
ColumnsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColumnsDirective, selector: "ejs-querybuilder>e-columns", queries: [{ propertyName: "children", predicate: ColumnDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-querybuilder>e-columns',
                    queries: {
                        children: new ContentChildren(ColumnDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs = ['allowValidation', 'columns', 'cssClass', 'dataSource', 'displayMode', 'enableNotCondition', 'enablePersistence', 'enableRtl', 'fieldMode', 'fieldModel', 'headerTemplate', 'height', 'immediateModeDelay', 'locale', 'matchCase', 'maxGroupCount', 'operatorModel', 'readonly', 'rule', 'separator', 'showButtons', 'sortDirection', 'summaryView', 'valueModel', 'width'];
const outputs = ['actionBegin', 'beforeChange', 'change', 'created', 'dataBound', 'ruleChange'];
const twoWays = [''];
/**
 * Represents the EJ2 Angular QueryBuilder Component.
 * ```html
 * <ejs-querybuilder></ejs-querybuilder>
 * ```
 */
let QueryBuilderComponent = class QueryBuilderComponent extends QueryBuilder {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['columns'];
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
        this.context.ngAfterContentChecked(this);
    }
};
QueryBuilderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QueryBuilderComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
QueryBuilderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: QueryBuilderComponent, selector: "ejs-querybuilder", inputs: { allowValidation: "allowValidation", columns: "columns", cssClass: "cssClass", dataSource: "dataSource", displayMode: "displayMode", enableNotCondition: "enableNotCondition", enablePersistence: "enablePersistence", enableRtl: "enableRtl", fieldMode: "fieldMode", fieldModel: "fieldModel", headerTemplate: "headerTemplate", height: "height", immediateModeDelay: "immediateModeDelay", locale: "locale", matchCase: "matchCase", maxGroupCount: "maxGroupCount", operatorModel: "operatorModel", readonly: "readonly", rule: "rule", separator: "separator", showButtons: "showButtons", sortDirection: "sortDirection", summaryView: "summaryView", valueModel: "valueModel", width: "width" }, outputs: { actionBegin: "actionBegin", beforeChange: "beforeChange", change: "change", created: "created", dataBound: "dataBound", ruleChange: "ruleChange" }, queries: [{ propertyName: "headerTemplate", first: true, predicate: ["headerTemplate"], descendants: true }, { propertyName: "childColumns", first: true, predicate: ColumnsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], QueryBuilderComponent.prototype, "headerTemplate", void 0);
QueryBuilderComponent = __decorate([
    ComponentMixins([ComponentBase])
], QueryBuilderComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QueryBuilderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-querybuilder',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childColumns: new ContentChild(ColumnsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { headerTemplate: [{
                type: ContentChild,
                args: ['headerTemplate']
            }] } });

/**
 * NgModule definition for the QueryBuilder component.
 */
class QueryBuilderModule {
}
QueryBuilderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QueryBuilderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
QueryBuilderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QueryBuilderModule, declarations: [QueryBuilderComponent,
        ColumnDirective,
        ColumnsDirective], imports: [CommonModule], exports: [QueryBuilderComponent,
        ColumnDirective,
        ColumnsDirective] });
QueryBuilderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QueryBuilderModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QueryBuilderModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        QueryBuilderComponent,
                        ColumnDirective,
                        ColumnsDirective
                    ],
                    exports: [
                        QueryBuilderComponent,
                        ColumnDirective,
                        ColumnsDirective
                    ]
                }]
        }] });

/**
 * NgModule definition for the QueryBuilder component with providers.
 */
class QueryBuilderAllModule {
}
QueryBuilderAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QueryBuilderAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
QueryBuilderAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QueryBuilderAllModule, imports: [CommonModule, QueryBuilderModule], exports: [QueryBuilderModule] });
QueryBuilderAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QueryBuilderAllModule, providers: [], imports: [[CommonModule, QueryBuilderModule], QueryBuilderModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QueryBuilderAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, QueryBuilderModule],
                    exports: [
                        QueryBuilderModule
                    ],
                    providers: []
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { ColumnDirective, ColumnsDirective, QueryBuilderAllModule, QueryBuilderComponent, QueryBuilderModule };
//# sourceMappingURL=syncfusion-ej2-angular-querybuilder.mjs.map
