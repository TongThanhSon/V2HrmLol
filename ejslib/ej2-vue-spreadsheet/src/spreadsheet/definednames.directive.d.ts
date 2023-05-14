export declare const isExecute: any;
declare let vueImport: any;
export declare class DefinedNamesDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const DefinedNamesPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-definedname` directive represent a defined name of the VueJS Spreadsheet.
 * It must be contained in a Spreadsheet component(`ejs-spreadsheet`).
 * ```vue
 * <ejs-spreadsheet>
 *   <e-definednames>
 *    <e-definedname></e-definedname>
 *    <e-definedname></e-definedname>
 *   </e-definednames>
 * </ejs-spreadsheet>
 * ```
 */
export declare class DefinedNameDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const DefinedNamePlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
