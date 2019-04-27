/**
 * Given an array of weights w[] and an array of benefits v[] representing the weights and values of
 * N items.
 * Find the subset of items which total weight doesn't exceed W that maximizes the benefit
 */

const max = (a, b) => (a > b ? a : b);

/**
 * Return the array of indices which represent the subset of items,
 * such the the total weight of the subset doesnt exceed W and the total benefit is maximum
 * The set of items is represented by w[] and v[]
 * where w[] are the weights and v[] are the values
 * @param  {number[]} w set of weights
 * @param  {number[]} v set of values
 * @param  {number} N number of items
 * @param  {number} W weight limit
 * @return {number[]}   array of indices that represent the desired subset
 */
function knapsack(w, v, N, W) {
  // we need to collect the indices of the weights that we are going to include in
  // maximum benefit calculation
  //
  let V = Array(N)
    .fill()
    .map(() => Array(W + 1).fill(0));

  let Vset = Array(N)
    .fill()
    .map(() => Array(W + 1).fill([]));

  for (let i = 0; i < N; i++) {
    for (let m = 0; m <= W; m++) {
      if (m >= w[i]) {
        if (i > 0) {
          V[i][m] = max(V[i - 1][m - w[i]] + v[i], V[i - 1][m]);
          Vset[i][m] = Vset[i - 1][m].slice();
          if (V[i - 1][m - w[i]] + v[i] > V[i - 1][m]) {
            Vset[i][m] = Vset[i - 1][m - w[i]].concat([i]);
            // Vset[i][m].push(i);
          } else {
            Vset[i][m] = Vset[i - 1][m].slice();
          }
        } else {
          V[i][m] = v[i];
          Vset[i][m] = [].concat([i]);
        }
      }
    }
  }

  // for(let i = 0; i < N; i++) {
  //   // V[i + 1]
  //   for(let j = 0; j < N; j++) {
  //     if(Ws[j] + w[i] <= W) {
  //       if(Vs[j] + v[i] > Vs[i]) {
  //         Vs[i + 1] = Vs[j] + v[i];
  //         Ws[i + 1] = Ws[j] + w[i]
  //       } else {
  //         Vs[i + 1] = Vs[i];
  //         Ws[i + 1] = Ws[i];
  //       }
  //     }
  //   }
  // }

  // console.log({ V });
  // console.log(Vset);

  return Vset[N - 1][W];
}

console.log(knapsack([2, 1, 3, 4], [3, 3, 5, 7], 4, 4));
