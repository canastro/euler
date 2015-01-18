//https://projecteuler.net/problem=4
var a = 999;
var b = 999;
var results = [];

main();

results.sort();
console.log(results[results.length -1]);
//console.log(a, ' * ', b, ' = ', (a * b));

function main() {
	while (a > 101) {
		while (b > 101) {
			console.log('a: ', a, ' b: ', b);
			result = a * b;

			if(checkIfPalindrome(result)) {
				results.push(a * b);
			}

			b--;
		}
		a--;
		b = a;
	}
}

function checkIfPalindrome(num) {
	var numStr = num.toString();
	var size = numStr.length;

	var strA = numStr.substring(0, size / 2);
	var strB = numStr.substring(size / 2, size);
	strB = strB.split("").reverse().join("");

	if(strA === strB) {
		return true;
	}

	return false;
}