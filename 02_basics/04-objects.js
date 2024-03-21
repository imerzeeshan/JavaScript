// const tinderUser = new Object();

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "zeeshan"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "zeeshan@gmail.com",
    fullname: {
        userfullname: {
            firstname: "MD",
            lastname: "Zeeshan"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj5 = {5:"a",6:"b"}

// const obj3 = {obj1,obj2}
// const obj4 = Object.assign({},obj1,obj2,obj5)
// console.log(obj4)

const obj6 = {...obj1, ...obj2, ...obj5}
// console.log(obj6)

const users = [
    {
        id: 1,
        email: "zeeshan@gmail.com"
    },
    {
        id: 2,
        email: "imzeeshan@gmail.com"
    },
    {
        id: 3,
        email: "iamzeeshan@gmail.com"
    }
]
console.log(users[0].id);
console.log(users[0].email);


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    couseInstructor: "zeeshan"
}
// course.couseInstructor

const {couseInstructor} = course;
const {couseInstructor : instructor} = course;
console.log(couseInstructor);
console.log(instructor);