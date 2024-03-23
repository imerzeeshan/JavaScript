// for loop

// for(let index = 0; index <= 10; index++) {
//     //const element = index;
//     if(index == 5) {
//         console.log("5 is best number");
//     }
//     console.log(index);
// }


for (let i = 1; i <=10; i++) {
   // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <=10; j++) {
        //console.log(`Inner loop value: ${j} and Outer loop ${i}`); 
        //console.log(i + ' * ' + j + ' = ' + i*j)
    }
}



let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}




for (let index = 1; index <= 20; index++) {
    if(index == 5){
        // console.log(`Detected ${index}`);
        break;
    }
    // console.log(`value of index is ${index}`);

};




for(let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected ${index}`);
        continue;
    }
    console.log(`value of index is ${index}`);

}