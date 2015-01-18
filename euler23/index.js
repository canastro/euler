/*
 * A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.
 * For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a
 * perfect number.
 *
 * A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if
 * this sum exceeds n.
 *
 * As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum
 * of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can
 * be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis
 * even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is
 * less than this limit.
 *
 * Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 */

var helper = require('../common/helper');
var abundantNrs = [];
var endNr = 28123;
var sumProperDivisors = 0;
var excluded = [];
var found = false;
var sum = 0;

// Use a closure to prevent the global namespace from be polluted.
(function() {
  // Define StopIteration as part of the global scope if it
  // isn't already defined.
  if(typeof StopIteration == "undefined") {
    StopIteration = new Error("StopIteration");
  }

  // The original version of Array.prototype.forEach.
  var oldForEach = Array.prototype.forEach;

  // If forEach actually exists, define forEach so you can
  // break out of it by throwing StopIteration.  Allow
  // other errors will be thrown as normal.
  if(oldForEach) {
    Array.prototype.forEach = function() {
      try {
        oldForEach.apply(this, [].slice.call(arguments, 0));
      }
      catch(e) {
        if(e !== StopIteration) {
          throw e;
        }
      }
    };
  }
})();

//Create list of abundant numbers
//Number of which sum of proper dividers is bigger than number itself
for(var i = 1; i < endNr; i++) {
    sumProperDivisors = helper.sumOfProperDivisors(i);
    if(sumProperDivisors > i) {
        abundantNrs.push(i);
    }
}



for(var i = 0; i < endNr; i++) {

    found = false;

    abundantNrs.forEach(function (it1) {

        if(it1 > i) {
            throw StopIteration;
        }

        abundantNrs.forEach(function (it2) {

            if(it2 > i) {
                throw StopIteration;
            }

            var sum = it1 + it2;

            if(sum > i) {
                throw StopIteration;
            }

            if(sum === i) {
                //console.log(it1, ' + ', it2, ' = ', sum);

                found = true;
                throw StopIteration;
            }
        });

        if(found) {
            throw StopIteration;
        }
    });

    if(!found) {
        console.log('found : ', i);
        sum += i;
    }

}

console.log('sum: ', sum);

