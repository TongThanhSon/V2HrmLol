import { QueryBuilder } from '@syncfusion/ej2-querybuilder';
import { ComponentBase, EJComponentDecorator, allVue, getProps, gh } from '@syncfusion/ej2-vue-base';
import { Vue } from 'vue-class-component';
import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';
import Vue$1 from 'vue';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute = gh ? false : true;
var vueImport;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = Vue;
}
else {
    vueImport = Vue$1;
}
var ColumnsDirective = /** @class */ (function (_super) {
    __extends(ColumnsDirective, _super);
    function ColumnsDirective() {
        return _super.call(this, arguments) || this;
    }
    ColumnsDirective.prototype.render = function (createElement) {
        if (gh) {
            var h = gh || createElement;
            var slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = gh ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    };
    ColumnsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    ColumnsDirective.prototype.getTag = function () {
        return 'e-columns';
    };
    ColumnsDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], ColumnsDirective);
    return ColumnsDirective;
}(vueImport));
var ColumnsPlugin = {
    name: 'e-columns',
    install: function (Vue$$1) {
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
    }
};
/**
 * `e-column` directive represent a column of the VueJS QueryBuilder.
 * It must be contained in a QueryBuilder component(`ejs-querybuilder`).
 * ```vue
 * <ejs-querybuilder :dataSource='data'>
 *   <e-columns>
 *    <e-column field='ID' label='ID' type='number'/>
 *    <e-column field='Date' label='Date' type='date' format='dd/MM/yyyy'/>
 *   </e-columns>
 * </ejs-querybuilder>
 * ```
 */
var ColumnDirective = /** @class */ (function (_super) {
    __extends(ColumnDirective, _super);
    function ColumnDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnDirective.prototype.render = function () {
        return;
    };
    ColumnDirective.prototype.getTag = function () {
        return 'e-column';
    };
    ColumnDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], ColumnDirective);
    return ColumnDirective;
}(vueImport));
var ColumnPlugin = {
    name: 'e-column',
    install: function (Vue$$1) {
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
    }
};

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties = ['isLazyUpdate', 'plugins', 'allowValidation', 'columns', 'cssClass', 'dataSource', 'displayMode', 'enableNotCondition', 'enablePersistence', 'enableRtl', 'fieldMode', 'fieldModel', 'headerTemplate', 'height', 'immediateModeDelay', 'locale', 'matchCase', 'maxGroupCount', 'operatorModel', 'readonly', 'rule', 'separator', 'showButtons', 'sortDirection', 'summaryView', 'valueModel', 'width', 'actionBegin', 'beforeChange', 'change', 'created', 'dataBound', 'ruleChange'];
var modelProps = [];
var testProp = getProps({ props: properties });
var props = testProp[0];
var watch = testProp[1];
var emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (var _i = 0, modelProps_1 = modelProps; _i < modelProps_1.length; _i++) {
    var props_1 = modelProps_1[_i];
    emitProbs.push('update:' + props_1);
}
var isExecute$1 = gh ? false : true;
/**
 * Represents the VueJS QueryBuilder Component.
 * ```html
 * <ejs-querybuilder></ejs-querybuilder>
 * ```
 */
var QueryBuilderComponent = /** @class */ (function (_super) {
    __extends$1(QueryBuilderComponent, _super);
    function QueryBuilderComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-columns": "e-column" };
        _this.tagNameMapper = {};
        _this.isVue3 = !isExecute$1;
        _this.ej2Instances = new QueryBuilder({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    QueryBuilderComponent.prototype.clearTemplate = function (templateNames) {
        if (!templateNames) {
            templateNames = Object.keys(this.templateCollection || {});
        }
        if (templateNames.length && this.templateCollection) {
            for (var _i = 0, templateNames_1 = templateNames; _i < templateNames_1.length; _i++) {
                var tempName = templateNames_1[_i];
                var elementCollection = this.templateCollection[tempName];
                if (elementCollection && elementCollection.length) {
                    for (var _a = 0, elementCollection_1 = elementCollection; _a < elementCollection_1.length; _a++) {
                        var ele = elementCollection_1[_a];
                        var destroy = getValue('__vue__.$destroy', ele);
                        if (destroy) {
                            ele.__vue__.$destroy();
                        }
                        if (ele.innerHTML) {
                            ele.innerHTML = '';
                        }
                    }
                    delete this.templateCollection[tempName];
                }
            }
        }
    };
    QueryBuilderComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.isVue3) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        if (_this.isVue3) {
                            _this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                        }
                        else {
                            _this.$emit('update:' + key, prop[key]);
                            _this.$emit('modelchanged', prop[key]);
                        }
                    }
                });
            });
        }
    };
    QueryBuilderComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    QueryBuilderComponent.prototype.custom = function () {
        this.updated();
    };
    QueryBuilderComponent.prototype.addGroups = function (groups, groupID) {
        return this.ej2Instances.addGroups(groups, groupID);
    };
    QueryBuilderComponent.prototype.addRules = function (rule, groupID) {
        return this.ej2Instances.addRules(rule, groupID);
    };
    QueryBuilderComponent.prototype.deleteGroup = function (target) {
        return this.ej2Instances.deleteGroup(target);
    };
    QueryBuilderComponent.prototype.deleteGroups = function (groupIdColl) {
        return this.ej2Instances.deleteGroups(groupIdColl);
    };
    QueryBuilderComponent.prototype.deleteRules = function (ruleIdColl) {
        return this.ej2Instances.deleteRules(ruleIdColl);
    };
    QueryBuilderComponent.prototype.getDataManagerQuery = function (rule) {
        return this.ej2Instances.getDataManagerQuery(rule);
    };
    QueryBuilderComponent.prototype.getFilteredRecords = function () {
        return this.ej2Instances.getFilteredRecords();
    };
    QueryBuilderComponent.prototype.getGroup = function (target) {
        return this.ej2Instances.getGroup(target);
    };
    QueryBuilderComponent.prototype.getOperators = function (field) {
        return this.ej2Instances.getOperators(field);
    };
    QueryBuilderComponent.prototype.getPredicate = function (rule) {
        return this.ej2Instances.getPredicate(rule);
    };
    QueryBuilderComponent.prototype.getRule = function (elem) {
        return this.ej2Instances.getRule(elem);
    };
    QueryBuilderComponent.prototype.getRules = function () {
        return this.ej2Instances.getRules();
    };
    QueryBuilderComponent.prototype.getRulesFromSql = function (sqlString) {
        return this.ej2Instances.getRulesFromSql(sqlString);
    };
    QueryBuilderComponent.prototype.getSqlFromRules = function (rule, allowEscape) {
        return this.ej2Instances.getSqlFromRules(rule, allowEscape);
    };
    QueryBuilderComponent.prototype.getValidRules = function (currentRule) {
        return this.ej2Instances.getValidRules(currentRule);
    };
    QueryBuilderComponent.prototype.getValues = function (field) {
        return this.ej2Instances.getValues(field);
    };
    QueryBuilderComponent.prototype.notifyChange = function (value, element, type) {
        return this.ej2Instances.notifyChange(value, element, type);
    };
    QueryBuilderComponent.prototype.reset = function () {
        return this.ej2Instances.reset();
    };
    QueryBuilderComponent.prototype.setRules = function (rule) {
        return this.ej2Instances.setRules(rule);
    };
    QueryBuilderComponent.prototype.setRulesFromSql = function (sqlString) {
        return this.ej2Instances.setRulesFromSql(sqlString);
    };
    QueryBuilderComponent.prototype.validateFields = function () {
        return this.ej2Instances.validateFields();
    };
    QueryBuilderComponent = __decorate$1([
        EJComponentDecorator({
            props: properties
        }, isExecute$1)
        /* Start Options({
            props: props,
            watch: watch,
            emits: emitProbs,
            provide: function provide() {
                return {
                    custom: this.custom
                };
            }
        }) End */
    ], QueryBuilderComponent);
    return QueryBuilderComponent;
}(ComponentBase));
var QueryBuilderPlugin = {
    name: 'ejs-querybuilder',
    install: function (Vue$$1) {
        Vue$$1.component(QueryBuilderPlugin.name, QueryBuilderComponent);
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
    }
};

export { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin, QueryBuilderComponent, QueryBuilderPlugin };
export * from '@syncfusion/ej2-querybuilder';
//# sourceMappingURL=ej2-vue-querybuilder.es5.js.map
