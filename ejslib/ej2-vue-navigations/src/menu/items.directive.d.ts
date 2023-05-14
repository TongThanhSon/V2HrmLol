export declare const isExecute: any;
declare let vueImport: any;
export declare class MenuItemsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const MenuItemsPlugin: {
    name: string;
    install(Vue: any): void;
};
export declare class MenuItemDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const MenuItemPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
