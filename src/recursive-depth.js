const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(arr) {
    this.arr = arr;
    this.d = 1;
  }

  calculateDepth(arr = this.arr, d) {
    if (d > this.d) {  
      this.d = d
    }

    arr.forEach(element => {
      if (Array.isArray(element)) {
        this.calculateDepth(element, d + 1);
      }
      return this.d;
    });
  }
}

//