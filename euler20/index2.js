var BigNumber = require('../common/big-number');

function factorial (n) {

    var temp;

    if (n.value == 0 || n.value == 1) {
        return 1;
    }

    temp = factorial(new BigNumber(n.value - 1));

    n.multiply(temp);


    return n;
}

/*
 function factorial (n) {

 var result;
 if (n == 0 || n == 1)
 return 1;

 result =  multiply(factorial(n-1), n);

 return result;
 }
 */

var factValue = new BigNumber(100);
var resFact = factorial(factValue);


var resSum = 0;
for(var i = 0, j = resFact.value.length; i < j; i++) {
    resSum += resFact.value[i] | 0;
}
console.log(resSum);
