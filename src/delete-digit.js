const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = [...("" + n)];
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    console.log("length: " + str.length);
    let temp = [...str];
    temp.splice(i, 1);
    console.log("temp: " + temp);
    arr.push(+temp.join(""));
    console.log("arr: " + arr);
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    max = max > arr[i] ? max : arr[i];
  }
  return max;
}

module.exports = {
  deleteDigit,
};
