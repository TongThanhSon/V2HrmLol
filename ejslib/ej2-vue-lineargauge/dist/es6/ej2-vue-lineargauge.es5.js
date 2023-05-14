import { LinearGauge } from '@syncfusion/ej2-lineargauge';
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
var RangesDirective = /** @class */ (function (_super) {
    __extends(RangesDirective, _super);
    function RangesDirective() {
        return _super.call(this, arguments) || this;
    }
    RangesDirective.prototype.render = function (createElement) {
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
    RangesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    RangesDirective.prototype.getTag = function () {
        return 'e-ranges';
    };
    RangesDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], RangesDirective);
    return RangesDirective;
}(vueImport));
var RangesPlugin = {
    name: 'e-ranges',
    install: function (Vue$$1) {
        Vue$$1.component(RangesPlugin.name, RangesDirective);
    }
};
/**
 * `Ranges` directive represent a ranges of the VueJS linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-axes>
 * <e-axis>
 * <e-ranges><e-range></e-range></e-ranges>
 * </e-axis>
 * </e-axes>
 * </ejs-lineargauge>
 * ```
 */
var RangeDirective = /** @class */ (function (_super) {
    __extends(RangeDirective, _super);
    function RangeDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeDirective.prototype.render = function () {
        return;
    };
    RangeDirective.prototype.getTag = function () {
        return 'e-range';
    };
    RangeDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], RangeDirective);
    return RangeDirective;
}(vueImport));
var RangePlugin = {
    name: 'e-range',
    install: function (Vue$$1) {
        Vue$$1.component(RangePlugin.name, RangeDirective);
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
var PointersDirective = /** @class */ (function (_super) {
    __extends$1(PointersDirective, _super);
    function PointersDirective() {
        return _super.call(this, arguments) || this;
    }
    PointersDirective.prototype.render = function (createElement) {
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
    PointersDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    PointersDirective.prototype.getTag = function () {
        return 'e-pointers';
    };
    PointersDirective = __decorate$1([
        EJComponentDecorator({}, isExecute$1)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], PointersDirective);
    return PointersDirective;
}(vueImport$1));
var PointersPlugin = {
    name: 'e-pointers',
    install: function (Vue$$1) {
        Vue$$1.component(PointersPlugin.name, PointersDirective);
    }
};
/**
 * `Pointers` directive represent a pointers of the VueJS linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-axes>
 * <e-axis>
 * <e-pointers><e-pointer></e-pointer></e-pointers>
 * </e-axis>
 * </e-axes>
 * </ejs-lineargauge>
 * ```
 */
var PointerDirective = /** @class */ (function (_super) {
    __extends$1(PointerDirective, _super);
    function PointerDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PointerDirective.prototype.render = function () {
        return;
    };
    PointerDirective.prototype.getTag = function () {
        return 'e-pointer';
    };
    PointerDirective = __decorate$1([
        EJComponentDecorator({}, isExecute$1)
    ], PointerDirective);
    return PointerDirective;
}(vueImport$1));
var PointerPlugin = {
    name: 'e-pointer',
    install: function (Vue$$1) {
        Vue$$1.component(PointerPlugin.name, PointerDirective);
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
var vueImport$2;
if (!isExecute$2 || parseInt(allVue.version) < 3) {
    vueImport$2 = Vue;
}
else {
    vueImport$2 = Vue$1;
}
var AxesDirective = /** @class */ (function (_super) {
    __extends$2(AxesDirective, _super);
    function AxesDirective() {
        return _super.call(this, arguments) || this;
    }
    AxesDirective.prototype.render = function (createElement) {
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
    AxesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    AxesDirective.prototype.getTag = function () {
        return 'e-axes';
    };
    AxesDirective = __decorate$2([
        EJComponentDecorator({}, isExecute$2)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], AxesDirective);
    return AxesDirective;
}(vueImport$2));
var AxesPlugin = {
    name: 'e-axes',
    install: function (Vue$$1) {
        Vue$$1.component(AxesPlugin.name, AxesDirective);
    }
};
/**
 * Axes directive represent a axes of the VueJS linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-axes><e-axis></e-axis></e-axes>
 * </ejs-lineargauge>
 * ```
 */
var AxisDirective = /** @class */ (function (_super) {
    __extends$2(AxisDirective, _super);
    function AxisDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AxisDirective.prototype.render = function () {
        return;
    };
    AxisDirective.prototype.getTag = function () {
        return 'e-axis';
    };
    AxisDirective = __decorate$2([
        EJComponentDecorator({}, isExecute$2)
    ], AxisDirective);
    return AxisDirective;
}(vueImport$2));
var AxisPlugin = {
    name: 'e-axis',
    install: function (Vue$$1) {
        Vue$$1.component(AxisPlugin.name, AxisDirective);
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
var isExecute$3 = gh ? false : true;
var vueImport$3;
if (!isExecute$3 || parseInt(allVue.version) < 3) {
    vueImport$3 = Vue;
}
else {
    vueImport$3 = Vue$1;
}
var AnnotationsDirective = /** @class */ (function (_super) {
    __extends$3(AnnotationsDirective, _super);
    function AnnotationsDirective() {
        return _super.call(this, arguments) || this;
    }
    AnnotationsDirective.prototype.render = function (createElement) {
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
    AnnotationsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    AnnotationsDirective.prototype.getTag = function () {
        return 'e-annotations';
    };
    AnnotationsDirective = __decorate$3([
        EJComponentDecorator({}, isExecute$3)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], AnnotationsDirective);
    return AnnotationsDirective;
}(vueImport$3));
var AnnotationsPlugin = {
    name: 'e-annotations',
    install: function (Vue$$1) {
        Vue$$1.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};
/**
 * `Annotations` directive represent a annotations of the VueJS linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-annotations><e-annotation></e-annotation></e-annotations>
 * </ejs-lineargauge>
 * ```
 */
var AnnotationDirective = /** @class */ (function (_super) {
    __extends$3(AnnotationDirective, _super);
    function AnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnotationDirective.prototype.render = function () {
        return;
    };
    AnnotationDirective.prototype.getTag = function () {
        return 'e-annotation';
    };
    AnnotationDirective = __decorate$3([
        EJComponentDecorator({}, isExecute$3)
    ], AnnotationDirective);
    return AnnotationDirective;
}(vueImport$3));
var AnnotationPlugin = {
    name: 'e-annotation',
    install: function (Vue$$1) {
        Vue$$1.component(AnnotationPlugin.name, AnnotationDirective);
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
var properties = ['isLazyUpdate', 'plugins', 'allowImageExport', 'allowMargin', 'allowPdfExport', 'allowPrint', 'annotations', 'axes', 'background', 'border', 'container', 'description', 'edgeLabelPlacement', 'enablePersistence', 'enableRtl', 'format', 'height', 'locale', 'margin', 'orientation', 'rangePalettes', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'animationComplete', 'annotationRender', 'axisLabelRender', 'beforePrint', 'dragEnd', 'dragMove', 'dragStart', 'gaugeMouseDown', 'gaugeMouseLeave', 'gaugeMouseMove', 'gaugeMouseUp', 'load', 'loaded', 'resized', 'tooltipRender', 'valueChange'];
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
var isExecute$4 = gh ? false : true;
/**
 * Represents Vuejs Linear Gauge Component
 * ```vue
 * <ejs-lineargauge></ejs-lineargauge>
 * ```
 */
var LinearGaugeComponent = /** @class */ (function (_super) {
    __extends$4(LinearGaugeComponent, _super);
    function LinearGaugeComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-axes": { "e-axis": { "e-ranges": "e-range", "e-pointers": "e-pointer" } }, "e-annotations": "e-annotation" };
        _this.tagNameMapper = {};
        _this.isVue3 = !isExecute$4;
        _this.ej2Instances = new LinearGauge({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    LinearGaugeComponent.prototype.clearTemplate = function (templateNames) {
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
    LinearGaugeComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    LinearGaugeComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    LinearGaugeComponent.prototype.custom = function () {
        this.updated();
    };
    LinearGaugeComponent.prototype.export = function (type, fileName, orientation, allowDownload) {
        return this.ej2Instances.export(type, fileName, orientation, allowDownload);
    };
    LinearGaugeComponent.prototype.print = function (id) {
        return this.ej2Instances.print(id);
    };
    LinearGaugeComponent.prototype.setAnnotationValue = function (annotationIndex, content, axisValue) {
        return this.ej2Instances.setAnnotationValue(annotationIndex, content, axisValue);
    };
    LinearGaugeComponent.prototype.setPointerValue = function (axisIndex, pointerIndex, value) {
        return this.ej2Instances.setPointerValue(axisIndex, pointerIndex, value);
    };
    LinearGaugeComponent = __decorate$4([
        EJComponentDecorator({
            props: properties
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
    ], LinearGaugeComponent);
    return LinearGaugeComponent;
}(ComponentBase));
var LinearGaugePlugin = {
    name: 'ejs-lineargauge',
    install: function (Vue$$1) {
        Vue$$1.component(LinearGaugePlugin.name, LinearGaugeComponent);
        Vue$$1.component(AxisPlugin.name, AxisDirective);
        Vue$$1.component(AxesPlugin.name, AxesDirective);
        Vue$$1.component(RangePlugin.name, RangeDirective);
        Vue$$1.component(RangesPlugin.name, RangesDirective);
        Vue$$1.component(PointerPlugin.name, PointerDirective);
        Vue$$1.component(PointersPlugin.name, PointersDirective);
        Vue$$1.component(AnnotationPlugin.name, AnnotationDirective);
        Vue$$1.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};

export { RangesDirective, RangeDirective, RangesPlugin, RangePlugin, PointersDirective, PointerDirective, PointersPlugin, PointerPlugin, AxesDirective, AxisDirective, AxesPlugin, AxisPlugin, AnnotationsDirective, AnnotationDirective, AnnotationsPlugin, AnnotationPlugin, LinearGaugeComponent, LinearGaugePlugin };
export * from '@syncfusion/ej2-lineargauge';
//# sourceMappingURL=ej2-vue-lineargauge.es5.js.map
