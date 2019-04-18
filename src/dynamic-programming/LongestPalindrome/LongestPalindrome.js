/*
Find the length of longest Palindromic substring inside the given string
A Palindrome string is the one which when reversed looks identical to the original string
eg: "nitin" is a palindrome

Note: String of length 1 are not to be considered as palindromes

Input: "abaab" 
Output: "baab" is the longest palindrome => 4 should be output

Expected time complexity: O(n)

Feel free to submit a O(n^2) solution as I started with that when I first solved this in python
That still is considered an accepted solution. I will later update the O(n^2) solution as well
*/

function LongestPalindrome(str) {
  console.log({ str });
  const n = str.length;

  // Making the field array for DP solution
  const palindromeLengths = Array(2 * n + 1)
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
      if(expectedLength <= 3) {
        palindromeLengths[middle].isCenter = true;
      }


      // update the palindromeLengths of the middle element starting and ending with str[i]
      if(palindromeLengths[middle].isCenter && expectedLength == palindromeLengths[middle].found + 2) {
        palindromeLengths[middle].found += 2;
      }
    } else {
      o[str[i]] = [i];
    }
  }

  let maxP = 0;

  const min = (a, b) => (a < b ? a : b);
  const max = (a, b) => (a < b ? a : b);

  palindromeLengths.forEach((pc, i) => {
    if (pc.isCenter) {
      // find the maximum length of successful palindromes
      // merge disjoint palindromes
      if (
        palindromeLengths[i - pc.found].isCenter &&
        palindromeLengths[i + pc.found].isCenter
      ) {
        palindromeLengths[i].expected += min(
          palindromeLengths[i - pc.found].found,
          palindromeLengths[i + pc.found].found
        );
        palindromeLengths[i].found += min(
          palindromeLengths[i - pc.found].found,
          palindromeLengths[i + pc.found].found
        );
      }

      maxP = pc.found > maxP ? pc.found : maxP;
    }
  });

  console.log({ palindromeLengths, o });



  return maxP;
}

console.log(LongestPalindrome("abaab"));
console.log(LongestPalindrome("bbabba"));
console.log(LongestPalindrome("bbbb"));
console.log(LongestPalindrome("xabcbax"));
console.log(LongestPalindrome("abbaeae"));
console.log(LongestPalindrome("aeryyera"));

console.log(
  LongestPalindrome(
    "jycidhaicmkwwidmhmrigcetrukmembyumzfyocshvykosipvmwqssteqvsatjxyxqsoxmwxxnledkzqfvndypwpmxroxfqtuzfbwqdsqacbfspbujlfhmmvakebzycythgvnvzbkqpfonggzletubwozmkhrvhfbyeaodfkjayjjhoyyxcthnnhmithtrzxxzjsjpbbptuvuhkwjhmqfisgamnyrnpevfapqfeoxb"
  )
);

module.exports = LongestPalindrome;
