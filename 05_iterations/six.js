//const coding = ["js", "py","ruby", "java", "cpp"]

// coding.forEach( (item) => {
//     console.log(items);

//     return item
// } )

// The forEach function cannot return any output no matter however you try to extract it

const myNums = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);
// This will return the output of numbers greater than 4 because filter helps you to extract a certain output from the whole bunch


// const newNums = myNums.filter( (num) => {
//     return num > 4})
    // !!!! You need to put return if you are using the braces without that there will be no output


// !!!  This is how to perform the same task using the forEach function
// const newNums = []

// myNums.forEach( (num)=>{
//     if (num > 4){
//         newNums.push(num)
//     }
// })


//     console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter((bk) => bk.genre === "History")
// This will filler out the books of history genre

userBooks = books.filter((bk)=>{
    // return bk.publish >= 1995  !! firstly its imp to write return to get output from this function
    // and this will give output of books published after 1995

    return bk.publish >= 1995 && bk.genre === "History"
// This is how to check two conditions at one time
// again don't forget to write return to get the output
})