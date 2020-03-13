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

// const palindrome = (str)  => {
// 	let re = /[^A-Za-z0-9]/g;
// 	str = str.toLowerCase().replace(re, ''); // replaces all the characters in the string with ONLY LOWERCASE LETTERS 
// 	let len = str.length;					
// 	for(let i = 0; i < len/2; i++) {	
// 		if(str[i] !== str[len - 1 - i]) {	
// 			console.log("false");
// 		}
// 	}
// 	console.log("true"); // will print false a few times before true ?? not sure why -- if it's not a palindrom iun the () below
// }
// palindrome("racecar"); // when this is NOT a palindrom, get's 3 falses's in the cl then a "true??"

function palindrome(str) {

  const lowercased_string= str.toLowerCase();

  const split_string = lowercased_string.split(" ");

  const join_string = split_string.join("");


  const  split_string_2 = join_string.split("");

  const reverse_string = split_string_2.reverse();

  const join_string_2 = reverse_string.join("");

  if(join_string == join_string_2) {

    return true;

  } else {

    return false;
  }
 
}




console.log(palindrome("Yrgserger"));
console.log(palindrome("racecar"));
console.log(palindrome("WOW"));
console.log(palindrome("something"));



// Try to keep your comments in line with your code as opposed to off to the side, 
// this will help you read your code more clearly and see what each line is doing. 
// Let's take a look at this problem together later to see if I can help you wrap your mind around it.



// sumArray

let sum = 0;
function sumArray(anArray) {
	for(let i = 0; i < anArray.length; i++) {
		sum += anArray[i]
	}
	return sum
}
	console.log(sumArray([1, 4, 6, 80]));


// // Digit Sum
// // Write a function sumDigits that accepts a number and returns the sum of its digits. If you happen to end up in 
// // a situation where you might find it helpful to use the sumArray function you just wrote, then by all means....

const digitSum = (num) => {
	let nums = [],
	numStr = num.toString()
	for(let i = 0; i < numStr.length; i++) {
		let ints = parseInt(numStr[i], 9)
		nums.push(ints)
	}
	return sumArray(nums)
}

	console.log(digitSum(132)); // adding the sumarry and digit array intergers
	


// // NEED TO.STRING() mdn
// // NEED PARSEINT() mdn -- parses a string argument and returns an integer


// const sumDigits = (str) => {
// 	const digitString = str.toString();  // will turn the inout into a string (so we can add their values)
// 	let digitArray = []; // need array (empty now, but will take the input we give it)
// 	for(let i = 0; i < digitString.length; i++) { // same loop as above (prettymuch)
// 		digitArray.push(digitString[i])
// 	}
// 		return sumArray(digitArray) // prints NAN's .. now printing a 18324 (which is 18 from sumArray then 324 from sumDigits
// }
// console.log(sumDigits(324));

// // You'll need to turn the strings back into numbers when they're 
// // in the array so that you can use sumArray to add them together. Check out parseInt-- mdn

// //I can't figure this OUT!!  Get with Timm/Deja/Fatima/Nate


// // Prime Numbers
// // A Prime number is an integer greater than 1 that is evenly divisible only by 1 and itself. If you want 
// // to read more deeply about it, go here. To test whether a number is Prime, you only need to test as far as the 
// // square root of that number. This is advisable for optimization and testing large numbers.

// // Step One
// // Write a function called checkPrime that will test whether a number is Prime. The function will return true 
// // (Boolean) if Prime, false if not.
// // Hint: Check every number up to the square root. To do this, try a for loop.

// const checkPrime = (test) => {
// 	let primeNums = Math.sqrt(test);
// 	for(let i = 1; i <= test; i++) {
// 		if(test[i] === 0) {
// 			return false
// 		} else {
// 			return true
// 		}
// 	}
// }
// console.log(checkPrime(81)); // undefined's
// console.log(checkPrime(3));	// now saying true for all
// console.log(checkPrime(7));
// console.log(checkPrime(9));


// // Getting all trues for this, I wonder if that has something to do with your declaring a variable within 
// // the function but not using it for anything? Take a look at that, chat with one of us if you need more help.

// // const printPrimes = (print) => {
// // 	for(let i = 0; i <= print; i++) {
// // 		if checkPrime[i] = true
// // 	} return
// // }
// // printPrimes(97)
// // console.log(printPrimes(97));

// //I can't figure this OUT!!  Get with Timm/Deja/Fatima/Nate


// // Step Two
// // Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. 
// // For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97.

// // This function should call the previous checkPrime function.


// const randomMove = () => {
// 	const rps = ["rock", "paper", "scissors"]
// 	const play = Math.floor(Math.random())
// }
// 	console.log(randomMove()) // printing undefined

// // Rock Paper Scissors

// // Write a function called randomMove that returns a randomly chosen move (rock, paper, or scissors). -- ...?

// // Then create a function called rockPaperScissors that runs one round of the game. It should accept two arguments, 
// // the computer's move and the user's move, and somehow compare the two to decide who the winner is and return who won.

// const rockPaperScissors = (compsMove, playersMove) => {
// 	console.log(compsMove);
// 	console.log(playersMove);
// 	if(compMove === "rock") {
// 		if(playersMove === "rock") {
// 			console.log("draw");
// 		}
// 		if(playersMove === "paper") {
// 			console.log("player wins");
// 		}
// 		if(playersMove === "scissors")
// 			console.log("computer wins");
// 	}
// 	if(compsMove === "paper") {
// 		if(playersMove === "rock") {
// 			console.log("computer wins");
// 		}
// 		if(playersMove === "paper") {
// 			console.log("draw");
// 		}
// 		if(playersMove === "scissors")
// 			console.log("player wins");	
// 	}
// 	if(compsMove === "scissors") {
// 		if(playersMove === "rock") {
// 			console.log("player wins");
// 		}
// 		if(playersMove === "paper") {
// 			console.log("comp wins");
// 		}
// 		if(playersMove === "scissors")
// 			console.log("draw");
// 	}

// }
// let compsMove = randomMove() // this isn't working because the above isn't working.
// let playersMove = "paper"
// console.log(rockPaperScissors);
// rockPaperScissors(compsMove, playersMove)

// There's a lot to unpack with what's going on in this one, 
// let's sit down and look at it together with all the others and try to get this thing complete.

// get with the TA's on this one too
// reminder to discss wth TA how im doing this (with the functions lesson open, my notes open, and re-reading, but not able to
// apply the concetps from the lesson to the labs / HW's)


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
































