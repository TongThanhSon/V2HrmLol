export declare const isExecute: any;
declare let vueImport: any;
export declare class NodeFixedUserHandlesDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const NodeFixedUserHandlesPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-node` directive represent a annotation of the vue Diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node>
 * <e-node-fixeduserhandles>
 * <e-node-fixeduserhandle>
 * </e-node-fixeduserhandle>
 * </e-node-fixeduserhandles>
 * </e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
export declare class NodeFixedUserHandleDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const NodeFixedUserHandlePlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
