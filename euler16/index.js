var num = 2;
var pow = 1000;
var res = 0;
var i;

for(i = 1; i < pow; i++) {
	num = sum(num, num);
}

for(i = 0; i < num.length; i++) {
	res += num[i] | 0;
}

console.log(res);

function sum (a, b) {
	var carryOver = 0;
	var intermediumSum = 0;
	var result = '';

	a += '';
	b += '';

	//Iterate over 
	for(var j = a.length - 1; j >= 0; j --) {

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

	return result;
}
