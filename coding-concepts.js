// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length) // --> 10

// a) Your answer: It will log 10.
// b) Verify and explain: .length returns the length of the string, including the space.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4]) // --> o

// a) Your answer: "o"
// b) Verify and explain: using [4] finds the 5th value in the string which is "o".

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index]) // --> Ruby

// a) Your answer: returns "Ruby"
// b) Verify and explain: the variable index is assigned 1, when searching the languages array, the 1 value is Ruby. 

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase()) // --> TypeError: weekendDays.toUpperCase is not a function

// a) Your answer: error message because toUpperCase() is used for strings, but weekendDays is an array. 
// b) Verify and explain: Since toUpperCase() is a built in function to change a string to uppercase, it does not work on an array

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer:
// b) Verify and explain:
