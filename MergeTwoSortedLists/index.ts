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
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(list1: any[], list2: any[]): any[] {
  // ループを二つ回して配列の要素を一つずつ交互に追加していく
  const result = [];

  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    if (i > list2.length) {
      continue;
    }
    result.push(list2[i]);
  }

  if (list2.length > list1.length) {
    console.log("kko");
    for (let i = list1.length - 1; i < list2.length; i++) {
      if (i === -1) continue;
      result.push(list2[i]);
    }
  }

  return result;
}
