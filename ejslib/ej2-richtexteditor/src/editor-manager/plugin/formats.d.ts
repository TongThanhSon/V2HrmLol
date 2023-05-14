import { EditorManager } from './../base/editor-manager';
/**
 * Formats internal component
 *
 * @hidden
 * @deprecated
 */
export declare class Formats {
    private parent;
    /**
     * Constructor for creating the Formats plugin
     *
     * @param {EditorManager} parent - specifies the parent element.
     * @hidden
     * @deprecated
     */
    constructor(parent: EditorManager);
    private addEventListener;
    private getParentNode;
    private onKeyUp;
    private onKeyDown;
    private removeCodeContent;
    private deleteContent;
    private paraFocus;
    private isNotEndCursor;
    private setCursorPosition;
    private focusSelectionParent;
    private insertMarker;
    private applyFormats;
    private setSelectionBRConfig;
    private preFormatMerge;
    private cleanFormats;
}
