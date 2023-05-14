import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * 'e-button' directive represent a button of angular dialog
 * It must be contained in a Dialog component(`ej-dialog`).
 * ```html
 * <ejs-dialog id='dialog' showCloseIcon=true>
 *   <e-buttons>
 *    <e-dialogbutton [buttonModal]='okButton'></e-button>
 *    <e-dialogbutton [buttonModal]='cancelButton'></e-button>
 *   </e-buttons>
 * </ejs-dialog>
 * ```
 */
export declare class DialogButtonDirective extends ComplexBase<DialogButtonDirective> {
    private viewContainerRef;
    directivePropList: any;
    click: any;
    /**
     * Specify the type of the button.
     * Possible values are Button, Submit and Reset.
     * @default 'Button'
     * @asptype string
     * @blazortype string
     */
    type: any;
    /**
     * Specifies the button component properties to render the dialog buttons.
     */
    buttonModel: any;
    /**
     * Specifies the flat appearance of the dialog buttons
     * @default true
     */
    isFlat: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DialogButtonDirective, "e-buttons>e-dialogbutton", never, { "buttonModel": "buttonModel"; "isFlat": "isFlat"; "type": "type"; }, { "click": "click"; }, never>;
}
/**
 * DialogButton Array Directive
 * @private
 */
export declare class ButtonsDirective extends ArrayBase<ButtonsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ButtonsDirective, "ejs-dialog>e-buttons", never, {}, {}, ["children"]>;
}
