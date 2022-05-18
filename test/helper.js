
/**
 * The `HelperUtility` class helps us test our amazing AppKu JSDoc template.
 */
class HelperUtility {
    constructor() {}

    /**
     * @type {String}
     */
    static get ABC() {
        return 'abc';
    }

    /**
     * @returns {String} The `String` "world" all the time.
     */
    static hello() {
        return 'world';
    }

    /**
     * Subtracts two numbers and returns the difference.
     * @example
     * new Test().subtract(2, 2);
     * //0
     * @param {Number} num1 - This is a description for `num1`.
     * @param {Number} num2 - This is a description for `num2`.
     * @returns {Number} The difference is returned.
     */
    subtract(num1, num2) {
        //add the numbers
        return num1 - num2;
    }

}

export default HelperUtility;