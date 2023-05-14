export declare const isExecute: any;
declare let vueImport: any;
export declare class ImagesDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const ImagesPlugin: {
    name: string;
    install(Vue: any): void;
};
export declare class ImageDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const ImagePlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
