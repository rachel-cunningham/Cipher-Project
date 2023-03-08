const { expect } = require("chai");
const { substitution } = require("../src/substitution.js");
describe("substitution", () => {
  it("should returns false if the given alphabet isn't exactly 26 characters long", () => {
    const actual = substitution(
      "message",
      "plmoknijbuhvygctfxrdzeswaqa",
      (encode = true)
    );
    expect(actual).to.be.false;
  });
  it("should encode a message", () => {
    const expected = "ykrrpik";
    const actual = substitution(
      "message",
      "plmoknijbuhvygctfxrdzeswaq",
      (encode = true)
    );
    expect(actual).to.equal(expected);
  });
  it("should return false if there are any duplicate characters in the given alphabet.", () => {
    const actual = substitution(
      "message",
      "plmoknijbuhvygctfxrdzeswaqw",
      (encode = true)
    );
    expect(actual).to.be.false;
  });
  it("should maintain spaces in the message, before and after when encoding", () => {
    const actualIn = "elp xhm xf mbymwwmfj dne";
    const actualBefore = " ykrrpik";
    const expectedAfter = "ykrrpik ";
    const actualAfter = substitution(
      "message ",
      "plmoknijbuhvygctfxrdzeswaq",
      (encode = true)
    );
    const expectedIn = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev",
      (encode = true)
    );
    const expectedBefore = substitution(
      " message",
      "plmoknijbuhvygctfxrdzeswaq",
      (encode = true)
    );
    expect(actualIn).to.equal(expectedIn);
    expect(actualBefore).to.equal(expectedBefore);
    expect(expectedAfter).to.equal(actualAfter);
  });
  it("should maintain spaces in the message, before and after when decoding", () => {
    const actualIn = "you are an excellent spy";
    const actualBefore = " message";
    const expectedAfter = "message ";
    const actualAfter = substitution(
      "ykrrpik ",
      "plmoknijbuhvygctfxrdzeswaq",
      (encode = false)
    );
    const expectedIn = substitution(
      "elp xhm xf mbymwwmfj dne",
      "xoyqmcgrukswaflnthdjpzibev",
      (encode = false)
    );
    const expectedBefore = substitution(
      " ykrrpik",
      "plmoknijbuhvygctfxrdzeswaq",
      (encode = false)
    );
    expect(actualIn).to.equal(expectedIn);
    expect(actualBefore).to.equal(expectedBefore);
    expect(expectedAfter).to.equal(actualAfter);
  });
  it("should ignore capital letters", () => {
    const actual = substitution(
      "MESSAGE",
      "plmoknijbuhvygctfxrdzeswaq",
      (encode = true)
    );
    const expected = substitution(
      "message",
      "plmoknijbuhvygctfxrdzeswaq",
      (encode = true)
    );
    expect(actual).to.equal(expected);
  });
});
