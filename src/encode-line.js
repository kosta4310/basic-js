const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let s = [...str];
  let res = "";
  let count = 1;
  let currChar = "";
  let prevChar = s[0];
  for (let i = 1; i < s.length; i++) {
    currChar = s[i];
    if (currChar == prevChar) {
      count++;
    } else {
      if (count == 1) {
        res += prevChar;
        prevChar = currChar;
        count = 1;
      } else {
        res += count + prevChar;
        prevChar = currChar;
        count = 1;
      }
    }
    if (i == s.length - 1) {
      if (count == 1) {
        res += prevChar;
      } else {
        res += count + prevChar;
      }
    }
  }
  return res;
}

module.exports = {
  encodeLine,
};
