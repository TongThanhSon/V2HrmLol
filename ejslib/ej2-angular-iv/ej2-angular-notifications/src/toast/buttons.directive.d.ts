import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * 'e-button' directive represent a button of angular toast
 * It must be contained in a Toast component(`ejs-toast`).
 * ```html
 * <ejs-toast id='toast' showCloseIcon=true>
 *   <e-buttons>
 *    <e-button content='Ok' isPrimary=true></e-button>
 *    <e-button content='Cancel'></e-button>
 *   </e-buttons>
 * </ejs-toast>
 * ```
 */
export declare class ButtonModelPropDirective extends ComplexBase<ButtonModelPropDirective> {
    private viewContainerRef;
    directivePropList: any;
    click: any;
    /**
     * Specifies the Button component model properties to render the Toast action buttons.
     *
     * @default null
     */
    model: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonModelPropDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ButtonModelPropDirective, "e-buttonmodelprops>e-buttonmodelprop", never, { "model": "model"; }, { "click": "click"; }, never>;
}
/**
 * ButtonModelProp Array Directive
 * @private
 */
export declare class ButtonModelPropsDirective extends ArrayBase<ButtonModelPropsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonModelPropsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ButtonModelPropsDirective, "ejs-toast>e-buttonmodelprops", never, {}, {}, ["children"]>;
}
