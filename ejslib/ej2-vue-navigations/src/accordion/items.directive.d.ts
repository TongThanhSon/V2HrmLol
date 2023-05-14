export declare const isExecute: any;
declare let vueImport: any;
export declare class AccordionItemsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const AccordionItemsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * 'e-accordionitem' directive represent a item of Vue Accordion
 * It must be contained in a Accordion component(`ejs-accordion`).
 * ```html
 * <ejs-accordion>
 *   <e-accordionitems>
 *    <e-accordionitem header='Header1'></e-accordionitem>
 *    <e-accordionitem header='Header2' content='Content2'></e-accordionitem>
 *   </e-accordionitems>
 * </ejs-accordion>
 * ```
 */
export declare class AccordionItemDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const AccordionItemPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
