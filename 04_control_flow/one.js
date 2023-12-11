// <, > , <=, >=, ==, !=, ===
// = this is for operator assignment == this is to check if it is equal. 
// === this will check the value and the if the data is same as well or not
// && this is and
// || this is or

// const temperature = 7

// if(temperature < 50){
//     console.log("Less then 50");
// }
// else{
//     console.log("Greater then 50");
// }

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// Here you cannot print the output because the power is assigned within the scope and it will remain there,
// it cannot be accessed outside the scope

const balance = 1000

// if(balance > 500) console.log("test"); // This is called implicit scope, the code written in one line, without braces


// Here is the syntax to check multiple statments at a time. 
// if(balance < 500) {
//     console.log("less than");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }

// else if(balance < 900){
//     console.log("Less than 750");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggenInfromEmail = true

// This type of code is used to check two conditions at a time and will print output if both of them are true
if(userLoggedIn && debitCard){
    console.log("Allow to buy");
}
// This syntax is used for or conditions in the code
if(loggedInfromGoogle || loggenInfromEmail){
    console.log("User logged in ");
}
