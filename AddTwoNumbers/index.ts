// 2つの空ではない連結リストが与えられ、それぞれが非負の整数を表しています。各桁は逆順で格納されており、それぞれのノードには1桁の数字が含まれています。この2つの数値を足し合わせ、その合計を同様に連結リストとして返してください。

// なお、入力される2つの数値には、数値0そのものを除き、先頭に0が付くことはないと仮定して構いません。

// 各連結リストのノード数は、範囲 [1, 100] に収まります。
// 各ノードの値は 0 以上 9 以下です。
// リストは必ず先頭にゼロを含まない数値を表しています（ただし、数値の0そのものは例外です）。

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export function addTwoNumbers(l1: number[], l2: number[]): number[] {
  const num1 = Number(l1.reverse().join(""));
  const num2 = Number(l2.reverse().join(""));
  const sum = String(num1 + num2);
  const result = sum
    .split("")
    .map((item) => Number(item))
    .reverse();
  return result;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class Solution {
  addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0);
    let temp = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
      let val1 = l1 ? l1.val : 0;
      let val2 = l2 ? l2.val : 0;

      let sum = val1 + val2 + carry;
      carry = Math.floor(sum / 10);
      temp.next = new ListNode(sum % 10);
      temp = temp.next;

      if (l1 !== null) l1 = l1.next;
      if (l2 !== null) l2 = l2.next;
    }

    return dummy.next;
  }
}
