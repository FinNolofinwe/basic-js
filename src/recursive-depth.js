const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  
  constructor(arr) {

    this.arr = arr;
    this.counter = 1;
  }

  calculateDepth(arr = this.arr, counter = 1) {
    if (counter > this.counter) {  
      this.counter = counter
    }
      for (let item of arr) {
        if (Array.isArray(item)) {
          this.calculateDepth(item, counter + 1);
        }   
      }
    return this.counter;
  }
}
