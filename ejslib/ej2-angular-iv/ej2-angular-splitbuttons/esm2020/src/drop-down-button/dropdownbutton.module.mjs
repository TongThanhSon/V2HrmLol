import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownButtonItemDirective, DropDownButtonItemsDirective } from './items.directive';
import { DropDownButtonComponent } from './dropdownbutton.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the DropDownButton component.
 */
export class DropDownButtonModule {
}
DropDownButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DropDownButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonModule, declarations: [DropDownButtonComponent,
        DropDownButtonItemDirective,
        DropDownButtonItemsDirective], imports: [CommonModule], exports: [DropDownButtonComponent,
        DropDownButtonItemDirective,
        DropDownButtonItemsDirective] });
DropDownButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        DropDownButtonComponent,
                        DropDownButtonItemDirective,
                        DropDownButtonItemsDirective
                    ],
                    exports: [
                        DropDownButtonComponent,
                        DropDownButtonItemDirective,
                        DropDownButtonItemsDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd25idXR0b24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Ryb3AtZG93bi1idXR0b24vZHJvcGRvd25idXR0b24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUVyRTs7R0FFRztBQWNILE1BQU0sT0FBTyxvQkFBb0I7O2lIQUFwQixvQkFBb0I7a0hBQXBCLG9CQUFvQixpQkFWekIsdUJBQXVCO1FBQ3ZCLDJCQUEyQjtRQUMzQiw0QkFBNEIsYUFKdEIsWUFBWSxhQU9sQix1QkFBdUI7UUFDdkIsMkJBQTJCO1FBQzNCLDRCQUE0QjtrSEFHdkIsb0JBQW9CLFlBWnBCLENBQUMsWUFBWSxDQUFDOzJGQVlkLG9CQUFvQjtrQkFiaEMsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDVix1QkFBdUI7d0JBQ3ZCLDJCQUEyQjt3QkFDM0IsNEJBQTRCO3FCQUMvQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsdUJBQXVCO3dCQUN2QiwyQkFBMkI7d0JBQzNCLDRCQUE0QjtxQkFDL0I7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERyb3BEb3duQnV0dG9uSXRlbURpcmVjdGl2ZSwgRHJvcERvd25CdXR0b25JdGVtc0RpcmVjdGl2ZSB9IGZyb20gJy4vaXRlbXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IERyb3BEb3duQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9kcm9wZG93bmJ1dHRvbi5jb21wb25lbnQnO1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBEcm9wRG93bkJ1dHRvbiBjb21wb25lbnQuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIERyb3BEb3duQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBEcm9wRG93bkJ1dHRvbkl0ZW1EaXJlY3RpdmUsXG4gICAgICAgIERyb3BEb3duQnV0dG9uSXRlbXNEaXJlY3RpdmVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgRHJvcERvd25CdXR0b25Db21wb25lbnQsXG4gICAgICAgIERyb3BEb3duQnV0dG9uSXRlbURpcmVjdGl2ZSxcbiAgICAgICAgRHJvcERvd25CdXR0b25JdGVtc0RpcmVjdGl2ZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRHJvcERvd25CdXR0b25Nb2R1bGUgeyB9Il19