//Immediately Ivoked Function Expressions (IIFE)


(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED TWO`);
})();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Zeeshan');