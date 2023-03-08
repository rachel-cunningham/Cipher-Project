// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const polySq = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i/j", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];
  let encoder = {};
  let decoder = {};
  function generateEncodeDecodeDict() {
    for (let i = 0; i < polySq.length; i++) {
      for (let j = 0; j < polySq[i].length; j++) {
        const alphabet = polySq[i][j];
        const rowIndex = i + 1;
        const columnIndex = j + 1;
        const numericIndex = columnIndex.toString().concat(rowIndex.toString());
        if (alphabet.indexOf("/") > -1) {
          const arr = alphabet.split("/");
          const alpha1 = arr[0];
          const alpha2 = arr[1];
          encoder[alpha1] = numericIndex;
          encoder[alpha2] = numericIndex;
          decoder[numericIndex] = `(${alphabet})`;
        } else {
          encoder[alphabet] = numericIndex;
          decoder[numericIndex] = alphabet;
        }
      }
    }
  }

  function polybius(input, encode = true) {
    generateEncodeDecodeDict();
    let result = [];
    arr = input.toLowerCase().split("");
    if (encode) {
      for (let index in arr) {
        if (encoder[arr[index].toLowerCase()]) {
          result.push(encoder[arr[index]]);
        } else {
          result.push(arr[index].toLowerCase());
        }
      }
    } else {
      let tempDecodeIndices = [];
      for (let index in arr) {
        const val = arr[index];
        if (!isNaN(parseInt(val))) {
          tempDecodeIndices.push(val);
          if (tempDecodeIndices.length === 2) {
            const decodeableKey = tempDecodeIndices.join("");
            result.push(decoder[decodeableKey]);
            tempDecodeIndices = [];
          }
        } else {
          result.push(arr[index]);
        }
      }
      if (tempDecodeIndices.length > 0) {
        return false;
      }
    }
    return result.join("");
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
