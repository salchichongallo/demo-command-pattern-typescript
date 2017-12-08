export interface Container
{
    /**
     * Create an instance of a `injectable` class.
     *
     * @template T
     * @param {*} concrete
     * @returns {(T | any)}
     * @memberof Container
     */
    make<T>(concrete: any): T | any;

    /**
     * Bind a given alias to a specific (concrete) class.
     *
     * @param {string} abstract
     * @param {*} concrete
     * @memberof Container
     */
    bind(abstract: string, concrete: any): void;
}
