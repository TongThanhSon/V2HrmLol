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
    var DiagramHelper = (function (_super) {
        __extends(DiagramHelper, _super);
        function DiagramHelper(id, wrapperFn) {
            var _this = _super.call(this) || this;
            _this.id = id;
            if (wrapperFn !== undefined) {
                _this.wrapperFn = wrapperFn;
            }
            return _this;
        }
        DiagramHelper.prototype.getElement = function () {
            return this.selector('#' + this.id);
        };
        DiagramHelper.prototype.getBackgroundLayerElement = function () {
            return this.selector('#' + this.id + '_backgroundLayer_svg');
        };
        DiagramHelper.prototype.getGridLineLayerElement = function () {
            return this.selector('#' + this.id + '_gridline_svg');
        };
        DiagramHelper.prototype.getDiagramLayerElement = function () {
            return this.selector('#' + this.id + '_diagramLayer_div');
        };
        DiagramHelper.prototype.getNativeLayerElement = function () {
            return this.selector('#' + this.id + '_nativeLayer_svg');
        };
        DiagramHelper.prototype.getHTMLLayerElement = function () {
            return this.selector('#' + this.id + '_htmlLayer');
        };
        DiagramHelper.prototype.getAdornerLayerElement = function () {
            return this.selector('#' + this.id + '_diagramAdornerLayer');
        };
        DiagramHelper.prototype.getSelectorElment = function () {
            return this.selector('#' + this.id + '_SelectorElement');
        };
        DiagramHelper.prototype.getNodeElement = function (id) {
            return this.selector('#' + id + '_groupElement');
        };
        DiagramHelper.prototype.getPortElement = function (parentId, portId) {
            return this.selector('#' + parentId + '_' + portId);
        };
        DiagramHelper.prototype.getIconElement = function (parentId) {
            return this.selector('#' + parentId + '_icon_content_groupElement');
        };
        DiagramHelper.prototype.getConnecorElement = function (id) {
            return this.selector('#' + id + '_groupElement');
        };
        DiagramHelper.prototype.getDecoratorElement = function (connectorId, isTargetDecorator) {
            return isTargetDecorator ?
                this.selector('#' + connectorId + '_tarDec_groupElement') : this.selector('#' + connectorId + '_srcDec_groupElement');
        };
        DiagramHelper.prototype.getAnnotationElement = function (parentId, annotationId) {
            return this.selector('#' + parentId + annotationId + '_groupElement');
        };
        return DiagramHelper;
    }(e2e_1.TestHelper));
    exports.DiagramHelper = DiagramHelper;
});
