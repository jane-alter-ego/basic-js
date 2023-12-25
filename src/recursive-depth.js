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
  calculateDepth(arr) {
    // Base case: if arr is not an array, return 0 (not contributing to depth)
    if (!Array.isArray(arr)) {
      return 0;
    }

    // If arr is an empty array, its depth is 1
    if (arr.length === 0) {
      return 1;
    }

    // Calculate depth for each element and return the maximum depth
    return 1 + Math.max(...arr.map(item => this.calculateDepth(item)));
  }
}

module.exports = {
  DepthCalculator
};
