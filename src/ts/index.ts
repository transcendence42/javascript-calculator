class parsedInput {
  num1: string;
  num2: string;
  operator: string;

  constructor (operator: string, num1: string, num2: string) {
    this.operator = operator;
    this.num1 = num1;
    this.num2 = num2;
  }
}

function showClickedButton(str: string) {
  let prompt: string = document.getElementById("total").innerHTML;
  console.log(str);
  if (prompt === "0") {
    showResult(str);
  } else {
    showResult(prompt + str);
  }
}

function findOperator(str: string): string {
  if (str.indexOf("/") != -1) {
    return "/";
  } else if (str.indexOf("X") != -1) {
    return "X";
  } else if (str.indexOf("-") != -1) {
    return "-";
  } else if (str.indexOf("+") != -1) {
    return "+";
  } else {
    return "none";
  }
}

function parseInput(str: string): parsedInput {
  let prompt: string = document.getElementById("total").innerHTML;
  let startWithMinus: boolean = false;
  if (prompt[0] === "-") {
    prompt = prompt.slice(1, prompt.length);
    startWithMinus = true;
  }
  const operator: string = findOperator(prompt);
  const nums: string[] = operator === "none" ? [prompt, "1"] : prompt.split(operator);
  return new parsedInput(operator, startWithMinus ? "-" + nums[0] : nums[0], nums[1]);
}

function calculate(num1: number, num2: number, operator: string): string {
  let ret: string = "";
  if (operator === "/") {
    ret = String(Math.floor(num1 / num2));
  } else if (operator === "X") {
    ret = String(num1 * num2);
  } else if (operator === "-") {
    ret = String(num1 - num2);
  } else if (operator === "+") {
    ret = String(num1 + num2);
  }
  return ret;
}

function showResult(str: string) {
  document.getElementById("total").innerHTML = str;
}

function clearPrompt() {
  document.getElementById("total").innerHTML = "";
}

function setDigitsController() {
  const digits = document.getElementsByClassName("digits");
  digits[0].addEventListener("click", e => {
    showClickedButton((<Element>e.target).innerHTML);
  });
}

function setOperationsController() {
  const operations = document.getElementsByClassName("operations");
  operations[0].addEventListener("click", e => {
    if ((<Element>e.target).innerHTML === "=") {
      const input: parsedInput = parseInput(document.getElementById("total").innerHTML);
      showResult(calculate(+input.num1, +input.num2, input.operator));
    } else {
      showClickedButton((<Element>e.target).innerHTML);
    }
  });
}

function setModifierController() {
  const modifier = document.getElementsByClassName("modifier");
  modifier[0].addEventListener("click", e => {
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
