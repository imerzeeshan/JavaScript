class User{
    constructor(username){
        this.username =username;
    }
    logMe(){
        console.log(`UserName is ${this.username}`);
    }

    createId(){
        return `1234`
    }
}

const Zeeshan = new User("Zeeshan");
// console.log(Zeeshan.createId());

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }

}
const iphone = new Teacher("Iphone","iphone@phone.com")
iphone.logMe();
console.log(iphone.createId());