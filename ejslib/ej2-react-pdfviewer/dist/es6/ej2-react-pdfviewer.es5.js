import { Component, createElement } from 'react';
import { PdfViewer } from '@syncfusion/ej2-pdfviewer';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';

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
 * `Represents the react PdfViewer Component.
 * ```tsx
 * <PdfViewerComponent />
 * ```
 */
var PdfViewerComponent = /** @class */ (function (_super) {
    __extends(PdfViewerComponent, _super);
    function PdfViewerComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = true;
        _this.immediateRender = true;
        _this.portals = [];
        return _this;
    }
    PdfViewerComponent.prototype.render = function () {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return PdfViewerComponent;
}(PdfViewer));
applyMixins(PdfViewerComponent, [ComponentBase, Component]);

export { PdfViewerComponent };
export * from '@syncfusion/ej2-pdfviewer';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-pdfviewer.es5.js.map
