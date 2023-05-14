import { Maps } from '@syncfusion/ej2-maps';
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
var InitialShapeSelectionsDirective = /** @class */ (function (_super) {
    __extends(InitialShapeSelectionsDirective, _super);
    function InitialShapeSelectionsDirective() {
        return _super.call(this, arguments) || this;
    }
    InitialShapeSelectionsDirective.prototype.render = function (createElement) {
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
    InitialShapeSelectionsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    InitialShapeSelectionsDirective.prototype.getTag = function () {
        return 'e-initialShapeSelections';
    };
    InitialShapeSelectionsDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], InitialShapeSelectionsDirective);
    return InitialShapeSelectionsDirective;
}(vueImport));
var InitialShapeSelectionsPlugin = {
    name: 'e-initialShapeSelections',
    install: function (Vue$$1) {
        Vue$$1.component(InitialShapeSelectionsPlugin.name, InitialShapeSelectionsDirective);
    }
};
/**
 * `InitialShapeSelectionsDirective` directive represent a selection settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-initialShapeSelections>
 * <e-initialShapeSelection>
 * </e-initialShapeSelection>
 * </e-initialShapeSelections>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
var InitialShapeSelectionDirective = /** @class */ (function (_super) {
    __extends(InitialShapeSelectionDirective, _super);
    function InitialShapeSelectionDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InitialShapeSelectionDirective.prototype.render = function () {
        return;
    };
    InitialShapeSelectionDirective.prototype.getTag = function () {
        return 'e-initialShapeSelection';
    };
    InitialShapeSelectionDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], InitialShapeSelectionDirective);
    return InitialShapeSelectionDirective;
}(vueImport));
var InitialShapeSelectionPlugin = {
    name: 'e-initialShapeSelection',
    install: function (Vue$$1) {
        Vue$$1.component(InitialShapeSelectionPlugin.name, InitialShapeSelectionDirective);
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
var MarkersDirective = /** @class */ (function (_super) {
    __extends$1(MarkersDirective, _super);
    function MarkersDirective() {
        return _super.call(this, arguments) || this;
    }
    MarkersDirective.prototype.render = function (createElement) {
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
    MarkersDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    MarkersDirective.prototype.getTag = function () {
        return 'e-markerSettings';
    };
    MarkersDirective = __decorate$1([
        EJComponentDecorator({}, isExecute$1)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], MarkersDirective);
    return MarkersDirective;
}(vueImport$1));
var MarkersPlugin = {
    name: 'e-markerSettings',
    install: function (Vue$$1) {
        Vue$$1.component(MarkersPlugin.name, MarkersDirective);
    }
};
/**
 * `MarkerSettingsDirective` directive represent a marker settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-markerSettings>
 * <e-markerSetting>
 * </e-markerSetting>
 * </e-markerSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
var MarkerDirective = /** @class */ (function (_super) {
    __extends$1(MarkerDirective, _super);
    function MarkerDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarkerDirective.prototype.render = function () {
        return;
    };
    MarkerDirective.prototype.getTag = function () {
        return 'e-markerSetting';
    };
    MarkerDirective = __decorate$1([
        EJComponentDecorator({}, isExecute$1)
    ], MarkerDirective);
    return MarkerDirective;
}(vueImport$1));
var MarkerPlugin = {
    name: 'e-markerSetting',
    install: function (Vue$$1) {
        Vue$$1.component(MarkerPlugin.name, MarkerDirective);
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
var ColorMappingsDirective = /** @class */ (function (_super) {
    __extends$2(ColorMappingsDirective, _super);
    function ColorMappingsDirective() {
        return _super.call(this, arguments) || this;
    }
    ColorMappingsDirective.prototype.render = function (createElement) {
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
    ColorMappingsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    ColorMappingsDirective.prototype.getTag = function () {
        return 'e-colorMappings';
    };
    ColorMappingsDirective = __decorate$2([
        EJComponentDecorator({}, isExecute$2)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], ColorMappingsDirective);
    return ColorMappingsDirective;
}(vueImport$2));
var ColorMappingsPlugin = {
    name: 'e-colorMappings',
    install: function (Vue$$1) {
        Vue$$1.component(ColorMappingsPlugin.name, ColorMappingsDirective);
    }
};
/**
 * `BubblesDirective` directive represent a bubble settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-bubbleSetting>
 * </e-bubbleSetting>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
var ColorMappingDirective = /** @class */ (function (_super) {
    __extends$2(ColorMappingDirective, _super);
    function ColorMappingDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorMappingDirective.prototype.render = function () {
        return;
    };
    ColorMappingDirective.prototype.getTag = function () {
        return 'e-colorMapping';
    };
    ColorMappingDirective = __decorate$2([
        EJComponentDecorator({}, isExecute$2)
    ], ColorMappingDirective);
    return ColorMappingDirective;
}(vueImport$2));
var ColorMappingPlugin = {
    name: 'e-colorMapping',
    install: function (Vue$$1) {
        Vue$$1.component(ColorMappingPlugin.name, ColorMappingDirective);
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
var BubblesDirective = /** @class */ (function (_super) {
    __extends$3(BubblesDirective, _super);
    function BubblesDirective() {
        return _super.call(this, arguments) || this;
    }
    BubblesDirective.prototype.render = function (createElement) {
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
    BubblesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    BubblesDirective.prototype.getTag = function () {
        return 'e-bubbleSettings';
    };
    BubblesDirective = __decorate$3([
        EJComponentDecorator({}, isExecute$3)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], BubblesDirective);
    return BubblesDirective;
}(vueImport$3));
var BubblesPlugin = {
    name: 'e-bubbleSettings',
    install: function (Vue$$1) {
        Vue$$1.component(BubblesPlugin.name, BubblesDirective);
    }
};
/**
 * `BubblesDirective` directive represent a bubble settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-bubbleSetting>
 * </e-bubbleSetting>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
var BubbleDirective = /** @class */ (function (_super) {
    __extends$3(BubbleDirective, _super);
    function BubbleDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BubbleDirective.prototype.render = function () {
        return;
    };
    BubbleDirective.prototype.getTag = function () {
        return 'e-bubbleSetting';
    };
    BubbleDirective = __decorate$3([
        EJComponentDecorator({}, isExecute$3)
    ], BubbleDirective);
    return BubbleDirective;
}(vueImport$3));
var BubblePlugin = {
    name: 'e-bubbleSetting',
    install: function (Vue$$1) {
        Vue$$1.component(BubblePlugin.name, BubbleDirective);
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
var isExecute$4 = gh ? false : true;
var vueImport$4;
if (!isExecute$4 || parseInt(allVue.version) < 3) {
    vueImport$4 = Vue;
}
else {
    vueImport$4 = Vue$1;
}
var NavigationLinesDirective = /** @class */ (function (_super) {
    __extends$4(NavigationLinesDirective, _super);
    function NavigationLinesDirective() {
        return _super.call(this, arguments) || this;
    }
    NavigationLinesDirective.prototype.render = function (createElement) {
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
    NavigationLinesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    NavigationLinesDirective.prototype.getTag = function () {
        return 'e-navigationLineSettings';
    };
    NavigationLinesDirective = __decorate$4([
        EJComponentDecorator({}, isExecute$4)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], NavigationLinesDirective);
    return NavigationLinesDirective;
}(vueImport$4));
var NavigationLinesPlugin = {
    name: 'e-navigationLineSettings',
    install: function (Vue$$1) {
        Vue$$1.component(NavigationLinesPlugin.name, NavigationLinesDirective);
    }
};
/**
 * `NavigationLinesDirective` directive represent a bubble settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-navigationLineSettings>
 * <e-navigationLineSetting>
 * </e-navigationLineSetting>
 * </e-navigationLineSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
var NavigationLineDirective = /** @class */ (function (_super) {
    __extends$4(NavigationLineDirective, _super);
    function NavigationLineDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationLineDirective.prototype.render = function () {
        return;
    };
    NavigationLineDirective.prototype.getTag = function () {
        return 'e-navigationLineSetting';
    };
    NavigationLineDirective = __decorate$4([
        EJComponentDecorator({}, isExecute$4)
    ], NavigationLineDirective);
    return NavigationLineDirective;
}(vueImport$4));
var NavigationLinePlugin = {
    name: 'e-navigationLineSetting',
    install: function (Vue$$1) {
        Vue$$1.component(NavigationLinePlugin.name, NavigationLineDirective);
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
var vueImport$5;
if (!isExecute$5 || parseInt(allVue.version) < 3) {
    vueImport$5 = Vue;
}
else {
    vueImport$5 = Vue$1;
}
var LayersDirective = /** @class */ (function (_super) {
    __extends$5(LayersDirective, _super);
    function LayersDirective() {
        return _super.call(this, arguments) || this;
    }
    LayersDirective.prototype.render = function (createElement) {
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
    LayersDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    LayersDirective.prototype.getTag = function () {
        return 'e-layers';
    };
    LayersDirective = __decorate$5([
        EJComponentDecorator({}, isExecute$5)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], LayersDirective);
    return LayersDirective;
}(vueImport$5));
var LayersPlugin = {
    name: 'e-layers',
    install: function (Vue$$1) {
        Vue$$1.component(LayersPlugin.name, LayersDirective);
    }
};
/**
 * `LayersDirective` directive represent a layers of the react maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer></e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
var LayerDirective = /** @class */ (function (_super) {
    __extends$5(LayerDirective, _super);
    function LayerDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerDirective.prototype.render = function () {
        return;
    };
    LayerDirective.prototype.getTag = function () {
        return 'e-layer';
    };
    LayerDirective = __decorate$5([
        EJComponentDecorator({}, isExecute$5)
    ], LayerDirective);
    return LayerDirective;
}(vueImport$5));
var LayerPlugin = {
    name: 'e-layer',
    install: function (Vue$$1) {
        Vue$$1.component(LayerPlugin.name, LayerDirective);
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
var isExecute$6 = gh ? false : true;
var vueImport$6;
if (!isExecute$6 || parseInt(allVue.version) < 3) {
    vueImport$6 = Vue;
}
else {
    vueImport$6 = Vue$1;
}
var AnnotationsDirective = /** @class */ (function (_super) {
    __extends$6(AnnotationsDirective, _super);
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
        return 'e-maps-annotations';
    };
    AnnotationsDirective = __decorate$6([
        EJComponentDecorator({}, isExecute$6)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], AnnotationsDirective);
    return AnnotationsDirective;
}(vueImport$6));
var AnnotationsPlugin = {
    name: 'e-maps-annotations',
    install: function (Vue$$1) {
        Vue$$1.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};
/**
 * `AnnotationsDirective` directive represent a annotation of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-maps-annotations>
 * <e-maps-annotation></e-maps-annotation>
 * </e-maps-annotations>
 * </ejs-maps>
 * ```
 */
var AnnotationDirective = /** @class */ (function (_super) {
    __extends$6(AnnotationDirective, _super);
    function AnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnotationDirective.prototype.render = function () {
        return;
    };
    AnnotationDirective.prototype.getTag = function () {
        return 'e-maps-annotation';
    };
    AnnotationDirective = __decorate$6([
        EJComponentDecorator({}, isExecute$6)
    ], AnnotationDirective);
    return AnnotationDirective;
}(vueImport$6));
var AnnotationPlugin = {
    name: 'e-maps-annotation',
    install: function (Vue$$1) {
        Vue$$1.component(AnnotationPlugin.name, AnnotationDirective);
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
var properties = ['isLazyUpdate', 'plugins', 'allowImageExport', 'allowPdfExport', 'allowPrint', 'annotations', 'background', 'baseLayerIndex', 'border', 'centerPosition', 'description', 'enablePersistence', 'enableRtl', 'format', 'height', 'layers', 'legendSettings', 'locale', 'mapsArea', 'margin', 'projectionType', 'tabIndex', 'theme', 'titleSettings', 'tooltipDisplayMode', 'useGroupingSeparator', 'width', 'zoomSettings', 'animationComplete', 'annotationRendering', 'beforePrint', 'bubbleClick', 'bubbleMouseMove', 'bubbleRendering', 'click', 'dataLabelRendering', 'doubleClick', 'itemHighlight', 'itemSelection', 'layerRendering', 'legendRendering', 'load', 'loaded', 'markerClick', 'markerClusterClick', 'markerClusterMouseMove', 'markerClusterRendering', 'markerMouseMove', 'markerRendering', 'onclick', 'pan', 'resize', 'rightClick', 'shapeHighlight', 'shapeRendering', 'shapeSelected', 'tooltipRender', 'tooltipRenderComplete', 'zoom'];
var modelProps = ['dataSource'];
var testProp = getProps({ props: properties });
var props = testProp[0];
var watch = testProp[1];
var emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (var _i = 0, modelProps_1 = modelProps; _i < modelProps_1.length; _i++) {
    var props_1 = modelProps_1[_i];
    emitProbs.push('update:' + props_1);
}
var isExecute$7 = gh ? false : true;
/**
 * Represents Vuejs Maps Component
 * ```vue
 * <ejs-maps></ejs-maps>
 * ```
 */
var MapsComponent = /** @class */ (function (_super) {
    __extends$7(MapsComponent, _super);
    function MapsComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-layers": { "e-layer": { "e-initialShapeSelections": "e-initialShapeSelection", "e-markerSettings": "e-markerSetting", "e-bubbleSettings": { "e-bubbleSetting": { "e-colorMappings": "e-colorMapping" } }, "e-navigationLineSettings": "e-navigationLineSetting" } }, "e-maps-annotations": "e-maps-annotation" };
        _this.tagNameMapper = { "e-initialShapeSelections": "e-initialShapeSelection", "e-colorMappings": "e-colorMapping", "e-maps-annotations": "e-annotations" };
        _this.isVue3 = !isExecute$7;
        _this.ej2Instances = new Maps({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    MapsComponent.prototype.clearTemplate = function (templateNames) {
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
    MapsComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    MapsComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if (!isExecute$7) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute$7) {
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
                if (!isExecute$7) {
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
    MapsComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    MapsComponent.prototype.custom = function () {
        this.updated();
    };
    MapsComponent.prototype.addLayer = function (layer) {
        return this.ej2Instances.addLayer(layer);
    };
    MapsComponent.prototype.addMarker = function (layerIndex, markerCollection) {
        return this.ej2Instances.addMarker(layerIndex, markerCollection);
    };
    MapsComponent.prototype.export = function (type, fileName, orientation, allowDownload) {
        return this.ej2Instances.export(type, fileName, orientation, allowDownload);
    };
    MapsComponent.prototype.getBingUrlTemplate = function (url) {
        return this.ej2Instances.getBingUrlTemplate(url);
    };
    MapsComponent.prototype.getGeoLocation = function (layerIndex, x, y) {
        return this.ej2Instances.getGeoLocation(layerIndex, x, y);
    };
    MapsComponent.prototype.getLocalizedLabel = function (key) {
        return this.ej2Instances.getLocalizedLabel(key);
    };
    MapsComponent.prototype.getTileGeoLocation = function (x, y) {
        return this.ej2Instances.getTileGeoLocation(x, y);
    };
    MapsComponent.prototype.mapsOnClick = function (e) {
        return this.ej2Instances.mapsOnClick(e);
    };
    MapsComponent.prototype.mapsOnDoubleClick = function (e) {
        return this.ej2Instances.mapsOnDoubleClick(e);
    };
    MapsComponent.prototype.mapsOnResize = function (e) {
        return this.ej2Instances.mapsOnResize(e);
    };
    MapsComponent.prototype.mouseDownOnMap = function (e) {
        return this.ej2Instances.mouseDownOnMap(e);
    };
    MapsComponent.prototype.mouseEndOnMap = function (e) {
        return this.ej2Instances.mouseEndOnMap(e);
    };
    MapsComponent.prototype.mouseLeaveOnMap = function (e) {
        return this.ej2Instances.mouseLeaveOnMap(e);
    };
    MapsComponent.prototype.mouseMoveOnMap = function (e) {
        return this.ej2Instances.mouseMoveOnMap(e);
    };
    MapsComponent.prototype.onMouseMove = function (e) {
        return this.ej2Instances.onMouseMove(e);
    };
    MapsComponent.prototype.panByDirection = function (direction, mouseLocation) {
        return this.ej2Instances.panByDirection(direction, mouseLocation);
    };
    MapsComponent.prototype.pointToLatLong = function (pageX, pageY) {
        return this.ej2Instances.pointToLatLong(pageX, pageY);
    };
    MapsComponent.prototype.print = function (id) {
        return this.ej2Instances.print(id);
    };
    MapsComponent.prototype.processResponseJsonData = function (processType, data, layer, dataType) {
        return this.ej2Instances.processResponseJsonData(processType, data, layer, dataType);
    };
    MapsComponent.prototype.removeLayer = function (index) {
        return this.ej2Instances.removeLayer(index);
    };
    MapsComponent.prototype.shapeSelection = function (layerIndex, propertyName, name, enable) {
        return this.ej2Instances.shapeSelection(layerIndex, propertyName, name, enable);
    };
    MapsComponent.prototype.zoomByPosition = function (centerPosition, zoomFactor) {
        return this.ej2Instances.zoomByPosition(centerPosition, zoomFactor);
    };
    MapsComponent.prototype.zoomToCoordinates = function (minLatitude, minLongitude, maxLatitude, maxLongitude) {
        return this.ej2Instances.zoomToCoordinates(minLatitude, minLongitude, maxLatitude, maxLongitude);
    };
    MapsComponent = __decorate$7([
        EJComponentDecorator({
            props: properties,
            model: {
                event: 'modelchanged'
            }
        }, isExecute$7)
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
    ], MapsComponent);
    return MapsComponent;
}(ComponentBase));
var MapsPlugin = {
    name: 'ejs-maps',
    install: function (Vue$$1) {
        Vue$$1.component(MapsPlugin.name, MapsComponent);
        Vue$$1.component(LayerPlugin.name, LayerDirective);
        Vue$$1.component(LayersPlugin.name, LayersDirective);
        Vue$$1.component(InitialShapeSelectionPlugin.name, InitialShapeSelectionDirective);
        Vue$$1.component(InitialShapeSelectionsPlugin.name, InitialShapeSelectionsDirective);
        Vue$$1.component(MarkerPlugin.name, MarkerDirective);
        Vue$$1.component(MarkersPlugin.name, MarkersDirective);
        Vue$$1.component(BubblePlugin.name, BubbleDirective);
        Vue$$1.component(BubblesPlugin.name, BubblesDirective);
        Vue$$1.component(ColorMappingPlugin.name, ColorMappingDirective);
        Vue$$1.component(ColorMappingsPlugin.name, ColorMappingsDirective);
        Vue$$1.component(NavigationLinePlugin.name, NavigationLineDirective);
        Vue$$1.component(NavigationLinesPlugin.name, NavigationLinesDirective);
        Vue$$1.component(AnnotationPlugin.name, AnnotationDirective);
        Vue$$1.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};

export { InitialShapeSelectionsDirective, InitialShapeSelectionDirective, InitialShapeSelectionsPlugin, InitialShapeSelectionPlugin, MarkersDirective, MarkerDirective, MarkersPlugin, MarkerPlugin, ColorMappingsDirective, ColorMappingDirective, ColorMappingsPlugin, ColorMappingPlugin, BubblesDirective, BubbleDirective, BubblesPlugin, BubblePlugin, NavigationLinesDirective, NavigationLineDirective, NavigationLinesPlugin, NavigationLinePlugin, LayersDirective, LayerDirective, LayersPlugin, LayerPlugin, AnnotationsDirective, AnnotationDirective, AnnotationsPlugin, AnnotationPlugin, MapsComponent, MapsPlugin };
export * from '@syncfusion/ej2-maps';
//# sourceMappingURL=ej2-vue-maps.es5.js.map
