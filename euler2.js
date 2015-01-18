//https://projecteuler.net/problem=2

var fibonnacci = [0, 1];
var num = fibonnacci[1];
var sum = 0;

while(num < 4000000) {
	num = fibonnacci[fibonnacci.length - 1] + fibonnacci[fibonnacci.length - 2];
	fibonnacci.push(num);

	if(num % 2 == 0) {
		sum += num;
	}
};

console.log('SUM: ', sum);