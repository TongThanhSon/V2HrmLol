import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { setValue, ComponentBase, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { BarcodeGenerator, QRCodeGenerator, DataMatrixGenerator } from '@syncfusion/ej2-barcode-generator';
export * from '@syncfusion/ej2-barcode-generator';
import { CommonModule } from '@angular/common';

const inputs$2 = ['backgroundColor', 'displayText', 'enableCheckSum', 'enablePersistence', 'enableRtl', 'foreColor', 'height', 'locale', 'margin', 'mode', 'type', 'value', 'width'];
const outputs$2 = ['invalid'];
const twoWays$2 = [''];
/**
 * Barcode Component
 * ```html
 * <ej-barcode-generator></ej-barcode-generator>
 * ```
 */
let BarcodeGeneratorComponent = class BarcodeGeneratorComponent extends BarcodeGenerator {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$2);
        this.addTwoWay.call(this, twoWays$2);
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
BarcodeGeneratorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BarcodeGeneratorComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
BarcodeGeneratorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: BarcodeGeneratorComponent, selector: "ejs-barcodegenerator", inputs: { backgroundColor: "backgroundColor", displayText: "displayText", enableCheckSum: "enableCheckSum", enablePersistence: "enablePersistence", enableRtl: "enableRtl", foreColor: "foreColor", height: "height", locale: "locale", margin: "margin", mode: "mode", type: "type", value: "value", width: "width" }, outputs: { invalid: "invalid" }, usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
BarcodeGeneratorComponent = __decorate([
    ComponentMixins([ComponentBase])
], BarcodeGeneratorComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BarcodeGeneratorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-barcodegenerator',
                    inputs: inputs$2,
                    outputs: outputs$2,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the BarcodeGenerator component.
 */
class BarcodeGeneratorModule {
}
BarcodeGeneratorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BarcodeGeneratorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BarcodeGeneratorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BarcodeGeneratorModule, declarations: [BarcodeGeneratorComponent], imports: [CommonModule], exports: [BarcodeGeneratorComponent] });
BarcodeGeneratorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BarcodeGeneratorModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BarcodeGeneratorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        BarcodeGeneratorComponent
                    ],
                    exports: [
                        BarcodeGeneratorComponent
                    ]
                }]
        }] });

/**
 * NgModule definition for the BarcodeGenerator component with providers.
 */
class BarcodeGeneratorAllModule {
}
BarcodeGeneratorAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BarcodeGeneratorAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BarcodeGeneratorAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BarcodeGeneratorAllModule, imports: [CommonModule, BarcodeGeneratorModule], exports: [BarcodeGeneratorModule] });
BarcodeGeneratorAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BarcodeGeneratorAllModule, providers: [], imports: [[CommonModule, BarcodeGeneratorModule], BarcodeGeneratorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BarcodeGeneratorAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, BarcodeGeneratorModule],
                    exports: [
                        BarcodeGeneratorModule
                    ],
                    providers: []
                }]
        }] });

const inputs$1 = ['backgroundColor', 'displayText', 'enablePersistence', 'enableRtl', 'errorCorrectionLevel', 'foreColor', 'height', 'locale', 'margin', 'mode', 'value', 'version', 'width', 'xDimension'];
const outputs$1 = ['invalid'];
const twoWays$1 = [''];
/**
 * QRCode Component
 * ```html
 * <ej-qrcode-generator></ej-qrcode-generator>
 * ```
 */
let QRCodeGeneratorComponent = class QRCodeGeneratorComponent extends QRCodeGenerator {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$1);
        this.addTwoWay.call(this, twoWays$1);
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
QRCodeGeneratorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QRCodeGeneratorComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
QRCodeGeneratorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: QRCodeGeneratorComponent, selector: "ejs-qrcodegenerator", inputs: { backgroundColor: "backgroundColor", displayText: "displayText", enablePersistence: "enablePersistence", enableRtl: "enableRtl", errorCorrectionLevel: "errorCorrectionLevel", foreColor: "foreColor", height: "height", locale: "locale", margin: "margin", mode: "mode", value: "value", version: "version", width: "width", xDimension: "xDimension" }, outputs: { invalid: "invalid" }, usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QRCodeGeneratorComponent = __decorate([
    ComponentMixins([ComponentBase])
], QRCodeGeneratorComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QRCodeGeneratorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-qrcodegenerator',
                    inputs: inputs$1,
                    outputs: outputs$1,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the QRCodeGenerator component.
 */
class QRCodeGeneratorModule {
}
QRCodeGeneratorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QRCodeGeneratorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
QRCodeGeneratorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QRCodeGeneratorModule, declarations: [QRCodeGeneratorComponent], imports: [CommonModule], exports: [QRCodeGeneratorComponent] });
QRCodeGeneratorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QRCodeGeneratorModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QRCodeGeneratorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        QRCodeGeneratorComponent
                    ],
                    exports: [
                        QRCodeGeneratorComponent
                    ]
                }]
        }] });

/**
 * NgModule definition for the QRCodeGenerator component with providers.
 */
class QRCodeGeneratorAllModule {
}
QRCodeGeneratorAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QRCodeGeneratorAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
QRCodeGeneratorAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QRCodeGeneratorAllModule, imports: [CommonModule, QRCodeGeneratorModule], exports: [QRCodeGeneratorModule] });
QRCodeGeneratorAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QRCodeGeneratorAllModule, providers: [], imports: [[CommonModule, QRCodeGeneratorModule], QRCodeGeneratorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: QRCodeGeneratorAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, QRCodeGeneratorModule],
                    exports: [
                        QRCodeGeneratorModule
                    ],
                    providers: []
                }]
        }] });

const inputs = ['backgroundColor', 'displayText', 'enablePersistence', 'enableRtl', 'encoding', 'foreColor', 'height', 'locale', 'margin', 'mode', 'size', 'value', 'width', 'xDimension'];
const outputs = ['invalid'];
const twoWays = [''];
/**
 * DataMatrix Component
 * ```html
 * <ej-datamatrix-generator></ej-datamatrix-generator>
 * ```
 */
let DataMatrixGeneratorComponent = class DataMatrixGeneratorComponent extends DataMatrixGenerator {
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
DataMatrixGeneratorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DataMatrixGeneratorComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
DataMatrixGeneratorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DataMatrixGeneratorComponent, selector: "ejs-datamatrixgenerator", inputs: { backgroundColor: "backgroundColor", displayText: "displayText", enablePersistence: "enablePersistence", enableRtl: "enableRtl", encoding: "encoding", foreColor: "foreColor", height: "height", locale: "locale", margin: "margin", mode: "mode", size: "size", value: "value", width: "width", xDimension: "xDimension" }, outputs: { invalid: "invalid" }, usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
DataMatrixGeneratorComponent = __decorate([
    ComponentMixins([ComponentBase])
], DataMatrixGeneratorComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DataMatrixGeneratorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-datamatrixgenerator',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the DataMatrixGenerator component.
 */
class DataMatrixGeneratorModule {
}
DataMatrixGeneratorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DataMatrixGeneratorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DataMatrixGeneratorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DataMatrixGeneratorModule, declarations: [DataMatrixGeneratorComponent], imports: [CommonModule], exports: [DataMatrixGeneratorComponent] });
DataMatrixGeneratorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DataMatrixGeneratorModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DataMatrixGeneratorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        DataMatrixGeneratorComponent
                    ],
                    exports: [
                        DataMatrixGeneratorComponent
                    ]
                }]
        }] });

/**
 * NgModule definition for the DataMatrixGenerator component with providers.
 */
class DataMatrixGeneratorAllModule {
}
DataMatrixGeneratorAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DataMatrixGeneratorAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DataMatrixGeneratorAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DataMatrixGeneratorAllModule, imports: [CommonModule, DataMatrixGeneratorModule], exports: [DataMatrixGeneratorModule] });
DataMatrixGeneratorAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DataMatrixGeneratorAllModule, providers: [], imports: [[CommonModule, DataMatrixGeneratorModule], DataMatrixGeneratorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DataMatrixGeneratorAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DataMatrixGeneratorModule],
                    exports: [
                        DataMatrixGeneratorModule
                    ],
                    providers: []
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { BarcodeGeneratorAllModule, BarcodeGeneratorComponent, BarcodeGeneratorModule, DataMatrixGeneratorAllModule, DataMatrixGeneratorComponent, DataMatrixGeneratorModule, QRCodeGeneratorAllModule, QRCodeGeneratorComponent, QRCodeGeneratorModule };
//# sourceMappingURL=syncfusion-ej2-angular-barcode-generator.mjs.map
