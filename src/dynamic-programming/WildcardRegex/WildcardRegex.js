/*
Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like ? or *.
Example 1:

Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input:
s = "aa"
p = "*"
Output: true
Explanation: '*' matches any sequence.
Example 3:

Input:
s = "cb"
p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
Example 4:

Input:
s = "adceb"
p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
Example 5:

Input:
s = "acdcb"
p = "a*c?b"
Output: false
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
export const isMatch = function(s, p) {
  const m = s.length,
    n = p.length;
  const d = Array(n + 1)
    .fill()
    .map(() => Array(m + 1).fill(false));
  d[0][0] = true;
  for (let i = 0; i < n; i++) {
    if (p[i] != "*") {
      break;
    } else d[i + 1][0] = true;
  }


  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      d[i + 1][j + 1] =
        (d[i][j] && s[j] == p[i]) ||
        (d[i][j] && p[i] == "?") ||
        (d[i][j] && p[i] == "*") ||
        ((d[i + 1][j] || d[i][j + 1]) && p[i] == "*");
    }
  }
  return d[n][m];
};
