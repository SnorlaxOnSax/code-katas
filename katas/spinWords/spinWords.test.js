import spinWords from "./spinWords.js";
import { assert } from "chai";

function doTest(input, expected) {
  it(`Should spin "${input}" to "${expected}"`, () => {
    assert.strictEqual(spinWords(input), expected);
  });
}

describe("Spinning words", () => {
  doTest("Welcome", "emocleW");
  doTest("Hey fellow warriors", "Hey wollef sroirraw");
  doTest("This is a test", "This is a test");
  doTest("This is another test", "This is rehtona test");
  doTest("You are almost to the last test", "You are tsomla to the last test");
  doTest("Just kidding there is still one more", "Just gniddik ereht is llits one more");
  doTest("Seriously this is the last one", "ylsuoireS this is the last one");
});