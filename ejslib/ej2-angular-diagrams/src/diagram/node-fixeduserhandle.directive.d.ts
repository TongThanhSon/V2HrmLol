import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * Nodes Directive
 * ```html
 * <e-nodes>
 * <e-node>
 * <e-node-fixeduserhandles>
 * <e-node-fixeduserhandle>
 * </e-node-fixeduserhandle>
 * </e-node-fixeduserhandles>
 * </e-node>
 * </e-nodes>
 * ```
 */
export declare class NodeFixedUserHandleDirective extends ComplexBase<NodeFixedUserHandleDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Specifies the cornerRadius for fixed user handle container
     * @default 0
     */
    cornerRadius: any;
    /**
     * Specifies the fill color of the fixed user handle
     * @default 'transparent'
     */
    fill: any;
    /**
     * Specifies the stroke color of the fixed user handle container
     * @default ''
     */
    handleStrokeColor: any;
    /**
     * Specifies the stroke width of the fixed user handle container
     * @default 1
     */
    handleStrokeWidth: any;
    /**
     * Specifies the height of the fixed user handle
     * @default 10
     */
    height: any;
    /**
     * Specifies the stroke color of the fixed user handle
     * @default 'transparent'
     */
    iconStrokeColor: any;
    /**
     * Specifies the stroke width of the fixed user handle
     * @default 0
     */
    iconStrokeWidth: any;
    /**
     * Specifies the unique id of the fixed user handle
     * @default ''
     */
    id: any;
    /**
     * Specifies the space that the fixed user handle has to be moved from its actual position
     * @default new Margin(0,0,0,0)
     */
    margin: any;
    /**
     * Specifies the position of the node fixed user handle
     * @default { x: 0, y: 0 }
     */
    offset: any;
    /**
     * Specifies the space between the fixed user handle and container
     * @default new Margin(0,0,0,0)
     */
    padding: any;
    /**
     * Specifies the shape information for fixed user handle
     * @default ''
     */
    pathData: any;
    /**
     * Specifies the visibility of the fixed user handle
     * @default true
     */
    visibility: any;
    /**
     * Specifies the width of the fixed user handle
     * @default 10
     */
    width: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * NodeFixedUserHandle Array Directive
 * @private
 */
export declare class NodeFixedUserHandlesDirective extends ArrayBase<NodeFixedUserHandlesDirective> {
    constructor();
}
