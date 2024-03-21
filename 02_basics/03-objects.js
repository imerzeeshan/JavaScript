// singlton
//object.create

// object literals

let mySym = Symbol("key1");


const JsUser = {
    name: "Zeeshan",
    "Full Name":"Md Zeeshan",
    [mySym]: "mykey1",
    age: 20,
    location: "Pune",
    email: "imerzeeshan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["Full Name"]);
console.log(JsUser[mySym]);
// console.log(JsUser);

JsUser.email = "imerzeeshan@google.com"
// Object.freeze(JsUser)
JsUser.email = "imerzeeshan@microsoft.com"
console.log(JsUser)

JsUser.greeting = function() {
    console.log("Assalamu Alaikum");
}
JsUser.greetingtwo = function() {
    console.log(`Assalamu Alaikum , ${this["Full Name"]}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())
