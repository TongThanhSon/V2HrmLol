import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { SymbolPalette } from '@syncfusion/ej2-diagrams';
import { PalettesDirective } from './palettes.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * SymbolPalette Component
 * ```html
 * <ej-symbol-palette></ej-symbol-palette>
 * ```
 */
export declare class SymbolPaletteComponent extends SymbolPalette implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    paletteExpanding: any;
    paletteSelectionChange: any;
    childPalettes: QueryList<PalettesDirective>;
    tags: string[];
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SymbolPaletteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SymbolPaletteComponent, "ejs-symbolpalette", never, { "accessKey": "accessKey"; "allowDrag": "allowDrag"; "connectorDefaults": "connectorDefaults"; "enableAnimation": "enableAnimation"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "enableSearch": "enableSearch"; "expandMode": "expandMode"; "filterSymbols": "filterSymbols"; "getConnectorDefaults": "getConnectorDefaults"; "getNodeDefaults": "getNodeDefaults"; "getSymbolInfo": "getSymbolInfo"; "getSymbolTemplate": "getSymbolTemplate"; "height": "height"; "ignoreSymbolsOnSearch": "ignoreSymbolsOnSearch"; "locale": "locale"; "nodeDefaults": "nodeDefaults"; "palettes": "palettes"; "symbolDragSize": "symbolDragSize"; "symbolHeight": "symbolHeight"; "symbolInfo": "symbolInfo"; "symbolMargin": "symbolMargin"; "symbolPreview": "symbolPreview"; "symbolWidth": "symbolWidth"; "width": "width"; }, { "paletteExpanding": "paletteExpanding"; "paletteSelectionChange": "paletteSelectionChange"; }, ["childPalettes"], never>;
}
