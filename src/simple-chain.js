const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    // Check if the position is a valid number and within the range of the chain length
    if (typeof position !== 'number' || position < 1 || position > this.getLength()) {
      this.chain = []; // Reset the chain
      throw new Error("You can't remove incorrect link!"); // Corrected error message
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const finishedChain = this.chain.join('~~');
    this.chain = []; // Reset the chain
    return finishedChain;
  }
};

module.exports = {
  chainMaker
};
