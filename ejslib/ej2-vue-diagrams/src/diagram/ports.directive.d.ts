export declare const isExecute: any;
declare let vueImport: any;
export declare class PortsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const PortsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-port` directive represent a port of the vue Diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node>
 * <e-node-ports>
 * <e-node-port>
 * </e-node-port>
 * </e-node-ports>
 * </e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
export declare class PortDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const PortPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
