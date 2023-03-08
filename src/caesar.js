// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;
    if (!encode) shift = -shift;
    arr = input.split("");
    alphabets = [
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
    for (let index in arr) {
      let aIndex = alphabets.indexOf(arr[index].toLowerCase());
      if (aIndex > -1) {
        let newIndex = aIndex + shift;
        if (newIndex > 25) {
          diff = newIndex - 25;
          newIndex = -1 + diff;
        } else if (newIndex < 0) {
          newIndex = 26 + newIndex;
        }
        arr[index] = alphabets[newIndex];
      }
    }
    return arr.join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
