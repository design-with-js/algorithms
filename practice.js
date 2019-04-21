/**
 * Max increasing subarray: Finds the maximum length of increasing subarray of given array
 * @param  {number[]} nums [non empty array of integers]
 * @return {number}      [max length of increasing subarray]
 */
function maxIncSubarray(nums) {
  let n = nums.length,
    len = 0;

  let dp = Array(n).fill(0);

  // assume i

  dp[0] = len = 1;

  for (let i = 1; i < n; i++) {
    dp[i] = nums[i] > nums[i - 1] ? dp[i - 1] + 1 : 1;
    if (dp[i] > len) {
      len = dp[i];
    }
  }

  return len;
}

console.log(
  "max inc subarray of [5,2,3,4,1,2]",
  maxIncSubarray([5, 2, 3, 4, 1, 2])
);

/**
 * LIS: Longest Increasing Subsequence problem, to be solved in O(n^2) complexity
 * @param  {number[]} nums array of numbers, non empty
 * @return {number}      Length of longest increasing subsequence
 */
function maxIncSubsequence(nums) {
  let n = nums.length;

  let dp = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let len = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (dp[j] + 1 > len) {
          len = dp[j] + 1;
        }
      }
    }
    dp[i] = len;
  }

  return dp[n - 1];
}

console.log(
  "Largest increasing subsequence[1,4,2,3,5,6]",
  maxIncSubsequence([1, 4, 2, 3, 5, 6])
);

/**
 * From given array of integers, return maximum sum of a subarray
 * @param  {number[]} nums non empty array of integers
 * @return {number}      max sum of subarray of given array
 */
function maxSumSubarray(nums) {
  let sum = Number.MIN_SAFE_INTEGER;

  let dp = Array(nums.length).fill(0);

  dp[0] = nums[0];

  const max = (a, b) => (a > b ? a : b);

  for (var i = 1; i < nums.length; i++) {
    dp[i] = max(dp[i - 1] + nums[i], nums[i]);
    if (sum < dp[i]) {
      sum = dp[i];
    }
  }

  return sum;
}

/**
 * From given array of integers, return maximum sum of a subsequence
 * @param  {number[]} nums non empty array of integers
 * @return {number}      max sum of subsequene of the given array
 */
function maxSumSubsequence(nums) {
  let sum = Number.MIN_SAFE_INTEGER;
  let dp = Array(nums.length);

  const max = (a, b, c) => (a > b ? (a > c ? a : c) : b > c ? b : c);

  for (var i = 0; i < nums.length; i++) {
    dp[i] = max(dp[i - 1] + nums[i], dp[i - 1], nums[i]);
    if (sum < dp[i]) {
      sum = dp[i];
    }
  }

  return sum;
}

/**
 * Find maximum common subarray between two given arrays (or find length)
 * @param  {number[]} A non empty array of integers
 * @param  {number[]} B non empty array of integers
 * @return {number[]} Largest common subarray between the given arrays
 */
function maxCommonSubarray(a, b) {
  let m = a.length,
    n = b.length,
    MCS = [];

  let dp = Array(m + 1)
    .fill()
    .map(() =>
      Array(n + 1)
        .fill()
        .map(() => [])
    );
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (a[i] == b[j]) {
        dp[i + 1][j + 1] = dp[i][j].concat([a[i]]);
      }
      if (MCS.length < dp[i + 1][j + 1].length) {
        MCS = dp[i + 1][j + 1];
      }
    }
  }

  // console.log({ MCS });
  return MCS;
}

console.log(
  "Largest common subarray in [1, 2, 3, 5, 6, 7], [5, 6, 1, 2, 3]:",
  maxCommonSubarray([1, 2, 3, 5, 6, 7], [5, 6, 1, 2, 3])
);

/**
 * Find longest possible subsequence between two given arrays (or find its length)
 * @param  {number[]} a first non empty array
 * @param  {number[]} b second non empty array
 * @return {number[]}   Longest common subsequence array in a and b
 */
function maxCommonSubsequence(a, b) {
  let m = a.length,
    n = b.length,
    MCS = [];

  let dp = Array(m + 1)
    .fill()
    .map(() =>
      Array(n + 1)
        .fill()
        .map(() => [])
    );

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j + 1].length > dp[i + 1][j].length) {
        dp[i + 1][j + 1] = dp[i][j + 1];
      } else {
        dp[i + 1][j + 1] = dp[i + 1][j];
      }
      if (a[i] == b[j]) {
        dp[i + 1][j + 1] = dp[i][j].concat([a[i]]);
      }
    }
  }

  return dp[m][n];
}

console.log(
  "largest common subsequence in [1,9,2,8,3,0,3,7,4], [1,2,3,0,4,6,7,8,4,3,2]",
  maxCommonSubsequence(
    [1, 9, 2, 8, 3, 0, 3, 7, 4],
    [1, 2, 3, 0, 4, 6, 7, 8, 4, 3, 2]
  )
);

/**
 * Find the pair of indices from an array of integers where sum of values is equal to given K
 * @param  {number[]} nums non empty array of integers
 * @param  {K} K    desired sum that we need to obtain
 * @return {numbers[2]}      Pair of indices where values add up to sum = K
 */
function twoSum(nums, K) {
  let o = {};
  nums.forEach((num, i) => {
    o[num] = i;
  });

  let result = [], pairs = [];

  for (let i = 0; i < nums.length; i++) {
    if (o[K - nums[i]]) {
      result.push([i, o[K - nums[i]]]);
      pairs.push([nums[i], K-nums[i]]);
    }
  }
  console.log({pairs});
  return result;
}

console.log(
  "pair of indices where sum of values=5 in array [1,9,8,2,3,0,3,7,4]:",
  twoSum([1, 9, 8, 2, 3, 0, 3, 7, 4], 5)
);

/**
 * Find the triplet of indices from an array of integers where sum of values is equal to given K
 * @param  {number[]} nums non empty array of integers
 * @param  {K} K    desired sum that we need to obtain
 * @return {numbers[3]}      Triplet of indices where values add up to sum = K
 */
function threeSum(nums, K) {

}
