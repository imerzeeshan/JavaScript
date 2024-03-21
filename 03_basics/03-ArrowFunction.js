const user = {
    username: "Zeeshan",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "shan"
// user.welcomeMessage()

console.log(this);

// function chai(){
//     let username = "Zeeshan"
//     console.log(this.username);
//     console.log(this);
// }
// chai()

// const chai = function(){
//     let username = "Zeeshan"
//     console.log(this.username);
// }
// chai()

const chai = ()=>{
    let username = "Zeeshan"
    console.log(this.username);
}
// chai()

// const addtwo = (num1,num2) => {
//     return num1+num2
// }

// const addtwo = (num1,num2) => num1+num2

// const addtwo = (num1,num2) => (num1+num2)

const addtwo = (num1,num2) => ({username: "Zeeshan"})

console.log(addtwo(4,6));