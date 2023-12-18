//for each

const coding = ["js", "py","ruby", "java", "cpp"]

// coding.forEach(function (item){   // the callback function does not require a name
//       console.log(item);
// })

//arrow callback function

// coding.forEach( (item) => {
//     console.log(item);
// } )

// PrintMe function:

// function PrintMe(item){
//     console.log(item);
// }

//callback function of printme

// coding.forEach(PrintMe)

//This is how you access the index from arrow functions using forEach

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "JS"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})