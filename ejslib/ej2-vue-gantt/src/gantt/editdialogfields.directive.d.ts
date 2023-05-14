export declare const isExecute: any;
declare let vueImport: any;
export declare class EditDialogFieldsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const EditDialogFieldsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-edit-dialog-fields` directive represent a add dialog fields in VueJS Gantt.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-edit-dialog-fields>
 *     <e-edit-dialog-field type='General' headerText='General'/>
 *     <e-edit-dialog-field type='Dependency' headerText='Dependency'/>
 *   </e-edit-dialog-fields>
 * </ejs-gantt>
 * ```
 */
export declare class EditDialogFieldDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const EditDialogFieldPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
