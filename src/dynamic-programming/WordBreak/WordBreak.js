/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:
The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.

Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.

Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
*/

export function wordBreak(s, wordDict) {
  /*
    take an array d[] of length|s|, d[i] will be the answer at ith position
    Recursive relation:
    d[j] = d[i] + wordDict.hasWord(s.substring(i, j)) | j = i to j = n
  */

  let n = s.length,
    m = wordDict.length,
    d = Array(n + 1).fill(0);
    
  d[0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (wordDict.indexOf(s.substring(i, j)) > -1 && d[i]) {
        d[j] = 1;
      }
    }
  }

  return d[n];
}
