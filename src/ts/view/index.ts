import { EQUAL } from "../constants/index.js";
import { checkFirstTotalValue, checkPreventClickValue, checkTotalValue} from "../controller/validator.js";
import { calculator } from "../model/calculator.js";

export const clearTotalValue = (): void => {
  document.getElementById("total")!.innerText = "0";
};

export const pushTotalValue = (e: Event): void => {
  const clickTarget: HTMLElement = e.target as HTMLElement;
  const totalTarget: HTMLElement | null = document.getElementById("total");
  let clickValue: string = clickTarget!.innerText;

  if (!isNaN(Number(totalTarget!.innerText)) && totalTarget!.innerText.length > 3) {
    console.log('길이문제')
    return;
  }
  if (checkFirstTotalValue(totalTarget!.innerText, clickValue)) {
    totalTarget!.innerText = clickValue;
    return;
  } // 첫번째 입력 시 0을 대체
  if (checkPreventClickValue(totalTarget!.innerText, clickValue)) {
    return;
  } // 입력 방지해야하는 상황 체크
  if (clickValue === EQUAL) {
    totalTarget!.innerText = String(calculator(checkTotalValue(totalTarget!.innerText)));
    return;
  } // [=]이 입력된다면 totalvalue체크 후 계산
  totalTarget!.innerText += clickValue;
};

// const checkPreventClickValue = (
//   totalValue: string,
//   clickValue: string
// ): boolean => {
//   const lastTotalValue = totalValue.charAt(totalValue.length - 1);
//   if (REGEXP.OPERATORS.test(lastTotalValue) && REGEXP.OPERATORS.test(clickValue)) {
//     return true;
//   }
//   return false;
// };
