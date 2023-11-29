const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Batman", "Flash"]

// marvel_heros.push(dc_heros)
//The output of this command produces 4 elements in as a result. The 3 original names and then it will take dc_heros as a signel element (array within array)
// console.log(marvel_heros);

//Hence if you want to access a specific name form the merged array you will have to give the following command:

// console.log(marvel_heros[3][1]);
//This means 2nd name on the 3rd element

const all_heros = marvel_heros.concat(dc_heros)
//This will intergrate the string within the array correctly.
console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

//The dots will spread out the elements written in the array and results the sam output as concat. 

const another_arr = [1, 2, 3,[4, 5, 6], 7, [6,7,[4, 5]]]

const real_another_arr = another_arr.flat(Infinity)
//In case you ever experience a deeply rooted array use this to sort it out. Put a specific number if you want to sort it out to a certain depth or put infinity if you wanna sort it out completely. 
 console.log(real_another_arr);

 console.log(Array.isArray("Gaurav"));
 //This will tell you if there is an array of Gaurav

 console.log(Array.from("Gaurav"));
 //This will convert that text into an array

 console.log(Array.from({name:"Gaurav"}));
 //Output of this will be an empty array, because its not clear what to make an array off.
 
 let score1 = 100
 let score2 = 200
 let score3 = 300

 console.log(Array.of(score1, score2, score3));