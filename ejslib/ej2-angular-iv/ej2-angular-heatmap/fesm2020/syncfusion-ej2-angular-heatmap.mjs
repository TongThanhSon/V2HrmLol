import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { setValue, ComponentBase, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { HeatMap, Legend, Tooltip, Adaptor } from '@syncfusion/ej2-heatmap';
export * from '@syncfusion/ej2-heatmap';
import { CommonModule } from '@angular/common';

const inputs = ['allowSelection', 'cellSettings', 'dataSource', 'dataSourceSettings', 'enablePersistence', 'enableRtl', 'height', 'legendSettings', 'locale', 'margin', 'paletteSettings', 'renderingMode', 'showTooltip', 'theme', 'titleSettings', 'tooltipSettings', 'width', 'xAxis', 'yAxis'];
const outputs = ['cellClick', 'cellRender', 'cellSelected', 'created', 'legendRender', 'load', 'loaded', 'resized', 'tooltipRender'];
const twoWays = [''];
/**
 * `ejs-heatmap` represents the Angular HeatMap Component.
 * ```html
 * <ejs-heatmap></ejs-heatmap>
 * ```
 */
let HeatMapComponent = class HeatMapComponent extends HeatMap {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = [''];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('HeatMapLegend');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('HeatMapTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('HeatMapAdaptor');
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
HeatMapComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: HeatMapComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
HeatMapComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: HeatMapComponent, selector: "ejs-heatmap", inputs: { allowSelection: "allowSelection", cellSettings: "cellSettings", dataSource: "dataSource", dataSourceSettings: "dataSourceSettings", enablePersistence: "enablePersistence", enableRtl: "enableRtl", height: "height", legendSettings: "legendSettings", locale: "locale", margin: "margin", paletteSettings: "paletteSettings", renderingMode: "renderingMode", showTooltip: "showTooltip", theme: "theme", titleSettings: "titleSettings", tooltipSettings: "tooltipSettings", width: "width", xAxis: "xAxis", yAxis: "yAxis" }, outputs: { cellClick: "cellClick", cellRender: "cellRender", cellSelected: "cellSelected", created: "created", legendRender: "legendRender", load: "load", loaded: "loaded", resized: "resized", tooltipRender: "tooltipRender" }, usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
HeatMapComponent = __decorate([
    ComponentMixins([ComponentBase])
], HeatMapComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: HeatMapComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-heatmap',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the HeatMap component.
 */
class HeatMapModule {
}
HeatMapModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: HeatMapModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HeatMapModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: HeatMapModule, declarations: [HeatMapComponent], imports: [CommonModule], exports: [HeatMapComponent] });
HeatMapModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: HeatMapModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: HeatMapModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        HeatMapComponent
                    ],
                    exports: [
                        HeatMapComponent
                    ]
                }]
        }] });

const LegendService = { provide: 'HeatMapLegend', useValue: Legend };
const TooltipService = { provide: 'HeatMapTooltip', useValue: Tooltip };
const AdaptorService = { provide: 'HeatMapAdaptor', useValue: Adaptor };
/**
 * NgModule definition for the HeatMap component with providers.
 */
class HeatMapAllModule {
}
HeatMapAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: HeatMapAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HeatMapAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: HeatMapAllModule, imports: [CommonModule, HeatMapModule], exports: [HeatMapModule] });
HeatMapAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: HeatMapAllModule, providers: [
        LegendService,
        TooltipService,
        AdaptorService
    ], imports: [[CommonModule, HeatMapModule], HeatMapModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: HeatMapAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, HeatMapModule],
                    exports: [
                        HeatMapModule
                    ],
                    providers: [
                        LegendService,
                        TooltipService,
                        AdaptorService
                    ]
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { AdaptorService, HeatMapAllModule, HeatMapComponent, HeatMapModule, LegendService, TooltipService };
//# sourceMappingURL=syncfusion-ej2-angular-heatmap.mjs.map
