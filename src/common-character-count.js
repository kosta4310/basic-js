const { NotImplementedError } = require("../extensions/index.js");

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
  let arr1 = [...s1];
  let count = 0;
  let arr2 = [...s2];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
      count++;
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount,
};
