const accountId = 1234
let accountEmail = "imerzeeshan@gamil.com"
var accountPassword = "1233456"
/* 
Prefer not to use "var" baecause of issue in block scope and functional scope
*/
accountCity = "Samastipur"
let accountState;
// accountId = 123

console.log(accountId);

accountEmail = "zeeshan2001md0@gamil.com"
accountPassword = "21211212121"
accountCity = "Darbhanga"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])