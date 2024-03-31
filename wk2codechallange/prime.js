// function to take in numbers
function checkPrime(number){
// checks if number is less than 1 or 1 if true returns false

    if (number <= 1) return false;

    // for looop initialising the first number as 2 
    //the loop continues until i is equal to number
    for ( let i = 2 ; i < number ; i ++){

    /// checks if number is divisible by i if didisible then it means that
    /// the number is divisiible by other numbers unlike prime numbers
        if (number % i == 0 ){
            return false;
        }
    }
    // no divisors found the number is prime
    return true;
}
// filters the prime numbers from the array
function primeFinder(numbers){
    return numbers.filter(checkPrime);
}
//example
const ourArray = [1, 2,30,6,5,7]
const primeArray= primeFinder(ourArray)
console.log(primeArray);