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



// sumArray

let sum = 0;
function sumArray(anArray) {
	for(let i = 0; i < anArray.length; i++) {
		sum += anArray[i]
	}
	return sum
}
	console.log(sumArray([1, 4, 6, 80]));

// digitSum

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


const checkPrime = (num) => {
	if(num === 1) {
		return false
	} else if(num === 2) {
		return true
	} else {
		for(let i = 2; i < num; i++) {
			if(num % i === 0) { //
				return false
			}
		}
	} return true
}


console.log(checkPrime(3)); // undefined's
console.log(checkPrime(7));	// now saying true for all
console.log(checkPrime(81));
console.log(checkPrime(9));



const printPrime = (num) => {
	for(let i = 2; i < num; i++) {
		if(checkPrime(i) !== false) {
			console.log(i);
		}
	}
}
printPrime(97)

// // Rock Paper Scissors

// 1. Write a function called `randomMove` that returns a randomly chosen move 
// (rock, paper, or scissors). 
// 1. Then create a function called `rockPaperScissors` 
// that runs one round of the game. It should accept two arguments, 
// the computer's move and the user's move, and somehow compare the two to
//  decide who the winner is and return who won. 


const rps = ['rock', 'paper', 'scissors']
function randomMove() {
	return rps[Math.floor(Math.random() * rps.length)]
	}

	console.log(randomMove()) // works

function rockPaperScissors() {
	let computerChoice = randomMove()
	let userChoice = randomMove()
	if(userChoice === 'rock' && computerChoice == 'scissors') {
		return ("you win!") // refreshed a few times, cl'd rockPaperScissors() and it'll get correct return randomly (checking others)
	} else if(userChoice === 'paper' && computerChoice == 'scissors') {
		return ("computer wins :(") // seems to be working
	} else if(userChoice === 'scissors' && computerChoice == 'scissors') {
		return ("it's a tie... meh")
	} else if(userChoice === 'rock' && computerChoice == 'rock') {
		return ("it's a tie... meh")
	} else if (userChoice === 'paper' && computerChoice == 'rock') {
		return ("you win!")
	} else if (userChoice === 'scissors' && computerChoice == 'rock') {
		return ("computer wins :(")
	} else if (userChoice === 'scissors' && computerChoice == 'paper') {
		return ("you wins!")
	} else if (userChoice === 'rock' && computerChoice == 'paper') {
		return ("computer wins :(")
	} else if (userChoice === 'paper' && computerChoice == 'paper') {
		return ("it's a tie... meh")
	}

// cl'd rockPaperScissors() a bunch of times -- not getting any 'undefined's!!

	console.log("this is computer's random throw");
	console.log(randomMove(rockPaperScissors.computerChoice)); // works
	console.log("this is user's random throw");
	console.log(randomMove(rockPaperScissors.userChoice));	
}































