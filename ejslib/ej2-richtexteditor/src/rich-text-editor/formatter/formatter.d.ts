import { ActionBeginEventArgs } from './../base/interface';
import { IRichTextEditor, IEditorModel, IItemCollectionArgs } from './../base/interface';
import { IHtmlFormatterCallBack, IMarkdownFormatterCallBack, IUndoCallBack } from './../../common/interface';
import { MarkdownUndoRedoData } from '../../markdown-parser/base/interface';
import { IHtmlUndoRedoData } from '../../editor-manager/base/interface';
/**
 * Formatter
 *
 * @hidden
 * @deprecated
 */
export declare class Formatter {
    editorManager: IEditorModel;
    private timeInterval;
    /**
     * To execute the command
     *
     * @param  {IRichTextEditor} self - specifies the self element.
     * @param  {ActionBeginEventArgs} args - specifies the event arguments.
     * @param  {MouseEvent|KeyboardEvent} event - specifies the keyboard event.
     * @param  {IItemCollectionArgs} value - specifies the collection arguments
     * @returns {void}
     * @hidden
     * @deprecated
     */
    process(self: IRichTextEditor, args: ActionBeginEventArgs, event: MouseEvent | KeyboardEvent, value: IItemCollectionArgs): void;
    private getAncestorNode;
    /**
     * onKeyHandler method
     *
     * @param {IRichTextEditor} self - specifies the self element.
     * @param {KeyboardEvent} e - specifies the keyboard event.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    onKeyHandler(self: IRichTextEditor, e: KeyboardEvent): void;
    /**
     * onSuccess method
     *
     * @param {IRichTextEditor} self - specifies the self element.
     * @param {IMarkdownFormatterCallBack} events - specifies the event call back
     * @returns {void}
     * @hidden
     * @deprecated
     */
    onSuccess(self: IRichTextEditor, events: IMarkdownFormatterCallBack | IHtmlFormatterCallBack): void;
    /**
     * Save the data for undo and redo action.
     *
     * @param {KeyboardEvent} e - specifies the keyboard event.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    saveData(e?: KeyboardEvent | MouseEvent | IUndoCallBack): void;
    /**
     * getUndoStatus method
     *
     * @returns {void}
     * @hidden
     * @deprecated
     */
    getUndoStatus(): {
        [key: string]: boolean;
    };
    /**
     * getUndoRedoStack method
     *
     * @param {IHtmlUndoRedoData}  - specifies the redo data.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    getUndoRedoStack(): IHtmlUndoRedoData[] | MarkdownUndoRedoData[];
    /**
     * enableUndo method
     *
     * @param {IRichTextEditor} self - specifies the self element.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    enableUndo(self: IRichTextEditor): void;
}
