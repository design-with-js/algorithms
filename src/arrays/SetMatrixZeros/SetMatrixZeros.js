/*
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/

export function setZeroes(matrix) {
  const m = matrix.length,
    n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        // this set of i and j should be zeroed.
        matrix[0][j] = -1;
        matrix[i][0] = -2;
        if (i == 0 && j == 0) {
          matrix[i][j] = -3;
        }
      }
    }
  }

  for (let i = 1; i < m; i++) {
    if (matrix[i][0] === -2) {
      matrix[i] = matrix[i].map(t => 0);
    }
  }

  for (let j = 1; j < n; j++) {
    if (matrix[0][j] === -1) {
      for (let i = 0; i < m; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] == -3) {
    matrix[0] = matrix[0].map(() => 0);
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
}
