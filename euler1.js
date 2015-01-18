https://projecteuler.net/problem=1

var numbers = [];
var sum = 0;

for(var i = 0, j = 1000; i < j; i++) {
	if(i%3 === 0 || i%5 === 0) {
		numbers.push(i);
	}
}

for(var i = 0, j= numbers.length; i < j; i++) {
	sum += numbers[i];	
}

console.log(sum);