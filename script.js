let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operand");
let result = document.querySelector(".equal");
let clear = document.querySelector(".ac");

let operationText = document.querySelector(".operation");
operationText.textContent = "";
let resultText = document.querySelector(".result");
resultText.textContent = "";

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        operationText.textContent = operationText.textContent + number.textContent;
    })
})

operations.forEach((operation) => {
    operation.addEventListener("click", () => {
        operationText.textContent = operationText.textContent + " " + operation.textContent + " ";
    })
})

result.addEventListener("click", () => {
    let opString = operationText.textContent;
    array = opString.split(" ");
    let num1 = array[0];
    let op = array[1];
    let num2 = array[2];
    resultText.textContent = operation (num1, num2, op);
})

clear.addEventListener("click", () => {
    operationText.textContent = "";
    resultText.textContent = "";
})

function operation (a, b, op) {
    console.log(op);
    if (op == "x") {
        return a*b;
    } else if (op == "/") {
        return a/b;
    } else if (op == "+") {
        return (+a)+(+b);
    } else if (op == "-") {
        return a-b;
    }
}