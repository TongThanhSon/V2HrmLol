import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * 'e-files' directive represent a file of angular uploader
 * It must be contained in a Uploader component(`ejs-uploader`).
 * ```html
 * <ejs-uploader id='fileupload' multiple=true>
 *   <e-files>
 *    <e-file name='Java' size=23000 type='pdf'></e-file>
 *    <e-file name='C++' size=30000 type='.docx'></e-file>
 *   </e-files>
 * </ejs-uploader>
 * ```
 */
export declare class UploadedFilesDirective extends ComplexBase<UploadedFilesDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Specifies the type of the file
     * @default ''
     */
    type: any;
    /**
     * Specifies the name of the file
     * @default ''
     */
    name: any;
    /**
     * Specifies the size of the file
     * @default null
     */
    size: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<UploadedFilesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UploadedFilesDirective, "e-files>e-uploadedfiles", never, { "name": "name"; "size": "size"; "type": "type"; }, {}, never>;
}
/**
 * UploadedFiles Array Directive
 * @private
 */
export declare class FilesDirective extends ArrayBase<FilesDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<FilesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FilesDirective, "ejs-uploader>e-files", never, {}, {}, ["children"]>;
}
