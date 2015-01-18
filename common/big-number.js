/**
 * @name BigNumber
 * @param n
 * @constructor
 */
function BigNumber(n) {

    if (typeof n === 'number') {
        n += '';
    }

    this.value = n;
}


/**
 * @name equalizeMemberLengths
 * @function
 * @private
 * @description
 * Both members in a add operation should have same length, even thou we are only adding zeros to
 * the left of the smallest number
 * @param {BigNumber} a
 * @param {BigNumber} b
 * @returns {Number} Length of the biggest number
 */
function equalizeMemberLengths(a, b) {
    var result = a.value.length;

    if (a.value.length > b.value.length) {

        result = a.value.length;
        while (b.value.length !== a.value.length) {
            b.value = '0' + b.value;
        }

    } else if (a.value.length < b.value.length) {

        result = b.value.length;
        while (b.value.length !== a.value.length) {
            a.value = '0' + a.value;
        }

    }

    return result;
}

/**
 * @name subtract
 * @param nBig
 */
BigNumber.prototype.subtract = function(nBig) {
    if (!(nBig instanceof BigNumber)) {
        nBig = new BigNumber(nBig);
    }
};

/**
 * @name add
 * @function
 * @param nBig
 */
BigNumber.prototype.add = function (nBig) {
    if (!(nBig instanceof BigNumber)) {
        nBig = new BigNumber(nBig);
    }

    var carryOver = 0;
    var intermediumSum = 0;
    var result = '';
    var size = equalizeMemberLengths(this, nBig);

    //Iterate over
    for (var j = size - 1; j >= 0; j--) {

        //Add previous carry over
        intermediumSum = carryOver;

        //Iterate full array to add selected position (j)
        intermediumSum += (this.value[j] | 0) + (nBig.value[j] | 0);
        intermediumSum += '';

        //Get last digit of the sum and add to result
        if (j > 0) {
            digit = intermediumSum[intermediumSum.length - 1];
        } else {
            digit = intermediumSum;
        }
        result = digit + result;

        //Get carry over for the next sum
        carryOver = intermediumSum.substring(0, intermediumSum.length - 1) | 0;
        intermediumSum = intermediumSum | 0;
    }

    this.value = result;
};

/**
 * @name multiply
 * @function@
 * @param nBig
 */
BigNumber.prototype.multiply = function (nBig) {

    if (!(nBig instanceof BigNumber)) {
        nBig = new BigNumber(nBig);
    }

    var result = new BigNumber(0);


    var digitsA = this.value.split('');
    var digitsB = nBig.value.split('');

    var temp;
    var tempResult;
    var aCounter = 0;
    var bCounter = 0;

    for (var i = digitsA.length - 1; i >= 0; i--) {
        tempResult = new BigNumber(0);
        bCounter = aCounter;

        for (var j = digitsB.length - 1; j >= 0; j--) {

            temp = new BigNumber(digitsB[j] * digitsA[i]);

            for (var k = 0; k < bCounter; k++) {
                temp.value += '0';
            }

            tempResult.add(temp);
            bCounter++;
        }

        aCounter++;
        result.add(tempResult);
    }

    this.value = result.value;
};

module.exports = BigNumber;
