import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { BarcodeGenerator } from '@syncfusion/ej2-barcode-generator';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Barcode Component
 * ```html
 * <ej-barcode-generator></ej-barcode-generator>
 * ```
 */
export declare class BarcodeGeneratorComponent extends BarcodeGenerator implements IComponentBase {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<BarcodeGeneratorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BarcodeGeneratorComponent, "ejs-barcodegenerator", never, { "backgroundColor": "backgroundColor"; "displayText": "displayText"; "enableCheckSum": "enableCheckSum"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "foreColor": "foreColor"; "height": "height"; "locale": "locale"; "margin": "margin"; "mode": "mode"; "type": "type"; "value": "value"; "width": "width"; }, { "invalid": "invalid"; }, never, never>;
}
