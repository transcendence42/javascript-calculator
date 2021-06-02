const calculator = (
  number1: number,
  operator: string,
  number2: number
): number => {
  switch(operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case 'X':
      return number1 * number2;
    case '/':
      return Math.floor(number1 / number2);
    default:
      return 0
  }
};
