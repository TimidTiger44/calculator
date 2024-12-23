const add = (a,b) => a+b;
const subtract = (a,b) =>a-b;
const multiply = (a,b)=> a*b;
const divide = (a,b) => a/b;

let firstNumber;
let secontNumber;
let operator;
// console.log(add(1,2));
// console.log(subtract(2,1));
// console.log(multiply(1,2));
// console.log(divide(2,1));
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