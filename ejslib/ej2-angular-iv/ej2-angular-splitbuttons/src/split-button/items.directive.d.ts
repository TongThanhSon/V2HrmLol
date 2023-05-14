import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
export declare class SplitButtonItemDirective extends ComplexBase<SplitButtonItemDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Used to enable or disable the item.
     * @default false
     */
    disabled: any;
    /**
     * Defines class/multiple classes separated by a space for the item that is used to include an icon.
     * Action item can include font icon and sprite image.
     * @default ''
     */
    iconCss: any;
    /**
     * Specifies the id for item.
     * @default ''
     */
    id: any;
    /**
     * Specifies separator between the items. Separator are horizontal lines used to group action items.
     * @default false
     */
    separator: any;
    /**
     * Specifies text for item.
     * @default ''
     */
    text: any;
    /**
     * Specifies url for item that creates the anchor link to navigate to the url provided.
     * @default ''
     */
    url: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitButtonItemDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SplitButtonItemDirective, "e-splitbuttonitems>e-splitbuttonitem", never, { "disabled": "disabled"; "iconCss": "iconCss"; "id": "id"; "separator": "separator"; "text": "text"; "url": "url"; }, {}, never>;
}
/**
 * SplitButtonItem Array Directive
 * @private
 */
export declare class SplitButtonItemsDirective extends ArrayBase<SplitButtonItemsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitButtonItemsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SplitButtonItemsDirective, "ejs-splitbutton>e-splitbuttonitems", never, {}, {}, ["children"]>;
}
