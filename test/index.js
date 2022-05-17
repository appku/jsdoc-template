
/**
 * The `Test` class helps us test our amazing AppKu JSDoc template.
 */
class Test{
    /**
     * The constructor creates a new instance of the `Test` class.
     */
    constructor() {
        /**
         * A class property that is true by default.
         * @type {Boolean}
         * @default true
         */
        this.prop = true;
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

export default Test;