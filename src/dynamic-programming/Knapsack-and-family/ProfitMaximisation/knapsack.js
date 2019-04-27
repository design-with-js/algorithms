function max(a, b) {
  return a > b ? a : b;
}

/**
 * Profit maximise knapsack problem: you are given weight array and value array of N items
 * Given the weight range W, what maximum value can be obtained,
 * you can use a weight multiple times
 * @param  {number} N number of weights
 * @param  {number} W Threshold weight
 * @param  {number[]} w weight array
 * @param  {number[]} v Value array
 * @return {number}   Maximum value that can be obtained
 */
function knapsack(N, W, w, v) {
  let V = Array(W + 1).fill(0);
  let ans = 0;

  for (let i = 0; i <= W; i++) {
    for (let j = 0; j < N; j++) {
      if (i >= w[j]) {
        V[i] = max(V[i], V[i - w[j]] + v[j]);
      }
    }
    ans = max(ans, V[i]);
  }
  console.log({V});
  return ans;
}

console.log(knapsack(4, 10, [1, 2, 3, 1], [44, 88, 102, 48]));
