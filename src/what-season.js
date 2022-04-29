const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

 class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
function getSeason(date) {
  let today = new Date();

  // console.log(date.getMilliseconds());
  // console.log(date.toString())
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (typeof date != 'object') {
    throw new ValidationError('Invalid date!');
  } else if (date instanceof Date === false) {
    throw new ValidationError('Invalid date!');
  } else if (typeof date === 'object') {
    if (date.getTime() - today.getTime() === 0) {
      throw new ValidationError('Invalid date!');
    } else if (!new Date()) {
      throw new ValidationError('Invalid date!');
    } else if (date.getMilliseconds() > 0) {
      if (typeof date.getMonth === 'function') {
        let month = date.getMonth();
        if (month === 0 || month === 1 || month === 11) {
          return 'winter';
        } else if (month === 2 || month === 3 || month === 4) {
          return 'spring';
        } else if (month === 5 || month === 6 || month === 7) {
          return 'summer';
        } else if (month === 8 || month === 9 || month === 10) {
          return 'fall';
        }
      } else {
        throw new ValidationError('Invalid date!');
      }
    } else {
      throw new ValidationError('Invalid date!');
    }
  }
}

module.exports = {
  getSeason
};
