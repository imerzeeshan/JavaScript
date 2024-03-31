class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const shan = new Teacher("Zeeshan","imerzeeshan@gmail.com","1245");
shan.addCourse();
shan.logMe();
console.log(shan.password);

const zeeshan = new User("imerzeeshan")

zeeshan.logMe();
console.log(shan === zeeshan);

console.log(shan instanceof Teacher);
console.log(shan instanceof User);
