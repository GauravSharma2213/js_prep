//for in loop

const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple',
}

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "ruby", "python", "Java", "cpp"]

for (const key in programming) {
   console.log(programming[key]);
   // Key for an array is the number of place of the variable within. But you can choose your own key in the objects
}

// const map = new Map()

// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

// The maps are not iteratable

