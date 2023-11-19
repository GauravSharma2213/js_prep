// Primitive : 7 types
// String, Number, Boolean, Null, undefined, Symbol, BigInt

const Name = "Gaurav"

const score = 100
const scorevalue = 100.99

const isLoggeIn = false

const temp = null

let userEmail;
let anotherUserEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')
// Both of these values are unique hence different. 

console.log(id === anotherId);

const bigNumber = 12331243431234465643454234n
// BigInt is used for scientific numbers or very large values. if you put "n" in the end of the number it will be read as a bigInt number.



// Refernce (Non-primitive)
// Array, Objects, Functions

const heros = ["Ironman","Hulk","Loki"]
let myObj = {
    name: "Gaurav",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// This function is used to determine the datatypes of variables:

console.log(typeof bigNumber);