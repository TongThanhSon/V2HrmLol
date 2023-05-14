export declare const isExecute: any;
declare let vueImport: any;
export declare class PanesDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const PanesPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * 'e-pane' directive represent a pane of Vue Splitter
 * It must be contained in a Splitter component(`ejs-splitter`).
 * ```html
 * <ejs-splitter id='splitter'>
 *   <e-panes>
 *    <e-pane size='150px'></e-pane>
 *    <e-pane size='150px'></e-pane>
 *   </e-panes>
 * </ejs-splitter>
 * ```
 */
export declare class PaneDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const PanePlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
