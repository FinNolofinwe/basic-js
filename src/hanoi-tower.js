const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var answer = {
    turns: 1,
    seconds: 1
  },
  i = 1;
  var moves = 1;
  while (i <= disksNumber) {
    moves *= 2;
    i++
  }
  answer.turns = moves - 1;
  answer.seconds = Math.floor(((answer.turns *3600) / turnsSpeed));

  return answer;
}; 
