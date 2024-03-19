// Primitive datatype

//1. String
//2. Number,
//3. Boolean
//4. null
//5. undifined
//6. Symbol
//7. BigInt


const id = Symbol('123');
const anotherid = Symbol('123');

console.log(id == anotherid)

const bigIntNumber = 12237238463756463n

// Reference (NON Primitve)
//1. Array
//2. Objects
//3. Functions

const heros = ["shaktiman","naagraj","doga"];
let myobj = {
    name: "Zeeshan",
    age: 22,
}
// console.log(myobj);

const myFunction = function(){
    console.log("Hello World!");
}

// console.log(typeof myFunction);


//++++++++++++++++++++++++++++++
// Stack(Primitive)-> argument passing in stack memory by object copy
// Heap(Non-Primitive) -> argument pass by reference

