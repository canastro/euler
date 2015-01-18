//var counter = 500;
var counter = 8078;
var sum;
var nDivisors = 0;

while(true) {
	
	sum = 0;
	
	for(var i = 0; i < counter;  i++) {
		sum += i;
	}

	nDivisors = findDivisors(sum);

	console.log(counter, ' th triangle | sum: ', sum, ' | nDivisors: ', nDivisors);

	//console.log('sum: ', sum, ' nDivisors: ', nDivisors);
	if(nDivisors > 500) {
		break;
	}

	counter ++;
}

console.log('sum: ', sum);

function findDivisors(num) {
	var divisors = 0;

	for(var i = 0; i <= num; i++) {
		if(num % i === 0) {
			divisors ++;
		}
	}

	return divisors;
}