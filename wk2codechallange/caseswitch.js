//allow the user to input a sentence or word 

const readline= require("readline");
const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout,
})

// our arrow function takes a sentence in the parameter requred to be a stirng
const switchCase = (sentence) => {
    //initialises swapped sentence as an empty string before iterating through each character of the inputed sentence
    let swapSentence = ''
    // for loop declaring a new variable that will hold the character of the sentence during iteration of the loop
    for (let character of sentence){
// checks if the character is already in uppercase
   if (character === character.toUpperCase()){
    // if the string is in uppercase thenit converts it to lowercase 
            swapSentence += character.toLowerCase();
        }
    // else the character is transfomed into uppercase if in lowercase
        else {

            swapSentence += character.toUpperCase();
        }
    }
    // returns the swapped sentence
    return swapSentence
   
}

 

// this part allows the code to  take the input from the user and allows it to run  


rl.question("Type any sentence with different characters in uppercase or lowercase!!!" ,(sentence)=>{

    const swapSentence =switchCase(sentence);

// allows the user to see the output
    console.log(`the Switched string is: ${swapSentence}`);
    rl.close();
});
