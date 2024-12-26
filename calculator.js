const add = (a,b) => a+b;
const subtract = (a,b) =>a-b;
const multiply = (a,b)=> a*b;
const divide = (a,b) => a/b;

let flagForDisplayClear = false;
let operatorPresent = false;
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

function clearDisplay(){
    display.textContent = "";
    flagForDisplayClear = false;
    operatorPresent = false;
    num1 = 0;
    num2 = 0;
    operator= "";
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

equals.addEventListener("click", () => {
    display.textContent = operate(operator,num1,num2);
    num1 = 0;
    num2 = 0;
    operator = "";
    flagForDisplayClear= false;
    operatorPresent = false;

})

clearButton.addEventListener("click", () => {
    clearDisplay();}
)

numberButtons.forEach(button => {
    button.addEventListener("click",()=> {
        if (flagForDisplayClear) {
            display.textContent= ""
            flagForDisplayClear = false
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
            // let id = event.target.getAttribute('id')
            let operatorObj  = operators.find(obj => obj.id === button.id)
            // console.log(operatorObj)
            operator = operatorObj.operator
            // console.log(operator)
        } else {

        num1 = parseInt(display.textContent);
        console.log(num1);
        flagForDisplayClear = true;
        operatorPresent = true;

}})
})
    


