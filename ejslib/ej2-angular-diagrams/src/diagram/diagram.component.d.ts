import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Diagram } from '@syncfusion/ej2-diagrams';
import { LayersDirective } from './layers.directive';
import { CustomCursorsDirective } from './customcursor.directive';
import { ConnectorsDirective } from './connectors.directive';
import { NodesDirective } from './nodes.directive';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Diagram Component
 * ```html
 * <ej-diagram></ej-diagram>
 * ```
 */
export declare class DiagramComponent extends Diagram implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    animationComplete: any;
    click: any;
    collectionChange: any;
    commandExecute: any;
    connectionChange: any;
    contextMenuBeforeItemRender: any;
    contextMenuClick: any;
    contextMenuOpen: any;
    created: any;
    dataLoaded: any;
    doubleClick: any;
    dragEnter: any;
    dragLeave: any;
    dragOver: any;
    drop: any;
    expandStateChange: any;
    fixedUserHandleClick: any;
    historyChange: any;
    historyStateChange: any;
    keyDown: any;
    keyUp: any;
    mouseEnter: any;
    mouseLeave: any;
    mouseOver: any;
    onImageLoad: any;
    onUserHandleMouseDown: any;
    onUserHandleMouseEnter: any;
    onUserHandleMouseLeave: any;
    onUserHandleMouseUp: any;
    positionChange: any;
    propertyChange: any;
    rotateChange: any;
    scrollChange: any;
    segmentCollectionChange: any;
    selectionChange: any;
    sizeChange: any;
    sourcePointChange: any;
    targetPointChange: any;
    textEdit: any;
    childLayers: QueryList<LayersDirective>;
    childCustomCursor: QueryList<CustomCursorsDirective>;
    childConnectors: QueryList<ConnectorsDirective>;
    childNodes: QueryList<NodesDirective>;
    tags: string[];
    /**
     * Customizes the annotation template
     * @default undefined
     */
    annotationTemplate: any;
    /**
     * Customizes the node template
     * @default undefined
     */
    nodeTemplate: any;
    /**
     * This property represents the template content of a user handle. The user can define any HTML element as a template.
     * @default undefined
     */
    userHandleTemplate: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
}
