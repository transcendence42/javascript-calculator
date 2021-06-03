import Equation from "./equation.js";

export default class App {
  totalDiv: HTMLDivElement;
  constructor() {
    const equation = new Equation();
    this.totalDiv = document.querySelector("#total") as HTMLDivElement;
    document
      .querySelector("div.modifiers.subgrid")!
      .addEventListener("click", () => this.allClear(equation));
    document
      .querySelector("div.digits.flex")!
      .addEventListener("click", evt =>
        this.typeNumber(evt.target as HTMLButtonElement, equation)
      );
    document
      .querySelector("div.operations.subgrid")!
      .addEventListener("click", evt =>
        this.clickOperations(evt.target as HTMLButtonElement, equation)
      );
  }
  allClear(equation: Equation) {
    equation.initNumbers();
    this.totalDiv.innerText = "0";
  }
  typeNumber(target: HTMLButtonElement, equation: Equation) {
    if (target.className !== "digit") {
      return;
    }
    if (isNaN(Number(this.totalDiv.innerText))) {
      this.totalDiv.innerText = "0";
    }
    if (equation.getOperation() === "=") {
      this.totalDiv.innerText = "0";
      equation.setOperation("");
    }
    if (this.totalDiv.innerText.length < 3) {
      this.totalDiv.insertAdjacentText("beforeend", target.innerText);
      this.totalDiv.innerText = String(Number(this.totalDiv.innerText));
    }
  }
  clickOperations(target: HTMLButtonElement, equation: Equation) {
    if (target.className !== "operation") {
      return;
    }
    const operation: string = target.innerText;
    const num = Number(this.totalDiv.innerText);
    if (isNaN(num) && operation !== "=") {
      equation.setOperation(operation);
      this.totalDiv.innerText = operation;
      return;
    }
    if (operation !== "=") {
      equation.setFirstNum(num);
      equation.setOperation(operation);
      this.totalDiv.innerText = operation;
    } else {
      equation.setSecondNum(num);
      let result = this.calculate(equation);
      this.totalDiv.innerText =
        result !== null ? String(result) : this.totalDiv.innerText;
    }
  }
  calculate(equation: Equation): number | null {
    let ret: number | null = null;
    if (equation.operation === "+") {
      ret = this.plus(equation);
    } else if (equation.operation === "-") {
      ret = this.minus(equation);
    } else if (equation.operation === "X") {
      ret = this.multiply(equation);
    } else if (equation.operation === "/") {
      ret = this.divide(equation);
    }
    equation.initNumbers();
    equation.setOperation("=");
    return ret;
  }
  private plus(equation: Equation): number {
    return equation.firstNum + equation.secondNum;
  }
  private minus(equation: Equation): number {
    return equation.firstNum - equation.secondNum;
  }
  private multiply(equation: Equation): number {
    return equation.firstNum * equation.secondNum;
  }
  private divide(equation: Equation): number {
    return Math.floor(equation.firstNum / equation.secondNum);
  }
}
