import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { RichTextEditor } from '@syncfusion/ej2-richtexteditor';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * `ejs-richtexteditor` represents the Angular richtexteditor Component.
 * ```html
 * <ejs-richtexteditor></ejs-richtexteditor>
 * ```
 */
export declare class RichTextEditorComponent extends RichTextEditor implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    formCompContext: any;
    formContext: any;
    tagObjects: any;
    actionBegin: any;
    actionComplete: any;
    afterImageDelete: any;
    afterPasteCleanup: any;
    beforeDialogClose: any;
    beforeDialogOpen: any;
    beforeImageDrop: any;
    beforeImageUpload: any;
    beforePasteCleanup: any;
    beforeQuickToolbarOpen: any;
    beforeSanitizeHtml: any;
    blur: any;
    change: any;
    created: any;
    destroyed: any;
    dialogClose: any;
    dialogOpen: any;
    focus: any;
    imageRemoving: any;
    imageSelected: any;
    imageUploadFailed: any;
    imageUploadSuccess: any;
    imageUploading: any;
    quickToolbarClose: any;
    quickToolbarOpen: any;
    resizeStart: any;
    resizeStop: any;
    resizing: any;
    toolbarClick: any;
    toolbarStatusUpdate: any;
    updatedToolbarStatus: any;
    valueChange: any;
    /**
     * Accepts the template design and assigns it as RichTextEditor’s content.
     * The built-in template engine which provides options to compile template string into a executable function.
     * For EX: We have expression evolution as like ES6 expression string literals
     *
     * {% codeBlock src='rich-text-editor/value-template/index.md' %}{% endcodeBlock %}
     *
     * @default null
     */
    valueTemplate: any;
    private skipFromEvent;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    registerOnChange(registerFunction: (_: any) => void): void;
    registerOnTouched(registerFunction: () => void): void;
    writeValue(value: any): void;
    setDisabledState(disabled: boolean): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RichTextEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RichTextEditorComponent, "ejs-richtexteditor", never, { "autoSaveOnIdle": "autoSaveOnIdle"; "backgroundColor": "backgroundColor"; "bulletFormatList": "bulletFormatList"; "cssClass": "cssClass"; "editorMode": "editorMode"; "enableAutoUrl": "enableAutoUrl"; "enableHtmlEncode": "enableHtmlEncode"; "enableHtmlSanitizer": "enableHtmlSanitizer"; "enablePersistence": "enablePersistence"; "enableResize": "enableResize"; "enableRtl": "enableRtl"; "enableTabKey": "enableTabKey"; "enableXhtml": "enableXhtml"; "enabled": "enabled"; "enterKey": "enterKey"; "fileManagerSettings": "fileManagerSettings"; "floatingToolbarOffset": "floatingToolbarOffset"; "fontColor": "fontColor"; "fontFamily": "fontFamily"; "fontSize": "fontSize"; "format": "format"; "formatter": "formatter"; "height": "height"; "htmlAttributes": "htmlAttributes"; "iframeSettings": "iframeSettings"; "inlineMode": "inlineMode"; "insertImageSettings": "insertImageSettings"; "keyConfig": "keyConfig"; "locale": "locale"; "maxLength": "maxLength"; "numberFormatList": "numberFormatList"; "pasteCleanupSettings": "pasteCleanupSettings"; "placeholder": "placeholder"; "quickToolbarSettings": "quickToolbarSettings"; "readonly": "readonly"; "saveInterval": "saveInterval"; "shiftEnterKey": "shiftEnterKey"; "showCharCount": "showCharCount"; "tableSettings": "tableSettings"; "toolbarSettings": "toolbarSettings"; "undoRedoSteps": "undoRedoSteps"; "undoRedoTimer": "undoRedoTimer"; "value": "value"; "valueTemplate": "valueTemplate"; "width": "width"; }, { "actionBegin": "actionBegin"; "actionComplete": "actionComplete"; "afterImageDelete": "afterImageDelete"; "afterPasteCleanup": "afterPasteCleanup"; "beforeDialogClose": "beforeDialogClose"; "beforeDialogOpen": "beforeDialogOpen"; "beforeImageDrop": "beforeImageDrop"; "beforeImageUpload": "beforeImageUpload"; "beforePasteCleanup": "beforePasteCleanup"; "beforeQuickToolbarOpen": "beforeQuickToolbarOpen"; "beforeSanitizeHtml": "beforeSanitizeHtml"; "blur": "blur"; "change": "change"; "created": "created"; "destroyed": "destroyed"; "dialogClose": "dialogClose"; "dialogOpen": "dialogOpen"; "focus": "focus"; "imageRemoving": "imageRemoving"; "imageSelected": "imageSelected"; "imageUploadFailed": "imageUploadFailed"; "imageUploadSuccess": "imageUploadSuccess"; "imageUploading": "imageUploading"; "quickToolbarClose": "quickToolbarClose"; "quickToolbarOpen": "quickToolbarOpen"; "resizeStart": "resizeStart"; "resizeStop": "resizeStop"; "resizing": "resizing"; "toolbarClick": "toolbarClick"; "toolbarStatusUpdate": "toolbarStatusUpdate"; "updatedToolbarStatus": "updatedToolbarStatus"; "valueChange": "valueChange"; }, ["valueTemplate"], never>;
}
