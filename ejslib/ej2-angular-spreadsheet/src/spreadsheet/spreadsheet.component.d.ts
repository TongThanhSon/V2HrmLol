import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { SheetsDirective } from './sheets.directive';
import { DefinedNamesDirective } from './definednames.directive';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * `ejs-spreadsheet` represents the Angular Spreadsheet Component.
 * ```html
 * <ejs-spreadsheet></ejs-spreadsheet>
 * ```
 */
export declare class SpreadsheetComponent extends Spreadsheet implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    actionBegin: any;
    actionComplete: any;
    afterHyperlinkClick: any;
    afterHyperlinkCreate: any;
    beforeCellFormat: any;
    beforeCellRender: any;
    beforeCellSave: any;
    beforeCellUpdate: any;
    beforeConditionalFormat: any;
    beforeDataBound: any;
    beforeHyperlinkClick: any;
    beforeHyperlinkCreate: any;
    beforeOpen: any;
    beforeSave: any;
    beforeSelect: any;
    beforeSort: any;
    cellEdit: any;
    cellEditing: any;
    cellSave: any;
    contextMenuBeforeClose: any;
    contextMenuBeforeOpen: any;
    contextMenuItemSelect: any;
    created: any;
    dataBound: any;
    dataSourceChanged: any;
    dialogBeforeOpen: any;
    fileMenuBeforeClose: any;
    fileMenuBeforeOpen: any;
    fileMenuItemSelect: any;
    openComplete: any;
    openFailure: any;
    queryCellInfo: any;
    saveComplete: any;
    select: any;
    sortComplete: any;
    childSheets: QueryList<SheetsDirective>;
    childDefinedNames: QueryList<DefinedNamesDirective>;
    tags: string[];
    template: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
}
