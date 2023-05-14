import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['buttonModel', 'isFlat', 'type'];
let outputs = ['click'];
/**
 * 'e-button' directive represent a button of angular dialog
 * It must be contained in a Dialog component(`ej-dialog`).
 * ```html
 * <ejs-dialog id='dialog' showCloseIcon=true>
 *   <e-buttons>
 *    <e-dialogbutton [buttonModal]='okButton'></e-button>
 *    <e-dialogbutton [buttonModal]='cancelButton'></e-button>
 *   </e-buttons>
 * </ejs-dialog>
 * ```
 */
export class DialogButtonDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
DialogButtonDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DialogButtonDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
DialogButtonDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: DialogButtonDirective, selector: "e-buttons>e-dialogbutton", inputs: { buttonModel: "buttonModel", isFlat: "isFlat", type: "type" }, outputs: { click: "click" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DialogButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-buttons>e-dialogbutton',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * DialogButton Array Directive
 * @private
 */
export class ButtonsDirective extends ArrayBase {
    constructor() {
        super('buttons');
    }
}
ButtonsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ButtonsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ButtonsDirective, selector: "ejs-dialog>e-buttons", queries: [{ propertyName: "children", predicate: DialogButtonDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-dialog>e-buttons',
                    queries: {
                        children: new ContentChildren(DialogButtonDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9ucy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGlhbG9nL2J1dHRvbnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFJaEYsSUFBSSxLQUFLLEdBQWEsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3hELElBQUksT0FBTyxHQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEM7Ozs7Ozs7Ozs7O0dBV0c7QUFTSCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsV0FBa0M7SUF1QnpFLFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7a0hBNUJRLHFCQUFxQjtzR0FBckIscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBUmpDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxFQUVSO2lCQUNKOztBQWdDRDs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsU0FBMkI7SUFDN0Q7UUFDSSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7NkdBSFEsZ0JBQWdCO2lHQUFoQixnQkFBZ0IscUZBSFMscUJBQXFCOzJGQUc5QyxnQkFBZ0I7a0JBTjVCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsT0FBTyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxJQUFJLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQztxQkFDdkQ7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcGxleEJhc2UsIEFycmF5QmFzZSwgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2J1dHRvbk1vZGVsJywgJ2lzRmxhdCcsICd0eXBlJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbJ2NsaWNrJ107XG4vKipcbiAqICdlLWJ1dHRvbicgZGlyZWN0aXZlIHJlcHJlc2VudCBhIGJ1dHRvbiBvZiBhbmd1bGFyIGRpYWxvZyBcbiAqIEl0IG11c3QgYmUgY29udGFpbmVkIGluIGEgRGlhbG9nIGNvbXBvbmVudChgZWotZGlhbG9nYCkuIFxuICogYGBgaHRtbFxuICogPGVqcy1kaWFsb2cgaWQ9J2RpYWxvZycgc2hvd0Nsb3NlSWNvbj10cnVlPiBcbiAqICAgPGUtYnV0dG9ucz5cbiAqICAgIDxlLWRpYWxvZ2J1dHRvbiBbYnV0dG9uTW9kYWxdPSdva0J1dHRvbic+PC9lLWJ1dHRvbj5cbiAqICAgIDxlLWRpYWxvZ2J1dHRvbiBbYnV0dG9uTW9kYWxdPSdjYW5jZWxCdXR0b24nPjwvZS1idXR0b24+XG4gKiAgIDwvZS1idXR0b25zPlxuICogPC9lanMtZGlhbG9nPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1idXR0b25zPmUtZGlhbG9nYnV0dG9uJyxcbiAgICBpbnB1dHM6IGlucHV0LFxuICAgIG91dHB1dHM6IG91dHB1dHMsICAgIFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQnV0dG9uRGlyZWN0aXZlIGV4dGVuZHMgQ29tcGxleEJhc2U8RGlhbG9nQnV0dG9uRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdHB1YmxpYyBjbGljazogYW55O1xuXG5cbiAgICAvKiogXG4gICAgICogU3BlY2lmeSB0aGUgdHlwZSBvZiB0aGUgYnV0dG9uLiBcbiAgICAgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlIEJ1dHRvbiwgU3VibWl0IGFuZCBSZXNldC5cbiAgICAgKiBAZGVmYXVsdCAnQnV0dG9uJ1xuICAgICAqIEBhc3B0eXBlIHN0cmluZ1xuICAgICAqIEBibGF6b3J0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgIHB1YmxpYyB0eXBlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgYnV0dG9uIGNvbXBvbmVudCBwcm9wZXJ0aWVzIHRvIHJlbmRlciB0aGUgZGlhbG9nIGJ1dHRvbnMuXG4gICAgICovXG4gICAgcHVibGljIGJ1dHRvbk1vZGVsOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgZmxhdCBhcHBlYXJhbmNlIG9mIHRoZSBkaWFsb2cgYnV0dG9uc1xuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNGbGF0OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBEaWFsb2dCdXR0b24gQXJyYXkgRGlyZWN0aXZlXG4gKiBAcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1kaWFsb2c+ZS1idXR0b25zJyxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXcgQ29udGVudENoaWxkcmVuKERpYWxvZ0J1dHRvbkRpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25zRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPEJ1dHRvbnNEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2J1dHRvbnMnKTtcbiAgICB9XG59Il19