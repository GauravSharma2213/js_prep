// Reduce

const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function(acc, curval){
//     console.log(`acc: ${acc} and curval:${curval}`);
//     return acc + curval

// },3)

// acc means accumulator and curval is current value. The value at the end of the function is value for accumulator

// console.log(myTotal);


//How to write reduce function in arrow style function:

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "JS course",
        price: 2999,

    },
    {
        itemName: "PY course",
        price: 999,
        
    },
    {
        itemName: "Mobile Dev",
        price: 5999,
        
    },
    {
        itemName: "Data Science course",
        price: 12999,
        
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);