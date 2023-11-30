// Signelton or constructor objects

// const tinderUser = new Object() // This is a singleton object

const tinderUser = {}    //This is a non singleton object. but the value of both are same = emptp objects

tinderUser.id = "123abc"
tinderUser.name = "Gaurav"
tinderUser.isLoggedIN = false

// console.log(tinderUser);

const regularUser = {
    email: "Kuch@koi.com",
    fullname: {
        userfullname: {
            firstname: "Gaurav",
            lastname: "Sharma",
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);
//The more . dots you put more deep you can go in the nesting and can access the values. 

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = Object.assign({}, obj1, obj2) // you can merge these two objects without using those empty braces as well, but by using them you ensure that the output will be returned in a single packed object. 


const obj3 = {...obj1, ...obj2}
//(Spreading objects): This is considers the ideal method to conbine the objects
console.log(obj3);
// ?????
const users = [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },

]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
//The output that comes here is array, ??

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(Object.hasOwnProperty('isLoggedIn'));
//This is used to check if the object has a certain property or not

// +++++++++ Destructuring +++++++++++

const course = {
    corsename: "JS",
    price: "1000",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const{courseInstructor: instruc} = course

// console.log(courseInstructor);
console.log(instruc);

// {
//     "name": "Gaurav",
//     "coursename": "JS",
//     "price": "free",

// }

