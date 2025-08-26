import { expect, test, describe } from "bun:test";
import { isValid } from ".";

describe("isValid関数のテスト", () => {
  test("() は true を返すべき", () => {
    expect(isValid("()")).toEqual(true);
  });
  test("()[]{} は true を返すべき", () => {
    expect(isValid("()[]{}")).toEqual(true);
  });
  test("(] は false を返すべき", () => {
    expect(isValid("(]")).toEqual(false);
  });
  test("([]) は true を返すべき", () => {
    expect(isValid("([])")).toEqual(true);
  });
  test("([)] は false を返すべき", () => {
    expect(isValid("([)]")).toEqual(false);
  });
});
