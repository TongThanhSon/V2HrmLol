import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * Cursor Maps Directive
 * ```html
 * <e-cusrsormaps>
 * <e-cursormap></e-cursormap>
 * </e-cursormaps>
 * ```
 */
export declare class CustomCursorDirective extends ComplexBase<CustomCursorDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Defines the property of a Data Map Items
     */
    action: any;
    /**
     * Defines the Fields for the Data Map Items
     * @default ''
     */
    cursor: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * CustomCursor Array Directive
 * @private
 */
export declare class CustomCursorsDirective extends ArrayBase<CustomCursorsDirective> {
    constructor();
}
