import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { DataMatrixGenerator } from '@syncfusion/ej2-barcode-generator';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * DataMatrix Component
 * ```html
 * <ej-datamatrix-generator></ej-datamatrix-generator>
 * ```
 */
export declare class DataMatrixGeneratorComponent extends DataMatrixGenerator implements IComponentBase {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<DataMatrixGeneratorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataMatrixGeneratorComponent, "ejs-datamatrixgenerator", never, { "backgroundColor": "backgroundColor"; "displayText": "displayText"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "encoding": "encoding"; "foreColor": "foreColor"; "height": "height"; "locale": "locale"; "margin": "margin"; "mode": "mode"; "size": "size"; "value": "value"; "width": "width"; "xDimension": "xDimension"; }, { "invalid": "invalid"; }, never, never>;
}
