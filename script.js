let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operand");
let result = document.querySelector(".equal");
let clear = document.querySelector(".ac");
let dot = document.querySelector(".dot");
let del = document.querySelector(".del");
let percentage = document.querySelector(".percentage");

let operationText = document.querySelector(".operation");
operationText.textContent = "";
let resultText = document.querySelector(".result");
resultText.textContent = "";

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        operationText.textContent = operationText.textContent + number.textContent;
    })
})

dot.addEventListener("click", () => {
    let opString = operationText.textContent;
    array = opString.split(" ");
    let a = array[0];
    let op = array[1];
    let b = array[2];

    if (!b) {
        if (a.indexOf(".") === -1) {
            operationText.textContent = operationText.textContent + dot.textContent;
        }
    } else {
        if (b.indexOf(".") === -1) {
            operationText.textContent = operationText.textContent + dot.textContent;
        }
    }
})

percentage.addEventListener("click", () => {
    let opString = operationText.textContent;
    array = opString.split(" ");
    let a = array[0];
    let op = array[1];
    let b = array[2];
    if (!op) {
        a = a/100;
        operationText.textContent = a;
    } else if (op == "+" || op == "-"){
        let c = (b*a)/100;
        operationText.textContent = a + " " + op + " " + c + " (" + b + "%)";
    } else {
        b = b/100;
        operationText.textContent = a + " " + op + " " + b;
    }
})

operations.forEach((operation) => {
    operation.addEventListener("click", () => {
        if (operationText.textContent.indexOf("+") != -1 ||
            operationText.textContent.indexOf("-") != -1 ||
            operationText.textContent.indexOf("x") != -1 ||
            operationText.textContent.indexOf("/") != -1
            ) 
        {
            resultText.textContent = Math.floor(operationx()*1000)/1000;
            operationText.textContent = resultText.textContent + " " + operation.textContent + " ";
        } else {
            operationText.textContent = operationText.textContent + " " + operation.textContent + " ";
        }
    })
})

result.addEventListener("click", () => {
    resultText.textContent = Math.floor(operationx()*1000)/1000;
})

clear.addEventListener("click", () => {
    operationText.textContent = "";
    resultText.textContent = "";
})

del.addEventListener("click", () => {
    operationText.textContent = operationText.textContent.slice(0,operationText.textContent.length - 1);
})

function operationx () {
    let opString = operationText.textContent;
    array = opString.split(" ");
    let a = array[0];
    let op = array[1];
    let b = array[2];

    if ((op == "x" || op == "/") && b == "") {
        b = 1
    }

    if(op == "/" && b == 0) {
        alert ("please don't")
        operationText.textContent = ""
        return 0
    }
    
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

window.addEventListener("keydown", (e) => {
    if (!isNaN(e.key) && e.key != " ") {
        document.getElementById(`num${e.key}`).click();
    } else if (e.key === "+") {
        document.getElementById(`key${e.key}`).click();
    } else if (e.key === "-") {
        document.getElementById(`key${e.key}`).click();
    } else if (e.key === "*") {
        document.getElementById(`key${e.key}`).click();
    } else if (e.key === "/") {
        document.getElementById(`key${e.key}`).click();
    } else if (e.key === "Enter") {
        document.getElementById(`key${e.key}`).click();
    } else if (e.key === "Backspace") {
        document.getElementById(`key${e.key}`).click();
    } else if (e.key === "%") {
        document.getElementById(`key${e.key}`).click();
    } else if (e.key === " ") {
        document.getElementById(`key${e.key}`).click();
    }
})