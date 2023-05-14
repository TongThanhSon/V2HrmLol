import { Spreadsheet } from '../index';
/**
 * Represents Conditional Formatting support for Spreadsheet.
 */
export declare class ConditionalFormatting {
    private parent;
    /**
     * Constructor for the Spreadsheet Conditional Formatting module.
     *
     * @param {Spreadsheet} parent - Constructor for the Spreadsheet Conditional Formatting module.
     */
    constructor(parent: Spreadsheet);
    /**
     * To destroy the Conditional Formatting module.
     *
     * @returns {void} - To destroy the Conditional Formatting module.
     */
    protected destroy(): void;
    private addEventListener;
    private removeEventListener;
    private clearCF;
    private renderCFDlg;
    private dlgClickHandler;
    private getType;
    private getCFColor;
    private cfDlgContent;
    private validateCFInput;
    private checkCellHandler;
    private checkRange;
    private getDlgText;
    private updateResult;
    private applyCF;
    private updateCF;
    private updateRange;
    private applyIconSet;
    private getIconList;
    private applyColorScale;
    private applyDataBars;
    private getColor;
    private getGradient;
    private getLinear;
    private byteLinear;
    private isGreaterThanLessThan;
    private isBetWeen;
    private isEqualTo;
    private isContainsText;
    private setCFStyle;
    /**
     * Gets the module name.
     *
     * @returns {string} - Gets the module name.
     */
    protected getModuleName(): string;
}
