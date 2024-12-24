const add = (a,b) => a+b;
const subtract = (a,b) =>a-b;
const multiply = (a,b)=> a*b;
const divide = (a,b) => a/b;
const display = document.querySelector(".display")
const calcButtons = document.querySelectorAll(".button")
const clearButton = document.querySelector("#clear")

function clearDisplay(){
    display.textContent = ""
}

clearButton.addEventListener("click", () => {
    clearDisplay();}
)

function addToDisplay(number){
    
}
function operate(operator,num1,num2){
    if (operator === "+") {
        return add(num1,num2)
    }else if (operator === "-") {
        return subtract(num1,num2)
    }else if (operator === "*") {
        return multiply(num1,num2)
    }else if (operator === "/") {
        return divide(num1,num2)}
}

