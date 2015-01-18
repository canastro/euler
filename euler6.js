//https://projecteuler.net/problem=6
var sum = 0;
var sumOfSquare = 0;
var diff;

for(var i = 1; i <= 100; i++) {
	console.log(i);
	sum += i;
	sumOfSquare += Math.pow(i, 2);
}

sum = Math.pow(sum, 2);
console.log(sum);
console.log(sumOfSquare);

diff = sum - sumOfSquare;
console.log(diff);