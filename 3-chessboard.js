/**
 * CHESSBOARD
 *
 * to run code from this file use: npx nodemon 3-chessboard
 *
 * Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
 * At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 * Passing this string to console.log should show something like this:
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 *
 * When you have a program that generates this pattern, define a binding size = 8 and change the program so
 * that it works for any size, outputting a grid of the given width and height.
 *
 */

// Your code here.
let size = 8;
let chessBoard = " ";

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      chessBoard += " ";
    } else {
      chessBoard += "#";
    }
  }
  chessboard += "\n";
}
console.log(chessBoard);
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
