import { EQUAL } from "../constants/index.js";
import { checkFirstTotalValue, checkPreventClickValue, isNumber, } from "../controller/validator.js";
import { calculator, makeFormula } from "../model/calculator.js";
export const clearTotalValue = () => {
    document.getElementById("total").innerText = "0";
};
export const pushTotalValue = (e) => {
    const clickTarget = e.target;
    const totalTarget = document.getElementById("total");
    const formula = makeFormula(totalTarget.innerText);
    let clickValue = clickTarget.innerText;
    if (totalTarget.innerText.length > 3 && isNumber(totalTarget.innerText)) {
        return;
    } // 계산 결과가 3자리를 넘어가는 경우 [AC] 외에 입력 방지
    if (checkFirstTotalValue(totalTarget.innerText, clickValue)) {
        totalTarget.innerText = clickValue;
        return;
    } // 첫번째 입력 시 0을 대체
    if (checkPreventClickValue(totalTarget.innerText, clickValue)) {
        return;
    } // 입력 방지해야하는 상황 체크
    if (clickValue === EQUAL) {
        totalTarget.innerText = String(calculator(formula));
        return;
    } // [=]이 입력된다면 공식을 계산기에 넘겨서 값 받은 후 렌더링
    totalTarget.innerText += clickValue;
};
