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
 * `AnnotationsDirective` directive represent a annotation of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-maps-annotations>
 * <e-maps-annotation></e-maps-annotation>
 * </e-maps-annotations>
 * </ejs-maps>
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
