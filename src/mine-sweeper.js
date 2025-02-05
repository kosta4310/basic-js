const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    res.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let count = 0;
      let indexStartX = j - 1 < 0 ? 0 : j - 1;
      let indexStartY = i - 1 < 0 ? 0 : i - 1;
      let indexEndX = j + 1 < matrix[0].length ? j + 1 : matrix[0].length - 1;
      let indexEndY = i + 1 < matrix.length ? i + 1 : matrix.length - 1;
      for (let k = indexStartY; k <= indexEndY; k++) {
        for (let m = indexStartX; m <= indexEndX; m++) {
          if (!(i == k && j == m)) {
            if (matrix[k][m] === true) {
              count++;
            }
          }
        }
      }
      res[i][j] = count;
    }
  }
  return res;
}

module.exports = {
  minesweeper,
};
