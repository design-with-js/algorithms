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

  let isFirstRow = false,
    isFirstColumn = false;

  /**
  Check if first row has a 0 or first column has a 0
  */

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] == 0) {
      isFirstRow = true;
    }
  }

  for (let j = 0; j < n; j++) {
    if (matrix[0][j] == 0) {
      isFirstColumn = true;
    }
  }

  /**
  Traverse each element except first row and first column, if the element is 0,
  mark topmost and left most element as 0 in its row.
  */

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = matrix[i][0] = 0;
      }
    }
  }

  /**
  Traverse all first element of rows except first row and if its 0 then mark entire row 0
  */

  for (let i = 1; i < m; i++) {
    if (matrix[i][0] == 0) {
      for (let j = 1; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  /**
  Traverse all first element of columns except first column and if its 0 then mark entire column 0
  */

  for (let j = 1; j < n; j++) {
    if (matrix[0][j] == 0) {
      for (let i = 1; i < m; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  /**
  If original matrix had 0 in first column or first row, mark that row or column as 0
  */

  if (isFirstColumn) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }

  if (isFirstRow) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
}
