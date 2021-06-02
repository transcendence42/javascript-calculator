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
  switch(operator) {
    case "/":
      return String(Math.floor(num1 / num2))
    case "X":
      return String(num1 * num2);
    case "-":
      return String(num1 - num2);
    case "+":
      return String(num1 + num2);
    default:
      return '';
  }
}

function checkInputValidation(str: string): boolean {
  // if (){
  //   return false;
  // }
  return true;
}

function showInput(str: string) {
  const prompt: HTMLElement = document.getElementById('total');
  const oldText = prompt.innerHTML
  if (!checkInputValidation(oldText)) {
   str = ''; 
  }
  if (prompt.dataset.type === "result") {
    prompt.innerHTML = str;
    prompt.setAttribute("data-type", "input");
  } else {
    prompt.innerHTML = oldText + str;
  }
}

function showResult(str: string) {
  const prompt: HTMLElement = document.getElementById('total');
  prompt.innerHTML = str;
  prompt.setAttribute("data-type", "result");
}

function setDigitsController() {
  const digits = document.getElementsByClassName("digits");
  digits[0].addEventListener("click", e => {
    showInput((<Element>e.target).innerHTML);
  });
}

function setOperationsController() {
  const operations = document.getElementsByClassName("operations");
  const total: HTMLElement = document.getElementById("total");
  operations[0].addEventListener("click", e => {
    if ((<HTMLElement>e.target).innerHTML === "=") {
      const input: parsedInput = parseInput(total.innerHTML);
      showResult(calculate(+input.num1, +input.num2, input.operator));
    } else {
      if (total.dataset.type === "result") {
        total.dataset.type = "input";
      }
      showInput((<HTMLElement>e.target).innerHTML);
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
  document.getElementById('total').setAttribute("data-type", "result");
}

function init() {
  setEventListner();
  setDataSet();
}

init();
