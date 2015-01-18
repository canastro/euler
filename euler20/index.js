
function sum (a, b) {
	  var carryOver = 0;
    var intermediumSum = 0;
	  var result = '';
	  var size;

	  a += '';
	  b += '';

    size = a.length;
    if(a.length > b.length) {
        size = a.length;
        while(b.length !== a.length) {
            b = '0'+b;
        }
    } else if( a.length < b.length) {
        size = b.length;
         while(b.length !== a.length) {
            a = '0'+a;
        }

    }
    //Iterate over
	  for(var j = size - 1; j >= 0; j --) {

		    //Add previous carry over
		    intermediumSum = carryOver;

    		//Iterate full array to add selected position (j)
		    intermediumSum += (a[j] | 0) + (b[j] | 0);
    		intermediumSum  += '';

		    //Get last digit of the sum and add to result
		    if(j > 0) {
			      digit = intermediumSum[intermediumSum.length - 1];
    		} else {
			      digit = intermediumSum;
    		}
		    result = digit + result;

    		//Get carry over for the next sum
		    carryOver = intermediumSum.substring(0, intermediumSum.length - 1) | 0;
    		intermediumSum = intermediumSum | 0;
    }

    //console.log(a, ' + ', b, ' = ', result);

	  return result;
}

function multiply (a, b) {
    var result = 0;

    var digitsA = a+''.split();
    var digitsB = b+''.split();

    var temp;
    var tempResult;
    var aCounter = 0;
    var bCounter = 0;

    for(var i = digitsA.length - 1; i >= 0; i--) {
        tempResult = 0;

        bCounter = aCounter;

        for(var j = digitsB.length - 1; j >= 0; j--) {

            temp = (digitsB[j] * digitsA[i]) + '';

            for(var k = 0; k < bCounter; k++) {
                temp += '0';
            }

            tempResult = sum(tempResult + '', temp);
            bCounter ++;
        }

        aCounter ++;

        result = sum(result + '', tempResult + '');
    }


    return result
}

function factorial (n) {

    var result;
    if (n == 0 || n == 1)
        return 1;

    result =  multiply(factorial(n-1), n);

    return result;
}


var resFact = factorial(100) + '';
var resSum = 0;
for(var i = 0, j = resFact.length; i < j; i++) {
    resSum += resFact[i] | 0;
}
console.log(resSum);


/*
 23
x15
---
115
23-
345
*/
