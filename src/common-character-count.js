const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const charCountMap = {};

  // Count characters in s1
  for (const char of s1) {
    if (charCountMap[char]) {
      charCountMap[char]++;
    } else {
      charCountMap[char] = 1;
    }
  }

  let commonCount = 0;

  // Iterate through s2 and check for common characters
  for (const char of s2) {
    if (charCountMap[char] && charCountMap[char] > 0) {
      charCountMap[char]--;
      commonCount++;
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
