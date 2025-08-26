import { expect, test, describe } from "bun:test";
import { mergeTwoLists } from ".";

describe("mergeTwoLists関数のテスト", () => {
  test("[1,2,4],[1,3,4] は [1,1,2,3,4,4] を返すべき", () => {
    expect(mergeTwoLists([1, 2, 4], [1, 3, 4])).toEqual([1, 1, 2, 3, 4, 4]);
  });
  test("[],[] は [] を返すべき", () => {
    expect(mergeTwoLists([], [])).toEqual([]);
  });
  test("[],[0] は [0] を返すべき", () => {
    expect(mergeTwoLists([], [0])).toEqual([0]);
  });
});
