// 整数の配列numsと整数のtargetが与えられたとき、合計がtargetになるような2つの数値のインデックスを返してください。

// 各入力には必ず1つの解が存在すると仮定して構いません。また、同じ要素を二度使用してはいけません。

// 答えはどのような順序で返しても構いません。

// 制約:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// 有効な回答は 1 つだけです。

export function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}
