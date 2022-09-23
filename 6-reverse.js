/**
 * REVERSE
 *
 * to run code from this file use: npx nodemon 6-reverse
 *
 * Write a function that takes an array as argument and produces a new array that has the same elements in the inverse order.
 *
 * Do not use Array.reverse
 */

// Your code here.
function reverseArray(array) {
  var reversedArray = [];
  while ((i = array.pop())) reversedArray.push(i);
  return reversedArray;
}
console.log(reverseArray(["a", "b", "c", "d", "e"]));
// ------------------------------------Feedback-----------------------------------

// Good! I appreciate that you have your own approach and your solutions are original.
// It is great that you know how to use array methods like "pop" and "push"

// Please do take advantage of ES6 features and build good habits around them, this will help you a lot in real projects
// where we try to stick to good practices as much as possible.
// Seeing "var" in modern JS code is very disturbing 😂
// https://www.boardinfinity.com/blog/top-10-features-of-es6/
