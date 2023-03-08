// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let encodeDict = {};
  let decodeDict = {};
  function generateEncodeDecodeObj(alphabet) {
    encodeDict = {};
    decodeDict = {};
    const alphabetArr = [
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
    const arr = alphabet.toLowerCase().split("");
    for (const index in arr) {
      encodeDict[alphabetArr[index]] = arr[index];
      if (decodeDict[arr[index]]) {
        return false;
      } else {
        decodeDict[arr[index]] = alphabetArr[index];
      }
    }
    return true;
  }
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26) {
      return false;
    }
    const val = generateEncodeDecodeObj(alphabet);
    if (!val) return false;
    arr = input.toLowerCase().split("");
    for (let index in arr) {
      if (encode) {
        if (encodeDict[arr[index].toLowerCase()]) {
          arr[index] = encodeDict[arr[index].toLowerCase()];
        }
      } else {
        if (decodeDict[arr[index].toLowerCase()]) {
          arr[index] = decodeDict[arr[index].toLowerCase()];
        }
      }
    }
    return arr.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
