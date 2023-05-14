export declare const isExecute: any;
declare let vueImport: any;
export declare class AnnotationsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const AnnotationsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `Annotations` directive represent a annotations of the VueJS linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-annotations><e-annotation></e-annotation></e-annotations>
 * </ejs-lineargauge>
 * ```
 */
export declare class AnnotationDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const AnnotationPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
