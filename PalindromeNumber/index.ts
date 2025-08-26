// 整数が与えられた場合x、それがtruex回文、それfalse以外の場合は。

export function isPalindrome(x: number): boolean {
  // マイナスの場合回文にはならないので、false
  if (x < 0) return false;

  // 文字を一つづつ取り出す必要があるので、数値→文字に変換
  const str = String(x);

  // 先頭と最後尾を取り出していき一致するか確認
  for (let i = 0; i < str.length; i++) {
    // 先頭と最後尾が同じインデックスの場合trueを返す
    if (i === str.length - (i + 1)) return true;

    if (str[i] !== str[str.length - (i + 1)]) return false;
  }
  return true;
}
