//https://projecteuler.net/problem=9
//a2 + b2 = c2
//3^2 + 4^2 = 5^2
//3 + 4 + 5 = 12 

//a + b + c = 12
// sqrt(a^2 * b ^ 2) = 12
var a = 1;
var b = 1;
var c;
var sum;
var expected = 1000;

while(true) {
	//c = Math.sqrt(Math.pow(a, 2) * Math.pow(b, 2));
	c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
	//console.log('a: ', a, ' b: ', b, ' c: ', c);
	sum = a + b + c;

	if(sum === expected) {
		break;
	}

	b++;

	if(sum > expected) {
		a++;
		b = 1;
	}
}

console.log('a: ', a, ' b: ', b, ' c: ', c);
console.log('result: ', a*b*c);