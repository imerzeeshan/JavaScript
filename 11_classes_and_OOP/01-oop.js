const user = {
    username: "Zeeshan",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`UserName: ${this.username}`);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());



function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}
const userONE = new User("Zeeshan",13, true)
const userTWO = new  User("shaikh",14, false)
console.log(userONE);
console.log(userTWO);