const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));
console.log(typeof balance.toString());

const  otherNumber = 123.8966;
console.log(otherNumber.toPrecision(5));
console.log(typeof otherNumber.toPrecision());


const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++ MATHs+++++++++++++++
console.log('MATHs');

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.sqrt(169));
console.log(Math.max(1,6,9,8));
console.log(Math.min(1,6,9,8));
console.log(Math.random());
console.log((Math.random())*10)+1;
console.log((Math.floor(Math.random())*10)+1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max- min + 1)) + min);
