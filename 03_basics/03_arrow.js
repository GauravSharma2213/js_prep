const user = {
    username: "Gaurav",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

    //This is used for current context.

}

// user.welcomeMessage()
// user.username = "Ram"
// user.welcomeMessage()

// console.log(this);

// If you run you run this in node or any other engine it will give you the output of empty braces {}
// but if you are running it in browser then you will get the output of windows because the global object for a browser is windows

// function chai(){

//     let username = "RAMJI"
//     console.log(this.username);
//     // This will be undefines because this cannot be printed within a function

//     // console.log(this);
//     // But if you try to print this in a function it will give you a lot of info in the output
// }

// chai()

const chai = () => {

    let username = "Gaurav"
    console.log(this);
}

// chai()

//This is the syntax for an arrow function
// In case of printing this within the arrow function it behaves same as a normal function.


//Here is the basic arrow function: 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) => (num1 + num2)

// This is implicit way of writing an arrow function

//++++ if you use braces in a functiion then you have to write return but if you use () then you don't.
// But you cannot do this while returning objects. You must use {} for objects

console.log(addTwo(4, 5));