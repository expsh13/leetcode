import { expect, test, describe } from "bun:test";
import { isPalindrome } from ".";

describe("isPalindrome関数のテスト", () => {
  test("121 は true を返すべき", () => {
    expect(isPalindrome(121)).toBe(true);
  });
  test("-121 は false を返すべき", () => {
    expect(isPalindrome(-121)).toBe(false);
  });
  test("10 は false を返すべき", () => {
    expect(isPalindrome(10)).toBe(false);
  });
  test("1001 は true を返すべき", () => {
    expect(isPalindrome(1001)).toEqual(true);
  });
});
