const CustomError = require("../extensions/custom-error");

const chainMaker = {
  segment: [],

  getLength() {
    return this.segment.length;
    //return this;
  },
  addLink(value) {
    if (!value) {
      if (this.segment !== undefined && this.segment.length === 0) {
        this.segment.push(`~~(  )`).join('');
      }
    } else {
      if (this.segment !== undefined && this.segment.length === 0) {
      this.segment.push(`~~( ${value.toString()} )`).join('');
      }
    }
    return this;
  },
  removeLink(position) {
    if (position === parseInt(position, 10)) { 
      if (this.segment !== undefined && this.segment.length === 0) {
        this.segment.splice(position).join('');
      }
    } else {
      throw new Error('Error');
    }
    
    return this;
  },
  reverseChain() {
    if (this.segment !== undefined && this.segment.length === 0) {
      this.segment.reverse().join('');
    }
    return this;
  },
  finishChain() {
    return this;
  }
};

module.exports = chainMaker;
