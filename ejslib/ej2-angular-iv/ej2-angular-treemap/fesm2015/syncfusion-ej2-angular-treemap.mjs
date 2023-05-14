import * as i0 from '@angular/core';
import { Directive, ContentChildren, ContentChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { ComplexBase, setValue, ArrayBase, Template, ComponentBase, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { __decorate } from 'tslib';
import { TreeMap, TreeMapTooltip, TreeMapLegend, TreeMapHighlight, TreeMapSelection, Print, PdfExport, ImageExport } from '@syncfusion/ej2-treemap';
export * from '@syncfusion/ej2-treemap';
import { CommonModule } from '@angular/common';

let input$1 = ['color', 'from', 'label', 'maxOpacity', 'minOpacity', 'showLegend', 'to', 'value'];
let outputs$2 = [];
class ColorMappingDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
        this.directivePropList = input$1;
    }
}
ColorMappingDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColorMappingDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ColorMappingDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColorMappingDirective, selector: "e-levels>e-colorMappings>e-colorMapping", inputs: { color: "color", from: "from", label: "label", maxOpacity: "maxOpacity", minOpacity: "minOpacity", showLegend: "showLegend", to: "to", value: "value" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColorMappingDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-levels>e-colorMappings>e-colorMapping',
                    inputs: input$1,
                    outputs: outputs$2,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * ColorMapping Array Directive
 * @private
 */
class ColorMappingsDirective extends ArrayBase {
    constructor() {
        super('colormapping');
    }
}
ColorMappingsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColorMappingsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ColorMappingsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColorMappingsDirective, selector: "e-levels>e-colorMappings", queries: [{ propertyName: "children", predicate: ColorMappingDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColorMappingsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-levels>e-colorMappings',
                    queries: {
                        children: new ContentChildren(ColorMappingDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input = ['autoFill', 'border', 'colorMapping', 'fill', 'groupGap', 'groupPadding', 'groupPath', 'headerAlignment', 'headerFormat', 'headerHeight', 'headerStyle', 'headerTemplate', 'opacity', 'showHeader', 'templatePosition'];
let outputs$1 = [];
/**
 * Level Directive
 * ```html
 * <e-levels>
 * <e-level></e-level>
 * </e-levels>
 * ```
 */
class LevelDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['colorMapping'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$1);
        this.directivePropList = input;
    }
}
LevelDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LevelDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
LevelDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: LevelDirective, selector: "e-levels>e-level", inputs: { autoFill: "autoFill", border: "border", colorMapping: "colorMapping", fill: "fill", groupGap: "groupGap", groupPadding: "groupPadding", groupPath: "groupPath", headerAlignment: "headerAlignment", headerFormat: "headerFormat", headerHeight: "headerHeight", headerStyle: "headerStyle", headerTemplate: "headerTemplate", opacity: "opacity", showHeader: "showHeader", templatePosition: "templatePosition" }, queries: [{ propertyName: "headerTemplate", first: true, predicate: ["headerTemplate"], descendants: true }, { propertyName: "childColorMapping", first: true, predicate: ColorMappingsDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], LevelDirective.prototype, "headerTemplate", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LevelDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-levels>e-level',
                    inputs: input,
                    outputs: outputs$1,
                    queries: {
                        childColorMapping: new ContentChild(ColorMappingsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { headerTemplate: [{
                type: ContentChild,
                args: ['headerTemplate']
            }] } });
/**
 * Level Array Directive
 * @private
 */
class LevelsDirective extends ArrayBase {
    constructor() {
        super('levels');
    }
}
LevelsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LevelsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
LevelsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: LevelsDirective, selector: "ej-treemap>e-levels", queries: [{ propertyName: "children", predicate: LevelDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: LevelsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-treemap>e-levels',
                    queries: {
                        children: new ContentChildren(LevelDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs = ['allowImageExport', 'allowPdfExport', 'allowPrint', 'background', 'border', 'breadcrumbConnector', 'colorValuePath', 'dataSource', 'description', 'drillDownView', 'enableBreadcrumb', 'enableDrillDown', 'enablePersistence', 'enableRtl', 'equalColorValuePath', 'format', 'height', 'highlightSettings', 'initialDrillDown', 'layoutType', 'leafItemSettings', 'legendSettings', 'levels', 'locale', 'margin', 'palette', 'query', 'rangeColorValuePath', 'renderDirection', 'selectionSettings', 'tabIndex', 'theme', 'titleSettings', 'tooltipSettings', 'useGroupingSeparator', 'weightValuePath', 'width'];
const outputs = ['beforePrint', 'click', 'doubleClick', 'drillEnd', 'drillStart', 'itemClick', 'itemHighlight', 'itemMove', 'itemRendering', 'itemSelected', 'legendItemRendering', 'legendRendering', 'load', 'loaded', 'mouseMove', 'resize', 'rightClick', 'tooltipRendering'];
const twoWays = [''];
/**
 * TreeMap Component
 * ```html
 * <ej-treemap></ej-treemap>
 * ```
 */
let TreeMapComponent = class TreeMapComponent extends TreeMap {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['levels'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('TreeMapTreeMapTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('TreeMapTreeMapLegend');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('TreeMapTreeMapHighlight');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('TreeMapTreeMapSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('TreeMapPrint');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('TreeMapPdfExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('TreeMapImageExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
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
        this.tagObjects[0].instance = this.childLevels;
        this.context.ngAfterContentChecked(this);
    }
};
TreeMapComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeMapComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
TreeMapComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TreeMapComponent, selector: "ejs-treemap", inputs: { allowImageExport: "allowImageExport", allowPdfExport: "allowPdfExport", allowPrint: "allowPrint", background: "background", border: "border", breadcrumbConnector: "breadcrumbConnector", colorValuePath: "colorValuePath", dataSource: "dataSource", description: "description", drillDownView: "drillDownView", enableBreadcrumb: "enableBreadcrumb", enableDrillDown: "enableDrillDown", enablePersistence: "enablePersistence", enableRtl: "enableRtl", equalColorValuePath: "equalColorValuePath", format: "format", height: "height", highlightSettings: "highlightSettings", initialDrillDown: "initialDrillDown", layoutType: "layoutType", leafItemSettings: "leafItemSettings", legendSettings: "legendSettings", levels: "levels", locale: "locale", margin: "margin", palette: "palette", query: "query", rangeColorValuePath: "rangeColorValuePath", renderDirection: "renderDirection", selectionSettings: "selectionSettings", tabIndex: "tabIndex", theme: "theme", titleSettings: "titleSettings", tooltipSettings: "tooltipSettings", useGroupingSeparator: "useGroupingSeparator", weightValuePath: "weightValuePath", width: "width" }, outputs: { beforePrint: "beforePrint", click: "click", doubleClick: "doubleClick", drillEnd: "drillEnd", drillStart: "drillStart", itemClick: "itemClick", itemHighlight: "itemHighlight", itemMove: "itemMove", itemRendering: "itemRendering", itemSelected: "itemSelected", legendItemRendering: "legendItemRendering", legendRendering: "legendRendering", load: "load", loaded: "loaded", mouseMove: "mouseMove", resize: "resize", rightClick: "rightClick", tooltipRendering: "tooltipRendering" }, queries: [{ propertyName: "tooltipSettings_template", first: true, predicate: ["tooltipSettingsTemplate"], descendants: true }, { propertyName: "leafItemSettings_labelTemplate", first: true, predicate: ["leafItemSettingsLabelTemplate"], descendants: true }, { propertyName: "childLevels", first: true, predicate: LevelsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], TreeMapComponent.prototype, "tooltipSettings_template", void 0);
__decorate([
    Template()
], TreeMapComponent.prototype, "leafItemSettings_labelTemplate", void 0);
TreeMapComponent = __decorate([
    ComponentMixins([ComponentBase])
], TreeMapComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeMapComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-treemap',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childLevels: new ContentChild(LevelsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { tooltipSettings_template: [{
                type: ContentChild,
                args: ['tooltipSettingsTemplate']
            }], leafItemSettings_labelTemplate: [{
                type: ContentChild,
                args: ['leafItemSettingsLabelTemplate']
            }] } });

/**
 * NgModule definition for the TreeMap component.
 */
class TreeMapModule {
}
TreeMapModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeMapModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TreeMapModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeMapModule, declarations: [TreeMapComponent,
        ColorMappingDirective,
        ColorMappingsDirective,
        LevelDirective,
        LevelsDirective], imports: [CommonModule], exports: [TreeMapComponent,
        ColorMappingDirective,
        ColorMappingsDirective,
        LevelDirective,
        LevelsDirective] });
TreeMapModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeMapModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeMapModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        TreeMapComponent,
                        ColorMappingDirective,
                        ColorMappingsDirective,
                        LevelDirective,
                        LevelsDirective
                    ],
                    exports: [
                        TreeMapComponent,
                        ColorMappingDirective,
                        ColorMappingsDirective,
                        LevelDirective,
                        LevelsDirective
                    ]
                }]
        }] });

const TreeMapTooltipService = { provide: 'TreeMapTreeMapTooltip', useValue: TreeMapTooltip };
const TreeMapLegendService = { provide: 'TreeMapTreeMapLegend', useValue: TreeMapLegend };
const TreeMapHighlightService = { provide: 'TreeMapTreeMapHighlight', useValue: TreeMapHighlight };
const TreeMapSelectionService = { provide: 'TreeMapTreeMapSelection', useValue: TreeMapSelection };
const PrintService = { provide: 'TreeMapPrint', useValue: Print };
const PdfExportService = { provide: 'TreeMapPdfExport', useValue: PdfExport };
const ImageExportService = { provide: 'TreeMapImageExport', useValue: ImageExport };
/**
 * NgModule definition for the TreeMap component with providers.
 */
class TreeMapAllModule {
}
TreeMapAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeMapAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TreeMapAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeMapAllModule, imports: [CommonModule, TreeMapModule], exports: [TreeMapModule] });
TreeMapAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeMapAllModule, providers: [
        TreeMapTooltipService,
        TreeMapLegendService,
        TreeMapHighlightService,
        TreeMapSelectionService,
        PrintService,
        PdfExportService,
        ImageExportService
    ], imports: [[CommonModule, TreeMapModule], TreeMapModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeMapAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, TreeMapModule],
                    exports: [
                        TreeMapModule
                    ],
                    providers: [
                        TreeMapTooltipService,
                        TreeMapLegendService,
                        TreeMapHighlightService,
                        TreeMapSelectionService,
                        PrintService,
                        PdfExportService,
                        ImageExportService
                    ]
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { ColorMappingDirective, ColorMappingsDirective, ImageExportService, LevelDirective, LevelsDirective, PdfExportService, PrintService, TreeMapAllModule, TreeMapComponent, TreeMapHighlightService, TreeMapLegendService, TreeMapModule, TreeMapSelectionService, TreeMapTooltipService };
//# sourceMappingURL=syncfusion-ej2-angular-treemap.mjs.map
