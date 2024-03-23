let myNumbers = [ 1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => { return num+10})

const newNum = myNumbers
        .map( (num) => num * 10)
        .map( (num) => num + 1)
        .filter( (num) => num >= 40)

// console.log(newNum);


const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)
// console.log(myTotal);

// In Arrow Function
const myTotal = myNums.reduce( (acc,curr) => acc+curr, 0)
// console.log(myTotal);



const shoppingCard = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "java Course",
        price: 3999
    },
    {
        itemName: "python Course",
        price: 2599
    },
    {
        itemName: "cpp Course",
        price: 5999
    },
]

const priceTotal = shoppingCard.reduce( (acc, item) => acc + item.price, 0)
console.log(priceTotal);