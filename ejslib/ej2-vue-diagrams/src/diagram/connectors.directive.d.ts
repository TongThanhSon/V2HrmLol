export declare const isExecute: any;
declare let vueImport: any;
export declare class ConnectorsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const ConnectorsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-connectors` directive represent a connectors of the vue diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-connectors>
 * <e-connector></e-connector>
 * </e-connectors>
 * </ejs-diagram>
 * ```
 */
export declare class ConnectorDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const ConnectorPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
