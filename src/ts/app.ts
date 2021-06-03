import Equation from "./equation.js";

export default class App {
  constructor() {
    const equation = new Equation();
    const totalDiv = document.querySelector("#total") as HTMLDivElement;
    //click num
    document
      .querySelector("div.digits.flex")!
      .addEventListener("click", evt => {
        if ((evt.target as HTMLElement).className !== "digit") {
          return;
        }
        if (isNaN(Number(totalDiv.innerText))) {
          totalDiv.innerText = "0";
        }
        if (totalDiv!.innerText.length < 3) {
          totalDiv!.insertAdjacentText(
            "beforeend",
            (evt.target as HTMLButtonElement).innerText
          );
          totalDiv.innerText = String(Number(totalDiv.innerText));
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
        const num = Number(totalDiv.innerText);
        if (isNaN(num)) {
          return;
        }
        if (operation !== "=") {
          equation.setFirstNum(num);
          equation.setOperation(operation);
          totalDiv.innerText = operation;
        } else {
          equation.setSecondNum(num);
          let result = equation.calculate();
          // console.log(`result: ${result}`);
          totalDiv.innerText =
            result !== null ? String(result) : totalDiv.innerText;
        }
      });
  }
}
