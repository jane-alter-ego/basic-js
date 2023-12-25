const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const encryptedMessage = this.vigenereCipher(message, key, 'encrypt');
    return this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const decryptedMessage = this.vigenereCipher(encryptedMessage, key, 'decrypt');
    return this.direct ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }

  vigenereCipher(text, key, mode) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    key = key.toUpperCase().split('');
    let keyIndex = 0;

    return text.toUpperCase().split('').map(char => {
      if (alphabet.includes(char)) {
        const textIndex = alphabet.indexOf(char);
        const keyCharIndex = alphabet.indexOf(key[keyIndex++ % key.length]);
        const cipherIndex = mode === 'encrypt'
          ? (textIndex + keyCharIndex) % 26
          : (textIndex - keyCharIndex + 26) % 26;

        return alphabet[cipherIndex];
      } else {
        return char;
      }
    }).join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
