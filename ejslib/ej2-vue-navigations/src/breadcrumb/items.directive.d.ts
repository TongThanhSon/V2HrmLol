export declare const isExecute: any;
declare let vueImport: any;
export declare class BreadcrumbItemsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const BreadcrumbItemsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-breadcrumb-item` directive represent a item of the Vue Breadcrumb.
 * It must be contained in a Breadcrumb component(`ejs-breadcrumb`).
 * ```html
 * <ejs-breadcrumb>
 *   <e-breadcrumb-items>
 *    <e-breadcrumb-item text='Home' url='/'></e-breadcrumb-item>
 *    <e-breadcrumb-item text='Index' url='./index'></e-breadcrumb-item>
 *   </e-breadcrumb-items>
 * </ejs-breadcrumb>
 * ```
 */
export declare class BreadcrumbItemDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const BreadcrumbItemPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
