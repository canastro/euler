
var _ = require('lodash');
var fs = require('fs');
var names = [];

var alphabet = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7, 
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26
};


fs.readFile('datasource.txt', 'utf8', function (err,data) {
    var sum = 0;

    if (err) {
        return console.log(err);
    }

    data = data.replace(/"/g, '');
    data = data.replace(/ /g, '');
    names = data.split(',');

    names = _.sortBy(names);

    names.forEach(function(name, index) {
        var result = 0;

        for(var i = 0, j = name.length; i < j; i++) {
            if(alphabet[name[i].toUpperCase()]) {
                result += alphabet[name[i].toUpperCase()];
            }
        }

        //console.log(result);

        result *= (index + 1);
        sum += result;
        console.log('name: ', name);
        console.log('result: ', result);
        console.log('currentSum: ', sum);
    });

    console.log(sum);

});


