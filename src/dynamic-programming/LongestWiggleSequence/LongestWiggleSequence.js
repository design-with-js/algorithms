/*
  Wiggle sequence is a sequence where you have an array with zig-zag order like [1, 10, 1, 10, 1, 10]
  If elements are equal then they arent part of wiggle sequence: 1,1,5,1 hence is not a wiggle sequence


  Find length of longest wiggle subsequence for a given array.
  Hint: Problem is kindof like Largest Increasing Subsequence
*/

export function wiggleMaxLength(nums) {
  let n = nums.length;

  if (n < 2) return n;

  let d = Array(n).fill(0);
  let diff = Array(n).fill(0);
  
  /*
    Base case: Ans(0) = 1, Ans(1) depends on values being equal or not.
    Diff is the difference array, diff[i] is the difference of ith element with last element of 
    LWS its part of.
  */

  d[0] = 1;
  d[1] = nums[0] == nums[1] ? 1 : 2;
  diff[1] = nums[1] - nums[0];


  for (let i = 2; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (diff[j] > 0 && d[i] < d[j] + 1) {
        if (nums[i] < nums[j]) {
          d[i] = d[j] + 1;
          diff[i] = nums[i] - nums[j];
        }
      }
      if (diff[j] < 0 && d[i] < d[j] + 1) {
        if (nums[i] > nums[j]) {
          d[i] = d[j] + 1;
          diff[i] = nums[i] - nums[j];
        }
      }
      if (diff[j] == 0) {
        if (nums[i] == nums[j] && d[i] < d[j]) {
          d[i] = d[j];
          diff[i] = 0;
        }
        if (nums[i] != nums[j] && d[i] < d[j] + 1) {
          d[i] = d[j] + 1;
          diff[i] = nums[i] - nums[j];
        }
      }
    }
  }
  let max = Number.MIN_SAFE_INTEGER;
  d.forEach(x => {
    max = x > max ? x : max;
  });
  return max;
}
