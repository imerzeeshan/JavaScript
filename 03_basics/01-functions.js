function addTwoNumbers(number1, number2){
    console.log(number1+number2);
}
addTwoNumbers(3,4);

function addTwoNumbers(number1, number2){
    // let result = number1+number2;
    // return result;
    return number1+number2;
}
const result = addTwoNumbers(3,4);
console.log("Result: ",result);

function loginUserMessage(username){
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Zeeshan"));
const ans = loginUserMessage("Zeeshan");
console.log(ans);

function calculateCardPrice(val,val1,...num1){
    return num1
}
console.log(calculateCardPrice(200,400,500,2000))

const user = {
    username: "zeeshan",
    price: 199
}

function handlerObject(anyobject) {
    console.log(`useername is ${anyobject.username} and price is ${anyobject.price}`);
}
// handlerObject(user);
handlerObject({
    username: "Zeeshan",
    price: 200
});


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,300,288]));