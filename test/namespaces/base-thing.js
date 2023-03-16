
/**
 * @namespace Things
 */

/**
 * A base class for Thing.
 * @memberof Things
 */
class BaseThing {
    constructor() {

        /**
         * @type {Number}
         * @protected
         */
        this.x = 123;

        /**
         * @type {String | Array.<String>}
         */
        this.y = 'hello';
    }
}