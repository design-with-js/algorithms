/*
Given a string, the task is to count all palindromic sub-strings present in it.

Input:

The first line of input will contain no of test cases T . Then T test cases follow . Each test case contains 2 lines. The first line of each test case contains an integer N denoting the length of the string, next line of test case contains the string


Output:

For each test case output a single line depecting the number of palindromic substrings present.


Constraints:

1<=T<=100
2<=N<=500


Example:

Input

2
5
abaab
7
abbaeae

Output

3
4

Explanation:

Test Case 1
Input : str = "abaab"
Output: 3
All palindrome substring are : "aba" , "aa" , "baab"

Test Case 2
Input : str = "abbaeae"
Output: 4
All palindrome substring are : "bb" , "abba" ,"aea","eae"

*/

function CountPalindromes(str) {
  console.log({ str });
  const n = str.length;

  // Making the field array for DP solution
  const palindromeCounts = Array(2 * n + 1)
    .fill()
    .map((nothing, i) => {
      return { found: i % 2, isCenter: false };
    });

  const o = {};

  // Object o stores the occurance indices of all the characters
  for (let i = 0; i < n; i++) {
    if (o[str[i]]) {
      o[str[i]].push(i);

      // middle element is at the middle of last and second last occurance of str[i]

      let m = o[str[i]].length;

      let middle = o[str[i]][m - 1] + o[str[i]][m - 2] + 1;

      let expectedLength = o[str[i]][m - 1] - o[str[i]][m - 2] + 1;

      // Mark middle element as center if first and last occurance of str[i] are close to <=2 distance
      if (expectedLength <= 3) {
        palindromeCounts[middle].isCenter = true;
      }

      // update the palindromeCounts of the middle element starting and ending with str[i]
      if (
        palindromeCounts[middle].isCenter &&
        expectedLength == palindromeCounts[middle].found + 2
      ) {
        palindromeCounts[middle].found += 2;
      }
    } else {
      o[str[i]] = [i];
    }
  }

  let count = 0;

  const min = (a, b) => (a < b ? a : b);
  const max = (a, b) => (a < b ? a : b);

  palindromeCounts.forEach((pc, i) => {
    if (pc.isCenter) {
      // find the maximum length of successful palindromes
      // merge disjoint palindromes
      if (
        palindromeCounts[i - pc.found].isCenter &&
        palindromeCounts[i + pc.found].isCenter
      ) {
        palindromeCounts[i].found += min(
          palindromeCounts[i - pc.found].found,
          palindromeCounts[i + pc.found].found
        );
      }

      // Number of possible palindromes would be Math.floor(palindrome-length / 2);
      count += Math.floor(pc.found / 2);
    }
  });

  // console.log({ palindromeCounts, o });

  return count;
}

console.log(LongestPalindrome("abaab"));
console.log(LongestPalindrome("bbabba"));
console.log(LongestPalindrome("bbbb"));
console.log(LongestPalindrome("xabcbax"));
console.log(LongestPalindrome("abbaeae"));
console.log(LongestPalindrome("aeryyera"));

console.log(
  CountPalindromes(
    "jycidhaicmkwwidmhmrigcetrukmembyumzfyocshvykosipvmwqssteqvsatjxyxqsoxmwxxnledkzqfvndypwpmxroxfqtuzfbwqdsqacbfspbujlfhmmvakebzycythgvnvzbkqpfonggzletubwozmkhrvhfbyeaodfkjayjjhoyyxcthnnhmithtrzxxzjsjpbbptuvuhkwjhmqfisgamnyrnpevfapqfeoxb"
  )
);

module.exports = CountPalindromes;
