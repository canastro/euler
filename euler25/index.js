var BigNumber = require('../common/big-number');

var result = new BigNumber(1);
var cache = new BigNumber(0);
var temp;
var counter = 1;

//for(var i = 1; i < n; i++) {
do {
    temp = new BigNumber(cache.value);
    cache = new BigNumber(result.value);
    result.add(temp);
    counter ++;
} while(result.value.length < 1000);


/*
console.log('3: ', fibonacci(3));
console.log('4: ', fibonacci(4));
console.log('5: ', fibonacci(5));
console.log('8: ', fibonacci(8));
console.log('12: ', fibonacci(12));
*/

console.log('F' + counter + ' : ' + result.value);
