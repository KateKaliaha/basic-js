const { NotImplementedError } = require('../extensions/index.js');

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


 class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}



 function transform(arr) {
  let result = [];
  if (!Array.isArray(arr)) {
    throw new ValidationError(`'arr' parameter must be an instance of the Array!`);
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next' || arr[i] === '--discard-prev' || arr[i] === '--double-next' || arr[i] === '--double-prev') {
        switch(arr[i]) {
          case '--discard-next':
            if( typeof arr[i + 1] == 'number') {
              i +=2;
            }
            break;
    
            case '--discard-prev':
              if( typeof arr[i - 1] == 'number') {
                let index = result.indexOf(arr[i - 1])
                result.splice(index, 1)
              }
          break;
          
              case '--double-next':
                if( typeof arr[i + 1] == 'number') {
                  result.push(arr[i + 1]);
                }
            break;
    
          case '--double-prev':
            if( typeof arr[i - 1] == 'number') {
            result.push(result[result.length - 1]);
            }
            break;
           
        }
        } else {
          result.push(arr[i])
        }
      }
   
  }
  return (result);
}


module.exports = {
  transform
};
