const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push('(  )');
    } else {
      this.chain.push('(' + ' ' + `${value}` + ' ' + ')');
      return this;
    }
  },
  removeLink(position) {
    if (
      typeof position === 'number' &&
      Number.isInteger(position) &&
      position > 0 &&
      this.chain.length >= position
    ) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new ValidationError(`You can't remove incorrect link!`);
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    let finishedChain = this.chain.join('~~');
    this.chain = [];
    return finishedChain;
  },
};

module.exports = {
  chainMaker
};
