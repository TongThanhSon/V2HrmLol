import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { Toast } from '@syncfusion/ej2-notifications';
import { Template } from '@syncfusion/ej2-angular-base';
import { ButtonModelPropsDirective } from './buttons.directive';
import * as i0 from "@angular/core";
export const inputs = ['animation', 'buttons', 'content', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'extendedTimeout', 'height', 'icon', 'locale', 'newestOnTop', 'position', 'progressDirection', 'showCloseButton', 'showProgressBar', 'target', 'template', 'timeOut', 'title', 'width'];
export const outputs = ['beforeClose', 'beforeOpen', 'beforeSanitizeHtml', 'click', 'close', 'created', 'destroyed', 'open'];
export const twoWays = [''];
/**
 * Represents the Angular Toast Component
 * ```html
 * <ejs-toast></ejs-toast>
 * ```
 */
let ToastComponent = class ToastComponent extends Toast {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['buttons'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.containerContext = new ComponentBase();
    }
    ngOnInit() {
        this.containerContext.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.containerContext.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.containerContext.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childButtons;
        this.containerContext.ngAfterContentChecked(this);
    }
};
ToastComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ToastComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
ToastComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ToastComponent, selector: "ejs-toast", inputs: { animation: "animation", buttons: "buttons", content: "content", cssClass: "cssClass", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRtl: "enableRtl", extendedTimeout: "extendedTimeout", height: "height", icon: "icon", locale: "locale", newestOnTop: "newestOnTop", position: "position", progressDirection: "progressDirection", showCloseButton: "showCloseButton", showProgressBar: "showProgressBar", target: "target", template: "template", timeOut: "timeOut", title: "title", width: "width" }, outputs: { beforeClose: "beforeClose", beforeOpen: "beforeOpen", beforeSanitizeHtml: "beforeSanitizeHtml", click: "click", close: "close", created: "created", destroyed: "destroyed", open: "open" }, queries: [{ propertyName: "title", first: true, predicate: ["title"], descendants: true }, { propertyName: "content", first: true, predicate: ["content"], descendants: true }, { propertyName: "template", first: true, predicate: ["template"], descendants: true }, { propertyName: "childButtons", first: true, predicate: ButtonModelPropsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: `<ng-content ></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], ToastComponent.prototype, "title", void 0);
__decorate([
    Template()
], ToastComponent.prototype, "content", void 0);
__decorate([
    Template()
], ToastComponent.prototype, "template", void 0);
ToastComponent = __decorate([
    ComponentMixins([ComponentBase])
], ToastComponent);
export { ToastComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ToastComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-toast',
                    inputs: inputs,
                    outputs: outputs,
                    template: `<ng-content ></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childButtons: new ContentChild(ButtonModelPropsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { title: [{
                type: ContentChild,
                args: ['title']
            }], content: [{
                type: ContentChild,
                args: ['content']
            }], template: [{
                type: ContentChild,
                args: ['template']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RvYXN0L3RvYXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUQsdUJBQXVCLEVBQTRCLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SixPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBdUQsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0ksT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFaEUsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFhLENBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLHFCQUFxQixFQUFDLG1CQUFtQixFQUFDLFdBQVcsRUFBQyxpQkFBaUIsRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLG1CQUFtQixFQUFDLGlCQUFpQixFQUFDLGlCQUFpQixFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsQ0FBQztBQUM3UyxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQWEsQ0FBQyxhQUFhLEVBQUMsWUFBWSxFQUFDLG9CQUFvQixFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxNQUFNLENBQUMsQ0FBQztBQUNoSSxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUV0Qzs7Ozs7R0FLRztJQVlVLGNBQWMsU0FBZCxjQUFlLFNBQVEsS0FBSztJQTBDckMsWUFBb0IsS0FBaUIsRUFBVSxTQUFvQixFQUFVLGdCQUFpQyxFQUFVLFFBQWtCO1FBQ3RJLEtBQUssRUFBRSxDQUFDO1FBRFEsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQTlCbkksU0FBSSxHQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFnQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQztRQUVsRCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxnQkFBZ0IsR0FBSSxJQUFJLGFBQWEsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFTSxRQUFRO1FBQ1gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sZUFBZTtRQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0scUJBQXFCO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FJSixDQUFBOzJHQXhFWSxjQUFjOytGQUFkLGNBQWMsaWtDQUpZLHlCQUF5Qix1RUFIbEQsNEJBQTRCO0FBMkJ0QztJQURDLFFBQVEsRUFBRTs2Q0FDTztBQVNsQjtJQURDLFFBQVEsRUFBRTsrQ0FDUztBQVdwQjtJQURDLFFBQVEsRUFBRTtnREFDVTtBQXhDWixjQUFjO0lBRDFCLGVBQWUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0dBQ3BCLGNBQWMsQ0F3RTFCO1NBeEVZLGNBQWM7MkZBQWQsY0FBYztrQkFYMUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxPQUFPLEVBQUU7d0JBQ0wsWUFBWSxFQUFFLElBQUksWUFBWSxDQUFDLHlCQUF5QixDQUFDO3FCQUM1RDtpQkFDSjsrS0FzQlUsS0FBSztzQkFGWCxZQUFZO3VCQUFDLE9BQU87Z0JBV2QsT0FBTztzQkFGYixZQUFZO3VCQUFDLFNBQVM7Z0JBYWhCLFFBQVE7c0JBRmQsWUFBWTt1QkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLCBSZW5kZXJlcjIsIEluamVjdG9yLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgUXVlcnlMaXN0LCBWYWx1ZVByb3ZpZGVyLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEJhc2UsIENvbXBvbmVudE1peGlucywgSUNvbXBvbmVudEJhc2UsIGFwcGx5TWl4aW5zLCBQcm9wZXJ0eUNvbGxlY3Rpb25JbmZvLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItbm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgQnV0dG9uTW9kZWxQcm9wc0RpcmVjdGl2ZSB9IGZyb20gJy4vYnV0dG9ucy5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgaW5wdXRzOiBzdHJpbmdbXSA9IFsnYW5pbWF0aW9uJywnYnV0dG9ucycsJ2NvbnRlbnQnLCdjc3NDbGFzcycsJ2VuYWJsZUh0bWxTYW5pdGl6ZXInLCdlbmFibGVQZXJzaXN0ZW5jZScsJ2VuYWJsZVJ0bCcsJ2V4dGVuZGVkVGltZW91dCcsJ2hlaWdodCcsJ2ljb24nLCdsb2NhbGUnLCduZXdlc3RPblRvcCcsJ3Bvc2l0aW9uJywncHJvZ3Jlc3NEaXJlY3Rpb24nLCdzaG93Q2xvc2VCdXR0b24nLCdzaG93UHJvZ3Jlc3NCYXInLCd0YXJnZXQnLCd0ZW1wbGF0ZScsJ3RpbWVPdXQnLCd0aXRsZScsJ3dpZHRoJ107XG5leHBvcnQgY29uc3Qgb3V0cHV0czogc3RyaW5nW10gPSBbJ2JlZm9yZUNsb3NlJywnYmVmb3JlT3BlbicsJ2JlZm9yZVNhbml0aXplSHRtbCcsJ2NsaWNrJywnY2xvc2UnLCdjcmVhdGVkJywnZGVzdHJveWVkJywnb3BlbiddO1xuZXhwb3J0IGNvbnN0IHR3b1dheXM6IHN0cmluZ1tdID0gWycnXTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBBbmd1bGFyIFRvYXN0IENvbXBvbmVudFxuICogYGBgaHRtbFxuICogPGVqcy10b2FzdD48L2Vqcy10b2FzdD5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Vqcy10b2FzdCcsXG4gICAgaW5wdXRzOiBpbnB1dHMsXG4gICAgb3V0cHV0czogb3V0cHV0cyxcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50ID48L25nLWNvbnRlbnQ+YCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkQnV0dG9uczogbmV3IENvbnRlbnRDaGlsZChCdXR0b25Nb2RlbFByb3BzRGlyZWN0aXZlKVxuICAgIH1cbn0pXG5AQ29tcG9uZW50TWl4aW5zKFtDb21wb25lbnRCYXNlXSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCBleHRlbmRzIFRvYXN0IGltcGxlbWVudHMgSUNvbXBvbmVudEJhc2Uge1xuICAgIHB1YmxpYyBjb250YWluZXJDb250ZXh0IDogYW55O1xuICAgIHB1YmxpYyB0YWdPYmplY3RzOiBhbnk7XG5cdGJlZm9yZUNsb3NlOiBhbnk7XG5cdGJlZm9yZU9wZW46IGFueTtcblx0YmVmb3JlU2FuaXRpemVIdG1sOiBhbnk7XG5cdGNsaWNrOiBhbnk7XG5cdGNsb3NlOiBhbnk7XG5cdGNyZWF0ZWQ6IGFueTtcblx0ZGVzdHJveWVkOiBhbnk7XG5cdHB1YmxpYyBvcGVuOiBhbnk7XG4gICAgcHVibGljIGNoaWxkQnV0dG9uczogUXVlcnlMaXN0PEJ1dHRvbk1vZGVsUHJvcHNEaXJlY3RpdmU+O1xuICAgIHB1YmxpYyB0YWdzOiBzdHJpbmdbXSA9IFsnYnV0dG9ucyddO1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHRpdGxlIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgVG9hc3QuIFxuICAgICAqIEFjY2VwdHMgc2VsZWN0b3JzLCBzdHJpbmcgdmFsdWVzIGFuZCBIVE1MIGVsZW1lbnRzLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCd0aXRsZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgdGl0bGU6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBjb250ZW50IHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgVG9hc3QuIFxuICAgICAqIEFjY2VwdHMgc2VsZWN0b3JzLCBzdHJpbmcgdmFsdWVzIGFuZCBIVE1MIGVsZW1lbnRzLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKiBAYmxhem9ydHlwZSBzdHJpbmdcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdjb250ZW50JylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBjb250ZW50OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgSFRNTCBlbGVtZW50L2VsZW1lbnQgSUQgYXMgYSBzdHJpbmcgdGhhdCBjYW4gYmUgZGlzcGxheWVkIGFzIGEgVG9hc3QuIFxuICAgICAqIFRoZSBnaXZlbiB0ZW1wbGF0ZSBpcyB0YWtlbiBhcyBwcmVmZXJlbmNlIHRvIHJlbmRlciB0aGUgVG9hc3QsIGV2ZW4gaWYgdGhlIGJ1aWx0LWluIHByb3BlcnRpZXMgc3VjaCBhcyB0aXRsZSBhbmQgY29udGVudCBhcmUgZGVmaW5lZC5cbiAgICAgKiBcbiAgICAgKiB7JSBjb2RlQmxvY2sgc3JjPSd0b2FzdC90ZW1wbGF0ZS9pbmRleC5tZCcgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ3RlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyB0ZW1wbGF0ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0VsZTogRWxlbWVudFJlZiwgcHJpdmF0ZSBzcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMubmdFbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMgPSB0aGlzLmluamVjdGVkTW9kdWxlcyB8fCBbXTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmFkZFR3b1dheS5jYWxsKHRoaXMsIHR3b1dheXMpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJDb250ZXh0ICA9IG5ldyBDb21wb25lbnRCYXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lckNvbnRleHQubmdPbkluaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJDb250ZXh0Lm5nQWZ0ZXJWaWV3SW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQ29udGV4dC5uZ09uRGVzdHJveSh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRhZ09iamVjdHNbMF0uaW5zdGFuY2UgPSB0aGlzLmNoaWxkQnV0dG9ucztcbiAgICAgICAgdGhpcy5jb250YWluZXJDb250ZXh0Lm5nQWZ0ZXJDb250ZW50Q2hlY2tlZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJFdmVudHM6IChldmVudExpc3Q6IHN0cmluZ1tdKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBhZGRUd29XYXk6IChwcm9wTGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG59XG5cbiJdfQ==