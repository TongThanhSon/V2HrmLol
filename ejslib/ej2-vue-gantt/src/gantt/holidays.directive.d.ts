export declare const isExecute: any;
declare let vueImport: any;
export declare class HolidaysDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const HolidaysPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-holidays` directive represent a holidays collection in Gantt.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-holidays>
 *     <e-holiday from='02/20/2018' label='Holiday 1'/>
 *     <e-holiday from='05/15/2018' label='Holiday 2'/>
 *   </e-holidays>
 * </ejs-gantt>
 * ```
 */
export declare class HolidayDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const HolidayPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
