/**
 * FIZZ_BUZZ
 *
 * to run code from this file use: npx nodemon 2-fiz-buzz
 *
 * Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
 * For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
 *
 * When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
 * (and still print "Fizz" or "Buzz" for numbers divisible by only one of those)
 *
 *
 */

// Your code here.
for (let n = 1; n <= 100; n++) {
  if (n % 3 == 0 && n % 5 == 0) {
    console.log("FizzBuzz");
  } else if (n % 3 == 0) {
    console.log("Fizz");
  } else if (n % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
}
// ------------------------------------Feedback------------------------------------

// Great work!
// Elegant solution, good code readability.
// I appreciate that you know when to use the "else if" conditional statements. This is a good place for them.

// There is just a minor thing that I would like to point out:
// We prefer strict equality operator check over equality operator because it helps us avoid some bugs.

/* JavaScript has two sets of equality operators: === and !==, and their evil twins == and !=. 
 The good ones work the way you would expect. 
 If the two operands are of the same type and have the same value, then === produces true and !== produces false. 
 The evil twins do the right thing when the operands are of the same type, but if they are of different types, they attempt to coerce the values. 
 The rules by which they do that are complicated and unmemorable.
 */

// (https://stackoverflow.com/a/359509)
