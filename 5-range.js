/**
 * RANGE
 *
 * to run code from this file use: npx nodemon 5-range
 *
 * 5.1 Write a function that takes two arguments, start and end, and returns an array
 *    containing all the numbers from start up to (and including) end. Next, write a sum
 *    function that takes an array of numbers and returns the sum of these numbers.
 *
 * 5.2 Optional: As a bonus assignment, modify your range function to take an optional
 *    third argument that indicates the “step” value used when building the array. If no
 *    step is given, the elements go up by increments of one, corresponding to the old behavior.
 *    The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with
 *    negative step values so that range(5, 2, -1)
 *
 */

// Your code here.
//5.1
function rangeOfNumbers(start, end) {
  let arr = [];
  for (start; start <= end; start++) {
    arr.push(start);
  }
  return arr;
}
let array = rangeOfNumbers(1, 7);
console.log(array);

function Sum(array) {
  return array.reduce((acc, curr) => {
    return acc + curr;
  });
}
console.log(Sum(array));

//5.2
function range(start, end, step) {
  var result = [];
  if (step == undefined) step = 1;
  numLoops = Math.abs((end - start) / step) + 1;
  for (var i = 1; i <= numLoops; i++) {
    result.push(start);
    start += step;
  }
  return result;
}
console.log(range(1, 10, 2));
// ------------------------------------Feedback------------------------------------

// 5.1 Great work! Good code readability, great solutions!

// 5.2 From my point of view not the most elegant solution.
// Using "var" keyword to declare variables is a bad practice. Take advantage of ES6 features.
// 🔴 "numLoops" is declared without a keyword which means it is a global variable (The variables declared without the var keyword becomes global variables, irrespective of where they are declared.)
// Useful short explanation why "var" is dangerous (https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
// You can use function default parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
// instead of: if (step == undefined) step = 1;
