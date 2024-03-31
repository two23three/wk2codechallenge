const readline= require("readline");
const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout,
})
//make an array with the first and last number inputed 
const makeNewArray = (firstNumber, lastNumber) =>{
// make an empty array
   let brandNewArray = [];

// here we figure out if we are moving forward or backward
   const add = firstNumber <= lastNumber ? 1 : -1
//introducing a for loop that goes through the the numbers between first number and last number
// the condition has been determined by the tenary equation if first condition is true then x is<= 
// to last no else x >= lastno
   for (let x = firstNumber; firstNumber <= lastNumber ? x <= lastNumber : x>= lastNumber; x += add) {
//each new value of x is pushed into the array brandNewArray
    brandNewArray.push(x);
   }
 return brandNewArray;
}
//allos the user to input the values
rl.question("Enter first number", (firstNumber)=>{
 rl.question("Enter last number", (lastNumber)=>{
    const result = makeNewArray(parseInt(firstNumber),parseInt(lastNumber))
    console.log("new array", result);
    rl.close();
 
})

})