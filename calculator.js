const add = (a,b) => a+b;
const subtract = (a,b) =>a-b;
const multiply = (a,b)=> a*b;
const divide = (a,b) => a/b;

let flagForDisplayClear = false;
let num1 = 0;
let num2 = 0;
let operator = ""

const display = document.querySelector(".display")
const numberButtons = document.querySelectorAll(".number")
const clearButton = document.querySelector("#clear")
const equals = document.querySelector("#equals")
const operatorButtons = document.querySelectorAll(".operator")

function clearDisplay(){
    display.textContent = "";
}

clearButton.addEventListener("click", () => {
    clearDisplay();
    flagForDisplayClear = false;}
)

numberButtons.forEach(button => {
    button.addEventListener("click",()=> {
        if (flagForDisplayClear) {
            display.textContent= ""
        }
        display.textContent += button.textContent
    }
    )    
})

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        num1 = parseInt(display.textContent);
        console.log(num1)
        flagForDisplayClear = true

    })
})
    
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

