const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

 class DepthCalculator {

    calculateDepth (arr) {
      this.arr = arr
      if (!Array.isArray(this.arr)) {
        return 0;
      }
  
      let depth = 0;
      for (let item of this.arr) {
        depth = Math.max(depth, calculateDepth(item));
        return 1 + depth;
      }
    }
  }
const depthCalc = new DepthCalculator();

module.exports = {
  DepthCalculator
};
