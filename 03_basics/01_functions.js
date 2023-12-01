function sayMyName(){
    console.log("G");
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");
}

// function addTwoNumbers (number1, number2){ //These number1 and number2 are parameters      
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4) // These are called arguments

function addTwoNumbers (number1, number2){      
    let result = number1 + number2
    return result //One of the rules of writing functions is after you type return, no line of code after that will be considered a part of the function. and it will be discarded 

    //_______or________________

    // return number1 + number2 
    //This will also give same results
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in` //here we have to merge a variable with a message. hence, we need to use string interpolation. so we use ` here
}

// console.log(loginUserMessage("Gaurav"));
console.log(loginUserMessage());
//when you don't give any value here the output will be undefined has logged in
