export declare const isExecute: any;
declare let vueImport: any;
export declare class ProgressBarAnnotationsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const ProgressBarAnnotationsPlugin: {
    name: string;
    install(Vue: any): void;
};
export declare class ProgressBarAnnotationDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const ProgressBarAnnotationPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
