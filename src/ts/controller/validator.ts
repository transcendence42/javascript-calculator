import { REGEXP, EQUAL } from "../constants/index.js";

export const isNumber = (str: string): boolean => {
  return /^[\d.]+(?:e-?\d+)?$/.test(str);
};

export const checkFirstTotalValue = (
  totalValue: string,
  clickValue: string
): boolean => {
  return totalValue === "0" && (isNumber(clickValue) || clickValue === "-");
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
  if (tmpValueArray) {
    if (!tmpValueArray[2] && tmpValueArray[3]) {
      return true;
    }
    if (
      tmpValueArray[2] &&
      !isNumber(totalValue.charAt(totalValue.length - 1)) &&
      !isNumber(clickValue)
    ) {
      return true;
    }
    if (tmpValueArray[3] && !isNumber(clickValue) && clickValue !== EQUAL) {
      return true;
    }
    if (
      tmpValueArray[3] &&
      tmpValue.length !== tmpValueArray[0].length &&
      clickValue !== EQUAL
    ) {
      return true;
    }
  }
  return false;
};
