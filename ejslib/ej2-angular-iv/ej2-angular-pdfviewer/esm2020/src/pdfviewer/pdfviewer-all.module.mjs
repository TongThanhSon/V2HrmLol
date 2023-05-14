import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from './pdfviewer.module';
import { LinkAnnotation, BookmarkView, Magnification, ThumbnailView, Toolbar, Navigation, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';
import * as i0 from "@angular/core";
export const LinkAnnotationService = { provide: 'PdfViewerLinkAnnotation', useValue: LinkAnnotation };
export const BookmarkViewService = { provide: 'PdfViewerBookmarkView', useValue: BookmarkView };
export const MagnificationService = { provide: 'PdfViewerMagnification', useValue: Magnification };
export const ThumbnailViewService = { provide: 'PdfViewerThumbnailView', useValue: ThumbnailView };
export const ToolbarService = { provide: 'PdfViewerToolbar', useValue: Toolbar };
export const NavigationService = { provide: 'PdfViewerNavigation', useValue: Navigation };
export const PrintService = { provide: 'PdfViewerPrint', useValue: Print };
export const TextSelectionService = { provide: 'PdfViewerTextSelection', useValue: TextSelection };
export const TextSearchService = { provide: 'PdfViewerTextSearch', useValue: TextSearch };
export const AnnotationService = { provide: 'PdfViewerAnnotation', useValue: Annotation };
export const FormDesignerService = { provide: 'PdfViewerFormDesigner', useValue: FormDesigner };
export const FormFieldsService = { provide: 'PdfViewerFormFields', useValue: FormFields };
/**
 * NgModule definition for the PdfViewer component with providers.
 */
export class PdfViewerAllModule {
}
PdfViewerAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PdfViewerAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PdfViewerAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PdfViewerAllModule, imports: [CommonModule, PdfViewerModule], exports: [PdfViewerModule] });
PdfViewerAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PdfViewerAllModule, providers: [
        LinkAnnotationService,
        BookmarkViewService,
        MagnificationService,
        ThumbnailViewService,
        ToolbarService,
        NavigationService,
        PrintService,
        TextSelectionService,
        TextSearchService,
        AnnotationService,
        FormDesignerService,
        FormFieldsService
    ], imports: [[CommonModule, PdfViewerModule], PdfViewerModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PdfViewerAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, PdfViewerModule],
                    exports: [
                        PdfViewerModule
                    ],
                    providers: [
                        LinkAnnotationService,
                        BookmarkViewService,
                        MagnificationService,
                        ThumbnailViewService,
                        ToolbarService,
                        NavigationService,
                        PrintService,
                        TextSelectionService,
                        TextSearchService,
                        AnnotationService,
                        FormDesignerService,
                        FormFieldsService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmdmlld2VyLWFsbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcGRmdmlld2VyL3BkZnZpZXdlci1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sMkJBQTJCLENBQUE7O0FBR2pNLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFrQixFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFDLENBQUM7QUFDcEgsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUMsQ0FBQztBQUM5RyxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQyxDQUFDO0FBQ2pILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFrQixFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFDLENBQUM7QUFDakgsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFrQixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDLENBQUM7QUFDL0YsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUMsQ0FBQztBQUN4RyxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FBQztBQUN6RixNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQyxDQUFDO0FBQ2pILE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFrQixFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDLENBQUM7QUFDeEcsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUMsQ0FBQztBQUN4RyxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBQyxDQUFDO0FBQzlHLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFrQixFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDLENBQUM7QUFFeEc7O0dBRUc7QUFxQkgsTUFBTSxPQUFPLGtCQUFrQjs7K0dBQWxCLGtCQUFrQjtnSEFBbEIsa0JBQWtCLFlBbkJqQixZQUFZLEVBQUUsZUFBZSxhQUVuQyxlQUFlO2dIQWlCVixrQkFBa0IsYUFmakI7UUFDTixxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGlCQUFpQjtLQUNwQixZQWpCUSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsRUFFcEMsZUFBZTsyRkFpQlYsa0JBQWtCO2tCQXBCOUIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO29CQUN4QyxPQUFPLEVBQUU7d0JBQ0wsZUFBZTtxQkFDbEI7b0JBQ0QsU0FBUyxFQUFDO3dCQUNOLHFCQUFxQjt3QkFDckIsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIsY0FBYzt3QkFDZCxpQkFBaUI7d0JBQ2pCLFlBQVk7d0JBQ1osb0JBQW9CO3dCQUNwQixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsbUJBQW1CO3dCQUNuQixpQkFBaUI7cUJBQ3BCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFZhbHVlUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQZGZWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL3BkZnZpZXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmVmlld2VyTW9kdWxlIH0gZnJvbSAnLi9wZGZ2aWV3ZXIubW9kdWxlJztcbmltcG9ydCB7TGlua0Fubm90YXRpb24sIEJvb2ttYXJrVmlldywgTWFnbmlmaWNhdGlvbiwgVGh1bWJuYWlsVmlldywgVG9vbGJhciwgTmF2aWdhdGlvbiwgUHJpbnQsIFRleHRTZWxlY3Rpb24sIFRleHRTZWFyY2gsIEFubm90YXRpb24sIEZvcm1EZXNpZ25lciwgRm9ybUZpZWxkc30gZnJvbSAnQHN5bmNmdXNpb24vZWoyLXBkZnZpZXdlcidcblxuXG5leHBvcnQgY29uc3QgTGlua0Fubm90YXRpb25TZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUGRmVmlld2VyTGlua0Fubm90YXRpb24nLCB1c2VWYWx1ZTogTGlua0Fubm90YXRpb259O1xuZXhwb3J0IGNvbnN0IEJvb2ttYXJrVmlld1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdQZGZWaWV3ZXJCb29rbWFya1ZpZXcnLCB1c2VWYWx1ZTogQm9va21hcmtWaWV3fTtcbmV4cG9ydCBjb25zdCBNYWduaWZpY2F0aW9uU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1BkZlZpZXdlck1hZ25pZmljYXRpb24nLCB1c2VWYWx1ZTogTWFnbmlmaWNhdGlvbn07XG5leHBvcnQgY29uc3QgVGh1bWJuYWlsVmlld1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdQZGZWaWV3ZXJUaHVtYm5haWxWaWV3JywgdXNlVmFsdWU6IFRodW1ibmFpbFZpZXd9O1xuZXhwb3J0IGNvbnN0IFRvb2xiYXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUGRmVmlld2VyVG9vbGJhcicsIHVzZVZhbHVlOiBUb29sYmFyfTtcbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1BkZlZpZXdlck5hdmlnYXRpb24nLCB1c2VWYWx1ZTogTmF2aWdhdGlvbn07XG5leHBvcnQgY29uc3QgUHJpbnRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUGRmVmlld2VyUHJpbnQnLCB1c2VWYWx1ZTogUHJpbnR9O1xuZXhwb3J0IGNvbnN0IFRleHRTZWxlY3Rpb25TZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUGRmVmlld2VyVGV4dFNlbGVjdGlvbicsIHVzZVZhbHVlOiBUZXh0U2VsZWN0aW9ufTtcbmV4cG9ydCBjb25zdCBUZXh0U2VhcmNoU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1BkZlZpZXdlclRleHRTZWFyY2gnLCB1c2VWYWx1ZTogVGV4dFNlYXJjaH07XG5leHBvcnQgY29uc3QgQW5ub3RhdGlvblNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdQZGZWaWV3ZXJBbm5vdGF0aW9uJywgdXNlVmFsdWU6IEFubm90YXRpb259O1xuZXhwb3J0IGNvbnN0IEZvcm1EZXNpZ25lclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdQZGZWaWV3ZXJGb3JtRGVzaWduZXInLCB1c2VWYWx1ZTogRm9ybURlc2lnbmVyfTtcbmV4cG9ydCBjb25zdCBGb3JtRmllbGRzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1BkZlZpZXdlckZvcm1GaWVsZHMnLCB1c2VWYWx1ZTogRm9ybUZpZWxkc307XG5cbi8qKlxuICogTmdNb2R1bGUgZGVmaW5pdGlvbiBmb3IgdGhlIFBkZlZpZXdlciBjb21wb25lbnQgd2l0aCBwcm92aWRlcnMuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUGRmVmlld2VyTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFBkZlZpZXdlck1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOltcbiAgICAgICAgTGlua0Fubm90YXRpb25TZXJ2aWNlLFxuICAgICAgICBCb29rbWFya1ZpZXdTZXJ2aWNlLFxuICAgICAgICBNYWduaWZpY2F0aW9uU2VydmljZSxcbiAgICAgICAgVGh1bWJuYWlsVmlld1NlcnZpY2UsXG4gICAgICAgIFRvb2xiYXJTZXJ2aWNlLFxuICAgICAgICBOYXZpZ2F0aW9uU2VydmljZSxcbiAgICAgICAgUHJpbnRTZXJ2aWNlLFxuICAgICAgICBUZXh0U2VsZWN0aW9uU2VydmljZSxcbiAgICAgICAgVGV4dFNlYXJjaFNlcnZpY2UsXG4gICAgICAgIEFubm90YXRpb25TZXJ2aWNlLFxuICAgICAgICBGb3JtRGVzaWduZXJTZXJ2aWNlLFxuICAgICAgICBGb3JtRmllbGRzU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUGRmVmlld2VyQWxsTW9kdWxlIHsgfSJdfQ==