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
function countCats(matrix) {
  let catCount = 0;

  // Iterate through each row of the matrix
  matrix.forEach(row => {
    // Iterate through each element of the row
    row.forEach(element => {
      // Check if the element is a cat and increment the counter
      if (element === '^^') {
        catCount++;
      }
    });
  });

  return catCount;
}

module.exports = {
  countCats
};
