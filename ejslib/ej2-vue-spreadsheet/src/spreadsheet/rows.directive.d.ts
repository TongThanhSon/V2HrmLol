export declare const isExecute: any;
declare let vueImport: any;
export declare class RowsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const RowsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-row` directive represent a row of the VueJS Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rows>
 *    <e-row></e-row>
 *    </e-rows>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
export declare class RowDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const RowPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
