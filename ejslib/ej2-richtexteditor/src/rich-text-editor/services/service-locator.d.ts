/**
 * ServiceLocator
 *
 * @hidden
 * @deprecated
 */
export declare class ServiceLocator {
    private services;
    /**
     * register method
     *
     * @param {string} name - specifies the name.
     * @param {T} type - specifies the type.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    register<T>(name: string, type: T): void;
    /**
     * getService method
     *
     * @param {string} name - specifies the name.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    getService<T>(name: string): T;
}
