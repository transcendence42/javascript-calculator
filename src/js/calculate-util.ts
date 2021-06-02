const calculateOperator = (
  total: number,
  operator: string,
  num: number
): number => {
  let result: number = 0;

  if (operator === '+') result = total + num;
  if (operator === '/') result = total / num;
  if (operator === '%') result = total % num;
  if (operator === '-') result = total - num;
  if (operator === 'X') result = total * num;

  return result;
};

const calculateResult = (total: string): number => {
  const result: RegExpMatchArray | null = total.match(
    new RegExp('(\\-?[\\d]{1,3})(X|\\-|\\+|\\/|\\=)(\\-?[\\d]{1,3})')
  );
  if (result === null) {
    return 0;
  }
  return calculateOperator(Number(result[1]), result[2], Number(result[3]));
};

export { calculateResult };
