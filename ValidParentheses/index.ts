// ()[]{}

export function isValid(s: string): boolean {
  const map = new Map<string, string>([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  const openArr: string[] = [];

  // 開きかっこがあればペアとなる閉じかっこがあるか確認する
  for (let i = 0; i < s.length; i++) {
    const str = s[i];

    // 開きかっこの場合
    if (map.has(str)) {
      openArr.push(str);
    } else {
      // 閉じかっこの場合
      if (openArr.length === 0) return false;

      const open = openArr[openArr.length - 1];
      if (map.get(open) !== str) {
        return false;
      } else {
        openArr.pop();
      }
    }
  }

  return openArr.length === 0;
}
