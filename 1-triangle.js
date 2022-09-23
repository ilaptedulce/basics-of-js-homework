/**
 * LOOPING A TRIANGLE
 *
 * to run code from this file use: npx nodemon 1-triangle
 *
 * Write a loop that makes seven calls to console.log to output the following triangle:
 #
 ##
 ###
 ####
 #####
 ######
 #######
 *
 * Try to find the most optimal way to do this.
 *
 */

 for (let line = "#"; line.length < 8; line += "#")
 console.log(line);

 // ------------------------------------Feedback-----------------------------------

// Good! I appreciate that you have your own approach and your solutions are original.
// It is great that you know how to use array methods like "pop" and "push"

// Please do take advantage of ES6 features and build good habits around them, this will help you a lot in real projects
// where we try to stick to good practices as much as possible.
// Seeing "var" in modern JS code is very disturbing 😂
// https://www.boardinfinity.com/blog/top-10-features-of-es6/
