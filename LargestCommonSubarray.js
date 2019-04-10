function LargestCommonSubarray(a, b) {
  const m = a.length,
    n = b.length;

  let max = [];

  // make a 2d array d of size m,n with all blank arrays
  // double loop(i,j) on a and b
  // d[i][j] = d[i-1][j-1].concat(a[i]) if a[i] == b[i]

  const d = Array(m)
    .fill()
    .map(() =>
      Array(n)
        .fill()
        .map(() => [])
    );

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (a[i] == b[j]) {
        if (i > 0 && j > 0) {
          d[i][j] = d[i - 1][j - 1].concat(a[i]);
        } else {
          d[i][j] = [a[i]];
        }
      }
      max = d[i][j].length > max.length ? d[i][j] : max;
    }
  }
  // console.log(d);
  return max;
}

function lengthLargestCommonSubarray(A, B) {
  var m = A.length,
    n = B.length;
  var d = new Array(m).fill().map(() => new Array(n).fill(0));
  d[0][0] = A[0] == B[0] ? 1 : 0;
  d[0][1] = 0;
  d[1][0] = 0;

  let max = Number.MIN_SAFE_INTEGER;

  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (A[i] == B[j]) {
        if (i <= 0 || j <= 0) {
          d[i][j] = 1;
        } else {
          d[i][j] = d[i - 1][j - 1] + 1;
        }
      }
      max = d[i][j] > max ? d[i][j] : max;
    }
  }
  return max;
}

const A = [1, 2, 3, 2, 1],
  B = [3, 2, 1, 4, 7];

// eslint-disable-next-line
console.log(LargestCommonSubarray(A, B), lengthLargestCommonSubarray(A, B));
