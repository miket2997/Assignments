var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function caesarCipher(input, shift) {
    let encodedText = "";
    for (let i = 0; i < input.length; i++) {
      let char = input[i];
      if (char.match(/[a-z]/i)) {
        let charCode = input.charCodeAt(i);
        if ((charCode >= 65) && (charCode <= 90)) {
          charCode = ((charCode - 65 + shift) % 26) + 65;
        } else if ((charCode >= 97) && (charCode <= 122)) {
          charCode = ((charCode - 97 + shift) % 26) + 97;
        }
        encodedText += String.fromCharCode(charCode);
      } else {
        encodedText += char;
      }
    }
    return encodedText;
  }
console.log(caesarCipher(input, shift))  