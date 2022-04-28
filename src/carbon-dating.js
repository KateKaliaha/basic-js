const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') {
    sampleActivity = +sampleActivity
    console.log(typeof sampleActivity);
    if (typeof sampleActivity === 'number' && sampleActivity > 0) {
      let a = Math.log(MODERN_ACTIVITY / sampleActivity) 
      if ( a > 0) {
        let date = Math.ceil( a/ (0.693 / HALF_LIFE_PERIOD))
        return date
      } else {
        return false;
      }
      
    } else {
      return false;
    }
  }
  return false
}


module.exports = {
  dateSample
};
