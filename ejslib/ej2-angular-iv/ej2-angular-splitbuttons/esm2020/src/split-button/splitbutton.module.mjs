import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonItemDirective, SplitButtonItemsDirective } from './items.directive';
import { SplitButtonComponent } from './splitbutton.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the SplitButton component.
 */
export class SplitButtonModule {
}
SplitButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SplitButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonModule, declarations: [SplitButtonComponent,
        SplitButtonItemDirective,
        SplitButtonItemsDirective], imports: [CommonModule], exports: [SplitButtonComponent,
        SplitButtonItemDirective,
        SplitButtonItemsDirective] });
SplitButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        SplitButtonComponent,
                        SplitButtonItemDirective,
                        SplitButtonItemsDirective
                    ],
                    exports: [
                        SplitButtonComponent,
                        SplitButtonItemDirective,
                        SplitButtonItemsDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXRidXR0b24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NwbGl0LWJ1dHRvbi9zcGxpdGJ1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBRS9EOztHQUVHO0FBY0gsTUFBTSxPQUFPLGlCQUFpQjs7OEdBQWpCLGlCQUFpQjsrR0FBakIsaUJBQWlCLGlCQVZ0QixvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLHlCQUF5QixhQUpuQixZQUFZLGFBT2xCLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIseUJBQXlCOytHQUdwQixpQkFBaUIsWUFaakIsQ0FBQyxZQUFZLENBQUM7MkZBWWQsaUJBQWlCO2tCQWI3QixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFO3dCQUNWLG9CQUFvQjt3QkFDcEIsd0JBQXdCO3dCQUN4Qix5QkFBeUI7cUJBQzVCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIseUJBQXlCO3FCQUM1QjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3BsaXRCdXR0b25JdGVtRGlyZWN0aXZlLCBTcGxpdEJ1dHRvbkl0ZW1zRGlyZWN0aXZlIH0gZnJvbSAnLi9pdGVtcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3BsaXRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3NwbGl0YnV0dG9uLmNvbXBvbmVudCc7XG5cbi8qKlxuICogTmdNb2R1bGUgZGVmaW5pdGlvbiBmb3IgdGhlIFNwbGl0QnV0dG9uIGNvbXBvbmVudC5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3BsaXRCdXR0b25Db21wb25lbnQsXG4gICAgICAgIFNwbGl0QnV0dG9uSXRlbURpcmVjdGl2ZSxcbiAgICAgICAgU3BsaXRCdXR0b25JdGVtc0RpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTcGxpdEJ1dHRvbkNvbXBvbmVudCxcbiAgICAgICAgU3BsaXRCdXR0b25JdGVtRGlyZWN0aXZlLFxuICAgICAgICBTcGxpdEJ1dHRvbkl0ZW1zRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTcGxpdEJ1dHRvbk1vZHVsZSB7IH0iXX0=