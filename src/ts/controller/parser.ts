import { REGEXP } from "../constants/index.js";

export const parseTotalValue = (totalValue: string): Array<string> => {
  let isFirstNumberMinus = false;
  if (totalValue[0] === "-") {
    totalValue = totalValue.slice(1, totalValue.length);
    isFirstNumberMinus = true;
  }
  const operator = totalValue.replace(/\d/g, "");
  const numbers = totalValue.split(operator);
  if (isFirstNumberMinus) {
    return ["-" + numbers[0], operator, numbers[1]];
  }
  return [numbers[0], operator, numbers[1]];
};
