import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { Component, createElement } from 'react';
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * `SheetDirective` represent a sheet of the React Spreadsheet.
 * It must be contained in a Spreadsheet component(`SpreadsheetComponent`).
 * ```tsx
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective></SheetDirective>
 *    <SheetDirective></SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
var SheetDirective = /** @class */ (function (_super) {
    __extends(SheetDirective, _super);
    function SheetDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SheetDirective.moduleName = 'sheet';
    return SheetDirective;
}(ComplexBase));
var SheetsDirective = /** @class */ (function (_super) {
    __extends(SheetsDirective, _super);
    function SheetsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SheetsDirective.propertyName = 'sheets';
    SheetsDirective.moduleName = 'sheets';
    return SheetsDirective;
}(ComplexBase));

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * `RowDirective` represent a row of the React Spreadsheet.
 * It must be contained in a `SheetDirective`.
 * ```tsx
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective>
 *    <RowsDirective>
 *    <RowDirective></RowDirective>
 *    </RowsDirective>
 *    </SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
var RowDirective = /** @class */ (function (_super) {
    __extends$1(RowDirective, _super);
    function RowDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowDirective.moduleName = 'row';
    return RowDirective;
}(ComplexBase));
var RowsDirective = /** @class */ (function (_super) {
    __extends$1(RowsDirective, _super);
    function RowsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowsDirective.propertyName = 'rows';
    RowsDirective.moduleName = 'rows';
    return RowsDirective;
}(ComplexBase));

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * `CellDirective` represent a cell of the React Spreadsheet.
 * It must be contained in a `RowDirective`.
 * ```tsx
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective>
 *    <RowsDirective>
 *    <RowDirective>
 *    <CellsDirective>
 *    <CellDirective value='A1'></CellDirective>
 *    </CellsDirective>
 *    </RowDirective>
 *    </RowsDirective>
 *    </SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
var CellDirective = /** @class */ (function (_super) {
    __extends$2(CellDirective, _super);
    function CellDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CellDirective.moduleName = 'cell';
    return CellDirective;
}(ComplexBase));
var CellsDirective = /** @class */ (function (_super) {
    __extends$2(CellsDirective, _super);
    function CellsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CellsDirective.propertyName = 'cells';
    CellsDirective.moduleName = 'cells';
    return CellsDirective;
}(ComplexBase));

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ImageDirective = /** @class */ (function (_super) {
    __extends$3(ImageDirective, _super);
    function ImageDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageDirective.moduleName = 'image';
    return ImageDirective;
}(ComplexBase));
var ImagesDirective = /** @class */ (function (_super) {
    __extends$3(ImagesDirective, _super);
    function ImagesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImagesDirective.propertyName = 'image';
    ImagesDirective.moduleName = 'images';
    return ImagesDirective;
}(ComplexBase));

var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ChartDirective = /** @class */ (function (_super) {
    __extends$4(ChartDirective, _super);
    function ChartDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartDirective.moduleName = 'chart';
    return ChartDirective;
}(ComplexBase));
var ChartsDirective = /** @class */ (function (_super) {
    __extends$4(ChartsDirective, _super);
    function ChartsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartsDirective.propertyName = 'chart';
    ChartsDirective.moduleName = 'charts';
    return ChartsDirective;
}(ComplexBase));

var __extends$5 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * `ColumnDirective` represent a column of the React Spreadsheet.
 * It must be contained in a `SheetDirective`.
 * ```tsx
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective>
 *    <ColumnsDirective>
 *    <ColumnDirective width='100'></ColumnDirective>
 *    </ColumnsDirective>
 *    </SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
var ColumnDirective = /** @class */ (function (_super) {
    __extends$5(ColumnDirective, _super);
    function ColumnDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnDirective.moduleName = 'column';
    return ColumnDirective;
}(ComplexBase));
var ColumnsDirective = /** @class */ (function (_super) {
    __extends$5(ColumnsDirective, _super);
    function ColumnsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnsDirective.propertyName = 'columns';
    ColumnsDirective.moduleName = 'columns';
    return ColumnsDirective;
}(ComplexBase));

var __extends$6 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * `RangeDirective` represent a range of the React Spreadsheet.
 * It must be contained in a `SheetDirective`.
 * ```tsx
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective>
 *    <RangesDirective>
 *    <RangeDirective dataSource={data}></RangeDirective>
 *    </RangesDirective>
 *    </SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
var RangeDirective = /** @class */ (function (_super) {
    __extends$6(RangeDirective, _super);
    function RangeDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeDirective.moduleName = 'range';
    return RangeDirective;
}(ComplexBase));
var RangesDirective = /** @class */ (function (_super) {
    __extends$6(RangesDirective, _super);
    function RangesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangesDirective.propertyName = 'ranges';
    RangesDirective.moduleName = 'ranges';
    return RangesDirective;
}(ComplexBase));

var __extends$7 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * `ConditionalFormatDirective` represent a conditionalformat of the React Spreadsheet.
 * It must be contained in a `SheetDirective`.
 * ```tsx
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective>
 *    <ConditionalFormatsDirective>
 *    <ConditionalFormatDirective dataSource={data}></ConditionalFormatDirective>
 *    </ConditionalFormatsDirective>
 *    </SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
var ConditionalFormatDirective = /** @class */ (function (_super) {
    __extends$7(ConditionalFormatDirective, _super);
    function ConditionalFormatDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConditionalFormatDirective.moduleName = 'conditionalFormat';
    return ConditionalFormatDirective;
}(ComplexBase));
var ConditionalFormatsDirective = /** @class */ (function (_super) {
    __extends$7(ConditionalFormatsDirective, _super);
    function ConditionalFormatsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConditionalFormatsDirective.propertyName = 'conditionalFormats';
    ConditionalFormatsDirective.moduleName = 'conditionalFormats';
    return ConditionalFormatsDirective;
}(ComplexBase));

var __extends$8 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * `DefinedNameDirective` represent a defined name of the React Spreadsheet.
 * It must be contained in a Spreadsheet component(`SpreadsheetComponent`).
 * ```tsx
 * <SpreadsheetComponent>
 *   <DefinedNamesDirective>
 *    <DefinedNameDirective></DefinedNameDirective>
 *    <DefinedNameDirective></DefinedNameDirective>
 *   </DefinedNamesDirective>
 * </SpreadsheetComponent>
 * ```
 */
var DefinedNameDirective = /** @class */ (function (_super) {
    __extends$8(DefinedNameDirective, _super);
    function DefinedNameDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefinedNameDirective.moduleName = 'definedName';
    return DefinedNameDirective;
}(ComplexBase));
var DefinedNamesDirective = /** @class */ (function (_super) {
    __extends$8(DefinedNamesDirective, _super);
    function DefinedNamesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefinedNamesDirective.propertyName = 'definedNames';
    DefinedNamesDirective.moduleName = 'definedNames';
    return DefinedNamesDirective;
}(ComplexBase));

var __extends$9 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * `SpreadsheetComponent` represents the react Spreadsheet.
 * ```tsx
 * <SpreadsheetComponent />
 * ```
 */
var SpreadsheetComponent = /** @class */ (function (_super) {
    __extends$9(SpreadsheetComponent, _super);
    function SpreadsheetComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.directivekeys = { 'sheets': { 'sheet': { 'rows': { 'row': { 'cells': { 'cell': { 'images': 'image', 'charts': 'chart' } } } }, 'columns': 'column', 'ranges': 'range', 'conditionalFormats': 'conditionalFormat' } }, 'definedNames': 'definedName' };
        _this.immediateRender = false;
        _this.portals = [];
        return _this;
    }
    SpreadsheetComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return SpreadsheetComponent;
}(Spreadsheet));
applyMixins(SpreadsheetComponent, [ComponentBase, Component]);

export { SheetDirective, SheetsDirective, RowDirective, RowsDirective, CellDirective, CellsDirective, ImageDirective, ImagesDirective, ChartDirective, ChartsDirective, ColumnDirective, ColumnsDirective, RangeDirective, RangesDirective, ConditionalFormatDirective, ConditionalFormatsDirective, DefinedNameDirective, DefinedNamesDirective, SpreadsheetComponent };
export * from '@syncfusion/ej2-spreadsheet';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-spreadsheet.es5.js.map
