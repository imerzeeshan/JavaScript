// Dates;

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.toISOString());
console.log(myDate.getTimezoneOffset());
console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,23);
// let myCreatedDate = new Date(2024,0,23,5,3);
// let myCreatedDate = new Date("2024-02-24");
let myCreatedDate = new Date("01-02-2024");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday: "long",
});