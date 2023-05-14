import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any;
export declare const watch: any;
export declare const emitProbs: any;
export declare const isExecute: any;
/**
 * Represents the VueJS QueryBuilder Component.
 * ```html
 * <ejs-querybuilder></ejs-querybuilder>
 * ```
 */
export declare class QueryBuilderComponent extends ComponentBase {
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
    render(createElement: any): any;
    custom(): void;
    addGroups(groups: Object[], groupID: string): void;
    addRules(rule: Object[], groupID: string): void;
    deleteGroup(target: Object | string): void;
    deleteGroups(groupIdColl: string[]): void;
    deleteRules(ruleIdColl: string[]): void;
    getDataManagerQuery(rule: Object): Object;
    getFilteredRecords(): Object | any;
    getGroup(target: Object | string): Object;
    getOperators(field: string): undefined[];
    getPredicate(rule: Object): Object;
    getRule(elem: string | Object): Object;
    getRules(): Object;
    getRulesFromSql(sqlString: string): Object;
    getSqlFromRules(rule?: Object, allowEscape?: boolean): string;
    getValidRules(currentRule?: Object): Object;
    getValues(field: string): any[];
    notifyChange(value: string | number | boolean | Object | string[] | number[] | Object[], element: Object, type?: string): void;
    reset(): void;
    setRules(rule: Object): void;
    setRulesFromSql(sqlString: string): void;
    validateFields(): boolean;
}
export declare const QueryBuilderPlugin: {
    name: string;
    install(Vue: any): void;
};
