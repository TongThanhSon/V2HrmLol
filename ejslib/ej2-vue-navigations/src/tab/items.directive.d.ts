export declare const isExecute: any;
declare let vueImport: any;
export declare class TabItemsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const TabItemsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * 'e-tabitem' directive represent a item of the Vue Tab
 * It must be contained in a Tab component(`ejs-tab`).
 * ```html
 * <ejs-tab>
 *  <e-tabitems>
 *   <e-tabitem :header='Header 1' :content='Content 1'></e-tabitem>
 *   <e-tabitem :header='Header 2' :content='Content 2'></e-tabitem>
 *  <e-tabitems>
 * </ejs-tab>
 * ```
 */
export declare class TabItemDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const TabItemPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
