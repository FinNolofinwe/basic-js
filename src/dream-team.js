const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  var team = [];
  if (! Array.isArray(members)) {
    return false
  } else {
    for (let i = 0; i < members.length; i++) {
      if (typeof(members[i]) == 'string') {
        members[i] = members[i].replace(/\s+/g, ' ').trim();
        team.push(members[i][0].toUpperCase());  
      }
      
    }
    return team.sort().join('');
  }
    
};
