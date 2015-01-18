//https://projecteuler.net/problem=5
var num = 60;
var found;

while(true) {
	console.log(num);
	found = true;
	for(var i = 20; i > 3; i--) {

		if(num % i !== 0) {
			found = false;
			break;
		}
	}

	if(found) {
		break;
	}


	num += 60;
}