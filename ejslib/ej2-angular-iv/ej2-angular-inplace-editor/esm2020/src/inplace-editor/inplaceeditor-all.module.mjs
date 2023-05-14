import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InPlaceEditorModule } from './inplaceeditor.module';
import { AutoComplete, ColorPicker, ComboBox, DateRangePicker, MultiSelect, Rte, Slider, TimePicker } from '@syncfusion/ej2-inplace-editor';
import * as i0 from "@angular/core";
export const AutoCompleteService = { provide: 'InPlace-EditorAutoComplete', useValue: AutoComplete };
export const ColorPickerService = { provide: 'InPlace-EditorColorPicker', useValue: ColorPicker };
export const ComboBoxService = { provide: 'InPlace-EditorComboBox', useValue: ComboBox };
export const DateRangePickerService = { provide: 'InPlace-EditorDateRangePicker', useValue: DateRangePicker };
export const MultiSelectService = { provide: 'InPlace-EditorMultiSelect', useValue: MultiSelect };
export const RteService = { provide: 'InPlace-EditorRte', useValue: Rte };
export const SliderService = { provide: 'InPlace-EditorSlider', useValue: Slider };
export const TimePickerService = { provide: 'InPlace-EditorTimePicker', useValue: TimePicker };
/**
 * NgModule definition for the InPlaceEditor component with providers.
 */
export class InPlaceEditorAllModule {
}
InPlaceEditorAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InPlaceEditorAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
InPlaceEditorAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InPlaceEditorAllModule, imports: [CommonModule, InPlaceEditorModule], exports: [InPlaceEditorModule] });
InPlaceEditorAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InPlaceEditorAllModule, providers: [
        AutoCompleteService,
        ColorPickerService,
        ComboBoxService,
        DateRangePickerService,
        MultiSelectService,
        RteService,
        SliderService,
        TimePickerService
    ], imports: [[CommonModule, InPlaceEditorModule], InPlaceEditorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InPlaceEditorAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, InPlaceEditorModule],
                    exports: [
                        InPlaceEditorModule
                    ],
                    providers: [
                        AutoCompleteService,
                        ColorPickerService,
                        ComboBoxService,
                        DateRangePickerService,
                        MultiSelectService,
                        RteService,
                        SliderService,
                        TimePickerService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wbGFjZWVkaXRvci1hbGwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lucGxhY2UtZWRpdG9yL2lucGxhY2VlZGl0b3ItYWxsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQTs7QUFHekksTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQWtCLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUMsQ0FBQztBQUNuSCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxDQUFDO0FBQ2hILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBa0IsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDO0FBQ3ZHLE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFrQixFQUFFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFDLENBQUM7QUFDNUgsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsQ0FBQztBQUNoSCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQWtCLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUMsQ0FBQztBQUN4RixNQUFNLENBQUMsTUFBTSxhQUFhLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQztBQUNqRyxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQyxDQUFDO0FBRTdHOztHQUVHO0FBaUJILE1BQU0sT0FBTyxzQkFBc0I7O21IQUF0QixzQkFBc0I7b0hBQXRCLHNCQUFzQixZQWZyQixZQUFZLEVBQUUsbUJBQW1CLGFBRXZDLG1CQUFtQjtvSEFhZCxzQkFBc0IsYUFYckI7UUFDTixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixhQUFhO1FBQ2IsaUJBQWlCO0tBQ3BCLFlBYlEsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLENBQUMsRUFFeEMsbUJBQW1COzJGQWFkLHNCQUFzQjtrQkFoQmxDLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLG1CQUFtQixDQUFDO29CQUM1QyxPQUFPLEVBQUU7d0JBQ0wsbUJBQW1CO3FCQUN0QjtvQkFDRCxTQUFTLEVBQUM7d0JBQ04sbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2Ysc0JBQXNCO3dCQUN0QixrQkFBa0I7d0JBQ2xCLFVBQVU7d0JBQ1YsYUFBYTt3QkFDYixpQkFBaUI7cUJBQ3BCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFZhbHVlUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJblBsYWNlRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9pbnBsYWNlZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJblBsYWNlRWRpdG9yTW9kdWxlIH0gZnJvbSAnLi9pbnBsYWNlZWRpdG9yLm1vZHVsZSc7XG5pbXBvcnQge0F1dG9Db21wbGV0ZSwgQ29sb3JQaWNrZXIsIENvbWJvQm94LCBEYXRlUmFuZ2VQaWNrZXIsIE11bHRpU2VsZWN0LCBSdGUsIFNsaWRlciwgVGltZVBpY2tlcn0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWlucGxhY2UtZWRpdG9yJ1xuXG5cbmV4cG9ydCBjb25zdCBBdXRvQ29tcGxldGVTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnSW5QbGFjZS1FZGl0b3JBdXRvQ29tcGxldGUnLCB1c2VWYWx1ZTogQXV0b0NvbXBsZXRlfTtcbmV4cG9ydCBjb25zdCBDb2xvclBpY2tlclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdJblBsYWNlLUVkaXRvckNvbG9yUGlja2VyJywgdXNlVmFsdWU6IENvbG9yUGlja2VyfTtcbmV4cG9ydCBjb25zdCBDb21ib0JveFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdJblBsYWNlLUVkaXRvckNvbWJvQm94JywgdXNlVmFsdWU6IENvbWJvQm94fTtcbmV4cG9ydCBjb25zdCBEYXRlUmFuZ2VQaWNrZXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnSW5QbGFjZS1FZGl0b3JEYXRlUmFuZ2VQaWNrZXInLCB1c2VWYWx1ZTogRGF0ZVJhbmdlUGlja2VyfTtcbmV4cG9ydCBjb25zdCBNdWx0aVNlbGVjdFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdJblBsYWNlLUVkaXRvck11bHRpU2VsZWN0JywgdXNlVmFsdWU6IE11bHRpU2VsZWN0fTtcbmV4cG9ydCBjb25zdCBSdGVTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnSW5QbGFjZS1FZGl0b3JSdGUnLCB1c2VWYWx1ZTogUnRlfTtcbmV4cG9ydCBjb25zdCBTbGlkZXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnSW5QbGFjZS1FZGl0b3JTbGlkZXInLCB1c2VWYWx1ZTogU2xpZGVyfTtcbmV4cG9ydCBjb25zdCBUaW1lUGlja2VyU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0luUGxhY2UtRWRpdG9yVGltZVBpY2tlcicsIHVzZVZhbHVlOiBUaW1lUGlja2VyfTtcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgSW5QbGFjZUVkaXRvciBjb21wb25lbnQgd2l0aCBwcm92aWRlcnMuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSW5QbGFjZUVkaXRvck1vZHVsZV0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBJblBsYWNlRWRpdG9yTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6W1xuICAgICAgICBBdXRvQ29tcGxldGVTZXJ2aWNlLFxuICAgICAgICBDb2xvclBpY2tlclNlcnZpY2UsXG4gICAgICAgIENvbWJvQm94U2VydmljZSxcbiAgICAgICAgRGF0ZVJhbmdlUGlja2VyU2VydmljZSxcbiAgICAgICAgTXVsdGlTZWxlY3RTZXJ2aWNlLFxuICAgICAgICBSdGVTZXJ2aWNlLFxuICAgICAgICBTbGlkZXJTZXJ2aWNlLFxuICAgICAgICBUaW1lUGlja2VyU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSW5QbGFjZUVkaXRvckFsbE1vZHVsZSB7IH0iXX0=