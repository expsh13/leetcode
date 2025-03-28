import { expect, test, describe } from "bun:test";
import { romanToInt } from "../RomantoInteger";

describe("romanToInt 関数のテスト", () => {
  test("III は true を返すべき", () => {
    expect(romanToInt("III")).toBe(3);
  });
  test("LVIII は 58 を返すべき", () => {
    expect(romanToInt("LVIII")).toBe(58);
  });
  test("MCMXCIV は 1994 を返すべき", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });
});
