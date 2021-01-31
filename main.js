function BracketStack () {
	let openBracketsCount = 0
	this.isEmpty = function () {
		return openBracketsCount === 0
	}
	this.push = function () {
	openBracketsCount++
	}
	/**
	* @throws If stack is empty
	*/	
	this.pop = function () {
	if ( this.isEmpty()) throw new Error ( "Cannot pop empty stack" )
	openBracketsCount--
	}
}

/**
* @param {string} symbol
* @returns A function that checks if a given value is the symbol
*/
function isSymbol (symbol) {
	/**
	* @param {string} value
	* @returns {boolean}
	*/
	function check (value) {
		return symbol === value
	}
	return check
}
/**
* Checks if a pair of brackets match
* @param {string} inputString
* @param {string} openingSymbol
* @param {string} closingSymbol
*/
function doBracketsMatch (inputString, openingSymbol, closingSymbol) {
	let stack = new BracketStack()
	let isOpeningSymbol = isSymbol(openingSymbol)
	let isClosingSymbol = isSymbol(closingSymbol)
	for ( let i = 0 ; i < inputString.length; i++) {
		let value = inputString[i]
		if (isOpeningSymbol(value)) 
			stack.push()
		if (isClosingSymbol(value))
			if (stack.isEmpty()) 
				return false
			else 
				stack.pop()
	}
	return stack.isEmpty()
}

function stub() {
	let exp = document.getElementById("input1").value;
	let sy1 = document.getElementById("input2").value;
	let sy2 = document.getElementById("input3").value;
	
	if(exp !== "")	{
		let res = doBracketsMatch(exp, sy1, sy2);
		document.getElementById("output").value = res;
	}
	else {
		alert("Enter Bracket Expression First!!");
	}			
}

//testing code

var exp1 = "3 * ( 4  + (7 - 1) / 10 ) * 2)";
var res1 = doBracketsMatch(exp1, "(", ")");

var exp2 = "3 * ( 4  + (7 - 1) / 10 ) * 2";
var res2 = doBracketsMatch(exp2, "(", ")");

console.log("Input:", exp1, "output:", res1);
console.log("Input:", exp2, "output:", res2); 
