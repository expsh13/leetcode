import { expect, test, describe } from "bun:test";
import { lengthOfLongestSubstring } from ".";

describe("lengthOfLongestSubstring関数のテスト", () => {
  test("bbbbb は 1 を返すべき", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });
  test("abcabcbb は 3 を返すべき", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });
  test("abcdef は 6 を返すべき", () => {
    expect(lengthOfLongestSubstring("abcdef")).toBe(6);
  });
  test("dvdf は 6 を返すべき", () => {
    expect(lengthOfLongestSubstring("dvdf")).toBe(3);
  });
});
