export declare const isExecute: any;
declare let vueImport: any;
export declare class ItemsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const ItemsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * 'e-item' directive represent a item of Vue Toolbar
 * It must be contained in a Toolbar component(`ejs-toolbar`).
 * ```html
 * <ejs-toolbar>
 *   <e-items>
 *    <e-item text='Cut'></e-item>
 *    <e-item text='Copy'></e-item>
 *   </e-items>
 * </ejs-toolbar>
 * ```
 */
export declare class ItemDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const ItemPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
