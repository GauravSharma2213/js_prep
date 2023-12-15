// for of loop

// for (const iterator of object) {
    
// }

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello Dunia!"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

//Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

//maps have unique values and cannot have duplicate values

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

//Objects are not itteratable through the normal for of syntax