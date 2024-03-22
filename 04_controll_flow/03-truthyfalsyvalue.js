const userEmail = "imerzeeshan@gmail.com"
if(userEmail) {
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}

/*
falsy values
fasle, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values 
"0", 'false', " ", [], {}, function(){}, 
*/

const arr = []
if(arr.length === 0){
    console.log("Array us empty");
}


const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}



// Nullish Coalescing Operator (??): null undefined
let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


// Terniaty Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80");
