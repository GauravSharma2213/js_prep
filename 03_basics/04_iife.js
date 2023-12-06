// Immediately Invoked Function Expressions (IIFE)

// IIFE is used to get rid of the pollution caused by the global scope. 
// Global scope variables can cause issues sometimes. This means you will not get the desired output 
// from printed variables because the global variable has conflicting values

// This is how to use IIFE:

(function chai(){

    //This is a named iife

    console.log(`DB Connect`);

}) ();

// If you call a basic function named chai you will write chai()
// similarly while calling iife the first () is function itself and second () is the execution call it
// Also, make sure you add the semi-colon ; after you write an iife. sometimes the code editor will miss it

// ( () => {

// This is an unnamed iife

//     console.log(`DB is again connected`);
// })();

// Here is another syntax to write iife in implicit way



( (name) => {
    console.log(`DB is again connected ${name}`);
})('Gaurav');

// If you need to print a name in the function, this is how you do it