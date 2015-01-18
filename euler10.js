//https://projecteuler.net/problem=7
var counter = 0;
var num = 0;
var divisibles;

while(true) {
	divisibles = 0;

	for(var i = num; i >= 1; i --) {
		if(num % i === 0) {
			divisibles++;

			if(divisibles > 2) {
				break;
			}
		}
	}

	if(divisibles === 2) {
		console.log(num);
		counter += num;
	}

	if(num >= 2000000) {
		break;
	}

	num++;
}

console.log('the sum of the primes bellow 2million is ' + counter);