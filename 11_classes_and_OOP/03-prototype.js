let myName = "Zeeshan      ";
let mychai = "chai      ";

// console.log(myName.trim().length);


let myHero = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.zeeshan = function(){
    console.log(`Zeeshan is present in all objects`);
}


Array.prototype.heyZeeshan = function(){
    console.log(`Zeeshan says Hello`);
}

// heroPower.zeeshan();
// myHero.zeeshan()
// myHero.heyZeeshan();
// heroPower.heyZeeshan();



//Inheritance
const User = {
    name: "Zeeshan",
    email: "iamerxeshan@gmail.com"
}

const Teacher = {
    makeVideo: true
}
const TeacherSupport = {
    isAvailable: true
}
const TAsupport = {
   makeAssignment: 'JS Assignment',
   fullTime: true,
   __proto__: TeacherSupport
}

Teacher.__proto__ = User



// modern syntax
Object.setPrototypeOf(TeacherSupport, Teacher);

let anotherUsername = "ImerZeshan      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength();
"Zeshan".trueLength();
"india".trueLength();