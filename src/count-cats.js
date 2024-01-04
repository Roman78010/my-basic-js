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
function countCats(/*matrix*/) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // matrix = matrix[0].concat(matrix[1], matrix[2]);
  // let res = matrix.filter(el => el === '^^');
  // // console.log(res.length);
  // return res.length;
}

module.exports = {
  countCats
};
