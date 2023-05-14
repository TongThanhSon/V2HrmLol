import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { PivotFieldList } from '@syncfusion/ej2-pivotview';
import * as i0 from "@angular/core";
export const inputs = ['aggregateTypes', 'allowCalculatedField', 'allowDeferLayoutUpdate', 'cssClass', 'currencyCode', 'dataSourceSettings', 'enablePersistence', 'enableRtl', 'loadOnDemandInMemberEditor', 'locale', 'maxNodeLimitInMemberEditor', 'renderMode', 'showValuesButton', 'spinnerTemplate', 'target'];
export const outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'aggregateCellInfo', 'aggregateMenuOpen', 'beforeServiceInvoke', 'calculatedFieldCreate', 'created', 'dataBound', 'destroyed', 'enginePopulated', 'enginePopulating', 'fieldDragStart', 'fieldDrop', 'fieldRemove', 'load', 'memberEditorOpen', 'memberFiltering', 'onFieldDropped', 'onHeadersSort'];
export const twoWays = [];
/**
 * `ej-pivotfieldlist` represents the Angular PivotFieldList Component.
 * ```html
 * <ej-pivotfieldlist></ej-pivotfieldlist>
 * ```
 */
let PivotFieldListComponent = class PivotFieldListComponent extends PivotFieldList {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('PivotViewCalculatedField');
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
PivotFieldListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotFieldListComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
PivotFieldListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: PivotFieldListComponent, selector: "ejs-pivotfieldlist", inputs: { aggregateTypes: "aggregateTypes", allowCalculatedField: "allowCalculatedField", allowDeferLayoutUpdate: "allowDeferLayoutUpdate", cssClass: "cssClass", currencyCode: "currencyCode", dataSourceSettings: "dataSourceSettings", enablePersistence: "enablePersistence", enableRtl: "enableRtl", loadOnDemandInMemberEditor: "loadOnDemandInMemberEditor", locale: "locale", maxNodeLimitInMemberEditor: "maxNodeLimitInMemberEditor", renderMode: "renderMode", showValuesButton: "showValuesButton", spinnerTemplate: "spinnerTemplate", target: "target" }, outputs: { actionBegin: "actionBegin", actionComplete: "actionComplete", actionFailure: "actionFailure", aggregateCellInfo: "aggregateCellInfo", aggregateMenuOpen: "aggregateMenuOpen", beforeServiceInvoke: "beforeServiceInvoke", calculatedFieldCreate: "calculatedFieldCreate", created: "created", dataBound: "dataBound", destroyed: "destroyed", enginePopulated: "enginePopulated", enginePopulating: "enginePopulating", fieldDragStart: "fieldDragStart", fieldDrop: "fieldDrop", fieldRemove: "fieldRemove", load: "load", memberEditorOpen: "memberEditorOpen", memberFiltering: "memberFiltering", onFieldDropped: "onFieldDropped", onHeadersSort: "onHeadersSort" }, usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
PivotFieldListComponent = __decorate([
    ComponentMixins([ComponentBase])
], PivotFieldListComponent);
export { PivotFieldListComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotFieldListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-pivotfieldlist',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl2b3RmaWVsZGxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Bpdm90ZmllbGRsaXN0L3Bpdm90ZmllbGRsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsdUJBQXVCLEVBQWlELE1BQU0sZUFBZSxDQUFDO0FBQ2hKLE9BQU8sRUFBRSxhQUFhLEVBQStCLGVBQWUsRUFBMEIsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0ksT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUkzRCxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQWEsQ0FBQyxnQkFBZ0IsRUFBQyxzQkFBc0IsRUFBQyx3QkFBd0IsRUFBQyxVQUFVLEVBQUMsY0FBYyxFQUFDLG9CQUFvQixFQUFDLG1CQUFtQixFQUFDLFdBQVcsRUFBQyw0QkFBNEIsRUFBQyxRQUFRLEVBQUMsNEJBQTRCLEVBQUMsWUFBWSxFQUFDLGtCQUFrQixFQUFDLGlCQUFpQixFQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hULE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBYSxDQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxlQUFlLEVBQUMsbUJBQW1CLEVBQUMsbUJBQW1CLEVBQUMscUJBQXFCLEVBQUMsdUJBQXVCLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsaUJBQWlCLEVBQUMsa0JBQWtCLEVBQUMsZ0JBQWdCLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxNQUFNLEVBQUMsa0JBQWtCLEVBQUMsaUJBQWlCLEVBQUMsZ0JBQWdCLEVBQUMsZUFBZSxDQUFDLENBQUM7QUFDdlcsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFhLEVBQUUsQ0FBQztBQUVwQzs7Ozs7R0FLRztJQVlVLHVCQUF1QixTQUF2Qix1QkFBd0IsU0FBUSxjQUFjO0lBMEJ2RCxZQUFvQixLQUFpQixFQUFVLFNBQW9CLEVBQVUsZ0JBQWlDLEVBQVUsUUFBa0I7UUFDdEksS0FBSyxFQUFFLENBQUM7UUFEUSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBRXRJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQztRQUNsRCxJQUFJO1lBQ0ksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUN4RCxJQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUNqQztTQUNKO1FBQUMsTUFBTSxHQUFHO1FBRWYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFJLElBQUksYUFBYSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVNLFFBQVE7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sZUFBZTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxxQkFBcUI7UUFFeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBSUosQ0FBQTtvSEE5RFksdUJBQXVCO3dHQUF2Qix1QkFBdUIsOHdDQVB0QixFQUFFO0FBT0gsdUJBQXVCO0lBRG5DLGVBQWUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0dBQ3BCLHVCQUF1QixDQThEbkM7U0E5RFksdUJBQXVCOzJGQUF2Qix1QkFBdUI7a0JBWG5DLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFFBQVEsRUFBRSxFQUFFO29CQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxPQUFPLEVBQUUsRUFFUjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyLCBJbmplY3RvciwgVmFsdWVQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50QmFzZSwgSUNvbXBvbmVudEJhc2UsIGFwcGx5TWl4aW5zLCBDb21wb25lbnRNaXhpbnMsIFByb3BlcnR5Q29sbGVjdGlvbkluZm8sIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBQaXZvdEZpZWxkTGlzdCB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1waXZvdHZpZXcnO1xuXG5cblxuZXhwb3J0IGNvbnN0IGlucHV0czogc3RyaW5nW10gPSBbJ2FnZ3JlZ2F0ZVR5cGVzJywnYWxsb3dDYWxjdWxhdGVkRmllbGQnLCdhbGxvd0RlZmVyTGF5b3V0VXBkYXRlJywnY3NzQ2xhc3MnLCdjdXJyZW5jeUNvZGUnLCdkYXRhU291cmNlU2V0dGluZ3MnLCdlbmFibGVQZXJzaXN0ZW5jZScsJ2VuYWJsZVJ0bCcsJ2xvYWRPbkRlbWFuZEluTWVtYmVyRWRpdG9yJywnbG9jYWxlJywnbWF4Tm9kZUxpbWl0SW5NZW1iZXJFZGl0b3InLCdyZW5kZXJNb2RlJywnc2hvd1ZhbHVlc0J1dHRvbicsJ3NwaW5uZXJUZW1wbGF0ZScsJ3RhcmdldCddO1xuZXhwb3J0IGNvbnN0IG91dHB1dHM6IHN0cmluZ1tdID0gWydhY3Rpb25CZWdpbicsJ2FjdGlvbkNvbXBsZXRlJywnYWN0aW9uRmFpbHVyZScsJ2FnZ3JlZ2F0ZUNlbGxJbmZvJywnYWdncmVnYXRlTWVudU9wZW4nLCdiZWZvcmVTZXJ2aWNlSW52b2tlJywnY2FsY3VsYXRlZEZpZWxkQ3JlYXRlJywnY3JlYXRlZCcsJ2RhdGFCb3VuZCcsJ2Rlc3Ryb3llZCcsJ2VuZ2luZVBvcHVsYXRlZCcsJ2VuZ2luZVBvcHVsYXRpbmcnLCdmaWVsZERyYWdTdGFydCcsJ2ZpZWxkRHJvcCcsJ2ZpZWxkUmVtb3ZlJywnbG9hZCcsJ21lbWJlckVkaXRvck9wZW4nLCdtZW1iZXJGaWx0ZXJpbmcnLCdvbkZpZWxkRHJvcHBlZCcsJ29uSGVhZGVyc1NvcnQnXTtcbmV4cG9ydCBjb25zdCB0d29XYXlzOiBzdHJpbmdbXSA9IFtdO1xuXG4vKipcbiAqIGBlai1waXZvdGZpZWxkbGlzdGAgcmVwcmVzZW50cyB0aGUgQW5ndWxhciBQaXZvdEZpZWxkTGlzdCBDb21wb25lbnQuXG4gKiBgYGBodG1sXG4gKiA8ZWotcGl2b3RmaWVsZGxpc3Q+PC9lai1waXZvdGZpZWxkbGlzdD5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1waXZvdGZpZWxkbGlzdCcsXG4gICAgaW5wdXRzOiBpbnB1dHMsXG4gICAgb3V0cHV0czogb3V0cHV0cyxcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbkBDb21wb25lbnRNaXhpbnMoW0NvbXBvbmVudEJhc2VdKVxuZXhwb3J0IGNsYXNzIFBpdm90RmllbGRMaXN0Q29tcG9uZW50IGV4dGVuZHMgUGl2b3RGaWVsZExpc3QgaW1wbGVtZW50cyBJQ29tcG9uZW50QmFzZSB7XG4gICAgcHVibGljIGNvbnRleHQgOiBhbnk7XG4gICAgcHVibGljIHRhZ09iamVjdHM6IGFueTtcblx0YWN0aW9uQmVnaW46IGFueTtcblx0YWN0aW9uQ29tcGxldGU6IGFueTtcblx0YWN0aW9uRmFpbHVyZTogYW55O1xuXHRhZ2dyZWdhdGVDZWxsSW5mbzogYW55O1xuXHRhZ2dyZWdhdGVNZW51T3BlbjogYW55O1xuXHRiZWZvcmVTZXJ2aWNlSW52b2tlOiBhbnk7XG5cdGNhbGN1bGF0ZWRGaWVsZENyZWF0ZTogYW55O1xuXHRjcmVhdGVkOiBhbnk7XG5cdGRhdGFCb3VuZDogYW55O1xuXHRkZXN0cm95ZWQ6IGFueTtcblx0ZW5naW5lUG9wdWxhdGVkOiBhbnk7XG5cdGVuZ2luZVBvcHVsYXRpbmc6IGFueTtcblx0ZmllbGREcmFnU3RhcnQ6IGFueTtcblx0ZmllbGREcm9wOiBhbnk7XG5cdGZpZWxkUmVtb3ZlOiBhbnk7XG5cdGxvYWQ6IGFueTtcblx0bWVtYmVyRWRpdG9yT3BlbjogYW55O1xuXHRtZW1iZXJGaWx0ZXJpbmc6IGFueTtcblx0b25GaWVsZERyb3BwZWQ6IGFueTtcblx0cHVibGljIG9uSGVhZGVyc1NvcnQ6IGFueTtcblxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nRWxlOiBFbGVtZW50UmVmLCBwcml2YXRlIHNyZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5uZ0VsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcyA9IHRoaXMuaW5qZWN0ZWRNb2R1bGVzIHx8IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnUGl2b3RWaWV3Q2FsY3VsYXRlZEZpZWxkJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5hZGRUd29XYXkuY2FsbCh0aGlzLCB0d29XYXlzKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMuY29udGV4dCAgPSBuZXcgQ29tcG9uZW50QmFzZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm5nT25Jbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5uZ0FmdGVyVmlld0luaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRleHQubmdPbkRlc3Ryb3kodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY29udGV4dC5uZ0FmdGVyQ29udGVudENoZWNrZWQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyRXZlbnRzOiAoZXZlbnRMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbiAgICBwdWJsaWMgYWRkVHdvV2F5OiAocHJvcExpc3Q6IHN0cmluZ1tdKSA9PiB2b2lkO1xufVxuXG4iXX0=