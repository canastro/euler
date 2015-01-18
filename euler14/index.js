
var longest = {
	value: -1,
	num: -1
};
var value;
for(var i = 999999; i > 0; i --) {

	console.log('calculating for: ', i);
	value = calculateCollatz(i);

	if(value > longest.value) {
		longest = {
			value: value,
			num: i
		};
	}
}

console.log(longest.num, ' has ', longest.value, 'steps');

function calculateCollatz(num) {
	var counter = 0;

	while (num !== 1) {


		if(num % 2 === 0) {
			num = num / 2;
		} else {
			
			num = (3 * num) + 1;
		}

		counter++;
	}
	return counter;
}