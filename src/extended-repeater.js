const { NotImplementedError } = require('../extensions/index.js');

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
 */
 function repeater(str, options) {
  let add = '';
  let newStr = '';
  if (str != 'string') {
    str = String(str);
  }
  if (
    (options.addition != undefined && typeof options.addition != 'string') ||
    options.addition === null
  ) {
    options.addition = String(options.addition);
  }
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  if (options.addition != undefined) {
    if (options.additionRepeatTimes === undefined) {
      add = String(options.addition);
    } else {
      add = String(options.addition) + options.additionSeparator;
      add = add.repeat(options.additionRepeatTimes - 1);
      add = add + String(options.addition);
    }
  }
  if (options.repeatTimes === undefined) {
    newStr = str + add;
  } else {
    newStr = str + add + options.separator;
    newStr = newStr.repeat(options.repeatTimes - 1);
    newStr = newStr + str + add;
  }

  return newStr;
}

module.exports = {
  repeater
};
