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

// // function palindrome(str) { 
//   console.log(palindrome);
// }
// palindrome();

// const palindrome = (str) => {
// 	conastif (input.length > 10) { //pro tip -- strings also have a .length
// 		console.log("input length is gt 10");
// 	} else {
// 		console.log("input length is not gt 10");
// 	}
// }
// checkInputLength("Horse")
// checkInputLength("Horse drawn carriage")

// why can't I use the above to make this work???

const palindrome = (str)  => {
	let re = /[^A-Za-z0-9]/g; // regular expression that removes // basically this is remvoing anything that passes thorugh the loop
								// that doesn't match (all non-lowercase and numerical characters ). removes unwanted characters 
								// but how would i be supposed to know that? wihtouth looking it up?
								// also need to make all the characters in the string lowercase
	str = str.toLowerCase().replace(re, ''); // replaces all the characters in the string with ONLY LOWERCASE LETTERS 
											// (so it's not reading
											// periodds or spaces, etc.) AND 
											// THEN it reverses the order of those characters (so we cna in the next steps check if it's 
											// a true palindrom

	let len = str.length;					// checking the length in teh string (for eyeball -- its 7)
	for(let i = 0; i < len/2; i++) {		// a for loop thats going to -- As long as the characters from each part match, 
											//the FOR loop will go on
   											// When the characters don't match anymore, false is returned and we exit the FOR loop
											// i starts at 0, then goes up by 1 until it gets to half the amopunt of characters in "racecar"
											// so the first iteration is going to be "i=0," then "is i less than str.length (which is 7 for racecar"
											// the answer to that is yes, then, "then we add 1 to increment (i++)"
		if(str[i] !== str[len - 1 - i]) {	// now -- the string length (len) minus 1 ( - 1) then minus i (-i) which is 0 in the firsd iteration
											// so basically -- index 0 = "r" (first index, first character)
											// then why does str[15 - 1 - 0] also mean "r"?  ; because it's saying
											// r ==! r
			console.log("false");
		}
	}
	console.log("true"); // will print false a few times before true ?? not sure why -- if it's not a palindrom iun the () below
}
palindrome("racecar"); // when this is NOT a palindrom, get's 3 falses's in the cl then a "true??"

// sumArray

let sum = 0;
function sumArray(anArray) {
	for(let i = 0; i < anArray.length; i++) {
		sum += anArray[i]
	}
	return sum
}
	console.log(sumArray([1, 4, 6, 7]));


// Digit Sum
// Write a function sumDigits that accepts a number and returns the sum of its digits. If you happen to end up in 
// a situation where you might find it helpful to use the sumArray function you just wrote, then by all means....

// NEED TO.STRING() mdn
// NEED PARSEINT() mdn -- parses a string argument and returns an integer


const sumDigits = (str) => {
	const digitString = str.toString();  // will turn the inout into a string (so we can add their values)
	let digitArray = []; // need array (empty now, but will take the input we give it)
	for(let i = 0; i < digitString.length; i++) { // same loop as above (prettymuch)
		digitArray.push(digitString[i])
	}
		return sumArray(digitArray) // prints NAN's .. now printing a 18324 (which is 18 from sumArray then 324 from sumDigits
}
console.log(sumDigits(324));

//I can't figure this OUT!!  Get with Timm/Deja/Fatima/Nate


// Prime Numbers
// A Prime number is an integer greater than 1 that is evenly divisible only by 1 and itself. If you want 
// to read more deeply about it, go here. To test whether a number is Prime, you only need to test as far as the 
// square root of that number. This is advisable for optimization and testing large numbers.

// Step One
// Write a function called checkPrime that will test whether a number is Prime. The function will return true 
// (Boolean) if Prime, false if not.
// Hint: Check every number up to the square root. To do this, try a for loop.

const checkPrime = (test) => {
	let primeNums = Math.sqrt(test);
	for(let i = 1; i <= test; i++) {
		if(test[i] === 0) {
			return false
		} else {
			return true
		}
	}
}
console.log(checkPrime(81)); // undefined's
console.log(checkPrime(3));	// now saying true for all
console.log(checkPrime(7));
console.log(checkPrime(9));


const printPrimes = (print) => {
	for(let i = 0; i <= print; i++) {
		if checkPrime[i] = true
	} return 
}
printPrimes(97)
console.log(printPrimes(97));

//I can't figure this OUT!!  Get with Timm/Deja/Fatima/Nate


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
































