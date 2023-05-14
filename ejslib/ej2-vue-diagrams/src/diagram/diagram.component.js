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
import { ComponentBase, EJComponentDecorator, getProps, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';
import { Diagram } from '@syncfusion/ej2-diagrams';
import { LayersDirective, LayerDirective, LayersPlugin, LayerPlugin } from './layers.directive';
import { CustomCursorsDirective, CustomCursorDirective, CustomCursorsPlugin, CustomCursorPlugin } from './customcursor.directive';
import { ConnectorFixedUserHandlesDirective, ConnectorFixedUserHandleDirective, ConnectorFixedUserHandlesPlugin, ConnectorFixedUserHandlePlugin } from './connector-fixeduserhandle.directive';
import { ConnectorAnnotationsDirective, ConnectorAnnotationDirective, ConnectorAnnotationsPlugin, ConnectorAnnotationPlugin } from './connector-annotation.directive';
import { ConnectorsDirective, ConnectorDirective, ConnectorsPlugin, ConnectorPlugin } from './connectors.directive';
import { NodeFixedUserHandlesDirective, NodeFixedUserHandleDirective, NodeFixedUserHandlesPlugin, NodeFixedUserHandlePlugin } from './node-fixeduserhandle.directive';
import { NodeAnnotationsDirective, NodeAnnotationDirective, NodeAnnotationsPlugin, NodeAnnotationPlugin } from './node-annotation.directive';
import { PortsDirective, PortDirective, PortsPlugin, PortPlugin } from './ports.directive';
import { NodesDirective, NodeDirective, NodesPlugin, NodePlugin } from './nodes.directive';
// {{VueImport}}
export var properties = ['isLazyUpdate', 'plugins', 'addInfo', 'annotationTemplate', 'backgroundColor', 'bridgeDirection', 'commandManager', 'connectorDefaults', 'connectors', 'constraints', 'contextMenuSettings', 'customCursor', 'dataSourceSettings', 'diagramSettings', 'drawingObject', 'enableConnectorSplit', 'enablePersistence', 'enableRtl', 'getConnectorDefaults', 'getCustomCursor', 'getCustomProperty', 'getCustomTool', 'getDescription', 'getNodeDefaults', 'height', 'historyManager', 'layers', 'layout', 'locale', 'mode', 'nodeDefaults', 'nodeTemplate', 'nodes', 'pageSettings', 'rulerSettings', 'scrollSettings', 'segmentThumbShape', 'selectedItems', 'serializationSettings', 'setNodeTemplate', 'snapSettings', 'tool', 'tooltip', 'updateSelection', 'userHandleTemplate', 'width', 'animationComplete', 'click', 'collectionChange', 'commandExecute', 'connectionChange', 'contextMenuBeforeItemRender', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataLoaded', 'doubleClick', 'dragEnter', 'dragLeave', 'dragOver', 'drop', 'expandStateChange', 'fixedUserHandleClick', 'historyChange', 'historyStateChange', 'keyDown', 'keyUp', 'mouseEnter', 'mouseLeave', 'mouseOver', 'onImageLoad', 'onUserHandleMouseDown', 'onUserHandleMouseEnter', 'onUserHandleMouseLeave', 'onUserHandleMouseUp', 'positionChange', 'propertyChange', 'rotateChange', 'scrollChange', 'segmentCollectionChange', 'selectionChange', 'sizeChange', 'sourcePointChange', 'targetPointChange', 'textEdit'];
export var modelProps = [];
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
 * Represents vue Diagram Component
 * ```html
 * <ejs-diagram></ejs-diagram>
 * ```
 */
var DiagramComponent = /** @class */ (function (_super) {
    __extends(DiagramComponent, _super);
    function DiagramComponent() {
        var _this = _super.call(this, arguments) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-layers": "e-layer", "e-cursormaps": "e-cursormap", "e-connectors": { "e-connector": { "e-connector-fixeduserhandles": "e-connector-fixeduserhandle", "e-connector-annotations": "e-connector-annotation" } }, "e-nodes": { "e-node": { "e-node-fixeduserhandles": "e-node-fixeduserhandle", "e-node-annotations": "e-node-annotation", "e-node-ports": "e-node-port" } } };
        _this.tagNameMapper = { "e-cursormaps": "e-customCursor", "e-connector-fixeduserhandles": "e-fixedUserHandles", "e-connector-annotations": "e-annotations", "e-node-fixeduserhandles": "e-fixedUserHandles", "e-node-annotations": "e-annotations", "e-node-ports": "e-ports" };
        _this.isVue3 = !isExecute;
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
    DiagramComponent = __decorate([
        EJComponentDecorator({
            props: properties
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
    ], DiagramComponent);
    return DiagramComponent;
}(ComponentBase));
export { DiagramComponent };
export var DiagramPlugin = {
    name: 'ejs-diagram',
    install: function (Vue) {
        Vue.component(DiagramPlugin.name, DiagramComponent);
        Vue.component(LayerPlugin.name, LayerDirective);
        Vue.component(LayersPlugin.name, LayersDirective);
        Vue.component(CustomCursorPlugin.name, CustomCursorDirective);
        Vue.component(CustomCursorsPlugin.name, CustomCursorsDirective);
        Vue.component(ConnectorPlugin.name, ConnectorDirective);
        Vue.component(ConnectorsPlugin.name, ConnectorsDirective);
        Vue.component(ConnectorFixedUserHandlePlugin.name, ConnectorFixedUserHandleDirective);
        Vue.component(ConnectorFixedUserHandlesPlugin.name, ConnectorFixedUserHandlesDirective);
        Vue.component(ConnectorAnnotationPlugin.name, ConnectorAnnotationDirective);
        Vue.component(ConnectorAnnotationsPlugin.name, ConnectorAnnotationsDirective);
        Vue.component(NodePlugin.name, NodeDirective);
        Vue.component(NodesPlugin.name, NodesDirective);
        Vue.component(NodeFixedUserHandlePlugin.name, NodeFixedUserHandleDirective);
        Vue.component(NodeFixedUserHandlesPlugin.name, NodeFixedUserHandlesDirective);
        Vue.component(NodeAnnotationPlugin.name, NodeAnnotationDirective);
        Vue.component(NodeAnnotationsPlugin.name, NodeAnnotationsDirective);
        Vue.component(PortPlugin.name, PortDirective);
        Vue.component(PortsPlugin.name, PortsDirective);
    }
};
