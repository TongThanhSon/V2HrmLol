var __extends = (this && this.__extends) || (function () {
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator, getProps, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';
import { RichTextEditor } from '@syncfusion/ej2-richtexteditor';
// {{VueImport}}
export var properties = ['isLazyUpdate', 'plugins', 'autoSaveOnIdle', 'backgroundColor', 'bulletFormatList', 'cssClass', 'editorMode', 'enableAutoUrl', 'enableHtmlEncode', 'enableHtmlSanitizer', 'enablePersistence', 'enableResize', 'enableRtl', 'enableTabKey', 'enableXhtml', 'enabled', 'enterKey', 'fileManagerSettings', 'floatingToolbarOffset', 'fontColor', 'fontFamily', 'fontSize', 'format', 'formatter', 'height', 'htmlAttributes', 'iframeSettings', 'inlineMode', 'insertImageSettings', 'keyConfig', 'locale', 'maxLength', 'numberFormatList', 'pasteCleanupSettings', 'placeholder', 'quickToolbarSettings', 'readonly', 'saveInterval', 'shiftEnterKey', 'showCharCount', 'tableSettings', 'toolbarSettings', 'undoRedoSteps', 'undoRedoTimer', 'value', 'valueTemplate', 'width', 'actionBegin', 'actionComplete', 'afterImageDelete', 'afterPasteCleanup', 'beforeDialogClose', 'beforeDialogOpen', 'beforeImageDrop', 'beforeImageUpload', 'beforePasteCleanup', 'beforeQuickToolbarOpen', 'beforeSanitizeHtml', 'blur', 'change', 'created', 'destroyed', 'dialogClose', 'dialogOpen', 'focus', 'imageRemoving', 'imageSelected', 'imageUploadFailed', 'imageUploadSuccess', 'imageUploading', 'quickToolbarClose', 'quickToolbarOpen', 'resizeStart', 'resizeStop', 'resizing', 'toolbarClick', 'toolbarStatusUpdate', 'updatedToolbarStatus'];
export var modelProps = ['value'];
export var testProp = getProps({ props: properties });
export var props = testProp[0];
export var watch = testProp[1];
export var emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (var _i = 0, modelProps_1 = modelProps; _i < modelProps_1.length; _i++) {
    var props_1 = modelProps_1[_i];
    emitProbs.push('update:' + props_1);
}
export var isExecute = gh ? false : true;
/**
 * `ejs-richtexteditor` represents the VueJS RichTextEditor Component.
 * ```vue
 * <ejs-richtexteditor></ejs-richtexteditor>
 * ```
 */
var RichTextEditorComponent = /** @class */ (function (_super) {
    __extends(RichTextEditorComponent, _super);
    function RichTextEditorComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = true;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.isVue3 = !isExecute;
        _this.ej2Instances = new RichTextEditor({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        _this.ej2Instances.clearTemplate = _this.clearTemplate;
        _this.updated = _this.updated;
        return _this;
    }
    RichTextEditorComponent.prototype.clearTemplate = function (templateNames) {
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
    RichTextEditorComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    RichTextEditorComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if (!isExecute) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute) {
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
                if (!isExecute) {
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
    RichTextEditorComponent.prototype.render = function (createElement) {
        var h = gh || createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = gh ? this.$slots.default() : this.$slots.default;
        }
        return h('textarea', slots);
    };
    RichTextEditorComponent.prototype.custom = function () {
        this.updated();
    };
    RichTextEditorComponent.prototype.cleanList = function (e) {
        return this.ej2Instances.cleanList(e);
    };
    RichTextEditorComponent.prototype.closeDialog = function (type) {
        return this.ej2Instances.closeDialog(type);
    };
    RichTextEditorComponent.prototype.disableToolbarItem = function (items, muteToolbarUpdate) {
        return this.ej2Instances.disableToolbarItem(items, muteToolbarUpdate);
    };
    RichTextEditorComponent.prototype.enableToolbarItem = function (items, muteToolbarUpdate) {
        return this.ej2Instances.enableToolbarItem(items, muteToolbarUpdate);
    };
    RichTextEditorComponent.prototype.executeCommand = function (commandName, value, option) {
        return this.ej2Instances.executeCommand(commandName, value, option);
    };
    RichTextEditorComponent.prototype.focusIn = function () {
        return this.ej2Instances.focusIn();
    };
    RichTextEditorComponent.prototype.focusOut = function () {
        return this.ej2Instances.focusOut();
    };
    RichTextEditorComponent.prototype.getCharCount = function () {
        return this.ej2Instances.getCharCount();
    };
    RichTextEditorComponent.prototype.getContent = function () {
        return this.ej2Instances.getContent();
    };
    RichTextEditorComponent.prototype.getHtml = function () {
        return this.ej2Instances.getHtml();
    };
    RichTextEditorComponent.prototype.getRange = function () {
        return this.ej2Instances.getRange();
    };
    RichTextEditorComponent.prototype.getSelectedHtml = function () {
        return this.ej2Instances.getSelectedHtml();
    };
    RichTextEditorComponent.prototype.getSelection = function () {
        return this.ej2Instances.getSelection();
    };
    RichTextEditorComponent.prototype.getText = function () {
        return this.ej2Instances.getText();
    };
    RichTextEditorComponent.prototype.getXhtml = function () {
        return this.ej2Instances.getXhtml();
    };
    RichTextEditorComponent.prototype.hideInlineToolbar = function () {
        return this.ej2Instances.hideInlineToolbar();
    };
    RichTextEditorComponent.prototype.print = function () {
        return this.ej2Instances.print();
    };
    RichTextEditorComponent.prototype.refreshUI = function () {
        return this.ej2Instances.refreshUI();
    };
    RichTextEditorComponent.prototype.removeToolbarItem = function (items) {
        return this.ej2Instances.removeToolbarItem(items);
    };
    RichTextEditorComponent.prototype.sanitizeHtml = function (value) {
        return this.ej2Instances.sanitizeHtml(value);
    };
    RichTextEditorComponent.prototype.selectAll = function () {
        return this.ej2Instances.selectAll();
    };
    RichTextEditorComponent.prototype.selectRange = function (range) {
        return this.ej2Instances.selectRange(range);
    };
    RichTextEditorComponent.prototype.showDialog = function (type) {
        return this.ej2Instances.showDialog(type);
    };
    RichTextEditorComponent.prototype.showFullScreen = function () {
        return this.ej2Instances.showFullScreen();
    };
    RichTextEditorComponent.prototype.showInlineToolbar = function () {
        return this.ej2Instances.showInlineToolbar();
    };
    RichTextEditorComponent.prototype.showSourceCode = function () {
        return this.ej2Instances.showSourceCode();
    };
    RichTextEditorComponent = __decorate([
        EJComponentDecorator({
            props: properties,
            model: {
                event: 'modelchanged'
            }
        }, isExecute)
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
    ], RichTextEditorComponent);
    return RichTextEditorComponent;
}(ComponentBase));
export { RichTextEditorComponent };
export var RichTextEditorPlugin = {
    name: 'ejs-richtexteditor',
    install: function (Vue) {
        Vue.component(RichTextEditorPlugin.name, RichTextEditorComponent);
    }
};
