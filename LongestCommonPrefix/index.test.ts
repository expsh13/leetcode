import { expect, test, describe } from "bun:test";
import { longestCommonPrefix } from ".";

describe("longestCommonPrefix 関数のテスト", () => {
  test("[''] は '' を返すべき", () => {
    expect(longestCommonPrefix([""])).toBe("");
  });
  test('["flower","flow","flight"] は "fl" を返すべき', () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });
});
