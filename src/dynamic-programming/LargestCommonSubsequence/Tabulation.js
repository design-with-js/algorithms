/**
 * Tabulation means bottom up approach where we build solution from 0 position
 * in the lookup table and build it upto the desired size n
 */

const max = (a, b) => (a > b ? a : b);

function LCS(A, B) {
  let m = A.length;
  let n = B.length;

  let d = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (A[i] == B[j]) {
        d[i + 1][j + 1] = d[i][j] + 1;
      } else {
        d[i + 1][j + 1] = max(d[i][j + 1], d[i + 1][j]);
      }
    }
  }

  return d[m][n];
}
