import { expect, test, describe } from "bun:test";
import { longestPalindrome } from ".";

describe("longestPalindrome関数のテスト", () => {
  test("babad は aba を返すべき", () => {
    expect(longestPalindrome("babad")).toEqual("aba");
  });
  test("cbbd は bb を返すべき", () => {
    expect(longestPalindrome("cbbd")).toEqual("bb");
  });
  test("s は s を返すべき", () => {
    expect(longestPalindrome("s")).toEqual("s");
  });
});
