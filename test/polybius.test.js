const { expect } = require("chai");
const { polybius } = require("../src/polybius.js");
describe("polybius", () => {
  it("should when encoding, translate the letters i and j to 42", () => {
    const expected = "23513434112251";
    const actual = polybius("message", (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should when decoding, translates 42 to (i/j)", () => {
    const expected = "message";
    const actual = polybius("23513434112251", (encode = false));
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const actual = polybius("A MESSAGE", (encode = true));
    const expected = polybius("a message", (encode = true));
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in the message, before and after when encoding", () => {
    const actualIn = "11 23513434112251";
    const actualBefore = " 23513434112251";
    const expectedAfter = "23513434112251 ";
    const actualAfter = polybius("message ", (encode = true));
    const expectedIn = polybius("a message", (encode = true));
    const expectedBefore = polybius(" message", (encode = true));
    expect(actualIn).to.equal(expectedIn);
    expect(actualBefore).to.equal(expectedBefore);
    expect(expectedAfter).to.equal(actualAfter);
  });
  it("should maintain spaces in the message, before and after when decoding", () => {
    const actualIn = "a message";
    const expectedIn = polybius("11 23513434112251", (encode = false));
    const actualBefore = " message";
    const expectedAfter = "message ";
    const actualAfter = polybius("23513434112251 ", (encode = false));
    const expectedBefore = polybius(" 23513434112251", (encode = false));
    expect(actualIn).to.equal(expectedIn);
    expect(actualBefore).to.equal(expectedBefore);
    expect(expectedAfter).to.equal(actualAfter);
  });
});
