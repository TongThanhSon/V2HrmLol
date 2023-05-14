import * as i0 from '@angular/core';
import { Directive, ContentChildren, ContentChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { ComplexBase, setValue, ArrayBase, Template, ComponentBase, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { __decorate } from 'tslib';
import { Spreadsheet, Clipboard, Edit, KeyboardNavigation, KeyboardShortcut, CollaborativeEditing, Selection, ContextMenu, FormulaBar, Ribbon, Save, Open, SheetTabs, DataBind, AllModule, BasicModule, CellFormat, NumberFormat, Formula } from '@syncfusion/ej2-spreadsheet';
export * from '@syncfusion/ej2-spreadsheet';
import { CommonModule } from '@angular/common';

let input$8 = ['height', 'id', 'left', 'src', 'top', 'width'];
let outputs$9 = [];
class ImageDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$9);
        this.directivePropList = input$8;
    }
}
ImageDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ImageDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ImageDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ImageDirective, selector: "e-images>e-image", inputs: { height: "height", id: "id", left: "left", src: "src", top: "top", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ImageDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-images>e-image',
                    inputs: input$8,
                    outputs: outputs$9,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Image Array Directive
 * @private
 */
class ImagesDirective extends ArrayBase {
    constructor() {
        super('image');
    }
}
ImagesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ImagesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ImagesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ImagesDirective, selector: "e-cell>e-images", queries: [{ propertyName: "children", predicate: ImageDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ImagesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-cell>e-images',
                    queries: {
                        children: new ContentChildren(ImageDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$7 = ['dataLabelSettings', 'height', 'id', 'isSeriesInRows', 'legendSettings', 'primaryXAxis', 'primaryYAxis', 'range', 'theme', 'title', 'type', 'width'];
let outputs$8 = [];
class ChartDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$8);
        this.directivePropList = input$7;
    }
}
ChartDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ChartDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ChartDirective, selector: "e-charts>e-chart", inputs: { dataLabelSettings: "dataLabelSettings", height: "height", id: "id", isSeriesInRows: "isSeriesInRows", legendSettings: "legendSettings", primaryXAxis: "primaryXAxis", primaryYAxis: "primaryYAxis", range: "range", theme: "theme", title: "title", type: "type", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-charts>e-chart',
                    inputs: input$7,
                    outputs: outputs$8,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Chart Array Directive
 * @private
 */
class ChartsDirective extends ArrayBase {
    constructor() {
        super('chart');
    }
}
ChartsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ChartsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ChartsDirective, selector: "e-cell>e-charts", queries: [{ propertyName: "children", predicate: ChartDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-cell>e-charts',
                    queries: {
                        children: new ContentChildren(ChartDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$6 = ['chart', 'colSpan', 'format', 'formula', 'hyperlink', 'image', 'index', 'isLocked', 'rowSpan', 'style', 'validation', 'value', 'wrap'];
let outputs$7 = [];
/**
 * `e-cell` directive represent a cell of the Angular Spreadsheet.
 * It must be contained in a `e-row` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rows>
 *    <e-row>
 *    <e-cells>
 *    <e-cell value='A1'></e-cell>
 *    </e-cells>
 *    </e-row>
 *    </e-rows>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
class CellDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['image', 'chart'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$7);
        this.directivePropList = input$6;
    }
}
CellDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CellDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
CellDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: CellDirective, selector: "e-cells>e-cell", inputs: { chart: "chart", colSpan: "colSpan", format: "format", formula: "formula", hyperlink: "hyperlink", image: "image", index: "index", isLocked: "isLocked", rowSpan: "rowSpan", style: "style", validation: "validation", value: "value", wrap: "wrap" }, queries: [{ propertyName: "childImage", first: true, predicate: ImagesDirective, descendants: true }, { propertyName: "childChart", first: true, predicate: ChartsDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CellDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-cells>e-cell',
                    inputs: input$6,
                    outputs: outputs$7,
                    queries: {
                        childImage: new ContentChild(ImagesDirective),
                        childChart: new ContentChild(ChartsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Cell Array Directive
 * @private
 */
class CellsDirective extends ArrayBase {
    constructor() {
        super('cells');
    }
}
CellsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CellsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
CellsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: CellsDirective, selector: "e-row>e-cells", queries: [{ propertyName: "children", predicate: CellDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CellsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-row>e-cells',
                    queries: {
                        children: new ContentChildren(CellDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$5 = ['cells', 'customHeight', 'format', 'height', 'hidden', 'index'];
let outputs$6 = [];
/**
 * `e-row` directive represent a row of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rows>
 *    <e-row></e-row>
 *    </e-rows>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
class RowDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['cells'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$6);
        this.directivePropList = input$5;
    }
}
RowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RowDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
RowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RowDirective, selector: "e-rows>e-row", inputs: { cells: "cells", customHeight: "customHeight", format: "format", height: "height", hidden: "hidden", index: "index" }, queries: [{ propertyName: "childCells", first: true, predicate: CellsDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-rows>e-row',
                    inputs: input$5,
                    outputs: outputs$6,
                    queries: {
                        childCells: new ContentChild(CellsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Row Array Directive
 * @private
 */
class RowsDirective extends ArrayBase {
    constructor() {
        super('rows');
    }
}
RowsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RowsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RowsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RowsDirective, selector: "e-sheet>e-rows", queries: [{ propertyName: "children", predicate: RowDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RowsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-sheet>e-rows',
                    queries: {
                        children: new ContentChildren(RowDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$4 = ['customWidth', 'format', 'hidden', 'index', 'isLocked', 'validation', 'width'];
let outputs$5 = [];
/**
 * `e-column` directive represent a column of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-columns>
 *    <e-column width='100'></e-column>
 *    </e-columns>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
class ColumnDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$5);
        this.directivePropList = input$4;
    }
}
ColumnDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ColumnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColumnDirective, selector: "e-columns>e-column", inputs: { customWidth: "customWidth", format: "format", hidden: "hidden", index: "index", isLocked: "isLocked", validation: "validation", width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-columns>e-column',
                    inputs: input$4,
                    outputs: outputs$5,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Column Array Directive
 * @private
 */
class ColumnsDirective extends ArrayBase {
    constructor() {
        super('columns');
    }
}
ColumnsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ColumnsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColumnsDirective, selector: "e-sheet>e-columns", queries: [{ propertyName: "children", predicate: ColumnDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-sheet>e-columns',
                    queries: {
                        children: new ContentChildren(ColumnDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$3 = ['address', 'dataSource', 'query', 'showFieldAsHeader', 'startCell', 'template'];
let outputs$4 = [];
/**
 * `e-range` directive represent a range of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-ranges>
 *    <e-range [dataSource]='data'></e-range>
 *    </e-ranges>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
class RangeDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$4);
        this.directivePropList = input$3;
    }
}
RangeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
RangeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangeDirective, selector: "e-ranges>e-range", inputs: { address: "address", dataSource: "dataSource", query: "query", showFieldAsHeader: "showFieldAsHeader", startCell: "startCell", template: "template" }, queries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], RangeDirective.prototype, "template", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-ranges>e-range',
                    inputs: input$3,
                    outputs: outputs$4,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { template: [{
                type: ContentChild,
                args: ['template']
            }] } });
/**
 * Range Array Directive
 * @private
 */
class RangesDirective extends ArrayBase {
    constructor() {
        super('ranges');
    }
}
RangesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RangesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangesDirective, selector: "e-sheet>e-ranges", queries: [{ propertyName: "children", predicate: RangeDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-sheet>e-ranges',
                    queries: {
                        children: new ContentChildren(RangeDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$2 = ['cFColor', 'format', 'range', 'type', 'value'];
let outputs$3 = [];
/**
 * `e-conditionalformat` directive represent a conditionalformat of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-conditionalformats>
 *    <e-conditionalformat></e-conditionalformat>
 *    </e-conditionalformats>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
class ConditionalFormatDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$3);
        this.directivePropList = input$2;
    }
}
ConditionalFormatDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConditionalFormatDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ConditionalFormatDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ConditionalFormatDirective, selector: "e-conditionalformats>e-conditionalformat", inputs: { cFColor: "cFColor", format: "format", range: "range", type: "type", value: "value" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConditionalFormatDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-conditionalformats>e-conditionalformat',
                    inputs: input$2,
                    outputs: outputs$3,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * ConditionalFormat Array Directive
 * @private
 */
class ConditionalFormatsDirective extends ArrayBase {
    constructor() {
        super('conditionalformats');
    }
}
ConditionalFormatsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConditionalFormatsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ConditionalFormatsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ConditionalFormatsDirective, selector: "e-sheet>e-conditionalformats", queries: [{ propertyName: "children", predicate: ConditionalFormatDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ConditionalFormatsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-sheet>e-conditionalformats',
                    queries: {
                        children: new ContentChildren(ConditionalFormatDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$1 = ['activeCell', 'colCount', 'columns', 'conditionalFormats', 'frozenColumns', 'frozenRows', 'index', 'isProtected', 'name', 'paneTopLeftCell', 'password', 'protectSettings', 'ranges', 'rowCount', 'rows', 'selectedRange', 'showGridLines', 'showHeaders', 'state', 'topLeftCell', 'usedRange'];
let outputs$2 = [];
/**
 * `e-sheet` directive represent a sheet of the Angular Spreadsheet.
 * It must be contained in a Spreadsheet component(`ejs-spreadsheet`).
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet></e-sheet>
 *    <e-sheet></e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
class SheetDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['rows', 'columns', 'ranges', 'conditionalFormats'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
        this.directivePropList = input$1;
    }
}
SheetDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SheetDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
SheetDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: SheetDirective, selector: "e-sheets>e-sheet", inputs: { activeCell: "activeCell", colCount: "colCount", columns: "columns", conditionalFormats: "conditionalFormats", frozenColumns: "frozenColumns", frozenRows: "frozenRows", index: "index", isProtected: "isProtected", name: "name", paneTopLeftCell: "paneTopLeftCell", password: "password", protectSettings: "protectSettings", ranges: "ranges", rowCount: "rowCount", rows: "rows", selectedRange: "selectedRange", showGridLines: "showGridLines", showHeaders: "showHeaders", state: "state", topLeftCell: "topLeftCell", usedRange: "usedRange" }, queries: [{ propertyName: "childRows", first: true, predicate: RowsDirective, descendants: true }, { propertyName: "childColumns", first: true, predicate: ColumnsDirective, descendants: true }, { propertyName: "childRanges", first: true, predicate: RangesDirective, descendants: true }, { propertyName: "childConditionalFormats", first: true, predicate: ConditionalFormatsDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SheetDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-sheets>e-sheet',
                    inputs: input$1,
                    outputs: outputs$2,
                    queries: {
                        childRows: new ContentChild(RowsDirective),
                        childColumns: new ContentChild(ColumnsDirective),
                        childRanges: new ContentChild(RangesDirective),
                        childConditionalFormats: new ContentChild(ConditionalFormatsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Sheet Array Directive
 * @private
 */
class SheetsDirective extends ArrayBase {
    constructor() {
        super('sheets');
    }
}
SheetsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SheetsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
SheetsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: SheetsDirective, selector: "ejs-spreadsheet>e-sheets", queries: [{ propertyName: "children", predicate: SheetDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SheetsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-spreadsheet>e-sheets',
                    queries: {
                        children: new ContentChildren(SheetDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input = ['comment', 'name', 'refersTo', 'scope'];
let outputs$1 = [];
/**
 * `e-definedname` directive represent a defined name of the Angular Spreadsheet.
 * It must be contained in a Spreadsheet component(`ejs-spreadsheet`).
 * ```html
 * <ejs-spreadsheet>
 *   <e-definednames>
 *    <e-definedname></e-definedname>
 *    <e-definedname></e-definedname>
 *   </e-definednames>
 * </ejs-spreadsheet>
 * ```
 */
class DefinedNameDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$1);
        this.directivePropList = input;
    }
}
DefinedNameDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DefinedNameDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
DefinedNameDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: DefinedNameDirective, selector: "e-definednames>e-definedname", inputs: { comment: "comment", name: "name", refersTo: "refersTo", scope: "scope" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DefinedNameDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-definednames>e-definedname',
                    inputs: input,
                    outputs: outputs$1,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * DefinedName Array Directive
 * @private
 */
class DefinedNamesDirective extends ArrayBase {
    constructor() {
        super('definednames');
    }
}
DefinedNamesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DefinedNamesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DefinedNamesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: DefinedNamesDirective, selector: "ejs-spreadsheet>e-definednames", queries: [{ propertyName: "children", predicate: DefinedNameDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DefinedNamesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-spreadsheet>e-definednames',
                    queries: {
                        children: new ContentChildren(DefinedNameDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs = ['activeSheetIndex', 'allowAutoFill', 'allowCellFormatting', 'allowChart', 'allowConditionalFormat', 'allowDataValidation', 'allowDelete', 'allowEditing', 'allowFiltering', 'allowFindAndReplace', 'allowFreezePane', 'allowHyperlink', 'allowImage', 'allowInsert', 'allowMerge', 'allowNumberFormatting', 'allowOpen', 'allowResizing', 'allowSave', 'allowScrolling', 'allowSorting', 'allowUndoRedo', 'allowWrap', 'autoFillSettings', 'cellStyle', 'cssClass', 'definedNames', 'enableClipboard', 'enableContextMenu', 'enableKeyboardNavigation', 'enableKeyboardShortcut', 'enablePersistence', 'enableRtl', 'height', 'isProtected', 'locale', 'openUrl', 'password', 'saveUrl', 'scrollSettings', 'selectionSettings', 'sheets', 'showAggregate', 'showFormulaBar', 'showRibbon', 'showSheetTabs', 'width'];
const outputs = ['actionBegin', 'actionComplete', 'afterHyperlinkClick', 'afterHyperlinkCreate', 'beforeCellFormat', 'beforeCellRender', 'beforeCellSave', 'beforeCellUpdate', 'beforeConditionalFormat', 'beforeDataBound', 'beforeHyperlinkClick', 'beforeHyperlinkCreate', 'beforeOpen', 'beforeSave', 'beforeSelect', 'beforeSort', 'cellEdit', 'cellEditing', 'cellSave', 'contextMenuBeforeClose', 'contextMenuBeforeOpen', 'contextMenuItemSelect', 'created', 'dataBound', 'dataSourceChanged', 'dialogBeforeOpen', 'fileMenuBeforeClose', 'fileMenuBeforeOpen', 'fileMenuItemSelect', 'openComplete', 'openFailure', 'queryCellInfo', 'saveComplete', 'select', 'sortComplete'];
const twoWays = [''];
/**
 * `ejs-spreadsheet` represents the Angular Spreadsheet Component.
 * ```html
 * <ejs-spreadsheet></ejs-spreadsheet>
 * ```
 */
let SpreadsheetComponent = class SpreadsheetComponent extends Spreadsheet {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['sheets', 'definedNames'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('SpreadsheetClipboard');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('SpreadsheetEdit');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('SpreadsheetKeyboardNavigation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('SpreadsheetKeyboardShortcut');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('SpreadsheetCollaborativeEditing');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('SpreadsheetSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('SpreadsheetContextMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('SpreadsheetFormulaBar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('SpreadsheetRibbon');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            let mod = this.injector.get('SpreadsheetSave');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            let mod = this.injector.get('SpreadsheetOpen');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            let mod = this.injector.get('SpreadsheetSheetTabs');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            let mod = this.injector.get('SpreadsheetDataBind');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            let mod = this.injector.get('SpreadsheetAllModule');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            let mod = this.injector.get('SpreadsheetBasicModule');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
        try {
            let mod = this.injector.get('SpreadsheetCellFormat');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_r) { }
        try {
            let mod = this.injector.get('SpreadsheetNumberFormat');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_s) { }
        try {
            let mod = this.injector.get('SpreadsheetFormula');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_t) { }
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
        this.tagObjects[0].instance = this.childSheets;
        if (this.childDefinedNames) {
            this.tagObjects[1].instance = this.childDefinedNames;
        }
        this.context.ngAfterContentChecked(this);
    }
};
SpreadsheetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SpreadsheetComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
SpreadsheetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: SpreadsheetComponent, selector: "ejs-spreadsheet", inputs: { activeSheetIndex: "activeSheetIndex", allowAutoFill: "allowAutoFill", allowCellFormatting: "allowCellFormatting", allowChart: "allowChart", allowConditionalFormat: "allowConditionalFormat", allowDataValidation: "allowDataValidation", allowDelete: "allowDelete", allowEditing: "allowEditing", allowFiltering: "allowFiltering", allowFindAndReplace: "allowFindAndReplace", allowFreezePane: "allowFreezePane", allowHyperlink: "allowHyperlink", allowImage: "allowImage", allowInsert: "allowInsert", allowMerge: "allowMerge", allowNumberFormatting: "allowNumberFormatting", allowOpen: "allowOpen", allowResizing: "allowResizing", allowSave: "allowSave", allowScrolling: "allowScrolling", allowSorting: "allowSorting", allowUndoRedo: "allowUndoRedo", allowWrap: "allowWrap", autoFillSettings: "autoFillSettings", cellStyle: "cellStyle", cssClass: "cssClass", definedNames: "definedNames", enableClipboard: "enableClipboard", enableContextMenu: "enableContextMenu", enableKeyboardNavigation: "enableKeyboardNavigation", enableKeyboardShortcut: "enableKeyboardShortcut", enablePersistence: "enablePersistence", enableRtl: "enableRtl", height: "height", isProtected: "isProtected", locale: "locale", openUrl: "openUrl", password: "password", saveUrl: "saveUrl", scrollSettings: "scrollSettings", selectionSettings: "selectionSettings", sheets: "sheets", showAggregate: "showAggregate", showFormulaBar: "showFormulaBar", showRibbon: "showRibbon", showSheetTabs: "showSheetTabs", width: "width" }, outputs: { actionBegin: "actionBegin", actionComplete: "actionComplete", afterHyperlinkClick: "afterHyperlinkClick", afterHyperlinkCreate: "afterHyperlinkCreate", beforeCellFormat: "beforeCellFormat", beforeCellRender: "beforeCellRender", beforeCellSave: "beforeCellSave", beforeCellUpdate: "beforeCellUpdate", beforeConditionalFormat: "beforeConditionalFormat", beforeDataBound: "beforeDataBound", beforeHyperlinkClick: "beforeHyperlinkClick", beforeHyperlinkCreate: "beforeHyperlinkCreate", beforeOpen: "beforeOpen", beforeSave: "beforeSave", beforeSelect: "beforeSelect", beforeSort: "beforeSort", cellEdit: "cellEdit", cellEditing: "cellEditing", cellSave: "cellSave", contextMenuBeforeClose: "contextMenuBeforeClose", contextMenuBeforeOpen: "contextMenuBeforeOpen", contextMenuItemSelect: "contextMenuItemSelect", created: "created", dataBound: "dataBound", dataSourceChanged: "dataSourceChanged", dialogBeforeOpen: "dialogBeforeOpen", fileMenuBeforeClose: "fileMenuBeforeClose", fileMenuBeforeOpen: "fileMenuBeforeOpen", fileMenuItemSelect: "fileMenuItemSelect", openComplete: "openComplete", openFailure: "openFailure", queryCellInfo: "queryCellInfo", saveComplete: "saveComplete", select: "select", sortComplete: "sortComplete" }, queries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true }, { propertyName: "childSheets", first: true, predicate: SheetsDirective, descendants: true }, { propertyName: "childDefinedNames", first: true, predicate: DefinedNamesDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], SpreadsheetComponent.prototype, "template", void 0);
SpreadsheetComponent = __decorate([
    ComponentMixins([ComponentBase])
], SpreadsheetComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SpreadsheetComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-spreadsheet',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childSheets: new ContentChild(SheetsDirective),
                        childDefinedNames: new ContentChild(DefinedNamesDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { template: [{
                type: ContentChild,
                args: ['template']
            }] } });

/**
 * NgModule definition for the Spreadsheet component.
 */
class SpreadsheetModule {
}
SpreadsheetModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SpreadsheetModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SpreadsheetModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SpreadsheetModule, declarations: [SpreadsheetComponent,
        ImageDirective,
        ImagesDirective,
        ChartDirective,
        ChartsDirective,
        CellDirective,
        CellsDirective,
        RowDirective,
        RowsDirective,
        ColumnDirective,
        ColumnsDirective,
        RangeDirective,
        RangesDirective,
        ConditionalFormatDirective,
        ConditionalFormatsDirective,
        SheetDirective,
        SheetsDirective,
        DefinedNameDirective,
        DefinedNamesDirective], imports: [CommonModule], exports: [SpreadsheetComponent,
        ImageDirective,
        ImagesDirective,
        ChartDirective,
        ChartsDirective,
        CellDirective,
        CellsDirective,
        RowDirective,
        RowsDirective,
        ColumnDirective,
        ColumnsDirective,
        RangeDirective,
        RangesDirective,
        ConditionalFormatDirective,
        ConditionalFormatsDirective,
        SheetDirective,
        SheetsDirective,
        DefinedNameDirective,
        DefinedNamesDirective] });
SpreadsheetModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SpreadsheetModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SpreadsheetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        SpreadsheetComponent,
                        ImageDirective,
                        ImagesDirective,
                        ChartDirective,
                        ChartsDirective,
                        CellDirective,
                        CellsDirective,
                        RowDirective,
                        RowsDirective,
                        ColumnDirective,
                        ColumnsDirective,
                        RangeDirective,
                        RangesDirective,
                        ConditionalFormatDirective,
                        ConditionalFormatsDirective,
                        SheetDirective,
                        SheetsDirective,
                        DefinedNameDirective,
                        DefinedNamesDirective
                    ],
                    exports: [
                        SpreadsheetComponent,
                        ImageDirective,
                        ImagesDirective,
                        ChartDirective,
                        ChartsDirective,
                        CellDirective,
                        CellsDirective,
                        RowDirective,
                        RowsDirective,
                        ColumnDirective,
                        ColumnsDirective,
                        RangeDirective,
                        RangesDirective,
                        ConditionalFormatDirective,
                        ConditionalFormatsDirective,
                        SheetDirective,
                        SheetsDirective,
                        DefinedNameDirective,
                        DefinedNamesDirective
                    ]
                }]
        }] });

const ClipboardService = { provide: 'SpreadsheetClipboard', useValue: Clipboard };
const EditService = { provide: 'SpreadsheetEdit', useValue: Edit };
const KeyboardNavigationService = { provide: 'SpreadsheetKeyboardNavigation', useValue: KeyboardNavigation };
const KeyboardShortcutService = { provide: 'SpreadsheetKeyboardShortcut', useValue: KeyboardShortcut };
const CollaborativeEditingService = { provide: 'SpreadsheetCollaborativeEditing', useValue: CollaborativeEditing };
const SelectionService = { provide: 'SpreadsheetSelection', useValue: Selection };
const ContextMenuService = { provide: 'SpreadsheetContextMenu', useValue: ContextMenu };
const FormulaBarService = { provide: 'SpreadsheetFormulaBar', useValue: FormulaBar };
const RibbonService = { provide: 'SpreadsheetRibbon', useValue: Ribbon };
const SaveService = { provide: 'SpreadsheetSave', useValue: Save };
const OpenService = { provide: 'SpreadsheetOpen', useValue: Open };
const SheetTabsService = { provide: 'SpreadsheetSheetTabs', useValue: SheetTabs };
const DataBindService = { provide: 'SpreadsheetDataBind', useValue: DataBind };
const AllModuleService = { provide: 'SpreadsheetAllModule', useValue: AllModule };
const BasicModuleService = { provide: 'SpreadsheetBasicModule', useValue: BasicModule };
const CellFormatService = { provide: 'SpreadsheetCellFormat', useValue: CellFormat };
const NumberFormatService = { provide: 'SpreadsheetNumberFormat', useValue: NumberFormat };
const FormulaService = { provide: 'SpreadsheetFormula', useValue: Formula };
/**
 * NgModule definition for the Spreadsheet component with providers.
 */
class SpreadsheetAllModule {
}
SpreadsheetAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SpreadsheetAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SpreadsheetAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SpreadsheetAllModule, imports: [CommonModule, SpreadsheetModule], exports: [SpreadsheetModule] });
SpreadsheetAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SpreadsheetAllModule, providers: [
        ClipboardService,
        EditService,
        KeyboardNavigationService,
        KeyboardShortcutService,
        CollaborativeEditingService,
        SelectionService,
        ContextMenuService,
        FormulaBarService,
        RibbonService,
        SaveService,
        OpenService,
        SheetTabsService,
        DataBindService,
        AllModuleService,
        BasicModuleService,
        CellFormatService,
        NumberFormatService,
        FormulaService
    ], imports: [[CommonModule, SpreadsheetModule], SpreadsheetModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SpreadsheetAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SpreadsheetModule],
                    exports: [
                        SpreadsheetModule
                    ],
                    providers: [
                        ClipboardService,
                        EditService,
                        KeyboardNavigationService,
                        KeyboardShortcutService,
                        CollaborativeEditingService,
                        SelectionService,
                        ContextMenuService,
                        FormulaBarService,
                        RibbonService,
                        SaveService,
                        OpenService,
                        SheetTabsService,
                        DataBindService,
                        AllModuleService,
                        BasicModuleService,
                        CellFormatService,
                        NumberFormatService,
                        FormulaService
                    ]
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { AllModuleService, BasicModuleService, CellDirective, CellFormatService, CellsDirective, ChartDirective, ChartsDirective, ClipboardService, CollaborativeEditingService, ColumnDirective, ColumnsDirective, ConditionalFormatDirective, ConditionalFormatsDirective, ContextMenuService, DataBindService, DefinedNameDirective, DefinedNamesDirective, EditService, FormulaBarService, FormulaService, ImageDirective, ImagesDirective, KeyboardNavigationService, KeyboardShortcutService, NumberFormatService, OpenService, RangeDirective, RangesDirective, RibbonService, RowDirective, RowsDirective, SaveService, SelectionService, SheetDirective, SheetTabsService, SheetsDirective, SpreadsheetAllModule, SpreadsheetComponent, SpreadsheetModule };
//# sourceMappingURL=syncfusion-ej2-angular-spreadsheet.mjs.map
