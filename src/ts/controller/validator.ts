import { EQUAL, REGEXP, OPERATOR } from "../constants/index.js";

export const checkFirstTotalValue = (
  totalValue: string,
  clickValue: string
): boolean => {
  return totalValue === "0" && (!isNaN(Number(clickValue)) || clickValue === "-");
};

export const checkPreventClickValue = (
  totalValue: string,
  clickValue: string
): boolean => {
  const tmpValue = totalValue + clickValue;
  const tmpValueArray: RegExpMatchArray | null = tmpValue.match(
    "(" +
      REGEXP.NUMBERS +
      ")?(" +
      REGEXP.OPERATORS +
      ")?(" +
      REGEXP.NUMBERS +
      ")?"
  );
  console.log('체크용 임시배열');
  console.log(tmpValueArray);
  if (tmpValueArray) {
    if (!tmpValueArray[2] && tmpValueArray[3]) {
      return true;
    }
    // if (
    //   tmpValueArray[2] &&
    //   isNaN(Number(totalValue.charAt(totalValue.length - 1))) &&
    //   isNaN(Number(clickValue))
    // ) {
    //   return true;
    // }
    // if (tmpValueArray[3] && clickValue !== EQUAL && isNaN(Number(clickValue))) {
    //   return true;
    // }
    // if (tmpValueArray[3] && tmpValueArray[3].length >= 3) {
    //   return true;
    // }
  }
  console.log("here3");
  return false;
};

export const makeFormula = (totalValue: string): Array<string> => {
  const totalValueArray: RegExpMatchArray | null = totalValue.match(
    "(" +
      REGEXP.NUMBERS +
      ")(" +
      REGEXP.OPERATORS +
      ")(" +
      REGEXP.NUMBERS +
      ")"
  );
  // console.log(totalValue);
  // console.log(totalValueArray);
  if (totalValueArray) {
    return [totalValueArray[1], totalValueArray[2], totalValueArray[3]];
  }
  return [];
};
