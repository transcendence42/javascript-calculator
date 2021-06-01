function showClickedButton(str) {
    var prompt = document.getElementById("total").innerHTML;
    console.log(str);
    if (prompt === "0") {
        showResult(str);
    }
    else {
        showResult(prompt + str);
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
    var prompt = document.getElementById("total").innerHTML;
    var startWithMinus = false;
    if (prompt[0] === '-') {
        prompt = prompt.slice(1, prompt.length);
        startWithMinus = true;
    }
    var operator = findOperator(prompt);
    var num1;
    var num2;
    if (operator !== "none") {
        var nums = prompt.split(operator);
        num1 = startWithMinus ? '-' + nums[0] : nums[0];
        num2 = nums[1];
    }
    else {
        num1 = prompt;
        num2 = "1";
        operator = "X";
    }
    return {
        num1: num1,
        num2: num2,
        operator: operator
    };
}
function calculate(num1, num2, operator) {
    var ret = "";
    if (operator === "/") {
        ret = String(Math.floor(num1 / num2));
    }
    else if (operator === "X") {
        ret = String(num1 * num2);
    }
    else if (operator === "-") {
        ret = String(num1 - num2);
    }
    else if (operator === "+") {
        ret = String(num1 + num2);
    }
    return ret;
}
function showResult(str) {
    document.getElementById("total").innerHTML = str;
}
function clearPrompt() {
    document.getElementById("total").innerHTML = "";
}
function setDigitsController() {
    var digits = document.getElementsByClassName("digits");
    digits[0].addEventListener("click", function (e) {
        showClickedButton(e.target.innerHTML);
    });
}
function setOperationsController() {
    var operations = document.getElementsByClassName("operations");
    operations[0].addEventListener("click", function (e) {
        if (e.target.innerHTML === "=") {
            var input = void 0;
            input = parseInput(document.getElementById("total").innerHTML);
            showResult(calculate(+input.num1, +input.num2, input.operator));
        }
        else {
            showClickedButton(e.target.innerHTML);
        }
    });
}
function setModifierController() {
    var modifier = document.getElementsByClassName("modifier");
    modifier[0].addEventListener("click", function (e) {
        clearPrompt();
        showClickedButton("0");
    });
}
function setEventListner() {
    setDigitsController();
    setOperationsController();
    setModifierController();
}
function init() {
    setEventListner();
}
init();
