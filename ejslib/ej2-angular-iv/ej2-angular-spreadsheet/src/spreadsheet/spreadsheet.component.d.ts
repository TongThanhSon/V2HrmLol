import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { SheetsDirective } from './sheets.directive';
import { DefinedNamesDirective } from './definednames.directive';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<SpreadsheetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SpreadsheetComponent, "ejs-spreadsheet", never, { "activeSheetIndex": "activeSheetIndex"; "allowAutoFill": "allowAutoFill"; "allowCellFormatting": "allowCellFormatting"; "allowChart": "allowChart"; "allowConditionalFormat": "allowConditionalFormat"; "allowDataValidation": "allowDataValidation"; "allowDelete": "allowDelete"; "allowEditing": "allowEditing"; "allowFiltering": "allowFiltering"; "allowFindAndReplace": "allowFindAndReplace"; "allowFreezePane": "allowFreezePane"; "allowHyperlink": "allowHyperlink"; "allowImage": "allowImage"; "allowInsert": "allowInsert"; "allowMerge": "allowMerge"; "allowNumberFormatting": "allowNumberFormatting"; "allowOpen": "allowOpen"; "allowResizing": "allowResizing"; "allowSave": "allowSave"; "allowScrolling": "allowScrolling"; "allowSorting": "allowSorting"; "allowUndoRedo": "allowUndoRedo"; "allowWrap": "allowWrap"; "autoFillSettings": "autoFillSettings"; "cellStyle": "cellStyle"; "cssClass": "cssClass"; "definedNames": "definedNames"; "enableClipboard": "enableClipboard"; "enableContextMenu": "enableContextMenu"; "enableKeyboardNavigation": "enableKeyboardNavigation"; "enableKeyboardShortcut": "enableKeyboardShortcut"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "height": "height"; "isProtected": "isProtected"; "locale": "locale"; "openUrl": "openUrl"; "password": "password"; "saveUrl": "saveUrl"; "scrollSettings": "scrollSettings"; "selectionSettings": "selectionSettings"; "sheets": "sheets"; "showAggregate": "showAggregate"; "showFormulaBar": "showFormulaBar"; "showRibbon": "showRibbon"; "showSheetTabs": "showSheetTabs"; "width": "width"; }, { "actionBegin": "actionBegin"; "actionComplete": "actionComplete"; "afterHyperlinkClick": "afterHyperlinkClick"; "afterHyperlinkCreate": "afterHyperlinkCreate"; "beforeCellFormat": "beforeCellFormat"; "beforeCellRender": "beforeCellRender"; "beforeCellSave": "beforeCellSave"; "beforeCellUpdate": "beforeCellUpdate"; "beforeConditionalFormat": "beforeConditionalFormat"; "beforeDataBound": "beforeDataBound"; "beforeHyperlinkClick": "beforeHyperlinkClick"; "beforeHyperlinkCreate": "beforeHyperlinkCreate"; "beforeOpen": "beforeOpen"; "beforeSave": "beforeSave"; "beforeSelect": "beforeSelect"; "beforeSort": "beforeSort"; "cellEdit": "cellEdit"; "cellEditing": "cellEditing"; "cellSave": "cellSave"; "contextMenuBeforeClose": "contextMenuBeforeClose"; "contextMenuBeforeOpen": "contextMenuBeforeOpen"; "contextMenuItemSelect": "contextMenuItemSelect"; "created": "created"; "dataBound": "dataBound"; "dataSourceChanged": "dataSourceChanged"; "dialogBeforeOpen": "dialogBeforeOpen"; "fileMenuBeforeClose": "fileMenuBeforeClose"; "fileMenuBeforeOpen": "fileMenuBeforeOpen"; "fileMenuItemSelect": "fileMenuItemSelect"; "openComplete": "openComplete"; "openFailure": "openFailure"; "queryCellInfo": "queryCellInfo"; "saveComplete": "saveComplete"; "select": "select"; "sortComplete": "sortComplete"; }, ["template", "childSheets", "childDefinedNames"], never>;
}
