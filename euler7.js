//https://projecteuler.net/problem=7
var counter = 0;
var num = 0;
var divisibles;

while(true) {
	divisibles = 0;

	console.log(num);
	for(var i = num; i >= 1; i --) {
		if(num % i === 0) {
			divisibles++;

			if(divisibles > 2) {
				break;
			}
		}
	}

	if(divisibles === 2) {
		counter++;
	}

	if(counter === 10001) {
		break;
	}

	num++;
}

console.log('the '+ counter+ 'th prime number is ' + num);