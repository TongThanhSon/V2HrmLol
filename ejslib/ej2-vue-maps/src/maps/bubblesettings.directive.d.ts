export declare const isExecute: any;
declare let vueImport: any;
export declare class BubblesDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const BubblesPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `BubblesDirective` directive represent a bubble settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-bubbleSetting>
 * </e-bubbleSetting>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
export declare class BubbleDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const BubblePlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
