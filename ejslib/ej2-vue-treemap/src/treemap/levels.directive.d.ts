export declare const isExecute: any;
declare let vueImport: any;
export declare class LevelsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const LevelsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `LevelsDirective` directive represent a levels of the react treemap.
 * ```vue
 * <ejs-treemap>
 * <e-levels>
 * <e-level></e-level>
 * </e-levels>
 * </ejs-treemap>
 * ```
 */
export declare class LevelDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const LevelPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
