const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    return false
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[0] == '--discard-prev' || arr[0] == '--double-prev' || arr[arr.length - 1] == '--double-next' || arr[arr.length - 1] == '--discard-next') {
        break;
      } else {
        
      }
    }
  }
};
