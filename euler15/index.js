//https://projecteuler.net/problem=15

//Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
//there are exactly 6 routes to the bottom right corner.
var nGrid = 20;
var perimeter = nGrid * 4;
var steps = perimeter / 2;

function factorial(num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * factorial( num - 1 ); }
}


//We allways have 2 down moves and 2 right moves
//DRDR
//DDRR
//Order does not matter
var nPaths = factorial(steps) / (factorial(steps / 2) * factorial(steps - (steps / 2)));
console.log(nPaths);