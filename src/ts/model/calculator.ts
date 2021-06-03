import { OPERATOR } from "../constants/index.js";

export const calculator = (splitedTotalValue: Array<string>): number => {
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

// export const calculator = (
//   number1: number,
//   operator: string,
//   number2: number
// ): number => {
//   switch(operator) {
//     case OPERATOR.ADD:
//       return number1 + number2;
//     case OPERATOR.SUBSTRACT:
//       return number1 - number2;
//     case OPERATOR.MULTIPLY:
//       return number1 * number2;
//     case OPERATOR.DIVIDE:
//       return Math.floor(number1 / number2);
//     default:
//       return 0
//   }
// };
