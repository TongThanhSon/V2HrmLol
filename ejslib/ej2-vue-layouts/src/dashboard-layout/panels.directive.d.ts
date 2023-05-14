export declare const isExecute: any;
declare let vueImport: any;
export declare class PanelsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const PanelsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * 'e-panels' directive represent a presets of VueJS dashboardlayout component
 * It must be contained in a dashboardlayout component(`ejs-dashboardlayout`).
 * ```html
 * <ejs-dashboardlayout>
 *   <e-panels>
 *   <e-panel></e-panel>
 *   <e-panel></e-panel>
 *   </e-panels>
 * </ejs-dashboardlayout>
 * ```
 */
export declare class PanelDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const PanelPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
