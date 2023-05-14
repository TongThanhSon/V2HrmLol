import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * Connectors Directive
 * ```html
 * <e-connectors>
 * <e-connector>
 * <e-connector-fixeduserhandles>
 * <e-connector-fixeduserhandle>
 * </e-connector-fixeduserhandle>
 * </e-connector-fixeduserhandles>
 * </e-connector>
 * </e-connectors>
 * ```
 */
export declare class ConnectorFixedUserHandleDirective extends ComplexBase<ConnectorFixedUserHandleDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Specifies the segment alignment of the fixed user handle
     *  * Center - Aligns the annotation at the center of a connector segment
     *  * Before - Aligns the annotation before a connector segment
     *  * After - Aligns the annotation after a connector segment
     * @default Center
     */
    alignment: any;
    /**
     * Specifies the cornerRadius for fixed user handle container
     * @default 0
     */
    cornerRadius: any;
    /**
     * Specifies the displacement of an fixed user handle from its actual position
     * @aspdefaultvalueignore
     * @default undefined
     */
    displacement: any;
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
     * Specifies the position of the connector fixed user handle
     * @default 0.5
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
 * ConnectorFixedUserHandle Array Directive
 * @private
 */
export declare class ConnectorFixedUserHandlesDirective extends ArrayBase<ConnectorFixedUserHandlesDirective> {
    constructor();
}
