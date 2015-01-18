//https://projecteuler.net/problem=21
/*
* Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
* If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable
* numbers.
*
* For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The
* proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
*
* Evaluate the sum of all the amicable numbers under 10000.
*/
var nElements = 10000;
var amicableNumbers = {};


function sumOfProperDivisors (n) {
    var result = 0;
    for(var j = 1; j < n; j++) {
        if(n % j === 0) {
            result += j;
        }
    }

    return result;

}

function isAmicablePair (n) {
    var sumOne, sumTwo;

    sumOne = sumOfProperDivisors(n);

    if(sumOne !== n) {
        sumTwo = sumOfProperDivisors(sumOne);

        if(sumTwo === n) {
            amicableNumbers[n] = n;
            amicableNumbers[sumOne] = sumOne;
        }

    }

}


for(var i = 1; i < nElements; i++) {
    isAmicablePair(i);
}

var sum = 0;
Object.keys(amicableNumbers).forEach(function(key) {
    sum += +key;
});

console.log(sum);
