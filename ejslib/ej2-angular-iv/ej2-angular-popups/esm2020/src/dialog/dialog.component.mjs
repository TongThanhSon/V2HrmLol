import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { Dialog } from '@syncfusion/ej2-popups';
import { Template } from '@syncfusion/ej2-angular-base';
import { ButtonsDirective } from './buttons.directive';
import * as i0 from "@angular/core";
export const inputs = ['allowDragging', 'animationSettings', 'buttons', 'closeOnEscape', 'content', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableResize', 'enableRtl', 'footerTemplate', 'header', 'height', 'isModal', 'locale', 'minHeight', 'position', 'resizeHandles', 'showCloseIcon', 'target', 'visible', 'width', 'zIndex'];
export const outputs = ['beforeClose', 'beforeOpen', 'beforeSanitizeHtml', 'close', 'created', 'destroyed', 'drag', 'dragStart', 'dragStop', 'open', 'overlayClick', 'resizeStart', 'resizeStop', 'resizing', 'visibleChange'];
export const twoWays = ['visible'];
/**
 * Represents the Angular Dialog Component
 * ```html
 * <ejs-dialog></ejs-dialog>
 * ```
 */
let DialogComponent = class DialogComponent extends Dialog {
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
DialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DialogComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
DialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DialogComponent, selector: "ejs-dialog", inputs: { allowDragging: "allowDragging", animationSettings: "animationSettings", buttons: "buttons", closeOnEscape: "closeOnEscape", content: "content", cssClass: "cssClass", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableResize: "enableResize", enableRtl: "enableRtl", footerTemplate: "footerTemplate", header: "header", height: "height", isModal: "isModal", locale: "locale", minHeight: "minHeight", position: "position", resizeHandles: "resizeHandles", showCloseIcon: "showCloseIcon", target: "target", visible: "visible", width: "width", zIndex: "zIndex" }, outputs: { beforeClose: "beforeClose", beforeOpen: "beforeOpen", beforeSanitizeHtml: "beforeSanitizeHtml", close: "close", created: "created", destroyed: "destroyed", drag: "drag", dragStart: "dragStart", dragStop: "dragStop", open: "open", overlayClick: "overlayClick", resizeStart: "resizeStart", resizeStop: "resizeStop", resizing: "resizing", visibleChange: "visibleChange" }, queries: [{ propertyName: "footerTemplate", first: true, predicate: ["footerTemplate"], descendants: true }, { propertyName: "header", first: true, predicate: ["header"], descendants: true }, { propertyName: "content", first: true, predicate: ["content"], descendants: true }, { propertyName: "childButtons", first: true, predicate: ButtonsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: `<ng-content ></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], DialogComponent.prototype, "footerTemplate", void 0);
__decorate([
    Template()
], DialogComponent.prototype, "header", void 0);
__decorate([
    Template()
], DialogComponent.prototype, "content", void 0);
DialogComponent = __decorate([
    ComponentMixins([ComponentBase])
], DialogComponent);
export { DialogComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DialogComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-dialog',
                    inputs: inputs,
                    outputs: outputs,
                    template: `<ng-content ></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childButtons: new ContentChild(ButtonsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { footerTemplate: [{
                type: ContentChild,
                args: ['footerTemplate']
            }], header: [{
                type: ContentChild,
                args: ['header']
            }], content: [{
                type: ContentChild,
                args: ['content']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUQsdUJBQXVCLEVBQTRCLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SixPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBdUQsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0ksT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdkQsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFhLENBQUMsZUFBZSxFQUFDLG1CQUFtQixFQUFDLFNBQVMsRUFBQyxlQUFlLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxxQkFBcUIsRUFBQyxtQkFBbUIsRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQyxlQUFlLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsUUFBUSxDQUFDLENBQUM7QUFDM1UsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFhLENBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxvQkFBb0IsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsY0FBYyxFQUFDLGFBQWEsRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzNOLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRTdDOzs7OztHQUtHO0lBWVUsZUFBZSxTQUFmLGVBQWdCLFNBQVEsTUFBTTtJQTJEdkMsWUFBb0IsS0FBaUIsRUFBVSxTQUFvQixFQUFVLGdCQUFpQyxFQUFVLFFBQWtCO1FBQ3RJLEtBQUssRUFBRSxDQUFDO1FBRFEsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXhDbkksU0FBSSxHQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUEwQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQztRQUVsRCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxnQkFBZ0IsR0FBSSxJQUFJLGFBQWEsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFTSxRQUFRO1FBQ1gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sZUFBZTtRQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0scUJBQXFCO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FJSixDQUFBOzRHQXpGWSxlQUFlO2dHQUFmLGVBQWUsazBDQUpXLGdCQUFnQix1RUFIekMsNEJBQTRCO0FBd0N0QztJQURDLFFBQVEsRUFBRTt1REFDZ0I7QUFTM0I7SUFEQyxRQUFRLEVBQUU7K0NBQ1E7QUFlbkI7SUFEQyxRQUFRLEVBQUU7Z0RBQ1M7QUF6RFgsZUFBZTtJQUQzQixlQUFlLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztHQUNwQixlQUFlLENBeUYzQjtTQXpGWSxlQUFlOzJGQUFmLGVBQWU7a0JBWDNCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLE1BQU0sRUFBRSxNQUFNO29CQUNkLE9BQU8sRUFBRSxPQUFPO29CQUNoQixRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsT0FBTyxFQUFFO3dCQUNMLFlBQVksRUFBRSxJQUFJLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDbkQ7aUJBQ0o7K0tBbUNVLGNBQWM7c0JBRnBCLFlBQVk7dUJBQUMsZ0JBQWdCO2dCQVd2QixNQUFNO3NCQUZaLFlBQVk7dUJBQUMsUUFBUTtnQkFpQmYsT0FBTztzQkFGYixZQUFZO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIFJlbmRlcmVyMiwgSW5qZWN0b3IsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBRdWVyeUxpc3QsIFZhbHVlUHJvdmlkZXIsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50QmFzZSwgQ29tcG9uZW50TWl4aW5zLCBJQ29tcG9uZW50QmFzZSwgYXBwbHlNaXhpbnMsIFByb3BlcnR5Q29sbGVjdGlvbkluZm8sIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItcG9wdXBzJztcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBCdXR0b25zRGlyZWN0aXZlIH0gZnJvbSAnLi9idXR0b25zLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBpbnB1dHM6IHN0cmluZ1tdID0gWydhbGxvd0RyYWdnaW5nJywnYW5pbWF0aW9uU2V0dGluZ3MnLCdidXR0b25zJywnY2xvc2VPbkVzY2FwZScsJ2NvbnRlbnQnLCdjc3NDbGFzcycsJ2VuYWJsZUh0bWxTYW5pdGl6ZXInLCdlbmFibGVQZXJzaXN0ZW5jZScsJ2VuYWJsZVJlc2l6ZScsJ2VuYWJsZVJ0bCcsJ2Zvb3RlclRlbXBsYXRlJywnaGVhZGVyJywnaGVpZ2h0JywnaXNNb2RhbCcsJ2xvY2FsZScsJ21pbkhlaWdodCcsJ3Bvc2l0aW9uJywncmVzaXplSGFuZGxlcycsJ3Nob3dDbG9zZUljb24nLCd0YXJnZXQnLCd2aXNpYmxlJywnd2lkdGgnLCd6SW5kZXgnXTtcbmV4cG9ydCBjb25zdCBvdXRwdXRzOiBzdHJpbmdbXSA9IFsnYmVmb3JlQ2xvc2UnLCdiZWZvcmVPcGVuJywnYmVmb3JlU2FuaXRpemVIdG1sJywnY2xvc2UnLCdjcmVhdGVkJywnZGVzdHJveWVkJywnZHJhZycsJ2RyYWdTdGFydCcsJ2RyYWdTdG9wJywnb3BlbicsJ292ZXJsYXlDbGljaycsJ3Jlc2l6ZVN0YXJ0JywncmVzaXplU3RvcCcsJ3Jlc2l6aW5nJywndmlzaWJsZUNoYW5nZSddO1xuZXhwb3J0IGNvbnN0IHR3b1dheXM6IHN0cmluZ1tdID0gWyd2aXNpYmxlJ107XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgQW5ndWxhciBEaWFsb2cgQ29tcG9uZW50XG4gKiBgYGBodG1sXG4gKiA8ZWpzLWRpYWxvZz48L2Vqcy1kaWFsb2c+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdlanMtZGlhbG9nJyxcbiAgICBpbnB1dHM6IGlucHV0cyxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgPjwvbmctY29udGVudD5gLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRCdXR0b25zOiBuZXcgQ29udGVudENoaWxkKEJ1dHRvbnNEaXJlY3RpdmUpXG4gICAgfVxufSlcbkBDb21wb25lbnRNaXhpbnMoW0NvbXBvbmVudEJhc2VdKVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCBleHRlbmRzIERpYWxvZyBpbXBsZW1lbnRzIElDb21wb25lbnRCYXNlIHtcbiAgICBwdWJsaWMgY29udGFpbmVyQ29udGV4dCA6IGFueTtcbiAgICBwdWJsaWMgdGFnT2JqZWN0czogYW55O1xuXHRiZWZvcmVDbG9zZTogYW55O1xuXHRiZWZvcmVPcGVuOiBhbnk7XG5cdGJlZm9yZVNhbml0aXplSHRtbDogYW55O1xuXHRjbG9zZTogYW55O1xuXHRjcmVhdGVkOiBhbnk7XG5cdGRlc3Ryb3llZDogYW55O1xuXHRkcmFnOiBhbnk7XG5cdGRyYWdTdGFydDogYW55O1xuXHRkcmFnU3RvcDogYW55O1xuXHRvcGVuOiBhbnk7XG5cdG92ZXJsYXlDbGljazogYW55O1xuXHRyZXNpemVTdGFydDogYW55O1xuXHRyZXNpemVTdG9wOiBhbnk7XG5cdHJlc2l6aW5nOiBhbnk7XG5cdHB1YmxpYyB2aXNpYmxlQ2hhbmdlOiBhbnk7XG4gICAgcHVibGljIGNoaWxkQnV0dG9uczogUXVlcnlMaXN0PEJ1dHRvbnNEaXJlY3RpdmU+O1xuICAgIHB1YmxpYyB0YWdzOiBzdHJpbmdbXSA9IFsnYnV0dG9ucyddO1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHRlbXBsYXRlIHZhbHVlIHRoYXQgY2FuIGJlIGRpc3BsYXllZCB3aXRoIGRpYWxvZydzIGZvb3RlciBhcmVhLiBcbiAgICAgKiBUaGlzIGlzIG9wdGlvbmFsIHByb3BlcnR5IGFuZCBjYW4gYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGZvb3RlciBpcyBvY2N1cGllZCB3aXRoIGluZm9ybWF0aW9uIG9yIGN1c3RvbSBjb21wb25lbnRzLiBcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGUgZm9vdGVyIGlzIGNvbmZpZ3VyZWQgd2l0aCBhY3Rpb24gW2J1dHRvbnNdKCNidXR0b25zKS4gXG4gICAgICogSWYgZm9vdGVyIHRlbXBsYXRlIGlzIGNvbmZpZ3VyZWQgdG8gZGlhbG9nLCB0aGUgYWN0aW9uIGJ1dHRvbnMgcHJvcGVydHkgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICAgKiBcbiAgICAgKiA+IE1vcmUgaW5mb3JtYXRpb24gb24gdGhlIGZvb3RlciB0ZW1wbGF0ZSBjb25maWd1cmF0aW9uIGNhbiBiZSBmb3VuZCBvbiB0aGlzIFtkb2N1bWVudGF0aW9uXSguLi8uLi9kaWFsb2cvdGVtcGxhdGUvI2Zvb3Rlcikgc2VjdGlvbi5cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKiBAYmxhem9ydHlwZSBzdHJpbmdcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdmb290ZXJUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgZm9vdGVyVGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSB2YWx1ZSB0aGF0IGNhbiBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRpYWxvZydzIHRpdGxlIGFyZWEgdGhhdCBjYW4gYmUgY29uZmlndXJlZCB3aXRoIHBsYWluIHRleHQgb3IgSFRNTCBlbGVtZW50cy4gXG4gICAgICogVGhpcyBpcyBvcHRpb25hbCBwcm9wZXJ0eSBhbmQgdGhlIGRpYWxvZyBjYW4gYmUgZGlzcGxheWVkIHdpdGhvdXQgaGVhZGVyLCBpZiB0aGUgaGVhZGVyIHByb3BlcnR5IGlzIG51bGwuXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKiBAYmxhem9ydHlwZSBzdHJpbmdcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdoZWFkZXInKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGhlYWRlcjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHZhbHVlIHRoYXQgY2FuIGJlIGRpc3BsYXllZCBpbiBkaWFsb2cncyBjb250ZW50IGFyZWEuIFxuICAgICAqIEl0IGNhbiBiZSBpbmZvcm1hdGlvbiwgbGlzdCwgb3Igb3RoZXIgSFRNTCBlbGVtZW50cy4gXG4gICAgICogVGhlIGNvbnRlbnQgb2YgZGlhbG9nIGNhbiBiZSBsb2FkZWQgd2l0aCBkeW5hbWljIGRhdGEgc3VjaCBhcyBkYXRhYmFzZSwgQUpBWCBjb250ZW50LCBhbmQgbW9yZS5cbiAgICAgKiBcbiAgICAgKiB7JSBjb2RlQmxvY2sgc3JjPVwiZGlhbG9nL2NvbnRlbnQtYXBpL2luZGV4LnRzXCIgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKlxuICAgICAqeyUgY29kZUJsb2NrIHNyYz1cImRpYWxvZy9jb250ZW50LWFwaS9pbmRleC5odG1sXCIgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKiBAYmxhem9ydHlwZSBzdHJpbmdcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdjb250ZW50JylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBjb250ZW50OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nRWxlOiBFbGVtZW50UmVmLCBwcml2YXRlIHNyZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5uZ0VsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcyA9IHRoaXMuaW5qZWN0ZWRNb2R1bGVzIHx8IFtdO1xuXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuYWRkVHdvV2F5LmNhbGwodGhpcywgdHdvV2F5cyk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckNvbnRleHQgID0gbmV3IENvbXBvbmVudEJhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQ29udGV4dC5uZ09uSW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRhaW5lckNvbnRleHQubmdBZnRlclZpZXdJbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJDb250ZXh0Lm5nT25EZXN0cm95KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFnT2JqZWN0c1swXS5pbnN0YW5jZSA9IHRoaXMuY2hpbGRCdXR0b25zO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckNvbnRleHQubmdBZnRlckNvbnRlbnRDaGVja2VkKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckV2ZW50czogKGV2ZW50TGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG4gICAgcHVibGljIGFkZFR3b1dheTogKHByb3BMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbn1cblxuIl19