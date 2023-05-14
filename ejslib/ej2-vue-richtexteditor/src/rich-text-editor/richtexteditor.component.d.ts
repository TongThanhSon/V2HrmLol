import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * `ejs-richtexteditor` represents the VueJS RichTextEditor Component.
 * ```vue
 * <ejs-richtexteditor></ejs-richtexteditor>
 * ```
 */
export declare class RichTextEditorComponent extends ComponentBase {
    ej2Instances: any;
    propKeys: string[];
    models: string[];
    hasChildDirective: boolean;
    protected hasInjectedModules: boolean;
    tagMapper: {
        [key: string]: Object;
    };
    tagNameMapper: Object;
    isVue3: boolean;
    templateCollection: any;
    constructor();
    clearTemplate(templateNames?: string[]): any;
    setProperties(prop: any, muteOnChange: boolean): void;
    trigger(eventName: string, eventProp: {
        [key: string]: Object;
    }, successHandler?: Function): void;
    render(createElement: any): any;
    custom(): void;
    cleanList(e: Object): void;
    closeDialog(type: Object): void;
    disableToolbarItem(items: string | string[], muteToolbarUpdate?: boolean): void;
    enableToolbarItem(items: string | string[], muteToolbarUpdate?: boolean): void;
    executeCommand(commandName: Object, value?: string | Object | Object | Object | Object, option?: Object): void;
    focusIn(): void;
    focusOut(): void;
    getCharCount(): number;
    getContent(): Object;
    getHtml(): string;
    getRange(): Object;
    getSelectedHtml(): string;
    getSelection(): string;
    getText(): string;
    getXhtml(): string;
    hideInlineToolbar(): void;
    print(): void;
    refreshUI(): void;
    removeToolbarItem(items: string | string[]): void;
    sanitizeHtml(value: string): string;
    selectAll(): void;
    selectRange(range: Object): void;
    showDialog(type: Object): void;
    showFullScreen(): void;
    showInlineToolbar(): void;
    showSourceCode(): void;
}
export declare const RichTextEditorPlugin: {
    name: string;
    install(Vue: any): void;
};
