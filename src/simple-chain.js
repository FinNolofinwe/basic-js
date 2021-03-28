const CustomError = require("../extensions/custom-error");

const chainMaker = {
  segment: [],

  getLength() {
    return this.segment.length;
    //return this;
  },
  addLink(value) {
    if (!value) {
      this.segment.push(`~~(  )`).join('');
    } else {
      this.segment.push(`~~( ${value.toString()} )`).join('');
    }
    return this;
  },
  removeLink(position) {
    if (position === parseInt(position,10)) {
      this.segment.splice(position).join('');
    }else {
      throw new Error('Error');
    }
    
    return this;
  },
  reverseChain() {
    this.segment.reverse().join('');
    return this;
  },
  finishChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
