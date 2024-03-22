// if 

// const temperatur = 41
// if(temperatur <= 50) {
//     console.log("Temperature less than 50");
// }
// else{
//     console.log("Temperatur is greater than 50");
// }


// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User Power is: ${power}`);
// }
// console.log(`User Power is: ${power}`);



// const balance = 500
// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750)
// {
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log("Allow to buy Courses");
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in:");
}