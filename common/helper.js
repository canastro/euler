

/**
 * @function
 * @name sumOfProperDivisors
 * @description
 * Find all dividors of n which return mod zero and sum them all
 * @param {Number} n Number to find sum of proper divisors
 * @return {Number} Sum of all proper dividors
 */
module.exports.sumOfProperDivisors = function (n) {
    var result = 0;
    for(var j = 1; j < n; j++) {
        if(n % j === 0) {
            result += j;
        }
    }

    return result;
};

module.exports.factorial = function (n) {
    var result;
    if (n == 0 || n == 1)
        return 1;

    result =  module.exports.factorial(n-1) * n;

    return result;
};
