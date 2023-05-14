export declare const isExecute: any;
declare let vueImport: any;
export declare class EventMarkersDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const EventMarkersPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-event-markers` directive represent a event marker collection in Gantt
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-event-markers>
 *     <e-event-marker day='02/10/2018' label='Project Starts'/>
 *   </e-event-markers>
 * </ejs-gantt>
 * ```
 */
export declare class EventMarkerDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const EventMarkerPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
