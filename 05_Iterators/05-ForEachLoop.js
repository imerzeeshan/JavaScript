const condig = ["js","ruby","java","python","cpp"]

condig.forEach(  function (item) {
    // console.log(item);
})



condig.forEach( (item) => {
    // console.log(item);
})




function printme(item) {
    // console.log(item);
}
condig.forEach(printme)



condig.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})



const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "C Plus Plus",
        languageFileName: "CPP"
    },
]

myCoding.forEach( (item) => {
    // console.log(item.languageName);
})




const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);


const newNums = myNums.filter( (num) => {
    return num > 4
})
// console.log(newNums);



const newNum = []
myNums.forEach( (num) =>{
    if(num%2 == 0){
        newNum.push(num)
    }
})
console.log(newNum);