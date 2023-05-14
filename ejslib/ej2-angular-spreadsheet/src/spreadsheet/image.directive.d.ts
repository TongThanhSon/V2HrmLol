import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
export declare class ImageDirective extends ComplexBase<ImageDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Specifies the height of the image.
     * @default 300
     * @asptype int
     */
    height: any;
    /**
     * Specifies image element id.
     * @default ''
     */
    id: any;
    /**
     * Specifies the width of the image.
     * @default 0
     * @asptype int
     */
    left: any;
    /**
     * Specifies the image source.
     * @default ''
     */
    src: any;
    /**
     * Specifies the height of the image.
     * @default 0
     * @asptype int
     */
    top: any;
    /**
     * Specifies the width of the image.
     * @default 400
     * @asptype int
     */
    width: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * Image Array Directive
 * @private
 */
export declare class ImagesDirective extends ArrayBase<ImagesDirective> {
    constructor();
}
