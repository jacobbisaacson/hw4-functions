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

const ifItIsPalindrome = (str) => { // set up the funk
	const lowerstr = str.toLowerCase() // from MDN -- ](str.toLowerCase()); -- The toLowerCase() 
	//method returns the calling string value converted to lower case.
	const lenstr = lowerstr.length
	const lenMid = Math.floor(lenstr / 2) // need to iterate over broken string (divide by 2 breaks in half)
	for (let i = 0; i < lenMid; i++) {
		if (lowerstr[i] !== lowerstr[lenstr -1 -i ]) { // strick compairison for string's index [i] with strings length (minus 1)
			return false // it it doesnt, then return false
		} return true // but if it does, then yes.
	} 
} 
console.log(ifItIsPalindrome("racecar"))