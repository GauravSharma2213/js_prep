const userEmail = "Kuch@koi.com"


if (userEmail) {
    console.log("Got User Email");
}
else{
    console.log("Don't have user email");
}

// falsy values:
// false, 0, -0, BigInt 0n, "" , null, undefined, NaN
// Other then this all the values are truthy

//truthy values: 
// "0" (If 0 is written in a string then it becomes truthy), 'false' (This is also a truthy value, doesn't matter if it is written in ' or ")
// " " (This is a truthy value, because there is a space in the string hence this not considered an emplty string)
// [], {}, function(){} (empty array, object or an empty function is truthy)


//This is how to check if const is an empty array or not
const emptyArray = []

if (emptyArray.length === 0) {
    console.log("Array is empty");
}

//This is how to check if const is an empty Object or not

const emptyObj = {}
// Object.keys(emptyObj) , This will turn the object to an array
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}