import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * Connectors Directive
 * ```html
 * <e-connectors>
 * <e-connector>
 * <e-connector-annotations>
 * <e-connector-annotation>
 * </e-connector-annotation>
 * </e-connector-annotations>
 * </e-connector>
 * </e-connectors>
 * ```
 */
export declare class ConnectorAnnotationDirective extends ComplexBase<ConnectorAnnotationDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Sets the type of the annotation
     *  * Shape - Sets the annotation type as Shape
     *  * Path - Sets the annotation type as Path
     * @default 'Shape'
     */
    type: any;
    /**
     * Allows the user to save custom information/data about an annotation
     *
     * @aspdefaultvalueignore
     * @default undefined
     */
    addInfo: any;
    /**
     * Sets the segment alignment of annotation
     *  * Center - Aligns the annotation at the center of a connector segment
     *  * Before - Aligns the annotation before a connector segment
     *  * After - Aligns the annotation after a connector segment
     * @default Center
     */
    alignment: any;
    /**
     *  Defines the type of annotation template
     * String -  Defines annotation template to be in string
     * Template - Defines annotation template to be in html content
     * @default 'String'
     */
    annotationType: any;
    /**
     * Enables or disables the default behaviors of the label.
     * * ReadOnly - Enables/Disables the ReadOnly Constraints
     * * InheritReadOnly - Enables/Disables the InheritReadOnly Constraints
     * @default 'InheritReadOnly'
     * @aspnumberenum
     */
    constraints: any;
    /**
     * Sets the textual description of the node/connector
     * @default ''
     */
    content: any;
    /**
     * Sets the displacement of an annotation from its actual position
     * @aspdefaultvalueignore
     * @blazordefaultvalueignore
     * @default undefined
     */
    displacement: any;
    /**
     * Sets the space to be left between an annotation and its parent node/connector
     * @default new Margin(20,20,20,20)
     */
    dragLimit: any;
    /**
     * Sets the height of the text
     * @aspdefaultvalueignore
     * @default undefined
     */
    height: any;
    /**
     * Sets the horizontal alignment of the text with respect to the parent node/connector
     * * Stretch - Stretches the diagram element throughout its immediate parent
     * * Left - Aligns the diagram element at the left of its immediate parent
     * * Right - Aligns the diagram element at the right of its immediate parent
     * * Center - Aligns the diagram element at the center of its immediate parent
     * * Auto - Aligns the diagram element based on the characteristics of its immediate parent
     * @default 'Center'
     */
    horizontalAlignment: any;
    /**
     * Sets the hyperlink of the label
     *
     * @aspdefaultvalueignore
     * @default undefined
     */
    hyperlink: any;
    /**
     * Defines the unique id of the annotation
     * @default ''
     */
    id: any;
    /**
     * Sets the space to be left between an annotation and its parent node/connector
     * @default new Margin(0,0,0,0)
     */
    margin: any;
    /**
     * Sets the segment offset of annotation
     * @default 0.5
     */
    offset: any;
    /**
     * Sets the rotate angle of the text
     * @default 0
     */
    rotateAngle: any;
    /**
     * Enable/Disable the angle based on the connector segment
     * @default false
     */
    segmentAngle: any;
    /**
     * Defines the appearance of the text
     * @default new TextStyle()
     */
    style: any;
    /**
     * Sets the textual description of the node/connector
     * @default 'undefined'
     */
    template: any;
    /**
     * Sets the vertical alignment of the text with respect to the parent node/connector
     * * Stretch - Stretches the diagram element throughout its immediate parent
     * * Top - Aligns the diagram element at the top of its immediate parent
     * * Bottom - Aligns the diagram element at the bottom of its immediate parent
     * * Center - Aligns the diagram element at the center of its immediate parent
     * * Auto - Aligns the diagram element based on the characteristics of its immediate parent
     * @default 'Center'
     */
    verticalAlignment: any;
    /**
     * Defines the visibility of the label
     * @default true
     */
    visibility: any;
    /**
     * Sets the width of the text
     * @aspdefaultvalueignore
     * @default undefined
     */
    width: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ConnectorAnnotationDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ConnectorAnnotationDirective, "e-connector>e-connector-annotations>e-connector-annotation", never, { "addInfo": "addInfo"; "alignment": "alignment"; "annotationType": "annotationType"; "constraints": "constraints"; "content": "content"; "displacement": "displacement"; "dragLimit": "dragLimit"; "height": "height"; "horizontalAlignment": "horizontalAlignment"; "hyperlink": "hyperlink"; "id": "id"; "margin": "margin"; "offset": "offset"; "rotateAngle": "rotateAngle"; "segmentAngle": "segmentAngle"; "style": "style"; "template": "template"; "type": "type"; "verticalAlignment": "verticalAlignment"; "visibility": "visibility"; "width": "width"; }, {}, never>;
}
/**
 * ConnectorAnnotation Array Directive
 * @private
 */
export declare class ConnectorAnnotationsDirective extends ArrayBase<ConnectorAnnotationsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ConnectorAnnotationsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ConnectorAnnotationsDirective, "e-connector>e-connector-annotations", never, {}, {}, ["children"]>;
}
