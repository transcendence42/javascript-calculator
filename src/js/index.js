"use strict";
class parsedInput {
    constructor(operator, num1, num2) {
        this.operator = operator;
        this.num1 = num1;
        this.num2 = num2;
    }
}
function findOperator(str) {
    if (str.indexOf("/") != -1) {
        return "/";
    }
    else if (str.indexOf("X") != -1) {
        return "X";
    }
    else if (str.indexOf("-") != -1) {
        return "-";
    }
    else if (str.indexOf("+") != -1) {
        return "+";
    }
    else {
        return "none";
    }
}
function parseInput(str) {
    const total = document.getElementById("total");
    let prompt = total.innerHTML;
    let startWithMinus = false;
    if (prompt[0] === "-") {
        prompt = prompt.slice(1, prompt.length);
        startWithMinus = true;
    }
    const operator = findOperator(prompt);
    const nums = operator === "none" ? [prompt, "1"] : prompt.split(operator);
    return new parsedInput(operator, startWithMinus ? "-" + nums[0] : nums[0], nums[1]);
}
function calculate(num1, num2, operator) {
    switch (operator) {
        case "/":
            return String(Math.floor(num1 / num2));
        case "X":
            return String(num1 * num2);
        case "-":
            return String(num1 - num2);
        case "+":
            return String(num1 + num2);
        default:
            return String(num1);
    }
}
function isOperator(input) {
    switch (input) {
        case "/":
            return true;
        case "X":
            return true;
        case "-":
            return true;
        case "+":
            return true;
        default:
            return false;
    }
}
function checkInputValidation(input, str) {
    let newStr = str[0] === "-" ? str.slice(1, prompt.length) : str;
    let operator = findOperator(newStr);
    if (operator === "none" && newStr.length <= 2) {
        return true;
    }
    else if (operator === "none" && newStr.length === 3 && isOperator(input)) {
        return true;
    }
    else if (operator !== "none" &&
        newStr.split(operator)[1].length <= 2 && !isOperator(input)) {
        return true;
    }
    return false;
}
function showInput(str) {
    const prompt = document.getElementById("total");
    const oldText = prompt.innerHTML;
    if (prompt.dataset.type === "result") {
        console.log(str);
        prompt.innerHTML = str;
        prompt.setAttribute("data-type", "input");
    }
    else if (checkInputValidation(str, oldText)) {
        prompt.innerHTML = oldText + str;
    }
}
function showResult(str) {
    const prompt = document.getElementById("total");
    prompt.innerHTML = str;
    prompt.setAttribute("data-type", "result");
}
function setDigitsController() {
    const digits = document.getElementsByClassName("digits");
    digits[0].addEventListener("click", e => {
        showInput(e.target.innerHTML);
    });
}
function setOperationsController() {
    const operations = document.getElementsByClassName("operations");
    const total = document.getElementById("total");
    operations[0].addEventListener("click", e => {
        if (e.target.innerHTML === "=") {
            const input = parseInput(total.innerHTML);
            showResult(calculate(+input.num1, +input.num2, input.operator));
        }
        else {
            showInput(e.target.innerHTML);
        }
    });
}
function setModifierController() {
    const modifier = document.getElementsByClassName("modifier");
    modifier[0].addEventListener("click", e => {
        showResult("0");
    });
}
function setEventListner() {
    setDigitsController();
    setOperationsController();
    setModifierController();
}
function setDataSet() {
    const total = document.getElementById("total");
    total.setAttribute("data-type", "result");
}
function init() {
    setEventListner();
    setDataSet();
}
init();
