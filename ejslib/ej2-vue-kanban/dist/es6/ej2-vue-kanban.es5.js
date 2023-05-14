import { Kanban } from '@syncfusion/ej2-kanban';
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
 * `e-columns` directive represent a columns of the VueJS Kanban board.
 * It must be contained in a Kanban component(`ejs-kanban`).
 * ```vue
 * <ejs-kanban>
 *   <e-columns>
 *    <e-column keyField='Open' textField='To Do'></e-column>
 *    <e-column keyField='Close' textField='Completed'></e-column>
 *   </e-columns>
 * </ejs-kanban>
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
var isExecute$1 = gh ? false : true;
var vueImport$1;
if (!isExecute$1 || parseInt(allVue.version) < 3) {
    vueImport$1 = Vue;
}
else {
    vueImport$1 = Vue$1;
}
var StackedHeadersDirective = /** @class */ (function (_super) {
    __extends$1(StackedHeadersDirective, _super);
    function StackedHeadersDirective() {
        return _super.call(this, arguments) || this;
    }
    StackedHeadersDirective.prototype.render = function (createElement) {
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
    StackedHeadersDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    StackedHeadersDirective.prototype.getTag = function () {
        return 'e-stackedHeaders';
    };
    StackedHeadersDirective = __decorate$1([
        EJComponentDecorator({}, isExecute$1)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], StackedHeadersDirective);
    return StackedHeadersDirective;
}(vueImport$1));
var StackedHeadersPlugin = {
    name: 'e-stackedHeaders',
    install: function (Vue$$1) {
        Vue$$1.component(StackedHeadersPlugin.name, StackedHeadersDirective);
    }
};
/**
 * `e-stackedHeaders` directive represent a stacked header of the VueJS Kanban board.
 * It must be contained in a Kanban component(`ejs-kanban`).
 * ```vue
 * <ejs-kanban>
 *   <e-stackedHeaders>
 *    <e-stackedHeader keyField='Open' text='To Do'></e-stackedHeader>
 *    <e-stackedHeader keyField='Close' text='Completed'></e-stackedHeader>
 *   </e-stackedHeaders>
 * </ejs-kanban>
 * ```
 */
var StackedHeaderDirective = /** @class */ (function (_super) {
    __extends$1(StackedHeaderDirective, _super);
    function StackedHeaderDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackedHeaderDirective.prototype.render = function () {
        return;
    };
    StackedHeaderDirective.prototype.getTag = function () {
        return 'e-stackedHeader';
    };
    StackedHeaderDirective = __decorate$1([
        EJComponentDecorator({}, isExecute$1)
    ], StackedHeaderDirective);
    return StackedHeaderDirective;
}(vueImport$1));
var StackedHeaderPlugin = {
    name: 'e-stackedHeader',
    install: function (Vue$$1) {
        Vue$$1.component(StackedHeaderPlugin.name, StackedHeaderDirective);
    }
};

var __extends$2 = (undefined && undefined.__extends) || (function () {
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
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties = ['isLazyUpdate', 'plugins', 'allowDragAndDrop', 'allowKeyboard', 'cardSettings', 'columns', 'constraintType', 'cssClass', 'dataSource', 'dialogSettings', 'enablePersistence', 'enableRtl', 'enableTooltip', 'externalDropId', 'height', 'keyField', 'locale', 'query', 'showEmptyColumn', 'sortSettings', 'stackedHeaders', 'swimlaneSettings', 'tooltipTemplate', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'cardClick', 'cardDoubleClick', 'cardRendered', 'created', 'dataBinding', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'dialogClose', 'dialogOpen', 'drag', 'dragStart', 'dragStop', 'queryCellInfo'];
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
var isExecute$2 = gh ? false : true;
/**
 * `ej-kanban` represents the VueJS Kanban Component.
 * ```vue
 * <ejs-kanban></ejs-kanban>
 * ```
 */
var KanbanComponent = /** @class */ (function (_super) {
    __extends$2(KanbanComponent, _super);
    function KanbanComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-columns": "e-column", "e-stackedHeaders": "e-stackedHeader" };
        _this.tagNameMapper = {};
        _this.isVue3 = !isExecute$2;
        _this.ej2Instances = new Kanban({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    KanbanComponent.prototype.clearTemplate = function (templateNames) {
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
    KanbanComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    KanbanComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    KanbanComponent.prototype.custom = function () {
        this.updated();
    };
    KanbanComponent.prototype.addCard = function (cardData, index) {
        return this.ej2Instances.addCard(cardData, index);
    };
    KanbanComponent.prototype.addColumn = function (columnOptions, index) {
        return this.ej2Instances.addColumn(columnOptions, index);
    };
    KanbanComponent.prototype.closeDialog = function () {
        return this.ej2Instances.closeDialog();
    };
    KanbanComponent.prototype.deleteCard = function (cardData) {
        return this.ej2Instances.deleteCard(cardData);
    };
    KanbanComponent.prototype.deleteColumn = function (index) {
        return this.ej2Instances.deleteColumn(index);
    };
    KanbanComponent.prototype.getCardDetails = function (target) {
        return this.ej2Instances.getCardDetails(target);
    };
    KanbanComponent.prototype.getColumnData = function (columnKey, dataSource) {
        return this.ej2Instances.getColumnData(columnKey, dataSource);
    };
    KanbanComponent.prototype.getSelectedCards = function () {
        return this.ej2Instances.getSelectedCards();
    };
    KanbanComponent.prototype.getSwimlaneData = function (keyField) {
        return this.ej2Instances.getSwimlaneData(keyField);
    };
    KanbanComponent.prototype.hideColumn = function (key) {
        return this.ej2Instances.hideColumn(key);
    };
    KanbanComponent.prototype.hideSpinner = function () {
        return this.ej2Instances.hideSpinner();
    };
    KanbanComponent.prototype.openDialog = function (action, data) {
        return this.ej2Instances.openDialog(action, data);
    };
    KanbanComponent.prototype.refreshHeader = function () {
        return this.ej2Instances.refreshHeader();
    };
    KanbanComponent.prototype.refreshUI = function (args, index) {
        return this.ej2Instances.refreshUI(args, index);
    };
    KanbanComponent.prototype.renderTemplates = function () {
        return this.ej2Instances.renderTemplates();
    };
    KanbanComponent.prototype.resetTemplates = function (templates) {
        return this.ej2Instances.resetTemplates(templates);
    };
    KanbanComponent.prototype.showColumn = function (key) {
        return this.ej2Instances.showColumn(key);
    };
    KanbanComponent.prototype.showSpinner = function () {
        return this.ej2Instances.showSpinner();
    };
    KanbanComponent.prototype.templateParser = function (template) {
        return this.ej2Instances.templateParser(template);
    };
    KanbanComponent.prototype.updateCard = function (cardData, index) {
        return this.ej2Instances.updateCard(cardData, index);
    };
    KanbanComponent = __decorate$2([
        EJComponentDecorator({
            props: properties
        }, isExecute$2)
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
    ], KanbanComponent);
    return KanbanComponent;
}(ComponentBase));
var KanbanPlugin = {
    name: 'ejs-kanban',
    install: function (Vue$$1) {
        Vue$$1.component(KanbanPlugin.name, KanbanComponent);
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
        Vue$$1.component(StackedHeaderPlugin.name, StackedHeaderDirective);
        Vue$$1.component(StackedHeadersPlugin.name, StackedHeadersDirective);
    }
};

export { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin, StackedHeadersDirective, StackedHeaderDirective, StackedHeadersPlugin, StackedHeaderPlugin, KanbanComponent, KanbanPlugin };
export * from '@syncfusion/ej2-kanban';
//# sourceMappingURL=ej2-vue-kanban.es5.js.map
