export declare const isExecute: any;
declare let vueImport: any;
export declare class ColorMappingsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const ColorMappingsPlugin: {
    name: string;
    install(Vue: any): void;
};
export declare class ColorMappingDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const ColorMappingPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
