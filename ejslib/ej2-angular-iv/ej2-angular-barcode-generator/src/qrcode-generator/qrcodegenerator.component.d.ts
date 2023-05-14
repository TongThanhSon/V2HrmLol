import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { QRCodeGenerator } from '@syncfusion/ej2-barcode-generator';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * QRCode Component
 * ```html
 * <ej-qrcode-generator></ej-qrcode-generator>
 * ```
 */
export declare class QRCodeGeneratorComponent extends QRCodeGenerator implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    invalid: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QRCodeGeneratorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QRCodeGeneratorComponent, "ejs-qrcodegenerator", never, { "backgroundColor": "backgroundColor"; "displayText": "displayText"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "errorCorrectionLevel": "errorCorrectionLevel"; "foreColor": "foreColor"; "height": "height"; "locale": "locale"; "margin": "margin"; "mode": "mode"; "value": "value"; "version": "version"; "width": "width"; "xDimension": "xDimension"; }, { "invalid": "invalid"; }, never, never>;
}
