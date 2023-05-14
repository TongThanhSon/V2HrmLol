export declare const isExecute: any;
declare let vueImport: any;
export declare class ButtonModelPropsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const ButtonModelPropsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * 'e-button' directive represent a button of Vue toast
 * It must be contained in a Toast component(`ejs-toast`).
 * ```html
 * <ejs-toast id='toast' :showCloseIcon=true>
 *   <e-buttons>
 *    <e-button :content='Ok' :isPrimary=true></e-button>
 *    <e-button :content='Cancel'></e-button>
 *   </e-buttons>
 * </ejs-toast>
 * ```
 */
export declare class ButtonModelPropDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const ButtonModelPropPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
