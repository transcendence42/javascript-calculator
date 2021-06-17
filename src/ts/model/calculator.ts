import { OPERATOR, REGEXP } from "../constants/index.js";

export const calculator = (splitedTotalValue: Array<string>): number => {
  if (splitedTotalValue.length === 0) {
    return 0;
  }
  const number1 = Number(splitedTotalValue[0]);
  const operator = splitedTotalValue[1].charAt(0);;
  const number2 = Number(splitedTotalValue[2]);
  switch (operator) {
    case OPERATOR.ADD:
      return number1 + number2;
    case OPERATOR.SUBSTRACT:
      return number1 - number2;
    case OPERATOR.MULTIPLY:
      return number1 * number2;
    case OPERATOR.DIVIDE:
      return Math.floor(number1 / number2);
    default:
      return 0;
  }
};

export const makeFormula = (totalValue: string): Array<string> => {
  const totalValueArray: RegExpMatchArray | null = totalValue.match(
    "(" + REGEXP.NUMBERS + ")(" + REGEXP.OPERATORS + ")(" + REGEXP.NUMBERS + ")"
  );
  if (totalValueArray) {
    return [totalValueArray[1], totalValueArray[2], totalValueArray[3]];
  }
  return [];
};
