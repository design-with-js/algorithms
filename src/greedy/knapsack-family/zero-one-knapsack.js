/**
 * In fractional knapsack problem, the items are NOT divisble into fractions
 * suppose these items are coins, which can't be cut into pieces to take in smaller quantities
 */

// NOTE: PLEASE NOTE THAT THE GREEDY PROVIDE ONLY APPROXIMATE SOLUTION FOR THE PROBLEM
// NOT THE BEST SOLUTION

/**
 * Knapsack-fractional greedy solution
 * @param  {number} N Number of itms
 * @param  {number} W Weight limit
 * @param  {number[]} w weights array
 * @param  {number[]} v values array
 * @return {number[]}   quantity of items taken (either 0 or 1)
 */

function zoKnapsack(N, W, w, v) {
    // takde d = value/weight
    let d = Array(N)
        .fill()
        .map((_, i) => {
            return {
                elo: v[i] / w[i],
                wt: w[i],
                vl: v[i],
                qty: 0
            };
        })
        .sort((d1, d2) => d2.elo - d1.elo);

    let m = 0;
    let profit = 0;

    d.forEach(di => {
        if (m + di.wt <= W) {
            m += di.wt;
            di.qty = 1;
        }
    });

    console.log({ d, m, profit });

    return profit;
}
