const maxLength = (...arr) => {
  let ar = [];
  arr.forEach(a => {
    ar = a.length > ar.length ? a : ar;
  });
  return ar;
};

function LargestCommonSubsequence(a, b) {
  const m = a.length,
    n = b.length;

  /**
   * O(m*n)
   * Make a new 2d array d of size m+1,n+1
   * double loop(i,j) on a and b
   * if a[i] == b[j] then include a[i] in LCS building at d[i + 1][j + 1]
   * else take max length LCS with including a[i] or b[j] or excluding both
   */
  const d = Array(m + 1)
    .fill()
    .map(() =>
      Array(n + 1)
        .fill()
        .map(() => [])
    );

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (a[i] == b[j]) {
        d[i + 1][j + 1] = d[i][j].concat(a[i]);
      } else {
        d[i + 1][j + 1] = maxLength(d[i][j], d[i][j + 1], d[i + 1][j]);
      }
    }
  }
  // console.log(d);
  return d[m][n];
}

function lengthLargestCommonSubsequence(A, B) {
  return LargestCommonSubsequence(A, B).length;
}

const A = [3, 9, 8, 3, 9, 7, 9, 7, 0],
  B = [3, 3, 9, 9, 9, 1, 7, 2, 0, 6];

// eslint-disable-next-line
console.log(
  LargestCommonSubsequence(A, B),
  lengthLargestCommonSubsequence(A, B)
);
