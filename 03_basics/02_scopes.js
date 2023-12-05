// {} these braces are called scopes in almost all programming languages

a = 100

if (true){
    let a = 10
    const b = 20
    var c = 30 

    // a and b will not give any output when printed since they are inside the scope. But C will give the output 30 cauz it's a var. doesn't matter where you put it C will always give you the same answer. 

    //This is called block scope

    // Now there is an A defined outside the scope, so if you want to print the value of the one inside the block scope, here is the command for it. 

    console.log("Inner:", a);
}

console.log(a);
// console.log(b);
// console.log(c);

// IMP.......

// The global scope used in node and the one used on console of a browser are two different things.