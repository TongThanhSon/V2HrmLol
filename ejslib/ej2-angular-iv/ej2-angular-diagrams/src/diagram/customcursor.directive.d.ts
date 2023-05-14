import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomCursorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CustomCursorDirective, "e-cursormaps>e-cursormap", never, { "action": "action"; "cursor": "cursor"; }, {}, never>;
}
/**
 * CustomCursor Array Directive
 * @private
 */
export declare class CustomCursorsDirective extends ArrayBase<CustomCursorsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomCursorsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CustomCursorsDirective, "ej-diagram>e-cursormaps", never, {}, {}, ["children"]>;
}
