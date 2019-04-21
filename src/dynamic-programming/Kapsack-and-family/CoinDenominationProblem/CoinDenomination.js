/*
  Given a denomination of coins [d1, d2, d3,...]
  Find the number of ways a sum of S can be made.
  (Use a coin as many times as you wish, from 0 to infinite).

  Similar Leetcode Problem:
  https://leetcode.com/problems/combination-sum-iv/

  nums = [1, 2, 3]
  target = 4
*/

export function ways(denoms, S) {

  const dp = Array(S + 1).fill(0);

  dp[0] = 1;

  denoms.forEach(denom => {
    dp.forEach((d, i) => {
      if(i >= denom) {
        dp[i] += dp[i - denom];
      }
    })
  });

  return dp[S];
}