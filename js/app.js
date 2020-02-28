console.log("something is definitely happening");

//What is the difference between a parameter and an argument?
	// PARAMETER is the input into the function, which can change the behavior of the function
	// const functionName = (PARAMETER) => { some code that will work with the parameter }
	// ARGUMENT is when you call a function and tell it what the va;ue will be for its parameter, 
	// so giving the function an argument.  PASSING in an argument and CALLING a function
	// functionName(ARGUMENT)
//Within a function, what is the difference between return and console.log?
	// console log is more to help ourselves learn what will acutally happen with our code, so we can see our progress,
	//and make sure everythigs working coreclty
	// return is what WILL actually happen. it also ends the function.

// Palindromes

// const ifItIsPalindrome = (str) => { // set up the function
// 	const lowerstr = str.toLowerCase() // from MDN -- ](str.toLowerCase()); -- The toLowerCase() 
// 	//method returns the calling string value converted to lower case.
// 	const lenstr = lowerstr.length
// 	const lenMid = Math.floor(lenstr / 2) // need to iterate over broken string (divide by 2 breaks in half)
// 	for (let i = 0; i < lenMid; i++) {
// 		if (lowerstr[i] !== lowerstr[lenstr -1 -i ]) { // strick compairison for string's index [i] with strings length (minus 1)
// 			return false // it it doesnt, then return false
// 		} return true // but if it does, then yes.
// 	} 
// } 
// console.log(ifItIsPalindrome("racecar"))


// const sumArray = (array) => { [] }
// let sum = 10;
// for(let i = 0; i < sum; i++) {
// 	if(array[i]
// }
// console.log(sumArray);


// const sumArray = (add) => { [] }
// const sum = [10, 20, 30, 40] // sums to 100
// for(let i = 0; i < sum; i++) { // iterating over the numbers in the array??  want to make the loop continue looping (while adding 1 
// 	//eacht time until it gets to 100 (or whatever))
// 	if(sum < 100)
// }
// console.log(sumArray([1, 2, 3, 4, 5, 6]));


// Write a function sumArray that takes an array as an argument. The array should contain numbers. 
// The function should return the sum of the numbers in the array.
// Use a for loop within the function to iterate over the array and sum the contents.
// DO NOT use .reduce().
// As we showed you in class, use a variable such as:

// let sum = 0;
// that will accumulate value within the loop. Expected result:

// console.log(sumArray([1, 2, 3, 4, 5, 6]));
// => 21	


//for (initializer; exit-condition; final-expression) {
  // code to run
// }


// function sumArray(arrayNumbers) {
// 	let arrayNumbers = []
// }

// f//or(let i = 0; i < sumArray.length; i++) { // using a loop to run the code untl it runs the amount of elements in the array
// // 		if i 								// need to first find a way to add the numbers in the array to get a sum
// // 										// before that probably need to use the indeex, in a [adding each on index nu ber]
// // 										// can i use findindex?
// // 	}
// // 	console.log(arrayNumbers)
// // }
// // sumArray([2, 4, 6, 8]);






// Digit Sum
// Write a function sumDigits that accepts a number and returns the sum of its digits. If you happen to end up in 
// a situation where you might find it helpful to use the sumArray function you just wrote, then by all means....

// console.log(sumDigits(42));
// 🔴 Commit your work!
// Your commit message should read something like:
// "sum array completed"

// Prime Numbers
// A Prime number is an integer greater than 1 that is evenly divisible only by 1 and itself. If you want 
// to read more deeply about it, go here. To test whether a number is Prime, you only need to test as far as the 
// square root of that number. This is advisable for optimization and testing large numbers.

// Step One
// Write a function called checkPrime that will test whether a number is Prime. The function will return true 
// (Boolean) if Prime, false if not.

// const checkPrime = (prime)  => {
// 	for(let i = 0; i < Math.sqrt(prime); i++) {
// 		if
// 	}
// 	if(primeNumber %)
// }
// 	console.log(checkPrime);	
// Hint: Check every number up to the square root. To do this, try a for loop.




// Step Two
// Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. 
// For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97.

// This function should call the previous checkPrime function.

// 🔴 Commit your work!
// Your commit message should read something like:
// "prime numbers completed"

// Rock Paper Scissors
// Create the rock paper scissors game for the console! Rock paper scissors is a game of chance where two players 
// throw out one of the three options, rock, paper, or scissors. To determine who wins, use the following guidelines: 
// rock beats scissors, scissors beats paper, paper beats rock.

// Write a function called randomMove that returns a randomly chosen move (rock, paper, or scissors).
// Then create a function called rockPaperScissors that runs one round of the game. It should accept two arguments, 
// the computer's move and the user's move, and somehow compare the two to decide who the winner is and return who won.
// let computersMove = randomMove();
// => rock

// let usersMove = randomMove();
// => paper 

// rockPaperScissors(computersMove, usersMove);
// => computer chose rock
// => user chose paper
// => paper beats rock, user wins!
// Super bonuses for rock paper scissors
// Want to upgrade your mini rock paper scissors game? Consider the following!

// Try to make rock, paper, scissors, lizard, spock
// Instead of hardcoding the user input, let the user actually enter a choice with prompt().
// 🔴 Commit your work!
// Your commit message should read something like:
// "rock paper scissors completed"
































