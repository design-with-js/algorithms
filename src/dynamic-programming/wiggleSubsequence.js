function(nums) {
    let maxLen = 0;
    function max(...args) {
        let max = Number.MIN_SAFE_INTEGER;
        args.forEach(arg => {
            max = max < arg ? arg : max;
        });
        return max;
    }

    let dp = Array(nums.length).fill(1);
    // let dpInc = dp.slice();
    // let dpDec = dp.slice();
    let isInc = Array(nums.length).fill(true);
    for (let i = 0; i < nums.length; i++) {
        for (var j = 0; j < i; j++) {
            if (nums[i] > nums[j] && (dp[j] == 1 || !isInc[j])) {
                dp[i] = max(dp[i], dp[j] + 1);
                isInc[i] = true;
                isInc[j] = false;
            }
            if (nums[i] < nums[j] && isInc[j]) {
                if (dp[i] < dp[j] + 1) {
                    isInc[i] = false;
                    dp[i] = dp[j] + 1;
                }
            }
        }
        maxLen = max(maxLen, dp[i]);
    }
    // console.log(dp, isInc);
    return maxLen;
}
