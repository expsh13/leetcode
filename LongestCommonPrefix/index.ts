// 文字列の配列の中で最も長い共通プレフィックス文字列を見つける関数を記述します。

// 共通のプレフィックスがない場合は、空の文字列を返します""。

// 制約:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i]空でない場合は小文字の英語のみで構成されます。

export function longestCommonPrefix(strs: string[]): string {
  const firstStrs = strs[0];
  if (strs.length === 1) return firstStrs;

  const startSlice = 0;

  // 1文字目
  for (let i = 0; i < firstStrs.length; i++) {
    const firstStr = firstStrs[i];
    // 最初以外の文字列
    for (let j = 1; j < strs.length; j++) {
      const str = strs[j][i];
      if (firstStr !== str) {
        return firstStrs.substring(startSlice, i);
      }
    }
  }
  return firstStrs;
}
