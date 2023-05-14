import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaletteDirective, PalettesDirective } from './palettes.directive';
import { SymbolPaletteComponent } from './symbolpalette.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the SymbolPalette component.
 */
export class SymbolPaletteModule {
}
SymbolPaletteModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SymbolPaletteModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SymbolPaletteModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SymbolPaletteModule, declarations: [SymbolPaletteComponent,
        PaletteDirective,
        PalettesDirective], imports: [CommonModule], exports: [SymbolPaletteComponent,
        PaletteDirective,
        PalettesDirective] });
SymbolPaletteModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SymbolPaletteModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SymbolPaletteModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        SymbolPaletteComponent,
                        PaletteDirective,
                        PalettesDirective
                    ],
                    exports: [
                        SymbolPaletteComponent,
                        PaletteDirective,
                        PalettesDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ltYm9scGFsZXR0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3ltYm9sLXBhbGV0dGUvc3ltYm9scGFsZXR0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBRW5FOztHQUVHO0FBY0gsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CLGlCQVZ4QixzQkFBc0I7UUFDdEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQixhQUpYLFlBQVksYUFPbEIsc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQixpQkFBaUI7aUhBR1osbUJBQW1CLFlBWm5CLENBQUMsWUFBWSxDQUFDOzJGQVlkLG1CQUFtQjtrQkFiL0IsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDVixzQkFBc0I7d0JBQ3RCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsc0JBQXNCO3dCQUN0QixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjtxQkFDcEI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBhbGV0dGVEaXJlY3RpdmUsIFBhbGV0dGVzRGlyZWN0aXZlIH0gZnJvbSAnLi9wYWxldHRlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3ltYm9sUGFsZXR0ZUNvbXBvbmVudCB9IGZyb20gJy4vc3ltYm9scGFsZXR0ZS5jb21wb25lbnQnO1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBTeW1ib2xQYWxldHRlIGNvbXBvbmVudC5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3ltYm9sUGFsZXR0ZUNvbXBvbmVudCxcbiAgICAgICAgUGFsZXR0ZURpcmVjdGl2ZSxcbiAgICAgICAgUGFsZXR0ZXNEaXJlY3RpdmVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3ltYm9sUGFsZXR0ZUNvbXBvbmVudCxcbiAgICAgICAgUGFsZXR0ZURpcmVjdGl2ZSxcbiAgICAgICAgUGFsZXR0ZXNEaXJlY3RpdmVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN5bWJvbFBhbGV0dGVNb2R1bGUgeyB9Il19