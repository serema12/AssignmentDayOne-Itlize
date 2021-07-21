class Calculator {
  constructor() {
    this.firstValue = null;
    this.secondValue = null;
  }
  prompt() {
    const value1 = prompt("Enter value 1: ");
    const value2 = prompt("Enter value 2: ");

    this.value1 = value1;
    this.value2 = value2;
  }
  sum() {
    if (!this.firstValue || !this.secondValue) {
      throw new Error("Values have not exist yet");
    }
    return this.firstValue + this.secondValue;
  }
  product() {
    if (!this.firstValue || !this.secondValue) {
      throw new Error("Values have not exist yet");
    }
    return this.firstValue * this.secondValue;
  }
}
