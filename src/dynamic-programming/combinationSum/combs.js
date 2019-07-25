/**
 * Find all distinct possible subsequences in an array whose sum is given target
 *
 *
 * hint: 0,1 knapsack
 */

function combs(nums, target) {
    let d = Array(nums.length)
        .fill()
        .map(() =>
            Array(target + 1)
                .fill()
                .map(() => [])
        );

    nums.forEach((num, i) => {
        if (num <= target) {
            d[i][num] = [[num]];
        }
    });

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j <= target; j++) {
            // console.log(JSON.stringify(d));
            if (j >= nums[i]) {
                d[i][j] = d[i][j].concat(
                    d[i - 1][j - nums[i]].map(d => d.concat(nums[i]))
                );
            }
            d[i][j] = d[i][j].concat(d[i - 1][j]);
        }
    }

    console.log(d[nums.length - 1][target]);
}

combs([1, 2, 3, 4, 5, 6], 6);
