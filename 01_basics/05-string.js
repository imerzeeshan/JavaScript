const name = "Zeeshan"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('zeeshan-md-com')
console.log(typeof gameName)
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-9,7);
console.log(anotherString);

const newStringOne = "      zeesh   ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://zeeshan.com/heest%30chahdf";
console.log(url.replace('%30','-'));
console.log(url.includes('zeeshan'));
console.log(url.includes('hello'));

console.log(gameName.split('-'));
