const calculate = (
  number1: number,
  number2: number,
  operator: string
): number => {
  const operations: any = {
    ["+"]: (x: number, y: number): number => {
      return x + y;
    },
    ["-"]: (x: number, y: number): number => {
      return x - y;
    },
    ["X"]: (x: number, y: number): number => {
      return x * y;
    },
    ["/"]: (x: number, y: number): number => {
      return Math.floor(x / y);
    },
  };
  return operations[operator](number1, number2);
};
