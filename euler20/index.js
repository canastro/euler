var BigNumber = require('../common/big-number');

function factorial (n) {
    var temp;

    if (n.value == '0' || n.value == '1') {
        return new BigNumber('1');
    }

    temp = factorial(new BigNumber(n.value - 1));

    temp.multiply(n.value);

    return temp;
}

var resFact = factorial(new BigNumber('100'));


var resSum = 0;
for(var i = 0, j = resFact.value.length; i < j; i++) {
    resSum += resFact.value[i] | 0;
}
console.log(resSum);
