interface IEquation {
  firstNum: number;
  secondNum: number;
  operation: string;
}

export default class Equation implements IEquation {
  firstNum: number;
  secondNum: number;
  operation: string;

  constructor() {
    this.firstNum = 0;
    this.secondNum = 0;
    this.operation = "";
  }
  initNumbers() {
    this.firstNum = 0;
    this.secondNum = 0;
  }
  setFirstNum(num: number) {
    this.firstNum = num;
  }
  setSecondNum(num: number) {
    this.secondNum = num;
  }
  setOperation(operation: string) {
    this.operation = operation;
  }
  getFirstNum(): number {
    return this.firstNum;
  }
  getSecondNum(): number {
    return this.secondNum;
  }
  getOperation(): string {
    return this.operation;
  }
}
