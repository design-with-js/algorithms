/**
 * Count all distinct possible subsequences in an array whose sum is given target
 *
 *
 * hint: 0,1 knapsack
 */

function countCombinationSum(nums, target) {
    let d = Array(nums.length)
        .fill()
        .map(() => Array(target + 1).fill(0));

    nums.forEach((num, i) => {
        if (num <= target) {
            d[i][num] = 1;
        }
    });

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j <= target; j++) {
            if (j >= nums[i]) {
                d[i][j] += d[i - 1][j - nums[i]];
            }
            d[i][j] += d[i - 1][j];
        }
    }

    console.log(d, d[nums.length - 1][target]);
}

countCombinationSum([1, 2, 3, 4, 5, 6], 6);
