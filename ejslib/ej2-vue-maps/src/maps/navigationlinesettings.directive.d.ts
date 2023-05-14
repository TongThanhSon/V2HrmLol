export declare const isExecute: any;
declare let vueImport: any;
export declare class NavigationLinesDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const NavigationLinesPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `NavigationLinesDirective` directive represent a bubble settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-navigationLineSettings>
 * <e-navigationLineSetting>
 * </e-navigationLineSetting>
 * </e-navigationLineSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
export declare class NavigationLineDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const NavigationLinePlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
