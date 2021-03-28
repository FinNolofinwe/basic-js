const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  var answer;
  if (typeof(sampleActivity) == 'string' && !isNaN(sampleActivity) && sampleActivity != '' && sampleActivity != ' ') {
    sampleActivity = +sampleActivity;
    if (sampleActivity < 15 && sampleActivity > 0) {
      answer = (Math.log(MODERN_ACTIVITY / sampleActivity)) / k;
      return Math.ceil(answer);
    } else {
      return false
    }
  } else {
    return false;
  }
};
