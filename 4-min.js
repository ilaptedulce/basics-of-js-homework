/**
 * MINIMUM
 *
 * to run code from this file use: npx nodemon 4-min
 *
 * 4.1 Write a function that will bring two Number arguments and will return the minimum of these two arguments
 *
 * 4.2 Optional: Modify the min function created before to bring an array of numbers as a
 *    single argument and return the smallest number from this array.
 *    (e.g: console.log(minArr([2, 4, -4, 10, 0, -9, 17]));  → -9
 *
 * Do not use Math.min
 */

// Your code here.
//4.1
function minNum(a, b) {
  if (a < b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
minNum(0, 10);
//4.2
function getMin(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element < min) {
      min = element;
    }
  }
  return min;
}
let array = [25, 50, 75, 56, 11, 50, 7, 9, 12];
let result = getMin(array);
console.log("The smallest number is : ", result);

/* ------------------------------------Feedback------------------------------------

 Overall good solution. Good code readability.
 Great that you use "let" keyword.

 Just two small issues:

 1) the code runs with errors because on line 35 you use "chessboard" instead of "chessBoard".

 2) instead of the expected result:

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #

The result is:

  # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

 First line has one additional space. That happens because you initialized your "chessBoard" with " "(contains space) instead of ""(empty string)

 Also you first row should start with "#" instead of " " so you should replace the string concatenation like this:

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      chessBoard += '#';
    } else {
      chessBoard += ' ';
    }
  }
  chessboard += '\n';
}

Final correct code: 

let size = 8;
let chessBoard = '';

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      chessBoard += '#';
    } else {
      chessBoard += ' ';
    }
  }
  chessBoard += '\n';
}
console.log(chessBoard);

*/
