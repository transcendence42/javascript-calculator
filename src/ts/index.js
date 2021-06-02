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
    var newStr = str[0] === "-" ? str.slice(1, prompt.length) : str;
    var operator = findOperator(newStr);
    // if (operator === "none" && newStr.length == 3 && !isOperator(input)) {
    //   return false;
    // } else if (operator === "none" && newStr.length > 3) {
    //   return false;
    // } else if (
    //   operator !== "none" &&
    //   newStr.split(operator)[1].length >= 3 &&
    //   input != "="
    // ) {
    //   return false;
    // }
    // return true;
    if (operator === "none" && newStr.length <= 2) {
        return true;
    }
    else if (operator === "none" && newStr.length === 3 && isOperator(input)) {
        return true;
    }
    else if (operator !== "none" && (newStr.split(operator)[1].length <= 2 && !isOperator(input))) {
        return true;
    }
    return false;
}
function showInput(str) {
    var prompt = document.getElementById("total");
    var oldText = prompt.innerHTML;
    if (prompt.dataset.type === "result") {
        prompt.innerHTML = str;
        prompt.setAttribute("data-type", "input");
    }
    else if (checkInputValidation(str, oldText)) {
        prompt.innerHTML = oldText + str;
    }
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
