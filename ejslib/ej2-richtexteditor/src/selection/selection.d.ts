/**
 * `Selection` module is used to handle RTE Selections.
 */
export declare class NodeSelection {
    range: Range;
    rootNode: Node;
    body: HTMLBodyElement;
    html: string;
    startContainer: number[];
    endContainer: number[];
    startOffset: number;
    endOffset: number;
    startNodeName: string[];
    endNodeName: string[];
    private saveInstance;
    private documentFromRange;
    getRange(docElement: Document): Range;
    /**
     * get method
     *
     * @param {Document} docElement - specifies the get function
     * @returns {void}
     * @hidden
     * @deprecated
     */
    get(docElement: Document): Selection;
    /**
     * save method
     *
     * @param {Range} range - range value.
     * @param {Document} docElement - specifies the document.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    save(range: Range, docElement: Document): NodeSelection;
    /**
     * getIndex method
     *
     * @param {Node} node - specifies the node value.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    getIndex(node: Node): number;
    private isChildNode;
    private getNode;
    /**
     * getNodeCollection method
     *
     * @param {Range} range -specifies the range.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    getNodeCollection(range: Range): Node[];
    /**
     * getParentNodeCollection method
     *
     * @param {Range} range - specifies the range value.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    getParentNodeCollection(range: Range): Node[];
    /**
     * getParentNodes method
     *
     * @param {Node[]} nodeCollection - specifies the collection of nodes.
     * @param {Range} range - specifies the range values.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    getParentNodes(nodeCollection: Node[], range: Range): Node[];
    /**
     * getSelectionNodeCollection method
     *
     * @param {Range} range - specifies the range value.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    getSelectionNodeCollection(range: Range): Node[];
    /**
     * getSelectionNodeCollection along with BR node method
     *
     * @param {Range} range - specifies the range value.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    getSelectionNodeCollectionBr(range: Range): Node[];
    /**
     * getParentNodes method
     *
     * @param {Node[]} nodeCollection - specifies the collection of nodes.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    getSelectionNodes(nodeCollection: Node[]): Node[];
    /**
     * Get selection text nodes with br method.
     *
     * @param {Node[]} nodeCollection - specifies the collection of nodes.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    getSelectionNodesBr(nodeCollection: Node[]): Node[];
    /**
     * getInsertNodeCollection method
     *
     * @param {Range} range - specifies the range value.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    getInsertNodeCollection(range: Range): Node[];
    /**
     * getInsertNodes method
     *
     * @param {Node[]} nodeCollection - specifies the collection of nodes.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    getInsertNodes(nodeCollection: Node[]): Node[];
    /**
     * getNodeArray method
     *
     * @param {Node} node - specifies the node content.
     * @param {boolean} isStart - specifies the boolean value.
     * @param {Document} root - specifies the root document.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    getNodeArray(node: Node, isStart: boolean, root?: Document): number[];
    private setRangePoint;
    /**
     * restore method
     *
     * @returns {void}
     * @hidden
     * @deprecated
     */
    restore(): Range;
    selectRange(docElement: Document, range: Range): void;
    /**
     * setRange method
     *
     * @param {Document} docElement - specifies the document.
     * @param {Range} range - specifies the range.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    setRange(docElement: Document, range: Range): void;
    /**
     * setSelectionText method
     *
     * @param {Document} docElement - specifies the documrent
     * @param {Node} startNode - specifies the starting node.
     * @param {Node} endNode - specifies the the end node.
     * @param {number} startIndex - specifies the starting index.
     * @param {number} endIndex - specifies the end index.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    setSelectionText(docElement: Document, startNode: Node, endNode: Node, startIndex: number, endIndex: number): void;
    /**
     * setSelectionContents method
     *
     * @param {Document} docElement - specifies the document.
     * @param {Node} element - specifies the node.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    setSelectionContents(docElement: Document, element: Node): void;
    /**
     * setSelectionNode method
     *
     * @param {Document} docElement - specifies the document.
     * @param {Node} element - specifies the node.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    setSelectionNode(docElement: Document, element: Node): void;
    /**
     * getSelectedNodes method
     *
     * @param {Document} docElement - specifies the document.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    getSelectedNodes(docElement: Document): Node[];
    /**
     * Clear method
     *
     * @param {Document} docElement - specifies the document.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    Clear(docElement: Document): void;
    /**
     * insertParentNode method
     *
     * @param {Document} docElement - specifies the document.
     * @param {Node} newNode - specicfies the new node.
     * @param {Range} range - specifies the range.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    insertParentNode(docElement: Document, newNode: Node, range: Range): void;
    /**
     * setCursorPoint method
     *
     * @param {Document} docElement - specifies the document.
     * @param {Element} element - specifies the element.
     * @param {number} point - specifies the point.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    setCursorPoint(docElement: Document, element: Element, point: number): void;
}
