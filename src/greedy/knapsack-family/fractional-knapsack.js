/**
 * In fractional knapsack problem, the items are divisble into fractions
 * suppose these items are vegetables, which can be cut into pieces to take in smaller quantities
 */

/**
 * Knapsack-fractional greedy solution
 * @param  {number} N Number of itms
 * @param  {number} W Weight limit
 * @param  {number[]} w weights array
 * @param  {number[]} v values array
 * @return {number[]}   quantity of items taken.
 */
function knapsack(N, W, w, v) {
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
        });

    // sort items with max elo first
    d.sort((d1, d2) => d2.elo - d1.elo);

    // covered weight
    let m = 0,
        profit = 0;

    d.forEach(di => {
        if (m + di.wt <= W) {
            m += di.wt;
            di.qty = 1;
        } else if (m + di.wt > W) {
            m += W - m;
            di.qty = (W - m) / di.wt;
        }
        profit += di.qty * di.vl;
    });

    console.log({ d, m, profit });

    return [profit, d.map(di => di.qty)];
}

console.log(knapsack(4, 4, [1, 2, 3, 1], [44, 88, 102, 48]));
