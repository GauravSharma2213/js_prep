 const score = 400
//  console.log(score);

 const balance = new Number(100)
 //This will assure that the character type is number. and this will tell you in the output that it is a number.

//  console.log(balance);

//  console.log(balance.toString());
 // This command here will turn your output from Number to a String then you can get all the additional options with the output that you usually get with the string. for example: length, etc.
//  console.log(balance.toString().length);
 
//  console.log(balance.toFixed(2));
 // This is used to fix the percision value of a number to certain decimal values. This more used while dealing with e-commerse stuff to make a long numeric values readable.

 const otherNumber = 23.567596

//  console.log(otherNumber.toPrecision(3));
 // Use toPercision carefully. This will round off the values in the output, also will give you the output of so many numbers as you have asked to. for example: if you use toPercision(3) for a number like 1222.323. The output will be 122e+2. This means you have aasked for only three number result but there are more numbers before the decimal.

 const hundereds = 1000000
//  console.log(hundereds.toLocaleString());
 //This is used to get teh commans in the numbers you have as characters, so that it is easy to read.

//  console.log(hundereds.toLocaleString('en-IN'));
 //This command will change the output commas according to metric measurements (The system used in India).

 //****************************** Maths ********************************** */

//Math is an object itself
 console.log(Math);
 console.log(Math.abs(-6));
 //abs is absolute value. This will change the negative number into a positive one

 console.log(Math.round(4.3));
 //This is to round off the values in a standard way

 console.log(Math.ceil(4.2));
//ceil means ceiling, this implies that if the value increases even a little bit from 4 it will choose 5 as output.

console.log(Math.floor(4.7));
//Similarly floor value will choose the lower number here regardless the standard round off output is 5 here.

console.log(Math.min(2,4,5,7,51));
console.log(Math.max(2,4,5,7,51));
//To find out min and max values out of the bunch

console.log(Math.random());
//This will always give you random values in between 0 and 1 
console.log((Math.random()*10) + 1);
// Multiply by 10 will move the decimal value by one place and + 1 will ensure during the roundoff the value does goes to 0

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min);

// .floor is used to round off to the lowest value, then random is multiplies with max - min for the range and + 1 so that we don't get 0 and then + min so that the output is greater then 10 