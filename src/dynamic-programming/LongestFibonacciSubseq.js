function longestFibonacciSubseq(A) {
    let n = A.length;
    let dp = Array(n)
        .fill()
        .map(() => Array(n));
    let maxLen = 0;
    function max(a, b) {
        return a > b ? a : b;
    }
    let obj = {};

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            dp[i][j] = 2;
            let diff = A[j] - A[i];
            if (obj[diff] != undefined) {
                dp[i][j] = max(dp[i][j], dp[obj[diff]][i] + 1);
            }
            maxLen = max(maxLen, dp[i][j]);
        }
        obj[A[i]] = i;
    }
    return maxLen > 2 ? maxLen : 0;
}

console.log(longestFibonacciSubseq([1, 2, 3, 4, 5, 6, 7, 8]));
