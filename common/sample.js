/*
 37107287533902102798797998220837590246510135740250
 46376937677490009712648124896970078050417018260538
 */

var BigNumber = require('./big-number');

var nrA = new BigNumber('4005779162611968650022');
var nrB = new BigNumber('100');

//console.log(nrA.add(nrB));
//console.log(nrA.multiply(nrB));

nrA.multiply(nrB);
//nrA.add(nrB);

console.log(nrA);

