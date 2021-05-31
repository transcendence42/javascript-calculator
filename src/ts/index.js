function showClickedButton(str) {
    var prompt = document.getElementById('total').innerHTML;
    console.log(str);
    if (prompt === "0") {
        document.getElementById('total').innerHTML = str;
    }
    else {
        document.getElementById('total').innerHTML = prompt + str;
    }
}
function parseInput(str) {
    var num1;
    var num2;
    var operator;
    return {
        num1: num1,
        num2: num2,
        operator: operator
    };
}
function calculate(num1, num2, operator) {
    var ret;
    return ret;
}
function showResult(str) {
}
function clearPrompt() {
    document.getElementById('total').innerHTML = '';
}
function setEventListner() {
    var digits = document.getElementsByClassName('digits');
    digits[0].addEventListener('click', function (e) {
        console.log("haha");
        showClickedButton(e.target.innerHTML);
    });
    var operations = document.getElementsByClassName('operations');
    operations[0].addEventListener('click', function (e) {
        if (e.target.innerHTML === "=") {
            var input = void 0;
            input = parseInput(document.getElementById('total').innerHTML);
            showResult(calculate(input.num1, input.num2, input.operator));
            clearPrompt();
        }
        else {
            showClickedButton(e.target.innerHTML);
        }
    });
    var modifier = document.getElementsByClassName('modifier');
    modifier[0].addEventListener('click', function (e) {
        clearPrompt();
        showClickedButton("0");
    });
}
function init() {
    setEventListner();
}
init();
