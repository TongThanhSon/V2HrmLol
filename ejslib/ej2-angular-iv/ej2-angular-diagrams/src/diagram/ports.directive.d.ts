import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * Nodes Directive
 * ```html
 * <e-nodes>
 * <e-node>
 * <e-node-ports>
 * <e-node-port>
 * </e-node-port>
 * </e-node-ports>
 * </e-node>
 * </e-nodes>
 * ```
 */
export declare class PortDirective extends ComplexBase<PortDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Allows the user to save custom information/data about a port
     * @aspdefaultvalueignore
     * @default undefined
     */
    addInfo: any;
    /**
     * Defines the constraints of port
     * @default 'Default'
     * @aspnumberenum
     */
    constraints: any;
    /**
     * Sets the height of the port
     * @default 12
     */
    height: any;
    /**
     * Sets the horizontal alignment of the port with respect to its immediate parent(node/connector)
     * * Stretch - Stretches the diagram element throughout its immediate parent
     * * Left - Aligns the diagram element at the left of its immediate parent
     * * Right - Aligns the diagram element at the right of its immediate parent
     * * Center - Aligns the diagram element at the center of its immediate parent
     * * Auto - Aligns the diagram element based on the characteristics of its immediate parent
     * @default 'Center'
     */
    horizontalAlignment: any;
    /**
     * Defines the unique id of the port
     * @default ''
     */
    id: any;
    /**
     * Defines the collection of the objects that are connected to a particular port
     * @default undefined
     * @blazordefaultvalue new string[] { }
     */
    inEdges: any;
    /**
     * Defines the space that the port has to be moved from its actual position
     * @default new Margin(0,0,0,0)
     */
    margin: any;
    /**
     * Defines the position of the port with respect to the boundaries of nodes/connector
     * @default new Point(0.5,0.5)
     * @blazortype NodePortOffset
     */
    offset: any;
    /**
     * Defines the collection of the objects that are connected to a particular port
     * @default undefined
     * @blazordefaultvalue new string[] { }
     */
    outEdges: any;
    /**
     * Defines the geometry of the port
     * @default ''
     */
    pathData: any;
    /**
     * Defines the type of the port shape
     * * X - Sets the decorator shape as X
     * * Circle - Sets the decorator shape as Circle
     * * Square - Sets the decorator shape as Square
     * * Custom - Sets the decorator shape as Custom
     * @default 'Square'
     */
    shape: any;
    /**
     * Defines the appearance of the port
     *
     * @default {}
     */
    style: any;
    /**
     * Sets the vertical alignment of the port with respect to its immediate parent(node/connector)
     * * Stretch - Stretches the diagram element throughout its immediate parent
     * * Top - Aligns the diagram element at the top of its immediate parent
     * * Bottom - Aligns the diagram element at the bottom of its immediate parent
     * * Center - Aligns the diagram element at the center of its immediate parent
     * * Auto - Aligns the diagram element based on the characteristics of its immediate parent
     * @default 'Center'
     */
    verticalAlignment: any;
    /**
     * Defines the type of the port visibility
     * * Visible - Always shows the port
     * * Hidden - Always hides the port
     * * Hover - Shows the port when the mouse hovers over a node
     * * Connect - Shows the port when a connection end point is dragged over a node
     * @default 'Connect'
     * @aspnumberenum
     */
    visibility: any;
    /**
     * Sets the width of the port
     * @default 12
     */
    width: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<PortDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PortDirective, "e-node>e-node-ports>e-node-port", never, { "addInfo": "addInfo"; "constraints": "constraints"; "height": "height"; "horizontalAlignment": "horizontalAlignment"; "id": "id"; "inEdges": "inEdges"; "margin": "margin"; "offset": "offset"; "outEdges": "outEdges"; "pathData": "pathData"; "shape": "shape"; "style": "style"; "verticalAlignment": "verticalAlignment"; "visibility": "visibility"; "width": "width"; }, {}, never>;
}
/**
 * Port Array Directive
 * @private
 */
export declare class PortsDirective extends ArrayBase<PortsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<PortsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PortsDirective, "e-node>e-node-ports", never, {}, {}, ["children"]>;
}
