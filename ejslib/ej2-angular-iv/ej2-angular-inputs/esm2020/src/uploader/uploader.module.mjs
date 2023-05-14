import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadedFilesDirective, FilesDirective } from './files.directive';
import { UploaderComponent } from './uploader.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the Uploader component.
 */
export class UploaderModule {
}
UploaderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: UploaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UploaderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: UploaderModule, declarations: [UploaderComponent,
        UploadedFilesDirective,
        FilesDirective], imports: [CommonModule], exports: [UploaderComponent,
        UploadedFilesDirective,
        FilesDirective] });
UploaderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: UploaderModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: UploaderModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        UploaderComponent,
                        UploadedFilesDirective,
                        FilesDirective
                    ],
                    exports: [
                        UploaderComponent,
                        UploadedFilesDirective,
                        FilesDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3VwbG9hZGVyL3VwbG9hZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRXpEOztHQUVHO0FBY0gsTUFBTSxPQUFPLGNBQWM7OzJHQUFkLGNBQWM7NEdBQWQsY0FBYyxpQkFWbkIsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0QixjQUFjLGFBSlIsWUFBWSxhQU9sQixpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLGNBQWM7NEdBR1QsY0FBYyxZQVpkLENBQUMsWUFBWSxDQUFDOzJGQVlkLGNBQWM7a0JBYjFCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUU7d0JBQ1YsaUJBQWlCO3dCQUNqQixzQkFBc0I7d0JBQ3RCLGNBQWM7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxpQkFBaUI7d0JBQ2pCLHNCQUFzQjt3QkFDdEIsY0FBYztxQkFDakI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFVwbG9hZGVkRmlsZXNEaXJlY3RpdmUsIEZpbGVzRGlyZWN0aXZlIH0gZnJvbSAnLi9maWxlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVXBsb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL3VwbG9hZGVyLmNvbXBvbmVudCc7XG5cbi8qKlxuICogTmdNb2R1bGUgZGVmaW5pdGlvbiBmb3IgdGhlIFVwbG9hZGVyIGNvbXBvbmVudC5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVXBsb2FkZXJDb21wb25lbnQsXG4gICAgICAgIFVwbG9hZGVkRmlsZXNEaXJlY3RpdmUsXG4gICAgICAgIEZpbGVzRGlyZWN0aXZlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFVwbG9hZGVyQ29tcG9uZW50LFxuICAgICAgICBVcGxvYWRlZEZpbGVzRGlyZWN0aXZlLFxuICAgICAgICBGaWxlc0RpcmVjdGl2ZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkZXJNb2R1bGUgeyB9Il19