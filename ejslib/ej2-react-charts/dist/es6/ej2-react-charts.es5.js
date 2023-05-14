import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { Component, createElement } from 'react';
import { AccumulationChart, BulletChart, Chart, RangeNavigator, Smithchart, Sparkline, StockChart } from '@syncfusion/ej2-charts';

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
 * `SeriesDirective` directive represent a series of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <SeriesCollectionDirective>
 * <SeriesDirective></SeriesDirective>
 * </SeriesCollectionDirective>
 * </ChartComponent>
 * ```
 */
var SeriesDirective = /** @class */ (function (_super) {
    __extends(SeriesDirective, _super);
    function SeriesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeriesDirective.moduleName = 'series';
    SeriesDirective.complexTemplate = { 'dataLabelTemplate': 'dataLabel.template' };
    return SeriesDirective;
}(ComplexBase));
var SeriesCollectionDirective = /** @class */ (function (_super) {
    __extends(SeriesCollectionDirective, _super);
    function SeriesCollectionDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeriesCollectionDirective.propertyName = 'series';
    SeriesCollectionDirective.moduleName = 'seriesCollection';
    return SeriesCollectionDirective;
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
 * `TrendlineDirective` directive represent a trendline of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <SeriesCollectionDirective>
 * <SeriesDirective>
 * <TrendlinesDirective>
 * <TrendlineDirective></TrendlineDirective>
 * </TrendlinesDirective>
 * </SeriesDirective>
 * </SeriesCollectionDirective>
 * </ChartComponent>
 * ```
 */
var TrendlineDirective = /** @class */ (function (_super) {
    __extends$1(TrendlineDirective, _super);
    function TrendlineDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrendlineDirective.moduleName = 'trendline';
    return TrendlineDirective;
}(ComplexBase));
var TrendlinesDirective = /** @class */ (function (_super) {
    __extends$1(TrendlinesDirective, _super);
    function TrendlinesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrendlinesDirective.propertyName = 'trendlines';
    TrendlinesDirective.moduleName = 'trendlines';
    return TrendlinesDirective;
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
 * `SegmentDirective` directive represent a segment of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <SeriesCollectionDirective>
 * <SeriesDirective>
 * <SegmentsDirective>
 * <SegmentDirective></SegmentDirective>
 * </SegmentsDirective>
 * </SeriesDirective>
 * </SeriesCollectionDirective>
 * </ChartComponent>
 * ```
 */
var SegmentDirective = /** @class */ (function (_super) {
    __extends$2(SegmentDirective, _super);
    function SegmentDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SegmentDirective.moduleName = 'segment';
    return SegmentDirective;
}(ComplexBase));
var SegmentsDirective = /** @class */ (function (_super) {
    __extends$2(SegmentsDirective, _super);
    function SegmentsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SegmentsDirective.propertyName = 'segments';
    SegmentsDirective.moduleName = 'segments';
    return SegmentsDirective;
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
/**
 * `Axis` directive represent a axis row of the react Chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <AxesDirective>
 * <AxisDirective></AxisDirective>
 * </AxesDirective>
 * </ChartComponent>
 * ```
 */
var AxisDirective = /** @class */ (function (_super) {
    __extends$3(AxisDirective, _super);
    function AxisDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AxisDirective.moduleName = 'axis';
    return AxisDirective;
}(ComplexBase));
var AxesDirective = /** @class */ (function (_super) {
    __extends$3(AxesDirective, _super);
    function AxesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AxesDirective.propertyName = 'axes';
    AxesDirective.moduleName = 'axes';
    return AxesDirective;
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
/**
 * `StriplineDirective` directive represent a stripline of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <StriplinesDirective>
 * <StriplineDirective></StriplineDirective>
 * </StriplinesDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </ChartComponent>
 * ```
 */
var StripLineDirective = /** @class */ (function (_super) {
    __extends$4(StripLineDirective, _super);
    function StripLineDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StripLineDirective.moduleName = 'stripLine';
    return StripLineDirective;
}(ComplexBase));
var StripLinesDirective = /** @class */ (function (_super) {
    __extends$4(StripLinesDirective, _super);
    function StripLinesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StripLinesDirective.propertyName = 'stripLines';
    StripLinesDirective.moduleName = 'stripLines';
    return StripLinesDirective;
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
 * `MultiLevelLabelDirective` directive represent a multilevellabel of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <MultiLevelLabelsDirective>
 * <MultiLevelLabelDirective></MultiLevelLabelDirective>
 * </MultiLevelLabelsDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </ChartComponent>
 * ```
 */
var MultiLevelLabelDirective = /** @class */ (function (_super) {
    __extends$5(MultiLevelLabelDirective, _super);
    function MultiLevelLabelDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiLevelLabelDirective.moduleName = 'multiLevelLabel';
    return MultiLevelLabelDirective;
}(ComplexBase));
var MultiLevelLabelsDirective = /** @class */ (function (_super) {
    __extends$5(MultiLevelLabelsDirective, _super);
    function MultiLevelLabelsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiLevelLabelsDirective.propertyName = 'multiLevelLabels';
    MultiLevelLabelsDirective.moduleName = 'multiLevelLabels';
    return MultiLevelLabelsDirective;
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
 * `CategoryDirective` directive represent a trendline of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <MultiLevelLabelsDirective>
 * <MultiLevelLabelDirective>
 * <CategoriesDirective>
 * <CategoryDirective>
 * </CategoryDirective>
 * </CategoriesDirective>
 * </MultiLevelLabelDirective>
 * </MultiLevelLabelsDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </ChartComponent>
 * ```
 */
var CategoryDirective = /** @class */ (function (_super) {
    __extends$6(CategoryDirective, _super);
    function CategoryDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryDirective.moduleName = 'category';
    return CategoryDirective;
}(ComplexBase));
var CategoriesDirective = /** @class */ (function (_super) {
    __extends$6(CategoriesDirective, _super);
    function CategoriesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoriesDirective.propertyName = 'categories';
    CategoriesDirective.moduleName = 'categories';
    return CategoriesDirective;
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
 * `Row` directive represent a axis row of the react Chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <RowsDirective>
 * <RowDirective></RowDirective>
 * </RowsDirective>
 * </ChartComponent>
 * ```
 */
var RowDirective = /** @class */ (function (_super) {
    __extends$7(RowDirective, _super);
    function RowDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowDirective.moduleName = 'row';
    return RowDirective;
}(ComplexBase));
var RowsDirective = /** @class */ (function (_super) {
    __extends$7(RowsDirective, _super);
    function RowsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowsDirective.propertyName = 'rows';
    RowsDirective.moduleName = 'rows';
    return RowsDirective;
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
 * `Column` directive represent a axis column of the react Chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <ColumnsDirective>
 * <ColumnDirective></ColumnDirective>
 * </ColumnsDirective>
 * </ChartComponent>
 * ```
 */
var ColumnDirective = /** @class */ (function (_super) {
    __extends$8(ColumnDirective, _super);
    function ColumnDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnDirective.moduleName = 'column';
    return ColumnDirective;
}(ComplexBase));
var ColumnsDirective = /** @class */ (function (_super) {
    __extends$8(ColumnsDirective, _super);
    function ColumnsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnsDirective.propertyName = 'columns';
    ColumnsDirective.moduleName = 'columns';
    return ColumnsDirective;
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
 * `RangeColorSetting` directive represent range color mapping of the react Chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <RangeColorSettingsDirective>
 * <RangeColorSettingDirective></RangeColorSettingDirective>
 * </RangeColorSettingsDirective>
 * </ChartComponent>
 * ```
 */
var RangeColorSettingDirective = /** @class */ (function (_super) {
    __extends$9(RangeColorSettingDirective, _super);
    function RangeColorSettingDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeColorSettingDirective.moduleName = 'rangeColorSetting';
    return RangeColorSettingDirective;
}(ComplexBase));
var RangeColorSettingsDirective = /** @class */ (function (_super) {
    __extends$9(RangeColorSettingsDirective, _super);
    function RangeColorSettingsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeColorSettingsDirective.propertyName = 'rangeColorSettings';
    RangeColorSettingsDirective.moduleName = 'rangeColorSettings';
    return RangeColorSettingsDirective;
}(ComplexBase));

var __extends$10 = (undefined && undefined.__extends) || (function () {
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
 * `Annotation` directive represent a annotation of the react Chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <AnnotationsDirective>
 * <AnnotationDirective></AnnotationDirective>
 * </AnnotationsDirective>
 * </ChartComponent>
 * ```
 */
var AnnotationDirective = /** @class */ (function (_super) {
    __extends$10(AnnotationDirective, _super);
    function AnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnotationDirective.moduleName = 'annotation';
    return AnnotationDirective;
}(ComplexBase));
var AnnotationsDirective = /** @class */ (function (_super) {
    __extends$10(AnnotationsDirective, _super);
    function AnnotationsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnotationsDirective.propertyName = 'annotations';
    AnnotationsDirective.moduleName = 'annotations';
    return AnnotationsDirective;
}(ComplexBase));

var __extends$11 = (undefined && undefined.__extends) || (function () {
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
 * `SelectedDataIndex` directive represent the selected data in react Chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <SelectedDataIndexesDirective>
 * <SelectedDataIndexDirective></SelectedDataIndexDirective>
 * </SelectedDataIndexesDirective>
 * </ChartComponent>
 * ```
 */
var SelectedDataIndexDirective = /** @class */ (function (_super) {
    __extends$11(SelectedDataIndexDirective, _super);
    function SelectedDataIndexDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectedDataIndexDirective.moduleName = 'selectedDataIndex';
    return SelectedDataIndexDirective;
}(ComplexBase));
var SelectedDataIndexesDirective = /** @class */ (function (_super) {
    __extends$11(SelectedDataIndexesDirective, _super);
    function SelectedDataIndexesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectedDataIndexesDirective.propertyName = 'selectedDataIndexes';
    SelectedDataIndexesDirective.moduleName = 'selectedDataIndexes';
    return SelectedDataIndexesDirective;
}(ComplexBase));

var __extends$12 = (undefined && undefined.__extends) || (function () {
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
 * `IndicatorDirective` directive represent a indicator of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <IndicatorsDirective>
 * <IndicatorDirective></IndicatorDirective>
 * </IndicatorsDirective>
 * </ChartComponent>
 * ```
 */
var IndicatorDirective = /** @class */ (function (_super) {
    __extends$12(IndicatorDirective, _super);
    function IndicatorDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndicatorDirective.moduleName = 'indicator';
    return IndicatorDirective;
}(ComplexBase));
var IndicatorsDirective = /** @class */ (function (_super) {
    __extends$12(IndicatorsDirective, _super);
    function IndicatorsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndicatorsDirective.propertyName = 'indicators';
    IndicatorsDirective.moduleName = 'indicators';
    return IndicatorsDirective;
}(ComplexBase));

var __extends$13 = (undefined && undefined.__extends) || (function () {
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
 * Represents react Chart Component
 * ```tsx
 * <ChartComponent></ChartComponent>
 * ```
 */
var ChartComponent = /** @class */ (function (_super) {
    __extends$13(ChartComponent, _super);
    function ChartComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.directivekeys = { 'seriesCollection': { 'series': { 'trendlines': 'trendline', 'segments': 'segment' } }, 'axes': { 'axis': { 'stripLines': 'stripLine', 'multiLevelLabels': { 'multiLevelLabel': { 'categories': 'category' } } } }, 'rows': 'row', 'columns': 'column', 'rangeColorSettings': 'rangeColorSetting', 'annotations': 'annotation', 'selectedDataIndexes': 'selectedDataIndex', 'indicators': 'indicator' };
        _this.immediateRender = false;
        _this.portals = [];
        return _this;
    }
    ChartComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return ChartComponent;
}(Chart));
applyMixins(ChartComponent, [ComponentBase, Component]);

var __extends$14 = (undefined && undefined.__extends) || (function () {
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
 * `AccumulationSeriesDirective` directive represent a series of the react AccumulationChart.
 * It must be contained in a Pie component(`AccumulationChart`).
 * ```tsx
 * <AccumulationChartComponent>
 * <AccumulationSeriesCollectionDirective>
 * <AccumulationSeriesDirective></AccumulationSeriesDirective>
 * </AccumulationSeriesCollectionDirective>
 * </AccumulationChartComponent>
 * ```
 */
var AccumulationSeriesDirective = /** @class */ (function (_super) {
    __extends$14(AccumulationSeriesDirective, _super);
    function AccumulationSeriesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccumulationSeriesDirective.moduleName = 'accumulationSeries';
    AccumulationSeriesDirective.complexTemplate = { 'dataLabelTemplate': 'dataLabel.template' };
    return AccumulationSeriesDirective;
}(ComplexBase));
var AccumulationSeriesCollectionDirective = /** @class */ (function (_super) {
    __extends$14(AccumulationSeriesCollectionDirective, _super);
    function AccumulationSeriesCollectionDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccumulationSeriesCollectionDirective.propertyName = 'series';
    AccumulationSeriesCollectionDirective.moduleName = 'accumulationSeriesCollection';
    return AccumulationSeriesCollectionDirective;
}(ComplexBase));

var __extends$15 = (undefined && undefined.__extends) || (function () {
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
 * `AccumulationAnnotationsDirective` directive represent a annotation of the react AccumulationChart.
 * It must be contained in a Pie component(`AccumulationChart`).
 * ```tsx
 * <AccumulationChartComponent>
 * <AccumulationAnnotationsDirective>
 * <AccumulationAnnotationDirective></AccumulationAnnotationDirective>
 * </AccumulationAnnotationsDirective>
 * </AccumulationChartComponent>
 * ```
 */
var AccumulationAnnotationDirective = /** @class */ (function (_super) {
    __extends$15(AccumulationAnnotationDirective, _super);
    function AccumulationAnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccumulationAnnotationDirective.moduleName = 'accumulationAnnotation';
    return AccumulationAnnotationDirective;
}(ComplexBase));
var AccumulationAnnotationsDirective = /** @class */ (function (_super) {
    __extends$15(AccumulationAnnotationsDirective, _super);
    function AccumulationAnnotationsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccumulationAnnotationsDirective.propertyName = 'annotations';
    AccumulationAnnotationsDirective.moduleName = 'accumulationAnnotations';
    return AccumulationAnnotationsDirective;
}(ComplexBase));

var __extends$16 = (undefined && undefined.__extends) || (function () {
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
 * Represents react AccumulationChart Component
 * ```tsx
 * <AccumulationChartComponent></AccumulationChartComponent>
 * ```
 */
var AccumulationChartComponent = /** @class */ (function (_super) {
    __extends$16(AccumulationChartComponent, _super);
    function AccumulationChartComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.directivekeys = { 'accumulationSeriesCollection': 'accumulationSeries', 'accumulationAnnotations': 'accumulationAnnotation' };
        _this.immediateRender = false;
        _this.portals = [];
        return _this;
    }
    AccumulationChartComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return AccumulationChartComponent;
}(AccumulationChart));
applyMixins(AccumulationChartComponent, [ComponentBase, Component]);

var __extends$17 = (undefined && undefined.__extends) || (function () {
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
 * `rangenavigatorSeriesDirective` directive represent a series of the react AccumulationChart.
 * It must be contained in a Rangenavigator component(`Rangenavigator`).
 * ```tsx
 * <RangenavigatorComponent>
 * <RangenavigatorSeriesCollectionDirective>
 * <RangenavigatorSeriesDirective></RangenavigatorSeriesDirective>
 * </RangenavigatorSeriesCollectionDirective>
 * </RangenavigatorChartComponent>
 * ```
 */
var RangenavigatorSeriesDirective = /** @class */ (function (_super) {
    __extends$17(RangenavigatorSeriesDirective, _super);
    function RangenavigatorSeriesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangenavigatorSeriesDirective.moduleName = 'rangenavigatorSeries';
    return RangenavigatorSeriesDirective;
}(ComplexBase));
var RangenavigatorSeriesCollectionDirective = /** @class */ (function (_super) {
    __extends$17(RangenavigatorSeriesCollectionDirective, _super);
    function RangenavigatorSeriesCollectionDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangenavigatorSeriesCollectionDirective.propertyName = 'series';
    RangenavigatorSeriesCollectionDirective.moduleName = 'rangenavigatorSeriesCollection';
    return RangenavigatorSeriesCollectionDirective;
}(ComplexBase));

var __extends$18 = (undefined && undefined.__extends) || (function () {
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
 * Represents react RangeNavigator Component
 * ```tsx
 * <RangeNavigatorComponent></RangeNavigatorComponent>
 * ```
 */
var RangeNavigatorComponent = /** @class */ (function (_super) {
    __extends$18(RangeNavigatorComponent, _super);
    function RangeNavigatorComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.directivekeys = { 'rangenavigatorSeriesCollection': 'rangenavigatorSeries' };
        _this.immediateRender = false;
        _this.portals = [];
        return _this;
    }
    RangeNavigatorComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return RangeNavigatorComponent;
}(RangeNavigator));
applyMixins(RangeNavigatorComponent, [ComponentBase, Component]);

var __extends$19 = (undefined && undefined.__extends) || (function () {
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
var RangeBandSettingDirective = /** @class */ (function (_super) {
    __extends$19(RangeBandSettingDirective, _super);
    function RangeBandSettingDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeBandSettingDirective.moduleName = 'rangeBandSetting';
    return RangeBandSettingDirective;
}(ComplexBase));
var RangeBandSettingsDirective = /** @class */ (function (_super) {
    __extends$19(RangeBandSettingsDirective, _super);
    function RangeBandSettingsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeBandSettingsDirective.propertyName = 'rangeBandSettings';
    RangeBandSettingsDirective.moduleName = 'rangeBandSettings';
    return RangeBandSettingsDirective;
}(ComplexBase));

var __extends$20 = (undefined && undefined.__extends) || (function () {
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
 * Represents react Sparkline Component
 * ```tsx
 * <SparklineComponent></SparklineComponent>
 * ```
 */
var SparklineComponent = /** @class */ (function (_super) {
    __extends$20(SparklineComponent, _super);
    function SparklineComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.directivekeys = { 'rangeBandSettings': 'rangeBandSetting' };
        _this.immediateRender = true;
        _this.portals = [];
        return _this;
    }
    SparklineComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return SparklineComponent;
}(Sparkline));
applyMixins(SparklineComponent, [ComponentBase, Component]);

var __extends$21 = (undefined && undefined.__extends) || (function () {
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
var SmithchartSeriesDirective = /** @class */ (function (_super) {
    __extends$21(SmithchartSeriesDirective, _super);
    function SmithchartSeriesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmithchartSeriesDirective.moduleName = 'smithchartSeries';
    return SmithchartSeriesDirective;
}(ComplexBase));
var SmithchartSeriesCollectionDirective = /** @class */ (function (_super) {
    __extends$21(SmithchartSeriesCollectionDirective, _super);
    function SmithchartSeriesCollectionDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmithchartSeriesCollectionDirective.propertyName = 'series';
    SmithchartSeriesCollectionDirective.moduleName = 'smithchartSeriesCollection';
    return SmithchartSeriesCollectionDirective;
}(ComplexBase));

var __extends$22 = (undefined && undefined.__extends) || (function () {
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
 * Represents react Smithchart Component
 * ```tsx
 * <SmithchartComponent></SmithchartComponent>
 * ```
 */
var SmithchartComponent = /** @class */ (function (_super) {
    __extends$22(SmithchartComponent, _super);
    function SmithchartComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.directivekeys = { 'smithchartSeriesCollection': 'smithchartSeries' };
        _this.immediateRender = true;
        _this.portals = [];
        return _this;
    }
    SmithchartComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return SmithchartComponent;
}(Smithchart));
applyMixins(SmithchartComponent, [ComponentBase, Component]);

var __extends$23 = (undefined && undefined.__extends) || (function () {
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
 * `SeriesDirective` directive represent a series of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <StockChartComponent>
 * <StockChartSeriesCollectionDirective>
 * <StockChartSeriesDirective></SeriesDirective>
 * </StockChartSeriesCollectionDirective>
 * </StockChartComponent>
 * ```
 */
var StockChartSeriesDirective = /** @class */ (function (_super) {
    __extends$23(StockChartSeriesDirective, _super);
    function StockChartSeriesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartSeriesDirective.moduleName = 'stockChartSeries';
    return StockChartSeriesDirective;
}(ComplexBase));
var StockChartSeriesCollectionDirective = /** @class */ (function (_super) {
    __extends$23(StockChartSeriesCollectionDirective, _super);
    function StockChartSeriesCollectionDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartSeriesCollectionDirective.propertyName = 'series';
    StockChartSeriesCollectionDirective.moduleName = 'stockChartSeriesCollection';
    return StockChartSeriesCollectionDirective;
}(ComplexBase));

var __extends$24 = (undefined && undefined.__extends) || (function () {
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
 * `TrendlineDirective` directive represent a trendline of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <StockChartComponent>
 * <StockChartSeriesCollectionDirective>
 * <StockSeriesDirective>
 * <TrendlinesDirective>
 * <TrendlineDirective></TrendlineDirective>
 * </TrendlinesDirective>
 * </StockChartSeriesDirective>
 * </StockChartSeriesCollectionDirective>
 * </StockChartComponent>
 * ```
 */
var StockChartTrendlineDirective = /** @class */ (function (_super) {
    __extends$24(StockChartTrendlineDirective, _super);
    function StockChartTrendlineDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartTrendlineDirective.moduleName = 'stockChartTrendline';
    return StockChartTrendlineDirective;
}(ComplexBase));
var StockChartTrendlinesDirective = /** @class */ (function (_super) {
    __extends$24(StockChartTrendlinesDirective, _super);
    function StockChartTrendlinesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartTrendlinesDirective.propertyName = 'trendlines';
    StockChartTrendlinesDirective.moduleName = 'stockChartTrendlines';
    return StockChartTrendlinesDirective;
}(ComplexBase));

var __extends$25 = (undefined && undefined.__extends) || (function () {
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
 * `Axis` directive represent a axis row of the react Chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <StockChartComponent>
 * <StockChartAxesDirective>
 * <StockChartAxisDirective></StockChartAxisDirective>
 * </StockChartAxesDirective>
 * </StockChartComponent>
 * ```
 */
var StockChartAxisDirective = /** @class */ (function (_super) {
    __extends$25(StockChartAxisDirective, _super);
    function StockChartAxisDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartAxisDirective.moduleName = 'stockChartAxis';
    return StockChartAxisDirective;
}(ComplexBase));
var StockChartAxesDirective = /** @class */ (function (_super) {
    __extends$25(StockChartAxesDirective, _super);
    function StockChartAxesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartAxesDirective.propertyName = 'axes';
    StockChartAxesDirective.moduleName = 'stockChartAxes';
    return StockChartAxesDirective;
}(ComplexBase));

var __extends$26 = (undefined && undefined.__extends) || (function () {
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
 * `Row` directive represent a axis row of the react Chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <StockChartComponent>
 * <RowsDirective>
 * <RowDirective></RowDirective>
 * </RowsDirective>
 * </ChartComponent>
 * ```
 */
var StockChartRowDirective = /** @class */ (function (_super) {
    __extends$26(StockChartRowDirective, _super);
    function StockChartRowDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartRowDirective.moduleName = 'stockChartRow';
    return StockChartRowDirective;
}(ComplexBase));
var StockChartRowsDirective = /** @class */ (function (_super) {
    __extends$26(StockChartRowsDirective, _super);
    function StockChartRowsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartRowsDirective.propertyName = 'rows';
    StockChartRowsDirective.moduleName = 'stockChartRows';
    return StockChartRowsDirective;
}(ComplexBase));

var __extends$27 = (undefined && undefined.__extends) || (function () {
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
 * `Annotation` directive represent a annotation of the react Chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <StockChartComponent>
 * <StockChartAnnotationsDirective>
 * <StockChartAnnotationDirective></StockChartAnnotationDirective>
 * </StockChartAnnotationsDirective>
 * </StockChartComponent>
 * ```
 */
var StockChartAnnotationDirective = /** @class */ (function (_super) {
    __extends$27(StockChartAnnotationDirective, _super);
    function StockChartAnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartAnnotationDirective.moduleName = 'stockChartAnnotation';
    return StockChartAnnotationDirective;
}(ComplexBase));
var StockChartAnnotationsDirective = /** @class */ (function (_super) {
    __extends$27(StockChartAnnotationsDirective, _super);
    function StockChartAnnotationsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartAnnotationsDirective.propertyName = 'annotations';
    StockChartAnnotationsDirective.moduleName = 'stockChartAnnotations';
    return StockChartAnnotationsDirective;
}(ComplexBase));

var __extends$28 = (undefined && undefined.__extends) || (function () {
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
 * `SelectedDataIndex` directive represent the selected data in react Chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <SelectedDataIndexesDirective>
 * <SelectedDataIndexDirective></SelectedDataIndexDirective>
 * </SelectedDataIndexesDirective>
 * </ChartComponent>
 * ```
 */
var StockChartSelectedDataIndexDirective = /** @class */ (function (_super) {
    __extends$28(StockChartSelectedDataIndexDirective, _super);
    function StockChartSelectedDataIndexDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartSelectedDataIndexDirective.moduleName = 'stockChartSelectedDataIndex';
    return StockChartSelectedDataIndexDirective;
}(ComplexBase));
var StockChartSelectedDataIndexesDirective = /** @class */ (function (_super) {
    __extends$28(StockChartSelectedDataIndexesDirective, _super);
    function StockChartSelectedDataIndexesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartSelectedDataIndexesDirective.propertyName = 'selectedDataIndexes';
    StockChartSelectedDataIndexesDirective.moduleName = 'stockChartSelectedDataIndexes';
    return StockChartSelectedDataIndexesDirective;
}(ComplexBase));

var __extends$29 = (undefined && undefined.__extends) || (function () {
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
 * `IndicatorDirective` directive represent a indicator of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <StockChartComponent>
 * <StockChartIndicatorsDirective>
 * <StockChartIndicatorDirective></StockChartIndicatorDirective>
 * </StockChartIndicatorsDirective>
 * </StockChartComponent>
 * ```
 */
var StockChartPeriodDirective = /** @class */ (function (_super) {
    __extends$29(StockChartPeriodDirective, _super);
    function StockChartPeriodDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartPeriodDirective.moduleName = 'stockChartPeriod';
    return StockChartPeriodDirective;
}(ComplexBase));
var StockChartPeriodsDirective = /** @class */ (function (_super) {
    __extends$29(StockChartPeriodsDirective, _super);
    function StockChartPeriodsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartPeriodsDirective.propertyName = 'periods';
    StockChartPeriodsDirective.moduleName = 'stockChartPeriods';
    return StockChartPeriodsDirective;
}(ComplexBase));

var __extends$30 = (undefined && undefined.__extends) || (function () {
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
 * `StockChartStockEvents` directive represent a stockevent of the react chart.
 * It must be contained in a Chart component(`StockChartComponent`).
 * ```tsx
 * <StockChartComponent>
 * <StockChartStockEventsDirective>
 * <StockChartStockEventDirective></StockChartStockEventDirective>
 * </StockChartStockEventsDirective>
 * </StockChartComponent>
 * ```
 */
var StockEventDirective = /** @class */ (function (_super) {
    __extends$30(StockEventDirective, _super);
    function StockEventDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockEventDirective.moduleName = 'stockEvent';
    return StockEventDirective;
}(ComplexBase));
var StockEventsDirective = /** @class */ (function (_super) {
    __extends$30(StockEventsDirective, _super);
    function StockEventsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockEventsDirective.propertyName = 'stockEvents';
    StockEventsDirective.moduleName = 'stockEvents';
    return StockEventsDirective;
}(ComplexBase));

var __extends$31 = (undefined && undefined.__extends) || (function () {
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
 * `IndicatorDirective` directive represent a indicator of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <StockChartComponent>
 * <StockChartIndicatorsDirective>
 * <StockChartIndicatorDirective></StockChartIndicatorDirective>
 * </StockChartIndicatorsDirective>
 * </StockChartComponent>
 * ```
 */
var StockChartIndicatorDirective = /** @class */ (function (_super) {
    __extends$31(StockChartIndicatorDirective, _super);
    function StockChartIndicatorDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartIndicatorDirective.moduleName = 'stockChartIndicator';
    return StockChartIndicatorDirective;
}(ComplexBase));
var StockChartIndicatorsDirective = /** @class */ (function (_super) {
    __extends$31(StockChartIndicatorsDirective, _super);
    function StockChartIndicatorsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartIndicatorsDirective.propertyName = 'indicators';
    StockChartIndicatorsDirective.moduleName = 'stockChartIndicators';
    return StockChartIndicatorsDirective;
}(ComplexBase));

var __extends$32 = (undefined && undefined.__extends) || (function () {
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
 * Represents react Chart Component
 * ```tsx
 * <StockChartComponent></StockChartComponent>
 * ```
 */
var StockChartComponent = /** @class */ (function (_super) {
    __extends$32(StockChartComponent, _super);
    function StockChartComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.directivekeys = { 'stockChartSeriesCollection': { 'stockChartSeries': { 'stockChartTrendlines': 'stockChartTrendline' } }, 'stockChartAxes': 'stockChartAxis', 'stockChartRows': 'stockChartRow', 'stockChartAnnotations': 'stockChartAnnotation', 'stockChartSelectedDataIndexes': 'stockChartSelectedDataIndex', 'stockChartPeriods': 'stockChartPeriod', 'stockEvents': 'stockEvent', 'stockChartIndicators': 'stockChartIndicator' };
        _this.immediateRender = false;
        _this.portals = [];
        return _this;
    }
    StockChartComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return StockChartComponent;
}(StockChart));
applyMixins(StockChartComponent, [ComponentBase, Component]);

var __extends$33 = (undefined && undefined.__extends) || (function () {
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
 * `BulletRangeDirective` directive represent a ranges of the react BulletChart.
 * ```tsx
 * <BulletChartComponent>
 * <BulletRangeCollectionDirective>
 * <BulletRangeDirective></BulletRangeDirective>
 * </BulletRangeCollectionDirective>
 * </BulletChartComponent>
 * ```
 */
var BulletRangeDirective = /** @class */ (function (_super) {
    __extends$33(BulletRangeDirective, _super);
    function BulletRangeDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BulletRangeDirective.moduleName = 'bulletRange';
    return BulletRangeDirective;
}(ComplexBase));
var BulletRangeCollectionDirective = /** @class */ (function (_super) {
    __extends$33(BulletRangeCollectionDirective, _super);
    function BulletRangeCollectionDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BulletRangeCollectionDirective.propertyName = 'ranges';
    BulletRangeCollectionDirective.moduleName = 'bulletRangeCollection';
    return BulletRangeCollectionDirective;
}(ComplexBase));

var __extends$34 = (undefined && undefined.__extends) || (function () {
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
 * Represents react BulletChart Component
 * ```tsx
 * <BulletChartComponent></BulletChartComponent>
 * ```
 */
var BulletChartComponent = /** @class */ (function (_super) {
    __extends$34(BulletChartComponent, _super);
    function BulletChartComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.directivekeys = { 'bulletRangeCollection': 'bulletRange' };
        _this.immediateRender = false;
        _this.portals = [];
        return _this;
    }
    BulletChartComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return BulletChartComponent;
}(BulletChart));
applyMixins(BulletChartComponent, [ComponentBase, Component]);

export { SeriesDirective, SeriesCollectionDirective, TrendlineDirective, TrendlinesDirective, SegmentDirective, SegmentsDirective, AxisDirective, AxesDirective, StripLineDirective, StripLinesDirective, MultiLevelLabelDirective, MultiLevelLabelsDirective, CategoryDirective, CategoriesDirective, RowDirective, RowsDirective, ColumnDirective, ColumnsDirective, RangeColorSettingDirective, RangeColorSettingsDirective, AnnotationDirective, AnnotationsDirective, SelectedDataIndexDirective, SelectedDataIndexesDirective, IndicatorDirective, IndicatorsDirective, ChartComponent, AccumulationSeriesDirective, AccumulationSeriesCollectionDirective, AccumulationAnnotationDirective, AccumulationAnnotationsDirective, AccumulationChartComponent, RangenavigatorSeriesDirective, RangenavigatorSeriesCollectionDirective, RangeNavigatorComponent, RangeBandSettingDirective, RangeBandSettingsDirective, SparklineComponent, SmithchartSeriesDirective, SmithchartSeriesCollectionDirective, SmithchartComponent, StockChartSeriesDirective, StockChartSeriesCollectionDirective, StockChartTrendlineDirective, StockChartTrendlinesDirective, StockChartAxisDirective, StockChartAxesDirective, StockChartRowDirective, StockChartRowsDirective, StockChartAnnotationDirective, StockChartAnnotationsDirective, StockChartSelectedDataIndexDirective, StockChartSelectedDataIndexesDirective, StockChartPeriodDirective, StockChartPeriodsDirective, StockEventDirective, StockEventsDirective, StockChartIndicatorDirective, StockChartIndicatorsDirective, StockChartComponent, BulletRangeDirective, BulletRangeCollectionDirective, BulletChartComponent };
export * from '@syncfusion/ej2-charts';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-charts.es5.js.map
