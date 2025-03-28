// ローマ数字は7つの異なる記号で表されます：
// I, V, X, L, C, D, M

// 記号と値
// 記号	値
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000
// 例えば、ローマ数字で2は II と書かれ、単に1が2つ加えられたものです。
// 12は XII と書かれ、これは単に X + II の組み合わせです。
// 27は XXVII と書かれ、これは XX + V + II の組み合わせです。

// ローマ数字は通常、左から右へ大きい数字から小さい数字の順に書かれます。しかし、4を表す数字は IIII ではなく、IV と書かれます。これは、1が5の前に置かれることで、1を引いて4を表すためです。同じ原則が9にも適用され、9は IX と書かれます。

// 減算が使用されるのは以下の6つの場合です：
// I は V (5) と X (10) の前に置くことで、4 と 9 を表す。
// X は L (50) と C (100) の前に置くことで、40 と 90 を表す。
// C は D (500) と M (1000) の前に置くことで、400 と 900 を表す。
// 与えられたローマ数字を整数に変換してください。

export function romanToInt(s: string): number {
  // map
  // MCMXCIV
  const map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const current = map.get(s[i]);
    const next = map.get(s[i + 1]) || 0;

    if (next > current) {
      result += next - current;

      i++;
      continue;
    }

    result += current;
  }
  return result;
}
