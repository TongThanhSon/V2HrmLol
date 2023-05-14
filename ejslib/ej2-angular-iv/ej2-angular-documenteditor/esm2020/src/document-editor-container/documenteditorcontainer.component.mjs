import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { DocumentEditorContainer } from '@syncfusion/ej2-documenteditor';
import * as i0 from "@angular/core";
export const inputs = ['currentUser', 'documentEditorSettings', 'documentSettings', 'enableComment', 'enableCsp', 'enableLocalPaste', 'enableLockAndEdit', 'enablePersistence', 'enableRtl', 'enableSpellCheck', 'enableToolbar', 'enableTrackChanges', 'headers', 'height', 'layoutType', 'locale', 'restrictEditing', 'serverActionSettings', 'serviceUrl', 'showPropertiesPane', 'toolbarItems', 'userColor', 'width', 'zIndex'];
export const outputs = ['beforeCommentAction', 'beforePaneSwitch', 'commentDelete', 'contentChange', 'contentControl', 'created', 'customContextMenuBeforeOpen', 'customContextMenuSelect', 'destroyed', 'documentChange', 'selectionChange', 'serviceFailure', 'toolbarClick', 'trackChange', 'beforeXmlHttpRequestSend'];
export const twoWays = [];
/**
 * `ejs-documenteditor-container` represents the Angular Document Editor Container.
 * ```html
 * <ejs-documenteditor-container></ejs-documenteditor-container>
 * ```
 */
let DocumentEditorContainerComponent = class DocumentEditorContainerComponent extends DocumentEditorContainer {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('DocumentEditorToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.context.ngAfterContentChecked(this);
    }
};
DocumentEditorContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorContainerComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
DocumentEditorContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DocumentEditorContainerComponent, selector: "ejs-documenteditorcontainer", inputs: { currentUser: "currentUser", documentEditorSettings: "documentEditorSettings", documentSettings: "documentSettings", enableComment: "enableComment", enableCsp: "enableCsp", enableLocalPaste: "enableLocalPaste", enableLockAndEdit: "enableLockAndEdit", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enableSpellCheck: "enableSpellCheck", enableToolbar: "enableToolbar", enableTrackChanges: "enableTrackChanges", headers: "headers", height: "height", layoutType: "layoutType", locale: "locale", restrictEditing: "restrictEditing", serverActionSettings: "serverActionSettings", serviceUrl: "serviceUrl", showPropertiesPane: "showPropertiesPane", toolbarItems: "toolbarItems", userColor: "userColor", width: "width", zIndex: "zIndex" }, outputs: { beforeCommentAction: "beforeCommentAction", beforePaneSwitch: "beforePaneSwitch", commentDelete: "commentDelete", contentChange: "contentChange", contentControl: "contentControl", created: "created", customContextMenuBeforeOpen: "customContextMenuBeforeOpen", customContextMenuSelect: "customContextMenuSelect", destroyed: "destroyed", documentChange: "documentChange", selectionChange: "selectionChange", serviceFailure: "serviceFailure", toolbarClick: "toolbarClick", trackChange: "trackChange", beforeXmlHttpRequestSend: "beforeXmlHttpRequestSend" }, usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
DocumentEditorContainerComponent = __decorate([
    ComponentMixins([ComponentBase])
], DocumentEditorContainerComponent);
export { DocumentEditorContainerComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DocumentEditorContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-documenteditorcontainer',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRlZGl0b3Jjb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvY3VtZW50LWVkaXRvci1jb250YWluZXIvZG9jdW1lbnRlZGl0b3Jjb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQyx1QkFBdUIsRUFBaUQsTUFBTSxlQUFlLENBQUM7QUFDaEosT0FBTyxFQUFFLGFBQWEsRUFBK0IsZUFBZSxFQUEwQixRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3SSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFJekUsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFhLENBQUMsYUFBYSxFQUFDLHdCQUF3QixFQUFDLGtCQUFrQixFQUFDLGVBQWUsRUFBQyxXQUFXLEVBQUMsa0JBQWtCLEVBQUMsbUJBQW1CLEVBQUMsbUJBQW1CLEVBQUMsV0FBVyxFQUFDLGtCQUFrQixFQUFDLGVBQWUsRUFBQyxvQkFBb0IsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxRQUFRLEVBQUMsaUJBQWlCLEVBQUMsc0JBQXNCLEVBQUMsWUFBWSxFQUFDLG9CQUFvQixFQUFDLGNBQWMsRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZaLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBYSxDQUFDLHFCQUFxQixFQUFDLGtCQUFrQixFQUFDLGVBQWUsRUFBQyxlQUFlLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLDZCQUE2QixFQUFDLHlCQUF5QixFQUFDLFdBQVcsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxnQkFBZ0IsRUFBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDdlQsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFhLEVBQUUsQ0FBQztBQUVwQzs7Ozs7R0FLRztJQVlVLGdDQUFnQyxTQUFoQyxnQ0FBaUMsU0FBUSx1QkFBdUI7SUFxQnpFLFlBQW9CLEtBQWlCLEVBQVUsU0FBb0IsRUFBVSxnQkFBaUMsRUFBVSxRQUFrQjtRQUN0SSxLQUFLLEVBQUUsQ0FBQztRQURRLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFFdEksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO1FBQ2xELElBQUk7WUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JELElBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQ2pDO1NBQ0o7UUFBQyxNQUFNLEdBQUc7UUFFZixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxPQUFPLEdBQUksSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSxlQUFlO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLHFCQUFxQjtRQUV4QixJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FJSixDQUFBOzZIQXpEWSxnQ0FBZ0M7aUhBQWhDLGdDQUFnQyxxNENBUC9CLEVBQUU7QUFPSCxnQ0FBZ0M7SUFENUMsZUFBZSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7R0FDcEIsZ0NBQWdDLENBeUQ1QztTQXpEWSxnQ0FBZ0M7MkZBQWhDLGdDQUFnQztrQkFYNUMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxNQUFNLEVBQUUsTUFBTTtvQkFDZCxPQUFPLEVBQUUsT0FBTztvQkFDaEIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLE9BQU8sRUFBRSxFQUVSO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgUXVlcnlMaXN0LCBSZW5kZXJlcjIsIEluamVjdG9yLCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRCYXNlLCBJQ29tcG9uZW50QmFzZSwgYXBwbHlNaXhpbnMsIENvbXBvbmVudE1peGlucywgUHJvcGVydHlDb2xsZWN0aW9uSW5mbywgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcbmltcG9ydCB7IERvY3VtZW50RWRpdG9yQ29udGFpbmVyIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWRvY3VtZW50ZWRpdG9yJztcblxuXG5cbmV4cG9ydCBjb25zdCBpbnB1dHM6IHN0cmluZ1tdID0gWydjdXJyZW50VXNlcicsJ2RvY3VtZW50RWRpdG9yU2V0dGluZ3MnLCdkb2N1bWVudFNldHRpbmdzJywnZW5hYmxlQ29tbWVudCcsJ2VuYWJsZUNzcCcsJ2VuYWJsZUxvY2FsUGFzdGUnLCdlbmFibGVMb2NrQW5kRWRpdCcsJ2VuYWJsZVBlcnNpc3RlbmNlJywnZW5hYmxlUnRsJywnZW5hYmxlU3BlbGxDaGVjaycsJ2VuYWJsZVRvb2xiYXInLCdlbmFibGVUcmFja0NoYW5nZXMnLCdoZWFkZXJzJywnaGVpZ2h0JywnbGF5b3V0VHlwZScsJ2xvY2FsZScsJ3Jlc3RyaWN0RWRpdGluZycsJ3NlcnZlckFjdGlvblNldHRpbmdzJywnc2VydmljZVVybCcsJ3Nob3dQcm9wZXJ0aWVzUGFuZScsJ3Rvb2xiYXJJdGVtcycsJ3VzZXJDb2xvcicsJ3dpZHRoJywnekluZGV4J107XG5leHBvcnQgY29uc3Qgb3V0cHV0czogc3RyaW5nW10gPSBbJ2JlZm9yZUNvbW1lbnRBY3Rpb24nLCdiZWZvcmVQYW5lU3dpdGNoJywnY29tbWVudERlbGV0ZScsJ2NvbnRlbnRDaGFuZ2UnLCdjb250ZW50Q29udHJvbCcsJ2NyZWF0ZWQnLCdjdXN0b21Db250ZXh0TWVudUJlZm9yZU9wZW4nLCdjdXN0b21Db250ZXh0TWVudVNlbGVjdCcsJ2Rlc3Ryb3llZCcsJ2RvY3VtZW50Q2hhbmdlJywnc2VsZWN0aW9uQ2hhbmdlJywnc2VydmljZUZhaWx1cmUnLCd0b29sYmFyQ2xpY2snLCd0cmFja0NoYW5nZScsJ2JlZm9yZVhtbEh0dHBSZXF1ZXN0U2VuZCddO1xuZXhwb3J0IGNvbnN0IHR3b1dheXM6IHN0cmluZ1tdID0gW107XG5cbi8qKlxuICogYGVqcy1kb2N1bWVudGVkaXRvci1jb250YWluZXJgIHJlcHJlc2VudHMgdGhlIEFuZ3VsYXIgRG9jdW1lbnQgRWRpdG9yIENvbnRhaW5lci5cbiAqIGBgYGh0bWxcbiAqIDxlanMtZG9jdW1lbnRlZGl0b3ItY29udGFpbmVyPjwvZWpzLWRvY3VtZW50ZWRpdG9yLWNvbnRhaW5lcj5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1kb2N1bWVudGVkaXRvcmNvbnRhaW5lcicsXG4gICAgaW5wdXRzOiBpbnB1dHMsXG4gICAgb3V0cHV0czogb3V0cHV0cyxcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbkBDb21wb25lbnRNaXhpbnMoW0NvbXBvbmVudEJhc2VdKVxuZXhwb3J0IGNsYXNzIERvY3VtZW50RWRpdG9yQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgRG9jdW1lbnRFZGl0b3JDb250YWluZXIgaW1wbGVtZW50cyBJQ29tcG9uZW50QmFzZSB7XG4gICAgcHVibGljIGNvbnRleHQgOiBhbnk7XG4gICAgcHVibGljIHRhZ09iamVjdHM6IGFueTtcblx0YmVmb3JlQ29tbWVudEFjdGlvbjogYW55O1xuXHRiZWZvcmVQYW5lU3dpdGNoOiBhbnk7XG5cdGNvbW1lbnREZWxldGU6IGFueTtcblx0Y29udGVudENoYW5nZTogYW55O1xuXHRjb250ZW50Q29udHJvbDogYW55O1xuXHRjcmVhdGVkOiBhbnk7XG5cdGN1c3RvbUNvbnRleHRNZW51QmVmb3JlT3BlbjogYW55O1xuXHRjdXN0b21Db250ZXh0TWVudVNlbGVjdDogYW55O1xuXHRkZXN0cm95ZWQ6IGFueTtcblx0ZG9jdW1lbnRDaGFuZ2U6IGFueTtcblx0c2VsZWN0aW9uQ2hhbmdlOiBhbnk7XG5cdHNlcnZpY2VGYWlsdXJlOiBhbnk7XG5cdHRvb2xiYXJDbGljazogYW55O1xuXHR0cmFja0NoYW5nZTogYW55O1xuXHRwdWJsaWMgYmVmb3JlWG1sSHR0cFJlcXVlc3RTZW5kOiBhbnk7XG5cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0VsZTogRWxlbWVudFJlZiwgcHJpdmF0ZSBzcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMubmdFbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMgPSB0aGlzLmluamVjdGVkTW9kdWxlcyB8fCBbXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ0RvY3VtZW50RWRpdG9yVG9vbGJhcicpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuYWRkVHdvV2F5LmNhbGwodGhpcywgdHdvV2F5cyk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLmNvbnRleHQgID0gbmV3IENvbXBvbmVudEJhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5uZ09uSW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRleHQubmdBZnRlclZpZXdJbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm5nT25EZXN0cm95KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNvbnRleHQubmdBZnRlckNvbnRlbnRDaGVja2VkKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckV2ZW50czogKGV2ZW50TGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG4gICAgcHVibGljIGFkZFR3b1dheTogKHByb3BMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbn1cblxuIl19