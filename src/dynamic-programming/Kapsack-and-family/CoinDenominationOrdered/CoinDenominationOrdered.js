/*
In this variant of Coin Denomination Problem, different order are counted as different combinations.
For example Sum of 3 can be made from [1,2] in the following ways:
  [1,1,1]
  [1,2]
  [2,1]
*/

export function orderedWays(denoms, S) {
  const dp = Array(S + 1).fill(0);
  dp[0] = 1;

  dp.forEach((d, i) => {
    denoms.forEach(denom => {
      if (i >= denom) {
        dp[i] += dp[i - denom];
      }
    });
  });

  return dp[S];
}
