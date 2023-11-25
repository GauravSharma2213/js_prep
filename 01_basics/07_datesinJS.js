// Dates

let mydate = new Date()
console.log(mydate.toString());
//This will give you the timezone in the end.

console.log(mydate.toLocaleString());
//This will give you date and time in another format and there are more options that will give you date and time with slight variations.

//let myCreatedDate = new Date(2023, 0, 25) 
//let myCreatedDate = new Date(2023, 0, 25, 5, 2)//5 and 2 acts as the time here.
// console.log(myCreatedDate.toDateString());
//!!Important Fact: JS counts the months starting from 0 = January
//The command here will give you a form of date output
let myCreatedDate = new Date("2023-01-11") //This is in yyyy-mm-dd format and here months starts from 01

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

//You will get the values in milliseconds here to compare against the timestamps

console.log(Math.floor(Date.now()/1000)); //!!!

//This command here is used to comvert the millisecond value into seconds so that it's easier to compare the values.
//For more explanation check notion

let newDate = new Date()
console.log(newDate.getMonth());
// You can use .get to exptract all the individual values needed like Month, day , minutes etc.

newDate.toLocaleDateString('default',{
    
    weekday: "long",
    
    //To get all the options here press control^ and spacebar. Long here will change the output from Mon to Monday.

})
