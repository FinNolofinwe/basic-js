const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  answer = '';
  if (options.repeatTimes) {
    for (let i = 1; i <= options.repeatTimes; i++) {
      if (options.separator) {
        if (i < options.repeatTimes) {
          str += options.separator;
        } else {
          return;
        }
      } else {
        if (i < options.repeatTimes) {
          str += '+';
        } else {
          return;
        }
      }
      
      /*for (let j = 1; j <= options.additionRepeatTimes; i++) {
        if (options.addition) {
          if (options.additionSeparator) {
            options.addition += options.additionSeparator;
          } else {
            options.addition += '|';
          }
          str += options.addition
        }
        anwer += str;
      }*/
      answer += str;
    }
  } else {
    answer = str;
  }
  return answer;
};
  