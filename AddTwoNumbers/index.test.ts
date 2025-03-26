import { expect, test, describe } from "bun:test";
import { addTwoNumbers } from ".";

describe("addTwoNumbers関数のテスト", () => {
  test("[2,4,3]、[5,6,4] は [7,0,8] を返すべき", () => {
    expect(addTwoNumbers([2, 4, 3], [5, 6, 4])).toEqual([7, 0, 8]);
  });
  test("[0]、[0] は [0] を返すべき", () => {
    expect(addTwoNumbers([0], [0])).toEqual([0]);
  });
  test("[9,9,9,9,9,9,9]、[9,9,9,9] は [8,9,9,9,0,0,0,1] を返すべき", () => {
    expect(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toEqual([
      8, 9, 9, 9, 0, 0, 0, 1,
    ]);
  });
});
