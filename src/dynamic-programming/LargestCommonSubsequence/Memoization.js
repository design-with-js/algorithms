// LCS: Find length of largest common subsequence between two given arrays
// Memoization tecnique is top down approach
//
//
//

function max(a, b) {
  return a > b ? a : b;
}

function LCS(A, B) {
  let m = A.length;
  let n = B.length;

  // lookup table
  let d = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(null));

  return lcsMemo(A, B, m, n, d);
}

function lcsMemo(A, B, i, j, d) {
  if (i == 0 || j == 0) {
    return 0;
  }

  if (d[i][j] !== null) {
    return d[i][j];
  }

  if (A[i] == B[j]) {
    d[i][j] = lcsMemo(A, B, i - 1, j - 1, d) + 1;
    return d[i][j];
  } else {
    d[i][j] = max(lcsMemo(A, B, i - 1, j, d), lcsMemo(A, B, i, j - 1, d));
    return d[i][j];
  }
}

console.log(LCS([1, 2, 3, 4], [1, 5, 2, 6, 3, 4]));
