export declare const isExecute: any;
declare let vueImport: any;
export declare class CellsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const CellsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-cell` directive represent a cell of the VueJS Spreadsheet.
 * It must be contained in a `e-row` directive.
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rows>
 *    <e-row>
 *    <e-cells>
 *    <e-cell value='A1'></e-cell>
 *    </e-cells>
 *    </e-row>
 *    </e-rows>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
export declare class CellDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const CellPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
