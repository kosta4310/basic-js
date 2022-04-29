const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  isDirect;
  init = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  constructor() {
    this.isDirect = arguments[0] === false ? false : true;
  }
  encrypt() {
    if (!arguments[0] || !arguments[1]) {
      throw new Error("Incorrect arguments!");
    }

    let str = arguments[0];
    let key = arguments[1];
    let encrypt = "";
    str = str.toLowerCase();
    key = key.toLowerCase();
    let offsetKey = 0;
    for (let i = 0; i < str.length; i++) {
      if (this.init.includes(str.charAt(i))) {
        let char = str.charAt(i);
        let indexOfChar = this.init.indexOf(char);
        let indexKey = i - offsetKey;
        if (indexKey >= key.length) {
          while (indexKey >= key.length) {
            indexKey = indexKey - key.length;
          }
        }

        let offset = this.init.indexOf(key.charAt(indexKey));

        let index = indexOfChar + offset;
        if (indexOfChar + offset > 25) {
          index = indexOfChar + offset - 26;
        }
        encrypt += this.init[index];
      } else {
        encrypt += str.charAt(i);
        offsetKey++;
      }
    }

    return this.isDirect
      ? encrypt.toUpperCase()
      : [...encrypt].reverse().join("").toUpperCase();
  }
  decrypt() {
    if (!arguments[0] || !arguments[1]) {
      throw new Error("Incorrect arguments!");
    }

    let str = arguments[0];
    let key = arguments[1];
    let descrypt = "";
    str = str.toLowerCase();
    key = key.toLowerCase();

    let offsetKey = 0;
    for (let i = 0; i < str.length; i++) {
      if (this.init.includes(str.charAt(i))) {
        let char = str.charAt(i);
        let indexOfChar = this.init.indexOf(char);
        let indexKey = i - offsetKey;
        if (indexKey >= key.length) {
          while (indexKey >= key.length) {
            indexKey = indexKey - key.length;
          }
        }

        let offset = this.init.indexOf(key.charAt(indexKey));

        let index = indexOfChar - offset;
        if (indexOfChar - offset < 0) {
          index = indexOfChar + 26 - offset;
        }
        descrypt += this.init[index];
      } else {
        descrypt += str.charAt(i);
        offsetKey++;
      }
    }
    return this.isDirect
      ? descrypt.toUpperCase()
      : [...descrypt].reverse().join("").toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine,
};
