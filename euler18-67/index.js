//https://projecteuler.net/problem=18
//https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm

var bellman_ford = require('bellman-ford');

/**
 * @function
 * @name readDatasource
 * @description
 *
 */
function readDatasource(file, callback) {

    var fs = require('fs');
    var readline = require('readline');

    var rd = readline.createInterface({
        input: fs.createReadStream('prob67-datasource.txt'),
        output: process.stdout,
        terminal: false
    });

    var dsArray = [];
    var splitedLine;
    var currentArray;

    rd.on('line', function (line) {

        currentArray = [];

        splitedLine = line.split(' ');

        splitedLine.forEach(function (item, index) {
            currentArray.push((item | 0) * -1);
        });

        dsArray.push(currentArray);

    });

    rd.on('close', function () {
        callback(dsArray);
    });

}

/**
 * @function
 * @name calculateEdges
 * @description
 *
 * @param {Number} n number of rows of the array
 * @returns {Number} number of edges
 */
function calculateEdges(n) {
    //Result is initialized as 1 for the source node
    var result = 1;

    for (var i = n; i > 0; i--) {
        result += i;
    }

    return result;
}

/**
 * @function
 * @name createGraph
 * @description
 *
 * @param {Array} array Array read from datasource file
 * @returns {Graph} graph Graph created from datasource
 */
function createGraph(array) {

    var nEdges = calculateEdges(array.length);
    var graph = new bellman_ford();
    var edge = 0;
    var destinationIndex;
    var destination;
    var weight;
    var nPaths = 0;
    var indexRow, endIndexRow, indexItem, endIndexItem;
    var row, item;


    for (var i = 0; i < nEdges; i++) {
        graph.add_node(i);
    }

    //Fill origin edge 0 to all of the edges on the last row
    //In order to have 1 origin and 1 destination
    for (var i = 0, j = array[array.length - 1].length; i < j; i++) {
        edge++;
        graph.add_edge(0, edge, array[array.length - 1][i]);
    }

    //Restore the first edge that will be used as source
    destination = array[array.length - 1].length + 1;
    edge = 0;

    //Iterate rows
    for (indexRow = array.length - 1; indexRow > 0; indexRow--) {

        row = array[indexRow];

        //Iterate columns
        for (indexItem = 0, endIndexItem = row.length; indexItem < endIndexItem; indexItem++) {

            item = row[indexItem];

            edge++;
            destinationIndex = indexItem - 1;

            //Find two paths from this edge origin
            for (var i = 0; i < 2; i++) {


                if (destinationIndex < 0 || destinationIndex > array[indexRow - 1].length - 1) {
                    destinationIndex++;
                    continue;
                }

                weight = array[indexRow - 1][destinationIndex];

                graph.add_edge(edge, destination, weight);

                destinationIndex++;
                destination++;
            }
            destination--;
        }

        destination++;
    }

    return graph;
}


/**
 * @function
 * @name init
 * @description
 *
 */
(function init() {
    readDatasource('datasource.txt', function (array) {
        var graph = createGraph(array);

        graph.print();

        console.log('------------');
        console.log(graph.bellmanford(0));
    });
}());
