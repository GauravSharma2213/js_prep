let score = "33"
// here score has a data type of a string
console.log(typeof score);

// if you want to use the score as a number here is the syntax for it
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

let scoreTwo = "33abc"
// if you type a number witha text and then try to use that variable as a number it will give the output as NaN(not a number)
let valueInNumber = Number(scoreTwo)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33acd" => NaN
// true => 1; false => 0

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => flase
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);