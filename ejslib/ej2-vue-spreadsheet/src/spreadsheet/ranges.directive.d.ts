export declare const isExecute: any;
declare let vueImport: any;
export declare class RangesDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const RangesPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-range` directive represent a range of the VueJS Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-ranges>
 *    <e-range :dataSource='data'></e-range>
 *    </e-ranges>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
export declare class RangeDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const RangePlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
