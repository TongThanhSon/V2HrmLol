export declare const isExecute: any;
declare let vueImport: any;
export declare class ConditionalFormatsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const ConditionalFormatsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-conditionalformat` directive represent a conditionalformat of the VueJS Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-conditionalformats>
 *    <e-conditionalformat></e-conditionalformat>
 *    </e-conditionalformats>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
export declare class ConditionalFormatDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const ConditionalFormatPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
