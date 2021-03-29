const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  
  if (!Array.isArray(arr)) {
    throw new Error ('Not an array!');
  } else if (arr == [])  {
    return arr;
  } else {
      if (arr[0] == '--discard-prev' || arr[0] == '--double-prev' || arr[arr.length - 1] == '--double-next' || arr[arr.length - 1] == '--discard-next') {
        return;
      }
        else {
        var discNInd = arr.indexOf(`--discard-next`),
        discPrInd = arr.indexOf(`--discard-prev`),
        doubleNInd = arr.indexOf(`--double-next`),
        doublePrInd = arr.indexOf(`--double-prev`),
        answer;

        if (arr.includes(`--discard-next`)) {
          answer = arr.splice(discNInd, 2);
            return answer;
        } else if (arr.includes(`--discard-prev`)) {
          answer = arr.splice(discPrInd - 1, 2);
          return answer;
      } else if (arr.includes(`--double-next`)) {
        for (let i = 0; i < arr.length; i++) {
          if (a[i] == `--double-next`) {
            answer = arr.splice(i, 1, arr[i+1]);
          } 
          break;
        }
          return answer;
        } else if (arr.includes(`--double-prev`)) {
          for (let i = 0; i < arr.length; i++) {
            if (a[i] == `--double-prev`) {
              answer = arr.splice(i, 1, arr[i-1]);
              
            } 
            break;
          }
          return answer;
        }
      }
  }
}