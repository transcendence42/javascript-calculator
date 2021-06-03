import Equation from "./equation.js";

export default class App {
  totalDiv: HTMLDivElement;
  constructor() {
    const equation = new Equation();
    this.totalDiv = document.querySelector("#total") as HTMLDivElement;
    //click AC
    document
      .querySelector("div.modifiers.subgrid")!
      .addEventListener("click", () => this.allClear(equation));
    //click num
    document
      .querySelector("div.digits.flex")!
      .addEventListener("click", evt => {
        if ((evt.target as HTMLElement).className !== "digit") {
          return;
        }
        if (isNaN(Number(this.totalDiv.innerText))) {
          this.totalDiv.innerText = "0";
        }
        if (this.totalDiv.innerText.length < 3) {
          this.totalDiv.insertAdjacentText(
            "beforeend",
            (evt.target as HTMLButtonElement).innerText
          );
          this.totalDiv.innerText = String(Number(this.totalDiv.innerText));
        }
      });
    //click operation
    document
      .querySelector("div.operations.subgrid")!
      .addEventListener("click", evt => {
        if ((evt.target as HTMLElement).className !== "operation") {
          return;
        }
        const operation: string = (evt.target as HTMLButtonElement).innerText;
        const num = Number(this.totalDiv.innerText);
        if (isNaN(num)) {
          return;
        }
        if (operation !== "=") {
          equation.setFirstNum(num);
          equation.setOperation(operation);
          this.totalDiv.innerText = operation;
        } else {
          equation.setSecondNum(num);
          let result = this.calculate(equation);
          // console.log(`result: ${result}`);
          this.totalDiv.innerText =
            result !== null ? String(result) : this.totalDiv.innerText;
        }
      });
  }
  allClear(equation: Equation) {
    equation.init();
    this.totalDiv.innerText = "0";
  }
  calculate(equation: Equation): number | null {
    // console.log(
    //   `firstNum: ${this.firstNum}, secondNum: ${this.secondNum}, operation: ${this.operation}`
    // );
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
    // console.log(`ret: ${ret}`);
    // console.log(
    //   `firstNum: ${this.firstNum}, secondNum: ${this.secondNum}, operation: ${this.operation}`
    // );
    equation.init();
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
