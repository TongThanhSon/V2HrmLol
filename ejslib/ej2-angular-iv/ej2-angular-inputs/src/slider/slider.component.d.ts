import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Slider } from '@syncfusion/ej2-inputs';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the EJ2 Angular Slider Component.
 * ```html
 * <ejs-slider [value]='value'></ejs-slider>
 * ```
 */
export declare class SliderComponent extends Slider implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    formCompContext: any;
    formContext: any;
    tagObjects: any;
    change: any;
    changed: any;
    created: any;
    renderedTicks: any;
    renderingTicks: any;
    tooltipChange: any;
    valueChange: any;
    focus: any;
    blur: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    registerOnChange(registerFunction: (_: any) => void): void;
    registerOnTouched(registerFunction: () => void): void;
    writeValue(value: any): void;
    setDisabledState(disabled: boolean): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderComponent, "ejs-slider", never, { "colorRange": "colorRange"; "cssClass": "cssClass"; "customValues": "customValues"; "enableAnimation": "enableAnimation"; "enableHtmlSanitizer": "enableHtmlSanitizer"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "enabled": "enabled"; "limits": "limits"; "locale": "locale"; "max": "max"; "min": "min"; "orientation": "orientation"; "readonly": "readonly"; "showButtons": "showButtons"; "step": "step"; "ticks": "ticks"; "tooltip": "tooltip"; "type": "type"; "value": "value"; "width": "width"; }, { "focus": "focus"; "blur": "blur"; "change": "change"; "changed": "changed"; "created": "created"; "renderedTicks": "renderedTicks"; "renderingTicks": "renderingTicks"; "tooltipChange": "tooltipChange"; "valueChange": "valueChange"; }, never, never>;
}
