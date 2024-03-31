// after ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abx`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User("zeeshan","erma@gmail.com" , "1234")
console.log(user1.encryptPassword());
console.log(user1.changeUsername());


/// behid the scene

function User1(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password
}
User1.prototype.encryptPassword = function(){
    return `${this.password}asfj`
}
User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User1("hello", "werhsui@gmail.com", "124444444445")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
