import { IRenderer } from '../base/interface';
import { RenderType } from '../base/enum';
/**
 * RendererFactory
 *
 * @hidden
 * @deprecated
 */
export declare class RendererFactory {
    rendererMap: {
        [c: string]: IRenderer;
    };
    /**
     * addRenderer method
     *
     * @param {RenderType} name - specifies the render type
     * @param {IRenderer} type - specifies the renderer.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    addRenderer(name: RenderType, type: IRenderer): void;
    /**
     * getRenderer method
     *
     * @param {RenderType} name - specifies the render type
     * @returns {void}
     * @hidden
     * @deprecated
     */
    getRenderer(name: RenderType): IRenderer;
}
