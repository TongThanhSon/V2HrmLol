/* eslint-disable @typescript-eslint/no-unused-vars */
import { print as printWindow, createElement } from '@syncfusion/ej2-base';
import { getElement, getClientElement } from '../utils/helper';
import { beforePrint } from '../model/constants';
/**
 * This module enables the print functionality in maps.
 *
 * @hidden
 */
var Print = /** @class */ (function () {
    /**
     * Constructor for Maps
     *
     * @param {Maps} control - Specifies the instance of the map
     */
    function Print(control) {
        this.control = control;
    }
    /**
     * To print the Maps
     *
     * @param {string[] | string | Element} elements - Specifies the element
     * @returns {void}
     * @private
     */
    Print.prototype.print = function (elements) {
        var _this = this;
        this.printWindow = window.open('', 'print', 'height=' + window.outerHeight + ',width=' + window.outerWidth + ',tabbar=no');
        this.printWindow.moveTo(0, 0);
        this.printWindow.resizeTo(screen.availWidth, screen.availHeight);
        var argsData = {
            cancel: false, htmlContent: this.getHTMLContent(elements), name: beforePrint
        };
        this.control.trigger('beforePrint', argsData, function (beforePrintArgs) {
            if (!argsData.cancel) {
                printWindow(argsData.htmlContent, _this.printWindow);
            }
        });
    };
    /**
     * To get the html string of the Maps
     *
     * @param {string[] | string | Element} elements - Specifies the html element
     * @returns {Element} - Returns the div element
     * @private
     */
    Print.prototype.getHTMLContent = function (elements) {
        var elementRect = getClientElement(this.control.element.id);
        var div = createElement('div');
        var divElement = this.control.element.cloneNode(true);
        if (this.control.isTileMap) {
            for (var i = 0; i < divElement.childElementCount; i++) {
                if (divElement.children[i].id === this.control.element.id + '_tile_parent') {
                    divElement.children[i].style.removeProperty('height');
                    divElement.children[i].style.removeProperty('width');
                    divElement.children[i].style.removeProperty('top');
                    divElement.children[i].style.removeProperty('left');
                    divElement.children[i].style.removeProperty('right');
                    divElement.children[i].style.removeProperty('overflow');
                    var svgElement = document.getElementById(this.control.element.id + '_Tile_SVG_Parent');
                    divElement.children[i].children[0].style.overflow = 'hidden';
                    divElement.children[i].children[0].style.position = 'absolute';
                    divElement.children[i].children[0].style.height = svgElement.style.height;
                    divElement.children[i].children[0].style.width = svgElement.style.width;
                    divElement.children[i].children[0].style.left = svgElement.style.left;
                    divElement.children[i].children[0].style.top = svgElement.style.top;
                    break;
                }
            }
        }
        if (elements) {
            if (elements instanceof Array) {
                Array.prototype.forEach.call(elements, function (value) {
                    div.appendChild(getElement(value).cloneNode(true));
                });
            }
            else if (elements instanceof Element) {
                div.appendChild(elements.cloneNode(true));
            }
            else {
                div.appendChild(getElement(elements).cloneNode(true));
            }
        }
        else {
            div.appendChild(divElement);
        }
        return div;
    };
    /**
     * Get module name.
     *
     * @returns {string} Returns the module name
     */
    Print.prototype.getModuleName = function () {
        return 'Print';
    };
    /**
     * To destroy the print.
     *
     * @param {Maps} maps - Specifies the instance of the maps
     * @returns {void}
     * @private
     */
    Print.prototype.destroy = function (maps) {
        /**
         * Destroy method performed here
         */
    };
    return Print;
}());
export { Print };
