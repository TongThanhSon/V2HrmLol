import { __decorate } from "tslib";
import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['annotationAngle', 'annotationRadius', 'content'];
let outputs = [];
/**
 * ProgressBarAnnotations Directive
 * ```html
 * <e-progressbar-annotations>
 * <e-progressbar-annotation></e-progressbar-annotation>
 * </e-progressbar-annotations>
 * ```
 */
export class ProgressBarAnnotationDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
ProgressBarAnnotationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarAnnotationDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ProgressBarAnnotationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ProgressBarAnnotationDirective, selector: "e-progressbar-annotations>e-progressbar-annotation", inputs: { annotationAngle: "annotationAngle", annotationRadius: "annotationRadius", content: "content" }, queries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], ProgressBarAnnotationDirective.prototype, "content", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarAnnotationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-progressbar-annotations>e-progressbar-annotation',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { content: [{
                type: ContentChild,
                args: ['content']
            }] } });
/**
 * ProgressBarAnnotation Array Directive
 * @private
 */
export class ProgressBarAnnotationsDirective extends ArrayBase {
    constructor() {
        super('annotations');
    }
}
ProgressBarAnnotationsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarAnnotationsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ProgressBarAnnotationsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ProgressBarAnnotationsDirective, selector: "ej-progressbar>e-progressbar-annotations", queries: [{ propertyName: "children", predicate: ProgressBarAnnotationDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ProgressBarAnnotationsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-progressbar>e-progressbar-annotations',
                    queries: {
                        children: new ContentChildren(ProgressBarAnnotationDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbnMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Byb2dyZXNzYmFyL2Fubm90YXRpb25zLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBR3hELElBQUksS0FBSyxHQUFhLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDekUsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7Ozs7O0dBT0c7QUFTSCxNQUFNLE9BQU8sOEJBQStCLFNBQVEsV0FBMkM7SUF1QjNGLFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7MkhBNUJRLDhCQUE4QjsrR0FBOUIsOEJBQThCO0FBcUJ2QztJQURDLFFBQVEsRUFBRTsrREFDUzsyRkFyQlgsOEJBQThCO2tCQVIxQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxvREFBb0Q7b0JBQzlELE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsRUFFUjtpQkFDSjt1R0FzQlUsT0FBTztzQkFGYixZQUFZO3VCQUFDLFNBQVM7O0FBWTNCOzs7R0FHRztBQU9ILE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxTQUEwQztJQUMzRjtRQUNJLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QixDQUFDOzs0SEFIUSwrQkFBK0I7Z0hBQS9CLCtCQUErQix5R0FITiw4QkFBOEI7MkZBR3ZELCtCQUErQjtrQkFOM0MsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsMENBQTBDO29CQUNwRCxPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLDhCQUE4QixDQUFDO3FCQUNoRTtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2Fubm90YXRpb25BbmdsZScsICdhbm5vdGF0aW9uUmFkaXVzJywgJ2NvbnRlbnQnXTtcbmxldCBvdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuLyoqXG4gKiBQcm9ncmVzc0JhckFubm90YXRpb25zIERpcmVjdGl2ZVxuICogYGBgaHRtbFxuICogPGUtcHJvZ3Jlc3NiYXItYW5ub3RhdGlvbnM+XG4gKiA8ZS1wcm9ncmVzc2Jhci1hbm5vdGF0aW9uPjwvZS1wcm9ncmVzc2Jhci1hbm5vdGF0aW9uPlxuICogPC9lLXByb2dyZXNzYmFyLWFubm90YXRpb25zPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1wcm9ncmVzc2Jhci1hbm5vdGF0aW9ucz5lLXByb2dyZXNzYmFyLWFubm90YXRpb24nLFxuICAgIGlucHV0czogaW5wdXQsXG4gICAgb3V0cHV0czogb3V0cHV0cywgICAgXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckFubm90YXRpb25EaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxQcm9ncmVzc0JhckFubm90YXRpb25EaXJlY3RpdmU+IHtcbiAgICBwdWJsaWMgZGlyZWN0aXZlUHJvcExpc3Q6IGFueTtcblx0XG5cblxuICAgIC8qKiBcbiAgICAgKiB0byBtb3ZlIGFubm90YXRpb25cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgcHVibGljIGFubm90YXRpb25BbmdsZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiB0byBtb3ZlIGFubm90YXRpb25cbiAgICAgKiBAZGVmYXVsdCAnMCUnXG4gICAgICovXG4gICAgcHVibGljIGFubm90YXRpb25SYWRpdXM6IGFueTtcbiAgICAvKiogXG4gICAgICogQ29udGVudCBvZiB0aGUgYW5ub3RhdGlvbiwgd2hpY2ggYWNjZXB0cyB0aGUgaWQgb2YgdGhlIGN1c3RvbSBlbGVtZW50LlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdjb250ZW50JylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBjb250ZW50OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9ncmVzc0JhckFubm90YXRpb24gQXJyYXkgRGlyZWN0aXZlXG4gKiBAcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2VqLXByb2dyZXNzYmFyPmUtcHJvZ3Jlc3NiYXItYW5ub3RhdGlvbnMnLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oUHJvZ3Jlc3NCYXJBbm5vdGF0aW9uRGlyZWN0aXZlKVxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyQW5ub3RhdGlvbnNEaXJlY3RpdmUgZXh0ZW5kcyBBcnJheUJhc2U8UHJvZ3Jlc3NCYXJBbm5vdGF0aW9uc0RpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignYW5ub3RhdGlvbnMnKTtcbiAgICB9XG59Il19