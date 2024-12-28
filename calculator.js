const add = (a,b) => a+b;
const subtract = (a,b) =>a-b;
const multiply = (a,b)=> a*b;
const divide = (a,b) => b===0 ? "No zero division!":a/b;

let flagForDisplayClear = false;
let operatorPresent = false;
let equalDisable = false;
let num1 = 0;
let num2 = 0;
let operator = ""
let operators= [
    {
        operator:"+", 
        id:"plus",
    },
    {
        operator:"-", 
        id:"minus",
    },
    {
        operator:"/", 
        id:"divide",
    },
    {
        operator:"*", 
        id:"multiply",
    }
];

const display = document.querySelector(".display")
const numberButtons = document.querySelectorAll(".number")
const clearButton = document.querySelector("#clear")
const equals = document.querySelector("#equals")
const operatorButtons = document.querySelectorAll(".operator")

function formatResult (result) {
    let digits = result.toString().length;
    if (digits>12) {
        return result.toPrecision(11);
    }else { return result
}}

function clearDisplay(){
    display.textContent = "";
    flagForDisplayClear = false;
    operatorPresent = false;
    equalDisable = false;
    num1 = 0;
    num2 = 0;
    operator= "";
}

function operate(operator,num1,num2){
    if (operator === "+") {
        return formatResult(add(num1,num2))
    }else if (operator === "-") {
        return formatResult(subtract(num1,num2))
    }else if (operator === "*") {
        return formatResult(multiply(num1,num2))
    }else if (operator === "/") {
        return formatResult(divide(num1,num2))
}}

equals.addEventListener("click", () => {
    if(equalDisable) return;
        
    num2 = parseInt(display.textContent)
    console.log(num2)
    if (num2 === 0) {
        display.textContent = "No 0 division"
    }else {
    display.textContent = operate(operator,num1,num2)};
    num1 = 0;
    num2 = 0;
    operator = "";
    flagForDisplayClear= true;
    operatorPresent = false;
    equalDisable = true;
})

clearButton.addEventListener("click", () => {
    clearDisplay();}
)

numberButtons.forEach(button => {
    button.addEventListener("click",()=> {
        if (flagForDisplayClear) {
            display.textContent= ""
            equalDisable = false;
            flagForDisplayClear = false;
        }
        display.textContent += button.textContent
    }
    )    
})

operatorButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        if (operatorPresent) {
            num2 = parseInt(display.textContent)
            num1 = operate(operator,num1,num2)
            display.textContent = num1
        } else {
            num1 = parseInt(display.textContent);
        }
        let operatorObj  = operators.find(obj => obj.id === button.id)
        operator = operatorObj.operator
        flagForDisplayClear = true;
        operatorPresent = true;
        })
})
    


