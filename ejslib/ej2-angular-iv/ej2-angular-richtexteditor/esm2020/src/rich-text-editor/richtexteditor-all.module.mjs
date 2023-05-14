import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorModule } from './richtexteditor.module';
import { Toolbar, Link, Image, Count, QuickToolbar, HtmlEditor, MarkdownEditor, Table, PasteCleanup, Resize, FileManager } from '@syncfusion/ej2-richtexteditor';
import * as i0 from "@angular/core";
export const ToolbarService = { provide: 'RichTextEditorToolbar', useValue: Toolbar };
export const LinkService = { provide: 'RichTextEditorLink', useValue: Link };
export const ImageService = { provide: 'RichTextEditorImage', useValue: Image };
export const CountService = { provide: 'RichTextEditorCount', useValue: Count };
export const QuickToolbarService = { provide: 'RichTextEditorQuickToolbar', useValue: QuickToolbar };
export const HtmlEditorService = { provide: 'RichTextEditorHtmlEditor', useValue: HtmlEditor };
export const MarkdownEditorService = { provide: 'RichTextEditorMarkdownEditor', useValue: MarkdownEditor };
export const TableService = { provide: 'RichTextEditorTable', useValue: Table };
export const PasteCleanupService = { provide: 'RichTextEditorPasteCleanup', useValue: PasteCleanup };
export const ResizeService = { provide: 'RichTextEditorResize', useValue: Resize };
export const FileManagerService = { provide: 'RichTextEditorFileManager', useValue: FileManager };
/**
 * NgModule definition for the RichTextEditor component with providers.
 */
export class RichTextEditorAllModule {
}
RichTextEditorAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RichTextEditorAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RichTextEditorAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RichTextEditorAllModule, imports: [CommonModule, RichTextEditorModule], exports: [RichTextEditorModule] });
RichTextEditorAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RichTextEditorAllModule, providers: [
        ToolbarService,
        LinkService,
        ImageService,
        CountService,
        QuickToolbarService,
        HtmlEditorService,
        MarkdownEditorService,
        TableService,
        PasteCleanupService,
        ResizeService,
        FileManagerService
    ], imports: [[CommonModule, RichTextEditorModule], RichTextEditorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RichTextEditorAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RichTextEditorModule],
                    exports: [
                        RichTextEditorModule
                    ],
                    providers: [
                        ToolbarService,
                        LinkService,
                        ImageService,
                        CountService,
                        QuickToolbarService,
                        HtmlEditorService,
                        MarkdownEditorService,
                        TableService,
                        PasteCleanupService,
                        ResizeService,
                        FileManagerService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmljaHRleHRlZGl0b3ItYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yaWNoLXRleHQtZWRpdG9yL3JpY2h0ZXh0ZWRpdG9yLWFsbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0NBQWdDLENBQUE7O0FBRzlKLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBa0IsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQyxDQUFDO0FBQ3BHLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBa0IsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO0FBQzNGLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBa0IsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFDO0FBQzlGLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBa0IsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFDO0FBQzlGLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFrQixFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFDLENBQUM7QUFDbkgsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUMsQ0FBQztBQUM3RyxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBQyxDQUFDO0FBQ3pILE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBa0IsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFDO0FBQzlGLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFrQixFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFDLENBQUM7QUFDbkgsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFrQixFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7QUFDakcsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsQ0FBQztBQUVoSDs7R0FFRztBQW9CSCxNQUFNLE9BQU8sdUJBQXVCOztvSEFBdkIsdUJBQXVCO3FIQUF2Qix1QkFBdUIsWUFsQnRCLFlBQVksRUFBRSxvQkFBb0IsYUFFeEMsb0JBQW9CO3FIQWdCZix1QkFBdUIsYUFkdEI7UUFDTixjQUFjO1FBQ2QsV0FBVztRQUNYLFlBQVk7UUFDWixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2Isa0JBQWtCO0tBQ3JCLFlBaEJRLENBQUMsWUFBWSxFQUFFLG9CQUFvQixDQUFDLEVBRXpDLG9CQUFvQjsyRkFnQmYsdUJBQXVCO2tCQW5CbkMsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsb0JBQW9CLENBQUM7b0JBQzdDLE9BQU8sRUFBRTt3QkFDTCxvQkFBb0I7cUJBQ3ZCO29CQUNELFNBQVMsRUFBQzt3QkFDTixjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLGtCQUFrQjtxQkFDckI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVmFsdWVQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJpY2hUZXh0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9yaWNodGV4dGVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmljaFRleHRFZGl0b3JNb2R1bGUgfSBmcm9tICcuL3JpY2h0ZXh0ZWRpdG9yLm1vZHVsZSc7XG5pbXBvcnQge1Rvb2xiYXIsIExpbmssIEltYWdlLCBDb3VudCwgUXVpY2tUb29sYmFyLCBIdG1sRWRpdG9yLCBNYXJrZG93bkVkaXRvciwgVGFibGUsIFBhc3RlQ2xlYW51cCwgUmVzaXplLCBGaWxlTWFuYWdlcn0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLXJpY2h0ZXh0ZWRpdG9yJ1xuXG5cbmV4cG9ydCBjb25zdCBUb29sYmFyU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1JpY2hUZXh0RWRpdG9yVG9vbGJhcicsIHVzZVZhbHVlOiBUb29sYmFyfTtcbmV4cG9ydCBjb25zdCBMaW5rU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1JpY2hUZXh0RWRpdG9yTGluaycsIHVzZVZhbHVlOiBMaW5rfTtcbmV4cG9ydCBjb25zdCBJbWFnZVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdSaWNoVGV4dEVkaXRvckltYWdlJywgdXNlVmFsdWU6IEltYWdlfTtcbmV4cG9ydCBjb25zdCBDb3VudFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdSaWNoVGV4dEVkaXRvckNvdW50JywgdXNlVmFsdWU6IENvdW50fTtcbmV4cG9ydCBjb25zdCBRdWlja1Rvb2xiYXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUmljaFRleHRFZGl0b3JRdWlja1Rvb2xiYXInLCB1c2VWYWx1ZTogUXVpY2tUb29sYmFyfTtcbmV4cG9ydCBjb25zdCBIdG1sRWRpdG9yU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1JpY2hUZXh0RWRpdG9ySHRtbEVkaXRvcicsIHVzZVZhbHVlOiBIdG1sRWRpdG9yfTtcbmV4cG9ydCBjb25zdCBNYXJrZG93bkVkaXRvclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdSaWNoVGV4dEVkaXRvck1hcmtkb3duRWRpdG9yJywgdXNlVmFsdWU6IE1hcmtkb3duRWRpdG9yfTtcbmV4cG9ydCBjb25zdCBUYWJsZVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdSaWNoVGV4dEVkaXRvclRhYmxlJywgdXNlVmFsdWU6IFRhYmxlfTtcbmV4cG9ydCBjb25zdCBQYXN0ZUNsZWFudXBTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUmljaFRleHRFZGl0b3JQYXN0ZUNsZWFudXAnLCB1c2VWYWx1ZTogUGFzdGVDbGVhbnVwfTtcbmV4cG9ydCBjb25zdCBSZXNpemVTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUmljaFRleHRFZGl0b3JSZXNpemUnLCB1c2VWYWx1ZTogUmVzaXplfTtcbmV4cG9ydCBjb25zdCBGaWxlTWFuYWdlclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdSaWNoVGV4dEVkaXRvckZpbGVNYW5hZ2VyJywgdXNlVmFsdWU6IEZpbGVNYW5hZ2VyfTtcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgUmljaFRleHRFZGl0b3IgY29tcG9uZW50IHdpdGggcHJvdmlkZXJzLlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJpY2hUZXh0RWRpdG9yTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFJpY2hUZXh0RWRpdG9yTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6W1xuICAgICAgICBUb29sYmFyU2VydmljZSxcbiAgICAgICAgTGlua1NlcnZpY2UsXG4gICAgICAgIEltYWdlU2VydmljZSxcbiAgICAgICAgQ291bnRTZXJ2aWNlLFxuICAgICAgICBRdWlja1Rvb2xiYXJTZXJ2aWNlLFxuICAgICAgICBIdG1sRWRpdG9yU2VydmljZSxcbiAgICAgICAgTWFya2Rvd25FZGl0b3JTZXJ2aWNlLFxuICAgICAgICBUYWJsZVNlcnZpY2UsXG4gICAgICAgIFBhc3RlQ2xlYW51cFNlcnZpY2UsXG4gICAgICAgIFJlc2l6ZVNlcnZpY2UsXG4gICAgICAgIEZpbGVNYW5hZ2VyU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUmljaFRleHRFZGl0b3JBbGxNb2R1bGUgeyB9Il19