// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar.js");

describe("caesar", () => {
  it("should encode a message", () => {
    const expected = "cheud pdjdclqh";
    const actual = caesar("Zebra Magazine", 3, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is 0", () => {
    const actual = caesar("Zebra Magazine", 0, (encode = true));
    expect(actual).to.be.false;
  });
  it("should return false if shift is less than -25", () => {
    const actual = caesar("Zebra Magazine", -26, (encode = true));
    expect(actual).to.be.false;
  });
  it("should return false if shift is greater than 25", () => {
    const actual = caesar("Zebra Magazine", 26, (encode = true));
    expect(actual).to.be.false;
  });
  it("should return false if shift is not present", () => {
    const actual = caesar("Zebra Magazine", undefined, (encode = true));
    expect(actual).to.be.false;
  });
  it("should ignore capital letters", () => {
    const actual = caesar("ZEBRA MAGAZINE", 3, (encode = true));
    const expected = caesar("zebra magazine", 3, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should when encoding, handle shifts that go past the end of the alphabet.", () => {
    const expected = "c";
    const actual = caesar("z", 3, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces in the message, before and after when encoding", () => {
    const actualIn = "cheud pdjdclqh";
    const actualBefore = " cheud pdjdclqh";
    const expectedAfter = "cheud pdjdclqh ";
    const actualAfter = caesar("Zebra Magazine ", 3, (encode = true));
    const expectedIn = caesar("Zebra Magazine", 3, (encode = true));
    const expectedBefore = caesar(" Zebra Magazine", 3, (encode = true));
    expect(actualIn).to.equal(expectedIn);
    expect(actualBefore).to.equal(expectedBefore);
    expect(expectedAfter).to.equal(actualAfter);
  });
  it("should maintain spaces in the message, before and after when decoding", () => {
    const actualIn = "zebra magazine";
    const expectedIn = caesar("cheud pdjdclqh", 3, (encode = false));
    const actualBefore = " zebra magazine";
    const expectedAfter = "zebra magazine ";
    const actualAfter = caesar("cheud pdjdclqh ", 3, (encode = false));
    const expectedBefore = caesar(" cheud pdjdclqh", 3, (encode = false));
    expect(actualIn).to.equal(expectedIn);
    expect(actualBefore).to.equal(expectedBefore);
    expect(expectedAfter).to.equal(actualAfter);
  });
  it("should maintain other nonalphabetic symbols in the message, before and after when encoding", () => {
    const actualIn = "cheud $ pdjdclqh";
    const expectedIn = caesar("Zebra $ Magazine", 3, (encode = true));
    const actualBefore = "@cheud pdjdclqh";
    const expectedBefore = caesar("@Zebra Magazine", 3, (encode = true));
    const expectedAfter = "cheud pdjdclqh!";
    const actualAfter = caesar("Zebra Magazine!", 3, (encode = true));
    expect(actualIn).to.equal(expectedIn);
    expect(actualBefore).to.equal(expectedBefore);
    expect(expectedAfter).to.equal(actualAfter);
  });
  it("should maintain other nonalphabetic symbols in the message, before and after when decoding ", () => {
    const actualIn = "zebra $ magazine";
    const expectedIn = caesar("cheud $ pdjdclqh", 3, (encode = false));
    const actualBefore = "@zebra magazine";
    const expectedBefore = caesar("@cheud pdjdclqh", 3, (encode = false));
    const expectedAfter = "zebra magazine!";
    const actualAfter = caesar("cheud pdjdclqh!", 3, (encode = false));
    expect(actualIn).to.equal(expectedIn);
    expect(actualBefore).to.equal(expectedBefore);
    expect(expectedAfter).to.equal(actualAfter);
  });
});
