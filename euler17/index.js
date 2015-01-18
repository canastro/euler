/*
0       zero    1       one     2       two     3       three   4       four
5       five    6       six     7       seven   8       eight   9       nine
10      ten     11      eleven  12      twelve  13      thirteen        14      fourteen
15      fifteen 16      sixteen 17      seventeen       18      eighteen
19      nineteen

20      twenty  30      thirty  40      forty   50      fifty
60      sixty   70      seventy 80      eighty  90      ninety
*/

var data = {
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six',
	7: 'seven',
	8: 'eight',
	9: 'nine',
	10: 'ten',
	11: 'eleven',
	12: 'twelve',
	13: 'thirteen',
	14: 'fourteen',
	15: 'fifteen',
	16: 'sixteen',
	17: 'seventeen',
	18: 'eighteen',
	19: 'nineteen',
	20: 'twenty',
	30: 'thirty',
	40: 'forty',
	50: 'fifty',
	60: 'sixty',
	70: 'seventy',
	80: 'eighty',
	90: 'ninety',
	'00': 'hundred',
	'000': 'thousand'
};

var resultStrings = [];
var i, j;

var iStr;
var numberLength;
var output;

var unidades;
var dezenas;
var centenas;

var unidadesIndex = 0;
var dezenasIndex = 0; 
var centenasIndex = 0;
var milharesIndex = 0; 

for(var i = 1; i <= 1000; i++) {

	output = '';
	unidades = '';
	dezenas = '';
	centenas = '';

	unidadesIndex = -1;
	dezenasIndex = -1; 
	centenasIndex = -1;
	milharesIndex = -1; 

	if(data[i]) {
		resultStrings.push(data[i]);
		continue;
	} 

	iStr = i + '';
	numberLength = iStr.length;
	
	switch(numberLength) {
		case 2: 
			unidadesIndex = 1;
			dezenasIndex = 0;
			break;
		case 3: 
			unidadesIndex = 2;
			dezenasIndex = 1;
			centenasIndex = 0;
			break;
		case 4:
			unidadesIndex = 3;
			dezenasIndex = 2;
			centenasIndex = 1;
			milharesIndex = 0;
			break;
	}


	unidades = iStr[unidadesIndex] | 0;
	dezenas = (iStr[dezenasIndex] | 0) * 10;
	centenas = centenasIndex !== -1 ? (iStr[centenasIndex] | 0) : '';
	milhares = milharesIndex !== -1 ? (iStr[milharesIndex] | 0) : '';


	if(milhares) {
		output += data[milhares] + ' ' + data['000'];
	}

	if(centenas) {
		output += data[centenas] + ' ' + data['00'] + ' and';
	}
	
	if(dezenas) {
		output += ' ' + data[dezenas];
	}

	if(unidades) {
		output += ' ' + data[unidades];
	}

	resultStrings.push(output);
}

for(i = 0, j = resultStrings.length - 1; i < j; i++) {

	for(var k = 1; k < 9; k++) {
		resultStrings[i] = resultStrings[i].replace(data[10] + ' ' + data[k], data[10 + k]);	
	}

	if((i + 1) % 100 === 0) {
		resultStrings[i] = resultStrings[i].substring(0, resultStrings[i].length - 4);
	}
}

var count = 0;
var withoutSpaces;
for(i = 0, j = resultStrings.length; i < j; i++) {

	withoutSpaces = resultStrings[i].split(' ').join('');
	console.log(i+1, ' : ', withoutSpaces, ' : ', withoutSpaces.length);
	count += withoutSpaces.length;
}

console.log('count: ', count);









