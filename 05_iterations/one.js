// For loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// Firstly, we took a variable: index. Then we do the condition check with the array lenght property and lastly
// we increace the varibale named index. After that in the block scope we print the array's value

// Line by line working of a loop:(line no.3) You take a varibale: index then do the condition check > directly after that you 
// print that value (line no 4) > Then it goes back and add another value to the variable (line number 3)

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {

        //console.log("Bas karde yaar print kuch v"); //***/
        
    }
    // console.log(element);
}
// In this loop the line with starts peinted in the middle because its supposed to go to the last line before going up
// and adding a number to it

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value: ${j} and outer loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);        
    }
    
}

let myArray = ["Flash", "Batman", "Superman"]

//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];

    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }

// Here the loop isn't printing upto 20 because of break. It makes the jump directly out of this scope.
// Hence prevents it from going back up again and printing next. 

//     console.log(`Value of i is ${index}`);
    
// }

// Continue: 

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue

// Continue lets your code ignore the condition once and keeps on running the loop. It does not makes you exit the scope like break.

    }
    console.log(`Value of i is ${index}`);
    
}