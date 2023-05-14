export declare const isExecute: any;
declare let vueImport: any;
export declare class ConnectorFixedUserHandlesDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const ConnectorFixedUserHandlesPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-connector` directive represent a annotation of the vue Diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-connectors>
 * <e-connector>
 * <e-connector-fixeduserhandles>
 * <e-connector-fixeduserhandle>
 * </e-connector-fixeduserhandle>
 * </e-connector-fixeduserhandles>
 * </e-connector>
 * </e-connectors>
 * </ejs-diagram>
 * ```
 */
export declare class ConnectorFixedUserHandleDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const ConnectorFixedUserHandlePlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
