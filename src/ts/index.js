var parsedInput = /** @class */ (function () {
    function parsedInput(operator, num1, num2) {
        this.operator = operator;
        this.num1 = num1;
        this.num2 = num2;
    }
    return parsedInput;
}());
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
    var prompt = document.getElementById("total").innerHTML;
    var startWithMinus = false;
    if (prompt[0] === "-") {
        prompt = prompt.slice(1, prompt.length);
        startWithMinus = true;
    }
    var operator = findOperator(prompt);
    var nums = operator === "none" ? [prompt, "1"] : prompt.split(operator);
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
            return "";
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
    var newStr = str;
    if (str[0] === "-") {
        newStr = str.slice(1, prompt.length);
    }
    var operator = findOperator(newStr);
    if (operator === "none" && newStr.length == 3 && !isOperator(input)) {
        console.log("case1");
        return false;
    }
    else if (operator === "none" && newStr.length > 3) {
        console.log("case1");
        return false;
    }
    else if (operator !== "none" &&
        newStr.split(operator).filter(function (x) { return x.length > 3; }).length &&
        input != "=") {
        console.log("case2");
        return false;
    }
    return true;
}
function showInput(str) {
    var prompt = document.getElementById("total");
    var oldText = prompt.innerHTML;
    if (checkInputValidation(str, oldText)) {
        if (prompt.dataset.type === "result") {
            prompt.innerHTML = str;
            prompt.setAttribute("data-type", "input");
        }
        else {
            prompt.innerHTML = oldText + str;
        }
    }
    // if (prompt.dataset.type === "result") {
    //   prompt.innerHTML = str;
    //   prompt.setAttribute("data-type", "input");
    // } else if (checkInputValidation(str, oldText)) {
    //   prompt.innerHTML = oldText + str;
    // }
}
function showResult(str) {
    var prompt = document.getElementById("total");
    prompt.innerHTML = str;
    prompt.setAttribute("data-type", "result");
}
function setDigitsController() {
    var digits = document.getElementsByClassName("digits");
    digits[0].addEventListener("click", function (e) {
        showInput(e.target.innerHTML);
    });
}
function setOperationsController() {
    var operations = document.getElementsByClassName("operations");
    var total = document.getElementById("total");
    operations[0].addEventListener("click", function (e) {
        if (e.target.innerHTML === "=") {
            var input = parseInput(total.innerHTML);
            showResult(calculate(+input.num1, +input.num2, input.operator));
        }
        else {
            if (total.dataset.type === "result") {
                total.dataset.type = "input";
            }
            showInput(e.target.innerHTML);
        }
    });
}
function setModifierController() {
    var modifier = document.getElementsByClassName("modifier");
    modifier[0].addEventListener("click", function (e) {
        showResult("0");
    });
}
function setEventListner() {
    setDigitsController();
    setOperationsController();
    setModifierController();
}
function setDataSet() {
    document.getElementById("total").setAttribute("data-type", "result");
}
function init() {
    setEventListner();
    setDataSet();
}
init();
