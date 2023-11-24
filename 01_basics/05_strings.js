const name = "Gaurav"
const repoCount = 50

// console.log(name + repoCount + " Value"); This is not a prefered method of string

// String Interpolation: `` these backticks are used to write code in this

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Gaurav-gs-gsk-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
// This is used to get the results all in uppecase
console.log(gameName.charAt(3));
// This is used to look which charcter is at posotion 3
console.log(gameName.indexOf('v'));
// This is used to find out the position number of a charcter

const newString = gameName.substring(0,4)// if you use -ve values in substring it will ignore it and give you the results starting from 0

console.log(newString);
// This will give you the characters from starting upto the 3rd one in your string. It will not include the 4th character.

const anotherString = gameName.slice(-8,4)
// You can use the negative values in slice and it will start counting before 0 
console.log(anotherString);

const newStringOne = "   Gaurav   "
console.log(newStringOne);

console.log(newStringOne.trim());// This will eliminate the unnecessary spaces given in the strings. There are 2 other forms of Trim, you can use it to get rid of space in Start or the end of string specifically.

const url = "http://gaurav.com/gaurav%500Sharma"

//if there is a space in the website name the browser will eliminate it and put in some charters instead like %500 here. you can use replace tag to instert charcters of your choice instead of randon ones.

console.log(url.replace('%500','-'));

console.log(url.includes('gaurav'));
// you can use this to find out if there is a specific text in the url or not. The answer will be in Boolian

console.log(gameName.split('-'));//You can use this to get the answer as an array on the bases of -, you can use it on bases of spaces too
