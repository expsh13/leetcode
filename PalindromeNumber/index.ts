// 整数が与えられた場合x、それがtruex回文、それfalse以外の場合は。

export function isPalindrome(x: number): boolean {
  const s = String(x);

  if (s.length === 1) return true;
  if (x < 0) return false;
  let result = false;
  // 先頭と末尾から比較
  for (let i = 0; i < s.length; i++) {
    const firstIndex = i;
    const lastindex = s.length - (i + 1);
    if (!(s[firstIndex] === s[lastindex])) {
      result = false;
      break;
    }
    result = s[firstIndex] === s[lastindex];
  }
  return result;
}
