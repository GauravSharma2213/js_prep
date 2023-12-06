// {} these braces are called scopes in almost all programming languages

a = 100

if (true){
    let a = 10
    const b = 20
    var c = 30 

    // a and b will not give any output when printed since they are inside the scope. But C will give the output 30 cauz it's a var. doesn't matter where you put it C will always give you the same answer. 

    //This is called block scope

    // Now there is an A defined outside the scope, so if you want to print the value of the one inside the block scope, here is the command for it. 

    //console.log("Inner:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// IMP.......

// The global scope used in node and the one used on console of a browser are two different things.

function one(){
    const username = "Gaurav"

    function two(){
        const website = "utube"
        console.log(username);
    }
    // console.log(website);

    //The reason we got an error while trying to print website is this const is defines in a nested scope in function to. Like young ones can ask for something from older folks but Old folks can't do the same to the young ones. The bigger functions cannot call any variables form nested scopes but the nested ones can call the variables of the bigger scopes.


    two()
    // if we comment this two that means the nested function was never called so it will not give any output
}

//one()

if (true){
    const username = "Gaurav"
    if (username === "Gaurav"){
        const website = " utube"
        //console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//  +++++++++++++++ IMP +++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1
}


addtwo(5)
const addtwo = function(num){
    return num + 2

}

//The reason you cannot call addtwo but can addone is because you have only declared the addone function but didn't hold it in a variable. and in case of addtwo you held it in addtwo variable so you can't call it. This phenomenon is called hoisting. 
