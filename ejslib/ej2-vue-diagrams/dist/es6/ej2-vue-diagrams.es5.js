import { Diagram, Overview, SymbolPalette } from '@syncfusion/ej2-diagrams';
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
var LayersDirective = /** @class */ (function (_super) {
    __extends(LayersDirective, _super);
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
    LayersDirective = __decorate([
        EJComponentDecorator({}, isExecute)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], LayersDirective);
    return LayersDirective;
}(vueImport));
var LayersPlugin = {
    name: 'e-layers',
    install: function (Vue$$1) {
        Vue$$1.component(LayersPlugin.name, LayersDirective);
    }
};
/**
 * `e-layers` directive represent a layers of the vue diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```vue
 * <ejs-diagram>
 * <e-layers>
 * <e-layer>
 * </e-layers>
 * </e-layers>
</ejs-diagram>
 * ```
 */
var LayerDirective = /** @class */ (function (_super) {
    __extends(LayerDirective, _super);
    function LayerDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerDirective.prototype.render = function () {
        return;
    };
    LayerDirective.prototype.getTag = function () {
        return 'e-layer';
    };
    LayerDirective = __decorate([
        EJComponentDecorator({}, isExecute)
    ], LayerDirective);
    return LayerDirective;
}(vueImport));
var LayerPlugin = {
    name: 'e-layer',
    install: function (Vue$$1) {
        Vue$$1.component(LayerPlugin.name, LayerDirective);
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
var CustomCursorsDirective = /** @class */ (function (_super) {
    __extends$1(CustomCursorsDirective, _super);
    function CustomCursorsDirective() {
        return _super.call(this, arguments) || this;
    }
    CustomCursorsDirective.prototype.render = function (createElement) {
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
    CustomCursorsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    CustomCursorsDirective.prototype.getTag = function () {
        return 'e-cursormaps';
    };
    CustomCursorsDirective = __decorate$1([
        EJComponentDecorator({}, isExecute$1)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], CustomCursorsDirective);
    return CustomCursorsDirective;
}(vueImport$1));
var CustomCursorsPlugin = {
    name: 'e-cursormaps',
    install: function (Vue$$1) {
        Vue$$1.component(CustomCursorsPlugin.name, CustomCursorsDirective);
    }
};
/**
 * `e-custormaps` directive represent a layers of the vue diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```vue
 * <ejs-diagram>
 * <e-custormaps>
 * <e-custormap>
 * </e-custormap>
 * </e-custormaps>
</ejs-diagram>
 * ```
 */
var CustomCursorDirective = /** @class */ (function (_super) {
    __extends$1(CustomCursorDirective, _super);
    function CustomCursorDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomCursorDirective.prototype.render = function () {
        return;
    };
    CustomCursorDirective.prototype.getTag = function () {
        return 'e-cursormap';
    };
    CustomCursorDirective = __decorate$1([
        EJComponentDecorator({}, isExecute$1)
    ], CustomCursorDirective);
    return CustomCursorDirective;
}(vueImport$1));
var CustomCursorPlugin = {
    name: 'e-cursormap',
    install: function (Vue$$1) {
        Vue$$1.component(CustomCursorPlugin.name, CustomCursorDirective);
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
var ConnectorFixedUserHandlesDirective = /** @class */ (function (_super) {
    __extends$2(ConnectorFixedUserHandlesDirective, _super);
    function ConnectorFixedUserHandlesDirective() {
        return _super.call(this, arguments) || this;
    }
    ConnectorFixedUserHandlesDirective.prototype.render = function (createElement) {
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
    ConnectorFixedUserHandlesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    ConnectorFixedUserHandlesDirective.prototype.getTag = function () {
        return 'e-connector-fixeduserhandles';
    };
    ConnectorFixedUserHandlesDirective = __decorate$2([
        EJComponentDecorator({}, isExecute$2)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], ConnectorFixedUserHandlesDirective);
    return ConnectorFixedUserHandlesDirective;
}(vueImport$2));
var ConnectorFixedUserHandlesPlugin = {
    name: 'e-connector-fixeduserhandles',
    install: function (Vue$$1) {
        Vue$$1.component(ConnectorFixedUserHandlesPlugin.name, ConnectorFixedUserHandlesDirective);
    }
};
/**
 * `e-connector` directive represent a annotation of the vue Diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-connectors>
 * <e-connector>
 * <e-connector-fixeduserhandles>
 * <e-connector-fixeduserhandle>
 * </e-connector-fixeduserhandle>
 * </e-connector-fixeduserhandles>
 * </e-connector>
 * </e-connectors>
 * </ejs-diagram>
 * ```
 */
var ConnectorFixedUserHandleDirective = /** @class */ (function (_super) {
    __extends$2(ConnectorFixedUserHandleDirective, _super);
    function ConnectorFixedUserHandleDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectorFixedUserHandleDirective.prototype.render = function () {
        return;
    };
    ConnectorFixedUserHandleDirective.prototype.getTag = function () {
        return 'e-connector-fixeduserhandle';
    };
    ConnectorFixedUserHandleDirective = __decorate$2([
        EJComponentDecorator({}, isExecute$2)
    ], ConnectorFixedUserHandleDirective);
    return ConnectorFixedUserHandleDirective;
}(vueImport$2));
var ConnectorFixedUserHandlePlugin = {
    name: 'e-connector-fixeduserhandle',
    install: function (Vue$$1) {
        Vue$$1.component(ConnectorFixedUserHandlePlugin.name, ConnectorFixedUserHandleDirective);
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
var ConnectorAnnotationsDirective = /** @class */ (function (_super) {
    __extends$3(ConnectorAnnotationsDirective, _super);
    function ConnectorAnnotationsDirective() {
        return _super.call(this, arguments) || this;
    }
    ConnectorAnnotationsDirective.prototype.render = function (createElement) {
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
    ConnectorAnnotationsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    ConnectorAnnotationsDirective.prototype.getTag = function () {
        return 'e-connector-annotations';
    };
    ConnectorAnnotationsDirective = __decorate$3([
        EJComponentDecorator({}, isExecute$3)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], ConnectorAnnotationsDirective);
    return ConnectorAnnotationsDirective;
}(vueImport$3));
var ConnectorAnnotationsPlugin = {
    name: 'e-connector-annotations',
    install: function (Vue$$1) {
        Vue$$1.component(ConnectorAnnotationsPlugin.name, ConnectorAnnotationsDirective);
    }
};
/**
 * `e-connector-annotation` directive represent a annotation of the vue Diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-connectors>
 * <e-connector>
 * <e-connector-annotations>
 * <e-connector-annotation>
 * </e-connector-annotation>
 * </e-connector-annotations>
 * </e-connector>
 * </e-connectors>
 * </ejs-diagram>
 * ```
 */
var ConnectorAnnotationDirective = /** @class */ (function (_super) {
    __extends$3(ConnectorAnnotationDirective, _super);
    function ConnectorAnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectorAnnotationDirective.prototype.render = function () {
        return;
    };
    ConnectorAnnotationDirective.prototype.getTag = function () {
        return 'e-connector-annotation';
    };
    ConnectorAnnotationDirective = __decorate$3([
        EJComponentDecorator({}, isExecute$3)
    ], ConnectorAnnotationDirective);
    return ConnectorAnnotationDirective;
}(vueImport$3));
var ConnectorAnnotationPlugin = {
    name: 'e-connector-annotation',
    install: function (Vue$$1) {
        Vue$$1.component(ConnectorAnnotationPlugin.name, ConnectorAnnotationDirective);
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
var ConnectorsDirective = /** @class */ (function (_super) {
    __extends$4(ConnectorsDirective, _super);
    function ConnectorsDirective() {
        return _super.call(this, arguments) || this;
    }
    ConnectorsDirective.prototype.render = function (createElement) {
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
    ConnectorsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    ConnectorsDirective.prototype.getTag = function () {
        return 'e-connectors';
    };
    ConnectorsDirective = __decorate$4([
        EJComponentDecorator({}, isExecute$4)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], ConnectorsDirective);
    return ConnectorsDirective;
}(vueImport$4));
var ConnectorsPlugin = {
    name: 'e-connectors',
    install: function (Vue$$1) {
        Vue$$1.component(ConnectorsPlugin.name, ConnectorsDirective);
    }
};
/**
 * `e-connectors` directive represent a connectors of the vue diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-connectors>
 * <e-connector></e-connector>
 * </e-connectors>
 * </ejs-diagram>
 * ```
 */
var ConnectorDirective = /** @class */ (function (_super) {
    __extends$4(ConnectorDirective, _super);
    function ConnectorDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectorDirective.prototype.render = function () {
        return;
    };
    ConnectorDirective.prototype.getTag = function () {
        return 'e-connector';
    };
    ConnectorDirective = __decorate$4([
        EJComponentDecorator({}, isExecute$4)
    ], ConnectorDirective);
    return ConnectorDirective;
}(vueImport$4));
var ConnectorPlugin = {
    name: 'e-connector',
    install: function (Vue$$1) {
        Vue$$1.component(ConnectorPlugin.name, ConnectorDirective);
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
var NodeFixedUserHandlesDirective = /** @class */ (function (_super) {
    __extends$5(NodeFixedUserHandlesDirective, _super);
    function NodeFixedUserHandlesDirective() {
        return _super.call(this, arguments) || this;
    }
    NodeFixedUserHandlesDirective.prototype.render = function (createElement) {
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
    NodeFixedUserHandlesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    NodeFixedUserHandlesDirective.prototype.getTag = function () {
        return 'e-node-fixeduserhandles';
    };
    NodeFixedUserHandlesDirective = __decorate$5([
        EJComponentDecorator({}, isExecute$5)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], NodeFixedUserHandlesDirective);
    return NodeFixedUserHandlesDirective;
}(vueImport$5));
var NodeFixedUserHandlesPlugin = {
    name: 'e-node-fixeduserhandles',
    install: function (Vue$$1) {
        Vue$$1.component(NodeFixedUserHandlesPlugin.name, NodeFixedUserHandlesDirective);
    }
};
/**
 * `e-node` directive represent a annotation of the vue Diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node>
 * <e-node-fixeduserhandles>
 * <e-node-fixeduserhandle>
 * </e-node-fixeduserhandle>
 * </e-node-fixeduserhandles>
 * </e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
var NodeFixedUserHandleDirective = /** @class */ (function (_super) {
    __extends$5(NodeFixedUserHandleDirective, _super);
    function NodeFixedUserHandleDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeFixedUserHandleDirective.prototype.render = function () {
        return;
    };
    NodeFixedUserHandleDirective.prototype.getTag = function () {
        return 'e-node-fixeduserhandle';
    };
    NodeFixedUserHandleDirective = __decorate$5([
        EJComponentDecorator({}, isExecute$5)
    ], NodeFixedUserHandleDirective);
    return NodeFixedUserHandleDirective;
}(vueImport$5));
var NodeFixedUserHandlePlugin = {
    name: 'e-node-fixeduserhandle',
    install: function (Vue$$1) {
        Vue$$1.component(NodeFixedUserHandlePlugin.name, NodeFixedUserHandleDirective);
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
var NodeAnnotationsDirective = /** @class */ (function (_super) {
    __extends$6(NodeAnnotationsDirective, _super);
    function NodeAnnotationsDirective() {
        return _super.call(this, arguments) || this;
    }
    NodeAnnotationsDirective.prototype.render = function (createElement) {
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
    NodeAnnotationsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    NodeAnnotationsDirective.prototype.getTag = function () {
        return 'e-node-annotations';
    };
    NodeAnnotationsDirective = __decorate$6([
        EJComponentDecorator({}, isExecute$6)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], NodeAnnotationsDirective);
    return NodeAnnotationsDirective;
}(vueImport$6));
var NodeAnnotationsPlugin = {
    name: 'e-node-annotations',
    install: function (Vue$$1) {
        Vue$$1.component(NodeAnnotationsPlugin.name, NodeAnnotationsDirective);
    }
};
/**
 * `e-node` directive represent a annotation of the vue Diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node>
 * <e-node-annotations>
 * <e-node-annotation>
 * </e-node-annotation>
 * </e-node-annotations>
 * </e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
var NodeAnnotationDirective = /** @class */ (function (_super) {
    __extends$6(NodeAnnotationDirective, _super);
    function NodeAnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeAnnotationDirective.prototype.render = function () {
        return;
    };
    NodeAnnotationDirective.prototype.getTag = function () {
        return 'e-node-annotation';
    };
    NodeAnnotationDirective = __decorate$6([
        EJComponentDecorator({}, isExecute$6)
    ], NodeAnnotationDirective);
    return NodeAnnotationDirective;
}(vueImport$6));
var NodeAnnotationPlugin = {
    name: 'e-node-annotation',
    install: function (Vue$$1) {
        Vue$$1.component(NodeAnnotationPlugin.name, NodeAnnotationDirective);
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
var vueImport$7;
if (!isExecute$7 || parseInt(allVue.version) < 3) {
    vueImport$7 = Vue;
}
else {
    vueImport$7 = Vue$1;
}
var PortsDirective = /** @class */ (function (_super) {
    __extends$7(PortsDirective, _super);
    function PortsDirective() {
        return _super.call(this, arguments) || this;
    }
    PortsDirective.prototype.render = function (createElement) {
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
    PortsDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    PortsDirective.prototype.getTag = function () {
        return 'e-node-ports';
    };
    PortsDirective = __decorate$7([
        EJComponentDecorator({}, isExecute$7)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], PortsDirective);
    return PortsDirective;
}(vueImport$7));
var PortsPlugin = {
    name: 'e-node-ports',
    install: function (Vue$$1) {
        Vue$$1.component(PortsPlugin.name, PortsDirective);
    }
};
/**
 * `e-port` directive represent a port of the vue Diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node>
 * <e-node-ports>
 * <e-node-port>
 * </e-node-port>
 * </e-node-ports>
 * </e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
var PortDirective = /** @class */ (function (_super) {
    __extends$7(PortDirective, _super);
    function PortDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PortDirective.prototype.render = function () {
        return;
    };
    PortDirective.prototype.getTag = function () {
        return 'e-node-port';
    };
    PortDirective = __decorate$7([
        EJComponentDecorator({}, isExecute$7)
    ], PortDirective);
    return PortDirective;
}(vueImport$7));
var PortPlugin = {
    name: 'e-node-port',
    install: function (Vue$$1) {
        Vue$$1.component(PortPlugin.name, PortDirective);
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
var isExecute$8 = gh ? false : true;
var vueImport$8;
if (!isExecute$8 || parseInt(allVue.version) < 3) {
    vueImport$8 = Vue;
}
else {
    vueImport$8 = Vue$1;
}
var NodesDirective = /** @class */ (function (_super) {
    __extends$8(NodesDirective, _super);
    function NodesDirective() {
        return _super.call(this, arguments) || this;
    }
    NodesDirective.prototype.render = function (createElement) {
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
    NodesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    NodesDirective.prototype.getTag = function () {
        return 'e-nodes';
    };
    NodesDirective = __decorate$8([
        EJComponentDecorator({}, isExecute$8)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], NodesDirective);
    return NodesDirective;
}(vueImport$8));
var NodesPlugin = {
    name: 'e-nodes',
    install: function (Vue$$1) {
        Vue$$1.component(NodesPlugin.name, NodesDirective);
    }
};
/**
 * `e-node` directive represent a nodes of the vue diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node></e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
var NodeDirective = /** @class */ (function (_super) {
    __extends$8(NodeDirective, _super);
    function NodeDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeDirective.prototype.render = function () {
        return;
    };
    NodeDirective.prototype.getTag = function () {
        return 'e-node';
    };
    NodeDirective = __decorate$8([
        EJComponentDecorator({}, isExecute$8)
    ], NodeDirective);
    return NodeDirective;
}(vueImport$8));
var NodePlugin = {
    name: 'e-node',
    install: function (Vue$$1) {
        Vue$$1.component(NodePlugin.name, NodeDirective);
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
var properties = ['isLazyUpdate', 'plugins', 'addInfo', 'annotationTemplate', 'backgroundColor', 'bridgeDirection', 'commandManager', 'connectorDefaults', 'connectors', 'constraints', 'contextMenuSettings', 'customCursor', 'dataSourceSettings', 'diagramSettings', 'drawingObject', 'enableConnectorSplit', 'enablePersistence', 'enableRtl', 'getConnectorDefaults', 'getCustomCursor', 'getCustomProperty', 'getCustomTool', 'getDescription', 'getNodeDefaults', 'height', 'historyManager', 'layers', 'layout', 'locale', 'mode', 'nodeDefaults', 'nodeTemplate', 'nodes', 'pageSettings', 'rulerSettings', 'scrollSettings', 'segmentThumbShape', 'selectedItems', 'serializationSettings', 'setNodeTemplate', 'snapSettings', 'tool', 'tooltip', 'updateSelection', 'userHandleTemplate', 'width', 'animationComplete', 'click', 'collectionChange', 'commandExecute', 'connectionChange', 'contextMenuBeforeItemRender', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataLoaded', 'doubleClick', 'dragEnter', 'dragLeave', 'dragOver', 'drop', 'expandStateChange', 'fixedUserHandleClick', 'historyChange', 'historyStateChange', 'keyDown', 'keyUp', 'mouseEnter', 'mouseLeave', 'mouseOver', 'onImageLoad', 'onUserHandleMouseDown', 'onUserHandleMouseEnter', 'onUserHandleMouseLeave', 'onUserHandleMouseUp', 'positionChange', 'propertyChange', 'rotateChange', 'scrollChange', 'segmentCollectionChange', 'selectionChange', 'sizeChange', 'sourcePointChange', 'targetPointChange', 'textEdit'];
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
var isExecute$9 = gh ? false : true;
/**
 * Represents vue Diagram Component
 * ```html
 * <ejs-diagram></ejs-diagram>
 * ```
 */
var DiagramComponent = /** @class */ (function (_super) {
    __extends$9(DiagramComponent, _super);
    function DiagramComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-layers": "e-layer", "e-cursormaps": "e-cursormap", "e-connectors": { "e-connector": { "e-connector-fixeduserhandles": "e-connector-fixeduserhandle", "e-connector-annotations": "e-connector-annotation" } }, "e-nodes": { "e-node": { "e-node-fixeduserhandles": "e-node-fixeduserhandle", "e-node-annotations": "e-node-annotation", "e-node-ports": "e-node-port" } } };
        _this.tagNameMapper = { "e-cursormaps": "e-customCursor", "e-connector-fixeduserhandles": "e-fixedUserHandles", "e-connector-annotations": "e-annotations", "e-node-fixeduserhandles": "e-fixedUserHandles", "e-node-annotations": "e-annotations", "e-node-ports": "e-ports" };
        _this.isVue3 = !isExecute$9;
        _this.ej2Instances = new Diagram({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    DiagramComponent.prototype.clearTemplate = function (templateNames) {
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
    DiagramComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    DiagramComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    DiagramComponent.prototype.custom = function () {
        this.updated();
    };
    DiagramComponent.prototype.add = function (obj, group) {
        return this.ej2Instances.add(obj, group);
    };
    DiagramComponent.prototype.addChildToGroup = function (group, child) {
        return this.ej2Instances.addChildToGroup(group, child);
    };
    DiagramComponent.prototype.addConnector = function (obj) {
        return this.ej2Instances.addConnector(obj);
    };
    DiagramComponent.prototype.addConnectorLabels = function (obj, labels) {
        return this.ej2Instances.addConnectorLabels(obj, labels);
    };
    DiagramComponent.prototype.addConstraints = function (constraintsType, constraintsValue) {
        return this.ej2Instances.addConstraints(constraintsType, constraintsValue);
    };
    DiagramComponent.prototype.addCustomHistoryEntry = function (entry) {
        return this.ej2Instances.addCustomHistoryEntry(entry);
    };
    DiagramComponent.prototype.addHistoryEntry = function (entry) {
        return this.ej2Instances.addHistoryEntry(entry);
    };
    DiagramComponent.prototype.addLabels = function (obj, labels) {
        return this.ej2Instances.addLabels(obj, labels);
    };
    DiagramComponent.prototype.addLanes = function (node, lane, index) {
        return this.ej2Instances.addLanes(node, lane, index);
    };
    DiagramComponent.prototype.addLayer = function (layer, layerObject) {
        return this.ej2Instances.addLayer(layer, layerObject);
    };
    DiagramComponent.prototype.addNode = function (obj, group) {
        return this.ej2Instances.addNode(obj, group);
    };
    DiagramComponent.prototype.addNodeLabels = function (obj, labels) {
        return this.ej2Instances.addNodeLabels(obj, labels);
    };
    DiagramComponent.prototype.addNodeToLane = function (node, swimLane, lane) {
        return this.ej2Instances.addNodeToLane(node, swimLane, lane);
    };
    DiagramComponent.prototype.addPhases = function (node, phases) {
        return this.ej2Instances.addPhases(node, phases);
    };
    DiagramComponent.prototype.addPorts = function (obj, ports) {
        return this.ej2Instances.addPorts(obj, ports);
    };
    DiagramComponent.prototype.addProcess = function (process, parentId) {
        return this.ej2Instances.addProcess(process, parentId);
    };
    DiagramComponent.prototype.addTextAnnotation = function (annotation, node) {
        return this.ej2Instances.addTextAnnotation(annotation, node);
    };
    DiagramComponent.prototype.align = function (option, objects, type) {
        return this.ej2Instances.align(option, objects, type);
    };
    DiagramComponent.prototype.bringIntoView = function (bound) {
        return this.ej2Instances.bringIntoView(bound);
    };
    DiagramComponent.prototype.bringLayerForward = function (layerName) {
        return this.ej2Instances.bringLayerForward(layerName);
    };
    DiagramComponent.prototype.bringToCenter = function (bound) {
        return this.ej2Instances.bringToCenter(bound);
    };
    DiagramComponent.prototype.bringToFront = function () {
        return this.ej2Instances.bringToFront();
    };
    DiagramComponent.prototype.clear = function () {
        return this.ej2Instances.clear();
    };
    DiagramComponent.prototype.clearHistory = function () {
        return this.ej2Instances.clearHistory();
    };
    DiagramComponent.prototype.clearSelection = function () {
        return this.ej2Instances.clearSelection();
    };
    DiagramComponent.prototype.cloneLayer = function (layerName) {
        return this.ej2Instances.cloneLayer(layerName);
    };
    DiagramComponent.prototype.copy = function () {
        return this.ej2Instances.copy();
    };
    DiagramComponent.prototype.cut = function () {
        return this.ej2Instances.cut();
    };
    DiagramComponent.prototype.distribute = function (option, objects) {
        return this.ej2Instances.distribute(option, objects);
    };
    DiagramComponent.prototype.doLayout = function () {
        return this.ej2Instances.doLayout();
    };
    DiagramComponent.prototype.drag = function (obj, tx, ty) {
        return this.ej2Instances.drag(obj, tx, ty);
    };
    DiagramComponent.prototype.dragSourceEnd = function (obj, tx, ty) {
        return this.ej2Instances.dragSourceEnd(obj, tx, ty);
    };
    DiagramComponent.prototype.dragTargetEnd = function (obj, tx, ty) {
        return this.ej2Instances.dragTargetEnd(obj, tx, ty);
    };
    DiagramComponent.prototype.endGroupAction = function () {
        return this.ej2Instances.endGroupAction();
    };
    DiagramComponent.prototype.exportDiagram = function (options) {
        return this.ej2Instances.exportDiagram(options);
    };
    DiagramComponent.prototype.exportImage = function (image, options) {
        return this.ej2Instances.exportImage(image, options);
    };
    DiagramComponent.prototype.findElementUnderMouse = function (obj, position, padding) {
        return this.ej2Instances.findElementUnderMouse(obj, position, padding);
    };
    DiagramComponent.prototype.findObjectUnderMouse = function (objects, action, inAction) {
        return this.ej2Instances.findObjectUnderMouse(objects, action, inAction);
    };
    DiagramComponent.prototype.findObjectsUnderMouse = function (position, source) {
        return this.ej2Instances.findObjectsUnderMouse(position, source);
    };
    DiagramComponent.prototype.findTargetObjectUnderMouse = function (objects, action, inAction, position, source) {
        return this.ej2Instances.findTargetObjectUnderMouse(objects, action, inAction, position, source);
    };
    DiagramComponent.prototype.fitToPage = function (options) {
        return this.ej2Instances.fitToPage(options);
    };
    DiagramComponent.prototype.getActiveLayer = function () {
        return this.ej2Instances.getActiveLayer();
    };
    DiagramComponent.prototype.getConnectorObject = function (id) {
        return this.ej2Instances.getConnectorObject(id);
    };
    DiagramComponent.prototype.getCursor = function (action, active) {
        return this.ej2Instances.getCursor(action, active);
    };
    DiagramComponent.prototype.getDiagramBounds = function () {
        return this.ej2Instances.getDiagramBounds();
    };
    DiagramComponent.prototype.getDiagramContent = function (styleSheets) {
        return this.ej2Instances.getDiagramContent(styleSheets);
    };
    DiagramComponent.prototype.getEdges = function (args) {
        return this.ej2Instances.getEdges(args);
    };
    DiagramComponent.prototype.getHistoryStack = function (isUndoStack) {
        return this.ej2Instances.getHistoryStack(isUndoStack);
    };
    DiagramComponent.prototype.getNodeObject = function (id) {
        return this.ej2Instances.getNodeObject(id);
    };
    DiagramComponent.prototype.getObject = function (name) {
        return this.ej2Instances.getObject(name);
    };
    DiagramComponent.prototype.getParentId = function (id) {
        return this.ej2Instances.getParentId(id);
    };
    DiagramComponent.prototype.getTool = function (action) {
        return this.ej2Instances.getTool(action);
    };
    DiagramComponent.prototype.group = function () {
        return this.ej2Instances.group();
    };
    DiagramComponent.prototype.hideTooltip = function (obj) {
        return this.ej2Instances.hideTooltip(obj);
    };
    DiagramComponent.prototype.insertData = function (node) {
        return this.ej2Instances.insertData(node);
    };
    DiagramComponent.prototype.loadDiagram = function (data) {
        return this.ej2Instances.loadDiagram(data);
    };
    DiagramComponent.prototype.moveForward = function () {
        return this.ej2Instances.moveForward();
    };
    DiagramComponent.prototype.moveObjects = function (objects, targetLayer) {
        return this.ej2Instances.moveObjects(objects, targetLayer);
    };
    DiagramComponent.prototype.moveObjectsUp = function (node, currentLayer) {
        return this.ej2Instances.moveObjectsUp(node, currentLayer);
    };
    DiagramComponent.prototype.nudge = function (direction, x, y) {
        return this.ej2Instances.nudge(direction, x, y);
    };
    DiagramComponent.prototype.pan = function (horizontalOffset, verticalOffset, focusedPoint, isInteractiveZoomPan) {
        return this.ej2Instances.pan(horizontalOffset, verticalOffset, focusedPoint, isInteractiveZoomPan);
    };
    DiagramComponent.prototype.paste = function (obj) {
        return this.ej2Instances.paste(obj);
    };
    DiagramComponent.prototype.print = function (options) {
        return this.ej2Instances.print(options);
    };
    DiagramComponent.prototype.printImage = function (image, options) {
        return this.ej2Instances.printImage(image, options);
    };
    DiagramComponent.prototype.redo = function () {
        return this.ej2Instances.redo();
    };
    DiagramComponent.prototype.remove = function (obj) {
        return this.ej2Instances.remove(obj);
    };
    DiagramComponent.prototype.removeConstraints = function (constraintsType, constraintsValue) {
        return this.ej2Instances.removeConstraints(constraintsType, constraintsValue);
    };
    DiagramComponent.prototype.removeData = function (node) {
        return this.ej2Instances.removeData(node);
    };
    DiagramComponent.prototype.removeLabels = function (obj, labels) {
        return this.ej2Instances.removeLabels(obj, labels);
    };
    DiagramComponent.prototype.removeLane = function (node, lane) {
        return this.ej2Instances.removeLane(node, lane);
    };
    DiagramComponent.prototype.removeLayer = function (layerId) {
        return this.ej2Instances.removeLayer(layerId);
    };
    DiagramComponent.prototype.removePhase = function (node, phase) {
        return this.ej2Instances.removePhase(node, phase);
    };
    DiagramComponent.prototype.removePorts = function (obj, ports) {
        return this.ej2Instances.removePorts(obj, ports);
    };
    DiagramComponent.prototype.removeProcess = function (id) {
        return this.ej2Instances.removeProcess(id);
    };
    DiagramComponent.prototype.reset = function () {
        return this.ej2Instances.reset();
    };
    DiagramComponent.prototype.resetSegments = function () {
        return this.ej2Instances.resetSegments();
    };
    DiagramComponent.prototype.rotate = function (obj, angle, pivot) {
        return this.ej2Instances.rotate(obj, angle, pivot);
    };
    DiagramComponent.prototype.sameSize = function (option, objects) {
        return this.ej2Instances.sameSize(option, objects);
    };
    DiagramComponent.prototype.saveDiagram = function () {
        return this.ej2Instances.saveDiagram();
    };
    DiagramComponent.prototype.scale = function (obj, sx, sy, pivot) {
        return this.ej2Instances.scale(obj, sx, sy, pivot);
    };
    DiagramComponent.prototype.select = function (objects, multipleSelection, oldValue) {
        return this.ej2Instances.select(objects, multipleSelection, oldValue);
    };
    DiagramComponent.prototype.selectAll = function () {
        return this.ej2Instances.selectAll();
    };
    DiagramComponent.prototype.sendBackward = function () {
        return this.ej2Instances.sendBackward();
    };
    DiagramComponent.prototype.sendLayerBackward = function (layerName) {
        return this.ej2Instances.sendLayerBackward(layerName);
    };
    DiagramComponent.prototype.sendToBack = function () {
        return this.ej2Instances.sendToBack();
    };
    DiagramComponent.prototype.setActiveLayer = function (layerName) {
        return this.ej2Instances.setActiveLayer(layerName);
    };
    DiagramComponent.prototype.setStackLimit = function (stackLimit) {
        return this.ej2Instances.setStackLimit(stackLimit);
    };
    DiagramComponent.prototype.showTooltip = function (obj) {
        return this.ej2Instances.showTooltip(obj);
    };
    DiagramComponent.prototype.startGroupAction = function () {
        return this.ej2Instances.startGroupAction();
    };
    DiagramComponent.prototype.startTextEdit = function (node, id) {
        return this.ej2Instances.startTextEdit(node, id);
    };
    DiagramComponent.prototype.unGroup = function () {
        return this.ej2Instances.unGroup();
    };
    DiagramComponent.prototype.unSelect = function (obj) {
        return this.ej2Instances.unSelect(obj);
    };
    DiagramComponent.prototype.undo = function () {
        return this.ej2Instances.undo();
    };
    DiagramComponent.prototype.updateData = function (node) {
        return this.ej2Instances.updateData(node);
    };
    DiagramComponent.prototype.updateViewPort = function () {
        return this.ej2Instances.updateViewPort();
    };
    DiagramComponent.prototype.zoom = function (factor, focusedPoint) {
        return this.ej2Instances.zoom(factor, focusedPoint);
    };
    DiagramComponent.prototype.zoomTo = function (options) {
        return this.ej2Instances.zoomTo(options);
    };
    DiagramComponent = __decorate$9([
        EJComponentDecorator({
            props: properties
        }, isExecute$9)
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
    ], DiagramComponent);
    return DiagramComponent;
}(ComponentBase));
var DiagramPlugin = {
    name: 'ejs-diagram',
    install: function (Vue$$1) {
        Vue$$1.component(DiagramPlugin.name, DiagramComponent);
        Vue$$1.component(LayerPlugin.name, LayerDirective);
        Vue$$1.component(LayersPlugin.name, LayersDirective);
        Vue$$1.component(CustomCursorPlugin.name, CustomCursorDirective);
        Vue$$1.component(CustomCursorsPlugin.name, CustomCursorsDirective);
        Vue$$1.component(ConnectorPlugin.name, ConnectorDirective);
        Vue$$1.component(ConnectorsPlugin.name, ConnectorsDirective);
        Vue$$1.component(ConnectorFixedUserHandlePlugin.name, ConnectorFixedUserHandleDirective);
        Vue$$1.component(ConnectorFixedUserHandlesPlugin.name, ConnectorFixedUserHandlesDirective);
        Vue$$1.component(ConnectorAnnotationPlugin.name, ConnectorAnnotationDirective);
        Vue$$1.component(ConnectorAnnotationsPlugin.name, ConnectorAnnotationsDirective);
        Vue$$1.component(NodePlugin.name, NodeDirective);
        Vue$$1.component(NodesPlugin.name, NodesDirective);
        Vue$$1.component(NodeFixedUserHandlePlugin.name, NodeFixedUserHandleDirective);
        Vue$$1.component(NodeFixedUserHandlesPlugin.name, NodeFixedUserHandlesDirective);
        Vue$$1.component(NodeAnnotationPlugin.name, NodeAnnotationDirective);
        Vue$$1.component(NodeAnnotationsPlugin.name, NodeAnnotationsDirective);
        Vue$$1.component(PortPlugin.name, PortDirective);
        Vue$$1.component(PortsPlugin.name, PortsDirective);
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
var isExecute$10 = gh ? false : true;
var vueImport$9;
if (!isExecute$10 || parseInt(allVue.version) < 3) {
    vueImport$9 = Vue;
}
else {
    vueImport$9 = Vue$1;
}
var PalettesDirective = /** @class */ (function (_super) {
    __extends$10(PalettesDirective, _super);
    function PalettesDirective() {
        return _super.call(this, arguments) || this;
    }
    PalettesDirective.prototype.render = function (createElement) {
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
    PalettesDirective.prototype.updated = function () {
        if (gh && this.custom) {
            this.custom();
        }
    };
    PalettesDirective.prototype.getTag = function () {
        return 'e-palettes';
    };
    PalettesDirective = __decorate$10([
        EJComponentDecorator({}, isExecute$10)
        /* Start Options({
            inject: {
                custom: {
                    default: null
                }
            }
        }) End */
    ], PalettesDirective);
    return PalettesDirective;
}(vueImport$9));
var PalettesPlugin = {
    name: 'e-palettes',
    install: function (Vue$$1) {
        Vue$$1.component(PalettesPlugin.name, PalettesDirective);
    }
};
/**
 * `Palette` directive represent a axis palette of the vue SymbolPalette.
 * It must be contained in a SymbolPalette component(`SymbolPaletteComponent`).
 * ```html
 * <e-palettes><e-palette></e-palette><e-palettes>
 * ```
 */
var PaletteDirective = /** @class */ (function (_super) {
    __extends$10(PaletteDirective, _super);
    function PaletteDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaletteDirective.prototype.render = function () {
        return;
    };
    PaletteDirective.prototype.getTag = function () {
        return 'e-palette';
    };
    PaletteDirective = __decorate$10([
        EJComponentDecorator({}, isExecute$10)
    ], PaletteDirective);
    return PaletteDirective;
}(vueImport$9));
var PalettePlugin = {
    name: 'e-palette',
    install: function (Vue$$1) {
        Vue$$1.component(PalettePlugin.name, PaletteDirective);
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
var properties$1 = ['isLazyUpdate', 'plugins', 'accessKey', 'allowDrag', 'connectorDefaults', 'enableAnimation', 'enablePersistence', 'enableRtl', 'enableSearch', 'expandMode', 'filterSymbols', 'getConnectorDefaults', 'getNodeDefaults', 'getSymbolInfo', 'getSymbolTemplate', 'height', 'ignoreSymbolsOnSearch', 'locale', 'nodeDefaults', 'palettes', 'symbolDragSize', 'symbolHeight', 'symbolInfo', 'symbolMargin', 'symbolPreview', 'symbolWidth', 'width', 'paletteExpanding', 'paletteSelectionChange'];
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
var isExecute$11 = gh ? false : true;
/**
 * Represents vue SymbolPalette Component
 * ```html
 * <ej-symbol-palette></ej-symbol-palette>
 * ```
 */
var SymbolPaletteComponent = /** @class */ (function (_super) {
    __extends$11(SymbolPaletteComponent, _super);
    function SymbolPaletteComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties$1;
        _this.models = modelProps$1;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-palettes": "e-palette" };
        _this.tagNameMapper = {};
        _this.isVue3 = !isExecute$11;
        _this.ej2Instances = new SymbolPalette({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    SymbolPaletteComponent.prototype.clearTemplate = function (templateNames) {
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
    SymbolPaletteComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    SymbolPaletteComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    SymbolPaletteComponent.prototype.custom = function () {
        this.updated();
    };
    SymbolPaletteComponent.prototype.addPaletteItem = function (paletteName, paletteSymbol, isChild) {
        return this.ej2Instances.addPaletteItem(paletteName, paletteSymbol, isChild);
    };
    SymbolPaletteComponent.prototype.addPalettes = function (palettes) {
        return this.ej2Instances.addPalettes(palettes);
    };
    SymbolPaletteComponent.prototype.defaultLocale = function () {
        return this.ej2Instances.defaultLocale();
    };
    SymbolPaletteComponent.prototype.removePaletteItem = function (paletteName, symbolId) {
        return this.ej2Instances.removePaletteItem(paletteName, symbolId);
    };
    SymbolPaletteComponent.prototype.removePalettes = function (palettes) {
        return this.ej2Instances.removePalettes(palettes);
    };
    SymbolPaletteComponent = __decorate$11([
        EJComponentDecorator({
            props: properties$1
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
    ], SymbolPaletteComponent);
    return SymbolPaletteComponent;
}(ComponentBase));
var SymbolPalettePlugin = {
    name: 'ejs-symbolpalette',
    install: function (Vue$$1) {
        Vue$$1.component(SymbolPalettePlugin.name, SymbolPaletteComponent);
        Vue$$1.component(PalettePlugin.name, PaletteDirective);
        Vue$$1.component(PalettesPlugin.name, PalettesDirective);
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
var properties$2 = ['isLazyUpdate', 'plugins', 'enablePersistence', 'enableRtl', 'height', 'locale', 'sourceID', 'width', 'created'];
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
var isExecute$12 = gh ? false : true;
/**
 * Represents vue Overview Component
 * ```html
 * <ej-overview></ej-overview>
 * ```
 */
var OverviewComponent = /** @class */ (function (_super) {
    __extends$12(OverviewComponent, _super);
    function OverviewComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties$2;
        _this.models = modelProps$2;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.isVue3 = !isExecute$12;
        _this.ej2Instances = new Overview({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    OverviewComponent.prototype.clearTemplate = function (templateNames) {
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
    OverviewComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    OverviewComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    };
    OverviewComponent.prototype.custom = function () {
        this.updated();
    };
    OverviewComponent.prototype.updateHtmlLayer = function (view) {
        return this.ej2Instances.updateHtmlLayer(view);
    };
    OverviewComponent = __decorate$12([
        EJComponentDecorator({
            props: properties$2
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
    ], OverviewComponent);
    return OverviewComponent;
}(ComponentBase));
var OverviewPlugin = {
    name: 'ejs-overview',
    install: function (Vue$$1) {
        Vue$$1.component(OverviewPlugin.name, OverviewComponent);
    }
};

export { LayersDirective, LayerDirective, LayersPlugin, LayerPlugin, CustomCursorsDirective, CustomCursorDirective, CustomCursorsPlugin, CustomCursorPlugin, ConnectorFixedUserHandlesDirective, ConnectorFixedUserHandleDirective, ConnectorFixedUserHandlesPlugin, ConnectorFixedUserHandlePlugin, ConnectorAnnotationsDirective, ConnectorAnnotationDirective, ConnectorAnnotationsPlugin, ConnectorAnnotationPlugin, ConnectorsDirective, ConnectorDirective, ConnectorsPlugin, ConnectorPlugin, NodeFixedUserHandlesDirective, NodeFixedUserHandleDirective, NodeFixedUserHandlesPlugin, NodeFixedUserHandlePlugin, NodeAnnotationsDirective, NodeAnnotationDirective, NodeAnnotationsPlugin, NodeAnnotationPlugin, PortsDirective, PortDirective, PortsPlugin, PortPlugin, NodesDirective, NodeDirective, NodesPlugin, NodePlugin, DiagramComponent, DiagramPlugin, PalettesDirective, PaletteDirective, PalettesPlugin, PalettePlugin, SymbolPaletteComponent, SymbolPalettePlugin, OverviewComponent, OverviewPlugin };
export * from '@syncfusion/ej2-diagrams';
//# sourceMappingURL=ej2-vue-diagrams.es5.js.map
