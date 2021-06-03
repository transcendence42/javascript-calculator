interface IEquation {
  firstNum: number;
  secondNum: number;
  operation: string;
}

export default class Equation implements IEquation {
  public firstNum: number;
  public secondNum: number;
  public operation: string;

  constructor() {
    this.firstNum = 0;
    this.secondNum = 0;
    this.operation = "";
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
  calculate(): number | null {
    // console.log(
    //   `firstNum: ${this.firstNum}, secondNum: ${this.secondNum}, operation: ${this.operation}`
    // );
    let ret: number | null = null;
    if (this.operation === "+") {
      ret = this.plus();
    } else if (this.operation === "-") {
      ret = this.minus();
    } else if (this.operation === "X") {
      ret = this.multiply();
    } else if (this.operation === "/") {
      ret = this.divide();
    }
    // console.log(`ret: ${ret}`);
    // console.log(
    //   `firstNum: ${this.firstNum}, secondNum: ${this.secondNum}, operation: ${this.operation}`
    // );
    this.operation = "";
    return ret;
  }
  private plus(): number {
    return this.firstNum + this.secondNum;
  }
  private minus(): number {
    return this.firstNum - this.secondNum;
  }
  private multiply(): number {
    return this.firstNum * this.secondNum;
  }
  private divide(): number {
    return Math.floor(this.firstNum / this.secondNum);
  }
}
