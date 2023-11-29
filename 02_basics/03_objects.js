// Singleton, this means the element is unique.
//Object.create
//This is the constructor method of creating an object and this is the way to create a singleton


//Object literals:

const mySym = Symbol("key1") // ******Symbol : This is how you declair a symbol

const JsUser = {
    name: "Gaurav",
    "Full Name": "Gaurav Sharma",
    // mySym: "myKey1", This is how you give value to a declared symbol. BUT this here is not acting like an actual symbol. ***Interview Focused*****
    //The coorect way to declare a symbol is using the [] : 
    [mySym]: "myKey1",
    age: 22,
    Location: "Canada",
    email: "Kuchbhi@kahintoh.com",
    isLoggenIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 
//The way we create an object is to give a key (name) and then define it (Gaurav). You can access the data here by referencing the key. Unlike the array where you have to access it using the place numbers. 
//by default name is precieved as a string in the system

console.log(JsUser.email);
//You can access the data in an object using this command. But the issue is if a key is specifically defined as string("Full name"), then you can't access

console.log(JsUser["email"]);
//Hence we use these brackets[] and call the key.
console.log(JsUser["Full Name"]);
console.log(JsUser[mySym]);
//Now if you check the type off this mySym it is acting as a symbol now. [] These brackets are imp for declaring symbols.

JsUser.email = "Kuchnya@purana.com"
//This is how you change values in an object

// Object.freeze(JsUser)
//This is how you lock the values in objects. If you freeze any value it will never be changed.

// console.log(JsUser);

//**************** Functions ****************/

JsUser.greetings = function(){
console.log("Hello users");

}
JsUser.greetingstwo = function(){
    console.log(`Hello users, ${this.name}`);
    //using these backticks ` is called string interpolation and it is used to integrate keys from objects into fuction optups
    
    }

console.log(JsUser.greetings());

//If you print the log like this console.log(JsUser.greetings); it will give you output: (anonymous).

console.log(JsUser.greetingstwo());