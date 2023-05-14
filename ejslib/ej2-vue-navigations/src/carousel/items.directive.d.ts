export declare const isExecute: any;
declare let vueImport: any;
export declare class CarouselItemsDirective extends vueImport {
    constructor();
    render(createElement: any): void;
    updated(): void;
    getTag(): string;
}
export declare const CarouselItemsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-carousel-item` directive represent a item of the Vue Carousel.
 * It must be contained in a Carousel component(`ejs-carousel`).
 * ```html
 * <ejs-carousel>
 *   <e-carousel-items>
 *    <e-carousel-item template='itemTemplate'></e-carousel-item>
 *    <e-carousel-item template='secondItemTemplate'></e-carousel-item>
 *   </e-carousel-items>
 * </ejs-carousel>
 * ```
 */
export declare class CarouselItemDirective extends vueImport {
    render(): void;
    getTag(): string;
}
export declare const CarouselItemPlugin: {
    name: string;
    install(Vue: any): void;
};
export {};
