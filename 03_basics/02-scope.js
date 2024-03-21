let a = 10 
if(true) {
    let a = 10
    const b = 20
    console.log("INNER: ",a);
}


function one(){
    const useername = "Zeeshan"

    function two(){
        const website = "youtube"
        console.log(useername);
    }
    // console.log(website);
    two()
}
one()


if(true){
    const username = "Zeeshan"
    if(username === "Zeeshan"){
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ***************** interesting ***************

function addone(num)
{
    return num + 1;
}
addone(5)

addTwo(5)
const addTwo = function(num){
    return num+2
}