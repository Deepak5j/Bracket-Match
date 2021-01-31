
# Report
This report refers to `main.js` file present at the root of this repository.

## isSymbol(symbol) 
#### Function introduction
1. It take `symbol` as input 
2. It return `true` if input is the symbol otherwise it return `false`.
#### Operation:
1. **[Line:27]** condition checking, comparison and return statement cost O(1)
2. **[Line:30]** return statement cost **O(1)**

Overall time complexity = **O(1)**
Overall space copleaxcity = **O(1)**

## BracketStack() 
#### Function introduction:
1. It's a stack function that maintain stack item count.
2. And it return open bracket count.
3. It have `push()` function which increases the count by one.
4. It have `pop()` function which decreases the count by one.
#### Operation:
1. **[Line:2]** declaration statement cost **O(1)**
2. **[Line:3]** function call to `isEmpty()`. It compare and return costs **O(1)**
3. **[Line:6]** function call `push()`. Increment statement cost **O(1)**
4. **[Line:12]** function call `pop()`. It call isEmpty() as condition checking statement and decrement statement inside the body both costs **O(1)**

Overall time complexity = **O(1)**
Overall space copleaxcity = **O(1)**

## doBracketsMatch(inputString, openingSymbol, closingSymbol)
#### Function introduction:
1. This function first check the open and closing symbol is they are symbol or not. And save it as reference for opening and closing symbol for later use.
2. Then it loops over the `inputString` and pick each value and save it in `value` variable. 
3. Then it check if `value` is opening symbol or closing symbol.
4. If it's opening symbol then it call `push()` function which increases `openBracketsCount` variable by 1.
5. And if it's closing symbol then it call pop() function which decreases `openBracketsCount` varable by 1. 
6. And under condition for closing symbol it also call function `isEmpty()` to check if expression is left or not. If expression is finished then it return `false`. Otherwise it call `pop()` function.
7. After loop ends it call and reutn `isEmpty()` function.
#### Operation:
1. **[Line:39]** Declares function object `stack` cost **O(1)**
2. **[Line:40]** Declares `isOpeningSymbol` variable and calling `isSymbol(openingSymbol)` function cost **O(1)**
3. **[Line:41]** Declares `isClosingSymbol` variable and calling `isSymbol(closingSymbol))` function cost **O(1)**
4. **[Line:42]** Loop from 0 to `inputString` length with +1 increment cost **O(n)**
5. **[Line:43]** Variable `value` declartion cost **O(1)**
6. **[Line:44]** Condtion checking `isOpeningSymbol(value)` and calling push() on `stack` object cost **O(1)**
7. **[Line:46]** Condition checking `isClosingSymbol(value)` **cost O(1)**
8. **[Line:47]** Condition checking `stack.isEmpty()` and return statement cost **O(1)**
9. **[Line:50]** Function call `stack.pop()` **cost O(1)**
10. **[Line:52]** return statement `stack.isEmpty()` **cost O(1)**

Overall time complexity = **O(n)**
Overall space complexity = **O(1)**

## Over all complexity for main.js
### Time complexity
 - max of ( O(1), O(1), O(n) )
 - **O(n)**
### Space Complexity
- max of ( O(1), O(1), O(1) ) 
- **O(1)**

## Running Online
* Click this url [Brackets Match](https://deepak5j.github.io/Bracket-Match)
## Requirements
* **Node Js** is required for running **CLI mode.**
* Web browser reuired for running **GUI mode.**
## Installation and Running CLI
* Download this repository
* `cd` to the downloaded repository.
* Run main.js using command `node main.js` 

## Installation and Running GUI
* Download this repository
* Open downloaded repository.
* Double click or open`index.html` file with web browser.