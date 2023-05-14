export declare const isExecute: any;
declare let vueImport: any;
export declare class SheetsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const SheetsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-sheet` directive represent a sheet of the VueJS Spreadsheet.
 * It must be contained in a Spreadsheet component(`ejs-spreadsheet`).
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet></e-sheet>
 *    <e-sheet></e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
export declare class SheetDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const SheetPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
