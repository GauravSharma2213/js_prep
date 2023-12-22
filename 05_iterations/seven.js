// Maps
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num +10 )
// This is a bit better then for each because you can store the output in a variable. 

// const newNums = myNumbers.map( (num) => {
//     return num +10} ) // !! To get output in braces you have to use return
// console.log(newNums);

//Chaining:

const newNums = myNumbers
                    .map((num) => num * 10)
                    .map( (num) => num +1 )
                    .filter((num) => num >= 40)
// This is called chaining, we are performing more then one function in the same loop.
// Here the code will run line by line and the output will be the one that went though all the criteria you put up 
console.log(newNums);
