// 文字列の配列の中で最も長い共通プレフィックス文字列を見つける関数を記述します。

// 共通のプレフィックスがない場合は、空の文字列を返します""。

// 制約:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i]空でない場合は小文字の英語のみで構成されます。

export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  const firstStr = strs[0];
  if (strs.length === 1) return firstStr;

  let result = "";

  // 各配列から1文字ずつ取り出す。
  for (let i = 0; i < firstStr.length; i++) {
    const s = firstStr[i];
    for (let j = 1; j < strs.length; j++) {
      if (i > strs[j].length) return result;

      const target = strs[j][i];
      if (s !== target) {
        return result;
      }
    }
    result += s;
  }

  return "";
}
