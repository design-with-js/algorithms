/**
 * LongestUniqueSubstring: Find the length of longest substring that contains all characters only once.
 * Desired complexity: O(n)
 */

function lus(str) {
  // Field array for dp
  const d = new Array(str.length + 1);
  d[0] = 0;

  // pivot is the index where its dupliate is found somewhere further in the string
  let max = 0,
    pivot = -1;

  // o is character hash stores the occurance index of an element
  let o = {};

  for (let i = 0; i < str.length; i++) {
    if (o[str[i]] > pivot) {
      pivot = o[str[i]];
      d[i + 1] = i - pivot;
    } else {
      d[i + 1] = d[i] + 1;
    }
    o[str[i]] = i;
    max = d[i + 1] > max ? d[i + 1] : max;
  }

  return max;
}

console.log(lus("abba"));
console.log(lus("abcabcbb"));
