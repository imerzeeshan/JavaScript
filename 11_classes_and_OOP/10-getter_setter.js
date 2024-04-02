class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    get password(){
        return `${this._password}Zeehan`
    }
    set password(value){
        this._password = value
    }
    get email(){
        return `${this._email.toUpperCase()}`
    }
    set email(value){
        this._email = value
    }
}
const zeeshan = new User("Zeeshan",'imeresh@gmail.com','12345')
console.log(zeeshan.password);
console.log(zeeshan.email);