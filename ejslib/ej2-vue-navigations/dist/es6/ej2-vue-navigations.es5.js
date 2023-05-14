import { Accordion, Breadcrumb, Carousel, ContextMenu, Menu, Sidebar, Tab, Toolbar, TreeView } from '@syncfusion/ej2-navigations';
import { ComponentBase, EJComponentDecorator, allVue, getProps, gh } from '@syncfusion/ej2-vue-base';
import { Vue } from 'vue-class-component';
import { getValue, isNullOrUndefined, isUndefined } from '@syncfusion/ej2-base';
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
var AccordionItemsDirective = /** @class */ (function (_super) {
    __extends(AccordionItemsDirective, _super);
    function AccordionItemsDirective() {
        return _super.call(this, arguments) || this;
    }
    AccordionItemsDirective.prototype.render = function (createElement) {
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
    AccordionItemsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    AccordionItemsDirective.prototype.getTag = function () {
        return 'e-accordionitems';
    };
    AccordionItemsDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], AccordionItemsDirective);
    return AccordionItemsDirective;
}(vueImport));
var AccordionItemsPlugin = {
    name: 'e-accordionitems',
    install: function (Vue$$1) {
        Vue$$1.component(AccordionItemsPlugin.name, AccordionItemsDirective);
    }
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
var AccordionItemDirective = /** @class */ (function (_super) {
    __extends(AccordionItemDirective, _super);
    function AccordionItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccordionItemDirective.prototype.render = function () {
        return;
    };
    AccordionItemDirective.prototype.getTag = function () {
        return 'e-accordionitem';
    };
    AccordionItemDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], AccordionItemDirective);
    return AccordionItemDirective;
}(vueImport));
var AccordionItemPlugin = {
    name: 'e-accordionitem',
    install: function (Vue$$1) {
        Vue$$1.component(AccordionItemPlugin.name, AccordionItemDirective);
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
var properties = ['isLazyUpdate', 'plugins', 'animation', 'dataSource', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'expandMode', 'expandedIndices', 'headerTemplate', 'height', 'itemTemplate', 'items', 'locale', 'width', 'clicked', 'created', 'destroyed', 'expanded', 'expanding'];
var modelProps = ['expandedIndices'];
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
 * Represents the VueJS Accordion Component.
 * ```html
 * <ejs-accordion></ejs-accordion>
 * ```
 */
var AccordionComponent = /** @class */ (function (_super) {
    __extends$1(AccordionComponent, _super);
    function AccordionComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-accordionitems": "e-accordionitem" };
        _this.tagNameMapper = { "e-accordionitems": "e-items" };
        _this.isVue3 = !isExecute$1;
        _this.ej2Instances = new Accordion({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    AccordionComponent.prototype.clearTemplate = function (templateNames) {
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
    AccordionComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    AccordionComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if (!isExecute$1) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$1) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                }
                else {
                    if (eventName === 'change' || (this.$props && !this.$props.isLazyUpdate)) {
                        this.$emit('update:' + propKey, eventProp[propKey]);
                        this.$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/currentView|selectedDate/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$1) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                }
                else {
                    this.$emit('update:' + propKey, eventProp[propKey]);
                    this.$emit('modelchanged', eventProp[propKey]);
                }
            }
        }
        if ((this.ej2Instances && this.ej2Instances._trigger)) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    AccordionComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    AccordionComponent.prototype.custom = function () {
        this.updated();
    };
    AccordionComponent.prototype.addItem = function (item, index) {
        return this.ej2Instances.addItem(item, index);
    };
    AccordionComponent.prototype.enableItem = function (index, isEnable) {
        return this.ej2Instances.enableItem(index, isEnable);
    };
    AccordionComponent.prototype.expandItem = function (isExpand, index) {
        return this.ej2Instances.expandItem(isExpand, index);
    };
    AccordionComponent.prototype.hideItem = function (index, isHidden) {
        return this.ej2Instances.hideItem(index, isHidden);
    };
    AccordionComponent.prototype.removeItem = function (index) {
        return this.ej2Instances.removeItem(index);
    };
    AccordionComponent.prototype.select = function (index) {
        return this.ej2Instances.select(index);
    };
    AccordionComponent = __decorate$1([
        EJComponentDecorator({
            props: properties,
            model: {
                event: 'modelchanged'
            }
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
    ], AccordionComponent);
    return AccordionComponent;
}(ComponentBase));
var AccordionPlugin = {
    name: 'ejs-accordion',
    install: function (Vue$$1) {
        Vue$$1.component(AccordionPlugin.name, AccordionComponent);
        Vue$$1.component(AccordionItemPlugin.name, AccordionItemDirective);
        Vue$$1.component(AccordionItemsPlugin.name, AccordionItemsDirective);
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
var isExecute$2 = gh ? false : true;
var vueImport$1;
if (!isExecute$2 || parseInt(allVue.version) < 3) {
    vueImport$1 = Vue;
}
else {
    vueImport$1 = Vue$1;
}
var ItemsDirective = /** @class */ (function (_super) {
    __extends$2(ItemsDirective, _super);
    function ItemsDirective() {
        return _super.call(this, arguments) || this;
    }
    ItemsDirective.prototype.render = function (createElement) {
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
    ItemsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    ItemsDirective.prototype.getTag = function () {
        return 'e-items';
    };
    ItemsDirective = __decorate$2([
        EJComponentDecorator({}, isExecute$2)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], ItemsDirective);
    return ItemsDirective;
}(vueImport$1));
var ItemsPlugin = {
    name: 'e-items',
    install: function (Vue$$1) {
        Vue$$1.component(ItemsPlugin.name, ItemsDirective);
    }
};
/**
 * 'e-item' directive represent a item of Vue Toolbar
 * It must be contained in a Toolbar component(`ejs-toolbar`).
 * ```html
 * <ejs-toolbar>
 *   <e-items>
 *    <e-item text='Cut'></e-item>
 *    <e-item text='Copy'></e-item>
 *   </e-items>
 * </ejs-toolbar>
 * ```
 */
var ItemDirective = /** @class */ (function (_super) {
    __extends$2(ItemDirective, _super);
    function ItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemDirective.prototype.render = function () {
        return;
    };
    ItemDirective.prototype.getTag = function () {
        return 'e-item';
    };
    ItemDirective = __decorate$2([
        EJComponentDecorator({}, isExecute$2)
    ], ItemDirective);
    return ItemDirective;
}(vueImport$1));
var ItemPlugin = {
    name: 'e-item',
    install: function (Vue$$1) {
        Vue$$1.component(ItemPlugin.name, ItemDirective);
    }
};

var __extends$3 = (undefined && undefined.__extends) || (function () {
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
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties$1 = ['isLazyUpdate', 'plugins', 'allowKeyboard', 'cssClass', 'enableCollision', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'items', 'locale', 'overflowMode', 'scrollStep', 'width', 'beforeCreate', 'clicked', 'created', 'destroyed'];
var modelProps$1 = [];
var testProp$1 = getProps({ props: properties$1 });
var props$1 = testProp$1[0];
var watch$1 = testProp$1[1];
var emitProbs$1 = Object.keys(watch$1);
emitProbs$1.push('modelchanged', 'update:modelValue');
for (var _i$1 = 0, modelProps_1$1 = modelProps$1; _i$1 < modelProps_1$1.length; _i$1++) {
    var props_1$1 = modelProps_1$1[_i$1];
    emitProbs$1.push('update:' + props_1$1);
}
var isExecute$3 = gh ? false : true;
/**
 * Represents the VueJS Toolbar Component.
 * ```html
 * <ejs-toolbar></ejs-toolbar>
 * ```
 */
var ToolbarComponent = /** @class */ (function (_super) {
    __extends$3(ToolbarComponent, _super);
    function ToolbarComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties$1;
        _this.models = modelProps$1;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-items": "e-item" };
        _this.tagNameMapper = {};
        _this.isVue3 = !isExecute$3;
        _this.ej2Instances = new Toolbar({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    ToolbarComponent.prototype.clearTemplate = function (templateNames) {
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
    ToolbarComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    ToolbarComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    ToolbarComponent.prototype.custom = function () {
        this.updated();
    };
    ToolbarComponent.prototype.addItems = function (items, index) {
        return this.ej2Instances.addItems(items, index);
    };
    ToolbarComponent.prototype.disable = function (value) {
        return this.ej2Instances.disable(value);
    };
    ToolbarComponent.prototype.enableItems = function (items, isEnable) {
        return this.ej2Instances.enableItems(items, isEnable);
    };
    ToolbarComponent.prototype.hideItem = function (index, value) {
        return this.ej2Instances.hideItem(index, value);
    };
    ToolbarComponent.prototype.refreshOverflow = function () {
        return this.ej2Instances.refreshOverflow();
    };
    ToolbarComponent.prototype.removeItems = function (args) {
        return this.ej2Instances.removeItems(args);
    };
    ToolbarComponent = __decorate$3([
        EJComponentDecorator({
            props: properties$1
        }, isExecute$3)
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
    ], ToolbarComponent);
    return ToolbarComponent;
}(ComponentBase));
var ToolbarPlugin = {
    name: 'ejs-toolbar',
    install: function (Vue$$1) {
        Vue$$1.component(ToolbarPlugin.name, ToolbarComponent);
        Vue$$1.component(ItemPlugin.name, ItemDirective);
        Vue$$1.component(ItemsPlugin.name, ItemsDirective);
    }
};

var __extends$4 = (undefined && undefined.__extends) || (function () {
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
var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties$2 = ['isLazyUpdate', 'plugins', 'animationSettings', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'hoverDelay', 'items', 'locale', 'showItemOnClick', 'target', 'template', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'created', 'onClose', 'onOpen', 'select'];
var modelProps$2 = [];
var testProp$2 = getProps({ props: properties$2 });
var props$2 = testProp$2[0];
var watch$2 = testProp$2[1];
var emitProbs$2 = Object.keys(watch$2);
emitProbs$2.push('modelchanged', 'update:modelValue');
for (var _i$2 = 0, modelProps_1$2 = modelProps$2; _i$2 < modelProps_1$2.length; _i$2++) {
    var props_1$2 = modelProps_1$2[_i$2];
    emitProbs$2.push('update:' + props_1$2);
}
var isExecute$4 = gh ? false : true;
/**
 * Represents the Essential JS 2 VueJS ContextMenu Component.
 * ```html
 * <div id='target'>Right click / Touch hold to open the ContextMenu</div>
 * <ejs-contextmenu target='#target' :items='menuItems'></ejs-contextmenu>
 * ```
 */
var ContextMenuComponent = /** @class */ (function (_super) {
    __extends$4(ContextMenuComponent, _super);
    function ContextMenuComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties$2;
        _this.models = modelProps$2;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.isVue3 = !isExecute$4;
        _this.ej2Instances = new ContextMenu({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    ContextMenuComponent.prototype.clearTemplate = function (templateNames) {
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
    ContextMenuComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    ContextMenuComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('ul', slots);
    };
    ContextMenuComponent.prototype.custom = function () {
        this.updated();
    };
    ContextMenuComponent.prototype.close = function () {
        return this.ej2Instances.close();
    };
    ContextMenuComponent.prototype.enableItems = function (items, enable, isUniqueId) {
        return this.ej2Instances.enableItems(items, enable, isUniqueId);
    };
    ContextMenuComponent.prototype.getItemIndex = function (item, isUniqueId) {
        return this.ej2Instances.getItemIndex(item, isUniqueId);
    };
    ContextMenuComponent.prototype.hideItems = function (items, isUniqueId) {
        return this.ej2Instances.hideItems(items, isUniqueId);
    };
    ContextMenuComponent.prototype.insertAfter = function (items, text, isUniqueId) {
        return this.ej2Instances.insertAfter(items, text, isUniqueId);
    };
    ContextMenuComponent.prototype.insertBefore = function (items, text, isUniqueId) {
        return this.ej2Instances.insertBefore(items, text, isUniqueId);
    };
    ContextMenuComponent.prototype.open = function (top, left, target) {
        return this.ej2Instances.open(top, left, target);
    };
    ContextMenuComponent.prototype.removeItems = function (items, isUniqueId) {
        return this.ej2Instances.removeItems(items, isUniqueId);
    };
    ContextMenuComponent.prototype.setItem = function (item, id, isUniqueId) {
        return this.ej2Instances.setItem(item, id, isUniqueId);
    };
    ContextMenuComponent.prototype.showItems = function (items, isUniqueId) {
        return this.ej2Instances.showItems(items, isUniqueId);
    };
    ContextMenuComponent = __decorate$4([
        EJComponentDecorator({
            props: properties$2
        }, isExecute$4)
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
    ], ContextMenuComponent);
    return ContextMenuComponent;
}(ComponentBase));
var ContextMenuPlugin = {
    name: 'ejs-contextmenu',
    install: function (Vue$$1) {
        Vue$$1.component(ContextMenuPlugin.name, ContextMenuComponent);
    }
};

var __extends$5 = (undefined && undefined.__extends) || (function () {
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
var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$5 = gh ? false : true;
var vueImport$2;
if (!isExecute$5 || parseInt(allVue.version) < 3) {
    vueImport$2 = Vue;
}
else {
    vueImport$2 = Vue$1;
}
var BreadcrumbItemsDirective = /** @class */ (function (_super) {
    __extends$5(BreadcrumbItemsDirective, _super);
    function BreadcrumbItemsDirective() {
        return _super.call(this, arguments) || this;
    }
    BreadcrumbItemsDirective.prototype.render = function (createElement) {
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
    BreadcrumbItemsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    BreadcrumbItemsDirective.prototype.getTag = function () {
        return 'e-breadcrumb-items';
    };
    BreadcrumbItemsDirective = __decorate$5([
        EJComponentDecorator({}, isExecute$5)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], BreadcrumbItemsDirective);
    return BreadcrumbItemsDirective;
}(vueImport$2));
var BreadcrumbItemsPlugin = {
    name: 'e-breadcrumb-items',
    install: function (Vue$$1) {
        Vue$$1.component(BreadcrumbItemsPlugin.name, BreadcrumbItemsDirective);
    }
};
/**
 * `e-breadcrumb-item` directive represent a item of the Vue Breadcrumb.
 * It must be contained in a Breadcrumb component(`ejs-breadcrumb`).
 * ```html
 * <ejs-breadcrumb>
 *   <e-breadcrumb-items>
 *    <e-breadcrumb-item text='Home' url='/'></e-breadcrumb-item>
 *    <e-breadcrumb-item text='Index' url='./index'></e-breadcrumb-item>
 *   </e-breadcrumb-items>
 * </ejs-breadcrumb>
 * ```
 */
var BreadcrumbItemDirective = /** @class */ (function (_super) {
    __extends$5(BreadcrumbItemDirective, _super);
    function BreadcrumbItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreadcrumbItemDirective.prototype.render = function () {
        return;
    };
    BreadcrumbItemDirective.prototype.getTag = function () {
        return 'e-breadcrumb-item';
    };
    BreadcrumbItemDirective = __decorate$5([
        EJComponentDecorator({}, isExecute$5)
    ], BreadcrumbItemDirective);
    return BreadcrumbItemDirective;
}(vueImport$2));
var BreadcrumbItemPlugin = {
    name: 'e-breadcrumb-item',
    install: function (Vue$$1) {
        Vue$$1.component(BreadcrumbItemPlugin.name, BreadcrumbItemDirective);
    }
};

var __extends$6 = (undefined && undefined.__extends) || (function () {
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
var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties$3 = ['isLazyUpdate', 'plugins', 'activeItem', 'cssClass', 'disabled', 'enableActiveItemNavigation', 'enableNavigation', 'enablePersistence', 'enableRtl', 'itemTemplate', 'items', 'locale', 'maxItems', 'overflowMode', 'separatorTemplate', 'url', 'beforeItemRender', 'created', 'itemClick'];
var modelProps$3 = ['activeItem'];
var testProp$3 = getProps({ props: properties$3 });
var props$3 = testProp$3[0];
var watch$3 = testProp$3[1];
var emitProbs$3 = Object.keys(watch$3);
emitProbs$3.push('modelchanged', 'update:modelValue');
for (var _i$3 = 0, modelProps_1$3 = modelProps$3; _i$3 < modelProps_1$3.length; _i$3++) {
    var props_1$3 = modelProps_1$3[_i$3];
    emitProbs$3.push('update:' + props_1$3);
}
var isExecute$6 = gh ? false : true;
/**
 * Represents the VueJS Breadcrumb Component.
 * ```html
 * <ejs-breadcrumb :items='breadcrumbItems'></ejs-breadcrumb>
 * ```
 */
var BreadcrumbComponent = /** @class */ (function (_super) {
    __extends$6(BreadcrumbComponent, _super);
    function BreadcrumbComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties$3;
        _this.models = modelProps$3;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-breadcrumb-items": "e-breadcrumb-item" };
        _this.tagNameMapper = { "e-breadcrumb-items": "e-items" };
        _this.isVue3 = !isExecute$6;
        _this.ej2Instances = new Breadcrumb({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    BreadcrumbComponent.prototype.clearTemplate = function (templateNames) {
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
    BreadcrumbComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    BreadcrumbComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if (!isExecute$6) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$6) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                }
                else {
                    if (eventName === 'change' || (this.$props && !this.$props.isLazyUpdate)) {
                        this.$emit('update:' + propKey, eventProp[propKey]);
                        this.$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/currentView|selectedDate/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$6) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                }
                else {
                    this.$emit('update:' + propKey, eventProp[propKey]);
                    this.$emit('modelchanged', eventProp[propKey]);
                }
            }
        }
        if ((this.ej2Instances && this.ej2Instances._trigger)) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    BreadcrumbComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('nav', slots);
    };
    BreadcrumbComponent.prototype.custom = function () {
        this.updated();
    };
    BreadcrumbComponent = __decorate$6([
        EJComponentDecorator({
            props: properties$3,
            model: {
                event: 'modelchanged'
            }
        }, isExecute$6)
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
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}(ComponentBase));
var BreadcrumbPlugin = {
    name: 'ejs-breadcrumb',
    install: function (Vue$$1) {
        Vue$$1.component(BreadcrumbPlugin.name, BreadcrumbComponent);
        Vue$$1.component(BreadcrumbItemPlugin.name, BreadcrumbItemDirective);
        Vue$$1.component(BreadcrumbItemsPlugin.name, BreadcrumbItemsDirective);
    }
};

var __extends$7 = (undefined && undefined.__extends) || (function () {
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
var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$7 = gh ? false : true;
var vueImport$3;
if (!isExecute$7 || parseInt(allVue.version) < 3) {
    vueImport$3 = Vue;
}
else {
    vueImport$3 = Vue$1;
}
var CarouselItemsDirective = /** @class */ (function (_super) {
    __extends$7(CarouselItemsDirective, _super);
    function CarouselItemsDirective() {
        return _super.call(this, arguments) || this;
    }
    CarouselItemsDirective.prototype.render = function (createElement) {
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
    CarouselItemsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    CarouselItemsDirective.prototype.getTag = function () {
        return 'e-carousel-items';
    };
    CarouselItemsDirective = __decorate$7([
        EJComponentDecorator({}, isExecute$7)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], CarouselItemsDirective);
    return CarouselItemsDirective;
}(vueImport$3));
var CarouselItemsPlugin = {
    name: 'e-carousel-items',
    install: function (Vue$$1) {
        Vue$$1.component(CarouselItemsPlugin.name, CarouselItemsDirective);
    }
};
/**
 * `e-carousel-item` directive represent a item of the Vue Carousel.
 * It must be contained in a Carousel component(`ejs-carousel`).
 * ```html
 * <ejs-carousel>
 *   <e-carousel-items>
 *    <e-carousel-item template='itemTemplate'></e-carousel-item>
 *    <e-carousel-item template='secondItemTemplate'></e-carousel-item>
 *   </e-carousel-items>
 * </ejs-carousel>
 * ```
 */
var CarouselItemDirective = /** @class */ (function (_super) {
    __extends$7(CarouselItemDirective, _super);
    function CarouselItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarouselItemDirective.prototype.render = function () {
        return;
    };
    CarouselItemDirective.prototype.getTag = function () {
        return 'e-carousel-item';
    };
    CarouselItemDirective = __decorate$7([
        EJComponentDecorator({}, isExecute$7)
    ], CarouselItemDirective);
    return CarouselItemDirective;
}(vueImport$3));
var CarouselItemPlugin = {
    name: 'e-carousel-item',
    install: function (Vue$$1) {
        Vue$$1.component(CarouselItemPlugin.name, CarouselItemDirective);
    }
};

var __extends$8 = (undefined && undefined.__extends) || (function () {
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
var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties$4 = ['isLazyUpdate', 'plugins', 'animationEffect', 'autoPlay', 'buttonsVisibility', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enableTouchSwipe', 'height', 'htmlAttributes', 'indicatorsTemplate', 'interval', 'itemTemplate', 'items', 'locale', 'loop', 'nextButtonTemplate', 'pauseOnHover', 'playButtonTemplate', 'previousButtonTemplate', 'selectedIndex', 'showIndicators', 'showPlayButton', 'width', 'slideChanged', 'slideChanging'];
var modelProps$4 = ['selectedIndex'];
var testProp$4 = getProps({ props: properties$4 });
var props$4 = testProp$4[0];
var watch$4 = testProp$4[1];
var emitProbs$4 = Object.keys(watch$4);
emitProbs$4.push('modelchanged', 'update:modelValue');
for (var _i$4 = 0, modelProps_1$4 = modelProps$4; _i$4 < modelProps_1$4.length; _i$4++) {
    var props_1$4 = modelProps_1$4[_i$4];
    emitProbs$4.push('update:' + props_1$4);
}
var isExecute$8 = gh ? false : true;
/**
 * Represents the VueJS Carousel Component.
 * ```html
 * <ejs-carousel :items='carouselItems'></ejs-carousel>
 * ```
 */
var CarouselComponent = /** @class */ (function (_super) {
    __extends$8(CarouselComponent, _super);
    function CarouselComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties$4;
        _this.models = modelProps$4;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-carousel-items": "e-carousel-item" };
        _this.tagNameMapper = { "e-carousel-items": "e-items" };
        _this.isVue3 = !isExecute$8;
        _this.ej2Instances = new Carousel({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    CarouselComponent.prototype.clearTemplate = function (templateNames) {
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
    CarouselComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    CarouselComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if (!isExecute$8) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$8) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                }
                else {
                    if (eventName === 'change' || (this.$props && !this.$props.isLazyUpdate)) {
                        this.$emit('update:' + propKey, eventProp[propKey]);
                        this.$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/currentView|selectedDate/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$8) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                }
                else {
                    this.$emit('update:' + propKey, eventProp[propKey]);
                    this.$emit('modelchanged', eventProp[propKey]);
                }
            }
        }
        if ((this.ej2Instances && this.ej2Instances._trigger)) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    CarouselComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    CarouselComponent.prototype.custom = function () {
        this.updated();
    };
    CarouselComponent.prototype.next = function () {
        return this.ej2Instances.next();
    };
    CarouselComponent.prototype.pause = function () {
        return this.ej2Instances.pause();
    };
    CarouselComponent.prototype.play = function () {
        return this.ej2Instances.play();
    };
    CarouselComponent.prototype.prev = function () {
        return this.ej2Instances.prev();
    };
    CarouselComponent = __decorate$8([
        EJComponentDecorator({
            props: properties$4,
            model: {
                event: 'modelchanged'
            }
        }, isExecute$8)
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
    ], CarouselComponent);
    return CarouselComponent;
}(ComponentBase));
var CarouselPlugin = {
    name: 'ejs-carousel',
    install: function (Vue$$1) {
        Vue$$1.component(CarouselPlugin.name, CarouselComponent);
        Vue$$1.component(CarouselItemPlugin.name, CarouselItemDirective);
        Vue$$1.component(CarouselItemsPlugin.name, CarouselItemsDirective);
    }
};

var __extends$9 = (undefined && undefined.__extends) || (function () {
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
var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$9 = gh ? false : true;
var vueImport$4;
if (!isExecute$9 || parseInt(allVue.version) < 3) {
    vueImport$4 = Vue;
}
else {
    vueImport$4 = Vue$1;
}
var TabItemsDirective = /** @class */ (function (_super) {
    __extends$9(TabItemsDirective, _super);
    function TabItemsDirective() {
        return _super.call(this, arguments) || this;
    }
    TabItemsDirective.prototype.render = function (createElement) {
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
    TabItemsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    TabItemsDirective.prototype.getTag = function () {
        return 'e-tabitems';
    };
    TabItemsDirective = __decorate$9([
        EJComponentDecorator({}, isExecute$9)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], TabItemsDirective);
    return TabItemsDirective;
}(vueImport$4));
var TabItemsPlugin = {
    name: 'e-tabitems',
    install: function (Vue$$1) {
        Vue$$1.component(TabItemsPlugin.name, TabItemsDirective);
    }
};
/**
 * 'e-tabitem' directive represent a item of the Vue Tab
 * It must be contained in a Tab component(`ejs-tab`).
 * ```html
 * <ejs-tab>
 *  <e-tabitems>
 *   <e-tabitem :header='Header 1' :content='Content 1'></e-tabitem>
 *   <e-tabitem :header='Header 2' :content='Content 2'></e-tabitem>
 *  <e-tabitems>
 * </ejs-tab>
 * ```
 */
var TabItemDirective = /** @class */ (function (_super) {
    __extends$9(TabItemDirective, _super);
    function TabItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabItemDirective.prototype.render = function () {
        return;
    };
    TabItemDirective.prototype.getTag = function () {
        return 'e-tabitem';
    };
    TabItemDirective = __decorate$9([
        EJComponentDecorator({}, isExecute$9)
    ], TabItemDirective);
    return TabItemDirective;
}(vueImport$4));
var TabItemPlugin = {
    name: 'e-tabitem',
    install: function (Vue$$1) {
        Vue$$1.component(TabItemPlugin.name, TabItemDirective);
    }
};

var __extends$10 = (undefined && undefined.__extends) || (function () {
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
var __decorate$10 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties$5 = ['isLazyUpdate', 'plugins', 'allowDragAndDrop', 'animation', 'cssClass', 'dragArea', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'headerPlacement', 'height', 'heightAdjustMode', 'items', 'loadOn', 'locale', 'overflowMode', 'reorderActiveTab', 'scrollStep', 'selectedItem', 'showCloseButton', 'width', 'added', 'adding', 'created', 'destroyed', 'dragged', 'dragging', 'onDragStart', 'removed', 'removing', 'selected', 'selecting'];
var modelProps$5 = [];
var testProp$5 = getProps({ props: properties$5 });
var props$5 = testProp$5[0];
var watch$5 = testProp$5[1];
var emitProbs$5 = Object.keys(watch$5);
emitProbs$5.push('modelchanged', 'update:modelValue');
for (var _i$5 = 0, modelProps_1$5 = modelProps$5; _i$5 < modelProps_1$5.length; _i$5++) {
    var props_1$5 = modelProps_1$5[_i$5];
    emitProbs$5.push('update:' + props_1$5);
}
var isExecute$10 = gh ? false : true;
/**
 * Represents the VueJS Tab Component.
 * ```html
 * <ejs-tab></ejs-tab>
 * ```
 */
var TabComponent = /** @class */ (function (_super) {
    __extends$10(TabComponent, _super);
    function TabComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties$5;
        _this.models = modelProps$5;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-tabitems": "e-tabitem" };
        _this.tagNameMapper = { "e-tabitems": "e-items" };
        _this.isVue3 = !isExecute$10;
        _this.ej2Instances = new Tab({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    TabComponent.prototype.clearTemplate = function (templateNames) {
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
    TabComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    TabComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    TabComponent.prototype.custom = function () {
        this.updated();
    };
    TabComponent.prototype.addTab = function (items, index) {
        return this.ej2Instances.addTab(items, index);
    };
    TabComponent.prototype.disable = function (value) {
        return this.ej2Instances.disable(value);
    };
    TabComponent.prototype.enableTab = function (index, value) {
        return this.ej2Instances.enableTab(index, value);
    };
    TabComponent.prototype.getItemIndex = function (tabItemId) {
        return this.ej2Instances.getItemIndex(tabItemId);
    };
    TabComponent.prototype.hideTab = function (index, value) {
        return this.ej2Instances.hideTab(index, value);
    };
    TabComponent.prototype.refresh = function () {
        return this.ej2Instances.refresh();
    };
    TabComponent.prototype.refreshActiveTab = function () {
        return this.ej2Instances.refreshActiveTab();
    };
    TabComponent.prototype.removeTab = function (index) {
        return this.ej2Instances.removeTab(index);
    };
    TabComponent.prototype.select = function (args, event) {
        return this.ej2Instances.select(args, event);
    };
    TabComponent = __decorate$10([
        EJComponentDecorator({
            props: properties$5
        }, isExecute$10)
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
    ], TabComponent);
    return TabComponent;
}(ComponentBase));
var TabPlugin = {
    name: 'ejs-tab',
    install: function (Vue$$1) {
        Vue$$1.component(TabPlugin.name, TabComponent);
        Vue$$1.component(TabItemPlugin.name, TabItemDirective);
        Vue$$1.component(TabItemsPlugin.name, TabItemsDirective);
    }
};

var __extends$11 = (undefined && undefined.__extends) || (function () {
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
var __decorate$11 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties$6 = ['isLazyUpdate', 'plugins', 'allowDragAndDrop', 'allowEditing', 'allowMultiSelection', 'allowTextWrap', 'animation', 'autoCheck', 'checkedNodes', 'cssClass', 'disabled', 'dragArea', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'expandOn', 'expandedNodes', 'fields', 'fullRowNavigable', 'fullRowSelect', 'loadOnDemand', 'locale', 'nodeTemplate', 'selectedNodes', 'showCheckBox', 'sortOrder', 'actionFailure', 'created', 'dataBound', 'dataSourceChanged', 'destroyed', 'drawNode', 'keyPress', 'nodeChecked', 'nodeChecking', 'nodeClicked', 'nodeCollapsed', 'nodeCollapsing', 'nodeDragStart', 'nodeDragStop', 'nodeDragging', 'nodeDropped', 'nodeEdited', 'nodeEditing', 'nodeExpanded', 'nodeExpanding', 'nodeSelected', 'nodeSelecting'];
var modelProps$6 = [];
var testProp$6 = getProps({ props: properties$6 });
var props$6 = testProp$6[0];
var watch$6 = testProp$6[1];
var emitProbs$6 = Object.keys(watch$6);
emitProbs$6.push('modelchanged', 'update:modelValue');
for (var _i$6 = 0, modelProps_1$6 = modelProps$6; _i$6 < modelProps_1$6.length; _i$6++) {
    var props_1$6 = modelProps_1$6[_i$6];
    emitProbs$6.push('update:' + props_1$6);
}
var isExecute$11 = gh ? false : true;
/**
 * Represents the EJ2 VueJS TreeView Component.
 * ```html
 * <ejs-treeview></ejs-treeview>
 * ```
 */
var TreeViewComponent = /** @class */ (function (_super) {
    __extends$11(TreeViewComponent, _super);
    function TreeViewComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties$6;
        _this.models = modelProps$6;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.isVue3 = !isExecute$11;
        _this.ej2Instances = new TreeView({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    TreeViewComponent.prototype.clearTemplate = function (templateNames) {
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
    TreeViewComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    TreeViewComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    TreeViewComponent.prototype.custom = function () {
        this.updated();
    };
    TreeViewComponent.prototype.addNodes = function (nodes, target, index, preventTargetExpand) {
        return this.ej2Instances.addNodes(nodes, target, index, preventTargetExpand);
    };
    TreeViewComponent.prototype.beginEdit = function (node) {
        return this.ej2Instances.beginEdit(node);
    };
    TreeViewComponent.prototype.checkAll = function (nodes) {
        return this.ej2Instances.checkAll(nodes);
    };
    TreeViewComponent.prototype.collapseAll = function (nodes, level, excludeHiddenNodes) {
        return this.ej2Instances.collapseAll(nodes, level, excludeHiddenNodes);
    };
    TreeViewComponent.prototype.disableNodes = function (nodes) {
        return this.ej2Instances.disableNodes(nodes);
    };
    TreeViewComponent.prototype.enableNodes = function (nodes) {
        return this.ej2Instances.enableNodes(nodes);
    };
    TreeViewComponent.prototype.ensureVisible = function (node) {
        return this.ej2Instances.ensureVisible(node);
    };
    TreeViewComponent.prototype.expandAll = function (nodes, level, excludeHiddenNodes) {
        return this.ej2Instances.expandAll(nodes, level, excludeHiddenNodes);
    };
    TreeViewComponent.prototype.getAllCheckedNodes = function () {
        return this.ej2Instances.getAllCheckedNodes();
    };
    TreeViewComponent.prototype.getDisabledNodes = function () {
        return this.ej2Instances.getDisabledNodes();
    };
    TreeViewComponent.prototype.getNode = function (node) {
        return this.ej2Instances.getNode(node);
    };
    TreeViewComponent.prototype.getTreeData = function (node) {
        return this.ej2Instances.getTreeData(node);
    };
    TreeViewComponent.prototype.moveNodes = function (sourceNodes, target, index, preventTargetExpand) {
        return this.ej2Instances.moveNodes(sourceNodes, target, index, preventTargetExpand);
    };
    TreeViewComponent.prototype.refreshNode = function (target, newData) {
        return this.ej2Instances.refreshNode(target, newData);
    };
    TreeViewComponent.prototype.removeNodes = function (nodes) {
        return this.ej2Instances.removeNodes(nodes);
    };
    TreeViewComponent.prototype.uncheckAll = function (nodes) {
        return this.ej2Instances.uncheckAll(nodes);
    };
    TreeViewComponent.prototype.updateNode = function (target, newText) {
        return this.ej2Instances.updateNode(target, newText);
    };
    TreeViewComponent = __decorate$11([
        EJComponentDecorator({
            props: properties$6
        }, isExecute$11)
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
    ], TreeViewComponent);
    return TreeViewComponent;
}(ComponentBase));
var TreeViewPlugin = {
    name: 'ejs-treeview',
    install: function (Vue$$1) {
        Vue$$1.component(TreeViewPlugin.name, TreeViewComponent);
    }
};

var __extends$12 = (undefined && undefined.__extends) || (function () {
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
var __decorate$12 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties$7 = ['isLazyUpdate', 'plugins', 'animate', 'closeOnDocumentClick', 'dockSize', 'enableDock', 'enableGestures', 'enablePersistence', 'enableRtl', 'height', 'isOpen', 'locale', 'mediaQuery', 'position', 'showBackdrop', 'target', 'type', 'width', 'zIndex', 'change', 'close', 'created', 'destroyed', 'open'];
var modelProps$7 = ['isOpen'];
var testProp$7 = getProps({ props: properties$7 });
var props$7 = testProp$7[0];
var watch$7 = testProp$7[1];
var emitProbs$7 = Object.keys(watch$7);
emitProbs$7.push('modelchanged', 'update:modelValue');
for (var _i$7 = 0, modelProps_1$7 = modelProps$7; _i$7 < modelProps_1$7.length; _i$7++) {
    var props_1$7 = modelProps_1$7[_i$7];
    emitProbs$7.push('update:' + props_1$7);
}
var isExecute$12 = gh ? false : true;
/**
 *  Represents the Essential JS 2 VueJS Sidebar Component.
 * ```html
 * <ejs-sidebar></ejs-sidebar>
 * ```
 */
var SidebarComponent = /** @class */ (function (_super) {
    __extends$12(SidebarComponent, _super);
    function SidebarComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties$7;
        _this.models = modelProps$7;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.isVue3 = !isExecute$12;
        _this.ej2Instances = new Sidebar({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    SidebarComponent.prototype.clearTemplate = function (templateNames) {
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
    SidebarComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    SidebarComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if (!isExecute$12) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$12) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                }
                else {
                    if (eventName === 'change' || (this.$props && !this.$props.isLazyUpdate)) {
                        this.$emit('update:' + propKey, eventProp[propKey]);
                        this.$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/currentView|selectedDate/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$12) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                }
                else {
                    this.$emit('update:' + propKey, eventProp[propKey]);
                    this.$emit('modelchanged', eventProp[propKey]);
                }
            }
        }
        if ((this.ej2Instances && this.ej2Instances._trigger)) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    SidebarComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    SidebarComponent.prototype.custom = function () {
        this.updated();
    };
    SidebarComponent.prototype.hide = function (e) {
        return this.ej2Instances.hide(e);
    };
    SidebarComponent.prototype.show = function (e) {
        return this.ej2Instances.show(e);
    };
    SidebarComponent.prototype.toggle = function () {
        return this.ej2Instances.toggle();
    };
    SidebarComponent = __decorate$12([
        EJComponentDecorator({
            props: properties$7,
            model: {
                event: 'modelchanged'
            }
        }, isExecute$12)
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
    ], SidebarComponent);
    return SidebarComponent;
}(ComponentBase));
var SidebarPlugin = {
    name: 'ejs-sidebar',
    install: function (Vue$$1) {
        Vue$$1.component(SidebarPlugin.name, SidebarComponent);
    }
};

var __extends$13 = (undefined && undefined.__extends) || (function () {
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
var __decorate$13 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var isExecute$13 = gh ? false : true;
var vueImport$5;
if (!isExecute$13 || parseInt(allVue.version) < 3) {
    vueImport$5 = Vue;
}
else {
    vueImport$5 = Vue$1;
}
var MenuItemsDirective = /** @class */ (function (_super) {
    __extends$13(MenuItemsDirective, _super);
    function MenuItemsDirective() {
        return _super.call(this, arguments) || this;
    }
    MenuItemsDirective.prototype.render = function (createElement) {
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
    MenuItemsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    MenuItemsDirective.prototype.getTag = function () {
        return 'e-menu-items';
    };
    MenuItemsDirective = __decorate$13([
        EJComponentDecorator({}, isExecute$13)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], MenuItemsDirective);
    return MenuItemsDirective;
}(vueImport$5));
var MenuItemsPlugin = {
    name: 'e-menu-items',
    install: function (Vue$$1) {
        Vue$$1.component(MenuItemsPlugin.name, MenuItemsDirective);
    }
};
var MenuItemDirective = /** @class */ (function (_super) {
    __extends$13(MenuItemDirective, _super);
    function MenuItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuItemDirective.prototype.render = function () {
        return;
    };
    MenuItemDirective.prototype.getTag = function () {
        return 'e-';
    };
    MenuItemDirective = __decorate$13([
        EJComponentDecorator({}, isExecute$13)
    ], MenuItemDirective);
    return MenuItemDirective;
}(vueImport$5));
var MenuItemPlugin = {
    name: 'e-',
    install: function (Vue$$1) {
        Vue$$1.component(MenuItemPlugin.name, MenuItemDirective);
    }
};

var __extends$14 = (undefined && undefined.__extends) || (function () {
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
var __decorate$14 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// {{VueImport}}
var properties$8 = ['isLazyUpdate', 'plugins', 'animationSettings', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'hamburgerMode', 'hoverDelay', 'items', 'locale', 'orientation', 'showItemOnClick', 'target', 'template', 'title', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'created', 'onClose', 'onOpen', 'select'];
var modelProps$8 = [];
var testProp$8 = getProps({ props: properties$8 });
var props$8 = testProp$8[0];
var watch$8 = testProp$8[1];
var emitProbs$8 = Object.keys(watch$8);
emitProbs$8.push('modelchanged', 'update:modelValue');
for (var _i$8 = 0, modelProps_1$8 = modelProps$8; _i$8 < modelProps_1$8.length; _i$8++) {
    var props_1$8 = modelProps_1$8[_i$8];
    emitProbs$8.push('update:' + props_1$8);
}
var isExecute$14 = gh ? false : true;
/**
 * Represents the Essential JS 2 VueJS Menu Component.
 * ```html
 * <ejs-menu :items='menuItems'></ejs-menu>
 * ```
 */
var MenuComponent = /** @class */ (function (_super) {
    __extends$14(MenuComponent, _super);
    function MenuComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties$8;
        _this.models = modelProps$8;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-menu-items": "e-" };
        _this.tagNameMapper = { "e-menu-items": "e-items" };
        _this.isVue3 = !isExecute$14;
        _this.ej2Instances = new Menu({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    MenuComponent.prototype.clearTemplate = function (templateNames) {
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
    MenuComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    MenuComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('ul', slots);
    };
    MenuComponent.prototype.custom = function () {
        this.updated();
    };
    MenuComponent.prototype.close = function () {
        return this.ej2Instances.close();
    };
    MenuComponent.prototype.enableItems = function (items, enable, isUniqueId) {
        return this.ej2Instances.enableItems(items, enable, isUniqueId);
    };
    MenuComponent.prototype.getItemIndex = function (item, isUniqueId) {
        return this.ej2Instances.getItemIndex(item, isUniqueId);
    };
    MenuComponent.prototype.hideItems = function (items, isUniqueId) {
        return this.ej2Instances.hideItems(items, isUniqueId);
    };
    MenuComponent.prototype.insertAfter = function (items, text, isUniqueId) {
        return this.ej2Instances.insertAfter(items, text, isUniqueId);
    };
    MenuComponent.prototype.insertBefore = function (items, text, isUniqueId) {
        return this.ej2Instances.insertBefore(items, text, isUniqueId);
    };
    MenuComponent.prototype.open = function () {
        return this.ej2Instances.open();
    };
    MenuComponent.prototype.removeItems = function (items, isUniqueId) {
        return this.ej2Instances.removeItems(items, isUniqueId);
    };
    MenuComponent.prototype.setItem = function (item, id, isUniqueId) {
        return this.ej2Instances.setItem(item, id, isUniqueId);
    };
    MenuComponent.prototype.showItems = function (items, isUniqueId) {
        return this.ej2Instances.showItems(items, isUniqueId);
    };
    MenuComponent = __decorate$14([
        EJComponentDecorator({
            props: properties$8
        }, isExecute$14)
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
    ], MenuComponent);
    return MenuComponent;
}(ComponentBase));
var MenuPlugin = {
    name: 'ejs-menu',
    install: function (Vue$$1) {
        Vue$$1.component(MenuPlugin.name, MenuComponent);
        Vue$$1.component(MenuItemPlugin.name, MenuItemDirective);
        Vue$$1.component(MenuItemsPlugin.name, MenuItemsDirective);
    }
};

export { AccordionItemsDirective, AccordionItemDirective, AccordionItemsPlugin, AccordionItemPlugin, AccordionComponent, AccordionPlugin, ItemsDirective, ItemDirective, ItemsPlugin, ItemPlugin, ToolbarComponent, ToolbarPlugin, ContextMenuComponent, ContextMenuPlugin, BreadcrumbItemsDirective, BreadcrumbItemDirective, BreadcrumbItemsPlugin, BreadcrumbItemPlugin, BreadcrumbComponent, BreadcrumbPlugin, CarouselItemsDirective, CarouselItemDirective, CarouselItemsPlugin, CarouselItemPlugin, CarouselComponent, CarouselPlugin, TabItemsDirective, TabItemDirective, TabItemsPlugin, TabItemPlugin, TabComponent, TabPlugin, TreeViewComponent, TreeViewPlugin, SidebarComponent, SidebarPlugin, MenuItemsDirective, MenuItemDirective, MenuItemsPlugin, MenuItemPlugin, MenuComponent, MenuPlugin };
export * from '@syncfusion/ej2-navigations';
//# sourceMappingURL=ej2-vue-navigations.es5.js.map
