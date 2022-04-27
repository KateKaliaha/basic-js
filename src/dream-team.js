const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  let names = []
  for (let str of members) {
    if (typeof str === 'string') {
      names.push(str[0]) 
      
    }
    
  }
  if (names.length ==0) {
    return 'false'
  } else {
    return names.sort().join('')
  }
}

module.exports = {
  createDreamTeam
};
