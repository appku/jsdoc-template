
/**
 * @typedef Tester.ToastConfiguration
 * @property {String} [pathProperty="resource"] - That one resource that does thing.
 */

/**
 * @typedef Tester.Configuration
 * @property {String} [root] - The root URI of each fetch request.
 * @property {String} [path="/api"] - The path to the URI endpoint.
 * @property {Tester.ToastConfiguration} [toast]
 * @property {RequestInit} [fetch] - Optional fetch defaults to apply before request-specific configuration is set.
 */

/**
 * lalal
 */
class Moose {

}

/**
 * The `Tester` class helps us test our amazing AppKu JSDoc template.
 */
class Tester extends Moose {
    /**
     * The constructor creates a new instance of the `Test` class.
     */
    constructor() {
        super();

        /**
         * @type {Map.<String, Array>}
         */
         this.data = new Map();

        /**
         * A class property that is true by default.
         * @type {Boolean}
         * @default true
         */
        this.prop = true;

        /**
         * @type {Tester.Configuration}
         */
        this.config = {
            test: 123
        };
    }

    /**
     * @type {String}
     */
    static get ABC() {
        return 'abc';
    }

    /**
     * Returns "world" all the time.
     * @type {String}
     */
    get hello() {
        return 'world';
    }

    /**
     * Adds two numbers together and returns the sum.
     * @example
     * new Test().add(1, 2);
     * //3
     * @param {Number} num1 - This is a description for `num1`.
     * @param {Number} num2 - This is a description for `num2`.
     * @returns {Number} The sum is returned.
     */
    add(num1, num2) {
        //add the numbers
        return num1 + num2;
    }

}

export default Tester;