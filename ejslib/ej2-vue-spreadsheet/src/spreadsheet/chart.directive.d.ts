export declare const isExecute: any;
declare let vueImport: any;
export declare class ChartsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const ChartsPlugin: {
    name: string;
    install(Vue: any): void;
};
export declare class ChartDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const ChartPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
