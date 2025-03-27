// 与えられた文字列 s について、重複する文字を含まない最長の部分文字列の長さを求めよ。
// 制約:

// 0 <= s.length <= 5 * 104
// s英語の文字、数字、記号、スペースで構成されます。

export function lengthOfLongestSubstring(s: string): number {
  let result = 0;
  const arr: string[] = [];
  const chars = s.split("");

  for (let i = 0; i < chars.length; i++) {
    if (arr.length === 0) {
      arr.push(chars[i]);
      continue;
    }

    if (arr.includes(chars[i])) {
      if (arr.length > result) {
        result = arr.length;
      }
      arr.splice(0, arr.indexOf(chars[i]) + 1);
    }

    arr.push(chars[i]);
  }

  return Math.max(result, arr.length);
}
