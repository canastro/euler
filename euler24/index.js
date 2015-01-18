/**
 * A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the
 * digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it
 * lexicographic order. The lexicographic permutations of 0, 1 and 2 are:
 *
 * 012   021   102   120   201   210
 *
 * What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
 */

var helper = require('../common/helper');
var targetPosition = 1000000;
var nDigits = 10;
var currentOptions;
var currentPosition = 0;
var digit;
var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = '';
var i;

//TODO: I have to step back and increase

for(var nrPosition = 1; nrPosition <= 10; nrPosition++) {
    console.log('factorial: ', nDigits - nrPosition);
    currentOptions = helper.factorial(nDigits - nrPosition);
    digit = 0;
    console.log('currentPosition: ', currentPosition);
    do {

        if(!digits[digit + 1]) {
            break;
        }

        digit++;
        console.log('add: ', currentOptions * digit);
        currentPosition += currentOptions * digit;
        console.log('digit index: ', digit, ' digit: ',  digits[digit], 'currentPosition: ', currentPosition);

    } while(currentPosition < targetPosition);

    console.log('digit selected: ', digits[digit]);
    if(currentPosition > targetPosition) {
        console.log('remove: ', currentOptions * digit);
        currentPosition -= currentOptions * digit;
        //digit--;
    }

    result += digits[digit];

    digits.splice(digit, 1);
    console.log('-----------------------');

}

console.log(result);

//Calculado manualmente
//digito 0 - 362880 :: 1 -> 725760
//digito 1 - 40320 :: (362880*2)+(40320*6) = 967680

//1
