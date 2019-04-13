/**
https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
Given leaderboard scores in the array: scores and alice array with 
a[i] being her score in the i'th try.

Determine her rank for the ith try.
[Return the rank array].
This uses Dense Ranking
scores and alice both order of 10^5
*/

function max(a, b) {
  return a > b ? a : b;
}

function binarySearch(nums, target) {
  let hi = nums.length - 1,
    lo = 0;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] == target) return mid;
    if (nums[mid] > target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return lo;
}

export function climbingLeaderboard(scores, alice) {
  // // first lets find the uniq of scores
  // let o = {};
  // scores.forEach(s => {
  //   o[s] = true;
  // });
  // Object.keys(o)

  const m = scores.length,
    n = alice.length,
    aliceRank = [];

  const rank = Array(m).fill(0);
  rank[0] = 1;

  // implementing dense ranking
  for (let i = 1; i < m; i++) {
    if (scores[i] == scores[i - 1]) {
      rank[i] = rank[i - 1];
    } else {
      rank[i] = rank[i - 1] + 1;
    }
  }

  alice.forEach(a => {
    if (a > scores[0]) aliceRank.push(1);
    else if (a < scores[m - 1]) aliceRank.push(rank[m - 1] + 1);
    else {
      aliceRank.push(rank[binarySearch(scores, a)]);
    }
  });

  return aliceRank;
}
