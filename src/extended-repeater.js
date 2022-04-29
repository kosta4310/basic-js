const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 *
 */
function repeater(str, options) {
  let arrAddition = [];
  let arrStr = [];

  options.separator = options.separator || "+";
  options.additionSeparator = options.additionSeparator || "|";

  if (!options.repeatTimes && !options.additionRepeatTimes) {
    return str + options.addition;
  }
  if (
    typeof str === "boolean" ||
    typeof options.addition === "boolean" ||
    str === null ||
    options.addition === null ||
    typeof str === "object" ||
    typeof options.addition === "object"
  ) {
    str = "" + str;
    options.addition = "" + options.addition;
  }

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    arrAddition.push(options.addition);
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    options.addition
      ? arrStr.push(str + arrAddition.join(options.additionSeparator))
      : arrStr.push(str);
    if (!options.additionRepeatTimes && options.repeatTimes == 2) {
      arrStr = [];
      for (let i = 0; i < options.repeatTimes; i++) {
        arrStr.push(str + options.addition);
      }
      return arrStr.join(options.separator);
    }
  }

  return arrStr.join(options.separator);
}

module.exports = {
  repeater,
};
