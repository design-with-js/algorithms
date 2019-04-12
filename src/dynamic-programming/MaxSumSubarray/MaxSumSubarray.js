/*
Maximum Sum Subarray:

Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.

(Hint: to be solved in linear time)

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

/*
Solution:

Take array sums = new Array(nums.length)

for(i = 1 to n-1) {
  sums[i] = max(sums[i - 1] + nums[i], nums[i]);
}
return max(…sums);
*/

function max(...args) {
  let m = Number.MIN_SAFE_INTEGER;
  args.forEach(arg => {
    m = arg > m ? arg : m;
  });
  return m;
}

export function MaxSumSubarray(nums) {
  const sums = Array(nums.length).fill(0);
  sums[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sums[i] = max(sums[i - 1] + nums[i], nums[i]);
  }

  return max(...sums);
}

// Should output 6
// eslint-disable-next-line
// console.log(MaxSumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
