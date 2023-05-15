// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// 1. create a function named boilingPoint, pass number as parameter
// 2. evaluate if that number is >, <, = to 212 with if/else
// 3. if > 212 output: ${number} above boiling point
    // a. if < 212 output: {number} above below point
    // b. if = 212 output: {number} above boiling point


const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

    const boilingPoint = (num) => {
        if(num > 212) {
            return `${num} degrees Fahrenheit is above boiling point!`
        } else if(num === 212) {
            return `${num} degrees Fahrenheit is at boiling point!`
        } else if(num < 212) {
            return `${num} degrees Fahrenheit is below boiling point!`
        }
    }
console.log(boilingPoint(temperature1)) // --> 42 degrees Fahrenheit is below boiling point!
console.log(boilingPoint(temperature2)) // --> 350 degrees Fahrenheit is above boiling point!
console.log(boilingPoint(temperature3)) // --> 212 degrees Fahrenheit is at boiling point!

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// 1. create variable totalRuns to store combined arrays
// 2. use concat built in method with padres1984WorldSeriesRuns and padres1998WorldSeriesRuns to merge the arrays
// 3. use console log with .length to display the length of the 2 arrays


const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
    
totalRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(totalRuns.length) // --> 9


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// 1. turn string into array by using .split
// 2. split array into each character by passing .split("")
// 3. reverse array using .reverse() 
// 4. turn array back into string with .join("")
// 5. display and verify output with console.log

const currentCohort = "Delta 2023"
// Expected output: "3202 atleD"


console.log(currentCohort.split("").reverse().join("")) // --> 3202 atleD

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// 1. use lastIndexOf built in method to return last instance of value in array
// 2. using the variable numberOfConnections, use .lastindexOf to pass the givenValue1 and givenValue 2
// 3. use console.log to display and verify the output


const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

console.log(numberOfConnections.lastIndexOf(givenValue1)) // --> 7
console.log(numberOfConnections.lastIndexOf(givenValue2)) // --> 8


// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// 1. first sort the array to make it ascending order (low to high)
// 2. reverse array order to sort from high to low
// 3. use console.log to display and verify

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]


console.log(sanDiegoSummerTemperatures.sort().reverse()) // --> [  82, 80, 79, 77, 76, 73, 72]
console.log(sanDiegoWinterTemperatures.sort().reverse()) // --> [68, 67, 66, 66, 62, 59, 59]

