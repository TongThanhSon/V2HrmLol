export declare const isExecute: any;
declare let vueImport: any;
export declare class MarkersDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const MarkersPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `MarkerSettingsDirective` directive represent a marker settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-markerSettings>
 * <e-markerSetting>
 * </e-markerSetting>
 * </e-markerSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
export declare class MarkerDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const MarkerPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
