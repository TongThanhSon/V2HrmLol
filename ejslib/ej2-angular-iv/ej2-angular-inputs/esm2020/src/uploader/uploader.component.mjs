var UploaderComponent_1;
import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, ComponentMixins, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { Uploader } from '@syncfusion/ej2-inputs';
import { Template } from '@syncfusion/ej2-angular-base';
import { FilesDirective } from './files.directive';
import * as i0 from "@angular/core";
export const inputs = ['allowedExtensions', 'asyncSettings', 'autoUpload', 'buttons', 'cssClass', 'directoryUpload', 'dropArea', 'dropEffect', 'enablePersistence', 'enableRtl', 'enabled', 'files', 'htmlAttributes', 'locale', 'maxFileSize', 'minFileSize', 'multiple', 'sequentialUpload', 'showFileList', 'template'];
export const outputs = ['focus', 'blur', 'actionComplete', 'beforeRemove', 'beforeUpload', 'canceling', 'change', 'chunkFailure', 'chunkSuccess', 'chunkUploading', 'clearing', 'created', 'failure', 'fileListRendering', 'pausing', 'progress', 'removing', 'rendering', 'resuming', 'selected', 'success', 'uploading'];
export const twoWays = [];
/**
 * Represents the EJ2 Angular Uploader Component.
 * ```html
 * <ejs-uploader></ejs-uploader>
 * ```
 */
let UploaderComponent = UploaderComponent_1 = class UploaderComponent extends Uploader {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['files'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.formContext = new FormBase();
        this.formCompContext = new ComponentBase();
    }
    registerOnChange(registerFunction) {
    }
    registerOnTouched(registerFunction) {
    }
    writeValue(value) {
    }
    setDisabledState(disabled) {
    }
    ngOnInit() {
        this.formCompContext.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.formContext.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.formCompContext.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childFiles;
        this.formCompContext.ngAfterContentChecked(this);
    }
};
UploaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: UploaderComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
UploaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: UploaderComponent, selector: "ejs-uploader", inputs: { allowedExtensions: "allowedExtensions", asyncSettings: "asyncSettings", autoUpload: "autoUpload", buttons: "buttons", cssClass: "cssClass", directoryUpload: "directoryUpload", dropArea: "dropArea", dropEffect: "dropEffect", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enabled: "enabled", files: "files", htmlAttributes: "htmlAttributes", locale: "locale", maxFileSize: "maxFileSize", minFileSize: "minFileSize", multiple: "multiple", sequentialUpload: "sequentialUpload", showFileList: "showFileList", template: "template" }, outputs: { focus: "focus", blur: "blur", actionComplete: "actionComplete", beforeRemove: "beforeRemove", beforeUpload: "beforeUpload", canceling: "canceling", change: "change", chunkFailure: "chunkFailure", chunkSuccess: "chunkSuccess", chunkUploading: "chunkUploading", clearing: "clearing", created: "created", failure: "failure", fileListRendering: "fileListRendering", pausing: "pausing", progress: "progress", removing: "removing", rendering: "rendering", resuming: "resuming", selected: "selected", success: "success", uploading: "uploading" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UploaderComponent_1),
            multi: true
        }
    ], queries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true }, { propertyName: "childFiles", first: true, predicate: FilesDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], UploaderComponent.prototype, "template", void 0);
UploaderComponent = UploaderComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase])
], UploaderComponent);
export { UploaderComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: UploaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-uploader',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UploaderComponent),
                            multi: true
                        }
                    ],
                    queries: {
                        childFiles: new ContentChild(FilesDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { template: [{
                type: ContentChild,
                args: ['template']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3VwbG9hZGVyL3VwbG9hZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9FLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0osT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBK0IsZUFBZSxFQUEwQixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkosT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRW5ELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBYSxDQUFDLG1CQUFtQixFQUFDLGVBQWUsRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxpQkFBaUIsRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLG1CQUFtQixFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLFFBQVEsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxrQkFBa0IsRUFBQyxjQUFjLEVBQUMsVUFBVSxDQUFDLENBQUM7QUFDbFQsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFhLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBQyxjQUFjLEVBQUMsY0FBYyxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLGNBQWMsRUFBQyxnQkFBZ0IsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxtQkFBbUIsRUFB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QUFHLEVBQUUsa0JBQWtCLENBQUM7NEJBQ2hELEtBQUssRUFBRSxJQUFJO3lCQUNkO3FCQUNKO29CQUNELE9BQU8sRUFBRTt3QkFDTCxVQUFVLEVBQUUsSUFBSSxZQUFZLENBQUMsY0FBYyxDQUFDO3FCQUMvQztpQkFDSjsrS0FxQ1UsUUFBUTtzQkFGZCxZQUFZO3VCQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIFZhbHVlUHJvdmlkZXIsIFJlbmRlcmVyMiwgSW5qZWN0b3IsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBmb3J3YXJkUmVmLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50QmFzZSwgSUNvbXBvbmVudEJhc2UsIGFwcGx5TWl4aW5zLCBDb21wb25lbnRNaXhpbnMsIFByb3BlcnR5Q29sbGVjdGlvbkluZm8sIEZvcm1CYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgVXBsb2FkZXIgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItaW5wdXRzJztcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBGaWxlc0RpcmVjdGl2ZSB9IGZyb20gJy4vZmlsZXMuZGlyZWN0aXZlJztcblxuZXhwb3J0IGNvbnN0IGlucHV0czogc3RyaW5nW10gPSBbJ2FsbG93ZWRFeHRlbnNpb25zJywnYXN5bmNTZXR0aW5ncycsJ2F1dG9VcGxvYWQnLCdidXR0b25zJywnY3NzQ2xhc3MnLCdkaXJlY3RvcnlVcGxvYWQnLCdkcm9wQXJlYScsJ2Ryb3BFZmZlY3QnLCdlbmFibGVQZXJzaXN0ZW5jZScsJ2VuYWJsZVJ0bCcsJ2VuYWJsZWQnLCdmaWxlcycsJ2h0bWxBdHRyaWJ1dGVzJywnbG9jYWxlJywnbWF4RmlsZVNpemUnLCdtaW5GaWxlU2l6ZScsJ211bHRpcGxlJywnc2VxdWVudGlhbFVwbG9hZCcsJ3Nob3dGaWxlTGlzdCcsJ3RlbXBsYXRlJ107XG5leHBvcnQgY29uc3Qgb3V0cHV0czogc3RyaW5nW10gPSBbJ2ZvY3VzJywgJ2JsdXInLCAnYWN0aW9uQ29tcGxldGUnLCdiZWZvcmVSZW1vdmUnLCdiZWZvcmVVcGxvYWQnLCdjYW5jZWxpbmcnLCdjaGFuZ2UnLCdjaHVua0ZhaWx1cmUnLCdjaHVua1N1Y2Nlc3MnLCdjaHVua1VwbG9hZGluZycsJ2NsZWFyaW5nJywnY3JlYXRlZCcsJ2ZhaWx1cmUnLCdmaWxlTGlzdFJlbmRlcmluZycsJ3BhdXNpbmcnLCdwcm9ncmVzcycsJ3JlbW92aW5nJywncmVuZGVyaW5nJywncmVzdW1pbmcnLCdzZWxlY3RlZCcsJ3N1Y2Nlc3MnLCd1cGxvYWRpbmcnXTtcbmV4cG9ydCBjb25zdCB0d29XYXlzOiBzdHJpbmdbXSA9IFtdO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIEVKMiBBbmd1bGFyIFVwbG9hZGVyIENvbXBvbmVudC5cbiAqIGBgYGh0bWxcbiAqIDxlanMtdXBsb2FkZXI+PC9lanMtdXBsb2FkZXI+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdlanMtdXBsb2FkZXInLFxuICAgIGlucHV0czogaW5wdXRzLFxuICAgIG91dHB1dHM6IG91dHB1dHMsXG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFVwbG9hZGVyQ29tcG9uZW50KSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1cbiAgICBdLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRGaWxlczogbmV3IENvbnRlbnRDaGlsZChGaWxlc0RpcmVjdGl2ZSlcbiAgICB9XG59KVxuQENvbXBvbmVudE1peGlucyhbQ29tcG9uZW50QmFzZSwgRm9ybUJhc2VdKVxuZXhwb3J0IGNsYXNzIFVwbG9hZGVyQ29tcG9uZW50IGV4dGVuZHMgVXBsb2FkZXIgaW1wbGVtZW50cyBJQ29tcG9uZW50QmFzZSB7XG4gICAgcHVibGljIGZvcm1Db21wQ29udGV4dCA6IGFueTtcbiAgICBwdWJsaWMgZm9ybUNvbnRleHQgOiBhbnk7XG4gICAgcHVibGljIHRhZ09iamVjdHM6IGFueTtcblx0YWN0aW9uQ29tcGxldGU6IGFueTtcblx0YmVmb3JlUmVtb3ZlOiBhbnk7XG5cdGJlZm9yZVVwbG9hZDogYW55O1xuXHRjYW5jZWxpbmc6IGFueTtcblx0Y2hhbmdlOiBhbnk7XG5cdGNodW5rRmFpbHVyZTogYW55O1xuXHRjaHVua1N1Y2Nlc3M6IGFueTtcblx0Y2h1bmtVcGxvYWRpbmc6IGFueTtcblx0Y2xlYXJpbmc6IGFueTtcblx0Y3JlYXRlZDogYW55O1xuXHRmYWlsdXJlOiBhbnk7XG5cdGZpbGVMaXN0UmVuZGVyaW5nOiBhbnk7XG5cdHBhdXNpbmc6IGFueTtcblx0cHJvZ3Jlc3M6IGFueTtcblx0cmVtb3Zpbmc6IGFueTtcblx0cmVuZGVyaW5nOiBhbnk7XG5cdHJlc3VtaW5nOiBhbnk7XG5cdHNlbGVjdGVkOiBhbnk7XG5cdHN1Y2Nlc3M6IGFueTtcblx0cHVibGljIHVwbG9hZGluZzogYW55O1xuICAgIHB1YmxpYyBjaGlsZEZpbGVzOiBhbnk7XG4gICAgcHVibGljIHRhZ3M6IHN0cmluZ1tdID0gWydmaWxlcyddO1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIEhUTUwgc3RyaW5nIHRoYXQgdXNlZCB0byBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgZWFjaCBmaWxlIGluIHRoZSBsaXN0LlxuICAgICAqIFxuICAgICAqID4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHJlZmVyIHRvIHRoZSBbdGVtcGxhdGVdKC4uLy4uL3VwbG9hZGVyL3RlbXBsYXRlLykgc2VjdGlvbiBmcm9tIHRoZSBkb2N1bWVudGF0aW9uLlxuICAgICAqICAgICBcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgndGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIHRlbXBsYXRlOiBhbnk7XG5cbiAgICBwdWJsaWMgZm9jdXM6IGFueTtcbiAgICBwdWJsaWMgYmx1cjogYW55O1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdFbGU6IEVsZW1lbnRSZWYsIHByaXZhdGUgc3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLm5nRWxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzID0gdGhpcy5pbmplY3RlZE1vZHVsZXMgfHwgW107XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5hZGRUd29XYXkuY2FsbCh0aGlzLCB0d29XYXlzKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMuZm9ybUNvbnRleHQgID0gbmV3IEZvcm1CYXNlKCk7XG4gICAgICAgIHRoaXMuZm9ybUNvbXBDb250ZXh0ICA9IG5ldyBDb21wb25lbnRCYXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UocmVnaXN0ZXJGdW5jdGlvbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChyZWdpc3RlckZ1bmN0aW9uOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5mb3JtQ29tcENvbnRleHQubmdPbkluaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3JtQ29udGV4dC5uZ0FmdGVyVmlld0luaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm1Db21wQ29udGV4dC5uZ09uRGVzdHJveSh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRhZ09iamVjdHNbMF0uaW5zdGFuY2UgPSB0aGlzLmNoaWxkRmlsZXM7XG4gICAgICAgIHRoaXMuZm9ybUNvbXBDb250ZXh0Lm5nQWZ0ZXJDb250ZW50Q2hlY2tlZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJFdmVudHM6IChldmVudExpc3Q6IHN0cmluZ1tdKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBhZGRUd29XYXk6IChwcm9wTGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG59XG5cbiJdfQ==