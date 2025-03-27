// 文字列が与えられた場合s、最長を返す 回文の 部分文字列でs。

// 制約:
// 1 <= s.length <= 1000
// s数字と英語の文字のみで構成されます。

export function longestPalindrome(s: string): string {
  if (s.length === 1) return s;

  let start = 0;
  let end = 0;

  // 各位置を中心にして回文の長さを調べる
  for (let i = 0; i < s.length; i++) {
    // 奇数長の回文をチェック
    const len1 = expandAroundCenter(s, i, i);
    // 偶数長の回文をチェック
    const len2 = expandAroundCenter(s, i, i + 1);
    const len = Math.max(len1, len2);

    // 最大の回文の始点と終点を更新
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}

function expandAroundCenter(s: string, left: number, right: number): number {
  let L = left;
  let R = right;
  while (L >= 0 && R < s.length && s[L] === s[R]) {
    L--;
    R++;
  }
  return R - L - 1;
}
