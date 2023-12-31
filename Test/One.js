// Problem 1: Smallest of the 3
function theFun (num1, num2, num3){
    let smallestNum = num1

    if (num2 < smallestNum){
        smallestNum = num2;
    }

    if (num3 < smallestNum){
        smallestNum = num3;
    }
       
    return smallestNum;
    
}

let result = theFun(12,44,87);
console.log(result, "is the smallest Number");


//Problem 2: Print the table
function Table (num) { 
    let product = 0;
    for (let index = 1; index <= 10; index++) {
       product = num * index;
       console.log(`${num} X ${index} = ${product}`);
    }
    return null;
}
Table(5);

//Product 3: even or odd

function even (Lund) {
   let r = Lund%2;
    if (r===0) {
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
    return null
}

even(857);