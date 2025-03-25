import { expect, test, describe } from "bun:test";
import { twoSum } from ".";

describe("towSum関数のテスト", () => {
  test("[2, 7, 11, 15]、9 は [0, 1] を返すべき", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  test("[3,2,4]、6 は [1, 2] を返すべき", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
});
