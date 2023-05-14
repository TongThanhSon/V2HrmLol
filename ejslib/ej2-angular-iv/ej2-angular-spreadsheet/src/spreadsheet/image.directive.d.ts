import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ImageDirective, "e-images>e-image", never, { "height": "height"; "id": "id"; "left": "left"; "src": "src"; "top": "top"; "width": "width"; }, {}, never>;
}
/**
 * Image Array Directive
 * @private
 */
export declare class ImagesDirective extends ArrayBase<ImagesDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ImagesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ImagesDirective, "e-cell>e-images", never, {}, {}, ["children"]>;
}
