const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {

    let count = arr.flat()
    count = count.filter(el => el === '^^')
    if(count.length == 0) {
      return 0
    } else {
      return count.length
    }
   
  }


module.exports = {
  countCats
};
