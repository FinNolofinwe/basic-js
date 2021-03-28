const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  var arr = matrix.flat(),
      count = 0;
  for (let i = 0; i < arr.length; i++) {
    //arr[i] = arr[i].toString();
      if (arr[i] == '^^' ) {
        count++;
      }
  }
  
  return count;
};
