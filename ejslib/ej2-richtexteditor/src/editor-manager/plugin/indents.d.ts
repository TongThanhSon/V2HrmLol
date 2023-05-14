import { EditorManager } from './../base/editor-manager';
/**
 * Indents internal component
 *
 * @hidden
 * @deprecated
 */
export declare class Indents {
    private parent;
    private indentValue;
    /**
     * Constructor for creating the Formats plugin
     *
     * @param {EditorManager} parent - specifies the parent element
     * @hidden
     * @deprecated
     */
    constructor(parent: EditorManager);
    private addEventListener;
    private onKeyDown;
    private applyIndents;
}
