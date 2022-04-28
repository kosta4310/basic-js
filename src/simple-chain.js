const { NotImplementedError } = require("../extensions/index.js");

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
    if (arguments.length == 0) this.chain.push("");
    else this.chain.push(String(value));

    return this;
  },
  removeLink(position) {
    position--;
    if (
      Number.isInteger(position) &&
      position >= 0 &&
      position < this.getLength()
    ) {
      this.chain.splice(position, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let temp = this.chain;
    this.chain = [];
    return "( " + temp.join(" )~~( ") + " )";
  },
};

module.exports = {
  chainMaker,
};
