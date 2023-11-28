//Arrays
//[ These are brackets] (These are parentheses) {These are braces}
const myArr = [0, 1, 2, 3, 4, 5] // This array consists numbers only
const myHeros = ["Thor","Loki"] // This one has only strings
const myArr2 = new Array(1,2,3,4) // This is another way of declaring arrays


console.log(myArr[0]);

//*** Array Methods *******/

//Another imp command that we will use: 

// myArr.push(6)
//This is to add new values in existing arrays
// myArr.push(7)
// myArr.pop()
//This remove the last value from the array. 

// myArr.unshift(9)
//This will add the value to the start of the Array.
// myArr.shift()
//This will remove the value in the start of the array. 

// console.log(myArr.includes(9));
//This will give you an answer if the value is in the array or not

// console.log(myArr.indexOf(4));

const newArr = myArr.join()
//This will merge the 2 arrays and this will change their type to String.

console.log(typeof newArr);
console.log(myArr);


//Slice or Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
//Slice function will give you the part of Array that you have requested. and will not affect the original data in Array

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
//Splice function will show you the data you mentioned as the output but it will delete that outputted data from the original Array as well.

console.log("C ", myArr);
console.log(myn2);