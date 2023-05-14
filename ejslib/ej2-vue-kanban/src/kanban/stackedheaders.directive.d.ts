export declare const isExecute: any;
declare let vueImport: any;
export declare class StackedHeadersDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const StackedHeadersPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-stackedHeaders` directive represent a stacked header of the VueJS Kanban board.
 * It must be contained in a Kanban component(`ejs-kanban`).
 * ```vue
 * <ejs-kanban>
 *   <e-stackedHeaders>
 *    <e-stackedHeader keyField='Open' text='To Do'></e-stackedHeader>
 *    <e-stackedHeader keyField='Close' text='Completed'></e-stackedHeader>
 *   </e-stackedHeaders>
 * </ejs-kanban>
 * ```
 */
export declare class StackedHeaderDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const StackedHeaderPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
