export declare const isExecute: any;
declare let vueImport: any;
export declare class StackedColumnsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const StackedColumnsPlugin: {
    name: string;
    install(Vue: any): void;
};
export declare class StackedColumnDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const StackedColumnPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
