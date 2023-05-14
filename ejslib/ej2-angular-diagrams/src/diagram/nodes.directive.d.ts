import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * Nodes Directive
 * ```html
 * <e-nodes>
 * <e-node></e-node>
 * </e-nodes>
 * ```
 */
export declare class NodeDirective extends ComplexBase<NodeDirective> {
    private viewContainerRef;
    directivePropList: any;
    childFixedUserHandles: any;
    childAnnotations: any;
    childPorts: any;
    tags: string[];
    /**
     * Allows the user to save custom information/data about a node/connector
     * @aspdefaultvalueignore
     * @default undefined
     */
    addInfo: any;
    /**
     * Defines the collection of textual annotations of nodes/connectors
     * @aspdefaultvalueignore
     * @default undefined
     */
    annotations: any;
    /**
     * Sets the background color of the shape
     * @default 'transparent'
     */
    backgroundColor: any;
    /**
     * Sets the border color of the node
     * @deprecated
     * @default 'none'
     */
    borderColor: any;
    /**
     * Sets the border width of the node
     * @deprecated
     * @default 0
     */
    borderWidth: any;
    /**
     * Set the branch for the mind map
     * @aspdefaultvalueignore
     * @default ''
     */
    branch: any;
    /**
     * Defines the children of group element
     * @aspdefaultvalueignore
     * @default undefined
     */
    children: any;
    /**
     * Defines the collapsed state of a node
     * @default {}
     */
    collapseIcon: any;
    /**
     * Used to define a index of column in the grid
     * @aspdefaultvalueignore
     * @default undefined
     */
    columnIndex: any;
    /**
     * Merge the column use the property in the grid container
     * @aspdefaultvalueignore
     * @default undefined
     */
    columnSpan: any;
    /**
     * Used to define the column for the grid container
     * @aspdefaultvalueignore
     * @default undefined
     */
    columns: any;
    /**
     * Enables/Disables certain features of nodes
     * * None - Disable all node Constraints
     * * Select - Enables node to be selected
     * * Drag - Enables node to be Dragged
     * * Rotate - Enables node to be Rotate
     * * Shadow - Enables node to display shadow
     * * PointerEvents - Enables node to provide pointer  option
     * * Delete - Enables node to delete
     * * InConnect - Enables node to provide in connect option
     * * OutConnect - Enables node to provide out connect option
     * * Individual - Enables node to provide individual resize option
     * * Expandable - Enables node to provide Expandable option
     * * AllowDrop - Enables node to provide allow to drop option
     * * Inherit - Enables node to inherit the interaction option
     * * ResizeNorthEast - Enable ResizeNorthEast of the node
     * * ResizeEast - Enable ResizeEast of the node
     * * ResizeSouthEast - Enable ResizeSouthEast of the node
     * * ResizeSouth - Enable ResizeSouthWest of the node
     * * ResizeSouthWest - Enable ResizeSouthWest of the node
     * * ResizeSouth - Enable ResizeSouth of the node
     * * ResizeSouthWest - Enable ResizeSouthWest of the node
     * * ResizeWest - Enable ResizeWest of the node
     * * ResizeNorth - Enable ResizeNorth of the node
     * * Resize - Enables the Aspect ratio fo the node
     * * AspectRatio - Enables the Aspect ratio fo the node
     * * Tooltip - Enables or disables tool tip for the Nodes
     * * InheritTooltip - Enables or disables tool tip for the Nodes
     * * ReadOnly - Enables the  ReadOnly support for Annotation
     * @default 'Default'
     * @aspnumberenum
     */
    constraints: any;
    /**
     * Defines the type of the container
     * @aspdefaultvalueignore
     * @default null
     * @deprecated
     */
    container: any;
    /**
     * Sets the data source of the node
     */
    data: any;
    /**
     * Defines the size of a drop symbol
     * @aspdefaultvalueignore
     * @default undefined
     */
    dragSize: any;
    /**
     * Defines whether the node should be automatically positioned or not. Applicable, if layout option is enabled.
     * @default false
     */
    excludeFromLayout: any;
    /**
     * Defines the expanded state of a node
     * @default {}
     */
    expandIcon: any;
    /**
     * Specifies the collection of the fixed user handle
     * @aspdefaultvalueignore
     * @default undefined
     */
    fixedUserHandles: any;
    /**
     * Flip the element in Horizontal/Vertical directions
     * @aspdefaultvalueignore
     * @default None
     */
    flip: any;
    /**
     * Allows you to flip only the node or along with port and label
     * @aspdefaultvalueignore
     * @default All
     */
    flipMode: any;
    /**
     * Sets the height of the node
     * @aspdefaultvalueignore
     * @default undefined
     */
    height: any;
    /**
     * Sets the horizontalAlignment of the node
     * @default 'Stretch'
     */
    horizontalAlignment: any;
    /**
     * Represents the unique id of nodes/connectors
     * @default ''
     */
    id: any;
    /**
     * Defines whether the node is expanded or not
     * @default true
     */
    isExpanded: any;
    /**
     * Sets the layout properties using node property
     * @default new NodeLayoutInfo()
     * @asptype object
     */
    layoutInfo: any;
    /**
     * Defines the space to be left between the node and its immediate parent
     * @default {}
     */
    margin: any;
    /**
     * Sets the maximum height of the node
     * @aspdefaultvalueignore
     * @default undefined
     */
    maxHeight: any;
    /**
     * Sets the maximum width of the node
     * @aspdefaultvalueignore
     * @default undefined
     */
    maxWidth: any;
    /**
     * Sets the minimum height of the node
     * @aspdefaultvalueignore
     * @default undefined
     */
    minHeight: any;
    /**
     * Sets the minimum width of the node
     * @aspdefaultvalueignore
     * @default undefined
     */
    minWidth: any;
    /**
     * Sets the x-coordinate of the position of the node
     * @default 0
     */
    offsetX: any;
    /**
     * Sets the y-coordinate of the position of the node
     * @default 0
     */
    offsetY: any;
    /**
     * Defines the space between the group node edges and its children
     * @aspdefaultvalueignore
     * @default 0
     */
    padding: any;
    /**
     * Sets the reference point, that will act as the offset values(offsetX, offsetY) of a node
     * @default new Point(0.5,0.5)
     */
    pivot: any;
    /**
     * Defines the collection of connection points of nodes/connectors
     * @aspdefaultvalueignore
     * @default undefined
     */
    ports: any;
    /**
     * Defines the size of the symbol preview
     * @aspdefaultvalueignore
     * @default undefined
     */
    previewSize: any;
    /**
     * Sets the rotate angle of the node
     * @default 0
     */
    rotateAngle: any;
    /**
     * Used to define a index of row in the grid
     * @aspdefaultvalueignore
     * @default undefined
     */
    rowIndex: any;
    /**
     * Merge the row use the property in the grid container
     * @aspdefaultvalueignore
     * @default undefined
     */
    rowSpan: any;
    /**
     * Used to define the rows for the grid container
     * @aspdefaultvalueignore
     * @deprecated
     * @default undefined
     */
    rows: any;
    /**
     * Defines the shadow of a shape/path
     * @default null
     */
    shadow: any;
    /**
     * Defines the shape of a node
     * @default Basic Shape
     * @asptype object
     */
    shape: any;
    /**
     * Sets the shape style of the node
     * @default new ShapeStyle()
     * @asptype object
     */
    style: any;
    /**
     * Defines the symbol info of a connector
     * @aspdefaultvalueignore
     * @default undefined
     * @ignoreapilink
     */
    symbolInfo: any;
    /**
     * defines the tooltip for the node
     * @default {}
     */
    tooltip: any;
    /**
     * Sets the verticalAlignment of the node
     * @default 'Stretch'
     */
    verticalAlignment: any;
    /**
     * Sets the visibility of the node/connector
     * @default true
     */
    visible: any;
    /**
     * Sets the width of the node
     * @aspdefaultvalueignore
     * @default undefined
     */
    width: any;
    /**
     * Sets or gets the UI of a node
     * @default null
     * @deprecated
     */
    wrapper: any;
    /**
     * Defines the visual order of the node/connector in DOM
     * @default -1
     */
    zIndex: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * Node Array Directive
 * @private
 */
export declare class NodesDirective extends ArrayBase<NodesDirective> {
    constructor();
}
