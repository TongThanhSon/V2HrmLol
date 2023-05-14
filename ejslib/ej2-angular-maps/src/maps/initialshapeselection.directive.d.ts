import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-initialShapeSelections>
 * <e-initialShapeSelection>
 * </e-initialShapeSelection>
 * </e-initialShapeSelections>
 * </e-layer>
 * </e-layers>
 * ```
 */
export declare class InitialShapeSelectionDirective extends ComplexBase<InitialShapeSelectionDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Sets and gets the property name from the data source in maps.
     * @default null
     */
    shapePath: any;
    /**
     * Sets and gets the value for the shape from data source in maps.
     * @default null
     */
    shapeValue: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * InitialShapeSelection Array Directive
 * @private
 */
export declare class InitialShapeSelectionsDirective extends ArrayBase<InitialShapeSelectionsDirective> {
    constructor();
}
