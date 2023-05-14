import { ProgressBar } from '@syncfusion/ej2-progressbar';
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
var ProgressBarAnnotationsDirective = /** @class */ (function (_super) {
    __extends(ProgressBarAnnotationsDirective, _super);
    function ProgressBarAnnotationsDirective() {
        return _super.call(this, arguments) || this;
    }
    ProgressBarAnnotationsDirective.prototype.render = function (createElement) {
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
    ProgressBarAnnotationsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    ProgressBarAnnotationsDirective.prototype.getTag = function () {
        return 'e-progressbar-annotations';
    };
    ProgressBarAnnotationsDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], ProgressBarAnnotationsDirective);
    return ProgressBarAnnotationsDirective;
}(vueImport));
var ProgressBarAnnotationsPlugin = {
    name: 'e-progressbar-annotations',
    install: function (Vue$$1) {
        Vue$$1.component(ProgressBarAnnotationsPlugin.name, ProgressBarAnnotationsDirective);
    }
};
var ProgressBarAnnotationDirective = /** @class */ (function (_super) {
    __extends(ProgressBarAnnotationDirective, _super);
    function ProgressBarAnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBarAnnotationDirective.prototype.render = function () {
        return;
    };
    ProgressBarAnnotationDirective.prototype.getTag = function () {
        return 'e-progressbar-annotation';
    };
    ProgressBarAnnotationDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], ProgressBarAnnotationDirective);
    return ProgressBarAnnotationDirective;
}(vueImport));
var ProgressBarAnnotationPlugin = {
    name: 'e-progressbar-annotation',
    install: function (Vue$$1) {
        Vue$$1.component(ProgressBarAnnotationPlugin.name, ProgressBarAnnotationDirective);
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
var properties = ['isLazyUpdate', 'plugins', 'animation', 'annotations', 'cornerRadius', 'enablePersistence', 'enablePieProgress', 'enableProgressSegments', 'enableRtl', 'endAngle', 'gapWidth', 'height', 'innerRadius', 'isActive', 'isGradient', 'isIndeterminate', 'isStriped', 'labelOnTrack', 'labelStyle', 'locale', 'margin', 'maximum', 'minimum', 'progressColor', 'progressThickness', 'radius', 'rangeColors', 'role', 'secondaryProgress', 'segmentColor', 'segmentCount', 'showProgressValue', 'startAngle', 'theme', 'trackColor', 'trackThickness', 'type', 'value', 'width', 'animationComplete', 'load', 'loaded', 'mouseClick', 'mouseDown', 'mouseLeave', 'mouseMove', 'mouseUp', 'progressCompleted', 'textRender', 'valueChanged'];
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
 * Represents Vuejs ProgressBar Component
 * ```vue
 * <ejs-progressbar></ejs-progressbar>
 * ```
 */
var ProgressBarComponent = /** @class */ (function (_super) {
    __extends$1(ProgressBarComponent, _super);
    function ProgressBarComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-progressbar-annotations": "e-progressbar-annotation" };
        _this.tagNameMapper = { "e-progressbar-annotations": "e-annotations" };
        _this.isVue3 = !isExecute$1;
        _this.ej2Instances = new ProgressBar({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    ProgressBarComponent.prototype.clearTemplate = function (templateNames) {
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
    ProgressBarComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    ProgressBarComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    ProgressBarComponent.prototype.custom = function () {
        this.updated();
    };
    ProgressBarComponent.prototype.calculateProgressRange = function (value, minimum, maximum) {
        return this.ej2Instances.calculateProgressRange(value, minimum, maximum);
    };
    ProgressBarComponent.prototype.calculateSegmentSize = function (width, thickness) {
        return this.ej2Instances.calculateSegmentSize(width, thickness);
    };
    ProgressBarComponent.prototype.createClipPath = function (clipPath, range, d, refresh, thickness, isLabel, isMaximum) {
        return this.ej2Instances.createClipPath(clipPath, range, d, refresh, thickness, isLabel, isMaximum);
    };
    ProgressBarComponent.prototype.getPathLine = function (x, width, thickness) {
        return this.ej2Instances.getPathLine(x, width, thickness);
    };
    ProgressBarComponent.prototype.hide = function () {
        return this.ej2Instances.hide();
    };
    ProgressBarComponent.prototype.removeSvg = function () {
        return this.ej2Instances.removeSvg();
    };
    ProgressBarComponent.prototype.requiredModules = function () {
        return this.ej2Instances.requiredModules();
    };
    ProgressBarComponent.prototype.show = function () {
        return this.ej2Instances.show();
    };
    ProgressBarComponent = __decorate$1([
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
    ], ProgressBarComponent);
    return ProgressBarComponent;
}(ComponentBase));
var ProgressBarPlugin = {
    name: 'ejs-progressbar',
    install: function (Vue$$1) {
        Vue$$1.component(ProgressBarPlugin.name, ProgressBarComponent);
        Vue$$1.component(ProgressBarAnnotationPlugin.name, ProgressBarAnnotationDirective);
        Vue$$1.component(ProgressBarAnnotationsPlugin.name, ProgressBarAnnotationsDirective);
    }
};

export { ProgressBarAnnotationsDirective, ProgressBarAnnotationDirective, ProgressBarAnnotationsPlugin, ProgressBarAnnotationPlugin, ProgressBarComponent, ProgressBarPlugin };
export * from '@syncfusion/ej2-progressbar';
//# sourceMappingURL=ej2-vue-progressbar.es5.js.map
