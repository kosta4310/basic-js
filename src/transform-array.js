const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let res = [];

  if (arr.length == 0) return res;

  let transformAction = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];

  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];

    if (transformAction.includes(elem)) {
      switch (elem) {
        case "--discard-prev":
          if (i > 0) {
            if (res[res.length - 1] == arr[i - 1]) {
              res.pop();
            }
          }
          break;
        case "--discard-next":
          if (i + 1 < arr.length) {
            i++;
          }
          break;
        case "--double-prev":
          if (i > 0) res.push(arr[i - 1]);
          if (arr[i - 2] == "--discard-next") res.pop();
          break;
        case "--double-next":
          if (i + 1 < arr.length) {
            res.push(arr[i + 1]);
          }
          break;
      }
    } else res.push(elem);
  }

  return res;
}

module.exports = {
  transform,
};
