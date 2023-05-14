var __extends = (this && this.__extends) || (function () {
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
define(["require", "exports", "@syncfusion/ej2-base/helpers/e2e"], function (require, exports, e2e_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OverviewHelper = (function (_super) {
        __extends(OverviewHelper, _super);
        function OverviewHelper(id, wrapperFn) {
            var _this = _super.call(this) || this;
            _this.id = id;
            if (wrapperFn !== undefined) {
                _this.wrapperFn = wrapperFn;
            }
            return _this;
        }
        OverviewHelper.prototype.getDiagramLayer = function () {
            return this.selector('#' + this.id + '_diagramLayer_div');
        };
        OverviewHelper.prototype.getHtmlLayer = function () {
            return this.selector('#' + this.id + '_htmlLayer');
        };
        OverviewHelper.prototype.getHandle = function () {
            return this.selector('#' + this.id + '_canvasoverviewhandle');
        };
        return OverviewHelper;
    }(e2e_1.TestHelper));
    exports.OverviewHelper = OverviewHelper;
});
