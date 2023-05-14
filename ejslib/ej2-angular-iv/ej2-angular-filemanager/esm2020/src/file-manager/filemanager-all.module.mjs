import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerModule } from './filemanager.module';
import { DetailsView, NavigationPane, LargeIconsView, Toolbar, ContextMenu, BreadCrumbBar } from '@syncfusion/ej2-filemanager';
import * as i0 from "@angular/core";
export const DetailsViewService = { provide: 'FileManagerDetailsView', useValue: DetailsView };
export const NavigationPaneService = { provide: 'FileManagerNavigationPane', useValue: NavigationPane };
export const LargeIconsViewService = { provide: 'FileManagerLargeIconsView', useValue: LargeIconsView };
export const ToolbarService = { provide: 'FileManagerToolbar', useValue: Toolbar };
export const ContextMenuService = { provide: 'FileManagerContextMenu', useValue: ContextMenu };
export const BreadCrumbBarService = { provide: 'FileManagerBreadCrumbBar', useValue: BreadCrumbBar };
/**
 * NgModule definition for the FileManager component with providers.
 */
export class FileManagerAllModule {
}
FileManagerAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FileManagerAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FileManagerAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FileManagerAllModule, imports: [CommonModule, FileManagerModule], exports: [FileManagerModule] });
FileManagerAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FileManagerAllModule, providers: [
        DetailsViewService,
        NavigationPaneService,
        LargeIconsViewService,
        ToolbarService,
        ContextMenuService,
        BreadCrumbBarService
    ], imports: [[CommonModule, FileManagerModule], FileManagerModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FileManagerAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FileManagerModule],
                    exports: [
                        FileManagerModule
                    ],
                    providers: [
                        DetailsViewService,
                        NavigationPaneService,
                        LargeIconsViewService,
                        ToolbarService,
                        ContextMenuService,
                        BreadCrumbBarService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZW1hbmFnZXItYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWxlLW1hbmFnZXIvZmlsZW1hbmFnZXItYWxsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFDLFdBQVcsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFDLE1BQU0sNkJBQTZCLENBQUE7O0FBRzVILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFrQixFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDLENBQUM7QUFDN0csTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUMsQ0FBQztBQUN0SCxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBQyxDQUFDO0FBQ3RILE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBa0IsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQyxDQUFDO0FBQ2pHLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFrQixFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDLENBQUM7QUFDN0csTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQWtCLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUMsQ0FBQztBQUVuSDs7R0FFRztBQWVILE1BQU0sT0FBTyxvQkFBb0I7O2lIQUFwQixvQkFBb0I7a0hBQXBCLG9CQUFvQixZQWJuQixZQUFZLEVBQUUsaUJBQWlCLGFBRXJDLGlCQUFpQjtrSEFXWixvQkFBb0IsYUFUbkI7UUFDTixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLG9CQUFvQjtLQUN2QixZQVhRLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDLEVBRXRDLGlCQUFpQjsyRkFXWixvQkFBb0I7a0JBZGhDLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDO29CQUMxQyxPQUFPLEVBQUU7d0JBQ0wsaUJBQWlCO3FCQUNwQjtvQkFDRCxTQUFTLEVBQUM7d0JBQ04sa0JBQWtCO3dCQUNsQixxQkFBcUI7d0JBQ3JCLHFCQUFxQjt3QkFDckIsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLG9CQUFvQjtxQkFDdkI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVmFsdWVQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZpbGVNYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9maWxlbWFuYWdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsZU1hbmFnZXJNb2R1bGUgfSBmcm9tICcuL2ZpbGVtYW5hZ2VyLm1vZHVsZSc7XG5pbXBvcnQge0RldGFpbHNWaWV3LCBOYXZpZ2F0aW9uUGFuZSwgTGFyZ2VJY29uc1ZpZXcsIFRvb2xiYXIsIENvbnRleHRNZW51LCBCcmVhZENydW1iQmFyfSBmcm9tICdAc3luY2Z1c2lvbi9lajItZmlsZW1hbmFnZXInXG5cblxuZXhwb3J0IGNvbnN0IERldGFpbHNWaWV3U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0ZpbGVNYW5hZ2VyRGV0YWlsc1ZpZXcnLCB1c2VWYWx1ZTogRGV0YWlsc1ZpZXd9O1xuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25QYW5lU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0ZpbGVNYW5hZ2VyTmF2aWdhdGlvblBhbmUnLCB1c2VWYWx1ZTogTmF2aWdhdGlvblBhbmV9O1xuZXhwb3J0IGNvbnN0IExhcmdlSWNvbnNWaWV3U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0ZpbGVNYW5hZ2VyTGFyZ2VJY29uc1ZpZXcnLCB1c2VWYWx1ZTogTGFyZ2VJY29uc1ZpZXd9O1xuZXhwb3J0IGNvbnN0IFRvb2xiYXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnRmlsZU1hbmFnZXJUb29sYmFyJywgdXNlVmFsdWU6IFRvb2xiYXJ9O1xuZXhwb3J0IGNvbnN0IENvbnRleHRNZW51U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0ZpbGVNYW5hZ2VyQ29udGV4dE1lbnUnLCB1c2VWYWx1ZTogQ29udGV4dE1lbnV9O1xuZXhwb3J0IGNvbnN0IEJyZWFkQ3J1bWJCYXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnRmlsZU1hbmFnZXJCcmVhZENydW1iQmFyJywgdXNlVmFsdWU6IEJyZWFkQ3J1bWJCYXJ9O1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBGaWxlTWFuYWdlciBjb21wb25lbnQgd2l0aCBwcm92aWRlcnMuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRmlsZU1hbmFnZXJNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgRmlsZU1hbmFnZXJNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIERldGFpbHNWaWV3U2VydmljZSxcbiAgICAgICAgTmF2aWdhdGlvblBhbmVTZXJ2aWNlLFxuICAgICAgICBMYXJnZUljb25zVmlld1NlcnZpY2UsXG4gICAgICAgIFRvb2xiYXJTZXJ2aWNlLFxuICAgICAgICBDb250ZXh0TWVudVNlcnZpY2UsXG4gICAgICAgIEJyZWFkQ3J1bWJCYXJTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlckFsbE1vZHVsZSB7IH0iXX0=