export declare const isExecute: any;
declare let vueImport: any;
export declare class FilesDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const FilesPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * 'files' directive represent a file of vue uploader
 * It must be contained in a Uploader component(`ejs-uploader`).
 * ```html
 * <ejs-uploader id='fileupload' v-bind:multiple='true'>
 *   <e-files>
 *    <e-file name='Java' size=23000 type='pdf'></e-file>
 *    <e-file name='C++' size=30000 type='.docx'></e-file>
 *   </e-files>
 * </ejs-uploader>
 * ```
 */
export declare class UploadedFilesDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const UploadedFilesPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
