import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { Carousel } from '@syncfusion/ej2-navigations';
import { Template } from '@syncfusion/ej2-angular-base';
import { CarouselItemsDirective } from './items.directive';
import * as i0 from "@angular/core";
export const inputs = ['animation', 'autoPlay', 'buttonsVisibility', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enableTouchSwipe', 'height', 'htmlAttributes', 'indicatorsTemplate', 'interval', 'itemTemplate', 'items', 'locale', 'loop', 'nextButtonTemplate', 'playButtonTemplate', 'previousButtonTemplate', 'selectedIndex', 'showIndicators', 'showPlayButton', 'width'];
export const outputs = ['slideChanged', 'slideChanging', 'selectedIndexChange'];
export const twoWays = ['selectedIndex'];
/**
 * Represents the EJ2 Angular Carousel Component.
 * ```html
 * <ejs-carousel [items]='carouselItems'></ejs-carousel>
 * ```
 */
let CarouselComponent = class CarouselComponent extends Carousel {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['items'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
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
        this.tagObjects[0].instance = this.childItems;
        this.context.ngAfterContentChecked(this);
    }
};
CarouselComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CarouselComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
CarouselComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: CarouselComponent, selector: "ejs-carousel", inputs: { animation: "animation", autoPlay: "autoPlay", buttonsVisibility: "buttonsVisibility", cssClass: "cssClass", dataSource: "dataSource", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enableTouchSwipe: "enableTouchSwipe", height: "height", htmlAttributes: "htmlAttributes", indicatorsTemplate: "indicatorsTemplate", interval: "interval", itemTemplate: "itemTemplate", items: "items", locale: "locale", loop: "loop", nextButtonTemplate: "nextButtonTemplate", playButtonTemplate: "playButtonTemplate", previousButtonTemplate: "previousButtonTemplate", selectedIndex: "selectedIndex", showIndicators: "showIndicators", showPlayButton: "showPlayButton", width: "width" }, outputs: { slideChanged: "slideChanged", slideChanging: "slideChanging", selectedIndexChange: "selectedIndexChange" }, queries: [{ propertyName: "indicatorsTemplate", first: true, predicate: ["indicatorsTemplate"], descendants: true }, { propertyName: "nextButtonTemplate", first: true, predicate: ["nextButtonTemplate"], descendants: true }, { propertyName: "previousButtonTemplate", first: true, predicate: ["previousButtonTemplate"], descendants: true }, { propertyName: "playButtonTemplate", first: true, predicate: ["playButtonTemplate"], descendants: true }, { propertyName: "itemTemplate", first: true, predicate: ["itemTemplate"], descendants: true }, { propertyName: "childItems", first: true, predicate: CarouselItemsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], CarouselComponent.prototype, "indicatorsTemplate", void 0);
__decorate([
    Template()
], CarouselComponent.prototype, "nextButtonTemplate", void 0);
__decorate([
    Template()
], CarouselComponent.prototype, "previousButtonTemplate", void 0);
__decorate([
    Template()
], CarouselComponent.prototype, "playButtonTemplate", void 0);
__decorate([
    Template()
], CarouselComponent.prototype, "itemTemplate", void 0);
CarouselComponent = __decorate([
    ComponentMixins([ComponentBase])
], CarouselComponent);
export { CarouselComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CarouselComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-carousel',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childItems: new ContentChild(CarouselItemsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { indicatorsTemplate: [{
                type: ContentChild,
                args: ['indicatorsTemplate']
            }], nextButtonTemplate: [{
                type: ContentChild,
                args: ['nextButtonTemplate']
            }], previousButtonTemplate: [{
                type: ContentChild,
                args: ['previousButtonTemplate']
            }], playButtonTemplate: [{
                type: ContentChild,
                args: ['playButtonTemplate']
            }], itemTemplate: [{
                type: ContentChild,
                args: ['itemTemplate']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsdUJBQXVCLEVBQWlELFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SixPQUFPLEVBQUUsYUFBYSxFQUErQixlQUFlLEVBQTBCLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdJLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRTNELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBYSxDQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsbUJBQW1CLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxtQkFBbUIsRUFBQyxXQUFXLEVBQUMsa0JBQWtCLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLG9CQUFvQixFQUFDLFVBQVUsRUFBQyxjQUFjLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsd0JBQXdCLEVBQUMsZUFBZSxFQUFDLGdCQUFnQixFQUFDLGdCQUFnQixFQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RYLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBYSxDQUFDLGNBQWMsRUFBQyxlQUFlLEVBQUMscUJBQXFCLENBQUMsQ0FBQztBQUN4RixNQUFNLENBQUMsTUFBTSxPQUFPLEdBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUVuRDs7Ozs7R0FLRztJQVlVLGlCQUFpQixTQUFqQixpQkFBa0IsU0FBUSxRQUFRO0lBNEMzQyxZQUFvQixLQUFpQixFQUFVLFNBQW9CLEVBQVUsZ0JBQWlDLEVBQVUsUUFBa0I7UUFDdEksS0FBSyxFQUFFLENBQUM7UUFEUSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBckNuSSxTQUFJLEdBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQXVDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO1FBRWxELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBSSxJQUFJLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFTSxRQUFRO1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLGVBQWU7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLFdBQVc7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0scUJBQXFCO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBSUosQ0FBQTs4R0ExRVksaUJBQWlCO2tHQUFqQixpQkFBaUIsMDVDQUpPLHNCQUFzQix1RUFIN0MsRUFBRTtBQXFCWjtJQURDLFFBQVEsRUFBRTs2REFDb0I7QUFPL0I7SUFEQyxRQUFRLEVBQUU7NkRBQ29CO0FBTy9CO0lBREMsUUFBUSxFQUFFO2lFQUN3QjtBQU9uQztJQURDLFFBQVEsRUFBRTs2REFDb0I7QUFPL0I7SUFEQyxRQUFRLEVBQUU7dURBQ2M7QUExQ2hCLGlCQUFpQjtJQUQ3QixlQUFlLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztHQUNwQixpQkFBaUIsQ0EwRTdCO1NBMUVZLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQVg3QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO29CQUN4QixNQUFNLEVBQUUsTUFBTTtvQkFDZCxPQUFPLEVBQUUsT0FBTztvQkFDaEIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLE9BQU8sRUFBRTt3QkFDTCxVQUFVLEVBQUUsSUFBSSxZQUFZLENBQUMsc0JBQXNCLENBQUM7cUJBQ3ZEO2lCQUNKOytLQWdCVSxrQkFBa0I7c0JBRnhCLFlBQVk7dUJBQUMsb0JBQW9CO2dCQVMzQixrQkFBa0I7c0JBRnhCLFlBQVk7dUJBQUMsb0JBQW9CO2dCQVMzQixzQkFBc0I7c0JBRjVCLFlBQVk7dUJBQUMsd0JBQXdCO2dCQVMvQixrQkFBa0I7c0JBRnhCLFlBQVk7dUJBQUMsb0JBQW9CO2dCQVMzQixZQUFZO3NCQUZsQixZQUFZO3VCQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBRdWVyeUxpc3QsIFJlbmRlcmVyMiwgSW5qZWN0b3IsIFZhbHVlUHJvdmlkZXIsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50QmFzZSwgSUNvbXBvbmVudEJhc2UsIGFwcGx5TWl4aW5zLCBDb21wb25lbnRNaXhpbnMsIFByb3BlcnR5Q29sbGVjdGlvbkluZm8sIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1uYXZpZ2F0aW9ucyc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxJdGVtc0RpcmVjdGl2ZSB9IGZyb20gJy4vaXRlbXMuZGlyZWN0aXZlJztcblxuZXhwb3J0IGNvbnN0IGlucHV0czogc3RyaW5nW10gPSBbJ2FuaW1hdGlvbicsJ2F1dG9QbGF5JywnYnV0dG9uc1Zpc2liaWxpdHknLCdjc3NDbGFzcycsJ2RhdGFTb3VyY2UnLCdlbmFibGVQZXJzaXN0ZW5jZScsJ2VuYWJsZVJ0bCcsJ2VuYWJsZVRvdWNoU3dpcGUnLCdoZWlnaHQnLCdodG1sQXR0cmlidXRlcycsJ2luZGljYXRvcnNUZW1wbGF0ZScsJ2ludGVydmFsJywnaXRlbVRlbXBsYXRlJywnaXRlbXMnLCdsb2NhbGUnLCdsb29wJywnbmV4dEJ1dHRvblRlbXBsYXRlJywncGxheUJ1dHRvblRlbXBsYXRlJywncHJldmlvdXNCdXR0b25UZW1wbGF0ZScsJ3NlbGVjdGVkSW5kZXgnLCdzaG93SW5kaWNhdG9ycycsJ3Nob3dQbGF5QnV0dG9uJywnd2lkdGgnXTtcbmV4cG9ydCBjb25zdCBvdXRwdXRzOiBzdHJpbmdbXSA9IFsnc2xpZGVDaGFuZ2VkJywnc2xpZGVDaGFuZ2luZycsJ3NlbGVjdGVkSW5kZXhDaGFuZ2UnXTtcbmV4cG9ydCBjb25zdCB0d29XYXlzOiBzdHJpbmdbXSA9IFsnc2VsZWN0ZWRJbmRleCddO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIEVKMiBBbmd1bGFyIENhcm91c2VsIENvbXBvbmVudC5cbiAqIGBgYGh0bWxcbiAqIDxlanMtY2Fyb3VzZWwgW2l0ZW1zXT0nY2Fyb3VzZWxJdGVtcyc+PC9lanMtY2Fyb3VzZWw+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdlanMtY2Fyb3VzZWwnLFxuICAgIGlucHV0czogaW5wdXRzLFxuICAgIG91dHB1dHM6IG91dHB1dHMsXG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRJdGVtczogbmV3IENvbnRlbnRDaGlsZChDYXJvdXNlbEl0ZW1zRGlyZWN0aXZlKVxuICAgIH1cbn0pXG5AQ29tcG9uZW50TWl4aW5zKFtDb21wb25lbnRCYXNlXSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBleHRlbmRzIENhcm91c2VsIGltcGxlbWVudHMgSUNvbXBvbmVudEJhc2Uge1xuICAgIHB1YmxpYyBjb250ZXh0IDogYW55O1xuICAgIHB1YmxpYyB0YWdPYmplY3RzOiBhbnk7XG5cdHNsaWRlQ2hhbmdlZDogYW55O1xuXHRzbGlkZUNoYW5naW5nOiBhbnk7XG5cdHB1YmxpYyBzZWxlY3RlZEluZGV4Q2hhbmdlOiBhbnk7XG4gICAgcHVibGljIGNoaWxkSXRlbXM6IFF1ZXJ5TGlzdDxDYXJvdXNlbEl0ZW1zRGlyZWN0aXZlPjtcbiAgICBwdWJsaWMgdGFnczogc3RyaW5nW10gPSBbJ2l0ZW1zJ107XG4gICAgLyoqIFxuICAgICAqIEFjY2VwdHMgdGhlIHRlbXBsYXRlIGZvciBpbmRpY2F0b3IgYnV0dG9ucy5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnaW5kaWNhdG9yc1RlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBpbmRpY2F0b3JzVGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogQWNjZXB0cyB0aGUgdGVtcGxhdGUgZm9yIG5leHQgbmF2aWdhdGlvbiBidXR0b24uXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ25leHRCdXR0b25UZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgbmV4dEJ1dHRvblRlbXBsYXRlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIEFjY2VwdHMgdGhlIHRlbXBsYXRlIGZvciBwcmV2aW91cyBuYXZpZ2F0aW9uIGJ1dHRvbi5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgncHJldmlvdXNCdXR0b25UZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgcHJldmlvdXNCdXR0b25UZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBBY2NlcHRzIHRoZSB0ZW1wbGF0ZSBmb3IgcGxheS9wYXVzZSBidXR0b24uXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ3BsYXlCdXR0b25UZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgcGxheUJ1dHRvblRlbXBsYXRlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgdGVtcGxhdGUgb3B0aW9uIGZvciBjYXJvdXNlbCBpdGVtcy5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnaXRlbVRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBpdGVtVGVtcGxhdGU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdFbGU6IEVsZW1lbnRSZWYsIHByaXZhdGUgc3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLm5nRWxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzID0gdGhpcy5pbmplY3RlZE1vZHVsZXMgfHwgW107XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5hZGRUd29XYXkuY2FsbCh0aGlzLCB0d29XYXlzKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMuY29udGV4dCAgPSBuZXcgQ29tcG9uZW50QmFzZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm5nT25Jbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5uZ0FmdGVyVmlld0luaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRleHQubmdPbkRlc3Ryb3kodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50YWdPYmplY3RzWzBdLmluc3RhbmNlID0gdGhpcy5jaGlsZEl0ZW1zO1xuICAgICAgICB0aGlzLmNvbnRleHQubmdBZnRlckNvbnRlbnRDaGVja2VkKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckV2ZW50czogKGV2ZW50TGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG4gICAgcHVibGljIGFkZFR3b1dheTogKHByb3BMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbn1cblxuIl19