// array

const myArr = [0,1,2,3,4,5];
console.log(myArr[4]);

const hero = ["IronMan","SpiderMan"];
console.log(hero[1]);

const myArr2 = new Array(3,4,5,2,7);

// Array Methods

myArr.push(6);
myArr.push(8);
myArr.pop(8);

myArr.unshift(9);
myArr.shift();

myArr.shift();

console.log(myArr.includes(9));
console.log(myArr.indexOf(5));

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);


// Slice, Splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3);
console.log("C ",myArr);
console.log(myn2);

